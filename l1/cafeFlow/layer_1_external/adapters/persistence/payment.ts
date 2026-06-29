/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/payment.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const paymentTableDef: TableDefinition = {
  moduleId: 'cafeFlow',
  repositoryName: 'cafeFlowPayment',
  tableName: 'payment',
  purpose: 'transacao',
  description: 'Pagamentos. Campos não indexados (method, amount, updatedAt) em details (JSONB).',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'payment_id', postgresType: 'UUID' },
    { name: 'order_id', postgresType: 'UUID' },
    { name: 'daily_shift_id', postgresType: 'UUID' },
    { name: 'status', postgresType: 'VARCHAR' },
    { name: 'created_at', postgresType: 'TIMESTAMPTZ', defaultSql: 'NOW()' },
    { name: 'details', postgresType: 'JSONB', nullable: true },
  ],
  primaryKey: ['payment_id'],
  indexes: [
    { name: 'idx_payment_order_id', columns: ['order_id'] },
    { name: 'idx_payment_daily_shift_id', columns: ['daily_shift_id'] },
    { name: 'idx_payment_status', columns: ['status'] },
    { name: 'idx_payment_created_at', columns: ['created_at'] },
  ],
  version: 1,
};
