/// <mls fileReference="_102050_/l4/operations/updateOrderItemStatus.defs.ts" enhancement="_blank"/>

export const operationUpdateOrderItemStatus = {
  "operationId": "updateOrderItemStatus",
  "title": "Atualizar status de item do pedido",
  "actor": "cook",
  "entity": "OrderItem",
  "kind": "update",
  "reads": [
    "OrderItem",
    "OrderItem.status"
  ],
  "writes": [
    "OrderItem",
    "OrderItem.status",
    "OrderItem.updatedAt"
  ],
  "rulesApplied": [
    "orderStatusTransitions",
    "ingredientConsumptionTrigger"
  ],
  "story": {
    "actor": "cook",
    "goal": "sincronizar andamento entre cozinha e POS",
    "soThat": "a equipe de salão e o POS tenham visibilidade do progresso em tempo real",
    "steps": [
      "selecionar item do pedido",
      "alterar status do item",
      "confirmar atualização"
    ],
    "outcome": "status do item atualizado e sincronizado"
  },
  "capability": {
    "capabilityId": "updateOrderAndKitchenStatuses",
    "title": "Atualizar status de pedido/itens (POS ↔ cozinha)",
    "actor": "cook",
    "priority": "now"
  },
  "statusFrontend": "done",
  "statusBackend": "toCreate"
} as const;

export default operationUpdateOrderItemStatus;
