/// <mls fileReference="_102050_/l4/cafeFlow/ontology/Order.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityOrder = {
  "entityId": "Order",
  "title": "Pedido",
  "description": "Registro do atendimento (mesa ou takeout) contendo itens, quantidades, timestamps e status para coordenação POS↔cozinha↔entrega e base para relatórios.",
  "ownership": "moduleOwned",
  "kind": "core",
  "fields": [
    {
      "fieldId": "id",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do pedido."
    },
    {
      "fieldId": "orderType",
      "type": "string",
      "required": true,
      "description": "Tipo de atendimento: mesa (dine-in) ou takeout.",
      "enum": [
        "mesa",
        "takeout"
      ]
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Estado atual do pedido no fluxo de atendimento.",
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
      "fieldId": "tableId",
      "type": "Table",
      "required": false,
      "description": "Referência à mesa para pedidos do tipo mesa; nulo para takeout."
    },
    {
      "fieldId": "dailyShiftId",
      "type": "DailyShift",
      "required": false,
      "description": "Turno diário ao qual o pedido foi associado para fechamento e relatórios."
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
    "orderStatusStateMachine",
    "inventoryConsumptionTiming",
    "shiftCloseEligibility"
  ]
} as const;

export default cafeFlowEntityOrder;
