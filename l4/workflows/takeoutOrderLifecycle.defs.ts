/// <mls fileReference="_102050_/l4/workflows/takeoutOrderLifecycle.defs.ts" enhancement="_blank"/>

export const workflowTakeoutOrderLifecycle = {
  "workflowId": "takeoutOrderLifecycle",
  "title": "Ciclo de pedido (takeout)",
  "executionMode": "sequential",
  "trigger": "attendant cria pedido para viagem",
  "actors": [
    "attendant"
  ],
  "states": [
    "draft",
    "sentToKitchen",
    "inPreparation",
    "ready",
    "served",
    "closed",
    "cancelled"
  ],
  "transitions": [
    {
      "from": "draft",
      "to": "draft",
      "on": "addItem",
      "by": "attendant"
    },
    {
      "from": "draft",
      "to": "sentToKitchen",
      "on": "submitToKitchen",
      "by": "attendant",
      "guard": "hasItems"
    },
    {
      "from": "sentToKitchen",
      "to": "inPreparation",
      "on": "startPreparation",
      "by": "attendant"
    },
    {
      "from": "inPreparation",
      "to": "ready",
      "on": "finishPreparation",
      "by": "attendant"
    },
    {
      "from": "ready",
      "to": "served",
      "on": "serveOrder",
      "by": "attendant"
    },
    {
      "from": "served",
      "to": "closed",
      "on": "closeOrder",
      "by": "attendant"
    },
    {
      "from": "draft",
      "to": "cancelled",
      "on": "cancel",
      "by": "attendant"
    },
    {
      "from": "sentToKitchen",
      "to": "cancelled",
      "on": "cancel",
      "by": "attendant"
    },
    {
      "from": "inPreparation",
      "to": "cancelled",
      "on": "cancel",
      "by": "attendant"
    }
  ],
  "operationIds": [
    "createOrder",
    "addOrderItem",
    "createKitchenTicket",
    "updateOrderStatus"
  ],
  "entities": [
    "Order",
    "OrderItem",
    "KitchenTicket"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "attendant",
    "goal": "registrar e encaminhar um pedido para viagem",
    "steps": [
      "criar pedido do tipo takeout",
      "adicionar itens ao pedido",
      "enviar pedido para a cozinha",
      "atualizar status do pedido conforme produção"
    ],
    "outcome": "pedido takeout registrado, enviado à cozinha e acompanhado até pronto"
  },
  "capabilities": [
    {
      "capabilityId": "takeoutOrderLifecycle",
      "title": "Ciclo de pedido (takeout)",
      "actor": "attendant",
      "priority": "now"
    }
  ],
  "statusFrontend": "toCreate",
  "statusBackend": "done"
} as const;

export default workflowTakeoutOrderLifecycle;
