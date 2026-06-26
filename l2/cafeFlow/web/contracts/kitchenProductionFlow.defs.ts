/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/kitchenProductionFlow.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "viewKitchenTickets",
    "purpose": "Consultar tickets da cozinha",
    "kind": "query",
    "input": [
      {
        "name": "kitchenTicketId",
        "type": "string",
        "sourceEntity": "KitchenTicket",
        "sourceField": "kitchenTicketId",
        "required": false,
        "description": "Identificador único do ticket de cozinha",
        "sourceType": "uuid"
      },
      {
        "name": "orderId",
        "type": "string",
        "sourceEntity": "KitchenTicket",
        "sourceField": "orderId",
        "required": false,
        "description": "Referência ao pedido que gerou este ticket para a fila de preparo",
        "sourceType": "Order"
      },
      {
        "name": "status",
        "type": "string",
        "sourceEntity": "KitchenTicket",
        "sourceField": "status",
        "required": false,
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
      },
      {
        "name": "createdAt",
        "type": "date",
        "sourceEntity": "KitchenTicket",
        "sourceField": "createdAt",
        "required": false,
        "description": "Data e hora de criação do ticket",
        "sourceType": "datetime"
      },
      {
        "name": "updatedAt",
        "type": "date",
        "sourceEntity": "KitchenTicket",
        "sourceField": "updatedAt",
        "required": false,
        "description": "Data e hora da última atualização do ticket",
        "sourceType": "datetime"
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
      },
      {
        "name": "orderId",
        "type": "string",
        "sourceEntity": "KitchenTicket",
        "sourceField": "orderId",
        "description": "Referência ao pedido que gerou este ticket para a fila de preparo",
        "sourceType": "Order"
      },
      {
        "name": "status",
        "type": "string",
        "sourceEntity": "KitchenTicket",
        "sourceField": "status",
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
      },
      {
        "name": "createdAt",
        "type": "date",
        "sourceEntity": "KitchenTicket",
        "sourceField": "createdAt",
        "description": "Data e hora de criação do ticket",
        "sourceType": "datetime"
      },
      {
        "name": "updatedAt",
        "type": "date",
        "sourceEntity": "KitchenTicket",
        "sourceField": "updatedAt",
        "description": "Data e hora da última atualização do ticket",
        "sourceType": "datetime"
      }
    ],
    "readsEntities": [
      "KitchenTicket"
    ],
    "writesEntities": [],
    "readsTables": [],
    "writesTables": [],
    "usecaseRefs": [
      "viewKitchenTickets"
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
    "commandName": "updateKitchenTicketStatus",
    "purpose": "Atualizar status do ticket de cozinha",
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
      "KitchenTicket"
    ],
    "writesEntities": [
      "KitchenTicket"
    ],
    "readsTables": [],
    "writesTables": [],
    "usecaseRefs": [
      "updateKitchenTicketStatus"
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
    "commandName": "updateOrderItemStatus",
    "purpose": "Atualizar status de item do pedido",
    "kind": "command",
    "input": [
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
      "OrderItem"
    ],
    "writesEntities": [
      "OrderItem"
    ],
    "readsTables": [],
    "writesTables": [],
    "usecaseRefs": [
      "updateOrderItemStatus"
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
  }
];

export const pipeline = [
  {
    "id": "kitchenProductionFlow__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102050_/l2/cafeFlow/web/contracts/kitchenProductionFlow.ts",
    "defPath": "_102050_/l2/cafeFlow/web/contracts/kitchenProductionFlow.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentMaterializeSolution/skills/genContract.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
