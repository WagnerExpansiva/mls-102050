/// <mls fileReference="_102050_/l4/operations/recordOpeningCashMovement.defs.ts" enhancement="_blank"/>

export const operationRecordOpeningCashMovement = {
  "operationId": "recordOpeningCashMovement",
  "title": "Registrar movimento de caixa de abertura",
  "actor": "cashier",
  "entity": "CashMovement",
  "kind": "create",
  "reads": [
    "DailyShift"
  ],
  "writes": [
    "CashMovement",
    "CashMovement.dailyShiftId",
    "CashMovement.movementType",
    "CashMovement.amount",
    "CashMovement.reason",
    "CashMovement.createdAt",
    "CashMovement.updatedAt"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "cashier",
    "goal": "registrar saldo inicial do caixa",
    "steps": [
      "informar valor de abertura",
      "confirmar registro",
      "sistema grava movimento de abertura"
    ],
    "outcome": "movimento de caixa de abertura registrado"
  },
  "capability": {
    "capabilityId": "openDailyShift",
    "title": "Abrir turno diário",
    "actor": "cashier",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationRecordOpeningCashMovement;
