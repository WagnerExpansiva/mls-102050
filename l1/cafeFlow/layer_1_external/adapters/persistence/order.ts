/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/order.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const orderTableDef: TableDefinition = {
  moduleId: 'cafeFlow',
  repositoryName: 'cafeFlowOrder',
  tableName: 'order',
  purpose: 'transacao',
  description: 'Pedidos. Itens, kitchen ticket e campos não indexados em details (JSONB).',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'order_id', postgresType: 'UUID', description: 'PK/FK identifier for order' },
    { name: 'daily_shift_id', postgresType: 'UUID', description: 'FK to daily shift' },
    { name: 'table_id', postgresType: 'UUID', nullable: true, description: 'FK to table' },
    { name: 'kitchen_ticket_id', postgresType: 'UUID', nullable: true, description: 'FK to kitchen ticket' },
    { name: 'order_type', postgresType: 'VARCHAR', description: 'Order type (dine-in, takeaway, delivery, etc.)' },
    { name: 'status', postgresType: 'VARCHAR', description: 'Status of the order' },
    { name: 'created_at', postgresType: 'TIMESTAMPTZ', description: 'Creation timestamp for ordering' },
    { name: 'details', postgresType: 'JSONB', nullable: true, description: 'Contains totalAmount, notes, customerName, customerPhone, numberOfGuests, closedAt, cancelledAt, cancellationReason, updatedAt and child collections OrderItem, KitchenTicket' },
  ],
  primaryKey: ['order_id'],
  indexes: [
    { name: 'idx_order_daily_shift_id', columns: ['daily_shift_id'] },
    { name: 'idx_order_table_id', columns: ['table_id'] },
    { name: 'idx_order_kitchen_ticket_id', columns: ['kitchen_ticket_id'] },
    { name: 'idx_order_order_type', columns: ['order_type'] },
    { name: 'idx_order_status', columns: ['status'] },
    { name: 'idx_order_created_at', columns: ['created_at'] },
  ],
  version: 1,
};
