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
      "orderStatusTransitions",
      "ingredientConsumptionTrigger"
    ],
    "transactional": true,
    "steps": [
      "Step 1 — Receive Order: read Order and its OrderItems via Order port",
      "Step 2 — Create Ticket: invoke createKitchenTicket (apply orderStatusTransitions)",
      "Step 3 — Track Progress: invoke updateOrderItemStatus as each item progresses (PENDING → IN_PROGRESS → READY)",
      "Step 4 — Update Ticket: invoke updateKitchenTicketStatus when all items are READY (apply orderStatusTransitions)",
      "Step 5 — Trigger Consumption: apply ingredientConsumptionTrigger rule when items are confirmed",
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
