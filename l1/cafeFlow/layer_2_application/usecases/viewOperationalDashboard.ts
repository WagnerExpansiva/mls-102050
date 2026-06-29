/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/viewOperationalDashboard.ts" enhancement="_blank"/>

import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';

import type { IDailyShiftRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.js';
import type { IOrderRepository, OrderFilter } from '/_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.js';
import type { IPaymentRepository, PaymentFilter } from '/_102050_/l1/cafeFlow/layer_2_application/ports/paymentRepository.js';

import type { DailyShift, CashMovement } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.js';
import type { Order, OrderStatus, OrderType } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/order.js';
import type { Payment, PaymentStatus } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/payment.js';

// ---------------------------------------------------------------------------
// getOperationalDashboard
// ---------------------------------------------------------------------------

export interface OperationalDashboardRequest {
  dailyShiftId: string;
}

export interface OperationalDashboardView {
  dailyShiftId: string;
  shiftDate: string;
  status: string;
  openedAt: string;
  closedAt?: string | null;
  openingCashBalance?: number | null;
  closingCashBalance?: number | null;
  totalSales?: number | null;
  totalPayments?: number | null;
  totalOrders: number;
  openOrders: number;
  closedOrders: number;
  cancelledOrders: number;
  dineInOrders: number;
  takeoutOrders: number;
  paymentsByMethod: string;
  capturedPaymentsTotal: number;
  authorizedPaymentsTotal: number;
  refundedPaymentsTotal: number;
  cashMovementsIn?: number;
  cashMovementsOut?: number;
  expectedCashBalance?: number;
}

export async function getOperationalDashboard(
  ctx: RequestContext,
  input: OperationalDashboardRequest,
): Promise<OperationalDashboardView> {
  const dailyShifts = resolveRepository<IDailyShiftRepository>(ctx, 'DailyShift');
  const orders = resolveRepository<IOrderRepository>(ctx, 'Order');
  const payments = resolveRepository<IPaymentRepository>(ctx, 'Payment');

  // 1. Load the DailyShift aggregate (includes embedded CashMovement collection)
  const shift: DailyShift = await dailyShifts.getById(input.dailyShiftId);

  // 2. Query all Orders for the shift
  const shiftOrders: Order[] = await orders.list({ dailyShiftId: input.dailyShiftId });

  // 3. Query all Payments for the shift
  const shiftPayments: Payment[] = await payments.list({ dailyShiftId: input.dailyShiftId });

  // 4. Aggregate order counts by status and by type
  const totalOrders = shiftOrders.length;
  const openOrders = shiftOrders.filter(
    (o) => o.status !== 'closed' && o.status !== 'cancelled',
  ).length;
  const closedOrders = shiftOrders.filter((o) => o.status === 'closed').length;
  const cancelledOrders = shiftOrders.filter((o) => o.status === 'cancelled').length;
  const dineInOrders = shiftOrders.filter((o) => o.orderType === 'mesa').length;
  const takeoutOrders = shiftOrders.filter((o) => o.orderType === 'takeout').length;

  // 5. Aggregate payment totals by method and by status
  const paymentsByMethodMap: Record<string, number> = {};
  let capturedPaymentsTotal = 0;
  let authorizedPaymentsTotal = 0;
  let refundedPaymentsTotal = 0;
  let cashPaymentsTotal = 0;

  for (const p of shiftPayments) {
    if (p.status === 'captured') {
      capturedPaymentsTotal += p.amount;
      paymentsByMethodMap[p.method] = (paymentsByMethodMap[p.method] ?? 0) + p.amount;
      if (p.method === 'cash') {
        cashPaymentsTotal += p.amount;
      }
    } else if (p.status === 'authorized') {
      authorizedPaymentsTotal += p.amount;
    } else if (p.status === 'refunded') {
      refundedPaymentsTotal += p.amount;
    }
  }

  // 6. Sum cash movements by movementType from the embedded collection
  const cashMovementsIn = shift.cashMovements
    .filter((m: CashMovement) => m.movementType === 'entrada')
    .reduce((sum, m) => sum + m.amount, 0);
  const cashMovementsOut = shift.cashMovements
    .filter((m: CashMovement) => m.movementType === 'saída')
    .reduce((sum, m) => sum + m.amount, 0);

  // 7. Compute expected cash balance
  const openingCash = shift.openingCashBalance ?? 0;
  const expectedCashBalance =
    openingCash + cashPaymentsTotal + cashMovementsIn - cashMovementsOut;

  // 8. Assemble and return the dashboard view
  return {
    dailyShiftId: shift.dailyShiftId,
    shiftDate: shift.shiftDate,
    status: shift.status,
    openedAt: shift.openedAt,
    closedAt: shift.closedAt,
    openingCashBalance: shift.openingCashBalance,
    closingCashBalance: shift.closingCashBalance,
    totalSales: shift.totalSales,
    totalPayments: shift.totalPayments,
    totalOrders,
    openOrders,
    closedOrders,
    cancelledOrders,
    dineInOrders,
    takeoutOrders,
    paymentsByMethod: JSON.stringify(paymentsByMethodMap),
    capturedPaymentsTotal,
    authorizedPaymentsTotal,
    refundedPaymentsTotal,
    cashMovementsIn,
    cashMovementsOut,
    expectedCashBalance,
  };
}

// ---------------------------------------------------------------------------
// listShiftOrders
// ---------------------------------------------------------------------------

export interface ShiftOrdersRequest {
  dailyShiftId: string;
  status?: string;
  orderType?: string;
}

export interface ShiftOrderSummary {
  orderId: string;
  orderType: string;
  status: string;
  totalAmount: number;
  customerName?: string | null;
  numberOfGuests?: number | null;
  closedAt?: string | null;
  createdAt: string;
}

export type ShiftOrdersList = ShiftOrderSummary[];

export async function listShiftOrders(
  ctx: RequestContext,
  input: ShiftOrdersRequest,
): Promise<ShiftOrdersList> {
  const orders = resolveRepository<IOrderRepository>(ctx, 'Order');

  const filter: OrderFilter = {
    dailyShiftId: input.dailyShiftId,
  };
  if (input.status) {
    filter.status = input.status as OrderStatus;
  }
  if (input.orderType) {
    filter.orderType = input.orderType as OrderType;
  }

  const shiftOrders: Order[] = await orders.list(filter);

  // Sort by createdAt descending
  const sorted = [...shiftOrders].sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  return sorted.map((o) => ({
    orderId: o.orderId,
    orderType: o.orderType,
    status: o.status,
    totalAmount: o.totalAmount,
    customerName: o.customerName,
    numberOfGuests: o.numberOfGuests,
    closedAt: o.closedAt,
    createdAt: o.createdAt,
  }));
}

// ---------------------------------------------------------------------------
// listShiftPayments
// ---------------------------------------------------------------------------

export interface ShiftPaymentsRequest {
  dailyShiftId: string;
  method?: string;
  status?: string;
}

export interface ShiftPaymentSummary {
  paymentId: string;
  orderId?: string | null;
  method: string;
  amount: number;
  status: string;
  createdAt: string;
}

export type ShiftPaymentsList = ShiftPaymentSummary[];

export async function listShiftPayments(
  ctx: RequestContext,
  input: ShiftPaymentsRequest,
): Promise<ShiftPaymentsList> {
  const payments = resolveRepository<IPaymentRepository>(ctx, 'Payment');

  const filter: PaymentFilter = {
    dailyShiftId: input.dailyShiftId,
  };
  if (input.status) {
    filter.status = input.status as PaymentStatus;
  }

  let shiftPayments: Payment[] = await payments.list(filter);

  // PaymentFilter does not support method — filter in memory
  if (input.method) {
    shiftPayments = shiftPayments.filter((p) => p.method === input.method);
  }

  // Sort by createdAt descending
  const sorted = [...shiftPayments].sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  return sorted.map((p) => ({
    paymentId: p.paymentId,
    orderId: p.orderId,
    method: p.method,
    amount: p.amount,
    status: p.status,
    createdAt: p.createdAt,
  }));
}
