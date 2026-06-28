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
        "returns": "InventoryItem",
        "params": [
          "inventoryItemId: string"
        ],
        "description": "Retrieve a single InventoryItem aggregate by its identity"
      },
      {
        "name": "list",
        "returns": "InventoryItem[]",
        "params": [
          "filter: InventoryItemFilter"
        ],
        "description": "List InventoryItem aggregates matching the domain filter"
      },
      {
        "name": "save",
        "returns": "void",
        "params": [
          "inventoryItem: InventoryItem"
        ],
        "description": "Persist an InventoryItem aggregate"
      },
      {
        "name": "findBySku",
        "returns": "InventoryItem",
        "params": [
          "sku: Sku"
        ],
        "description": "Domain finder: item by stock-keeping unit"
      },
      {
        "name": "findLowStock",
        "returns": "InventoryItem[]",
        "params": [],
        "description": "Domain finder: items below their reorder threshold"
      },
      {
        "name": "findBySupplier",
        "returns": "InventoryItem[]",
        "params": [
          "supplierId: string"
        ],
        "description": "Domain finder: items provided by a given supplier"
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
