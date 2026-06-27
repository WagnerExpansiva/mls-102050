/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/payment.defs.ts" enhancement="_blank"/>

export const paymentTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "Payment",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "Payment",
    "tableName": "payment",
    "columns": [
      {
        "name": "payment_id",
        "type": "uuid",
        "nullable": false,
        "description": "PK/FK identifier for payment"
      },
      {
        "name": "order_id",
        "type": "uuid",
        "nullable": false,
        "description": "FK to order"
      },
      {
        "name": "daily_shift_id",
        "type": "uuid",
        "nullable": false,
        "description": "FK to daily shift"
      },
      {
        "name": "status",
        "type": "varchar",
        "nullable": false,
        "description": "Status of the payment"
      },
      {
        "name": "created_at",
        "type": "timestamp",
        "nullable": false,
        "description": "Creation timestamp for ordering"
      },
      {
        "name": "details",
        "type": "jsonb",
        "nullable": true,
        "description": "Contains method, amount, updatedAt"
      }
    ],
    "primaryKey": [
      "payment_id"
    ],
    "indexes": [
      {
        "indexName": "idx_payment_order_id",
        "columns": [
          "order_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_payment_daily_shift_id",
        "columns": [
          "daily_shift_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_payment_status",
        "columns": [
          "status"
        ],
        "unique": false
      },
      {
        "indexName": "idx_payment_created_at",
        "columns": [
          "created_at"
        ],
        "unique": false
      }
    ],
    "detailsColumn": {
      "enabled": true,
      "columnName": "details",
      "childCollections": []
    }
  }
} as const;

export default paymentTableDefinition;

export const pipeline = [
  {
    "id": "payment__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/payment.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/payment.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_3_domain/entities/payment.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/persistenceTable.md",
      "_102034_.d.ts"
    ],
    "afterSaveBackEnd": "_102021_/l2/agentMaterializeSolution/registerBackEnd.ts?registerLayer1",
    "agent": "agentMaterializeGen"
  }
] as const;
