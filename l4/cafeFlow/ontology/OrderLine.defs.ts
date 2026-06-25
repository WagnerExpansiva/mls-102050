/// <mls fileReference="_102050_/l4/cafeFlow/ontology/OrderLine.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityOrderLine = {
  "entityId": "OrderLine",
  "title": "Item do Pedido",
  "description": "Linha do pedido com MenuItem, quantidade, observações e status operacional (opcionalmente por item) para cozinha e controle de preparo.",
  "ownership": "moduleOwned",
  "kind": "supporting",
  "fields": [
    {
      "fieldId": "orderLineId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único da linha do pedido"
    },
    {
      "fieldId": "orderId",
      "type": "Order",
      "required": true,
      "description": "Referência ao pedido pai"
    },
    {
      "fieldId": "menuItemId",
      "type": "MenuItem",
      "required": true,
      "description": "Referência ao item do cardápio solicitado"
    },
    {
      "fieldId": "quantity",
      "type": "number",
      "required": true,
      "description": "Quantidade do item solicitado"
    },
    {
      "fieldId": "unitPrice",
      "type": "money",
      "required": true,
      "description": "Preço unitário no momento do pedido"
    },
    {
      "fieldId": "totalPrice",
      "type": "money",
      "required": true,
      "description": "Valor total da linha (quantidade × preço unitário)"
    },
    {
      "fieldId": "notes",
      "type": "text",
      "required": false,
      "description": "Observações e personalizações do item"
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Status operacional da linha para controle de preparo na cozinha",
      "enum": [
        "draft",
        "sentToKitchen",
        "inPreparation",
        "ready",
        "completed",
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
    "draft",
    "sentToKitchen",
    "inPreparation",
    "ready",
    "completed",
    "cancelled"
  ],
  "lifecycleStates": [
    "draft",
    "sentToKitchen",
    "inPreparation",
    "ready",
    "completed",
    "cancelled"
  ],
  "rulesApplied": [
    "orderStatusStateMachine"
  ]
} as const;

export default cafeFlowEntityOrderLine;
