/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/consumeIngredientsOnConfirmation.defs.ts" enhancement="_blank"/>

export const consumeIngredientsOnConfirmationUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "consumeIngredientsOnConfirmation",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "consumeIngredientsOnConfirmation",
    "functionName": "consumeIngredientsOnConfirmation",
    "inputTypeName": "ConsumeIngredientsOnConfirmationInput",
    "outputTypeName": "ConsumeIngredientsOnConfirmationOutput",
    "ports": [
      "Order",
      "MenuItem",
      "InventoryItem"
    ],
    "rulesApplied": [
      "ingredientConsumptionTrigger"
    ],
    "transactional": true,
    "steps": [
      "Fetch Order and all OrderItems via Order port upon order confirmation event",
      "For each OrderItem, fetch MenuItem and resolve RecipeComponent to InventoryItem mappings via MenuItem port",
      "Calculate total consumption quantity per InventoryItem across all OrderItems",
      "Deduct quantities from InventoryItem aggregates via InventoryItem port",
      "Create StockConsumption records for each consumed ingredient",
      "Flag any InventoryItem falling below minimumLevel",
      "Persist all InventoryItem updates and StockConsumption records atomically",
      "Return consumption summary with any low-stock alerts"
    ]
  }
} as const;

export default consumeIngredientsOnConfirmationUsecase;

export const pipeline = [
  {
    "id": "consumeIngredientsOnConfirmation__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/consumeIngredientsOnConfirmation.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/consumeIngredientsOnConfirmation.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_2_application/ports/menuItemRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_2_application/ports/inventoryItemRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/order.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/menuItem.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/inventoryItem.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_3.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "ingredientConsumptionTrigger"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
