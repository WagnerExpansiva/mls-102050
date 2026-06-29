/// <mls fileReference="_102050_/l4/operations/createOrder.defs.ts" enhancement="_blank"/>

export const operationCreateOrder = {
  "operationId": "createOrder",
  "title": "Criar pedido",
  "actor": "attendant",
  "entity": "Order",
  "kind": "create",
  "reads": [
    "DailyShift",
    "Table",
    "TableOccupancy"
  ],
  "writes": [
    "Order",
    "TableOccupancy"
  ],
  "rulesApplied": [
    "orderStatusTransitions",
    "paymentTimingByOrderType",
    "ingredientConsumptionTrigger",
    "aiOutputLanguageSelection",
    "tableOccupancyConsistency"
  ],
  "story": {
    "actor": "attendant",
    "goal": "registrar um novo pedido",
    "steps": [
      "iniciar novo pedido",
      "definir tipo do pedido",
      "confirmar criação"
    ],
    "outcome": "pedido criado"
  },
  "capability": {
    "capabilityId": "takeoutOrderLifecycle",
    "title": "Ciclo de pedido (takeout)",
    "actor": "attendant",
    "priority": "now"
  },
  "statusFrontend": "done",
  "statusBackend": "done"
} as const;

export default operationCreateOrder;
