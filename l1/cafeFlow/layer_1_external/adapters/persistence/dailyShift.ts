/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/dailyShift.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const dailyShiftTableDef: TableDefinition = {
  moduleId: 'cafeFlow',
  repositoryName: 'cafeFlowDailyShift',
  tableName: 'daily_shift',
  purpose: 'transacao',
  description: 'Turnos diários do caixa. Campos não indexados e coleção CashMovement em details (JSONB).',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'daily_shift_id', postgresType: 'UUID', description: 'PK/FK identifier for daily shift' },
    { name: 'status', postgresType: 'VARCHAR', description: 'Status of the daily shift' },
    { name: 'created_at', postgresType: 'TIMESTAMPTZ', defaultSql: 'NOW()', description: 'Creation timestamp for ordering' },
    { name: 'details', postgresType: 'JSONB', nullable: true, description: 'Contains shiftDate, openedAt, closedAt, openingCashBalance, closingCashBalance, totalSales, totalPayments, closingNotes, updatedAt and child collection CashMovement' },
  ],
  primaryKey: ['daily_shift_id'],
  indexes: [
    { name: 'idx_daily_shift_status', columns: ['status'] },
    { name: 'idx_daily_shift_created_at', columns: ['created_at'] },
  ],
  version: 1,
};
