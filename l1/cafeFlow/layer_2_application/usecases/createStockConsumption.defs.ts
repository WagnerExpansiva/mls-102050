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
      "Read Order and OrderItems via Order port",
      "Read MenuItem recipes via MenuItem port",
      "Read InventoryItem current quantities via InventoryItem port",
      "Apply ingredientConsumptionTrigger rule to compute required quantities from RecipeComponent",
      "Validate sufficient stock for each InventoryItem",
      "Create StockConsumption records per InventoryItem",
      "Decrement InventoryItem.currentQuantity",
      "Persist updated InventoryItem via InventoryItem port",
      "Return consumption summary"
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
