/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/viewOperationalDashboard.defs.ts" enhancement="_blank"/>

export const viewOperationalDashboardUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "viewOperationalDashboard",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "viewOperationalDashboard",
    "ports": [
      "DailyShift",
      "Order",
      "Payment"
    ],
    "functions": [
      {
        "functionName": "getOperationalDashboard",
        "inputTypeName": "OperationalDashboardRequest",
        "outputTypeName": "OperationalDashboardView",
        "input": [
          {
            "name": "dailyShiftId",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift",
            "description": "The shift to build the dashboard for"
          }
        ],
        "output": [
          {
            "name": "dailyShiftId",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift",
            "description": "Identifier of the shift"
          },
          {
            "name": "shiftDate",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift",
            "description": "Date of the shift"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift",
            "description": "open or closed"
          },
          {
            "name": "openedAt",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift",
            "description": "Timestamp the shift was opened"
          },
          {
            "name": "closedAt",
            "type": "string",
            "required": false,
            "ofEntity": "DailyShift",
            "description": "Timestamp the shift was closed, null if still open"
          },
          {
            "name": "openingCashBalance",
            "type": "number",
            "required": false,
            "ofEntity": "DailyShift",
            "description": "Cash balance at shift start"
          },
          {
            "name": "closingCashBalance",
            "type": "number",
            "required": false,
            "ofEntity": "DailyShift",
            "description": "Cash balance at shift close"
          },
          {
            "name": "totalSales",
            "type": "number",
            "required": false,
            "ofEntity": "DailyShift",
            "description": "Sum of all order totals for the shift"
          },
          {
            "name": "totalPayments",
            "type": "number",
            "required": false,
            "ofEntity": "DailyShift",
            "description": "Sum of all captured payments for the shift"
          },
          {
            "name": "totalOrders",
            "type": "number",
            "required": true,
            "description": "Count of orders in the shift"
          },
          {
            "name": "openOrders",
            "type": "number",
            "required": true,
            "description": "Count of orders not yet closed or cancelled"
          },
          {
            "name": "closedOrders",
            "type": "number",
            "required": true,
            "description": "Count of closed orders"
          },
          {
            "name": "cancelledOrders",
            "type": "number",
            "required": true,
            "description": "Count of cancelled orders"
          },
          {
            "name": "dineInOrders",
            "type": "number",
            "required": true,
            "description": "Count of mesa-type orders"
          },
          {
            "name": "takeoutOrders",
            "type": "number",
            "required": true,
            "description": "Count of takeout-type orders"
          },
          {
            "name": "paymentsByMethod",
            "type": "string",
            "required": true,
            "description": "JSON map of payment method to total captured amount"
          },
          {
            "name": "capturedPaymentsTotal",
            "type": "number",
            "required": true,
            "description": "Sum of captured payment amounts"
          },
          {
            "name": "authorizedPaymentsTotal",
            "type": "number",
            "required": true,
            "description": "Sum of authorized-but-not-captured payment amounts"
          },
          {
            "name": "refundedPaymentsTotal",
            "type": "number",
            "required": true,
            "description": "Sum of refunded payment amounts"
          },
          {
            "name": "cashMovementsIn",
            "type": "number",
            "required": false,
            "description": "Sum of entrada cash movements for the shift"
          },
          {
            "name": "cashMovementsOut",
            "type": "number",
            "required": false,
            "description": "Sum of saída cash movements for the shift"
          },
          {
            "name": "expectedCashBalance",
            "type": "number",
            "required": false,
            "description": "Computed expected cash: opening + cash payments + cashIn - cashOut"
          }
        ],
        "ports": [
          "DailyShift",
          "Order",
          "Payment"
        ],
        "rulesApplied": [
          "paymentTimingByOrderType",
          "aiOutputLanguageSelection"
        ],
        "transactional": false,
        "steps": [
          "Load DailyShift by dailyShiftId via DailyShift port (includes embedded CashMovement collection)",
          "Query all Orders for the shift via Order port filtered by dailyShiftId",
          "Query all Payments for the shift via Payment port filtered by dailyShiftId",
          "Apply paymentTimingByOrderType rule: classify payment timing expectations per order type (mesa vs takeout) for timing analysis",
          "Aggregate order counts by status (draft, sentToKitchen, inPreparation, ready, served, closed, cancelled) and by type (mesa, takeout)",
          "Aggregate payment totals by method and by status (authorized, captured, voided, refunded)",
          "Sum cash movements by movementType (entrada / saída) from the embedded collection on DailyShift",
          "Compute expectedCashBalance = openingCashBalance + cashPayments + cashMovementsIn - cashMovementsOut",
          "Apply aiOutputLanguageSelection rule: determine output language for any AI-generated narrative summaries based on user preference",
          "Assemble and return the OperationalDashboardView"
        ]
      },
      {
        "functionName": "listShiftOrders",
        "inputTypeName": "ShiftOrdersRequest",
        "outputTypeName": "ShiftOrdersList",
        "input": [
          {
            "name": "dailyShiftId",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift",
            "description": "The shift whose orders are listed"
          },
          {
            "name": "status",
            "type": "string",
            "required": false,
            "ofEntity": "Order",
            "description": "Optional filter by order status"
          },
          {
            "name": "orderType",
            "type": "string",
            "required": false,
            "ofEntity": "Order",
            "description": "Optional filter by order type (mesa or takeout)"
          }
        ],
        "output": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Order identifier"
          },
          {
            "name": "orderType",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "mesa or takeout"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Current order status"
          },
          {
            "name": "totalAmount",
            "type": "number",
            "required": true,
            "ofEntity": "Order",
            "description": "Order total"
          },
          {
            "name": "customerName",
            "type": "string",
            "required": false,
            "ofEntity": "Order",
            "description": "Customer name if provided"
          },
          {
            "name": "numberOfGuests",
            "type": "number",
            "required": false,
            "ofEntity": "Order",
            "description": "Number of guests for dine-in orders"
          },
          {
            "name": "closedAt",
            "type": "string",
            "required": false,
            "ofEntity": "Order",
            "description": "When the order was closed, null if still open"
          },
          {
            "name": "createdAt",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "When the order was created"
          }
        ],
        "ports": [
          "Order"
        ],
        "rulesApplied": [
          "paymentTimingByOrderType"
        ],
        "transactional": false,
        "steps": [
          "Query Orders via Order port filtered by dailyShiftId and optional status / orderType",
          "Apply paymentTimingByOrderType rule to annotate whether payment timing is on-track per order type",
          "Return the list of order summaries sorted by createdAt descending"
        ]
      },
      {
        "functionName": "listShiftPayments",
        "inputTypeName": "ShiftPaymentsRequest",
        "outputTypeName": "ShiftPaymentsList",
        "input": [
          {
            "name": "dailyShiftId",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift",
            "description": "The shift whose payments are listed"
          },
          {
            "name": "method",
            "type": "string",
            "required": false,
            "ofEntity": "Payment",
            "description": "Optional filter by payment method"
          },
          {
            "name": "status",
            "type": "string",
            "required": false,
            "ofEntity": "Payment",
            "description": "Optional filter by payment status"
          }
        ],
        "output": [
          {
            "name": "paymentId",
            "type": "string",
            "required": true,
            "ofEntity": "Payment",
            "description": "Payment identifier"
          },
          {
            "name": "orderId",
            "type": "string",
            "required": false,
            "ofEntity": "Order",
            "description": "Associated order id"
          },
          {
            "name": "method",
            "type": "string",
            "required": true,
            "ofEntity": "Payment",
            "description": "Payment method"
          },
          {
            "name": "amount",
            "type": "number",
            "required": true,
            "ofEntity": "Payment",
            "description": "Payment amount"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Payment",
            "description": "Payment status (authorized, captured, voided, refunded)"
          },
          {
            "name": "createdAt",
            "type": "string",
            "required": true,
            "ofEntity": "Payment",
            "description": "When the payment was created"
          }
        ],
        "ports": [
          "Payment"
        ],
        "rulesApplied": [
          "paymentTimingByOrderType"
        ],
        "transactional": false,
        "steps": [
          "Query Payments via Payment port filtered by dailyShiftId and optional method / status",
          "Apply paymentTimingByOrderType rule to evaluate whether payment was captured within expected timing window for the associated order type",
          "Return the list of payment summaries sorted by createdAt descending"
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default viewOperationalDashboardUsecase;

export const pipeline = [
  {
    "id": "viewOperationalDashboard__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/viewOperationalDashboard.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/viewOperationalDashboard.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_2_application/ports/paymentRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/order.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/payment.d.ts"
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
