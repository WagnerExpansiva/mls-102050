/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/inventoryItemRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type {
  IInventoryItemRepository,
  InventoryItemFilter,
  InventoryItemCollection,
  InventoryItemId,
  Sku,
  SupplierId,
} from '/_102050_/l1/cafeFlow/layer_2_application/ports/inventoryItemRepository.js';
import type {
  InventoryItem,
  InventoryItemStatus,
} from '/_102050_/l1/cafeFlow/layer_3_domain/entities/inventoryItem.js';

interface InventoryItemRow {
  inventory_item_id: string;
  status: string;
  created_at: string;
  details: string | null;
}

interface InventoryItemDetails {
  name: string;
  description: string | null;
  unit: string;
  current_quantity: number;
  minimum_level: number;
  updated_at: string;
}

function toRow(item: InventoryItem): InventoryItemRow {
  const details: InventoryItemDetails = {
    name: item.name,
    description: item.description,
    unit: item.unit,
    current_quantity: item.currentQuantity,
    minimum_level: item.minimumLevel,
    updated_at: item.updatedAt,
  };
  return {
    inventory_item_id: item.inventoryItemId,
    status: item.status,
    created_at: item.createdAt,
    details: JSON.stringify(details),
  };
}

function parseDetails(row: InventoryItemRow): InventoryItemDetails {
  try {
    return JSON.parse(row.details ?? '{}') as InventoryItemDetails;
  } catch {
    return {
      name: '',
      description: null,
      unit: '',
      current_quantity: 0,
      minimum_level: 0,
      updated_at: row.created_at,
    };
  }
}

function toDomain(row: InventoryItemRow): InventoryItem {
  const d = parseDetails(row);
  return {
    inventoryItemId: row.inventory_item_id,
    name: d.name,
    description: d.description,
    unit: d.unit,
    currentQuantity: d.current_quantity,
    minimumLevel: d.minimum_level,
    status: row.status as InventoryItemStatus,
    createdAt: row.created_at,
    updatedAt: d.updated_at,
  };
}

export function createInventoryItemRepositoryAdapter(
  ctx: RequestContext,
): IInventoryItemRepository {
  const getTable = () =>
    ctx.data.moduleData.getTable<InventoryItemRow>('inventory_item');

  return {
    async getById(inventoryItemId: InventoryItemId): Promise<InventoryItem> {
      const row = await (
        await getTable()
      ).findOne({ where: { inventory_item_id: inventoryItemId } });
      if (!row) {
        throw new AppError(
          'NOT_FOUND',
          `InventoryItem ${inventoryItemId} not found`,
          404,
          { inventoryItemId },
        );
      }
      return toDomain(row);
    },

    async list(
      filter?: InventoryItemFilter,
    ): Promise<InventoryItemCollection> {
      const where: Partial<InventoryItemRow> = {};
      if (filter?.status) where.status = filter.status;
      const rows = await (
        await getTable()
      ).findMany({
        where,
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      return rows.map(toDomain);
    },

    async save(aggregate: InventoryItem): Promise<void> {
      const repo = await getTable();
      const existing = await repo.findOne({
        where: { inventory_item_id: aggregate.inventoryItemId },
      });
      if (existing) {
        await repo.update({
          where: { inventory_item_id: aggregate.inventoryItemId },
          patch: toRow(aggregate),
        });
      } else {
        await repo.insert({ record: toRow(aggregate) });
      }
    },

    async findBySku(sku: Sku): Promise<InventoryItem> {
      throw new AppError(
        'NOT_FOUND',
        `InventoryItem with sku ${sku} not found`,
        404,
        { sku },
      );
    },

    async findLowStock(): Promise<InventoryItemCollection> {
      const rows = await (
        await getTable()
      ).findMany({
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      return rows
        .map(toDomain)
        .filter((item) => item.currentQuantity <= item.minimumLevel);
    },

    async findBySupplier(
      _supplierId: SupplierId,
    ): Promise<InventoryItemCollection> {
      return [];
    },
  };
}
