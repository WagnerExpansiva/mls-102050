/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/inventoryItem.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const inventoryItemTableDef: TableDefinition = {
  moduleId: 'cafeFlow',
  repositoryName: 'cafeFlowInventoryItem',
  tableName: 'inventory_item',
  purpose: 'cadastro',
  description: 'Itens de inventário. Campos não indexados em details (JSONB).',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'inventory_item_id', postgresType: 'UUID', description: 'PK/FK identifier for inventory item' },
    { name: 'status', postgresType: 'VARCHAR', description: 'Status of the inventory item' },
    { name: 'created_at', postgresType: 'TIMESTAMPTZ', description: 'Creation timestamp for ordering', defaultSql: 'NOW()' },
    { name: 'details', postgresType: 'JSONB', nullable: true, description: 'Contains name, description, unit, currentQuantity, minimumLevel, updatedAt' },
  ],
  primaryKey: ['inventory_item_id'],
  indexes: [
    { name: 'idx_inventory_item_status', columns: ['status'] },
    { name: 'idx_inventory_item_created_at', columns: ['created_at'] },
  ],
  version: 1,
};
