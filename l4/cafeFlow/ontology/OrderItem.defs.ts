/// <mls fileReference="_102050_/l4/cafeFlow/ontology/OrderItem.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityOrderItem = {
  "entityId": "OrderItem",
  "title": "Item do Pedido",
  "description": "Linha do pedido com item do cardápio, quantidade, observações e status de produção quando aplicável.",
  "ownership": "moduleOwned",
  "kind": "supporting",
  "fields": [
    {
      "fieldId": "id",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do item do pedido"
    },
    {
      "fieldId": "orderId",
      "type": "uuid",
      "required": true,
      "description": "Referência ao pedido (Order) ao qual este item pertence"
    },
    {
      "fieldId": "menuItemId",
      "type": "uuid",
      "required": true,
      "description": "Referência ao item do cardápio (MenuItem) solicitado"
    },
    {
      "fieldId": "kitchenTicketId",
      "type": "uuid",
      "required": false,
      "description": "Referência ao ticket de cozinha (KitchenTicket) quando o item exige preparo"
    },
    {
      "fieldId": "quantity",
      "type": "number",
      "required": true,
      "description": "Quantidade solicitada do item"
    },
    {
      "fieldId": "unitPrice",
      "type": "money",
      "required": true,
      "description": "Preço unitário do item no momento do pedido"
    },
    {
      "fieldId": "totalPrice",
      "type": "money",
      "required": true,
      "description": "Preço total do item (quantidade × preço unitário)"
    },
    {
      "fieldId": "observations",
      "type": "text",
      "required": false,
      "description": "Observações ou instruções especiais para o item"
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Status de produção/atendimento do item",
      "enum": [
        "new",
        "sentToKitchen",
        "inPreparation",
        "ready",
        "served",
        "cancelled"
      ]
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de criação do registro"
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização do registro"
    }
  ],
  "statusEnum": [
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
  "rulesApplied": [
    "orderStatusTransitions",
    "ingredientConsumptionTrigger"
  ]
} as const;

export default cafeFlowEntityOrderItem;
