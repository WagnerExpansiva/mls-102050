/// <mls fileReference="_102050_/l4/operations/sendOrderToKitchen.defs.ts" enhancement="_blank"/>

export const operationSendOrderToKitchen = {
  "operationId": "sendOrderToKitchen",
  "title": "Enviar pedido para cozinha",
  "actor": "attendant",
  "entity": "Order",
  "kind": "update",
  "reads": [
    "Order",
    "Order.status",
    "Order.dailyShiftId",
    "OrderItem",
    "DailyShift"
  ],
  "writes": [
    "Order",
    "Order.status",
    "Order.updatedAt"
  ],
  "rulesApplied": [
    "shiftMustBeOpenToRegisterOrders"
  ],
  "story": {
    "actor": "attendant",
    "goal": "Despachar o pedido para produção na cozinha",
    "soThat": "a cozinha receba e comece o preparo",
    "steps": [
      "Selecionar um Order aberto/rascunho",
      "Validar que há itens e informações necessárias",
      "Atualizar status do Order para enviado à cozinha",
      "Confirmar que o pedido aparece na fila da cozinha"
    ],
    "outcome": "Pedido encaminhado para a cozinha com status atualizado"
  }
} as const;

export default operationSendOrderToKitchen;
