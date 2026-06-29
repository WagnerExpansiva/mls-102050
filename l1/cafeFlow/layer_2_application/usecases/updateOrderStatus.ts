/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/updateOrderStatus.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IOrderRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.js';
import type { IPaymentRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/paymentRepository.js';
import type { IInventoryItemRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/inventoryItemRepository.js';
import type { IMenuItemRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/menuItemRepository.js';
import type { Order, OrderStatus } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/order.js';
import { canTransitionOrder } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/order.js';

export interface UpdateOrderStatusInput {
  orderId: string;
  dailyShiftId: string;
  status: string;
  cancellationReason?: string;
  tableId?: string;
}

export interface UpdateOrderStatusOutput {
  orderId: string;
  status: string;
  previousStatus: string;
  closedAt?: string;
  cancelledAt?: string;
  tableReleased?: boolean;
  stockConsumptionIds?: string[];
  updatedAt: string;
}

export async function updateOrderStatus(
  ctx: RequestContext,
  input: UpdateOrderStatusInput,
): Promise<UpdateOrderStatusOutput> {
  return ctx.data.runInTransaction(async () => {
    const orders = resolveRepository<IOrderRepository>(ctx, 'Order');
    const payments = resolveRepository<IPaymentRepository>(ctx, 'Payment');
    const inventoryItems = resolveRepository<IInventoryItemRepository>(ctx, 'InventoryItem');
    const menuItems = resolveRepository<IMenuItemRepository>(ctx, 'MenuItem');

    const now = ctx.clock.nowIso();

    // 1. Load Order by orderId
    const order = await orders.getById(input.orderId);

    // 2. Validate the requested status transition
    const targetStatus = input.status as OrderStatus;
    const previousStatus = order.status;
    if (!canTransitionOrder(previousStatus, targetStatus)) {
      throw new AppError(
        'CONFLICT',
        `orderStatusTransitions: invalid transition from "${previousStatus}" to "${targetStatus}".`,
        409,
        { ruleId: 'orderStatusTransitions', from: previousStatus, to: targetStatus },
      );
    }

    // 3. Payment verification for closed / cancelled
    if (targetStatus === 'closed' || targetStatus === 'cancelled') {
      const orderPayments = await payments.findByOrder(input.orderId);
      if (order.orderType === 'mesa') {
        const hasCaptured = orderPayments.some((p) => p.status === 'captured');
        if (!hasCaptured) {
          throw new AppError(
            'VALIDATION_ERROR',
            'paymentTimingByOrderType: mesa orders require a captured payment before closing or cancellation.',
            400,
            { ruleId: 'paymentTimingByOrderType', orderType: 'mesa' },
          );
        }
      } else if (order.orderType === 'takeout') {
        const hasAuthorized = orderPayments.some(
          (p) => p.status === 'authorized' || p.status === 'captured',
        );
        if (!hasAuthorized) {
          throw new AppError(
            'VALIDATION_ERROR',
            'paymentTimingByOrderType: takeout orders require an authorized payment before preparation.',
            400,
            { ruleId: 'paymentTimingByOrderType', orderType: 'takeout' },
          );
        }
      }
    }

    // 4. Ingredient consumption trigger for served / closed
    let stockConsumptionIds: string[] | undefined;
    if (targetStatus === 'served' || targetStatus === 'closed') {
      stockConsumptionIds = [];
      for (const orderItem of order.items) {
        if (orderItem.status === 'cancelled') continue;
        const menuItem = await menuItems.getById(orderItem.menuItemId);
        for (const component of menuItem.recipeComponents) {
          const invItem = await inventoryItems.getById(component.inventoryItemId);
          const consumedQuantity = component.quantity * orderItem.quantity;
          if (invItem.currentQuantity - consumedQuantity < 0) {
            throw new AppError(
              'VALIDATION_ERROR',
              `ingredientConsumptionTrigger: insufficient stock for "${invItem.name}" (needed ${consumedQuantity}, available ${invItem.currentQuantity}).`,
              400,
              {
                ruleId: 'ingredientConsumptionTrigger',
                inventoryItemId: invItem.inventoryItemId,
                needed: consumedQuantity,
                available: invItem.currentQuantity,
              },
            );
          }
          invItem.currentQuantity -= consumedQuantity;
          invItem.updatedAt = now;
          await inventoryItems.save(invItem);
          stockConsumptionIds.push(ctx.idGenerator.newId());
        }
      }
      if (stockConsumptionIds.length === 0) {
        stockConsumptionIds = undefined;
      }
    }

    // 5. aiOutputLanguageSelection — determine output language for kitchen-ticket / notifications
    //    Simplified: default to pt-BR; a real implementation would inspect customer locale or shift config.
    const _outputLanguage = 'pt-BR';

    // 6. Table occupancy consistency for closed / cancelled
    let tableReleased = false;
    if ((targetStatus === 'closed' || targetStatus === 'cancelled') && order.tableId) {
      const tableDoc = await ctx.data.mdmDocument.get({ mdmId: order.tableId });
      if (tableDoc) {
        const tableDetails = tableDoc.details as { status?: string };
        if (tableDetails?.status === 'occupied') {
          tableDetails.status = 'available';
          await ctx.data.mdmDocument.put({ record: tableDoc });
          tableReleased = true;
        }
      }
    }

    // 7. Set timestamps and cancellation reason
    if (targetStatus === 'cancelled') {
      if (!input.cancellationReason) {
        throw new AppError(
          'VALIDATION_ERROR',
          'cancellationReason is required when cancelling an order.',
          400,
          { ruleId: 'orderStatusTransitions', field: 'cancellationReason' },
        );
      }
      order.cancelledAt = now;
      order.cancellationReason = input.cancellationReason;
    }
    if (targetStatus === 'closed') {
      order.closedAt = now;
    }

    // 8. Update order status and save
    order.status = targetStatus;
    order.updatedAt = now;
    await orders.save(order);

    // 9. Return result
    const result: UpdateOrderStatusOutput = {
      orderId: order.orderId,
      status: order.status,
      previousStatus,
      updatedAt: order.updatedAt,
    };

    if (order.closedAt !== null) {
      result.closedAt = order.closedAt;
    }
    if (order.cancelledAt !== null) {
      result.cancelledAt = order.cancelledAt;
    }
    if (tableReleased) {
      result.tableReleased = true;
    }
    if (stockConsumptionIds && stockConsumptionIds.length > 0) {
      result.stockConsumptionIds = stockConsumptionIds;
    }

    return result;
  });
}
