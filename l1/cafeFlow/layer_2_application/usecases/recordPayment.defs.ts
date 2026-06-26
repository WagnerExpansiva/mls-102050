/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/recordPayment.defs.ts" enhancement="_blank"/>

export const recordPaymentUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "recordPayment",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "recordPayment",
    "functionName": "recordPayment",
    "inputTypeName": "RecordPaymentInput",
    "outputTypeName": "RecordPaymentOutput",
    "ports": [
      "Payment",
      "Order",
      "DailyShift"
    ],
    "rulesApplied": [
      "paymentTimingByOrderType"
    ],
    "transactional": true,
    "steps": [
      "Fetch Order via Order port to validate it exists and is in a payable status",
      "Fetch DailyShift via DailyShift port to validate shift is OPEN",
      "Apply paymentTimingByOrderType: validate payment timing matches order type rules (e.g., takeout must be prepaid)",
      "Create Payment with orderId, amount, method, and shift reference",
      "Persist Payment via Payment port",
      "Update Order payment status if fully paid",
      "Return recorded payment"
    ]
  }
} as const;

export default recordPaymentUsecase;

export const pipeline = [
  {
    "id": "recordPayment__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/recordPayment.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/recordPayment.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/ports/paymentRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/payment.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/order.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_3.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "paymentTimingByOrderType"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
