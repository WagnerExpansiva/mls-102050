/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/kitchenProductionFlow.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "viewKitchenTickets",
    "purpose": "Consultar tickets da cozinha",
    "kind": "query",
    "input": [
      {
        "name": "status",
        "type": "string",
        "required": false
      }
    ],
    "output": [
      {
        "name": "kitchenTicketId",
        "type": "string"
      },
      {
        "name": "orderId",
        "type": "string"
      },
      {
        "name": "status",
        "type": "string"
      },
      {
        "name": "createdAt",
        "type": "date"
      },
      {
        "name": "updatedAt",
        "type": "date"
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
        "required": true
      }
    ],
    "output": [
      {
        "name": "kitchenTicketId",
        "type": "string"
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
        "required": true
      }
    ],
    "output": [
      {
        "name": "id",
        "type": "string"
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
