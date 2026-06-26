/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/ports/menuItemRepository.defs.ts" enhancement="_blank"/>

export const menuItemRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "MenuItemRepository",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "MenuItem",
    "interfaceName": "IMenuItemRepository",
    "methods": [
      {
        "name": "getById",
        "params": [
          "id: MenuItemId"
        ],
        "returns": "MenuItem"
      },
      {
        "name": "list",
        "params": [
          "filter: MenuItemFilter"
        ],
        "returns": "MenuItem[]"
      },
      {
        "name": "save",
        "params": [
          "menuItem: MenuItem"
        ],
        "returns": "void"
      },
      {
        "name": "findByCategory",
        "params": [
          "category: Category"
        ],
        "returns": "MenuItem[]"
      },
      {
        "name": "findAvailable",
        "params": [],
        "returns": "MenuItem[]"
      },
      {
        "name": "findByName",
        "params": [
          "name: MenuItemName"
        ],
        "returns": "MenuItem | null"
      }
    ]
  }
} as const;

export default menuItemRepositoryPort;

export const pipeline = [
  {
    "id": "menuItemRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/ports/menuItemRepository.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/ports/menuItemRepository.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_3_domain/entities/menuItem.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_3.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
