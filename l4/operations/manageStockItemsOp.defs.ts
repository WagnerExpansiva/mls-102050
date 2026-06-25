/// <mls fileReference="_102050_/l4/operations/manageStockItemsOp.defs.ts" enhancement="_blank"/>

export const operationManageStockItemsOp = {
  "operationId": "manageStockItemsOp",
  "title": "Gerenciar itens de estoque",
  "actor": "managerOwner",
  "entity": "StockItem",
  "kind": "update",
  "reads": [
    "StockItem",
    "RecipeLine"
  ],
  "writes": [
    "StockItem"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "managerOwner",
    "goal": "Cadastrar e manter o catálogo de itens de estoque",
    "soThat": "compras/recebimentos e consumo por receitas sejam rastreáveis",
    "steps": [
      "Criar/editar/inativar StockItem (nome, unidade, fator/medida, limiar de estoque baixo se aplicável)",
      "Salvar alterações e garantir que itens possam ser referenciados em RecipeLine"
    ],
    "outcome": "StockItem atualizado e disponível para movimentações e receitas"
  }
} as const;

export default operationManageStockItemsOp;
