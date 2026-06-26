/// <mls fileReference="_102050_/l4/operations/browseMenuForPos.defs.ts" enhancement="_blank"/>

export const operationBrowseMenuForPos = {
  "operationId": "browseMenuForPos",
  "title": "Consultar cardápio no POS",
  "actor": "attendant",
  "entity": "MenuItem",
  "kind": "query",
  "reads": [
    "MenuItem",
    "MenuCategory"
  ],
  "writes": [],
  "rulesApplied": [
    "aiOutputLanguageSelection"
  ],
  "story": {
    "actor": "attendant",
    "goal": "consultar itens disponíveis no POS",
    "soThat": "possa atender os clientes com agilidade",
    "steps": [
      "abrir cardápio no POS",
      "filtrar ou buscar itens",
      "visualizar detalhes do item"
    ],
    "outcome": "itens do cardápio exibidos para atendimento"
  },
  "capability": {
    "capabilityId": "browseMenuForPos",
    "title": "Consultar cardápio no POS",
    "actor": "attendant",
    "priority": "now"
  },
  "statusFrontend": "done",
  "statusBackend": "toCreate"
} as const;

export default operationBrowseMenuForPos;
