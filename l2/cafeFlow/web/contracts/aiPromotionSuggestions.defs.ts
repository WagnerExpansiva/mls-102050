/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/aiPromotionSuggestions.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "aiPromotionSuggestions",
    "purpose": "Assistente IA: sugestões de itens para promover (últimos 7 dias)",
    "kind": "query",
    "input": [
      {
        "name": "id",
        "type": "string",
        "sourceEntity": "OrderItem",
        "sourceField": "id",
        "required": false,
        "description": "Identificador único do item do pedido",
        "sourceType": "uuid"
      },
      {
        "name": "orderId",
        "type": "string",
        "sourceEntity": "OrderItem",
        "sourceField": "orderId",
        "required": false,
        "description": "Referência ao pedido (Order) ao qual este item pertence",
        "sourceType": "uuid"
      },
      {
        "name": "menuItemId",
        "type": "string",
        "sourceEntity": "OrderItem",
        "sourceField": "menuItemId",
        "required": false,
        "description": "Referência ao item do cardápio (MenuItem) solicitado",
        "sourceType": "uuid"
      },
      {
        "name": "kitchenTicketId",
        "type": "string",
        "sourceEntity": "OrderItem",
        "sourceField": "kitchenTicketId",
        "required": false,
        "description": "Referência ao ticket de cozinha (KitchenTicket) quando o item exige preparo",
        "sourceType": "uuid"
      },
      {
        "name": "status",
        "type": "string",
        "sourceEntity": "OrderItem",
        "sourceField": "status",
        "required": false,
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
      },
      {
        "name": "createdAt",
        "type": "date",
        "sourceEntity": "OrderItem",
        "sourceField": "createdAt",
        "required": false,
        "description": "Data e hora de criação do registro",
        "sourceType": "datetime"
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
      },
      {
        "name": "orderId",
        "type": "string",
        "sourceEntity": "OrderItem",
        "sourceField": "orderId",
        "description": "Referência ao pedido (Order) ao qual este item pertence",
        "sourceType": "uuid"
      },
      {
        "name": "menuItemId",
        "type": "string",
        "sourceEntity": "OrderItem",
        "sourceField": "menuItemId",
        "description": "Referência ao item do cardápio (MenuItem) solicitado",
        "sourceType": "uuid"
      },
      {
        "name": "kitchenTicketId",
        "type": "string",
        "sourceEntity": "OrderItem",
        "sourceField": "kitchenTicketId",
        "description": "Referência ao ticket de cozinha (KitchenTicket) quando o item exige preparo",
        "sourceType": "uuid"
      },
      {
        "name": "quantity",
        "type": "number",
        "sourceEntity": "OrderItem",
        "sourceField": "quantity",
        "description": "Quantidade solicitada do item"
      },
      {
        "name": "unitPrice",
        "type": "number",
        "sourceEntity": "OrderItem",
        "sourceField": "unitPrice",
        "description": "Preço unitário do item no momento do pedido",
        "sourceType": "money"
      },
      {
        "name": "totalPrice",
        "type": "number",
        "sourceEntity": "OrderItem",
        "sourceField": "totalPrice",
        "description": "Preço total do item (quantidade × preço unitário)",
        "sourceType": "money"
      },
      {
        "name": "observations",
        "type": "string",
        "sourceEntity": "OrderItem",
        "sourceField": "observations",
        "description": "Observações ou instruções especiais para o item",
        "sourceType": "text"
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
