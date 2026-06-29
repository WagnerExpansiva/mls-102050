/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/ports/inventoryItemRepository.ts" enhancement="_blank"/>
import type {
  InventoryItem,
  InventoryItemStatus,
} from '/_102050_/l1/cafeFlow/layer_3_domain/entities/inventoryItem.js';

export type InventoryItemId = string;
export type Sku = string;
export type SupplierId = string;

export type InventoryItemCollection = InventoryItem[];

export interface InventoryItemFilter {
  status?: InventoryItemStatus;
  supplierId?: SupplierId;
}

export interface IInventoryItemRepository {
  getById(inventoryItemId: InventoryItemId): Promise<InventoryItem>;
  list(filter?: InventoryItemFilter): Promise<InventoryItemCollection>;
  save(aggregate: InventoryItem): Promise<void>;
  findBySku(sku: Sku): Promise<InventoryItem>;
  findLowStock(): Promise<InventoryItemCollection>;
  findBySupplier(supplierId: SupplierId): Promise<InventoryItemCollection>;
}
