/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/aiPromotionSuggestions.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "aiPromotionSuggestions",
    "purpose": "Assistente IA: sugestões de itens para promover (últimos 7 dias)",
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
        "name": "id",
        "type": "string"
      },
      {
        "name": "orderId",
        "type": "string"
      },
      {
        "name": "menuItemId",
        "type": "string"
      },
      {
        "name": "kitchenTicketId",
        "type": "string"
      },
      {
        "name": "quantity",
        "type": "number"
      },
      {
        "name": "unitPrice",
        "type": "number"
      },
      {
        "name": "totalPrice",
        "type": "number"
      },
      {
        "name": "observations",
        "type": "string"
      }
    ],
    "readsEntities": [
      "OrderItem",
      "Order",
      "MenuItem"
    ],
    "writesEntities": [],
    "readsTables": [],
    "writesTables": [],
    "usecaseRefs": [
      "aiPromotionSuggestions"
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
    "id": "aiPromotionSuggestions__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102050_/l2/cafeFlow/web/contracts/aiPromotionSuggestions.ts",
    "defPath": "_102050_/l2/cafeFlow/web/contracts/aiPromotionSuggestions.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentMaterializeSolution/skills/genContract.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
