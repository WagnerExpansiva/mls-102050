/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/createOrder.defs.ts" enhancement="_blank"/>

export const createOrderUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createOrder",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createOrder",
    "ports": [
      "Order",
      "DailyShift"
    ],
    "functions": [
      {
        "functionName": "createOrder",
        "inputTypeName": "CreateOrderInput",
        "outputTypeName": "CreateOrderOutput",
        "input": [
          {
            "name": "dailyShiftId",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift",
            "description": "The open daily shift under which the order is created"
          },
          {
            "name": "tableId",
            "type": "string",
            "required": false,
            "ofEntity": "Table",
            "description": "Required when orderType is 'mesa'; references the Table master-data document"
          },
          {
            "name": "orderType",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Order type: 'mesa' (dine-in) or 'takeout'"
          },
          {
            "name": "notes",
            "type": "string",
            "required": false,
            "ofEntity": "Order",
            "description": "Free-text notes for the order"
          },
          {
            "name": "customerName",
            "type": "string",
            "required": false,
            "ofEntity": "Order",
            "description": "Customer name (optional, used mainly for takeout)"
          },
          {
            "name": "customerPhone",
            "type": "string",
            "required": false,
            "ofEntity": "Order",
            "description": "Customer phone (optional, used mainly for takeout)"
          },
          {
            "name": "numberOfGuests",
            "type": "number",
            "required": false,
            "ofEntity": "Order",
            "description": "Number of guests at the table (optional, used mainly for mesa)"
          }
        ],
        "output": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "The newly created order identifier"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Initial status of the order, always 'draft' on creation"
          },
          {
            "name": "totalAmount",
            "type": "number",
            "required": true,
            "ofEntity": "Order",
            "description": "Initial total amount, always 0 on creation"
          },
          {
            "name": "tableStatus",
            "type": "string",
            "required": false,
            "ofEntity": "Table",
            "description": "Updated table status ('occupied') when orderType is 'mesa'"
          }
        ],
        "ports": [
          "Order",
          "DailyShift"
        ],
        "rulesApplied": [
          "orderStatusTransitions",
          "paymentTimingByOrderType",
          "ingredientConsumptionTrigger",
          "aiOutputLanguageSelection",
          "tableOccupancyConsistency"
        ],
        "transactional": true,
        "steps": [
          "1. Load DailyShift via DailyShift port by dailyShiftId; validate that shift status is 'open' — reject if closed or not found.",
          "2. If orderType is 'mesa': require tableId (reject if missing); read Table master-data document via ctx.data.mdmDocument.get({ mdmId: tableId }); validate table status is 'available' (tableOccupancyConsistency) — reject if 'occupied' or 'disabled'.",
          "3. If orderType is 'takeout': tableId must be null; skip table validation.",
          "4. Create new Order aggregate with status='draft' (orderStatusTransitions initial state), totalAmount=0, kitchenTicketId=null, closedAt=null, cancelledAt=null; set createdAt/updatedAt to server timestamp.",
          "5. Apply paymentTimingByOrderType: for 'takeout' payment is expected immediately; for 'mesa' payment is deferred until close — store this expectation as order metadata.",
          "6. Apply aiOutputLanguageSelection: determine the language for AI-generated kitchen ticket output based on shift or tenant configuration.",
          "7. ingredientConsumptionTrigger is registered but not fired on create — it fires when status transitions to 'sentToKitchen'.",
          "8. Save Order via Order port.",
          "9. If orderType is 'mesa': update Table master-data document status to 'occupied' (tableOccupancyConsistency) and persist via ctx.data.mdmDocument update.",
          "10. Return orderId, status, totalAmount, and tableStatus (if applicable)."
        ]
      }
    ],
    "mdmRefs": [
      "Table"
    ]
  }
} as const;

export default createOrderUsecase;

export const pipeline = [
  {
    "id": "createOrder__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/createOrder.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/createOrder.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/order.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.d.ts"
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
