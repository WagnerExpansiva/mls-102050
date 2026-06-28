/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/menuItemRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const menuItemRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "MenuItemRepositoryAdapter",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "className": "MenuItemRepository",
    "entityId": "MenuItem",
    "portRef": "IMenuItemRepository",
    "tableRef": "menu_items",
    "mdmReads": [
      "MenuCategory"
    ],
    "notes": [
      "Columns: menu_item_id, menu_category_id, status, created_at. Details JSONB: name, description, price, updatedAt, recipeComponents. MDM ref MenuCategory resolved through 102034."
    ]
  }
} as const;

export default menuItemRepositoryAdapter;

export const pipeline = [
  {
    "id": "menuItemRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/menuItemRepositoryAdapter.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/menuItemRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/ports/menuItemRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/menuItem.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/menuItem.d.ts"
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
