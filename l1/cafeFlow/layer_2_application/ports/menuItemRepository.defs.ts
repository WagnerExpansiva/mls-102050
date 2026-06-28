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
        "returns": "MenuItem | null",
        "params": [
          "menuItemId: MenuItemId"
        ]
      },
      {
        "name": "list",
        "returns": "MenuItem[]",
        "params": [
          "filter: MenuItemFilter"
        ]
      },
      {
        "name": "save",
        "returns": "void",
        "params": [
          "menuItem: MenuItem"
        ]
      },
      {
        "name": "findByCategory",
        "returns": "MenuItem[]",
        "params": [
          "category: Category"
        ]
      },
      {
        "name": "findAvailable",
        "returns": "MenuItem[]",
        "params": []
      },
      {
        "name": "findByNamePattern",
        "returns": "MenuItem[]",
        "params": [
          "pattern: string"
        ]
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
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/repositoryPort.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
