/// <mls fileReference="_102050_/l4/operations/updateTableStatus.defs.ts" enhancement="_blank"/>

export const operationUpdateTableStatus = {
  "operationId": "updateTableStatus",
  "title": "Atualizar ocupação da mesa",
  "actor": "attendant",
  "entity": "Table",
  "kind": "update",
  "reads": [
    "Table"
  ],
  "writes": [
    "Table.status",
    "Table.updatedAt"
  ],
  "rulesApplied": [
    "tableOccupancyConsistency"
  ],
  "story": {
    "actor": "attendant",
    "goal": "manter status de mesa consistente",
    "steps": [
      "selecionar mesa",
      "alterar status de ocupação",
      "salvar atualização"
    ],
    "outcome": "ocupação da mesa atualizada"
  },
  "capability": {
    "capabilityId": "dineInOrderLifecycle",
    "title": "Ciclo de pedido (mesa)",
    "actor": "attendant",
    "priority": "now"
  },
  "statusFrontend": "done",
  "statusBackend": "toCreate"
} as const;

export default operationUpdateTableStatus;
