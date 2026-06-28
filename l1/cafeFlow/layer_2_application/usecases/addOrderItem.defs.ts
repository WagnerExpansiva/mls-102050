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
            "description": "ID of the parent Order to which the item is added"
          },
          {
            "name": "menuItemId",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "ID of the MenuItem being ordered"
          },
          {
            "name": "quantity",
            "type": "number",
            "required": true,
            "description": "Quantity ordered"
          },
          {
            "name": "observations",
            "type": "string",
            "required": false,
            "description": "Free-text observations for the kitchen"
          }
        ],
        "output": [
          {
            "name": "orderItemId",
            "type": "string",
            "required": true,
            "description": "Generated ID of the new OrderItem"
          },
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "description": "Parent Order ID"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Initial status of the OrderItem (new)"
          },
          {
            "name": "unitPrice",
            "type": "number",
            "required": true,
            "description": "Unit price copied from MenuItem"
          },
          {
            "name": "totalPrice",
            "type": "number",
            "required": true,
            "description": "unitPrice * quantity"
          },
          {
            "name": "orderTotalAmount",
            "type": "number",
            "required": true,
            "description": "Recalculated Order total after adding item"
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
          "Load MenuItem by menuItemId via MenuItem port to get current price and status",
          "Validate MenuItem status is 'active'",
          "Validate Order status allows adding items (draft or sentToKitchen) per orderStatusTransitions rule",
          "Create OrderItem with unitPrice from MenuItem.price, totalPrice = unitPrice * quantity, status = 'new'",
          "Add OrderItem to Order's items collection",
          "Recalculate Order.totalAmount as sum of all non-cancelled item totalPrice",
          "Save Order via Order port",
          "If Order status transitions to sentToKitchen, trigger ingredientConsumptionTrigger for stock consumption"
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
