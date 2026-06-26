/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/takeoutOrderLifecycle.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "createOrder",
    "purpose": "Criar pedido",
    "kind": "command",
    "input": [
      {
        "name": "orderType",
        "type": "string",
        "sourceEntity": "Order",
        "sourceField": "orderType",
        "required": true,
        "enum": [
          "mesa",
          "takeout"
        ],
        "description": "Tipo do pedido: mesa ou takeout"
      },
      {
        "name": "status",
        "type": "string",
        "sourceEntity": "Order",
        "sourceField": "status",
        "required": true,
        "enum": [
          "draft",
          "sentToKitchen",
          "inPreparation",
          "ready",
          "served",
          "closed",
          "cancelled"
        ],
        "lifecycleStates": [
          "draft",
          "sentToKitchen",
          "inPreparation",
          "ready",
          "served",
          "closed",
          "cancelled"
        ],
        "description": "Status atual do pedido na coordenação com a cozinha"
      },
      {
        "name": "totalAmount",
        "type": "number",
        "sourceEntity": "Order",
        "sourceField": "totalAmount",
        "required": true,
        "description": "Valor total do pedido com preços no momento da venda",
        "sourceType": "money"
      },
      {
        "name": "notes",
        "type": "string",
        "sourceEntity": "Order",
        "sourceField": "notes",
        "required": false,
        "description": "Observações gerais do pedido",
        "sourceType": "text"
      },
      {
        "name": "customerName",
        "type": "string",
        "sourceEntity": "Order",
        "sourceField": "customerName",
        "required": false,
        "description": "Nome do cliente para identificação do pedido"
      },
      {
        "name": "customerPhone",
        "type": "string",
        "sourceEntity": "Order",
        "sourceField": "customerPhone",
        "required": false,
        "description": "Telefone de contato do cliente"
      },
      {
        "name": "numberOfGuests",
        "type": "number",
        "sourceEntity": "Order",
        "sourceField": "numberOfGuests",
        "required": false,
        "description": "Número de pessoas na mesa"
      },
      {
        "name": "closedAt",
        "type": "date",
        "sourceEntity": "Order",
        "sourceField": "closedAt",
        "required": false,
        "description": "Data e hora do fechamento do pedido",
        "sourceType": "datetime"
      },
      {
        "name": "cancelledAt",
        "type": "date",
        "sourceEntity": "Order",
        "sourceField": "cancelledAt",
        "required": false,
        "description": "Data e hora do cancelamento do pedido",
        "sourceType": "datetime"
      },
      {
        "name": "cancellationReason",
        "type": "string",
        "sourceEntity": "Order",
        "sourceField": "cancellationReason",
        "required": false,
        "description": "Motivo do cancelamento",
        "sourceType": "text"
      }
    ],
    "output": [
      {
        "name": "orderId",
        "type": "string",
        "sourceEntity": "Order",
        "sourceField": "orderId",
        "description": "Identificador único do pedido",
        "sourceType": "uuid"
      }
    ],
    "readsEntities": [
      "Order",
      "DailyShift",
      "Table"
    ],
    "writesEntities": [
      "Order",
      "Table"
    ],
    "readsTables": [],
    "writesTables": [],
    "usecaseRefs": [
      "createOrder"
    ],
    "layerContract": {
      "controllerLayer": "layer_2_controllers",
      "mustCallLayer": "layer_3_usecases",
      "directTableAccessForbidden": true
    },
    "rulesApplied": [
      "orderStatusTransitions",
      "paymentTimingByOrderType",
      "ingredientConsumptionTrigger",
      "aiOutputLanguageSelection",
      "tableOccupancyConsistency"
    ]
  },
  {
    "commandName": "addOrderItem",
    "purpose": "Adicionar item ao pedido",
    "kind": "command",
    "input": [
      {
        "name": "quantity",
        "type": "number",
        "sourceEntity": "OrderItem",
        "sourceField": "quantity",
        "required": true,
        "description": "Quantidade solicitada do item"
      },
      {
        "name": "unitPrice",
        "type": "number",
        "sourceEntity": "OrderItem",
        "sourceField": "unitPrice",
        "required": true,
        "description": "Preço unitário do item no momento do pedido",
        "sourceType": "money"
      },
      {
        "name": "totalPrice",
        "type": "number",
        "sourceEntity": "OrderItem",
        "sourceField": "totalPrice",
        "required": true,
        "description": "Preço total do item (quantidade × preço unitário)",
        "sourceType": "money"
      },
      {
        "name": "observations",
        "type": "string",
        "sourceEntity": "OrderItem",
        "sourceField": "observations",
        "required": false,
        "description": "Observações ou instruções especiais para o item",
        "sourceType": "text"
      },
      {
        "name": "status",
        "type": "string",
        "sourceEntity": "OrderItem",
        "sourceField": "status",
        "required": true,
        "enum": [
          "new",
          "sentToKitchen",
          "inPreparation",
          "ready",
          "served",
          "cancelled"
        ],
        "lifecycleStates": [
          "new",
          "sentToKitchen",
          "inPreparation",
          "ready",
          "served",
          "cancelled"
        ],
        "description": "Status de produção/atendimento do item"
      }
    ],
    "output": [
      {
        "name": "id",
        "type": "string",
        "sourceEntity": "OrderItem",
        "sourceField": "id",
        "description": "Identificador único do item do pedido",
        "sourceType": "uuid"
      }
    ],
    "readsEntities": [
      "OrderItem",
      "MenuItem",
      "Order"
    ],
    "writesEntities": [
      "OrderItem",
      "Order",
      "StockConsumption"
    ],
    "readsTables": [],
    "writesTables": [],
    "usecaseRefs": [
      "addOrderItem"
    ],
    "layerContract": {
      "controllerLayer": "layer_2_controllers",
      "mustCallLayer": "layer_3_usecases",
      "directTableAccessForbidden": true
    },
    "rulesApplied": [
      "orderStatusTransitions",
      "ingredientConsumptionTrigger"
    ]
  },
  {
    "commandName": "createKitchenTicket",
    "purpose": "Criar ticket de cozinha",
    "kind": "command",
    "input": [
      {
        "name": "status",
        "type": "string",
        "sourceEntity": "KitchenTicket",
        "sourceField": "status",
        "required": true,
        "enum": [
          "open",
          "inProgress",
          "done",
          "void"
        ],
        "lifecycleStates": [
          "open",
          "inProgress",
          "done",
          "void"
        ],
        "description": "Status atual do ticket na fila de preparo da cozinha"
      }
    ],
    "output": [
      {
        "name": "kitchenTicketId",
        "type": "string",
        "sourceEntity": "KitchenTicket",
        "sourceField": "kitchenTicketId",
        "description": "Identificador único do ticket de cozinha",
        "sourceType": "uuid"
      }
    ],
    "readsEntities": [
      "KitchenTicket",
      "Order",
      "OrderItem"
    ],
    "writesEntities": [
      "KitchenTicket"
    ],
    "readsTables": [],
    "writesTables": [],
    "usecaseRefs": [
      "createKitchenTicket"
    ],
    "layerContract": {
      "controllerLayer": "layer_2_controllers",
      "mustCallLayer": "layer_3_usecases",
      "directTableAccessForbidden": true
    },
    "rulesApplied": [
      "orderStatusTransitions"
    ]
  },
  {
    "commandName": "updateOrderStatus",
    "purpose": "Atualizar status do pedido",
    "kind": "command",
    "input": [
      {
        "name": "status",
        "type": "string",
        "sourceEntity": "Order",
        "sourceField": "status",
        "required": true,
        "enum": [
          "draft",
          "sentToKitchen",
          "inPreparation",
          "ready",
          "served",
          "closed",
          "cancelled"
        ],
        "lifecycleStates": [
          "draft",
          "sentToKitchen",
          "inPreparation",
          "ready",
          "served",
          "closed",
          "cancelled"
        ],
        "description": "Status atual do pedido na coordenação com a cozinha"
      },
      {
        "name": "closedAt",
        "type": "date",
        "sourceEntity": "Order",
        "sourceField": "closedAt",
        "required": false,
        "description": "Data e hora do fechamento do pedido",
        "sourceType": "datetime"
      },
      {
        "name": "cancelledAt",
        "type": "date",
        "sourceEntity": "Order",
        "sourceField": "cancelledAt",
        "required": false,
        "description": "Data e hora do cancelamento do pedido",
        "sourceType": "datetime"
      },
      {
        "name": "cancellationReason",
        "type": "string",
        "sourceEntity": "Order",
        "sourceField": "cancellationReason",
        "required": false,
        "description": "Motivo do cancelamento",
        "sourceType": "text"
      }
    ],
    "output": [
      {
        "name": "orderId",
        "type": "string",
        "sourceEntity": "Order",
        "sourceField": "orderId",
        "description": "Identificador único do pedido",
        "sourceType": "uuid"
      }
    ],
    "readsEntities": [
      "Order",
      "OrderItem",
      "KitchenTicket",
      "Table",
      "Payment",
      "InventoryItem",
      "RecipeComponent"
    ],
    "writesEntities": [
      "Order",
      "Table",
      "StockConsumption"
    ],
    "readsTables": [],
    "writesTables": [],
    "usecaseRefs": [
      "updateOrderStatus"
    ],
    "layerContract": {
      "controllerLayer": "layer_2_controllers",
      "mustCallLayer": "layer_3_usecases",
      "directTableAccessForbidden": true
    },
    "rulesApplied": [
      "orderStatusTransitions",
      "paymentTimingByOrderType",
      "ingredientConsumptionTrigger",
      "aiOutputLanguageSelection",
      "tableOccupancyConsistency"
    ]
  }
];

export const pipeline = [
  {
    "id": "takeoutOrderLifecycle__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102050_/l2/cafeFlow/web/contracts/takeoutOrderLifecycle.ts",
    "defPath": "_102050_/l2/cafeFlow/web/contracts/takeoutOrderLifecycle.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentMaterializeSolution/skills/genContract.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
