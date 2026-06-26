/// <mls fileReference="_102050_/l4/operations/manageMenuCategories.defs.ts" enhancement="_blank"/>

export const operationManageMenuCategories = {
  "operationId": "manageMenuCategories",
  "title": "Gerenciar categorias do cardápio",
  "actor": "manager",
  "entity": "MenuCategory",
  "kind": "update",
  "reads": [
    "MenuCategory"
  ],
  "writes": [
    "MenuCategory"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "manager",
    "goal": "organizar categorias do cardápio",
    "steps": [
      "abrir cadastro de categorias",
      "criar, editar ou remover categorias",
      "salvar alterações"
    ],
    "outcome": "categorias do cardápio atualizadas"
  },
  "capability": {
    "capabilityId": "manageMenuCategories",
    "title": "Gerenciar categorias do cardápio",
    "actor": "manager",
    "priority": "now"
  },
  "statusFrontend": "done",
  "statusBackend": "toCreate"
} as const;

export default operationManageMenuCategories;
