/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/generateShiftCloseReport.ts" enhancement="_blank"/>

import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';

import type { IDailyShiftRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.js';
import type { IPaymentRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/paymentRepository.js';
import type { IOrderRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.js';

import type { DailyShift, CashMovement } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.js';
import type { Payment } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/payment.js';
import type { Order, OrderType } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/order.js';

export interface GenerateShiftCloseReportInput {
  dailyShiftId: string;
  outputLanguage?: string;
}

export interface GenerateShiftCloseReportOutput {
  dailyShiftId: string;
  shiftDate: string;
  status: string;
  openedAt: string;
  closedAt: string;
  openingCashBalance: number;
  closingCashBalance: number;
  totalSales: number;
  totalPayments: number;
  closingNotes: string;
  totalOrders: number;
  totalOrdersMesa: number;
  totalOrdersTakeout: number;
  totalSalesMesa: number;
  totalSalesTakeout: number;
  totalOrderItems: number;
  paymentsByMethod: string;
  cashMovementsIn: number;
  cashMovementsOut: number;
  expectedCashBalance: number;
  cashDifference: number;
  reportLanguage: string;
  reportNarrative: string;
}

const DEFAULT_REPORT_LANGUAGE = 'pt-BR';

/**
 * Apply the `aiOutputLanguageSelection` rule: use the requested language or
 * fall back to the system default.
 */
function resolveReportLanguage(requested?: string): string {
  if (requested && requested.trim().length > 0) {
    return requested.trim();
  }
  return DEFAULT_REPORT_LANGUAGE;
}

/**
 * Apply the `paymentTimingByOrderType` rule: group orders by orderType
 * (mesa vs takeout) and compute per-type counts and sales totals.
 */
function groupOrdersByType(orders: Order[]): {
  totalOrdersMesa: number;
  totalOrdersTakeout: number;
  totalSalesMesa: number;
  totalSalesTakeout: number;
  totalOrderItems: number;
} {
  let totalOrdersMesa = 0;
  let totalOrdersTakeout = 0;
  let totalSalesMesa = 0;
  let totalSalesTakeout = 0;
  let totalOrderItems = 0;

  for (const order of orders) {
    totalOrderItems += order.items.length;
    if (order.orderType === 'mesa') {
      totalOrdersMesa += 1;
      totalSalesMesa += order.totalAmount;
    } else if (order.orderType === 'takeout') {
      totalOrdersTakeout += 1;
      totalSalesTakeout += order.totalAmount;
    }
  }

  return { totalOrdersMesa, totalOrdersTakeout, totalSalesMesa, totalSalesTakeout, totalOrderItems };
}

interface PaymentMethodSummary {
  method: string;
  count: number;
  total: number;
}

/**
 * Aggregate captured payments by method with count and total amount.
 */
function aggregatePaymentsByMethod(payments: Payment[]): {
  paymentsByMethod: string;
  cashPaymentsTotal: number;
} {
  const byMethod = new Map<string, PaymentMethodSummary>();
  let cashPaymentsTotal = 0;

  for (const p of payments) {
    const existing = byMethod.get(p.method);
    if (existing) {
      existing.count += 1;
      existing.total += p.amount;
    } else {
      byMethod.set(p.method, { method: p.method, count: 1, total: p.amount });
    }
    if (p.method === 'cash' || p.method === 'dinheiro') {
      cashPaymentsTotal += p.amount;
    }
  }

  const summary = Array.from(byMethod.values());
  return {
    paymentsByMethod: JSON.stringify(summary),
    cashPaymentsTotal,
  };
}

/**
 * Sum cash movements by type (entrada = in, saída = out).
 */
function sumCashMovements(movements: CashMovement[]): { cashMovementsIn: number; cashMovementsOut: number } {
  let cashMovementsIn = 0;
  let cashMovementsOut = 0;
  for (const m of movements) {
    if (m.movementType === 'entrada') {
      cashMovementsIn += m.amount;
    } else if (m.movementType === 'saída') {
      cashMovementsOut += m.amount;
    }
  }
  return { cashMovementsIn, cashMovementsOut };
}

/**
 * Generate a narrative summary of the shift in the selected language.
 * This is a deterministic template-based narrative (no external AI service
 * is available in the application layer).
 */
function generateReportNarrative(
  lang: string,
  data: {
    shiftDate: string;
    status: string;
    totalOrders: number;
    totalSales: number;
    totalPayments: number;
    cashDifference: number;
    totalOrdersMesa: number;
    totalOrdersTakeout: number;
  },
): string {
  const diffLabel = data.cashDifference === 0
    ? (lang === 'pt-BR' ? 'sem diferença de caixa' : 'no cash difference')
    : data.cashDifference > 0
      ? (lang === 'pt-BR' ? `sobra de caixa de ${data.cashDifference.toFixed(2)}` : `cash surplus of ${data.cashDifference.toFixed(2)}`)
      : (lang === 'pt-BR' ? `falta de caixa de ${Math.abs(data.cashDifference).toFixed(2)}` : `cash shortage of ${Math.abs(data.cashDifference).toFixed(2)}`);

  if (lang === 'pt-BR') {
    return [
      `Relatório de fechamento do turno de ${data.shiftDate}.`,
      `Status: ${data.status === 'closed' ? 'fechado' : 'aberto (preliminar)'}.`,
      `Total de pedidos: ${data.totalOrders} (mesa: ${data.totalOrdersMesa}, takeaway: ${data.totalOrdersTakeout}).`,
      `Vendas totais: ${data.totalSales.toFixed(2)}; pagamentos capturados: ${data.totalPayments.toFixed(2)}.`,
      `Conferência de caixa: ${diffLabel}.`,
    ].join(' ');
  }

  return [
    `Shift close report for ${data.shiftDate}.`,
    `Status: ${data.status === 'closed' ? 'closed' : 'open (preliminary)'}.`,
    `Total orders: ${data.totalOrders} (dine-in: ${data.totalOrdersMesa}, takeout: ${data.totalOrdersTakeout}).`,
    `Total sales: ${data.totalSales.toFixed(2)}; captured payments: ${data.totalPayments.toFixed(2)}.`,
    `Cash reconciliation: ${diffLabel}.`,
  ].join(' ');
}

export async function generateShiftCloseReport(
  ctx: RequestContext,
  input: GenerateShiftCloseReportInput,
): Promise<GenerateShiftCloseReportOutput> {
  const dailyShifts = resolveRepository<IDailyShiftRepository>(ctx, 'DailyShift');
  const payments = resolveRepository<IPaymentRepository>(ctx, 'Payment');
  const orders = resolveRepository<IOrderRepository>(ctx, 'Order');

  // 1. Load DailyShift by id; throw if not found
  let shift: DailyShift;
  try {
    shift = await dailyShifts.getById(input.dailyShiftId);
  } catch {
    throw new AppError('NOT_FOUND', `DailyShift not found: ${input.dailyShiftId}`, 404, {
      dailyShiftId: input.dailyShiftId,
    });
  }

  // 2. Validate shift status — open => preliminary, closed => final
  const isClosed = shift.status === 'closed';

  // 3. Load all captured Payments for the shift
  const shiftPayments = await payments.list({ dailyShiftId: input.dailyShiftId, status: 'captured' });

  // 4. Load all Orders for the shift (each includes embedded OrderItem children)
  const shiftOrders = await orders.list({ dailyShiftId: input.dailyShiftId });

  // 5. CashMovement entries are embedded in the DailyShift aggregate
  const { cashMovementsIn, cashMovementsOut } = sumCashMovements(shift.cashMovements ?? []);

  // 6. Apply paymentTimingByOrderType rule
  const {
    totalOrdersMesa,
    totalOrdersTakeout,
    totalSalesMesa,
    totalSalesTakeout,
    totalOrderItems,
  } = groupOrdersByType(shiftOrders);

  // 7. Aggregate payments by method
  const { paymentsByMethod, cashPaymentsTotal } = aggregatePaymentsByMethod(shiftPayments);

  // 8. Compute expectedCashBalance
  const openingCash = shift.openingCashBalance ?? 0;
  const closingCash = shift.closingCashBalance ?? 0;
  const expectedCashBalance = openingCash + cashPaymentsTotal + cashMovementsIn - cashMovementsOut;

  // 9. Compute cashDifference
  const cashDifference = closingCash - expectedCashBalance;

  // 10. Apply aiOutputLanguageSelection rule
  const reportLanguage = resolveReportLanguage(input.outputLanguage);

  const totalOrders = shiftOrders.length;
  const totalPaymentsSum = shiftPayments.reduce((sum, p) => sum + p.amount, 0);
  const totalSales = shift.totalSales ?? shiftOrders.reduce((sum, o) => sum + o.totalAmount, 0);

  const reportNarrative = generateReportNarrative(reportLanguage, {
    shiftDate: shift.shiftDate,
    status: shift.status,
    totalOrders,
    totalSales,
    totalPayments: totalPaymentsSum,
    cashDifference,
    totalOrdersMesa,
    totalOrdersTakeout,
  });

  // 11. Return the complete shift close report
  return {
    dailyShiftId: shift.dailyShiftId,
    shiftDate: shift.shiftDate,
    status: shift.status,
    openedAt: shift.openedAt,
    closedAt: shift.closedAt ?? '',
    openingCashBalance: openingCash,
    closingCashBalance: closingCash,
    totalSales,
    totalPayments: shift.totalPayments ?? totalPaymentsSum,
    closingNotes: shift.closingNotes ?? '',
    totalOrders,
    totalOrdersMesa,
    totalOrdersTakeout,
    totalSalesMesa,
    totalSalesTakeout,
    totalOrderItems,
    paymentsByMethod,
    cashMovementsIn,
    cashMovementsOut,
    expectedCashBalance,
    cashDifference,
    reportLanguage,
    reportNarrative,
  };
}
