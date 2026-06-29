/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/takeoutOrderLifecycle.defs.ts" enhancement="_blank"/>

export const takeoutOrderLifecycleUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "takeoutOrderLifecycle",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "takeoutOrderLifecycle",
    "ports": [
      "Order"
    ],
    "functions": [
      {
        "functionName": "createTakeoutOrder",
        "inputTypeName": "CreateTakeoutOrderInput",
        "outputTypeName": "CreateTakeoutOrderOutput",
        "input": [
          {
            "name": "dailyShiftId",
            "type": "uuid",
            "required": true,
            "description": "The daily shift this order belongs to"
          },
          {
            "name": "customerName",
            "type": "string",
            "required": false,
            "description": "Name of the takeout customer"
          },
          {
            "name": "customerPhone",
            "type": "string",
            "required": false,
            "description": "Phone of the takeout customer"
          },
          {
            "name": "notes",
            "type": "string",
            "required": false,
            "description": "General order notes"
          },
          {
            "name": "items",
            "type": "array",
            "required": true,
            "ofEntity": "OrderItem",
            "description": "List of order items with menuItemId, quantity, unitPrice, observations"
          }
        ],
        "output": [
          {
            "name": "orderId",
            "type": "uuid",
            "required": true,
            "ofEntity": "Order",
            "description": "The created order id"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Initial status (draft)"
          }
        ],
        "ports": [
          "Order"
        ],
        "rulesApplied": [
          "orderType must be 'takeout'",
          "status starts as 'draft'",
          "totalAmount computed from items sum",
          "each item status starts as 'new'"
        ],
        "transactional": true,
        "steps": [
          "Load dailyShift context via Order port",
          "Create Order with orderType='takeout', status='draft'",
          "Create OrderItems with status='new', compute totalPrice=quantity*unitPrice",
          "Compute totalAmount from items",
          "Save Order aggregate via Order port"
        ]
      },
      {
        "functionName": "sendToKitchen",
        "inputTypeName": "SendToKitchenInput",
        "outputTypeName": "SendToKitchenOutput",
        "input": [
          {
            "name": "orderId",
            "type": "uuid",
            "required": true,
            "ofEntity": "Order",
            "description": "The order to send to kitchen"
          }
        ],
        "output": [
          {
            "name": "orderId",
            "type": "uuid",
            "required": true,
            "ofEntity": "Order",
            "description": "The order id"
          },
          {
            "name": "kitchenTicketId",
            "type": "uuid",
            "required": true,
            "ofEntity": "KitchenTicket",
            "description": "The created kitchen ticket id"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "New order status (sentToKitchen)"
          }
        ],
        "ports": [
          "Order"
        ],
        "rulesApplied": [
          "Order status must be 'draft' to send to kitchen",
          "Creates KitchenTicket with status 'open'",
          "All OrderItems transition to 'sentToKitchen'",
          "Order.kitchenTicketId is set",
          "Order.status transitions to 'sentToKitchen'"
        ],
        "transactional": true,
        "steps": [
          "Load Order aggregate via Order port",
          "Validate status is 'draft'",
          "Create KitchenTicket with status 'open', link to orderId",
          "Update each OrderItem status to 'sentToKitchen', set kitchenTicketId",
          "Update Order status to 'sentToKitchen', set kitchenTicketId",
          "Save Order aggregate via Order port"
        ]
      },
      {
        "functionName": "startPreparation",
        "inputTypeName": "StartPreparationInput",
        "outputTypeName": "StartPreparationOutput",
        "input": [
          {
            "name": "orderId",
            "type": "uuid",
            "required": true,
            "ofEntity": "Order",
            "description": "The order entering preparation"
          }
        ],
        "output": [
          {
            "name": "orderId",
            "type": "uuid",
            "required": true,
            "ofEntity": "Order",
            "description": "The order id"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "New order status (inPreparation)"
          }
        ],
        "ports": [
          "Order"
        ],
        "rulesApplied": [
          "Order status must be 'sentToKitchen' to start preparation",
          "KitchenTicket status transitions to 'inProgress'",
          "All OrderItems transition to 'inPreparation'",
          "Order.status transitions to 'inPreparation'"
        ],
        "transactional": true,
        "steps": [
          "Load Order aggregate via Order port",
          "Validate status is 'sentToKitchen'",
          "Update KitchenTicket status to 'inProgress'",
          "Update each OrderItem status to 'inPreparation'",
          "Update Order status to 'inPreparation'",
          "Save Order aggregate via Order port"
        ]
      },
      {
        "functionName": "markReady",
        "inputTypeName": "MarkReadyInput",
        "outputTypeName": "MarkReadyOutput",
        "input": [
          {
            "name": "orderId",
            "type": "uuid",
            "required": true,
            "ofEntity": "Order",
            "description": "The order ready for pickup"
          }
        ],
        "output": [
          {
            "name": "orderId",
            "type": "uuid",
            "required": true,
            "ofEntity": "Order",
            "description": "The order id"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "New order status (ready)"
          }
        ],
        "ports": [
          "Order"
        ],
        "rulesApplied": [
          "Order status must be 'inPreparation' to mark ready",
          "KitchenTicket status transitions to 'done'",
          "All OrderItems transition to 'ready'",
          "Order.status transitions to 'ready'"
        ],
        "transactional": true,
        "steps": [
          "Load Order aggregate via Order port",
          "Validate status is 'inPreparation'",
          "Update KitchenTicket status to 'done'",
          "Update each OrderItem status to 'ready'",
          "Update Order status to 'ready'",
          "Save Order aggregate via Order port"
        ]
      },
      {
        "functionName": "closeOrder",
        "inputTypeName": "CloseOrderInput",
        "outputTypeName": "CloseOrderOutput",
        "input": [
          {
            "name": "orderId",
            "type": "uuid",
            "required": true,
            "ofEntity": "Order",
            "description": "The order to close"
          }
        ],
        "output": [
          {
            "name": "orderId",
            "type": "uuid",
            "required": true,
            "ofEntity": "Order",
            "description": "The order id"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "New order status (closed)"
          },
          {
            "name": "closedAt",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Timestamp when order was closed"
          }
        ],
        "ports": [
          "Order"
        ],
        "rulesApplied": [
          "Order status must be 'ready' or 'served' to close",
          "All OrderItems must be 'ready' or 'served'",
          "Order.status transitions to 'closed'",
          "Order.closedAt is set to current timestamp"
        ],
        "transactional": true,
        "steps": [
          "Load Order aggregate via Order port",
          "Validate status is 'ready' or 'served'",
          "Validate all OrderItems are 'ready' or 'served'",
          "Update Order status to 'closed', set closedAt",
          "Save Order aggregate via Order port"
        ]
      },
      {
        "functionName": "cancelOrder",
        "inputTypeName": "CancelOrderInput",
        "outputTypeName": "CancelOrderOutput",
        "input": [
          {
            "name": "orderId",
            "type": "uuid",
            "required": true,
            "ofEntity": "Order",
            "description": "The order to cancel"
          },
          {
            "name": "cancellationReason",
            "type": "string",
            "required": true,
            "description": "Reason for cancellation"
          }
        ],
        "output": [
          {
            "name": "orderId",
            "type": "uuid",
            "required": true,
            "ofEntity": "Order",
            "description": "The order id"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "New order status (cancelled)"
          },
          {
            "name": "cancelledAt",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Timestamp when order was cancelled"
          }
        ],
        "ports": [
          "Order"
        ],
        "rulesApplied": [
          "Order status must not be 'closed' or 'cancelled' to cancel",
          "If KitchenTicket exists, set its status to 'void'",
          "All non-served OrderItems transition to 'cancelled'",
          "Order.status transitions to 'cancelled'",
          "Order.cancelledAt is set to current timestamp",
          "Order.cancellationReason is set"
        ],
        "transactional": true,
        "steps": [
          "Load Order aggregate via Order port",
          "Validate status is not 'closed' or 'cancelled'",
          "If KitchenTicket exists, update status to 'void'",
          "Update all non-served OrderItems to 'cancelled'",
          "Update Order status to 'cancelled', set cancelledAt and cancellationReason",
          "Save Order aggregate via Order port"
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default takeoutOrderLifecycleUsecase;

export const pipeline = [
  {
    "id": "takeoutOrderLifecycle__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/takeoutOrderLifecycle.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/takeoutOrderLifecycle.defs.ts",
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
