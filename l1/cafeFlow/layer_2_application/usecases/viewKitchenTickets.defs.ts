/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/viewKitchenTickets.defs.ts" enhancement="_blank"/>

export const viewKitchenTicketsUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "viewKitchenTickets",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "viewKitchenTickets",
    "ports": [
      "Order"
    ],
    "functions": [
      {
        "functionName": "viewKitchenTickets",
        "inputTypeName": "ViewKitchenTicketsInput",
        "outputTypeName": "ViewKitchenTicketsOutput",
        "input": [
          {
            "name": "status",
            "type": "string",
            "required": false,
            "description": "Filter kitchen tickets by status (open, inProgress, done, void)"
          },
          {
            "name": "orderId",
            "type": "string",
            "required": false,
            "ofEntity": "Order",
            "description": "Filter kitchen tickets by parent order id"
          }
        ],
        "output": [
          {
            "name": "kitchenTicketId",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket",
            "description": "Unique identifier of the kitchen ticket"
          },
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Parent order id"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Current status of the kitchen ticket (open, inProgress, done, void)"
          },
          {
            "name": "createdAt",
            "type": "string",
            "required": true,
            "description": "Creation timestamp of the kitchen ticket"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "description": "Last update timestamp of the kitchen ticket"
          }
        ],
        "ports": [
          "Order"
        ],
        "rulesApplied": [],
        "transactional": false,
        "steps": [
          "Load orders from the Order port (filtered by orderId if provided)",
          "Extract embedded KitchenTicket entities from each loaded Order",
          "Apply optional status filter on the extracted kitchen tickets",
          "Project and return the matching kitchen ticket fields (kitchenTicketId, orderId, status, createdAt, updatedAt)"
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default viewKitchenTicketsUsecase;

export const pipeline = [
  {
    "id": "viewKitchenTickets__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/viewKitchenTickets.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/viewKitchenTickets.defs.ts",
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
