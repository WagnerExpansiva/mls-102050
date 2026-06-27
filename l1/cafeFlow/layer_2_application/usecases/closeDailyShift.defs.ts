/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/closeDailyShift.defs.ts" enhancement="_blank"/>

export const closeDailyShiftUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "closeDailyShift",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "closeDailyShift",
    "functionName": "closeDailyShift",
    "inputTypeName": "CloseDailyShiftInput",
    "outputTypeName": "CloseDailyShiftOutput",
    "ports": [
      "DailyShift",
      "Order",
      "Payment"
    ],
    "rulesApplied": [
      "paymentTimingByOrderType",
      "aiOutputLanguageSelection"
    ],
    "transactional": true,
    "steps": [
      "Read DailyShift by id via DailyShift port and validate it is OPEN",
      "Read all Orders for the shift via Order port and validate all are CLOSED or CANCELLED",
      "Read all Payments and CashMovements for the shift via Payment port",
      "Apply paymentTimingByOrderType rule to reconcile payments by order type",
      "Compute closingCashBalance, totalSales, totalPayments, and variance",
      "Apply aiOutputLanguageSelection rule for closing notes language",
      "Update DailyShift: status=CLOSED, closedAt, closingCashBalance, closingNotes, totals",
      "Persist DailyShift within transaction",
      "Return closed DailyShift with reconciliation summary"
    ]
  }
} as const;

export default closeDailyShiftUsecase;

export const pipeline = [
  {
    "id": "closeDailyShift__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/closeDailyShift.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/closeDailyShift.defs.ts",
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
    "rulesApplied": [
      "paymentTimingByOrderType",
      "aiOutputLanguageSelection"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
