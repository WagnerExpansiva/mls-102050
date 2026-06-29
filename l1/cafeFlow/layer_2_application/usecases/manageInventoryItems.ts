/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/manageInventoryItems.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IInventoryItemRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/inventoryItemRepository.js';
import type { InventoryItem, InventoryItemStatus } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/inventoryItem.js';
import {
  canTransitionInventoryItemStatus,
  inventoryItemInvariantsValid,
  isInventoryItemBelowMinimum,
} from '/_102050_/l1/cafeFlow/layer_3_domain/entities/inventoryItem.js';

export interface UpdateInventoryItemInput {
  inventoryItemId: string;
  name?: string;
  description?: string;
  unit?: string;
  currentQuantity?: number;
  minimumLevel?: number;
  status?: string;
}

export interface UpdateInventoryItemOutput {
  inventoryItemId: string;
  status: string;
  lowStockAlert: boolean;
  updatedAt: string;
}

export interface AdjustStockInput {
  inventoryItemId: string;
  quantityDelta: number;
}

export interface AdjustStockOutput {
  inventoryItemId: string;
  currentQuantity: number;
  lowStockAlert: boolean;
  consumptionTriggered: boolean;
  status: string;
}

export async function updateInventoryItem(
  ctx: RequestContext,
  input: UpdateInventoryItemInput,
): Promise<UpdateInventoryItemOutput> {
  return ctx.data.runInTransaction(async () => {
    const items = resolveRepository<IInventoryItemRepository>(ctx, 'InventoryItem');
    const now = ctx.clock.nowIso();

    const existing = await items.getById(input.inventoryItemId);
    if (!existing) {
      throw new AppError('NOT_FOUND', `InventoryItem not found: ${input.inventoryItemId}`, 404, {
        inventoryItemId: input.inventoryItemId,
      });
    }

    if (existing.status === 'inactive') {
      throw new AppError('VALIDATION_ERROR', 'Cannot update an inactive inventory item.', 400, {
        inventoryItemId: input.inventoryItemId,
        currentStatus: existing.status,
      });
    }

    const updated: InventoryItem = {
      ...existing,
      name: input.name ?? existing.name,
      description: input.description !== undefined ? input.description : existing.description,
      unit: input.unit ?? existing.unit,
      currentQuantity: input.currentQuantity !== undefined ? input.currentQuantity : existing.currentQuantity,
      minimumLevel: input.minimumLevel !== undefined ? input.minimumLevel : existing.minimumLevel,
      status: (input.status as InventoryItemStatus) ?? existing.status,
      updatedAt: now,
    };

    if (input.status && input.status !== existing.status) {
      if (!canTransitionInventoryItemStatus(existing.status, updated.status)) {
        throw new AppError('CONFLICT', `Invalid status transition from "${existing.status}" to "${updated.status}".`, 409, {
          from: existing.status,
          to: updated.status,
        });
      }
    }

    if (!inventoryItemInvariantsValid(updated)) {
      throw new AppError('VALIDATION_ERROR', 'inventoryItemInvariantsValid: one or more invariants failed.', 400, {
        ruleId: 'inventoryItemInvariantsValid',
      });
    }

    const lowStockAlert = isInventoryItemBelowMinimum(updated);

    await items.save(updated);

    return {
      inventoryItemId: updated.inventoryItemId,
      status: 'updated',
      lowStockAlert,
      updatedAt: now,
    };
  });
}

export async function adjustStock(
  ctx: RequestContext,
  input: AdjustStockInput,
): Promise<AdjustStockOutput> {
  return ctx.data.runInTransaction(async () => {
    const items = resolveRepository<IInventoryItemRepository>(ctx, 'InventoryItem');
    const now = ctx.clock.nowIso();

    const existing = await items.getById(input.inventoryItemId);
    if (!existing) {
      throw new AppError('NOT_FOUND', `InventoryItem not found: ${input.inventoryItemId}`, 404, {
        inventoryItemId: input.inventoryItemId,
      });
    }

    if (existing.status !== 'active') {
      throw new AppError('VALIDATION_ERROR', 'Cannot adjust stock for a non-active inventory item.', 400, {
        inventoryItemId: input.inventoryItemId,
        currentStatus: existing.status,
      });
    }

    const newQuantity = existing.currentQuantity + input.quantityDelta;
    if (newQuantity < 0) {
      throw new AppError('VALIDATION_ERROR', 'Stock adjustment would result in a negative quantity.', 400, {
        inventoryItemId: input.inventoryItemId,
        currentQuantity: existing.currentQuantity,
        quantityDelta: input.quantityDelta,
        resultingQuantity: newQuantity,
      });
    }

    const consumptionTriggered = input.quantityDelta < 0;
    const lowStockAlert = isInventoryItemBelowMinimum({
      currentQuantity: newQuantity,
      minimumLevel: existing.minimumLevel,
    });

    const updated: InventoryItem = {
      ...existing,
      currentQuantity: newQuantity,
      updatedAt: now,
    };

    if (!inventoryItemInvariantsValid(updated)) {
      throw new AppError('VALIDATION_ERROR', 'inventoryItemInvariantsValid: one or more invariants failed.', 400, {
        ruleId: 'inventoryItemInvariantsValid',
      });
    }

    await items.save(updated);

    return {
      inventoryItemId: updated.inventoryItemId,
      currentQuantity: newQuantity,
      lowStockAlert,
      consumptionTriggered,
      status: 'adjusted',
    };
  });
}
