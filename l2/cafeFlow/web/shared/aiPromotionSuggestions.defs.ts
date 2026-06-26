/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/aiPromotionSuggestions.defs.ts" enhancement="_blank"/>

export const definition = {
  "bffCommands": [
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
  ],
  "navigationRefs": []
};

export const pipeline = [
  {
    "id": "aiPromotionSuggestions__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102050_/l2/cafeFlow/web/shared/aiPromotionSuggestions.ts",
    "defPath": "_102050_/l2/cafeFlow/web/shared/aiPromotionSuggestions.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/contracts/aiPromotionSuggestions.ts"
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
