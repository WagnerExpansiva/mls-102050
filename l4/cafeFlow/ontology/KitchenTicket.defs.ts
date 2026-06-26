/// <mls fileReference="_102050_/l4/cafeFlow/ontology/KitchenTicket.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityKitchenTicket = {
  "entityId": "KitchenTicket",
  "title": "Ticket de Cozinha",
  "description": "Agrupamento operacional de itens a preparar (por pedido), usado para fila e atualização de status na cozinha.",
  "ownership": "moduleOwned",
  "kind": "supporting",
  "fields": [
    {
      "fieldId": "kitchenTicketId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do ticket de cozinha"
    },
    {
      "fieldId": "orderId",
      "type": "Order",
      "required": true,
      "description": "Referência ao pedido que gerou este ticket para a fila de preparo"
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Status atual do ticket na fila de preparo da cozinha",
      "enum": [
        "open",
        "inProgress",
        "done",
        "void"
      ]
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de criação do ticket"
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização do ticket"
    }
  ],
  "statusEnum": [
    "open",
    "inProgress",
    "done",
    "void"
  ],
  "lifecycleStates": [
    "open",
    "inProgress",
    "done",
    "void"
  ],
  "rulesApplied": [
    "orderStatusTransitions"
  ]
} as const;

export default cafeFlowEntityKitchenTicket;
