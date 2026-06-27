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
      "Read Order and all OrderItems via Order port after status changed to CONFIRMED",
      "For each OrderItem, read MenuItem recipe components via MenuItem port",
      "Apply ingredientConsumptionTrigger rule to compute total ingredient quantities needed",
      "Read current InventoryItem stock levels via InventoryItem port",
      "Validate sufficient stock exists for all ingredients",
      "Create StockConsumption entries for each ingredient deduction",
      "Decrement InventoryItem.currentQuantity and update status per inventoryLowStockThreshold",
      "Persist all StockConsumption and InventoryItem updates within transaction",
      "Return consumption summary with per-ingredient deductions and updated stock levels"
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
