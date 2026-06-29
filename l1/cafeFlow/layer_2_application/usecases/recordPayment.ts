/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/recordPayment.ts" enhancement="_blank"/>

import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';

import type { IPaymentRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/paymentRepository.js';
import type { IOrderRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.js';
import type { IDailyShiftRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.js';

import type { Payment, PaymentStatus } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/payment.js';
import { paymentAmountIsValid, paymentMethodIsValid, validatePaymentInvariants } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/payment.js';
import type { Order, OrderType, OrderStatus } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/order.js';
import type { DailyShift } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.js';
import { canCreateOrderForShift } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.js';

export interface RecordPaymentInput {
  orderId: string;
  dailyShiftId: string;
  method: string;
  amount: number;
  status: string;
}

export interface RecordPaymentOutput {
  paymentId: string;
  status: string;
}

/**
 * paymentTimingByOrderType rule:
 * - The order must not be cancelled or still in draft.
 * - For `mesa` (dine-in) orders, payment is allowed once the order has reached
 *   `served` or `closed` (the customer is done eating).
 * - For `takeout` orders, payment is allowed once the order has reached
 *   `ready`, `served`, or `closed` (food is ready for pickup).
 */
function paymentTimingByOrderType(orderType: OrderType, orderStatus: OrderStatus): boolean {
  if (orderStatus === 'cancelled' || orderStatus === 'draft') {
    return false;
  }
  if (orderType === 'mesa') {
    return orderStatus === 'served' || orderStatus === 'closed';
  }
  if (orderType === 'takeout') {
    return orderStatus === 'ready' || orderStatus === 'served' || orderStatus === 'closed';
  }
  return false;
}

const VALID_PAYMENT_STATUSES: PaymentStatus[] = ['authorized', 'captured', 'voided', 'refunded'];

function isPaymentStatus(value: string): value is PaymentStatus {
  return VALID_PAYMENT_STATUSES.includes(value as PaymentStatus);
}

export async function recordPayment(ctx: RequestContext, input: RecordPaymentInput): Promise<RecordPaymentOutput> {
  return ctx.data.runInTransaction(async () => {
    const payments = resolveRepository<IPaymentRepository>(ctx, 'Payment');
    const orders = resolveRepository<IOrderRepository>(ctx, 'Order');
    const dailyShifts = resolveRepository<IDailyShiftRepository>(ctx, 'DailyShift');

    // 1. Load Order
    const order: Order = await orders.getById(input.orderId);
    if (!order) {
      throw new AppError('NOT_FOUND', `Order not found: ${input.orderId}`, 404, { orderId: input.orderId });
    }

    // 2. Load DailyShift and verify it is open
    const shift: DailyShift = await dailyShifts.getById(input.dailyShiftId);
    if (!shift) {
      throw new AppError('NOT_FOUND', `DailyShift not found: ${input.dailyShiftId}`, 404, { dailyShiftId: input.dailyShiftId });
    }
    if (!canCreateOrderForShift(shift)) {
      throw new AppError('CONFLICT', 'DailyShift is not open; cannot record payment.', 409, { dailyShiftId: input.dailyShiftId, shiftStatus: shift.status });
    }

    // 3. Apply paymentTimingByOrderType rule
    if (!paymentTimingByOrderType(order.orderType, order.status)) {
      throw new AppError(
        'VALIDATION_ERROR',
        `paymentTimingByOrderType: payment is not allowed for orderType "${order.orderType}" with status "${order.status}".`,
        400,
        { ruleId: 'paymentTimingByOrderType', orderType: order.orderType, orderStatus: order.status },
      );
    }

    // 4. Validate amount is positive and does not exceed Order.totalAmount
    if (!paymentAmountIsValid(input.amount)) {
      throw new AppError('VALIDATION_ERROR', 'Payment amount must be greater than zero.', 400, { amount: input.amount });
    }
    if (input.amount > order.totalAmount) {
      throw new AppError(
        'VALIDATION_ERROR',
        `Payment amount ${input.amount} exceeds order total ${order.totalAmount}.`,
        400,
        { amount: input.amount, orderTotal: order.totalAmount },
      );
    }

    // Validate method
    if (!paymentMethodIsValid(input.method)) {
      throw new AppError('VALIDATION_ERROR', 'Payment method must not be empty.', 400, { method: input.method });
    }

    // Validate status is a known PaymentStatus
    if (!isPaymentStatus(input.status)) {
      throw new AppError('VALIDATION_ERROR', `Invalid payment status: ${input.status}`, 400, { status: input.status });
    }

    // 5. Create Payment aggregate
    const now = ctx.clock.nowIso();
    const paymentId = ctx.idGenerator.newId();

    const payment: Payment = {
      paymentId,
      orderId: input.orderId,
      dailyShiftId: input.dailyShiftId,
      method: input.method,
      amount: input.amount,
      status: input.status as PaymentStatus,
      createdAt: now,
      updatedAt: now,
    };

    const invariantErrors = validatePaymentInvariants(payment);
    if (invariantErrors.length > 0) {
      throw new AppError('VALIDATION_ERROR', `Payment invariant violations: ${invariantErrors.join('; ')}`, 400, { errors: invariantErrors });
    }

    await payments.save(payment);

    // 6. Return paymentId and confirmed status
    return {
      paymentId: payment.paymentId,
      status: payment.status,
    };
  });
}
