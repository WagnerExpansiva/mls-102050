/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/menuItem.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const menuItemTableDef: TableDefinition = {
  moduleId: 'cafeFlow',
  repositoryName: 'cafeFlowMenuItem',
  tableName: 'menu_item',
  purpose: 'cadastro',
  description: 'Menu items. Name, description, price, updatedAt and child collection RecipeComponent stored in details (JSONB).',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'menu_item_id', postgresType: 'UUID', description: 'PK/FK identifier for menu item' },
    { name: 'menu_category_id', postgresType: 'UUID', description: 'FK to menu category' },
    { name: 'status', postgresType: 'VARCHAR', description: 'Status of the menu item' },
    { name: 'created_at', postgresType: 'TIMESTAMPTZ', defaultSql: 'NOW()', description: 'Creation timestamp for ordering' },
    { name: 'details', postgresType: 'JSONB', nullable: true, description: 'Contains name, description, price, updatedAt and child collection RecipeComponent' },
  ],
  primaryKey: ['menu_item_id'],
  indexes: [
    { name: 'idx_menu_item_menu_category_id', columns: ['menu_category_id'] },
    { name: 'idx_menu_item_status', columns: ['status'] },
    { name: 'idx_menu_item_created_at', columns: ['created_at'] },
  ],
  version: 1,
};
