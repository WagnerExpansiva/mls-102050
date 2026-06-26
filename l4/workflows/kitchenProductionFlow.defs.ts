/// <mls fileReference="_102050_/l4/workflows/kitchenProductionFlow.defs.ts" enhancement="_blank"/>

export const workflowKitchenProductionFlow = {
  "workflowId": "kitchenProductionFlow",
  "title": "Fluxo de produção da cozinha",
  "executionMode": "sequential",
  "trigger": "cook consulta tickets pendentes para produção",
  "actors": [
    "cook"
  ],
  "states": [
    "open",
    "inProgress",
    "done",
    "void"
  ],
  "transitions": [
    {
      "from": "open",
      "to": "inProgress",
      "on": "startPreparation",
      "by": "cook"
    },
    {
      "from": "inProgress",
      "to": "done",
      "on": "finishPreparation",
      "by": "cook"
    },
    {
      "from": "open",
      "to": "void",
      "on": "cancelTicket",
      "by": "cook"
    },
    {
      "from": "inProgress",
      "to": "void",
      "on": "cancelTicket",
      "by": "cook"
    }
  ],
  "operationIds": [
    "viewKitchenTickets",
    "updateKitchenTicketStatus",
    "updateOrderItemStatus"
  ],
  "entities": [
    "KitchenTicket",
    "OrderItem"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "cook",
    "goal": "produzir os itens recebidos e sinalizar o andamento",
    "steps": [
      "consultar tickets pendentes",
      "atualizar status do ticket conforme preparo",
      "atualizar status dos itens do pedido"
    ],
    "outcome": "cozinha produz itens e status ficam sincronizados"
  },
  "capabilities": [
    {
      "capabilityId": "kitchenProductionFlow",
      "title": "Fluxo de produção da cozinha",
      "actor": "cook",
      "priority": "now"
    }
  ],
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default workflowKitchenProductionFlow;
