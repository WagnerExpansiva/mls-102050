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
    "ports": [
      "Payment",
      "Order",
      "DailyShift"
    ],
    "functions": [
      {
        "functionName": "recordPayment",
        "inputTypeName": "RecordPaymentInput",
        "outputTypeName": "RecordPaymentOutput",
        "input": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Reference to the Order this payment belongs to"
          },
          {
            "name": "dailyShiftId",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift",
            "description": "Reference to the DailyShift during which the payment is recorded"
          },
          {
            "name": "method",
            "type": "string",
            "required": true,
            "description": "Payment method (e.g. cash, card, pix)"
          },
          {
            "name": "amount",
            "type": "number",
            "required": true,
            "description": "Payment amount in currency units"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Initial payment status: authorized | captured | voided | refunded"
          }
        ],
        "output": [
          {
            "name": "paymentId",
            "type": "string",
            "required": true,
            "ofEntity": "Payment",
            "description": "ID of the newly created Payment"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Confirmed status of the created Payment"
          }
        ],
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
          "Load Order by orderId via OrderPort to retrieve orderType and current status",
          "Load DailyShift by dailyShiftId via DailyShiftPort to verify shift status is 'open'",
          "Apply paymentTimingByOrderType rule: validate that the payment is allowed at this stage based on orderType (mesa vs takeout) and order status",
          "Validate amount is positive and does not exceed Order.totalAmount",
          "Create Payment aggregate via PaymentPort with provided method, amount, status, orderId, dailyShiftId and server-generated paymentId, createdAt, updatedAt",
          "Return paymentId and confirmed status"
        ]
      }
    ],
    "mdmRefs": []
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
    "agent": "agentMaterializeGen"
  }
] as const;
