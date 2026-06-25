/// <mls fileReference="_102050_/l4/operations/adjustOrReceiveStockOp.defs.ts" enhancement="_blank"/>

export const operationAdjustOrReceiveStockOp = {
  "operationId": "adjustOrReceiveStockOp",
  "title": "Ajustar/receber estoque",
  "actor": "managerOwner",
  "entity": "StockMovement",
  "kind": "create",
  "reads": [
    "StockItem"
  ],
  "writes": [
    "StockMovement",
    "StockItem"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "managerOwner",
    "goal": "Registrar entrada/ajuste de estoque",
    "soThat": "os níveis de StockItem reflitam a quantidade real disponível",
    "steps": [
      "Selecionar um StockItem a ajustar/receber",
      "Informar tipo de movimentação (entrada, ajuste) e quantidade",
      "Criar StockMovement com data/motivo e aplicar ao saldo do StockItem"
    ],
    "outcome": "StockMovement registrado e saldo do StockItem atualizado"
  }
} as const;

export default operationAdjustOrReceiveStockOp;
