/// <mls fileReference="_102050_/l4/operations/addOrderItem.defs.ts" enhancement="_blank"/>

export const operationAddOrderItem = {
  "operationId": "addOrderItem",
  "title": "Adicionar item ao pedido",
  "actor": "attendant",
  "entity": "OrderItem",
  "kind": "create",
  "reads": [
    "MenuItem",
    "Order"
  ],
  "writes": [
    "OrderItem",
    "Order",
    "StockConsumption"
  ],
  "rulesApplied": [
    "orderStatusTransitions",
    "ingredientConsumptionTrigger"
  ],
  "story": {
    "actor": "attendant",
    "goal": "registrar itens no pedido",
    "soThat": "para compor o pedido do cliente",
    "steps": [
      "selecionar item do cardápio",
      "definir quantidade e observações",
      "adicionar ao pedido"
    ],
    "outcome": "itens adicionados ao pedido"
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

export default operationAddOrderItem;
