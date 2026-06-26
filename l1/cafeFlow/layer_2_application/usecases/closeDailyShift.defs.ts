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
      "Fetch DailyShift via DailyShift port and validate status is OPEN",
      "Verify all Orders for the shift are CLOSED or CANCELLED via Order port",
      "Reconcile all Payments via Payment port against order totals",
      "Apply paymentTimingByOrderType to validate payment completeness per order type",
      "Calculate closingCashBalance from openingCashBalance + cash payments + cash movements",
      "Select language via aiOutputLanguageSelection for closing notes",
      "Update DailyShift: status=CLOSED, closedAt=now, closingCashBalance, closingNotes, totalSales, totalPayments",
      "Persist DailyShift via DailyShift port",
      "Return closed shift summary"
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
      "_102021_/l2/skills/layer_3.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "paymentTimingByOrderType",
      "aiOutputLanguageSelection"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
