/// <mls fileReference="_102050_/l4/cafeFlow/ontology/Order.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityOrder = {
  "entityId": "Order",
  "title": "Pedido",
  "description": "Pedido de venda (mesa ou takeout) com itens, preços no momento da venda e status para coordenação com a cozinha.",
  "ownership": "moduleOwned",
  "kind": "core",
  "fields": [
    {
      "fieldId": "orderId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do pedido"
    },
    {
      "fieldId": "dailyShiftId",
      "type": "uuid",
      "required": true,
      "description": "Turno diário em que o pedido foi registrado"
    },
    {
      "fieldId": "tableId",
      "type": "uuid",
      "required": false,
      "description": "Referência à mesa associada (para pedidos do tipo mesa)"
    },
    {
      "fieldId": "kitchenTicketId",
      "type": "uuid",
      "required": false,
      "description": "Ticket de cozinha gerado para fila de preparo"
    },
    {
      "fieldId": "orderType",
      "type": "string",
      "required": true,
      "description": "Tipo do pedido: mesa ou takeout",
      "enum": [
        "mesa",
        "takeout"
      ]
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Status atual do pedido na coordenação com a cozinha",
      "enum": [
        "draft",
        "sentToKitchen",
        "inPreparation",
        "ready",
        "served",
        "closed",
        "cancelled"
      ]
    },
    {
      "fieldId": "totalAmount",
      "type": "money",
      "required": true,
      "description": "Valor total do pedido com preços no momento da venda"
    },
    {
      "fieldId": "notes",
      "type": "text",
      "required": false,
      "description": "Observações gerais do pedido"
    },
    {
      "fieldId": "customerName",
      "type": "string",
      "required": false,
      "description": "Nome do cliente para identificação do pedido"
    },
    {
      "fieldId": "customerPhone",
      "type": "string",
      "required": false,
      "description": "Telefone de contato do cliente"
    },
    {
      "fieldId": "numberOfGuests",
      "type": "number",
      "required": false,
      "description": "Número de pessoas na mesa"
    },
    {
      "fieldId": "closedAt",
      "type": "datetime",
      "required": false,
      "description": "Data e hora do fechamento do pedido"
    },
    {
      "fieldId": "cancelledAt",
      "type": "datetime",
      "required": false,
      "description": "Data e hora do cancelamento do pedido"
    },
    {
      "fieldId": "cancellationReason",
      "type": "text",
      "required": false,
      "description": "Motivo do cancelamento"
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
    "served",
    "closed",
    "cancelled"
  ],
  "lifecycleStates": [
    "draft",
    "sentToKitchen",
    "inPreparation",
    "ready",
    "served",
    "closed",
    "cancelled"
  ],
  "rulesApplied": [
    "orderStatusTransitions",
    "paymentTimingByOrderType",
    "ingredientConsumptionTrigger",
    "aiOutputLanguageSelection",
    "tableOccupancyConsistency"
  ]
} as const;

export default cafeFlowEntityOrder;
