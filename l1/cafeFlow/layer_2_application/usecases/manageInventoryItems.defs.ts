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
      "Read existing InventoryItem by id (for update) or list all (for browse) via InventoryItem port",
      "For create/update: validate name, unit, minimumLevel, currentQuantity fields",
      "Apply inventoryLowStockThreshold rule to set status (OK, LOW, CRITICAL) based on currentQuantity vs minimumLevel",
      "If ingredientConsumptionTrigger context applies, validate no pending consumptions conflict",
      "Persist InventoryItem changes within transaction",
      "Return created/updated InventoryItem with computed status"
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
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "inventoryLowStockThreshold",
      "ingredientConsumptionTrigger"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
