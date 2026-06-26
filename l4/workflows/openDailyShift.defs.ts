/// <mls fileReference="_102050_/l4/workflows/openDailyShift.defs.ts" enhancement="_blank"/>

export const workflowOpenDailyShift = {
  "workflowId": "openDailyShift",
  "title": "Abrir turno diário",
  "executionMode": "sequential",
  "trigger": "cashier inicia abertura de turno com saldo inicial",
  "actors": [
    "cashier"
  ],
  "states": [
    "started",
    "open"
  ],
  "transitions": [
    {
      "from": "started",
      "to": "open",
      "on": "createDailyShift",
      "by": "cashier"
    },
    {
      "from": "open",
      "to": "open",
      "on": "recordOpeningCashMovement",
      "by": "cashier"
    }
  ],
  "operationIds": [
    "createDailyShift",
    "recordOpeningCashMovement"
  ],
  "entities": [
    "DailyShift",
    "CashMovement"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "cashier",
    "goal": "abrir o turno do dia com saldo inicial",
    "steps": [
      "informar abertura de turno",
      "registrar valor de abertura do caixa",
      "sistema cria o turno e registra o movimento de caixa"
    ],
    "outcome": "turno diário aberto e caixa inicial registrado"
  },
  "capabilities": [
    {
      "capabilityId": "openDailyShift",
      "title": "Abrir turno diário",
      "actor": "cashier",
      "priority": "now"
    }
  ],
  "statusFrontend": "done",
  "statusBackend": "toCreate"
} as const;

export default workflowOpenDailyShift;
