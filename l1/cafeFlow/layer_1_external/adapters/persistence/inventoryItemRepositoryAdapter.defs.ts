/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/inventoryItemRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const inventoryItemRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "InventoryItemRepositoryAdapter",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "className": "InventoryItemRepositoryAdapter",
    "entityId": "InventoryItem",
    "portRef": "IInventoryItemRepository",
    "tableRef": "inventory_items",
    "mdmReads": [],
    "notes": [
      "Real columns: inventory_item_id, status, created_at",
      "Details JSONB holds name, description, unit, current_quantity, minimum_level, updated_at"
    ]
  }
} as const;

export default inventoryItemRepositoryAdapter;

export const pipeline = [
  {
    "id": "inventoryItemRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/inventoryItemRepositoryAdapter.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/inventoryItemRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/ports/inventoryItemRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/inventoryItem.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/inventoryItem.d.ts"
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
