/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/dineInOrderLifecycle.ts" enhancement="_blank"/>

import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IOrderRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.js';
import type { Order, OrderStatus, OrderItem, KitchenTicket } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/order.js';
import { canTransitionOrder } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/order.js';

// ---------------------------------------------------------------------------
// sendToKitchen
// ---------------------------------------------------------------------------

export interface SendToKitchenInput {
  orderId: string;
  tableId?: string;
}

export interface SendToKitchenOutput {
  orderId: string;
  kitchenTicketId: string;
  status: string;
}

export async function sendToKitchen(ctx: RequestContext, input: SendToKitchenInput): Promise<SendToKitchenOutput> {
  return ctx.data.runInTransaction(async (tx) => {
    const orders = resolveRepository<IOrderRepository>(ctx, 'Order');
    const now = ctx.clock.nowIso();

    const order = await orders.getById(input.orderId);
    if (!order) {
      throw new AppError('NOT_FOUND', `Order not found: ${input.orderId}`, 404, { orderId: input.orderId });
    }

    if (!canTransitionOrder(order.status, 'sentToKitchen')) {
      throw new AppError('CONFLICT', `order-status-transition-draft-to-sentToKitchen: current status is '${order.status}', expected 'draft'.`, 409, { ruleId: 'order-status-transition-draft-to-sentToKitchen', currentStatus: order.status });
    }

    if (order.orderType !== 'mesa') {
      throw new AppError('VALIDATION_ERROR', 'sendToKitchen is only valid for dine-in (mesa) orders.', 400, { orderType: order.orderType });
    }

    const tableId = input.tableId ?? order.tableId;
    if (!tableId) {
      throw new AppError('VALIDATION_ERROR', 'tableId is required for dine-in orders.', 400, { orderId: order.orderId });
    }

    const tableDoc = await tx.mdmDocument.get({ mdmId: tableId });
    if (!tableDoc) {
      throw new AppError('NOT_FOUND', `MDM Table record not found: ${tableId}`, 404, { mdmId: tableId });
    }

    const tableDetails = tableDoc.details as Record<string, unknown>;
    if (tableDetails.status !== 'available') {
      throw new AppError('CONFLICT', `table-marked-occupied-on-send: table is not available (current status: '${tableDetails.status}').`, 409, { ruleId: 'table-marked-occupied-on-send', tableId, tableStatus: tableDetails.status });
    }

    const kitchenTicketId = ctx.idGenerator.newId();
    const kitchenTicket: KitchenTicket = {
      kitchenTicketId,
      orderId: order.orderId,
      status: 'open',
      createdAt: now,
      updatedAt: now,
    };

    order.kitchenTicket = kitchenTicket;
    order.kitchenTicketId = kitchenTicketId;
    order.status = 'sentToKitchen';
    order.updatedAt = now;

    for (const item of order.items) {
      item.status = 'sentToKitchen';
      item.kitchenTicketId = kitchenTicketId;
      item.updatedAt = now;
    }

    await tx.mdmDocument.put({
      record: {
        ...tableDoc,
        details: { ...tableDetails, status: 'occupied' },
      },
    });

    await orders.save(order);

    return {
      orderId: order.orderId,
      kitchenTicketId,
      status: order.status,
    };
  });
}

// ---------------------------------------------------------------------------
// markOrderReady
// ---------------------------------------------------------------------------

export interface MarkOrderReadyInput {
  orderId: string;
}

export interface MarkOrderReadyOutput {
  orderId: string;
  status: string;
  kitchenTicketStatus: string;
}

export async function markOrderReady(ctx: RequestContext, input: MarkOrderReadyInput): Promise<MarkOrderReadyOutput> {
  return ctx.data.runInTransaction(async () => {
    const orders = resolveRepository<IOrderRepository>(ctx, 'Order');
    const now = ctx.clock.nowIso();

    const order = await orders.getById(input.orderId);
    if (!order) {
      throw new AppError('NOT_FOUND', `Order not found: ${input.orderId}`, 404, { orderId: input.orderId });
    }

    if (order.status !== 'sentToKitchen' && order.status !== 'inPreparation') {
      throw new AppError('CONFLICT', `order-status-transition-sentToKitchen-or-inPreparation-to-ready: current status is '${order.status}', expected 'sentToKitchen' or 'inPreparation'.`, 409, { ruleId: 'order-status-transition-sentToKitchen-or-inPreparation-to-ready', currentStatus: order.status });
    }

    if (!canTransitionOrder(order.status, 'ready')) {
      throw new AppError('CONFLICT', `Cannot transition order from '${order.status}' to 'ready'.`, 409, { currentStatus: order.status });
    }

    if (order.kitchenTicket) {
      order.kitchenTicket.status = 'done';
      order.kitchenTicket.updatedAt = now;
    }

    order.status = 'ready';
    order.updatedAt = now;

    for (const item of order.items) {
      item.status = 'ready';
      item.updatedAt = now;
    }

    await orders.save(order);

    return {
      orderId: order.orderId,
      status: order.status,
      kitchenTicketStatus: order.kitchenTicket?.status ?? 'done',
    };
  });
}

// ---------------------------------------------------------------------------
// serveOrder
// ---------------------------------------------------------------------------

export interface ServeOrderInput {
  orderId: string;
}

export interface ServeOrderOutput {
  orderId: string;
  status: string;
}

export async function serveOrder(ctx: RequestContext, input: ServeOrderInput): Promise<ServeOrderOutput> {
  return ctx.data.runInTransaction(async () => {
    const orders = resolveRepository<IOrderRepository>(ctx, 'Order');
    const now = ctx.clock.nowIso();

    const order = await orders.getById(input.orderId);
    if (!order) {
      throw new AppError('NOT_FOUND', `Order not found: ${input.orderId}`, 404, { orderId: input.orderId });
    }

    if (!canTransitionOrder(order.status, 'served')) {
      throw new AppError('CONFLICT', `order-status-transition-ready-to-served: current status is '${order.status}', expected 'ready'.`, 409, { ruleId: 'order-status-transition-ready-to-served', currentStatus: order.status });
    }

    order.status = 'served';
    order.updatedAt = now;

    for (const item of order.items) {
      item.status = 'served';
      item.updatedAt = now;
    }

    await orders.save(order);

    return {
      orderId: order.orderId,
      status: order.status,
    };
  });
}

// ---------------------------------------------------------------------------
// closeOrder
// ---------------------------------------------------------------------------

export interface CloseOrderInput {
  orderId: string;
  tableId?: string;
}

export interface CloseOrderOutput {
  orderId: string;
  status: string;
  closedAt: string;
}

export async function closeOrder(ctx: RequestContext, input: CloseOrderInput): Promise<CloseOrderOutput> {
  return ctx.data.runInTransaction(async (tx) => {
    const orders = resolveRepository<IOrderRepository>(ctx, 'Order');
    const now = ctx.clock.nowIso();

    const order = await orders.getById(input.orderId);
    if (!order) {
      throw new AppError('NOT_FOUND', `Order not found: ${input.orderId}`, 404, { orderId: input.orderId });
    }

    if (!canTransitionOrder(order.status, 'closed')) {
      throw new AppError('CONFLICT', `order-status-transition-served-to-closed: current status is '${order.status}', expected 'served'.`, 409, { ruleId: 'order-status-transition-served-to-closed', currentStatus: order.status });
    }

    order.status = 'closed';
    order.closedAt = now;
    order.updatedAt = now;

    if (order.orderType === 'mesa') {
      const tableId = input.tableId ?? order.tableId;
      if (tableId) {
        const tableDoc = await tx.mdmDocument.get({ mdmId: tableId });
        if (tableDoc) {
          const tableDetails = tableDoc.details as Record<string, unknown>;
          await tx.mdmDocument.put({
            record: {
              ...tableDoc,
              details: { ...tableDetails, status: 'available' },
            },
          });
        }
      }
    }

    await orders.save(order);

    return {
      orderId: order.orderId,
      status: order.status,
      closedAt: order.closedAt,
    };
  });
}

// ---------------------------------------------------------------------------
// cancelOrder
// ---------------------------------------------------------------------------

export interface CancelOrderInput {
  orderId: string;
  cancellationReason?: string;
  tableId?: string;
}

export interface CancelOrderOutput {
  orderId: string;
  status: string;
  cancelledAt: string;
}

export async function cancelOrder(ctx: RequestContext, input: CancelOrderInput): Promise<CancelOrderOutput> {
  return ctx.data.runInTransaction(async (tx) => {
    const orders = resolveRepository<IOrderRepository>(ctx, 'Order');
    const now = ctx.clock.nowIso();

    const order = await orders.getById(input.orderId);
    if (!order) {
      throw new AppError('NOT_FOUND', `Order not found: ${input.orderId}`, 404, { orderId: input.orderId });
    }

    if (order.status === 'closed' || order.status === 'cancelled') {
      throw new AppError('CONFLICT', `order-cancel-not-allowed-if-closed-or-cancelled: current status is '${order.status}'.`, 409, { ruleId: 'order-cancel-not-allowed-if-closed-or-cancelled', currentStatus: order.status });
    }

    if (!canTransitionOrder(order.status, 'cancelled')) {
      throw new AppError('CONFLICT', `Cannot transition order from '${order.status}' to 'cancelled'.`, 409, { currentStatus: order.status });
    }

    order.status = 'cancelled';
    order.cancelledAt = now;
    order.cancellationReason = input.cancellationReason ?? null;
    order.updatedAt = now;

    if (order.kitchenTicket) {
      order.kitchenTicket.status = 'void';
      order.kitchenTicket.updatedAt = now;
    }

    for (const item of order.items) {
      item.status = 'cancelled';
      item.updatedAt = now;
    }

    if (order.orderType === 'mesa') {
      const tableId = input.tableId ?? order.tableId;
      if (tableId) {
        const tableDoc = await tx.mdmDocument.get({ mdmId: tableId });
        if (tableDoc) {
          const tableDetails = tableDoc.details as Record<string, unknown>;
          await tx.mdmDocument.put({
            record: {
              ...tableDoc,
              details: { ...tableDetails, status: 'available' },
            },
          });
        }
      }
    }

    await orders.save(order);

    return {
      orderId: order.orderId,
      status: order.status,
      cancelledAt: order.cancelledAt,
    };
  });
}
