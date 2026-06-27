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
      "Validate order exists and is in a status that allows adding items (OPEN or similar) via Order port",
      "Validate referenced MenuItem exists and is available via MenuItem port",
      "Create OrderItem entity with quantity, notes, and unit price from MenuItem",
      "Add OrderItem to Order aggregate and recalculate Order.totalAmount",
      "Persist Order (with new OrderItem) via Order port within transaction",
      "If ingredientConsumptionTrigger applies, enqueue or create StockConsumption for the new item",
      "Return created OrderItem with id and computed totals"
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
