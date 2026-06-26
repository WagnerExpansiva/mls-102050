/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/order.defs.ts" enhancement="_blank"/>

export const orderTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "Order",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "Order",
    "tableName": "order",
    "columns": [
      {
        "name": "order_id",
        "type": "string",
        "nullable": false,
        "description": "pk/fk"
      },
      {
        "name": "daily_shift_id",
        "type": "string",
        "nullable": false,
        "description": "pk/fk"
      },
      {
        "name": "table_id",
        "type": "string",
        "nullable": false,
        "description": "pk/fk"
      },
      {
        "name": "kitchen_ticket_id",
        "type": "string",
        "nullable": false,
        "description": "pk/fk"
      },
      {
        "name": "order_type",
        "type": "string",
        "nullable": false,
        "description": "status"
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
        "description": "totalAmount, notes, customerName, customerPhone, numberOfGuests, closedAt, cancelledAt, cancellationReason, updatedAt"
      }
    ],
    "primaryKey": [
      "order_id"
    ],
    "indexes": [
      {
        "indexName": "idx_order_daily_shift_id",
        "columns": [
          "daily_shift_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_order_table_id",
        "columns": [
          "table_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_order_kitchen_ticket_id",
        "columns": [
          "kitchen_ticket_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_order_order_type",
        "columns": [
          "order_type"
        ],
        "unique": false
      },
      {
        "indexName": "idx_order_status",
        "columns": [
          "status"
        ],
        "unique": false
      },
      {
        "indexName": "idx_order_created_at",
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
        "OrderItem",
        "KitchenTicket"
      ]
    }
  }
} as const;

export default orderTableDefinition;

export const pipeline = [
  {
    "id": "order__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/order.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/order.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_3_domain/entities/order.d.ts"
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
