/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/createStockConsumption.ts" enhancement="_blank"/>

import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IOrderRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.js';
import type { IMenuItemRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/menuItemRepository.js';
import type { IInventoryItemRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/inventoryItemRepository.js';
import type { Order, OrderItem } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/order.js';
import type { MenuItem, RecipeComponent } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/menuItem.js';
import type { InventoryItem } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/inventoryItem.js';

export interface CreateStockConsumptionInput {
  orderId: string;
  orderItemId: string;
}

export interface CreateStockConsumptionOutput {
  status: string;
  stockConsumptionCount: number;
  inventoryItemIds: string;
}

export async function createStockConsumption(
  ctx: RequestContext,
  input: CreateStockConsumptionInput,
): Promise<CreateStockConsumptionOutput> {
  const orders = resolveRepository<IOrderRepository>(ctx, 'Order');
  const menuItems = resolveRepository<IMenuItemRepository>(ctx, 'MenuItem');
  const inventoryItems = resolveRepository<IInventoryItemRepository>(ctx, 'InventoryItem');
  const now = ctx.clock.nowIso();

  // 1. Load Order by orderId; validate order exists and status is not 'cancelled'
  const order: Order = await orders.getById(input.orderId);
  if (order.status === 'cancelled') {
    throw new AppError(
      'VALIDATION_ERROR',
      'ingredientConsumptionTrigger: cannot consume stock for a cancelled order.',
      400,
      { ruleId: 'ingredientConsumptionTrigger', orderId: input.orderId, orderStatus: order.status },
    );
  }

  // 2. Find the OrderItem by orderItemId within the Order's items collection
  const orderItem: OrderItem | undefined = order.items.find(
    (it) => it.id === input.orderItemId,
  );
  if (!orderItem) {
    throw new AppError(
      'NOT_FOUND',
      `OrderItem not found: ${input.orderItemId} in order ${input.orderId}`,
      404,
      { orderItemId: input.orderItemId, orderId: input.orderId },
    );
  }

  // Validate order item status is 'served' or 'ready'
  if (orderItem.status !== 'served' && orderItem.status !== 'ready') {
    throw new AppError(
      'VALIDATION_ERROR',
      `ingredientConsumptionTrigger: order item must be 'served' or 'ready' to trigger stock consumption (current: '${orderItem.status}').`,
      400,
      { ruleId: 'ingredientConsumptionTrigger', orderItemId: orderItem.id, orderItemStatus: orderItem.status },
    );
  }

  // 3. Load MenuItem by orderItem.menuItemId; validate menuItem status is 'active'
  const menuItem: MenuItem = await menuItems.getById(orderItem.menuItemId);
  if (menuItem.status !== 'active') {
    throw new AppError(
      'VALIDATION_ERROR',
      `ingredientConsumptionTrigger: menu item must be 'active' to consume stock (current: '${menuItem.status}').`,
      400,
      { ruleId: 'ingredientConsumptionTrigger', menuItemId: menuItem.menuItemId, menuItemStatus: menuItem.status },
    );
  }

  // 4. Retrieve RecipeComponents from the MenuItem aggregate
  const recipeComponents: RecipeComponent[] = menuItem.recipeComponents ?? [];
  if (recipeComponents.length === 0) {
    return {
      status: 'posted',
      stockConsumptionCount: 0,
      inventoryItemIds: '',
    };
  }

  const affectedInventoryItemIds: string[] = [];
  let stockConsumptionCount = 0;

  // 6-9. For each recipe component, load inventory, validate, decrement, and save
  await ctx.data.runInTransaction(async () => {
    for (const component of recipeComponents) {
      // 5. Calculate consumedQuantity
      const consumedQuantity = component.quantity * orderItem.quantity;

      // 6. Load InventoryItem; validate status is 'active' and currentQuantity >= consumedQuantity
      const inventoryItem: InventoryItem = await inventoryItems.getById(component.inventoryItemId);
      if (inventoryItem.status !== 'active') {
        throw new AppError(
          'VALIDATION_ERROR',
          `ingredientConsumptionTrigger: inventory item must be 'active' (current: '${inventoryItem.status}').`,
          400,
          { ruleId: 'ingredientConsumptionTrigger', inventoryItemId: inventoryItem.inventoryItemId, inventoryItemStatus: inventoryItem.status },
        );
      }
      if (inventoryItem.currentQuantity < consumedQuantity) {
        throw new AppError(
          'CONFLICT',
          `ingredientConsumptionTrigger: insufficient stock for inventory item '${inventoryItem.name}' (available: ${inventoryItem.currentQuantity}, needed: ${consumedQuantity}).`,
          409,
          { ruleId: 'ingredientConsumptionTrigger', inventoryItemId: inventoryItem.inventoryItemId, available: inventoryItem.currentQuantity, needed: consumedQuantity },
        );
      }

      // 7. Decrement InventoryItem.currentQuantity and save
      inventoryItem.currentQuantity -= consumedQuantity;
      inventoryItem.updatedAt = now;
      await inventoryItems.save(inventoryItem);

      // 8. Track the stock consumption (one per recipe component)
      stockConsumptionCount++;
      affectedInventoryItemIds.push(inventoryItem.inventoryItemId);
    }
  });

  // 10. Return result
  return {
    status: 'posted',
    stockConsumptionCount,
    inventoryItemIds: affectedInventoryItemIds.join(','),
  };
}
