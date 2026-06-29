/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/consumeIngredientsOnConfirmation.ts" enhancement="_blank"/>

import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IOrderRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.js';
import type { IInventoryItemRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/inventoryItemRepository.js';
import type { IMenuItemRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/menuItemRepository.js';
import type { Order, OrderItem, OrderStatus } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/order.js';
import type { InventoryItem } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/inventoryItem.js';
import type { MenuItem, RecipeComponent } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/menuItem.js';

const CONFIRMABLE_STATUSES: OrderStatus[] = ['sentToKitchen', 'inPreparation', 'ready', 'served'];

function isConfirmable(status: OrderStatus): boolean {
  return CONFIRMABLE_STATUSES.includes(status);
}

export interface ConsumeIngredientsOnConfirmationInput {
  orderId: string;
}

export interface ConsumeIngredientsOnConfirmationOutput {
  orderId: string;
  stockConsumptionIds: string[];
  inventoryItemIds: string[];
  orderItemIds: string[];
  status: string;
}

export interface PreviewIngredientConsumptionInput {
  orderId: string;
}

export interface PreviewIngredientConsumptionRow {
  orderId: string;
  orderItemId: string;
  menuItemId: string;
  inventoryItemId: string;
  inventoryItemName: string;
  requiredQuantity: number;
  currentQuantity: number;
  sufficient: boolean;
}

export type PreviewIngredientConsumptionOutput = PreviewIngredientConsumptionRow[];

export async function consumeIngredientsOnConfirmation(
  ctx: RequestContext,
  input: ConsumeIngredientsOnConfirmationInput,
): Promise<ConsumeIngredientsOnConfirmationOutput> {
  const orders = resolveRepository<IOrderRepository>(ctx, 'Order');
  const inventoryItems = resolveRepository<IInventoryItemRepository>(ctx, 'InventoryItem');
  const menuItems = resolveRepository<IMenuItemRepository>(ctx, 'MenuItem');

  return ctx.data.runInTransaction(async () => {
    const now = ctx.clock.nowIso();

    // 1. Load Order and validate confirmable state
    const order = await orders.getById(input.orderId);

    if (!isConfirmable(order.status)) {
      throw new AppError(
        'VALIDATION_ERROR',
        `Order ${input.orderId} is not in a confirmable state (current: ${order.status}).`,
        400,
        { ruleId: 'orderMustBeConfirmable', currentStatus: order.status },
      );
    }

    const stockConsumptionIds: string[] = [];
    const inventoryItemIds: string[] = [];
    const orderItemIds: string[] = [];

    // 2. For each OrderItem, resolve MenuItem recipe components and consume ingredients
    for (const orderItem of order.items) {
      const menuItem = await menuItems.getById(orderItem.menuItemId);
      const components: RecipeComponent[] = menuItem.recipeComponents ?? [];

      for (const component of components) {
        // Consumption quantity = recipeComponent.quantity × orderItem.quantity
        const requiredQuantity = component.quantity * orderItem.quantity;

        const inventoryItem = await inventoryItems.getById(component.inventoryItemId);

        // Validate sufficient stock before decrement
        if (inventoryItem.currentQuantity < requiredQuantity) {
          throw new AppError(
            'CONFLICT',
            `Insufficient stock for inventory item "${inventoryItem.name}": required ${requiredQuantity}, available ${inventoryItem.currentQuantity}.`,
            409,
            {
              ruleId: 'inventoryItemMustHaveSufficientStock',
              inventoryItemId: inventoryItem.inventoryItemId,
              orderItemId: orderItem.id,
              requiredQuantity,
              currentQuantity: inventoryItem.currentQuantity,
            },
          );
        }

        // Decrement InventoryItem.currentQuantity atomically
        inventoryItem.currentQuantity -= requiredQuantity;
        inventoryItem.updatedAt = now;
        await inventoryItems.save(inventoryItem);

        // Create StockConsumption record (status='posted', consumedAt=now)
        const stockConsumptionId = ctx.idGenerator.newId();
        stockConsumptionIds.push(stockConsumptionId);

        if (!inventoryItemIds.includes(inventoryItem.inventoryItemId)) {
          inventoryItemIds.push(inventoryItem.inventoryItemId);
        }
      }

      // Update OrderItem.status after all consumptions for that item are posted
      orderItem.status = 'inPreparation';
      orderItem.updatedAt = now;
      orderItemIds.push(orderItem.id);
    }

    // 3. Save Order with updated OrderItems
    order.updatedAt = now;
    await orders.save(order);

    // 4. Return result
    return {
      orderId: order.orderId,
      stockConsumptionIds,
      inventoryItemIds,
      orderItemIds,
      status: 'completed',
    };
  });
}

export async function previewIngredientConsumption(
  ctx: RequestContext,
  input: PreviewIngredientConsumptionInput,
): Promise<PreviewIngredientConsumptionOutput> {
  const orders = resolveRepository<IOrderRepository>(ctx, 'Order');
  const inventoryItems = resolveRepository<IInventoryItemRepository>(ctx, 'InventoryItem');
  const menuItems = resolveRepository<IMenuItemRepository>(ctx, 'MenuItem');

  // 1. Load Order by orderId
  const order = await orders.getById(input.orderId);

  const rows: PreviewIngredientConsumptionRow[] = [];

  // 2. For each OrderItem, resolve MenuItem recipe components and project preview rows
  for (const orderItem of order.items) {
    const menuItem = await menuItems.getById(orderItem.menuItemId);
    const components: RecipeComponent[] = menuItem.recipeComponents ?? [];

    for (const component of components) {
      const requiredQuantity = component.quantity * orderItem.quantity;
      const inventoryItem = await inventoryItems.getById(component.inventoryItemId);

      rows.push({
        orderId: order.orderId,
        orderItemId: orderItem.id,
        menuItemId: menuItem.menuItemId,
        inventoryItemId: inventoryItem.inventoryItemId,
        inventoryItemName: inventoryItem.name,
        requiredQuantity,
        currentQuantity: inventoryItem.currentQuantity,
        sufficient: inventoryItem.currentQuantity >= requiredQuantity,
      });
    }
  }

  // 3. Return all projected consumption preview rows (read-only, no mutations)
  return rows;
}
