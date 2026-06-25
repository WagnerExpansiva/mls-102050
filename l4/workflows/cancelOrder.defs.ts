/// <mls fileReference="_102050_/l4/workflows/cancelOrder.defs.ts" enhancement="_blank"/>

export const workflowCancelOrder = {
  "workflowId": "cancelOrder",
  "title": "Cancelar pedido",
  "executionMode": "sequential",
  "trigger": "Caixa solicita cancelamento de um pedido existente",
  "actors": [
    "cashier"
  ],
  "states": [
    "sentToKitchen",
    "inPreparation",
    "cancelled"
  ],
  "transitions": [
    {
      "from": "sentToKitchen",
      "to": "inPreparation",
      "on": "confirmCancellation",
      "by": "cashier",
      "guard": "orderIsCancellable"
    },
    {
      "from": "inPreparation",
      "to": "cancelled",
      "on": "finalizeCancellation",
      "by": "system"
    }
  ],
  "operationIds": [],
  "entities": [
    "Order",
    "OrderItem",
    "StockMovement",
    "InventoryItem"
  ],
  "rulesApplied": [
    "orderCancellationEligibilityRule",
    "stockReversalOnCancellationRule",
    "orderStatusTransitionToCancelledRule"
  ],
  "story": {
    "actor": "cashier",
    "goal": "Cancelar um pedido já registrado",
    "soThat": "o histórico e os efeitos no estoque permaneçam corretos",
    "steps": [
      "Localizar o Order a ser cancelado",
      "Validar elegibilidade de cancelamento conforme status atual",
      "Confirmar o cancelamento informando motivo",
      "Atualizar status do Order para cancelado e registrar histórico",
      "Tratar efeitos no estoque (ex.: estornar baixa automática se aplicável, registrando StockMovement de ajuste)"
    ],
    "outcome": "Pedido cancelado com histórico e estoque reconciliados"
  }
} as const;

export default workflowCancelOrder;
