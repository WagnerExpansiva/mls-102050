/// <mls fileReference="_102050_/l4/operations/manageMenuItems.defs.ts" enhancement="_blank"/>

export const operationManageMenuItems = {
  "operationId": "manageMenuItems",
  "title": "Gerenciar itens do cardápio",
  "actor": "manager",
  "entity": "MenuItem",
  "kind": "update",
  "reads": [
    "MenuItem",
    "MenuCategory"
  ],
  "writes": [
    "MenuItem"
  ],
  "rulesApplied": [
    "aiOutputLanguageSelection"
  ],
  "story": {
    "actor": "manager",
    "goal": "manter itens do cardápio atualizados",
    "steps": [
      "abrir cadastro de itens",
      "criar, editar ou desativar itens",
      "salvar alterações"
    ],
    "outcome": "itens do cardápio atualizados"
  },
  "capability": {
    "capabilityId": "manageMenuItems",
    "title": "Gerenciar itens do cardápio",
    "actor": "manager",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationManageMenuItems;
