/// <mls fileReference="_102050_/l4/operations/createDailyShift.defs.ts" enhancement="_blank"/>

export const operationCreateDailyShift = {
  "operationId": "createDailyShift",
  "title": "Criar turno diário",
  "actor": "cashier",
  "entity": "DailyShift",
  "kind": "create",
  "reads": [
    "DailyShift"
  ],
  "writes": [
    "DailyShift",
    "DailyShift.dailyShiftId",
    "DailyShift.shiftDate",
    "DailyShift.status",
    "DailyShift.openedAt",
    "DailyShift.openingCashBalance",
    "DailyShift.createdAt",
    "DailyShift.updatedAt"
  ],
  "rulesApplied": [
    "paymentTimingByOrderType",
    "aiOutputLanguageSelection"
  ],
  "story": {
    "actor": "cashier",
    "goal": "registrar abertura do turno",
    "steps": [
      "iniciar abertura de turno",
      "confirmar dados do turno",
      "sistema cria o turno"
    ],
    "outcome": "turno diário criado"
  },
  "capability": {
    "capabilityId": "openDailyShift",
    "title": "Abrir turno diário",
    "actor": "cashier",
    "priority": "now"
  },
  "statusFrontend": "done",
  "statusBackend": "inProgress"
} as const;

export default operationCreateDailyShift;
