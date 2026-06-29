/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/orderRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IOrderRepository, OrderFilter } from '/_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.js';
import type { Order, OrderItem, OrderStatus, OrderType, KitchenTicket } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/order.js';

interface OrderRow {
  order_id: string;
  daily_shift_id: string;
  table_id: string | null;
  kitchen_ticket_id: string | null;
  order_type: string;
  status: string;
  created_at: string;
  details: string | null;
}

interface OrderDetails {
  totalAmount: number;
  notes: string | null;
  customerName: string | null;
  customerPhone: string | null;
  numberOfGuests: number | null;
  closedAt: string | null;
  cancelledAt: string | null;
  cancellationReason: string | null;
  updatedAt: string;
  items: OrderItem[];
  kitchenTicket: KitchenTicket | null;
}

const OPEN_STATUSES: OrderStatus[] = [
  'draft',
  'sentToKitchen',
  'inPreparation',
  'ready',
  'served',
];

function toRow(order: Order): OrderRow {
  const details: OrderDetails = {
    totalAmount: order.totalAmount,
    notes: order.notes,
    customerName: order.customerName,
    customerPhone: order.customerPhone,
    numberOfGuests: order.numberOfGuests,
    closedAt: order.closedAt,
    cancelledAt: order.cancelledAt,
    cancellationReason: order.cancellationReason,
    updatedAt: order.updatedAt,
    items: order.items,
    kitchenTicket: order.kitchenTicket,
  };
  return {
    order_id: order.orderId,
    daily_shift_id: order.dailyShiftId,
    table_id: order.tableId,
    kitchen_ticket_id: order.kitchenTicketId,
    order_type: order.orderType,
    status: order.status,
    created_at: order.createdAt,
    details: JSON.stringify(details),
  };
}

function parseDetails(row: OrderRow): OrderDetails {
  try {
    const parsed = JSON.parse(row.details ?? '{}') as Partial<OrderDetails>;
    return {
      totalAmount: parsed.totalAmount ?? 0,
      notes: parsed.notes ?? null,
      customerName: parsed.customerName ?? null,
      customerPhone: parsed.customerPhone ?? null,
      numberOfGuests: parsed.numberOfGuests ?? null,
      closedAt: parsed.closedAt ?? null,
      cancelledAt: parsed.cancelledAt ?? null,
      cancellationReason: parsed.cancellationReason ?? null,
      updatedAt: parsed.updatedAt ?? row.created_at,
      items: parsed.items ?? [],
      kitchenTicket: parsed.kitchenTicket ?? null,
    };
  } catch {
    return {
      totalAmount: 0,
      notes: null,
      customerName: null,
      customerPhone: null,
      numberOfGuests: null,
      closedAt: null,
      cancelledAt: null,
      cancellationReason: null,
      updatedAt: row.created_at,
      items: [],
      kitchenTicket: null,
    };
  }
}

function toDomain(row: OrderRow): Order {
  const d = parseDetails(row);
  return {
    orderId: row.order_id,
    dailyShiftId: row.daily_shift_id,
    tableId: row.table_id,
    kitchenTicketId: row.kitchen_ticket_id,
    orderType: row.order_type as OrderType,
    status: row.status as OrderStatus,
    totalAmount: d.totalAmount,
    notes: d.notes,
    customerName: d.customerName,
    customerPhone: d.customerPhone,
    numberOfGuests: d.numberOfGuests,
    closedAt: d.closedAt,
    cancelledAt: d.cancelledAt,
    cancellationReason: d.cancellationReason,
    items: d.items,
    kitchenTicket: d.kitchenTicket,
    createdAt: row.created_at,
    updatedAt: d.updatedAt,
  };
}

export function createOrderRepositoryAdapter(ctx: RequestContext): IOrderRepository {
  const getTable = () => ctx.data.moduleData.getTable<OrderRow>('order');

  return {
    async getById(orderId) {
      const repo = await getTable();
      const row = await repo.findOne({ where: { order_id: orderId } });
      if (!row) {
        throw new AppError('NOT_FOUND', `Order ${orderId} not found`, 404, { orderId });
      }
      return toDomain(row);
    },

    async list(filter?: OrderFilter) {
      const repo = await getTable();
      const where: Partial<OrderRow> = {};
      if (filter?.dailyShiftId) where.daily_shift_id = filter.dailyShiftId;
      if (filter?.status) where.status = filter.status;
      if (filter?.tableId) where.table_id = filter.tableId;
      if (filter?.orderType) where.order_type = filter.orderType;
      const rows = await repo.findMany({
        where,
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      return rows.map(toDomain);
    },

    async save(order) {
      const repo = await getTable();
      const existing = await repo.findOne({ where: { order_id: order.orderId } });
      if (existing) {
        await repo.update({ where: { order_id: order.orderId }, patch: toRow(order) });
      } else {
        await repo.insert({ record: toRow(order) });
      }
    },

    async findByTable(tableId) {
      const repo = await getTable();
      const rows = await repo.findMany({
        where: { table_id: tableId },
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      return rows.map(toDomain);
    },

    async findByStatus(status) {
      const repo = await getTable();
      const rows = await repo.findMany({
        where: { status },
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      return rows.map(toDomain);
    },

    async findOpenByTable(tableId) {
      const repo = await getTable();
      const rows = await repo.findMany({
        where: { table_id: tableId },
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      const openOrder = rows
        .map(toDomain)
        .find((o) => OPEN_STATUSES.includes(o.status));
      if (!openOrder) {
        throw new AppError(
          'NOT_FOUND',
          `No open order found for table ${tableId}`,
          404,
          { tableId },
        );
      }
      return openOrder;
    },
  };
}
