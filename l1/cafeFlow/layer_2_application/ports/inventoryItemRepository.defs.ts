/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/ports/inventoryItemRepository.defs.ts" enhancement="_blank"/>

export const inventoryItemRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "InventoryItemRepository",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "InventoryItem",
    "interfaceName": "IInventoryItemRepository",
    "methods": [
      {
        "name": "getById",
        "params": [
          "id: InventoryItemId"
        ],
        "returns": "InventoryItem"
      },
      {
        "name": "list",
        "params": [
          "filter: InventoryItemFilter"
        ],
        "returns": "InventoryItem[]"
      },
      {
        "name": "save",
        "params": [
          "inventoryItem: InventoryItem"
        ],
        "returns": "void"
      },
      {
        "name": "findLowStock",
        "params": [],
        "returns": "InventoryItem[]"
      },
      {
        "name": "findBySku",
        "params": [
          "sku: Sku"
        ],
        "returns": "InventoryItem | null"
      },
      {
        "name": "findBySupplier",
        "params": [
          "supplierId: SupplierId"
        ],
        "returns": "InventoryItem[]"
      }
    ]
  }
} as const;

export default inventoryItemRepositoryPort;

export const pipeline = [
  {
    "id": "inventoryItemRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/ports/inventoryItemRepository.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/ports/inventoryItemRepository.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_3_domain/entities/inventoryItem.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_3.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
