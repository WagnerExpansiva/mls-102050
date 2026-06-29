/// <mls fileReference="_102050_/l1/cafeFlow/layer_3_domain/entities/inventoryItem.ts" enhancement="_blank"/>

export type InventoryItemStatus = 'active' | 'inactive';

export interface InventoryItem {
  inventoryItemId: string;
  name: string;
  description: string | null;
  unit: string;
  currentQuantity: number;
  minimumLevel: number;
  status: InventoryItemStatus;
  createdAt: string;
  updatedAt: string;
}

export const INVENTORY_ITEM_STATUS_TRANSITIONS: Record<InventoryItemStatus, InventoryItemStatus[]> = {
  active: ['inactive'],
  inactive: ['active'],
};

export function canTransitionInventoryItemStatus(
  from: InventoryItemStatus,
  to: InventoryItemStatus,
): boolean {
  return INVENTORY_ITEM_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

export function inventoryItemNameIsValid(item: Pick<InventoryItem, 'name'>): boolean {
  return item.name.trim().length > 0;
}

export function inventoryItemUnitIsValid(item: Pick<InventoryItem, 'unit'>): boolean {
  return item.unit.trim().length > 0;
}

export function inventoryItemCurrentQuantityIsValid(
  item: Pick<InventoryItem, 'currentQuantity'>,
): boolean {
  return item.currentQuantity >= 0;
}

export function inventoryItemMinimumLevelIsValid(
  item: Pick<InventoryItem, 'minimumLevel'>,
): boolean {
  return item.minimumLevel >= 0;
}

export function inventoryItemInvariantsValid(item: InventoryItem): boolean {
  return (
    inventoryItemNameIsValid(item) &&
    inventoryItemUnitIsValid(item) &&
    inventoryItemCurrentQuantityIsValid(item) &&
    inventoryItemMinimumLevelIsValid(item)
  );
}

export function isInventoryItemBelowMinimum(
  item: Pick<InventoryItem, 'currentQuantity' | 'minimumLevel'>,
): boolean {
  return item.currentQuantity <= item.minimumLevel;
}
