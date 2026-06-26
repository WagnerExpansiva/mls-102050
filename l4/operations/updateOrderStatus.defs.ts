/// <mls fileReference="_102050_/l4/operations/updateOrderStatus.defs.ts" enhancement="_blank"/>

export const operationUpdateOrderStatus = {
  "operationId": "updateOrderStatus",
  "title": "Atualizar status do pedido",
  "actor": "attendant",
  "entity": "Order",
  "kind": "update",
  "reads": [
    "Order",
    "Order.status",
    "Order.orderType",
    "Order.tableId",
    "OrderItem",
    "KitchenTicket",
    "Table",
    "Payment",
    "InventoryItem",
    "RecipeComponent"
  ],
  "writes": [
    "Order",
    "Order.status",
    "Order.updatedAt",
    "Order.closedAt",
    "Order.cancelledAt",
    "Order.cancellationReason",
    "Table",
    "StockConsumption"
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
    "goal": "acompanhar progresso do pedido",
    "steps": [
      "selecionar pedido",
      "alterar status conforme andamento",
      "confirmar atualização"
    ],
    "outcome": "status do pedido atualizado"
  },
  "capability": {
    "capabilityId": "takeoutOrderLifecycle",
    "title": "Ciclo de pedido (takeout)",
    "actor": "attendant",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationUpdateOrderStatus;
