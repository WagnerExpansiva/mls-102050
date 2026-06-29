/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/addOrderItem.defs.ts" enhancement="_blank"/>

export const addOrderItemUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "addOrderItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "addOrderItem",
    "ports": [
      "Order",
      "MenuItem"
    ],
    "functions": [
      {
        "functionName": "addOrderItem",
        "inputTypeName": "AddOrderItemInput",
        "outputTypeName": "AddOrderItemOutput",
        "input": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "ID of the parent Order to which the item will be added"
          },
          {
            "name": "menuItemId",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "ID of the MenuItem to add to the order"
          },
          {
            "name": "quantity",
            "type": "number",
            "required": true,
            "ofEntity": "OrderItem",
            "description": "Quantity of the menu item ordered"
          },
          {
            "name": "observations",
            "type": "string",
            "required": false,
            "ofEntity": "OrderItem",
            "description": "Optional preparation notes or customer requests"
          }
        ],
        "output": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "ID of the parent Order"
          },
          {
            "name": "orderItemId",
            "type": "string",
            "required": true,
            "ofEntity": "OrderItem",
            "description": "ID of the newly created OrderItem"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "OrderItem",
            "description": "Initial status of the order item (new)"
          }
        ],
        "ports": [
          "Order",
          "MenuItem"
        ],
        "rulesApplied": [
          "orderStatusTransitions",
          "ingredientConsumptionTrigger"
        ],
        "transactional": true,
        "steps": [
          "Load Order by orderId via Order port",
          "Validate Order status is not closed or cancelled (orderStatusTransitions rule)",
          "Load MenuItem by menuItemId via MenuItem port",
          "Validate MenuItem status is active",
          "Compute unitPrice from MenuItem.price and totalPrice = unitPrice * quantity",
          "Create new OrderItem with status 'new', computed prices, and provided observations",
          "Add OrderItem to Order's items collection",
          "Recalculate Order.totalAmount from all order items",
          "Apply ingredientConsumptionTrigger: generate StockConsumption entries for the menu item's ingredients",
          "Save Order (with embedded OrderItem and StockConsumption) via Order port",
          "Return orderId, orderItemId, and status"
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default addOrderItemUsecase;

export const pipeline = [
  {
    "id": "addOrderItem__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/addOrderItem.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/addOrderItem.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_2_application/ports/menuItemRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/order.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/menuItem.d.ts"
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
