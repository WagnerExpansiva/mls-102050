/// <mls fileReference="_102050_/l4/operations/manageMenuItems.defs.ts" enhancement="_blank"/>

export const operationManageMenuItems = {
  "operationId": "manageMenuItems",
  "title": "Gerenciar itens do cardápio (CRUD + ativar/desativar)",
  "actor": "managerOwner",
  "entity": "MenuItem",
  "kind": "update",
  "reads": [
    "MenuItem",
    "MenuCategory"
  ],
  "writes": [
    "MenuItem",
    "MenuItem.status",
    "MenuItem.isAvailable",
    "MenuItem.price",
    "MenuItem.name",
    "MenuItem.description",
    "MenuItem.menuCategoryId"
  ],
  "rulesApplied": [
    "singleEstablishmentPerAccount"
  ],
  "story": {
    "actor": "managerOwner",
    "goal": "Criar, editar, ativar/desativar e remover itens do cardápio",
    "soThat": "o POS e a cozinha usem um cardápio atualizado",
    "steps": [
      "Criar ou localizar um MenuItem",
      "Atualizar nome, preço, descrição e categoria",
      "Ativar/desativar disponibilidade do item",
      "Excluir item quando aplicável"
    ],
    "outcome": "Cardápio consistente e atualizado"
  }
} as const;

export default operationManageMenuItems;
