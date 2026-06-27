/// <mls fileReference="_102050_/l4/operations/createKitchenTicket.defs.ts" enhancement="_blank"/>

export const operationCreateKitchenTicket = {
  "operationId": "createKitchenTicket",
  "title": "Criar ticket de cozinha",
  "actor": "attendant",
  "entity": "KitchenTicket",
  "kind": "create",
  "reads": [
    "Order",
    "OrderItem"
  ],
  "writes": [
    "KitchenTicket"
  ],
  "rulesApplied": [
    "orderStatusTransitions"
  ],
  "story": {
    "actor": "attendant",
    "goal": "enviar o pedido para produção",
    "steps": [
      "confirmar itens do pedido",
      "enviar para cozinha",
      "sistema cria ticket"
    ],
    "outcome": "ticket de cozinha criado"
  },
  "capability": {
    "capabilityId": "takeoutOrderLifecycle",
    "title": "Ciclo de pedido (takeout)",
    "actor": "attendant",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "done"
} as const;

export default operationCreateKitchenTicket;
