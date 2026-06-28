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
        "type": "uuid",
        "nullable": false,
        "description": "PK/FK identifier for order"
      },
      {
        "name": "daily_shift_id",
        "type": "uuid",
        "nullable": false,
        "description": "FK to daily shift"
      },
      {
        "name": "table_id",
        "type": "uuid",
        "nullable": true,
        "description": "FK to table (nullable for non-dine-in orders)"
      },
      {
        "name": "kitchen_ticket_id",
        "type": "uuid",
        "nullable": true,
        "description": "FK to kitchen ticket"
      },
      {
        "name": "order_type",
        "type": "varchar",
        "nullable": false,
        "description": "Order type (dine-in, takeaway, delivery, etc.)"
      },
      {
        "name": "status",
        "type": "varchar",
        "nullable": false,
        "description": "Status of the order"
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
        "description": "Contains totalAmount, notes, customerName, customerPhone, numberOfGuests, closedAt, cancelledAt, cancellationReason, updatedAt and child collections OrderItem, KitchenTicket"
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
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/persistenceTable.md",
      "_102034_.d.ts"
    ],
    "afterSaveBackEnd": "_102021_/l2/agentMaterializeSolution/registerBackEnd.ts?registerLayer1",
    "agent": "agentMaterializeGen"
  }
] as const;
