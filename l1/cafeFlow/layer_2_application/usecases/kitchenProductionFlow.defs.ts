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
      "Step 1 - Receive: read confirmed Order and its OrderItems via Order port",
      "Step 2 - Create Tickets: generate KitchenTicket(s) grouped by preparation station",
      "Step 3 - Start Production: transition KitchenTicket status PENDING -> IN_PROGRESS (orderStatusTransitions)",
      "Step 4 - Item Completion: as each item finishes, update OrderItem status to READY",
      "Step 5 - Ticket Completion: when all items on a ticket are READY, transition ticket to READY",
      "Step 6 - Serve: transition OrderItem READY -> SERVED, mark KitchenTicket COMPLETED",
      "Step 7 - Verify: confirm all KitchenTickets are COMPLETED before allowing Order to close",
      "Return production flow summary with ticket and item status timeline"
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
      "orderStatusTransitions"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
