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
        "returns": "Payment",
        "params": [
          "paymentId: string"
        ],
        "description": "Retrieve a single Payment aggregate by its identity"
      },
      {
        "name": "list",
        "returns": "Payment[]",
        "params": [
          "filter: PaymentFilter"
        ],
        "description": "List Payment aggregates matching the domain filter"
      },
      {
        "name": "save",
        "returns": "void",
        "params": [
          "payment: Payment"
        ],
        "description": "Persist a Payment aggregate"
      },
      {
        "name": "findByOrderId",
        "returns": "Payment[]",
        "params": [
          "orderId: string"
        ],
        "description": "Domain finder: payments associated with an order"
      },
      {
        "name": "findByMethod",
        "returns": "Payment[]",
        "params": [
          "method: PaymentMethod"
        ],
        "description": "Domain finder: payments made with a specific method"
      },
      {
        "name": "findByDateRange",
        "returns": "Payment[]",
        "params": [
          "from: CalendarDate",
          "to: CalendarDate"
        ],
        "description": "Domain finder: payments within a date range"
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
