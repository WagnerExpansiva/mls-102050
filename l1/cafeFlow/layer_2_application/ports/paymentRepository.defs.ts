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
        "returns": "Payment | null",
        "params": [
          "paymentId: PaymentId"
        ]
      },
      {
        "name": "list",
        "returns": "Payment[]",
        "params": [
          "filter: PaymentFilter"
        ]
      },
      {
        "name": "save",
        "returns": "void",
        "params": [
          "payment: Payment"
        ]
      },
      {
        "name": "findByOrder",
        "returns": "Payment[]",
        "params": [
          "orderId: OrderId"
        ]
      },
      {
        "name": "findByDateRange",
        "returns": "Payment[]",
        "params": [
          "start: LocalDateTime",
          "end: LocalDateTime"
        ]
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
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/repositoryPort.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
