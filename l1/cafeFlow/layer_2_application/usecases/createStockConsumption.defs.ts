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
    "ports": [
      "Order",
      "MenuItem",
      "InventoryItem"
    ],
    "functions": [
      {
        "functionName": "createStockConsumption",
        "inputTypeName": "CreateStockConsumptionInput",
        "outputTypeName": "CreateStockConsumptionOutput",
        "input": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "The order containing the item that triggered stock consumption"
          },
          {
            "name": "orderItemId",
            "type": "string",
            "required": true,
            "ofEntity": "OrderItem",
            "description": "The order item whose menu item recipe components will be consumed"
          }
        ],
        "output": [
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Overall result status: 'posted' when all consumption records are created successfully"
          },
          {
            "name": "stockConsumptionCount",
            "type": "number",
            "required": true,
            "description": "Number of StockConsumption records created (one per recipe component)"
          },
          {
            "name": "inventoryItemIds",
            "type": "string",
            "required": true,
            "ofEntity": "InventoryItem",
            "description": "Comma-separated list of InventoryItem ids whose stock was decremented"
          }
        ],
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
          "1. Load Order by orderId via Order port; validate order exists and status is not 'cancelled'",
          "2. Find the OrderItem by orderItemId within the Order's items collection; validate it exists and status is 'served' or 'ready'",
          "3. Load MenuItem by orderItem.menuItemId via MenuItem port; validate menuItem status is 'active'",
          "4. Retrieve RecipeComponents from the MenuItem aggregate (each has inventoryItemId and quantity per unit)",
          "5. For each RecipeComponent calculate consumedQuantity = recipeComponent.quantity * orderItem.quantity",
          "6. Load InventoryItem by recipeComponent.inventoryItemId via InventoryItem port; validate status is 'active' and currentQuantity >= consumedQuantity",
          "7. Decrement InventoryItem.currentQuantity by consumedQuantity; save InventoryItem via InventoryItem port",
          "8. Create StockConsumption record: inventoryItemId, orderItemId, quantity=consumedQuantity, status='posted', consumedAt=now; save via StockConsumption port",
          "9. Repeat steps 6-8 for every recipe component",
          "10. Return status='posted', stockConsumptionCount, and affected inventoryItemIds"
        ]
      }
    ],
    "mdmRefs": []
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
    "agent": "agentMaterializeGen"
  }
] as const;
