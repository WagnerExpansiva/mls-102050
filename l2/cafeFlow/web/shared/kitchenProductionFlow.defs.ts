/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/kitchenProductionFlow.defs.ts" enhancement="_blank"/>

export const definition = {
  "bffCommands": [
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
  ],
  "navigationRefs": []
};

export const pipeline = [
  {
    "id": "kitchenProductionFlow__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102050_/l2/cafeFlow/web/shared/kitchenProductionFlow.ts",
    "defPath": "_102050_/l2/cafeFlow/web/shared/kitchenProductionFlow.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/contracts/kitchenProductionFlow.ts"
    ],
    "dependsOn": [],
    "skills": [
      "/_102020_/l2/agentMaterializeSolution/skills/genPageShared.ts"
    ],
    "rulesApplied": [
      "orderStatusTransitions",
      "ingredientConsumptionTrigger"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
