/// <mls fileReference="_102050_/l4/cafeFlow/ontology/Order.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityOrder = {
  "entityId": "Order",
  "title": "Pedido",
  "description": "Pedido de venda (mesa ou takeout) com status e vínculo ao DailyShift em que ocorreu.",
  "ownership": "moduleOwned",
  "kind": "core",
  "fields": [
    {
      "fieldId": "orderId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do pedido."
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Status atual do pedido no ciclo de vida.",
      "enum": [
        "draft",
        "sentToKitchen",
        "inPreparation",
        "ready",
        "delivered",
        "cancelled"
      ]
    },
    {
      "fieldId": "dailyShiftId",
      "type": "DailyShift",
      "required": true,
      "description": "Referência ao turno (DailyShift) em que o pedido foi registrado."
    },
    {
      "fieldId": "tableId",
      "type": "Table",
      "required": false,
      "description": "Referência opcional à mesa (Table). Ausente para pedidos takeout."
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
  "statusEnum": [
    "draft",
    "sentToKitchen",
    "inPreparation",
    "ready",
    "delivered",
    "cancelled"
  ],
  "lifecycleStates": [
    "draft",
    "sentToKitchen",
    "inPreparation",
    "ready",
    "delivered",
    "cancelled"
  ],
  "rulesApplied": [
    "singleEstablishmentPerAccount",
    "inventoryAutoConsumptionByRecipeOnOrderCompletion",
    "orderCancellationStockHandling",
    "shiftMustBeOpenToRegisterOrders"
  ]
} as const;

export default cafeFlowEntityOrder;
