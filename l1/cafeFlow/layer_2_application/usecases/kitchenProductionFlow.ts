/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/kitchenProductionFlow.ts" enhancement="_blank"/>

import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IOrderRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.js';
import type { Order, OrderItem, KitchenTicket, KitchenTicketStatus, OrderItemStatus } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/order.js';
import { canModifyItems } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/order.js';

// ---------------------------------------------------------------------------
// createKitchenTicket
// ---------------------------------------------------------------------------

export interface CreateKitchenTicketInput {
  orderId: string;
  orderItemIds: string[];
}

export interface CreateKitchenTicketOutput {
  kitchenTicketId: string;
  status: string;
}

export async function createKitchenTicket(
  ctx: RequestContext,
  input: CreateKitchenTicketInput,
): Promise<CreateKitchenTicketOutput> {
  return ctx.data.runInTransaction(async () => {
    const orders = resolveRepository<IOrderRepository>(ctx, 'Order');
    const now = ctx.clock.nowIso();

    const order = await orders.getById(input.orderId);
    if (!order) {
      throw new AppError('NOT_FOUND', `Order not found: ${input.orderId}`, 404, { orderId: input.orderId });
    }

    // KT-002: order must be in an active (modifiable) state
    if (!canModifyItems(order)) {
      throw new AppError('CONFLICT', `Order ${input.orderId} is not in a modifiable state (status: ${order.status}).`, 409, { orderId: input.orderId, orderStatus: order.status });
    }

    // KT-001 & KT-002: validate each item belongs to the order and has status 'new'
    const itemsById = new Map<string, OrderItem>(order.items.map((it) => [it.id, it]));
    const selectedItems: OrderItem[] = [];

    for (const itemId of input.orderItemIds) {
      const item = itemsById.get(itemId);
      if (!item) {
        throw new AppError('VALIDATION_ERROR', `Order item ${itemId} does not belong to order ${input.orderId}.`, 400, { orderItemId: itemId, ruleId: 'KT-002' });
      }
      if (item.status !== 'new') {
        throw new AppError('VALIDATION_ERROR', `Order item ${itemId} is not in 'new' status (current: ${item.status}).`, 400, { orderItemId: itemId, currentStatus: item.status, ruleId: 'KT-001' });
      }
      selectedItems.push(item);
    }

    if (selectedItems.length === 0) {
      throw new AppError('VALIDATION_ERROR', 'At least one order item in "new" status is required to create a kitchen ticket.', 400, { ruleId: 'KT-001' });
    }

    // KT-004: create kitchen ticket with status 'open'
    const kitchenTicketId = ctx.idGenerator.newId();
    const kitchenTicket: KitchenTicket = {
      kitchenTicketId,
      orderId: order.orderId,
      status: 'open',
      createdAt: now,
      updatedAt: now,
    };

    // KT-003: assign kitchenTicketId to each selected item and set status to 'sentToKitchen'
    for (const item of selectedItems) {
      item.kitchenTicketId = kitchenTicketId;
      item.status = 'sentToKitchen' as OrderItemStatus;
      item.updatedAt = now;
    }

    order.kitchenTicket = kitchenTicket;
    order.kitchenTicketId = kitchenTicketId;
    order.updatedAt = now;

    await orders.save(order);

    return { kitchenTicketId, status: kitchenTicket.status };
  });
}

// ---------------------------------------------------------------------------
// startPreparation
// ---------------------------------------------------------------------------

export interface StartPreparationInput {
  orderId: string;
  kitchenTicketId: string;
}

export interface StartPreparationOutput {
  kitchenTicketId: string;
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

    const ticket = order.kitchenTicket;
    if (!ticket || ticket.kitchenTicketId !== input.kitchenTicketId) {
      throw new AppError('NOT_FOUND', `Kitchen ticket ${input.kitchenTicketId} not found in order ${input.orderId}.`, 404, { kitchenTicketId: input.kitchenTicketId });
    }

    // KT-005: preparation can only start on a ticket with status 'open'
    if (ticket.status !== 'open') {
      throw new AppError('CONFLICT', `Kitchen ticket ${input.kitchenTicketId} is not in 'open' status (current: ${ticket.status}).`, 409, { kitchenTicketId: input.kitchenTicketId, currentStatus: ticket.status, ruleId: 'KT-005' });
    }

    // KT-007: transition ticket status from 'open' to 'inProgress'
    ticket.status = 'inProgress' as KitchenTicketStatus;
    ticket.updatedAt = now;

    // KT-006: set all linked order items to 'inPreparation'
    for (const item of order.items) {
      if (item.kitchenTicketId === input.kitchenTicketId) {
        item.status = 'inPreparation' as OrderItemStatus;
        item.updatedAt = now;
      }
    }

    order.updatedAt = now;
    await orders.save(order);

    return { kitchenTicketId: ticket.kitchenTicketId, status: ticket.status };
  });
}

// ---------------------------------------------------------------------------
// markItemsReady
// ---------------------------------------------------------------------------

export interface MarkItemsReadyInput {
  orderId: string;
  kitchenTicketId: string;
  orderItemIds: string[];
}

export interface MarkItemsReadyOutput {
  kitchenTicketId: string;
  status: string;
  allItemsReady: boolean;
}

export async function markItemsReady(
  ctx: RequestContext,
  input: MarkItemsReadyInput,
): Promise<MarkItemsReadyOutput> {
  return ctx.data.runInTransaction(async () => {
    const orders = resolveRepository<IOrderRepository>(ctx, 'Order');
    const now = ctx.clock.nowIso();

    const order = await orders.getById(input.orderId);
    if (!order) {
      throw new AppError('NOT_FOUND', `Order not found: ${input.orderId}`, 404, { orderId: input.orderId });
    }

    const ticket = order.kitchenTicket;
    if (!ticket || ticket.kitchenTicketId !== input.kitchenTicketId) {
      throw new AppError('NOT_FOUND', `Kitchen ticket ${input.kitchenTicketId} not found in order ${input.orderId}.`, 404, { kitchenTicketId: input.kitchenTicketId });
    }

    // Ticket must be 'inProgress' to mark items ready
    if (ticket.status !== 'inProgress') {
      throw new AppError('CONFLICT', `Kitchen ticket ${input.kitchenTicketId} is not in 'inProgress' status (current: ${ticket.status}).`, 409, { kitchenTicketId: input.kitchenTicketId, currentStatus: ticket.status });
    }

    const itemsById = new Map<string, OrderItem>(order.items.map((it) => [it.id, it]));

    // KT-008 & KT-009: validate each item belongs to the ticket and has status 'inPreparation'
    for (const itemId of input.orderItemIds) {
      const item = itemsById.get(itemId);
      if (!item) {
        throw new AppError('VALIDATION_ERROR', `Order item ${itemId} does not belong to order ${input.orderId}.`, 400, { orderItemId: itemId });
      }
      if (item.kitchenTicketId !== input.kitchenTicketId) {
        throw new AppError('VALIDATION_ERROR', `Order item ${itemId} does not belong to kitchen ticket ${input.kitchenTicketId}.`, 400, { orderItemId: itemId, ruleId: 'KT-009' });
      }
      if (item.status !== 'inPreparation') {
        throw new AppError('VALIDATION_ERROR', `Order item ${itemId} is not in 'inPreparation' status (current: ${item.status}).`, 400, { orderItemId: itemId, currentStatus: item.status, ruleId: 'KT-008' });
      }
    }

    // Set each specified item to 'ready'
    for (const itemId of input.orderItemIds) {
      const item = itemsById.get(itemId)!;
      item.status = 'ready' as OrderItemStatus;
      item.updatedAt = now;
    }

    // KT-010: check if all items linked to the ticket are now 'ready'
    const linkedItems = order.items.filter((it) => it.kitchenTicketId === input.kitchenTicketId);
    const allItemsReady = linkedItems.length > 0 && linkedItems.every((it) => it.status === 'ready');

    if (allItemsReady) {
      ticket.status = 'done' as KitchenTicketStatus;
      ticket.updatedAt = now;
    }

    order.updatedAt = now;
    await orders.save(order);

    return { kitchenTicketId: ticket.kitchenTicketId, status: ticket.status, allItemsReady };
  });
}

// ---------------------------------------------------------------------------
// voidKitchenTicket
// ---------------------------------------------------------------------------

export interface VoidKitchenTicketInput {
  orderId: string;
  kitchenTicketId: string;
}

export interface VoidKitchenTicketOutput {
  kitchenTicketId: string;
  status: string;
}

export async function voidKitchenTicket(
  ctx: RequestContext,
  input: VoidKitchenTicketInput,
): Promise<VoidKitchenTicketOutput> {
  return ctx.data.runInTransaction(async () => {
    const orders = resolveRepository<IOrderRepository>(ctx, 'Order');
    const now = ctx.clock.nowIso();

    const order = await orders.getById(input.orderId);
    if (!order) {
      throw new AppError('NOT_FOUND', `Order not found: ${input.orderId}`, 404, { orderId: input.orderId });
    }

    const ticket = order.kitchenTicket;
    if (!ticket || ticket.kitchenTicketId !== input.kitchenTicketId) {
      throw new AppError('NOT_FOUND', `Kitchen ticket ${input.kitchenTicketId} not found in order ${input.orderId}.`, 404, { kitchenTicketId: input.kitchenTicketId });
    }

    // KT-011: ticket can only be voided if status is 'open' or 'inProgress'
    if (ticket.status !== 'open' && ticket.status !== 'inProgress') {
      throw new AppError('CONFLICT', `Kitchen ticket ${input.kitchenTicketId} cannot be voided (current status: ${ticket.status}).`, 409, { kitchenTicketId: input.kitchenTicketId, currentStatus: ticket.status, ruleId: 'KT-011' });
    }

    // KT-013: transition ticket status to 'void'
    ticket.status = 'void' as KitchenTicketStatus;
    ticket.updatedAt = now;

    // KT-012: set all linked order items back to 'new' and clear kitchenTicketId
    for (const item of order.items) {
      if (item.kitchenTicketId === input.kitchenTicketId) {
        item.status = 'new' as OrderItemStatus;
        item.kitchenTicketId = null;
        item.updatedAt = now;
      }
    }

    order.updatedAt = now;
    await orders.save(order);

    return { kitchenTicketId: ticket.kitchenTicketId, status: ticket.status };
  });
}
