/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/createKitchenTicket.defs.ts" enhancement="_blank"/>

export const createKitchenTicketUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createKitchenTicket",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createKitchenTicket",
    "functionName": "createKitchenTicket",
    "inputTypeName": "CreateKitchenTicketInput",
    "outputTypeName": "CreateKitchenTicketOutput",
    "ports": [
      "Order"
    ],
    "rulesApplied": [
      "orderStatusTransitions"
    ],
    "transactional": true,
    "steps": [
      "Fetch Order and its OrderItems via Order port",
      "Validate order status allows kitchen ticket creation per orderStatusTransitions (must be SENT or beyond)",
      "Filter OrderItems that require kitchen preparation",
      "Create KitchenTicket with line items mapped from OrderItems",
      "Set KitchenTicket status to PENDING",
      "Persist KitchenTicket",
      "Return created ticket"
    ]
  }
} as const;

export default createKitchenTicketUsecase;

export const pipeline = [
  {
    "id": "createKitchenTicket__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/createKitchenTicket.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/createKitchenTicket.defs.ts",
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
