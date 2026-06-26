/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/orderRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const orderRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "OrderRepositoryAdapter",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "className": "OrderRepositoryAdapter",
    "entityId": "Order",
    "portRef": "IOrderRepository",
    "tableRef": "orders",
    "mdmReads": [
      "Table"
    ],
    "notes": [
      "Maps aggregate root scalars to real columns; non-indexed fields, OrderItem[] and KitchenTicket[] to details JSONB",
      "Resolves Table mdmRef through shared 102034 MDM runtime (no local MDM table)",
      "ctx.data available for persistence context"
    ]
  }
} as const;

export default orderRepositoryAdapter;

export const pipeline = [
  {
    "id": "orderRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/orderRepositoryAdapter.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/orderRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/order.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/order.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_4.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
