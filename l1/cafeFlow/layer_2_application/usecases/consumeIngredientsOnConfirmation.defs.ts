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
    "ports": [
      "Order",
      "InventoryItem",
      "MenuItem"
    ],
    "functions": [
      {
        "functionName": "consumeIngredientsOnConfirmation",
        "inputTypeName": "ConsumeIngredientsOnConfirmationInput",
        "outputTypeName": "ConsumeIngredientsOnConfirmationOutput",
        "input": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "description": "The order whose items are being confirmed for ingredient consumption"
          }
        ],
        "output": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "description": "The confirmed order id"
          },
          {
            "name": "stockConsumptionIds",
            "type": "string",
            "required": true,
            "description": "Ids of all StockConsumption records created",
            "ofEntity": "StockConsumption"
          },
          {
            "name": "inventoryItemIds",
            "type": "string",
            "required": true,
            "description": "Ids of all InventoryItems whose stock was decremented",
            "ofEntity": "InventoryItem"
          },
          {
            "name": "orderItemIds",
            "type": "string",
            "required": true,
            "description": "Ids of all OrderItems whose status was updated",
            "ofEntity": "OrderItem"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Outcome status: completed or failed"
          }
        ],
        "ports": [
          "Order",
          "InventoryItem",
          "MenuItem"
        ],
        "rulesApplied": [
          "Order must be in a confirmable state before consumption",
          "For each OrderItem load MenuItem to resolve RecipeComponents",
          "Consumption quantity = recipeComponent.quantity × orderItem.quantity",
          "InventoryItem.currentQuantity must be >= required quantity before decrement",
          "StockConsumption.status is set to 'posted' on creation",
          "InventoryItem.currentQuantity is decremented atomically per component",
          "OrderItem.status is updated after all consumptions for that item are posted",
          "All changes are persisted within a single transaction"
        ],
        "transactional": true,
        "steps": [
          "1. Load Order by orderId via Order port; validate order is confirmable",
          "2. For each OrderItem in the order:",
          "   a. Load MenuItem by orderItem.menuItemId via MenuItem port",
          "   b. Retrieve RecipeComponents from the MenuItem",
          "   c. For each RecipeComponent:",
          "      - Calculate requiredQuantity = recipeComponent.quantity × orderItem.quantity",
          "      - Load InventoryItem by recipeComponent.inventoryItemId via InventoryItem port",
          "      - Validate currentQuantity >= requiredQuantity; abort if insufficient",
          "      - Decrement InventoryItem.currentQuantity by requiredQuantity",
          "      - Save InventoryItem via InventoryItem port",
          "      - Create StockConsumption (inventoryItemId, orderItemId, quantity=requiredQuantity, status='posted', consumedAt=now)",
          "   d. Update OrderItem.status to reflect consumption completion",
          "3. Save Order (with embedded StockConsumptions and updated OrderItems) via Order port",
          "4. Return orderId, stockConsumptionIds, inventoryItemIds, orderItemIds, status"
        ]
      },
      {
        "functionName": "previewIngredientConsumption",
        "inputTypeName": "PreviewIngredientConsumptionInput",
        "outputTypeName": "PreviewIngredientConsumptionOutput",
        "input": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "description": "The order to preview ingredient consumption for"
          }
        ],
        "output": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "description": "The order id being previewed"
          },
          {
            "name": "orderItemId",
            "type": "string",
            "required": true,
            "description": "The order item id",
            "ofEntity": "OrderItem"
          },
          {
            "name": "menuItemId",
            "type": "string",
            "required": true,
            "description": "The menu item id",
            "ofEntity": "MenuItem"
          },
          {
            "name": "inventoryItemId",
            "type": "string",
            "required": true,
            "description": "The inventory item that would be consumed",
            "ofEntity": "InventoryItem"
          },
          {
            "name": "inventoryItemName",
            "type": "string",
            "required": true,
            "description": "Name of the inventory item",
            "ofEntity": "InventoryItem"
          },
          {
            "name": "requiredQuantity",
            "type": "number",
            "required": true,
            "description": "Calculated quantity to be consumed (recipeComponent.quantity × orderItem.quantity)"
          },
          {
            "name": "currentQuantity",
            "type": "number",
            "required": true,
            "description": "Current stock level of the inventory item",
            "ofEntity": "InventoryItem"
          },
          {
            "name": "sufficient",
            "type": "boolean",
            "required": true,
            "description": "Whether current stock is sufficient for the required quantity"
          }
        ],
        "ports": [
          "Order",
          "InventoryItem",
          "MenuItem"
        ],
        "rulesApplied": [
          "Consumption quantity = recipeComponent.quantity × orderItem.quantity",
          "InventoryItem.currentQuantity must be >= required quantity to be sufficient",
          "Preview is read-only; no mutations are performed"
        ],
        "transactional": false,
        "steps": [
          "1. Load Order by orderId via Order port",
          "2. For each OrderItem in the order:",
          "   a. Load MenuItem by orderItem.menuItemId via MenuItem port",
          "   b. For each RecipeComponent:",
          "      - Calculate requiredQuantity = recipeComponent.quantity × orderItem.quantity",
          "      - Load InventoryItem by recipeComponent.inventoryItemId via InventoryItem port",
          "      - Determine sufficient = currentQuantity >= requiredQuantity",
          "      - Project orderItemId, menuItemId, inventoryItemId, inventoryItemName, requiredQuantity, currentQuantity, sufficient",
          "3. Return all projected consumption preview rows"
        ]
      }
    ],
    "rulesApplied": [
      "Order must be in a confirmable state before consumption",
      "For each OrderItem load MenuItem to resolve RecipeComponents",
      "Consumption quantity = recipeComponent.quantity × orderItem.quantity",
      "InventoryItem.currentQuantity must be >= required quantity before decrement",
      "StockConsumption.status is set to 'posted' on creation",
      "InventoryItem.currentQuantity is decremented atomically per component",
      "OrderItem.status is updated after all consumptions for that item are posted",
      "All changes are persisted within a single transaction",
      "Preview is read-only; no mutations are performed"
    ],
    "mdmRefs": []
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
      "_102050_/l1/cafeFlow/layer_2_application/ports/inventoryItemRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_2_application/ports/menuItemRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/order.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/inventoryItem.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/menuItem.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "Order must be in a confirmable state before consumption",
      "For each OrderItem load MenuItem to resolve RecipeComponents",
      "Consumption quantity = recipeComponent.quantity × orderItem.quantity",
      "InventoryItem.currentQuantity must be >= required quantity before decrement",
      "StockConsumption.status is set to 'posted' on creation",
      "InventoryItem.currentQuantity is decremented atomically per component",
      "OrderItem.status is updated after all consumptions for that item are posted",
      "All changes are persisted within a single transaction",
      "Preview is read-only; no mutations are performed"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
