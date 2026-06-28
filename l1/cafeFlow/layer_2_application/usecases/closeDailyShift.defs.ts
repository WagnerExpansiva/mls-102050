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
      "orderStatusTransitions",
      "paymentTimingByOrderType",
      "aiOutputLanguageSelection"
    ],
    "transactional": true,
    "steps": [
      "Read current DailyShift via DailyShift port and verify status=OPEN",
      "Read all Orders for the shift via Order port",
      "Apply orderStatusTransitions rule: verify no Orders remain in OPEN or IN_PROGRESS status (close or block)",
      "Read all Payments via Payment port and reconcile totals",
      "Apply paymentTimingByOrderType rule to verify all expected payments are recorded",
      "Set DailyShift.status=CLOSED, closedAt, closingCashBalance, closingNotes",
      "Apply aiOutputLanguageSelection rule for localized close metadata",
      "Persist DailyShift via DailyShift port",
      "Invoke generateShiftCloseReport as final step",
      "Return close confirmation with report summary"
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
      "orderStatusTransitions",
      "paymentTimingByOrderType",
      "aiOutputLanguageSelection"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
