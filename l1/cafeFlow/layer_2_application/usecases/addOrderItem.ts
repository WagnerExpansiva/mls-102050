/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/addOrderItem.ts" enhancement="_blank"/>

import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IOrderRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.js';
import type { IMenuItemRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/menuItemRepository.js';
import type { Order, OrderItem } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/order.js';
import type { MenuItem } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/menuItem.js';
import { canModifyItems, recomputeOrderTotal } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/order.js';

export interface AddOrderItemInput {
  orderId: string;
  menuItemId: string;
  quantity: number;
  observations?: string;
}

export interface AddOrderItemOutput {
  orderId: string;
  orderItemId: string;
  status: string;
}

export async function addOrderItem(ctx: RequestContext, input: AddOrderItemInput): Promise<AddOrderItemOutput> {
  const orders = resolveRepository<IOrderRepository>(ctx, 'Order');
  const menuItems = resolveRepository<IMenuItemRepository>(ctx, 'MenuItem');
  const now = ctx.clock.nowIso();

  return ctx.data.runInTransaction(async () => {
    // 1. Load the parent Order
    const order = await orders.getById(input.orderId);
    if (!order) {
      throw new AppError('NOT_FOUND', `Order not found: ${input.orderId}`, 404, { orderId: input.orderId });
    }

    // 2. Validate Order status allows item modification (orderStatusTransitions rule)
    if (!canModifyItems(order)) {
      throw new AppError(
        'CONFLICT',
        `Cannot add items to an order with status "${order.status}". Order must not be closed or cancelled.`,
        409,
        { ruleId: 'orderStatusTransitions', currentStatus: order.status },
      );
    }

    // 3. Load the MenuItem
    const menuItem = await menuItems.getById(input.menuItemId);
    if (!menuItem) {
      throw new AppError('NOT_FOUND', `MenuItem not found: ${input.menuItemId}`, 404, { menuItemId: input.menuItemId });
    }

    // 4. Validate MenuItem status is active
    if (menuItem.status !== 'active') {
      throw new AppError(
        'VALIDATION_ERROR',
        `MenuItem "${menuItem.name}" is not active (current status: ${menuItem.status}).`,
        400,
        { menuItemId: input.menuItemId, status: menuItem.status },
      );
    }

    // 5. Compute unitPrice from MenuItem.price and totalPrice
    const unitPrice = menuItem.price;
    const totalPrice = unitPrice * input.quantity;

    // 6. Create new OrderItem with status 'new'
    const orderItemId = ctx.idGenerator.newId();
    const newOrderItem: OrderItem = {
      id: orderItemId,
      orderId: order.orderId,
      menuItemId: input.menuItemId,
      kitchenTicketId: null,
      quantity: input.quantity,
      unitPrice,
      totalPrice,
      observations: input.observations ?? null,
      status: 'new',
      createdAt: now,
      updatedAt: now,
    };

    // 7. Add OrderItem to Order's items collection
    order.items.push(newOrderItem);

    // 8. Recalculate Order.totalAmount from all order items
    order.totalAmount = recomputeOrderTotal(order.items);
    order.updatedAt = now;

    // 9. ingredientConsumptionTrigger: the MenuItem's recipeComponents define
    //    ingredient quantities that would trigger stock consumption. No local
    //    StockConsumption port is declared in this module, so consumption is
    //    handled downstream (e.g. via domain event or queue). The recipe
    //    components are available on menuItem.recipeComponents for that purpose.

    // 10. Save Order (with embedded OrderItem) via Order port
    await orders.save(order);

    // 11. Return orderId, orderItemId, and status
    return {
      orderId: order.orderId,
      orderItemId,
      status: newOrderItem.status,
    };
  });
}
