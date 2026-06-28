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
        "required": false,
        "description": "Identificador único do item do pedido"
      },
      {
        "name": "orderId",
        "type": "string",
        "required": false,
        "description": "Referência ao pedido (Order) ao qual este item pertence"
      },
      {
        "name": "menuItemId",
        "type": "string",
        "required": false,
        "description": "Referência ao item do cardápio (MenuItem) solicitado"
      },
      {
        "name": "kitchenTicketId",
        "type": "string",
        "required": false,
        "description": "Referência ao ticket de cozinha (KitchenTicket) quando o item exige preparo"
      },
      {
        "name": "status",
        "type": "string",
        "required": false,
        "enum": [
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
        "required": false,
        "description": "Data e hora de criação do registro"
      }
    ],
    "output": [
      {
        "name": "id",
        "type": "string",
        "description": "Identificador único do item do pedido"
      },
      {
        "name": "orderId",
        "type": "string",
        "description": "Referência ao pedido (Order) ao qual este item pertence"
      },
      {
        "name": "menuItemId",
        "type": "string",
        "description": "Referência ao item do cardápio (MenuItem) solicitado"
      },
      {
        "name": "kitchenTicketId",
        "type": "string",
        "description": "Referência ao ticket de cozinha (KitchenTicket) quando o item exige preparo"
      },
      {
        "name": "quantity",
        "type": "number",
        "description": "Quantidade solicitada do item"
      },
      {
        "name": "unitPrice",
        "type": "number",
        "description": "Preço unitário do item no momento do pedido"
      },
      {
        "name": "totalPrice",
        "type": "number",
        "description": "Preço total do item (quantidade × preço unitário)"
      },
      {
        "name": "observations",
        "type": "string",
        "description": "Observações ou instruções especiais para o item"
      }
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
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
