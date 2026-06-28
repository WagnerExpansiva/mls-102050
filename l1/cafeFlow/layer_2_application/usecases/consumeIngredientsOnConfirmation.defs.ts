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
      "Read Order and confirmed OrderItems via Order port",
      "Read MenuItem recipes via MenuItem port",
      "Read InventoryItem stock levels via InventoryItem port",
      "Apply ingredientConsumptionTrigger rule to compute consumption quantities from RecipeComponent",
      "Validate sufficient stock for each InventoryItem",
      "Create StockConsumption records",
      "Decrement InventoryItem.currentQuantity and update status if below threshold",
      "Persist all changes via InventoryItem port",
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
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "ingredientConsumptionTrigger"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
