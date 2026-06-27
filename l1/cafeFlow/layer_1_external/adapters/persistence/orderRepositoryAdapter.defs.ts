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
    "className": "OrderRepository",
    "entityId": "Order",
    "portRef": "IOrderRepository",
    "tableRef": "orders",
    "mdmReads": [
      "Table"
    ],
    "notes": [
      "Real columns: order_id, daily_shift_id, table_id, kitchen_ticket_id, order_type, status, created_at",
      "Details JSONB: total_amount, notes, customer_name, customer_phone, number_of_guests, closed_at, cancelled_at, cancellation_reason, updated_at, order_items (embedded OrderItem[]), kitchen_tickets (embedded KitchenTicket[])",
      "Resolves Table via MDM 102034 using table_id; ctx.data used for MDM fetch and domain mapping"
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
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/repositoryAdapter.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
