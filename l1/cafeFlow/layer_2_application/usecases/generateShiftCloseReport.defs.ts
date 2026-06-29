/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/generateShiftCloseReport.defs.ts" enhancement="_blank"/>

export const generateShiftCloseReportUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "generateShiftCloseReport",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "generateShiftCloseReport",
    "ports": [
      "DailyShift",
      "Payment",
      "Order"
    ],
    "functions": [
      {
        "functionName": "generateShiftCloseReport",
        "inputTypeName": "GenerateShiftCloseReportInput",
        "outputTypeName": "GenerateShiftCloseReportOutput",
        "input": [
          {
            "name": "dailyShiftId",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift",
            "description": "ID of the DailyShift to generate the close report for"
          },
          {
            "name": "outputLanguage",
            "type": "string",
            "required": false,
            "description": "Preferred language for AI-generated report narrative (e.g. pt-BR, en-US). Falls back to system default per aiOutputLanguageSelection rule."
          }
        ],
        "output": [
          {
            "name": "dailyShiftId",
            "type": "string",
            "ofEntity": "DailyShift",
            "description": "ID of the reported DailyShift"
          },
          {
            "name": "shiftDate",
            "type": "string",
            "ofEntity": "DailyShift",
            "description": "Date of the shift"
          },
          {
            "name": "status",
            "type": "string",
            "ofEntity": "DailyShift",
            "description": "Current status of the shift (open or closed)"
          },
          {
            "name": "openedAt",
            "type": "string",
            "ofEntity": "DailyShift",
            "description": "Timestamp when the shift was opened"
          },
          {
            "name": "closedAt",
            "type": "string",
            "ofEntity": "DailyShift",
            "description": "Timestamp when the shift was closed, if applicable"
          },
          {
            "name": "openingCashBalance",
            "type": "number",
            "ofEntity": "DailyShift",
            "description": "Cash balance at shift opening"
          },
          {
            "name": "closingCashBalance",
            "type": "number",
            "ofEntity": "DailyShift",
            "description": "Cash balance at shift closing"
          },
          {
            "name": "totalSales",
            "type": "number",
            "ofEntity": "DailyShift",
            "description": "Total sales amount for the shift"
          },
          {
            "name": "totalPayments",
            "type": "number",
            "ofEntity": "DailyShift",
            "description": "Total payments captured for the shift"
          },
          {
            "name": "closingNotes",
            "type": "string",
            "ofEntity": "DailyShift",
            "description": "Notes recorded at shift closing"
          },
          {
            "name": "totalOrders",
            "type": "number",
            "description": "Total number of orders in the shift"
          },
          {
            "name": "totalOrdersMesa",
            "type": "number",
            "description": "Number of dine-in (mesa) orders, categorized per paymentTimingByOrderType rule"
          },
          {
            "name": "totalOrdersTakeout",
            "type": "number",
            "description": "Number of takeout orders, categorized per paymentTimingByOrderType rule"
          },
          {
            "name": "totalSalesMesa",
            "type": "number",
            "description": "Total sales from dine-in (mesa) orders"
          },
          {
            "name": "totalSalesTakeout",
            "type": "number",
            "description": "Total sales from takeout orders"
          },
          {
            "name": "totalOrderItems",
            "type": "number",
            "description": "Total number of order items across all orders in the shift"
          },
          {
            "name": "paymentsByMethod",
            "type": "string",
            "description": "JSON summary of captured payments grouped by payment method with count and total amount"
          },
          {
            "name": "cashMovementsIn",
            "type": "number",
            "description": "Total amount of cash entrada (in) movements during the shift"
          },
          {
            "name": "cashMovementsOut",
            "type": "number",
            "description": "Total amount of cash saída (out) movements during the shift"
          },
          {
            "name": "expectedCashBalance",
            "type": "number",
            "description": "Calculated expected cash balance: opening + cash payments + cashIn - cashOut"
          },
          {
            "name": "cashDifference",
            "type": "number",
            "description": "Difference between recorded closingCashBalance and expectedCashBalance"
          },
          {
            "name": "reportLanguage",
            "type": "string",
            "description": "Language selected for the report narrative per aiOutputLanguageSelection rule"
          },
          {
            "name": "reportNarrative",
            "type": "string",
            "description": "AI-generated narrative summary of the shift in the selected language"
          }
        ],
        "ports": [
          "DailyShift",
          "Payment",
          "Order"
        ],
        "rulesApplied": [
          "paymentTimingByOrderType",
          "aiOutputLanguageSelection"
        ],
        "transactional": false,
        "steps": [
          "1. Load DailyShift by dailyShiftId via DailyShift port; throw if not found",
          "2. Validate shift status — if open, generate a preliminary report; if closed, generate the final close report",
          "3. Load all Payments for the shift via Payment port (filter by dailyShiftId, status=captured)",
          "4. Load all Orders for the shift via Order port (filter by dailyShiftId) — each Order includes embedded OrderItem children",
          "5. Load CashMovement entries embedded in the DailyShift aggregate (entrada/saída)",
          "6. Apply paymentTimingByOrderType rule: group orders and their payments by orderType (mesa vs takeout) to compute per-type sales totals and payment timing breakdown",
          "7. Aggregate payments by method (cash, card, pix, etc.) with count and total amount",
          "8. Compute expectedCashBalance = openingCashBalance + cashPayments + cashMovementsIn - cashMovementsOut",
          "9. Compute cashDifference = closingCashBalance - expectedCashBalance",
          "10. Apply aiOutputLanguageSelection rule: resolve outputLanguage (from input or system default) and generate report narrative in that language",
          "11. Return the complete shift close report with all aggregated metrics and narrative"
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default generateShiftCloseReportUsecase;

export const pipeline = [
  {
    "id": "generateShiftCloseReport__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/generateShiftCloseReport.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/generateShiftCloseReport.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_2_application/ports/paymentRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/payment.d.ts",
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
