/// <mls fileReference="_102050_/l4/operations/manageMenuItemsAndRecipesOp.defs.ts" enhancement="_blank"/>

export const operationManageMenuItemsAndRecipesOp = {
  "operationId": "manageMenuItemsAndRecipesOp",
  "title": "Gerenciar itens do cardápio e receitas (ingredientes)",
  "actor": "managerOwner",
  "entity": "MenuItem",
  "kind": "update",
  "reads": [
    "MenuItem",
    "MenuCategory",
    "StockItem",
    "RecipeLine"
  ],
  "writes": [
    "MenuItem",
    "RecipeLine"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "managerOwner",
    "goal": "Cadastrar e manter itens do cardápio com suas receitas/ingredientes",
    "soThat": "o POS e a baixa automática de estoque funcionem com precisão",
    "steps": [
      "Criar/editar/excluir um MenuItem (nome, preço, disponibilidade)",
      "Definir/atualizar RecipeLine(s) associados (ingrediente/StockItem e quantidade por item)",
      "Salvar alterações e validar consistência (ex.: ingredientes existentes)"
    ],
    "outcome": "MenuItem atualizado e receitas (RecipeLine) prontas para cálculo de consumo"
  }
} as const;

export default operationManageMenuItemsAndRecipesOp;
