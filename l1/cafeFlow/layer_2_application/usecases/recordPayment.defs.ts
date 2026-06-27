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
      "Read Order by id via Order port to validate it exists and is payable",
      "Read DailyShift via DailyShift port to validate shift is OPEN",
      "Apply paymentTimingByOrderType rule to validate payment is allowed at this stage for the order type",
      "Create Payment entity with amount, method, order reference, dailyShift reference",
      "Validate payment amount does not exceed Order.totalAmount (or remaining balance)",
      "Persist Payment within transaction",
      "Return created Payment with id and updated order balance"
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
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "paymentTimingByOrderType"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
