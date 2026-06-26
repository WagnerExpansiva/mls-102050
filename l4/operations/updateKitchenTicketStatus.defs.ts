/// <mls fileReference="_102050_/l4/operations/updateKitchenTicketStatus.defs.ts" enhancement="_blank"/>

export const operationUpdateKitchenTicketStatus = {
  "operationId": "updateKitchenTicketStatus",
  "title": "Atualizar status do ticket de cozinha",
  "actor": "cook",
  "entity": "KitchenTicket",
  "kind": "update",
  "reads": [
    "KitchenTicket",
    "KitchenTicket.status"
  ],
  "writes": [
    "KitchenTicket",
    "KitchenTicket.status",
    "KitchenTicket.updatedAt"
  ],
  "rulesApplied": [
    "orderStatusTransitions"
  ],
  "story": {
    "actor": "cook",
    "goal": "marcar andamento da produção",
    "soThat": "a fila de preparo da cozinha seja gerenciada e os pedidos entregues corretamente",
    "steps": [
      "selecionar ticket",
      "alterar status para em preparo/pronto",
      "confirmar atualização"
    ],
    "outcome": "status do ticket atualizado"
  },
  "capability": {
    "capabilityId": "kitchenProductionFlow",
    "title": "Fluxo de produção da cozinha",
    "actor": "cook",
    "priority": "now"
  },
  "statusFrontend": "done",
  "statusBackend": "toCreate"
} as const;

export default operationUpdateKitchenTicketStatus;
