/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/paymentRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IPaymentRepository, PaymentFilter } from '/_102050_/l1/cafeFlow/layer_2_application/ports/paymentRepository.js';
import type { Payment, PaymentStatus } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/payment.js';

interface PaymentRow {
  payment_id: string;
  order_id: string | null;
  daily_shift_id: string | null;
  status: string;
  created_at: string;
  details: string | null;
}

interface PaymentDetails {
  method: string;
  amount: number;
  updatedAt: string;
}

function toRow(payment: Payment): PaymentRow {
  const details: PaymentDetails = {
    method: payment.method,
    amount: payment.amount,
    updatedAt: payment.updatedAt,
  };
  return {
    payment_id: payment.paymentId,
    order_id: payment.orderId,
    daily_shift_id: payment.dailyShiftId,
    status: payment.status,
    created_at: payment.createdAt,
    details: JSON.stringify(details),
  };
}

function parseDetails(row: PaymentRow): PaymentDetails {
  try {
    return JSON.parse(row.details ?? '{}') as PaymentDetails;
  } catch {
    return { method: '', amount: 0, updatedAt: row.created_at };
  }
}

function toDomain(row: PaymentRow): Payment {
  const d = parseDetails(row);
  return {
    paymentId: row.payment_id,
    orderId: row.order_id,
    dailyShiftId: row.daily_shift_id,
    method: d.method,
    amount: d.amount,
    status: row.status as PaymentStatus,
    createdAt: row.created_at,
    updatedAt: d.updatedAt,
  };
}

export function createPaymentRepositoryAdapter(ctx: RequestContext): IPaymentRepository {
  const getTable = () => ctx.data.moduleData.getTable<PaymentRow>('payment');

  return {
    async getById(paymentId) {
      const repo = await getTable();
      const row = await repo.findOne({ where: { payment_id: paymentId } });
      if (!row) throw new AppError('NOT_FOUND', `Payment ${paymentId} not found`, 404, { paymentId });
      return toDomain(row);
    },

    async list(filter?: PaymentFilter) {
      const where: Partial<PaymentRow> = {};
      if (filter?.paymentId) where.payment_id = filter.paymentId;
      if (filter?.orderId) where.order_id = filter.orderId;
      if (filter?.dailyShiftId) where.daily_shift_id = filter.dailyShiftId;
      if (filter?.status) where.status = filter.status;
      const repo = await getTable();
      const rows = await repo.findMany({ where, orderBy: { field: 'created_at', direction: 'desc' } });
      return rows.map(toDomain);
    },

    async save(aggregate) {
      const repo = await getTable();
      const existing = await repo.findOne({ where: { payment_id: aggregate.paymentId } });
      if (existing) {
        await repo.update({ where: { payment_id: aggregate.paymentId }, patch: toRow(aggregate) });
      } else {
        await repo.insert({ record: toRow(aggregate) });
      }
    },

    async findByOrder(orderId) {
      const repo = await getTable();
      const rows = await repo.findMany({ where: { order_id: orderId }, orderBy: { field: 'created_at', direction: 'desc' } });
      return rows.map(toDomain);
    },

    async findByStatus(status) {
      const repo = await getTable();
      const rows = await repo.findMany({ where: { status }, orderBy: { field: 'created_at', direction: 'desc' } });
      return rows.map(toDomain);
    },

    async findPending() {
      const repo = await getTable();
      const rows = await repo.findMany({ where: { status: 'authorized' }, orderBy: { field: 'created_at', direction: 'desc' } });
      return rows.map(toDomain);
    },
  };
}
