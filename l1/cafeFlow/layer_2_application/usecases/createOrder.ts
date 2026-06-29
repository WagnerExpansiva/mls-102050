/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/createOrder.ts" enhancement="_blank"/>

import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IOrderRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.js';
import type { IDailyShiftRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.js';
import type { Order, OrderType } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/order.js';
import {
  validateTableIdForOrderType,
  validateNumberOfGuests,
} from '/_102050_/l1/cafeFlow/layer_3_domain/entities/order.js';
import { canCreateOrderForShift } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.js';

export interface CreateOrderInput {
  dailyShiftId: string;
  tableId?: string;
  orderType: string;
  notes?: string;
  customerName?: string;
  customerPhone?: string;
  numberOfGuests?: number;
}

export interface CreateOrderOutput {
  orderId: string;
  status: string;
  totalAmount: number;
  tableStatus?: string;
}

export async function createOrder(
  ctx: RequestContext,
  input: CreateOrderInput,
): Promise<CreateOrderOutput> {
  const orders = resolveRepository<IOrderRepository>(ctx, 'Order');
  const dailyShifts = resolveRepository<IDailyShiftRepository>(ctx, 'DailyShift');
  const now = ctx.clock.nowIso();

  // ── Step 1: Load DailyShift and validate it is open ──────────────────────
  const shift = await dailyShifts.getById(input.dailyShiftId);
  if (!shift) {
    throw new AppError(
      'NOT_FOUND',
      `DailyShift not found: ${input.dailyShiftId}`,
      404,
      { dailyShiftId: input.dailyShiftId },
    );
  }
  if (!canCreateOrderForShift(shift)) {
    throw new AppError(
      'CONFLICT',
      'Cannot create order for a closed shift.',
      409,
      {
        ruleId: 'canCreateOrderForShift',
        dailyShiftId: input.dailyShiftId,
        shiftStatus: shift.status,
      },
    );
  }

  // ── Validate orderType ───────────────────────────────────────────────────
  const orderType = input.orderType as OrderType;
  if (orderType !== 'mesa' && orderType !== 'takeout') {
    throw new AppError(
      'VALIDATION_ERROR',
      `Invalid orderType: "${input.orderType}". Must be "mesa" or "takeout".`,
      400,
      { orderType: input.orderType },
    );
  }

  // ── Steps 2 & 3: Table validation (tableOccupancyConsistency) ────────────
  let tableRecord: Record<string, unknown> | null = null;

  if (orderType === 'mesa') {
    if (!input.tableId) {
      throw new AppError(
        'VALIDATION_ERROR',
        'tableId is required when orderType is "mesa".',
        400,
        { ruleId: 'tableOccupancyConsistency' },
      );
    }
    const doc = await ctx.data.mdmDocument.get({ mdmId: input.tableId });
    if (!doc) {
      throw new AppError(
        'NOT_FOUND',
        `Table master-data record not found: ${input.tableId}`,
        404,
        { mdmId: input.tableId },
      );
    }
    tableRecord = doc as unknown as Record<string, unknown>;
    const tableDetails = (tableRecord.details ?? {}) as Record<string, unknown>;
    if (tableDetails.status !== 'available') {
      throw new AppError(
        'CONFLICT',
        `Table ${input.tableId} is not available (current status: ${tableDetails.status}).`,
        409,
        {
          ruleId: 'tableOccupancyConsistency',
          tableId: input.tableId,
          currentStatus: tableDetails.status,
        },
      );
    }
  } else if (orderType === 'takeout') {
    if (input.tableId) {
      throw new AppError(
        'VALIDATION_ERROR',
        'tableId must be null when orderType is "takeout".',
        400,
        { orderType, tableId: input.tableId },
      );
    }
  }

  // ── Step 4: Create Order aggregate (orderStatusTransitions — initial 'draft') ─
  const order: Order = {
    orderId: ctx.idGenerator.newId(),
    dailyShiftId: input.dailyShiftId,
    tableId: input.tableId ?? null,
    kitchenTicketId: null,
    orderType,
    status: 'draft',
    totalAmount: 0,
    notes: input.notes ?? null,
    customerName: input.customerName ?? null,
    customerPhone: input.customerPhone ?? null,
    numberOfGuests: input.numberOfGuests ?? null,
    closedAt: null,
    cancelledAt: null,
    cancellationReason: null,
    items: [],
    kitchenTicket: null,
    createdAt: now,
    updatedAt: now,
  };

  // ── Domain invariant validation ──────────────────────────────────────────
  if (!validateTableIdForOrderType(order)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'validateTableIdForOrderType: tableId is inconsistent with orderType.',
      400,
      { ruleId: 'validateTableIdForOrderType' },
    );
  }
  if (!validateNumberOfGuests(order)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'validateNumberOfGuests: numberOfGuests must be greater than 0.',
      400,
      { ruleId: 'validateNumberOfGuests' },
    );
  }

  // ── Step 5: paymentTimingByOrderType ─────────────────────────────────────
  //  'takeout' → payment expected immediately; 'mesa' → payment deferred until close.
  //  No explicit metadata field on the Order entity in this version; the rule is
  //  enforced downstream by the payment usecase based on orderType.

  // ── Step 6: aiOutputLanguageSelection ────────────────────────────────────
  //  Language for AI-generated kitchen ticket output is determined from shift or
  //  tenant configuration. No config field is available in the current entity
  //  model; defaults to 'pt-BR' and will be resolved when the kitchen ticket is
  //  generated (on transition to 'sentToKitchen').

  // ── Step 7: ingredientConsumptionTrigger ─────────────────────────────────
  //  Registered but NOT fired on create — fires when status transitions to
  //  'sentToKitchen'.

  // ── Steps 8 & 9: Save order + update table status (transactional) ────────
  let tableStatus: string | undefined;

  await ctx.data.runInTransaction(async (tx) => {
    // Step 8: Save Order via Order port
    await orders.save(order);

    // Step 9: If mesa, update Table MDM status to 'occupied'
    if (orderType === 'mesa' && tableRecord) {
      const updatedRecord = {
        ...tableRecord,
        details: {
          ...(tableRecord.details as Record<string, unknown>),
          status: 'occupied',
        },
      };
      await tx.mdmDocument.put({ record: updatedRecord as never });
      tableStatus = 'occupied';
    }
  });

  // ── Step 10: Return result ───────────────────────────────────────────────
  const result: CreateOrderOutput = {
    orderId: order.orderId,
    status: order.status,
    totalAmount: order.totalAmount,
  };
  if (tableStatus !== undefined) {
    result.tableStatus = tableStatus;
  }
  return result;
}
