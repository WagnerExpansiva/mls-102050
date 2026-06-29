/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/takeoutOrderLifecycle.ts" enhancement="_blank"/>

import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IOrderRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.js';
import type { Order, OrderItem, OrderStatus, OrderItemStatus, KitchenTicket, KitchenTicketStatus, OrderType } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/order.js';
import { canTransitionOrder, orderRequiresItem, recomputeOrderTotal } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/order.js';

// ---------------------------------------------------------------------------
// createTakeoutOrder
// ---------------------------------------------------------------------------

export interface CreateTakeoutOrderItemInput {
  menuItemId: string;
  quantity: number;
  unitPrice: number;
  observations?: string;
}

export interface CreateTakeoutOrderInput {
  dailyShiftId: string;
  customerName?: string;
  customerPhone?: string;
  notes?: string;
  items: CreateTakeoutOrderItemInput[];
}

export interface CreateTakeoutOrderOutput {
  orderId: string;
  status: string;
}

export async function createTakeoutOrder(
  ctx: RequestContext,
  input: CreateTakeoutOrderInput,
): Promise<CreateTakeoutOrderOutput> {
  return ctx.data.runInTransaction(async () => {
    const orders = resolveRepository<IOrderRepository>(ctx, 'Order');
    const now = ctx.clock.nowIso();

    const items: OrderItem[] = (input.items ?? []).map((it) => ({
      id: ctx.idGenerator.newId(),
      orderId: '',
      menuItemId: it.menuItemId,
      kitchenTicketId: null,
      quantity: it.quantity,
      unitPrice: it.unitPrice,
      totalPrice: it.quantity * it.unitPrice,
      observations: it.observations ?? null,
      status: 'new' as OrderItemStatus,
      createdAt: now,
      updatedAt: now,
    }));

    const orderId = ctx.idGenerator.newId();
    for (const item of items) {
      item.orderId = orderId;
    }

    const order: Order = {
      orderId,
      dailyShiftId: input.dailyShiftId,
      tableId: null,
      kitchenTicketId: null,
      orderType: 'takeout' as OrderType,
      status: 'draft' as OrderStatus,
      totalAmount: recomputeOrderTotal(items),
      notes: input.notes ?? null,
      customerName: input.customerName ?? null,
      customerPhone: input.customerPhone ?? null,
      numberOfGuests: null,
      closedAt: null,
      cancelledAt: null,
      cancellationReason: null,
      items,
      kitchenTicket: null,
      createdAt: now,
      updatedAt: now,
    };

    if (!orderRequiresItem(order)) {
      throw new AppError(
        'VALIDATION_ERROR',
        'orderRequiresItem: o pedido precisa de ao menos um item.',
        400,
        { ruleId: 'orderRequiresItem' },
      );
    }

    await orders.save(order);
    return { orderId: order.orderId, status: order.status };
  });
}

// ---------------------------------------------------------------------------
// sendToKitchen
// ---------------------------------------------------------------------------

export interface SendToKitchenInput {
  orderId: string;
}

export interface SendToKitchenOutput {
  orderId: string;
  kitchenTicketId: string;
  status: string;
}

export async function sendToKitchen(
  ctx: RequestContext,
  input: SendToKitchenInput,
): Promise<SendToKitchenOutput> {
  return ctx.data.runInTransaction(async () => {
    const orders = resolveRepository<IOrderRepository>(ctx, 'Order');
    const now = ctx.clock.nowIso();

    const order = await orders.getById(input.orderId);
    if (!order) {
      throw new AppError('NOT_FOUND', `Order not found: ${input.orderId}`, 404, { orderId: input.orderId });
    }

    if (!canTransitionOrder(order.status, 'sentToKitchen')) {
      throw new AppError(
        'CONFLICT',
        `Order status must be 'draft' to send to kitchen (current: ${order.status}).`,
        409,
        { currentStatus: order.status, expectedStatus: 'draft' },
      );
    }

    const kitchenTicketId = ctx.idGenerator.newId();
    const kitchenTicket: KitchenTicket = {
      kitchenTicketId,
      orderId: order.orderId,
      status: 'open' as KitchenTicketStatus,
      createdAt: now,
      updatedAt: now,
    };

    order.kitchenTicketId = kitchenTicketId;
    order.kitchenTicket = kitchenTicket;
    order.status = 'sentToKitchen' as OrderStatus;

    for (const item of order.items) {
      item.kitchenTicketId = kitchenTicketId;
      item.status = 'sentToKitchen' as OrderItemStatus;
      item.updatedAt = now;
    }

    order.updatedAt = now;
    await orders.save(order);

    return { orderId: order.orderId, kitchenTicketId, status: order.status };
  });
}

// ---------------------------------------------------------------------------
// startPreparation
// ---------------------------------------------------------------------------

export interface StartPreparationInput {
  orderId: string;
}

export interface StartPreparationOutput {
  orderId: string;
  status: string;
}

export async function startPreparation(
  ctx: RequestContext,
  input: StartPreparationInput,
): Promise<StartPreparationOutput> {
  return ctx.data.runInTransaction(async () => {
    const orders = resolveRepository<IOrderRepository>(ctx, 'Order');
    const now = ctx.clock.nowIso();

    const order = await orders.getById(input.orderId);
    if (!order) {
      throw new AppError('NOT_FOUND', `Order not found: ${input.orderId}`, 404, { orderId: input.orderId });
    }

    if (!canTransitionOrder(order.status, 'inPreparation')) {
      throw new AppError(
        'CONFLICT',
        `Order status must be 'sentToKitchen' to start preparation (current: ${order.status}).`,
        409,
        { currentStatus: order.status, expectedStatus: 'sentToKitchen' },
      );
    }

    if (order.kitchenTicket) {
      order.kitchenTicket.status = 'inProgress' as KitchenTicketStatus;
      order.kitchenTicket.updatedAt = now;
    }

    for (const item of order.items) {
      item.status = 'inPreparation' as OrderItemStatus;
      item.updatedAt = now;
    }

    order.status = 'inPreparation' as OrderStatus;
    order.updatedAt = now;
    await orders.save(order);

    return { orderId: order.orderId, status: order.status };
  });
}

// ---------------------------------------------------------------------------
// markReady
// ---------------------------------------------------------------------------

export interface MarkReadyInput {
  orderId: string;
}

export interface MarkReadyOutput {
  orderId: string;
  status: string;
}

export async function markReady(
  ctx: RequestContext,
  input: MarkReadyInput,
): Promise<MarkReadyOutput> {
  return ctx.data.runInTransaction(async () => {
    const orders = resolveRepository<IOrderRepository>(ctx, 'Order');
    const now = ctx.clock.nowIso();

    const order = await orders.getById(input.orderId);
    if (!order) {
      throw new AppError('NOT_FOUND', `Order not found: ${input.orderId}`, 404, { orderId: input.orderId });
    }

    if (!canTransitionOrder(order.status, 'ready')) {
      throw new AppError(
        'CONFLICT',
        `Order status must be 'inPreparation' to mark ready (current: ${order.status}).`,
        409,
        { currentStatus: order.status, expectedStatus: 'inPreparation' },
      );
    }

    if (order.kitchenTicket) {
      order.kitchenTicket.status = 'done' as KitchenTicketStatus;
      order.kitchenTicket.updatedAt = now;
    }

    for (const item of order.items) {
      item.status = 'ready' as OrderItemStatus;
      item.updatedAt = now;
    }

    order.status = 'ready' as OrderStatus;
    order.updatedAt = now;
    await orders.save(order);

    return { orderId: order.orderId, status: order.status };
  });
}

// ---------------------------------------------------------------------------
// closeOrder
// ---------------------------------------------------------------------------

export interface CloseOrderInput {
  orderId: string;
}

export interface CloseOrderOutput {
  orderId: string;
  status: string;
  closedAt: string;
}

export async function closeOrder(
  ctx: RequestContext,
  input: CloseOrderInput,
): Promise<CloseOrderOutput> {
  return ctx.data.runInTransaction(async () => {
    const orders = resolveRepository<IOrderRepository>(ctx, 'Order');
    const now = ctx.clock.nowIso();

    const order = await orders.getById(input.orderId);
    if (!order) {
      throw new AppError('NOT_FOUND', `Order not found: ${input.orderId}`, 404, { orderId: input.orderId });
    }

    if (order.status !== 'ready' && order.status !== 'served') {
      throw new AppError(
        'CONFLICT',
        `Order status must be 'ready' or 'served' to close (current: ${order.status}).`,
        409,
        { currentStatus: order.status },
      );
    }

    const allItemsReadyOrServed = order.items.every(
      (item) => item.status === 'ready' || item.status === 'served',
    );
    if (!allItemsReadyOrServed) {
      throw new AppError(
        'VALIDATION_ERROR',
        'All OrderItems must be \'ready\' or \'served\' to close the order.',
        400,
        { ruleId: 'allItemsReadyOrServed' },
      );
    }

    order.status = 'closed' as OrderStatus;
    order.closedAt = now;
    order.updatedAt = now;
    await orders.save(order);

    return { orderId: order.orderId, status: order.status, closedAt: order.closedAt };
  });
}

// ---------------------------------------------------------------------------
// cancelOrder
// ---------------------------------------------------------------------------

export interface CancelOrderInput {
  orderId: string;
  cancellationReason: string;
}

export interface CancelOrderOutput {
  orderId: string;
  status: string;
  cancelledAt: string;
}

export async function cancelOrder(
  ctx: RequestContext,
  input: CancelOrderInput,
): Promise<CancelOrderOutput> {
  return ctx.data.runInTransaction(async () => {
    const orders = resolveRepository<IOrderRepository>(ctx, 'Order');
    const now = ctx.clock.nowIso();

    const order = await orders.getById(input.orderId);
    if (!order) {
      throw new AppError('NOT_FOUND', `Order not found: ${input.orderId}`, 404, { orderId: input.orderId });
    }

    if (order.status === 'closed' || order.status === 'cancelled') {
      throw new AppError(
        'CONFLICT',
        `Order status must not be 'closed' or 'cancelled' to cancel (current: ${order.status}).`,
        409,
        { currentStatus: order.status },
      );
    }

    if (order.kitchenTicket) {
      order.kitchenTicket.status = 'void' as KitchenTicketStatus;
      order.kitchenTicket.updatedAt = now;
    }

    for (const item of order.items) {
      if (item.status !== 'served') {
        item.status = 'cancelled' as OrderItemStatus;
        item.updatedAt = now;
      }
    }

    order.status = 'cancelled' as OrderStatus;
    order.cancelledAt = now;
    order.cancellationReason = input.cancellationReason;
    order.updatedAt = now;
    await orders.save(order);

    return { orderId: order.orderId, status: order.status, cancelledAt: order.cancelledAt };
  });
}
