/// <mls fileReference="_102050_/l4/workflows/closeDailyShift.defs.ts" enhancement="_blank"/>

export const workflowCloseDailyShift = {
  "workflowId": "closeDailyShift",
  "title": "Fechar turno diário (fechamento de caixa)",
  "executionMode": "sequential",
  "trigger": "cashier inicia fechamento do turno",
  "actors": [
    "cashier"
  ],
  "states": [
    "open",
    "closed"
  ],
  "transitions": [
    {
      "from": "open",
      "to": "closed",
      "on": "initiateClosing",
      "by": "cashier"
    }
  ],
  "operationIds": [
    "updateDailyShiftStatus",
    "recordClosingCashMovement"
  ],
  "entities": [
    "DailyShift",
    "CashMovement"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "cashier",
    "goal": "encerrar o turno com conferência de caixa",
    "steps": [
      "iniciar fechamento do turno",
      "informar valores de fechamento",
      "sistema registra movimento e encerra o turno"
    ],
    "outcome": "turno fechado e caixa conciliado"
  },
  "capabilities": [
    {
      "capabilityId": "closeDailyShift",
      "title": "Fechar turno diário (fechamento de caixa)",
      "actor": "cashier",
      "priority": "now"
    }
  ],
  "statusFrontend": "toCreate",
  "statusBackend": "done"
} as const;

export default workflowCloseDailyShift;
