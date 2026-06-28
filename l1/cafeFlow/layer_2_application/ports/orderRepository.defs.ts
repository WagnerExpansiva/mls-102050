/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.defs.ts" enhancement="_blank"/>

export const orderRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "OrderRepository",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "Order",
    "interfaceName": "IOrderRepository",
    "methods": [
      {
        "name": "getById",
        "returns": "Order | null",
        "params": [
          "orderId: OrderId"
        ]
      },
      {
        "name": "list",
        "returns": "Order[]",
        "params": [
          "filter: OrderFilter"
        ]
      },
      {
        "name": "save",
        "returns": "void",
        "params": [
          "order: Order"
        ]
      },
      {
        "name": "findByTableNumber",
        "returns": "Order[]",
        "params": [
          "tableNumber: TableNumber"
        ]
      },
      {
        "name": "findByStatus",
        "returns": "Order[]",
        "params": [
          "status: OrderStatus"
        ]
      },
      {
        "name": "findActiveOrders",
        "returns": "Order[]",
        "params": []
      }
    ]
  }
} as const;

export default orderRepositoryPort;

export const pipeline = [
  {
    "id": "orderRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_3_domain/entities/order.d.ts"
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
