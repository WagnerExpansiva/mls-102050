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
        "params": [
          "id: OrderId"
        ],
        "returns": "Order"
      },
      {
        "name": "list",
        "params": [
          "filter: OrderFilter"
        ],
        "returns": "Order[]"
      },
      {
        "name": "save",
        "params": [
          "order: Order"
        ],
        "returns": "void"
      },
      {
        "name": "findActiveByTable",
        "params": [
          "tableId: TableId"
        ],
        "returns": "Order[]"
      },
      {
        "name": "findByDateRange",
        "params": [
          "start: OrderDate",
          "end: OrderDate"
        ],
        "returns": "Order[]"
      },
      {
        "name": "findWithPendingKitchenTickets",
        "params": [],
        "returns": "Order[]"
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
      "_102021_/l2/skills/layer_3.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
