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
    "className": "MenuItemRepositoryAdapter",
    "entityId": "MenuItem",
    "portRef": "IMenuItemRepository",
    "tableRef": "menu_items",
    "mdmReads": [
      "MenuCategory"
    ],
    "notes": [
      "Maps aggregate root scalars to real columns; non-indexed fields and RecipeComponent[] to details JSONB",
      "Resolves MenuCategory mdmRef through shared 102034 MDM runtime (no local MDM table)",
      "ctx.data available for persistence context"
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
      "_102021_/l2/skills/layer_4.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
