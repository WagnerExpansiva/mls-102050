/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/manageInventoryItems.defs.ts" enhancement="_blank"/>

export const manageInventoryItemsUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "manageInventoryItems",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "manageInventoryItems",
    "functionName": "manageInventoryItems",
    "inputTypeName": "ManageInventoryItemsInput",
    "outputTypeName": "ManageInventoryItemsOutput",
    "ports": [
      "InventoryItem"
    ],
    "rulesApplied": [
      "inventoryLowStockThreshold",
      "ingredientConsumptionTrigger"
    ],
    "transactional": true,
    "steps": [
      "Perform CRUD operation (create/update/delete) on InventoryItem via InventoryItem port",
      "Validate name, unit, currentQuantity, and minimumLevel fields",
      "After update, evaluate inventoryLowStockThreshold: if currentQuantity <= minimumLevel, set status to LOW_STOCK",
      "Check ingredientConsumptionTrigger dependencies to ensure item is not referenced in pending consumptions before deletion",
      "Persist changes and return updated InventoryItem(s)"
    ]
  }
} as const;

export default manageInventoryItemsUsecase;

export const pipeline = [
  {
    "id": "manageInventoryItems__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/manageInventoryItems.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/manageInventoryItems.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/ports/inventoryItemRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/inventoryItem.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_3.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "inventoryLowStockThreshold",
      "ingredientConsumptionTrigger"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
