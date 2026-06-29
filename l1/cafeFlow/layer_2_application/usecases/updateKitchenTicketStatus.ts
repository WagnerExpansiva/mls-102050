/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/updateKitchenTicketStatus.ts" enhancement="_blank"/>

import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IOrderRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.js';
import type { KitchenTicketStatus, KitchenTicket } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/order.js';

export interface UpdateKitchenTicketStatusInput {
  orderId: string;
  kitchenTicketId: string;
  status: string;
}

export interface UpdateKitchenTicketStatusOutput {
  orderId: string;
  kitchenTicketId: string;
  status: string;
  updatedAt: string;
}

const KITCHEN_TICKET_STATUS_TRANSITIONS: Record<KitchenTicketStatus, KitchenTicketStatus[]> = {
  open: ['inProgress', 'void'],
  inProgress: ['done', 'void'],
  done: [],
  void: [],
};

function canTransitionKitchenTicket(from: KitchenTicketStatus, to: KitchenTicketStatus): boolean {
  return KITCHEN_TICKET_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

function isKitchenTicketStatus(value: string): value is KitchenTicketStatus {
  return value === 'open' || value === 'inProgress' || value === 'done' || value === 'void';
}

export async function updateKitchenTicketStatus(
  ctx: RequestContext,
  input: UpdateKitchenTicketStatusInput,
): Promise<UpdateKitchenTicketStatusOutput> {
  if (!isKitchenTicketStatus(input.status)) {
    throw new AppError(
      'VALIDATION_ERROR',
      `Invalid kitchen ticket status: ${input.status}`,
      400,
      { field: 'status', value: input.status },
    );
  }

  const orders = resolveRepository<IOrderRepository>(ctx, 'Order');
  const now = ctx.clock.nowIso();

  return ctx.data.runInTransaction(async () => {
    const order = await orders.getById(input.orderId);

    const ticket: KitchenTicket | null = order.kitchenTicket;
    if (!ticket || ticket.kitchenTicketId !== input.kitchenTicketId) {
      throw new AppError(
        'NOT_FOUND',
        `Kitchen ticket not found: ${input.kitchenTicketId} in order ${input.orderId}`,
        404,
        { orderId: input.orderId, kitchenTicketId: input.kitchenTicketId },
      );
    }

    const newStatus = input.status as KitchenTicketStatus;

    if (!canTransitionKitchenTicket(ticket.status, newStatus)) {
      throw new AppError(
        'CONFLICT',
        `Invalid status transition from "${ticket.status}" to "${newStatus}" for kitchen ticket ${input.kitchenTicketId}`,
        409,
        { ruleId: 'orderStatusTransitions', from: ticket.status, to: newStatus },
      );
    }

    ticket.status = newStatus;
    ticket.updatedAt = now;
    order.updatedAt = now;

    await orders.save(order);

    return {
      orderId: order.orderId,
      kitchenTicketId: ticket.kitchenTicketId,
      status: ticket.status,
      updatedAt: ticket.updatedAt,
    };
  });
}
