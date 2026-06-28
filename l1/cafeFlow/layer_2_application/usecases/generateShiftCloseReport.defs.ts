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
    "functionName": "generateShiftCloseReport",
    "inputTypeName": "GenerateShiftCloseReportInput",
    "outputTypeName": "GenerateShiftCloseReportOutput",
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
      "Read DailyShift via DailyShift port",
      "Read all Payments for the shift via Payment port",
      "Read all Orders for the shift via Order port",
      "Read OrderItems for revenue breakdown",
      "Apply paymentTimingByOrderType rule to categorize payments",
      "Compute totalSales, totalPayments, cash reconciliation",
      "Apply aiOutputLanguageSelection rule for report language",
      "Return structured shift close report"
    ]
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
    "rulesApplied": [
      "paymentTimingByOrderType",
      "aiOutputLanguageSelection"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
