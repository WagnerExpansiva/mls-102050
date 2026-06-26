/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/ports/paymentRepository.defs.ts" enhancement="_blank"/>

export const paymentRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "PaymentRepository",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "Payment",
    "interfaceName": "IPaymentRepository",
    "methods": [
      {
        "name": "getById",
        "params": [
          "id: PaymentId"
        ],
        "returns": "Payment"
      },
      {
        "name": "list",
        "params": [
          "filter: PaymentFilter"
        ],
        "returns": "Payment[]"
      },
      {
        "name": "save",
        "params": [
          "payment: Payment"
        ],
        "returns": "void"
      },
      {
        "name": "findByOrder",
        "params": [
          "orderId: OrderId"
        ],
        "returns": "Payment[]"
      },
      {
        "name": "findByDateRange",
        "params": [
          "start: PaymentDate",
          "end: PaymentDate"
        ],
        "returns": "Payment[]"
      },
      {
        "name": "findPending",
        "params": [],
        "returns": "Payment[]"
      }
    ]
  }
} as const;

export default paymentRepositoryPort;

export const pipeline = [
  {
    "id": "paymentRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/ports/paymentRepository.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/ports/paymentRepository.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_3_domain/entities/payment.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_3.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
