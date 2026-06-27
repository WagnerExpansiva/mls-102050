/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/menuItem.defs.ts" enhancement="_blank"/>

export const menuItemTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "MenuItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "MenuItem",
    "tableName": "menu_item",
    "columns": [
      {
        "name": "menu_item_id",
        "type": "uuid",
        "nullable": false,
        "description": "PK/FK identifier for menu item"
      },
      {
        "name": "menu_category_id",
        "type": "uuid",
        "nullable": false,
        "description": "FK to menu category"
      },
      {
        "name": "status",
        "type": "varchar",
        "nullable": false,
        "description": "Status of the menu item"
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
        "description": "Contains name, description, price, updatedAt and child collection RecipeComponent"
      }
    ],
    "primaryKey": [
      "menu_item_id"
    ],
    "indexes": [
      {
        "indexName": "idx_menu_item_menu_category_id",
        "columns": [
          "menu_category_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_menu_item_status",
        "columns": [
          "status"
        ],
        "unique": false
      },
      {
        "indexName": "idx_menu_item_created_at",
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
        "RecipeComponent"
      ]
    }
  }
} as const;

export default menuItemTableDefinition;

export const pipeline = [
  {
    "id": "menuItem__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/menuItem.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/menuItem.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_3_domain/entities/menuItem.d.ts"
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
