/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/viewKitchenTickets.ts" enhancement="_blank"/>

import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IOrderRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.js';
import type { Order, KitchenTicket } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/order.js';

export interface ViewKitchenTicketsInput {
  status?: string;
  orderId?: string;
}

export interface KitchenTicketView {
  kitchenTicketId: string;
  orderId: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface ViewKitchenTicketsOutput {
  tickets: KitchenTicketView[];
}

export async function viewKitchenTickets(
  ctx: RequestContext,
  input: ViewKitchenTicketsInput,
): Promise<ViewKitchenTicketsOutput> {
  const orders = resolveRepository<IOrderRepository>(ctx, 'Order');

  let loadedOrders: Order[];

  if (input.orderId) {
    const order = await orders.getById(input.orderId);
    loadedOrders = order ? [order] : [];
  } else {
    loadedOrders = await orders.list({});
  }

  const tickets: KitchenTicketView[] = [];

  for (const order of loadedOrders) {
    const kt: KitchenTicket | null = order.kitchenTicket;
    if (!kt) {
      continue;
    }

    if (input.status && kt.status !== input.status) {
      continue;
    }

    tickets.push({
      kitchenTicketId: kt.kitchenTicketId,
      orderId: kt.orderId,
      status: kt.status,
      createdAt: kt.createdAt,
      updatedAt: kt.updatedAt,
    });
  }

  return { tickets };
}
