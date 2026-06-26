/// <mls fileReference="_102050_/l4/operations/viewKitchenTickets.defs.ts" enhancement="_blank"/>

export const operationViewKitchenTickets = {
  "operationId": "viewKitchenTickets",
  "title": "Consultar tickets da cozinha",
  "actor": "cook",
  "entity": "KitchenTicket",
  "kind": "query",
  "reads": [
    "KitchenTicket"
  ],
  "writes": [],
  "rulesApplied": [],
  "story": {
    "actor": "cook",
    "goal": "ver pedidos pendentes",
    "steps": [
      "abrir fila de tickets",
      "filtrar por status",
      "visualizar detalhes"
    ],
    "outcome": "tickets de cozinha exibidos"
  },
  "capability": {
    "capabilityId": "kitchenProductionFlow",
    "title": "Fluxo de produção da cozinha",
    "actor": "cook",
    "priority": "now"
  },
  "statusFrontend": "done",
  "statusBackend": "inProgress"
} as const;

export default operationViewKitchenTickets;
