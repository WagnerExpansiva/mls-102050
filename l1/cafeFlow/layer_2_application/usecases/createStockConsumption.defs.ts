/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/createStockConsumption.defs.ts" enhancement="_blank"/>

export const createStockConsumptionUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createStockConsumption",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createStockConsumption",
    "functionName": "createStockConsumption",
    "inputTypeName": "CreateStockConsumptionInput",
    "outputTypeName": "CreateStockConsumptionOutput",
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
      "Fetch Order and its OrderItems via Order port",
      "For each OrderItem, fetch MenuItem and resolve RecipeComponent ingredients via MenuItem port",
      "Calculate required quantity per InventoryItem based on recipe and item quantity",
      "Check current InventoryItem quantities via InventoryItem port",
      "Deduct consumed quantities from InventoryItem aggregates",
      "Create StockConsumption records linking OrderItem to InventoryItem with consumed amounts",
      "Persist updated InventoryItems and StockConsumption records",
      "Flag any InventoryItem that falls below minimumLevel"
    ]
  }
} as const;

export default createStockConsumptionUsecase;

export const pipeline = [
  {
    "id": "createStockConsumption__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/createStockConsumption.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/createStockConsumption.defs.ts",
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
