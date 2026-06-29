/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/ports/paymentRepository.ts" enhancement="_blank"/>

import type { Payment, PaymentStatus } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/payment.js';

export type PaymentId = string;
export type OrderId = string;
export type PaymentCollection = Payment[];

export interface PaymentFilter {
  paymentId?: PaymentId;
  orderId?: OrderId;
  dailyShiftId?: string;
  status?: PaymentStatus;
}

export interface IPaymentRepository {
  getById(paymentId: PaymentId): Promise<Payment>;
  list(filter: PaymentFilter): Promise<PaymentCollection>;
  save(aggregate: Payment): Promise<void>;
  findByOrder(orderId: OrderId): Promise<PaymentCollection>;
  findByStatus(status: PaymentStatus): Promise<PaymentCollection>;
  findPending(): Promise<PaymentCollection>;
}
