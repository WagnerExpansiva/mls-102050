/// <mls fileReference="_102050_/l1/cafeFlow/layer_3_domain/entities/order.ts" enhancement="_blank"/>

export type OrderType = 'mesa' | 'takeout';
export type OrderStatus = 'draft' | 'sentToKitchen' | 'inPreparation' | 'ready' | 'served' | 'closed' | 'cancelled';
export type OrderItemStatus = 'new' | 'sentToKitchen' | 'inPreparation' | 'ready' | 'served' | 'cancelled';
export type KitchenTicketStatus = 'open' | 'inProgress' | 'done' | 'void';

export interface OrderItem {
  id: string;
  orderId: string;
  menuItemId: string;
  kitchenTicketId: string | null;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  observations: string | null;
  status: OrderItemStatus;
  createdAt: string;
  updatedAt: string;
}

export interface KitchenTicket {
  kitchenTicketId: string;
  orderId: string;
  status: KitchenTicketStatus;
  createdAt: string;
  updatedAt: string;
}

export interface Order {
  orderId: string;
  dailyShiftId: string;
  tableId: string | null;
  kitchenTicketId: string | null;
  orderType: OrderType;
  status: OrderStatus;
  totalAmount: number;
  notes: string | null;
  customerName: string | null;
  customerPhone: string | null;
  numberOfGuests: number | null;
  closedAt: string | null;
  cancelledAt: string | null;
  cancellationReason: string | null;
  items: OrderItem[];
  kitchenTicket: KitchenTicket | null;
  createdAt: string;
  updatedAt: string;
}

export const ORDER_STATUS_TRANSITIONS: Record<OrderStatus, OrderStatus[]> = {
  draft: ['sentToKitchen', 'cancelled'],
  sentToKitchen: ['inPreparation', 'cancelled'],
  inPreparation: ['ready', 'cancelled'],
  ready: ['served', 'cancelled'],
  served: ['closed', 'cancelled'],
  closed: [],
  cancelled: [],
};

export function canTransitionOrder(from: OrderStatus, to: OrderStatus): boolean {
  return ORDER_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

export function orderRequiresItem(order: Pick<Order, 'items'>): boolean {
  return order.items.length > 0;
}

export function recomputeOrderTotal(items: OrderItem[]): number {
  return items.reduce((sum, item) => sum + item.totalPrice, 0);
}

export function validateOrderTotal(order: Pick<Order, 'totalAmount' | 'items'>): boolean {
  return order.totalAmount === recomputeOrderTotal(order.items);
}

export function validateTableIdForOrderType(order: Pick<Order, 'orderType' | 'tableId'>): boolean {
  if (order.orderType === 'mesa') {
    return order.tableId !== null;
  }
  if (order.orderType === 'takeout') {
    return order.tableId === null;
  }
  return false;
}

export function validateNumberOfGuests(order: Pick<Order, 'numberOfGuests'>): boolean {
  if (order.numberOfGuests === null) {
    return true;
  }
  return order.numberOfGuests > 0;
}

export function canModifyItems(order: Pick<Order, 'status'>): boolean {
  return order.status !== 'closed' && order.status !== 'cancelled';
}

export function validateClosedTransition(order: Pick<Order, 'closedAt'>): boolean {
  return order.closedAt !== null;
}

export function validateCancelledTransition(
  order: Pick<Order, 'cancelledAt' | 'cancellationReason'>,
): boolean {
  return order.cancelledAt !== null && order.cancellationReason !== null;
}
