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
    "functionName": "addOrderItem",
    "inputTypeName": "AddOrderItemInput",
    "outputTypeName": "AddOrderItemOutput",
    "ports": [
      "MenuItem",
      "Order"
    ],
    "rulesApplied": [
      "orderStatusTransitions",
      "ingredientConsumptionTrigger"
    ],
    "transactional": true,
    "steps": [
      "Validate order exists and is in an editable status (OPEN or SENT) per orderStatusTransitions",
      "Fetch MenuItem by id to validate availability and current price",
      "Create OrderItem with quantity, notes, and unit price snapshot from MenuItem",
      "Add OrderItem to Order aggregate and recompute Order.totalAmount",
      "Persist Order with new OrderItem via Order port",
      "If order status triggers ingredient consumption, enqueue stock consumption for the new item"
    ]
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
      "_102050_/l1/cafeFlow/layer_2_application/ports/menuItemRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/menuItem.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/order.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_3.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "orderStatusTransitions",
      "ingredientConsumptionTrigger"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
