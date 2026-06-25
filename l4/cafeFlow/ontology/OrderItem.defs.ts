/// <mls fileReference="_102050_/l4/cafeFlow/ontology/OrderItem.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityOrderItem = {
  "entityId": "OrderItem",
  "title": "Item do Pedido",
  "description": "Linha do pedido com MenuItem, quantidade e preço aplicado no momento.",
  "ownership": "moduleOwned",
  "kind": "core",
  "fields": [
    {
      "fieldId": "orderItemId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do item do pedido"
    },
    {
      "fieldId": "orderId",
      "type": "Order",
      "required": true,
      "description": "Referência ao pedido (Order) ao qual este item pertence"
    },
    {
      "fieldId": "menuItemId",
      "type": "MenuItem",
      "required": true,
      "description": "Referência ao item do cardápio (MenuItem) vendido"
    },
    {
      "fieldId": "quantity",
      "type": "number",
      "required": true,
      "description": "Quantidade vendida"
    },
    {
      "fieldId": "unitPrice",
      "type": "money",
      "required": true,
      "description": "Preço unitário aplicado no momento da venda"
    },
    {
      "fieldId": "totalPrice",
      "type": "money",
      "required": true,
      "description": "Valor total do item (quantidade × preço unitário)"
    },
    {
      "fieldId": "notes",
      "type": "text",
      "required": false,
      "description": "Observações ou modificações especiais do item"
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
  "rulesApplied": [
    "inventoryAutoConsumptionByRecipeOnOrderCompletion"
  ]
} as const;

export default cafeFlowEntityOrderItem;
