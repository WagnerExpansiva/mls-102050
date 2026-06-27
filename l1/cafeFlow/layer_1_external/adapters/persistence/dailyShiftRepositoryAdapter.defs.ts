/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/dailyShiftRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const dailyShiftRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "DailyShiftRepositoryAdapter",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "className": "DailyShiftRepository",
    "entityId": "DailyShift",
    "portRef": "IDailyShiftRepository",
    "tableRef": "daily_shifts",
    "notes": [
      "Real columns: daily_shift_id, status, created_at",
      "Details JSONB: shift_date, opened_at, closed_at, opening_cash_balance, closing_cash_balance, total_sales, total_payments, closing_notes, updated_at, cash_movements (embedded CashMovement[])",
      "ctx.data used for row<->domain mapping"
    ]
  }
} as const;

export default dailyShiftRepositoryAdapter;

export const pipeline = [
  {
    "id": "dailyShiftRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/dailyShiftRepositoryAdapter.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/dailyShiftRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/dailyShift.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/repositoryAdapter.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
