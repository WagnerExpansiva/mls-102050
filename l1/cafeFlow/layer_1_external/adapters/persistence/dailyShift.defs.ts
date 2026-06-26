/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/dailyShift.defs.ts" enhancement="_blank"/>

export const dailyShiftTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "DailyShift",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "DailyShift",
    "tableName": "daily_shift",
    "columns": [
      {
        "name": "daily_shift_id",
        "type": "string",
        "nullable": false,
        "description": "pk/fk"
      },
      {
        "name": "status",
        "type": "string",
        "nullable": false,
        "description": "status"
      },
      {
        "name": "created_at",
        "type": "timestamp",
        "nullable": false,
        "description": "ordering"
      },
      {
        "name": "details",
        "type": "jsonb",
        "nullable": true,
        "description": "shiftDate, openedAt, closedAt, openingCashBalance, closingCashBalance, totalSales, totalPayments, closingNotes, updatedAt"
      }
    ],
    "primaryKey": [
      "daily_shift_id"
    ],
    "indexes": [
      {
        "indexName": "idx_daily_shift_status",
        "columns": [
          "status"
        ],
        "unique": false
      },
      {
        "indexName": "idx_daily_shift_created_at",
        "columns": [
          "created_at"
        ],
        "unique": false
      }
    ],
    "detailsColumn": {
      "enabled": true,
      "columnName": "details",
      "childCollections": [
        "CashMovement"
      ]
    }
  }
} as const;

export default dailyShiftTableDefinition;

export const pipeline = [
  {
    "id": "dailyShift__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/dailyShift.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/dailyShift.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_1.md",
      "_102034_.d.ts"
    ],
    "afterSaveBackEnd": "_102021_/l2/agentMaterializeSolution/registerBackEnd.ts?registerLayer1",
    "agent": "agentMaterializeGen"
  }
] as const;
