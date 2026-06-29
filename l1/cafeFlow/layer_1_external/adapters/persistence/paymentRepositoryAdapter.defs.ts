/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/paymentRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const paymentRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "PaymentRepositoryAdapter",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "className": "PaymentRepositoryAdapter",
    "entityId": "Payment",
    "portRef": "IPaymentRepository",
    "tableRef": "payments",
    "mdmReads": [],
    "notes": [
      "Real columns: payment_id, order_id, daily_shift_id, status, created_at",
      "Details JSONB holds method, amount, updatedAt"
    ]
  }
} as const;

export default paymentRepositoryAdapter;

export const pipeline = [
  {
    "id": "paymentRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/paymentRepositoryAdapter.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/paymentRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/ports/paymentRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/payment.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/payment.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/repositoryAdapter.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
