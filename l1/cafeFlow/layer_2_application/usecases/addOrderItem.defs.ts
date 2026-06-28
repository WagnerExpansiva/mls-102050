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
      "Validate order exists and is in a status that allows item additions (OPEN or similar)",
      "Validate referenced MenuItem exists and is available",
      "Apply orderStatusTransitions rule to ensure order can accept items",
      "Create OrderItem entity linked to Order and MenuItem",
      "Persist OrderItem via Order port (aggregate root manages items)",
      "Recalculate Order.totalAmount",
      "Persist updated Order",
      "If ingredientConsumptionTrigger applies, enqueue stock consumption for later confirmation"
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
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "orderStatusTransitions",
      "ingredientConsumptionTrigger"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
