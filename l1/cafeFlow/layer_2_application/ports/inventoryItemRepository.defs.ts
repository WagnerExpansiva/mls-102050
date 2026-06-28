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
        "returns": "InventoryItem | null",
        "params": [
          "inventoryItemId: InventoryItemId"
        ]
      },
      {
        "name": "list",
        "returns": "InventoryItem[]",
        "params": [
          "filter: InventoryItemFilter"
        ]
      },
      {
        "name": "save",
        "returns": "void",
        "params": [
          "inventoryItem: InventoryItem"
        ]
      },
      {
        "name": "findBySku",
        "returns": "InventoryItem | null",
        "params": [
          "sku: Sku"
        ]
      },
      {
        "name": "findLowStock",
        "returns": "InventoryItem[]",
        "params": []
      },
      {
        "name": "findBySupplier",
        "returns": "InventoryItem[]",
        "params": [
          "supplierId: SupplierId"
        ]
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
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/repositoryPort.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
