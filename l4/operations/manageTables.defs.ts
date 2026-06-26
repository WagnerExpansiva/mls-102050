/// <mls fileReference="_102050_/l4/operations/manageTables.defs.ts" enhancement="_blank"/>

export const operationManageTables = {
  "operationId": "manageTables",
  "title": "Gerenciar mesas",
  "actor": "manager",
  "entity": "Table",
  "kind": "update",
  "reads": [
    "Table"
  ],
  "writes": [
    "Table"
  ],
  "rulesApplied": [
    "tableOccupancyConsistency"
  ],
  "story": {
    "actor": "manager",
    "goal": "manter cadastro de mesas",
    "steps": [
      "abrir cadastro de mesas",
      "criar, editar ou remover mesas",
      "salvar alterações"
    ],
    "outcome": "mesas atualizadas"
  },
  "capability": {
    "capabilityId": "manageTables",
    "title": "Gerenciar mesas",
    "actor": "manager",
    "priority": "soon"
  },
  "statusFrontend": "done",
  "statusBackend": "toCreate"
} as const;

export default operationManageTables;
