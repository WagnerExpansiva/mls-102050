/// <mls fileReference="_102050_/l4/workflows/orderFinalizationAndInventoryConsumption.defs.ts" enhancement="_blank"/>

export const workflowOrderFinalizationAndInventoryConsumption = {
  "workflowId": "orderFinalizationAndInventoryConsumption",
  "title": "Finalizar pedido e consumir estoque automaticamente",
  "executionMode": "sequential",
  "trigger": "Caixa decide finalizar um pedido dentro de um turno (DailyShift) aberto",
  "actors": [
    "cashier"
  ],
  "states": [
    "Open",
    "Verified",
    "Finalized",
    "InventoryConsumed",
    "Completed"
  ],
  "transitions": [
    {
      "from": "Open",
      "to": "Verified",
      "on": "verifyItems",
      "by": "cashier"
    },
    {
      "from": "Verified",
      "to": "Finalized",
      "on": "finalizeOrder",
      "by": "cashier",
      "guard": "dailyShiftOpen"
    },
    {
      "from": "Finalized",
      "to": "InventoryConsumed",
      "on": "consumeStock"
    },
    {
      "from": "InventoryConsumed",
      "to": "Completed",
      "on": "persistRecords"
    }
  ],
  "operationIds": [],
  "entities": [
    "Order",
    "DailyShift",
    "StockMovement",
    "StockItem",
    "RecipeLine",
    "MenuItem",
    "OrderLine"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "cashier",
    "goal": "Encerrar o atendimento de um pedido e garantir que o estoque seja baixado conforme o consumo",
    "soThat": "o caixa feche corretamente e o controle de estoque permaneça confiável",
    "steps": [
      "Localizar o Order a ser finalizado (normalmente já pronto/entregue)",
      "Conferir itens (OrderLines) e total a cobrar",
      "Finalizar o pedido (encerrar atendimento) dentro do DailyShift aberto",
      "Ao finalizar, gerar StockMovement(s) e baixar quantidades dos StockItem conforme RecipeLine dos MenuItem presentes no pedido",
      "Persistir o status final do Order e registrar a movimentação para auditoria"
    ],
    "outcome": "Order finalizado e estoque baixado automaticamente com registros de StockMovement"
  }
} as const;

export default workflowOrderFinalizationAndInventoryConsumption;
