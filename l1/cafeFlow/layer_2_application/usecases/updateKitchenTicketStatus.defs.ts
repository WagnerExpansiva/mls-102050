/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/updateKitchenTicketStatus.defs.ts" enhancement="_blank"/>

export const updateKitchenTicketStatusUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateKitchenTicketStatus",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateKitchenTicketStatus",
    "ports": [
      "Order"
    ],
    "functions": [
      {
        "functionName": "updateKitchenTicketStatus",
        "inputTypeName": "UpdateKitchenTicketStatusInput",
        "outputTypeName": "UpdateKitchenTicketStatusOutput",
        "input": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Parent order aggregate id"
          },
          {
            "name": "kitchenTicketId",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket",
            "description": "Kitchen ticket to update"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket",
            "description": "New status: open | inProgress | done | void"
          }
        ],
        "output": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Parent order id"
          },
          {
            "name": "kitchenTicketId",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket",
            "description": "Updated kitchen ticket id"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket",
            "description": "New status applied"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket",
            "description": "Timestamp of the update"
          }
        ],
        "ports": [
          "Order"
        ],
        "rulesApplied": [
          "orderStatusTransitions"
        ],
        "transactional": true,
        "steps": [
          "Load the Order aggregate via OrderPort.findById(orderId)",
          "Locate the KitchenTicket by kitchenTicketId within the Order's kitchenTickets collection",
          "Validate the status transition using rule orderStatusTransitions (open→inProgress→done, open→void, inProgress→void)",
          "Apply the new status to the KitchenTicket and set updatedAt to current timestamp",
          "Save the Order aggregate via OrderPort.save(order)",
          "Return orderId, kitchenTicketId, status, updatedAt"
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default updateKitchenTicketStatusUsecase;

export const pipeline = [
  {
    "id": "updateKitchenTicketStatus__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/updateKitchenTicketStatus.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/updateKitchenTicketStatus.defs.ts",
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
    "agent": "agentMaterializeGen"
  }
] as const;
