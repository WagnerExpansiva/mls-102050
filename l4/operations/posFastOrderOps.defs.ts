/// <mls fileReference="_102050_/l4/operations/posFastOrderOps.defs.ts" enhancement="_blank"/>

export const operationPosFastOrderOps = {
  "operationId": "posFastOrderOps",
  "title": "POS rápido: abrir pedido e adicionar/remover itens",
  "actor": "attendant",
  "entity": "Order",
  "kind": "create",
  "reads": [
    "DailyShift",
    "Table",
    "MenuItem"
  ],
  "writes": [
    "Order",
    "OrderItem"
  ],
  "rulesApplied": [
    "shiftMustBeOpenToRegisterOrders",
    "singleEstablishmentPerAccount"
  ],
  "story": {
    "actor": "attendant",
    "goal": "Abrir rapidamente um pedido e ajustar seus itens",
    "soThat": "o atendimento no balcão/mesa seja ágil",
    "steps": [
      "Criar um novo Order (em turno aberto)",
      "Adicionar OrderItem ao Order com quantidades e observações",
      "Remover ou ajustar OrderItem quando necessário",
      "Salvar o Order em estado rascunho/aberto"
    ],
    "outcome": "Pedido aberto com itens corretamente registrados"
  }
} as const;

export default operationPosFastOrderOps;
