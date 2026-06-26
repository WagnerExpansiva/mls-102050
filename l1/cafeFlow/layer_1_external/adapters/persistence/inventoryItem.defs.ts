/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/inventoryItem.defs.ts" enhancement="_blank"/>

export const inventoryItemTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "InventoryItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "InventoryItem",
    "tableName": "inventory_item",
    "columns": [
      {
        "name": "inventory_item_id",
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
        "description": "name, description, unit, currentQuantity, minimumLevel, updatedAt"
      }
    ],
    "primaryKey": [
      "inventory_item_id"
    ],
    "indexes": [
      {
        "indexName": "idx_inventory_item_status",
        "columns": [
          "status"
        ],
        "unique": false
      },
      {
        "indexName": "idx_inventory_item_created_at",
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

export default inventoryItemTableDefinition;

export const pipeline = [
  {
    "id": "inventoryItem__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/inventoryItem.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/inventoryItem.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_3_domain/entities/inventoryItem.d.ts"
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
