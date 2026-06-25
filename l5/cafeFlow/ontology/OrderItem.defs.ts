/// <mls fileReference="_102050_/l5/cafeFlow/ontology/OrderItem.defs.ts" enhancement="_blank"/>

export const OrderItemEntityDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "ontologyEntity",
  "artifactId": "OrderItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanEntityDefinition",
    "stepId": 39,
    "planId": ""
  },
  "data": {
    "entityDefinition": {
      "entityId": "OrderItem",
      "title": "Item do Pedido",
      "description": "Linha de um pedido, vinculada a um item do cardápio, com quantidade, preço unitário e observações.",
      "ownership": "moduleOwned",
      "kind": "transactionItem",
      "fields": [
        {
          "fieldId": "orderItemId",
          "type": "uuid",
          "required": true,
          "description": "Identificador único do item do pedido."
        },
        {
          "fieldId": "orderId",
          "type": "Order",
          "required": true,
          "description": "Referência ao pedido ao qual este item pertence."
        },
        {
          "fieldId": "menuItemId",
          "type": "MenuItem",
          "required": true,
          "description": "Referência ao item do cardápio selecionado."
        },
        {
          "fieldId": "quantity",
          "type": "number",
          "required": true,
          "description": "Quantidade solicitada do item do cardápio."
        },
        {
          "fieldId": "unitPrice",
          "type": "money",
          "required": true,
          "description": "Preço unitário do item no momento do pedido."
        },
        {
          "fieldId": "notes",
          "type": "text",
          "required": false,
          "description": "Observações ou modificações solicitadas para este item do pedido."
        },
        {
          "fieldId": "createdAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora de criação do registro."
        },
        {
          "fieldId": "updatedAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora da última atualização do registro."
        }
      ],
      "rulesApplied": []
    }
  }
} as const;

export default OrderItemEntityDefinition;
