/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.ts" enhancement="_blank"/>

import type { Order, OrderStatus } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/order.js';

export type OrderId = string;
export type TableId = string;
export type OrderCollection = Order[];

export interface OrderFilter {
  dailyShiftId?: string;
  status?: OrderStatus;
  tableId?: string;
  orderType?: 'mesa' | 'takeout';
}

export interface IOrderRepository {
  getById(orderId: OrderId): Promise<Order>;
  list(filter: OrderFilter): Promise<OrderCollection>;
  save(aggregate: Order): Promise<void>;
  findByTable(tableId: TableId): Promise<OrderCollection>;
  findByStatus(status: OrderStatus): Promise<OrderCollection>;
  findOpenByTable(tableId: TableId): Promise<Order>;
}
