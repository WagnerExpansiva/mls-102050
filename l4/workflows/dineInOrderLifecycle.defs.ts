/// <mls fileReference="_102050_/l4/workflows/dineInOrderLifecycle.defs.ts" enhancement="_blank"/>

export const workflowDineInOrderLifecycle = {
  "workflowId": "dineInOrderLifecycle",
  "title": "Ciclo de pedido (mesa)",
  "executionMode": "sequential",
  "trigger": "attendant seleciona mesa e cria pedido dine-in",
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
      "on": "createOrder",
      "by": "attendant"
    },
    {
      "from": "draft",
      "to": "draft",
      "on": "addOrderItem",
      "by": "attendant"
    },
    {
      "from": "draft",
      "to": "sentToKitchen",
      "on": "createKitchenTicket",
      "by": "attendant"
    },
    {
      "from": "sentToKitchen",
      "to": "inPreparation",
      "on": "updateOrderStatus",
      "by": "attendant"
    },
    {
      "from": "inPreparation",
      "to": "ready",
      "on": "updateOrderStatus",
      "by": "attendant"
    },
    {
      "from": "ready",
      "to": "served",
      "on": "updateOrderStatus",
      "by": "attendant"
    },
    {
      "from": "served",
      "to": "closed",
      "on": "updateOrderStatus",
      "by": "attendant"
    },
    {
      "from": "closed",
      "to": "closed",
      "on": "updateTableStatus",
      "by": "attendant"
    },
    {
      "from": "draft",
      "to": "cancelled",
      "on": "updateOrderStatus",
      "by": "attendant",
      "guard": "cancellation requested"
    }
  ],
  "operationIds": [
    "createOrder",
    "addOrderItem",
    "createKitchenTicket",
    "updateOrderStatus",
    "updateTableStatus"
  ],
  "entities": [
    "Order",
    "OrderItem",
    "KitchenTicket",
    "Table"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "attendant",
    "goal": "registrar pedido de mesa e acompanhar até finalização",
    "steps": [
      "selecionar mesa e criar pedido dine-in",
      "adicionar itens ao pedido",
      "enviar pedido para a cozinha",
      "atualizar status do pedido durante o serviço",
      "atualizar ocupação da mesa"
    ],
    "outcome": "pedido de mesa registrado, cozinha notificada e mesa controlada"
  },
  "capabilities": [
    {
      "capabilityId": "dineInOrderLifecycle",
      "title": "Ciclo de pedido (mesa)",
      "actor": "attendant",
      "priority": "now"
    }
  ],
  "statusFrontend": "done",
  "statusBackend": "inProgress"
} as const;

export default workflowDineInOrderLifecycle;
