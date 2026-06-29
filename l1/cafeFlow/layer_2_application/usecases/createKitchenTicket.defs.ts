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
    "ports": [
      "Order"
    ],
    "functions": [
      {
        "functionName": "createKitchenTicket",
        "inputTypeName": "CreateKitchenTicketInput",
        "outputTypeName": "CreateKitchenTicketOutput",
        "input": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "The order for which a kitchen ticket is created"
          }
        ],
        "output": [
          {
            "name": "kitchenTicketId",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket",
            "description": "The generated kitchen ticket id"
          },
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "The parent order id"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket",
            "description": "Initial kitchen ticket status (open)"
          },
          {
            "name": "orderStatus",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Updated order status after transition"
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
          "Load Order by orderId via Order port",
          "Validate Order status is 'draft' and can transition to 'sentToKitchen' per orderStatusTransitions rule",
          "Generate kitchenTicketId (uuid) and create KitchenTicket with status 'open', orderId, createdAt and updatedAt set to now",
          "Assign kitchenTicketId to Order.kitchenTicketId",
          "Assign kitchenTicketId to every OrderItem in the order and set each OrderItem.status to 'sentToKitchen'",
          "Transition Order.status from 'draft' to 'sentToKitchen' (orderStatusTransitions rule)",
          "Update Order.updatedAt to now",
          "Save Order (with embedded KitchenTicket and updated OrderItems) via Order port",
          "Return kitchenTicketId, orderId, kitchen ticket status, and updated order status"
        ]
      }
    ],
    "mdmRefs": []
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
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
