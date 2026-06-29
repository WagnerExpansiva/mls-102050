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
            "ofEntity": "Order"
          },
          {
            "name": "orderItemIds",
            "type": "string",
            "required": true,
            "description": "IDs of order items to send to kitchen",
            "ofEntity": "OrderItem"
          }
        ],
        "output": [
          {
            "name": "kitchenTicketId",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Kitchen ticket status after creation",
            "ofEntity": "KitchenTicket"
          }
        ],
        "ports": [
          "Order"
        ],
        "rulesApplied": [
          "KT-001: A kitchen ticket can only be created for an order with items in 'new' status",
          "KT-002: Selected order items must belong to the given order",
          "KT-003: Order items are set to 'sentToKitchen' when a kitchen ticket is created",
          "KT-004: Kitchen ticket is created with status 'open'"
        ],
        "transactional": true,
        "steps": [
          "Load Order aggregate via Order port by orderId",
          "Validate that the order exists and is in an active state",
          "Validate that each provided orderItemId belongs to the order and has status 'new'",
          "Create a new KitchenTicket with status 'open' and link it to the order",
          "Assign kitchenTicketId to each selected OrderItem and set their status to 'sentToKitchen'",
          "Save the Order aggregate via Order port",
          "Return kitchenTicketId and status"
        ]
      },
      {
        "functionName": "startPreparation",
        "inputTypeName": "StartPreparationInput",
        "outputTypeName": "StartPreparationOutput",
        "input": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order"
          },
          {
            "name": "kitchenTicketId",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket"
          }
        ],
        "output": [
          {
            "name": "kitchenTicketId",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Kitchen ticket status after starting preparation",
            "ofEntity": "KitchenTicket"
          }
        ],
        "ports": [
          "Order"
        ],
        "rulesApplied": [
          "KT-005: Preparation can only start on a ticket with status 'open'",
          "KT-006: All order items linked to the ticket are set to 'inPreparation'",
          "KT-007: Kitchen ticket status transitions from 'open' to 'inProgress'"
        ],
        "transactional": true,
        "steps": [
          "Load Order aggregate via Order port by orderId",
          "Find the KitchenTicket by kitchenTicketId within the order",
          "Validate that the kitchen ticket status is 'open'",
          "Set kitchen ticket status to 'inProgress'",
          "Set all linked OrderItems status to 'inPreparation'",
          "Save the Order aggregate via Order port",
          "Return kitchenTicketId and status"
        ]
      },
      {
        "functionName": "markItemsReady",
        "inputTypeName": "MarkItemsReadyInput",
        "outputTypeName": "MarkItemsReadyOutput",
        "input": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order"
          },
          {
            "name": "kitchenTicketId",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket"
          },
          {
            "name": "orderItemIds",
            "type": "string",
            "required": true,
            "description": "IDs of order items that are ready",
            "ofEntity": "OrderItem"
          }
        ],
        "output": [
          {
            "name": "kitchenTicketId",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Kitchen ticket status after marking items ready",
            "ofEntity": "KitchenTicket"
          },
          {
            "name": "allItemsReady",
            "type": "boolean",
            "required": true,
            "description": "Whether all items on the ticket are now ready"
          }
        ],
        "ports": [
          "Order"
        ],
        "rulesApplied": [
          "KT-008: Only items with status 'inPreparation' can be marked 'ready'",
          "KT-009: Items must belong to the given kitchen ticket",
          "KT-010: When all items on a ticket are 'ready', the ticket status transitions to 'done'"
        ],
        "transactional": true,
        "steps": [
          "Load Order aggregate via Order port by orderId",
          "Find the KitchenTicket by kitchenTicketId within the order",
          "Validate that the kitchen ticket status is 'inProgress'",
          "For each provided orderItemId, validate it belongs to the ticket and has status 'inPreparation'",
          "Set each specified OrderItem status to 'ready'",
          "Check if all OrderItems linked to the ticket now have status 'ready'",
          "If all items are ready, set kitchen ticket status to 'done'",
          "Save the Order aggregate via Order port",
          "Return kitchenTicketId, status, and allItemsReady flag"
        ]
      },
      {
        "functionName": "voidKitchenTicket",
        "inputTypeName": "VoidKitchenTicketInput",
        "outputTypeName": "VoidKitchenTicketOutput",
        "input": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order"
          },
          {
            "name": "kitchenTicketId",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket"
          }
        ],
        "output": [
          {
            "name": "kitchenTicketId",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Kitchen ticket status after voiding",
            "ofEntity": "KitchenTicket"
          }
        ],
        "ports": [
          "Order"
        ],
        "rulesApplied": [
          "KT-011: A kitchen ticket can only be voided if its status is 'open' or 'inProgress'",
          "KT-012: Voiding a ticket sets all linked order items back to 'new' and clears their kitchenTicketId",
          "KT-013: Kitchen ticket status transitions to 'void'"
        ],
        "transactional": true,
        "steps": [
          "Load Order aggregate via Order port by orderId",
          "Find the KitchenTicket by kitchenTicketId within the order",
          "Validate that the kitchen ticket status is 'open' or 'inProgress'",
          "Set kitchen ticket status to 'void'",
          "For each OrderItem linked to the ticket, set status to 'new' and clear kitchenTicketId",
          "Save the Order aggregate via Order port",
          "Return kitchenTicketId and status"
        ]
      }
    ],
    "mdmRefs": []
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
    "agent": "agentMaterializeGen"
  }
] as const;
