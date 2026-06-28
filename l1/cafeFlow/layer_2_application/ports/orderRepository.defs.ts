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
        "returns": "Order",
        "params": [
          "orderId: string"
        ],
        "description": "Retrieve a single Order aggregate by its identity"
      },
      {
        "name": "list",
        "returns": "Order[]",
        "params": [
          "filter: OrderFilter"
        ],
        "description": "List Order aggregates matching the domain filter"
      },
      {
        "name": "save",
        "returns": "void",
        "params": [
          "order: Order"
        ],
        "description": "Persist an Order aggregate and its embedded OrderItems and KitchenTickets"
      },
      {
        "name": "findByTableNumber",
        "returns": "Order[]",
        "params": [
          "tableNumber: TableNumber"
        ],
        "description": "Domain finder: orders for a specific table"
      },
      {
        "name": "findByStatus",
        "returns": "Order[]",
        "params": [
          "status: OrderStatus"
        ],
        "description": "Domain finder: orders in a given lifecycle status"
      },
      {
        "name": "findActiveOrders",
        "returns": "Order[]",
        "params": [],
        "description": "Domain finder: orders that are not yet closed or cancelled"
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
