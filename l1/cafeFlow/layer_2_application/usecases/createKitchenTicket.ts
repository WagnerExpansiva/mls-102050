/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/createKitchenTicket.ts" enhancement="_blank"/>

import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IOrderRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.js';
import type { Order, KitchenTicket } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/order.js';
import { canTransitionOrder } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/order.js';

export interface CreateKitchenTicketInput {
  orderId: string;
}

export interface CreateKitchenTicketOutput {
  kitchenTicketId: string;
  orderId: string;
  status: string;
  orderStatus: string;
}

export async function createKitchenTicket(
  ctx: RequestContext,
  input: CreateKitchenTicketInput,
): Promise<CreateKitchenTicketOutput> {
  return ctx.data.runInTransaction(async () => {
    const orders = resolveRepository<IOrderRepository>(ctx, 'Order');
    const now = ctx.clock.nowIso();

    // 1. Load the order
    const order = await orders.getById(input.orderId);

    // 2. Validate order status is 'draft' and can transition to 'sentToKitchen'
    if (order.status !== 'draft') {
      throw new AppError(
        'CONFLICT',
        `createKitchenTicket: o pedido deve estar em status 'draft' (atual: '${order.status}').`,
        409,
        { ruleId: 'orderStatusTransitions', currentStatus: order.status },
      );
    }

    if (!canTransitionOrder(order.status, 'sentToKitchen')) {
      throw new AppError(
        'CONFLICT',
        `createKitchenTicket: transição de status inválida de '${order.status}' para 'sentToKitchen'.`,
        409,
        { ruleId: 'orderStatusTransitions', from: order.status, to: 'sentToKitchen' },
      );
    }

    // 3. Generate kitchen ticket
    const kitchenTicketId = ctx.idGenerator.newId();

    const kitchenTicket: KitchenTicket = {
      kitchenTicketId,
      orderId: order.orderId,
      status: 'open',
      createdAt: now,
      updatedAt: now,
    };

    // 4. Assign kitchenTicketId to Order
    order.kitchenTicketId = kitchenTicketId;
    order.kitchenTicket = kitchenTicket;

    // 5. Assign kitchenTicketId to every OrderItem and set status to 'sentToKitchen'
    for (const item of order.items) {
      item.kitchenTicketId = kitchenTicketId;
      item.status = 'sentToKitchen';
      item.updatedAt = now;
    }

    // 6. Transition Order.status from 'draft' to 'sentToKitchen'
    order.status = 'sentToKitchen';

    // 7. Update Order.updatedAt
    order.updatedAt = now;

    // 8. Save Order (with embedded KitchenTicket and updated OrderItems)
    await orders.save(order);

    // 9. Return result
    return {
      kitchenTicketId,
      orderId: order.orderId,
      status: kitchenTicket.status,
      orderStatus: order.status,
    };
  });
}
