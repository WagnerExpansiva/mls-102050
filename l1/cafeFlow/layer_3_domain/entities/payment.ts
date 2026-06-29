/// <mls fileReference="_102050_/l1/cafeFlow/layer_3_domain/entities/payment.ts" enhancement="_blank"/>

export type PaymentStatus = 'authorized' | 'captured' | 'voided' | 'refunded';

export interface Payment {
  paymentId: string;
  orderId: string | null;
  dailyShiftId: string | null;
  method: string;
  amount: number;
  status: PaymentStatus;
  createdAt: string;
  updatedAt: string;
}

export const PAYMENT_STATUS_TRANSITIONS: Record<PaymentStatus, PaymentStatus[]> = {
  authorized: ['captured', 'voided'],
  captured: ['refunded'],
  voided: [],
  refunded: [],
};

export function canTransitionPayment(from: PaymentStatus, to: PaymentStatus): boolean {
  return PAYMENT_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

export function paymentAmountIsValid(amount: number): boolean {
  return amount > 0;
}

export function paymentMethodIsValid(method: string): boolean {
  return method.trim().length > 0;
}

export function paymentHasReference(payment: Pick<Payment, 'orderId' | 'dailyShiftId'>): boolean {
  return payment.orderId !== null || payment.dailyShiftId !== null;
}

export function paymentCanModifyAmountOrMethod(status: PaymentStatus): boolean {
  return status !== 'captured' && status !== 'refunded';
}

export function paymentRequiresOpenDailyShiftOnCapture(
  status: PaymentStatus,
  dailyShiftId: string | null,
): boolean {
  if (status !== 'captured') return true;
  return dailyShiftId !== null;
}

export function validatePaymentInvariants(payment: Payment): string[] {
  const errors: string[] = [];

  if (!paymentAmountIsValid(payment.amount)) {
    errors.push('amount must be greater than zero');
  }
  if (!paymentMethodIsValid(payment.method)) {
    errors.push('method must not be empty');
  }
  if (!paymentHasReference(payment)) {
    errors.push('at least one of orderId or dailyShiftId must be set');
  }

  return errors;
}
