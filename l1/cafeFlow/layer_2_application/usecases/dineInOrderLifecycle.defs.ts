/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/dineInOrderLifecycle.defs.ts" enhancement="_blank"/>

export const dineInOrderLifecycleUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "dineInOrderLifecycle",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "dineInOrderLifecycle",
    "ports": [
      "Order"
    ],
    "functions": [
      {
        "functionName": "sendToKitchen",
        "inputTypeName": "SendToKitchenInput",
        "outputTypeName": "SendToKitchenOutput",
        "input": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order"
          },
          {
            "name": "tableId",
            "type": "string",
            "required": false,
            "ofEntity": "Table"
          }
        ],
        "output": [
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
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Order"
          }
        ],
        "ports": [
          "Order"
        ],
        "rulesApplied": [
          "order-status-transition-draft-to-sentToKitchen",
          "kitchen-ticket-created-on-send",
          "order-items-status-synced-on-send",
          "table-marked-occupied-on-send"
        ],
        "transactional": true,
        "steps": [
          "Load Order aggregate by orderId via Order port",
          "Validate order.status === 'draft'",
          "Validate order.orderType === 'mesa' and tableId is present for dine-in",
          "Read Table master data via ctx.data.mdmDocument.get({ mdmId: tableId }) and validate table.status === 'available'",
          "Create KitchenTicket embedded in Order aggregate with status 'open'",
          "Set order.kitchenTicketId to new ticket id",
          "Set order.status to 'sentToKitchen'",
          "Set all OrderItem.status to 'sentToKitchen' and link each to kitchenTicketId",
          "Update Table master data status to 'occupied' via ctx.data.mdmDocument",
          "Save Order aggregate via Order port"
        ]
      },
      {
        "functionName": "markOrderReady",
        "inputTypeName": "MarkOrderReadyInput",
        "outputTypeName": "MarkOrderReadyOutput",
        "input": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order"
          }
        ],
        "output": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Order"
          },
          {
            "name": "kitchenTicketStatus",
            "type": "string",
            "required": true,
            "ofEntity": "KitchenTicket"
          }
        ],
        "ports": [
          "Order"
        ],
        "rulesApplied": [
          "order-status-transition-sentToKitchen-or-inPreparation-to-ready",
          "kitchen-ticket-status-to-done",
          "order-items-status-synced-to-ready"
        ],
        "transactional": true,
        "steps": [
          "Load Order aggregate by orderId via Order port",
          "Validate order.status is 'sentToKitchen' or 'inPreparation'",
          "Set KitchenTicket.status to 'done'",
          "Set order.status to 'ready'",
          "Set all OrderItem.status to 'ready'",
          "Save Order aggregate via Order port"
        ]
      },
      {
        "functionName": "serveOrder",
        "inputTypeName": "ServeOrderInput",
        "outputTypeName": "ServeOrderOutput",
        "input": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order"
          }
        ],
        "output": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Order"
          }
        ],
        "ports": [
          "Order"
        ],
        "rulesApplied": [
          "order-status-transition-ready-to-served",
          "order-items-status-synced-to-served"
        ],
        "transactional": true,
        "steps": [
          "Load Order aggregate by orderId via Order port",
          "Validate order.status === 'ready'",
          "Set order.status to 'served'",
          "Set all OrderItem.status to 'served'",
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
            "type": "string",
            "required": true,
            "ofEntity": "Order"
          },
          {
            "name": "tableId",
            "type": "string",
            "required": false,
            "ofEntity": "Table"
          }
        ],
        "output": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Order"
          },
          {
            "name": "closedAt",
            "type": "string",
            "required": true,
            "ofEntity": "Order"
          }
        ],
        "ports": [
          "Order"
        ],
        "rulesApplied": [
          "order-status-transition-served-to-closed",
          "table-freed-on-close",
          "closedAt-set-on-close"
        ],
        "transactional": true,
        "steps": [
          "Load Order aggregate by orderId via Order port",
          "Validate order.status === 'served'",
          "Set order.status to 'closed'",
          "Set order.closedAt to current datetime",
          "If order.orderType === 'mesa' and tableId present, update Table master data status to 'available' via ctx.data.mdmDocument",
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
            "type": "string",
            "required": true,
            "ofEntity": "Order"
          },
          {
            "name": "cancellationReason",
            "type": "string",
            "required": false,
            "ofEntity": "Order"
          },
          {
            "name": "tableId",
            "type": "string",
            "required": false,
            "ofEntity": "Table"
          }
        ],
        "output": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Order"
          },
          {
            "name": "cancelledAt",
            "type": "string",
            "required": true,
            "ofEntity": "Order"
          }
        ],
        "ports": [
          "Order"
        ],
        "rulesApplied": [
          "order-cancel-not-allowed-if-closed-or-cancelled",
          "kitchen-ticket-voided-on-cancel",
          "order-items-cancelled-on-cancel",
          "table-freed-on-cancel"
        ],
        "transactional": true,
        "steps": [
          "Load Order aggregate by orderId via Order port",
          "Validate order.status is not 'closed' and not 'cancelled'",
          "Set order.status to 'cancelled'",
          "Set order.cancelledAt to current datetime",
          "Set order.cancellationReason if provided",
          "If KitchenTicket exists, set KitchenTicket.status to 'void'",
          "Set all OrderItem.status to 'cancelled'",
          "If order.orderType === 'mesa' and tableId present, update Table master data status to 'available' via ctx.data.mdmDocument",
          "Save Order aggregate via Order port"
        ]
      }
    ],
    "mdmRefs": [
      "Table"
    ]
  }
} as const;

export default dineInOrderLifecycleUsecase;

export const pipeline = [
  {
    "id": "dineInOrderLifecycle__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/dineInOrderLifecycle.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/dineInOrderLifecycle.defs.ts",
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
