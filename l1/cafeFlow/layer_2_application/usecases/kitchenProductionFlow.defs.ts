/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/kitchenProductionFlow.defs.ts" enhancement="_blank"/>

export const kitchenProductionFlowUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "kitchenProductionFlow",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "kitchenProductionFlow",
    "functionName": "kitchenProductionFlow",
    "inputTypeName": "KitchenProductionFlowInput",
    "outputTypeName": "KitchenProductionFlowOutput",
    "ports": [
      "Order"
    ],
    "rulesApplied": [
      "orderStatusTransitions"
    ],
    "transactional": true,
    "steps": [
      "Receive KitchenTicket created from Order via Order port",
      "Transition ticket items through PENDING -> PREPARING per orderStatusTransitions",
      "As each item completes, transition to READY and notify service staff",
      "When all items are READY, mark KitchenTicket as COMPLETED",
      "Trigger order status update to READY if all kitchen tickets for the order are completed",
      "Return production flow result with ticket and item statuses"
    ]
  }
} as const;

export default kitchenProductionFlowUsecase;

export const pipeline = [
  {
    "id": "kitchenProductionFlow__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/kitchenProductionFlow.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/kitchenProductionFlow.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/order.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_3.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "orderStatusTransitions"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
