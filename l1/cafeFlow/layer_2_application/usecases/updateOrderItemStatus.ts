/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/updateOrderItemStatus.ts" enhancement="_blank"/>

import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IOrderRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.js';
import type { Order, OrderItem, OrderItemStatus } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/order.js';
import { canModifyItems } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/order.js';

const ORDER_ITEM_STATUS_TRANSITIONS: Record<OrderItemStatus, OrderItemStatus[]> = {
  new: ['sentToKitchen', 'cancelled'],
  sentToKitchen: ['inPreparation', 'cancelled'],
  inPreparation: ['ready', 'cancelled'],
  ready: ['served', 'cancelled'],
  served: ['cancelled'],
  cancelled: [],
};

const VALID_ITEM_STATUSES: OrderItemStatus[] = [
  'new', 'sentToKitchen', 'inPreparation', 'ready', 'served', 'cancelled',
];

function canTransitionItemStatus(from: OrderItemStatus, to: OrderItemStatus): boolean {
  return ORDER_ITEM_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

export interface UpdateOrderItemStatusInput {
  orderId: string;
  orderItemId: string;
  status: string;
}

export interface UpdateOrderItemStatusOutput {
  orderId: string;
  orderItemId: string;
  status: string;
  updatedAt: string;
}

export async function updateOrderItemStatus(
  ctx: RequestContext,
  input: UpdateOrderItemStatusInput,
): Promise<UpdateOrderItemStatusOutput> {
  const orders = resolveRepository<IOrderRepository>(ctx, 'Order');
  const now = ctx.clock.nowIso();

  // Validate that the requested status is a known OrderItemStatus
  if (!VALID_ITEM_STATUSES.includes(input.status as OrderItemStatus)) {
    throw new AppError(
      'VALIDATION_ERROR',
      `Invalid order item status: "${input.status}". Valid statuses: ${VALID_ITEM_STATUSES.join(', ')}.`,
      400,
      { field: 'status', value: input.status },
    );
  }

  const newStatus = input.status as OrderItemStatus;

  return ctx.data.runInTransaction(async () => {
    // 1. Load the parent Order aggregate
    const order = await orders.getById(input.orderId);

    // 2. Ensure the order is in a modifiable state
    if (!canModifyItems(order)) {
      throw new AppError(
        'CONFLICT',
        `Order "${input.orderId}" is in status "${order.status}" and cannot be modified.`,
        409,
        { orderId: input.orderId, orderStatus: order.status },
      );
    }

    // 3. Find the OrderItem within the Order's items collection
    const itemIndex = order.items.findIndex((it) => it.id === input.orderItemId);
    if (itemIndex === -1) {
      throw new AppError(
        'NOT_FOUND',
        `OrderItem "${input.orderItemId}" not found in Order "${input.orderId}".`,
        404,
        { orderId: input.orderId, orderItemId: input.orderItemId },
      );
    }

    const item = order.items[itemIndex];

    // 4. Validate the status transition (orderStatusTransitions rule)
    if (item.status === 'cancelled') {
      throw new AppError(
        'CONFLICT',
        `OrderItem "${input.orderItemId}" is already cancelled (terminal status).`,
        409,
        { orderItemId: input.orderItemId, currentStatus: item.status },
      );
    }

    if (!canTransitionItemStatus(item.status, newStatus)) {
      throw new AppError(
        'CONFLICT',
        `Invalid status transition for OrderItem "${input.orderItemId}": "${item.status}" → "${newStatus}". Allowed: ${ORDER_ITEM_STATUS_TRANSITIONS[item.status].join(', ') || '(none)'}.`,
        409,
        {
          orderItemId: input.orderItemId,
          from: item.status,
          to: newStatus,
          allowed: ORDER_ITEM_STATUS_TRANSITIONS[item.status],
        },
      );
    }

    // 5. Apply the new status and update timestamps
    const updatedItem: OrderItem = {
      ...item,
      status: newStatus,
      updatedAt: now,
    };
    order.items[itemIndex] = updatedItem;
    order.updatedAt = now;

    // 6. ingredientConsumptionTrigger: when the item enters "inPreparation",
    //    ingredient consumption should be triggered for the menuItemId and quantity.
    //    No ingredient port is declared in this usecase, so this is the trigger point
    //    where an event or downstream consumer would pick up the consumption.
    if (newStatus === 'inPreparation') {
      ctx.log.info('ingredientConsumptionTrigger', {
        orderId: order.orderId,
        orderItemId: updatedItem.id,
        menuItemId: updatedItem.menuItemId,
        quantity: updatedItem.quantity,
      });
    }

    // 7. Save the parent Order aggregate
    await orders.save(order);

    // 8. Return the result
    return {
      orderId: order.orderId,
      orderItemId: updatedItem.id,
      status: updatedItem.status,
      updatedAt: updatedItem.updatedAt,
    };
  });
}
