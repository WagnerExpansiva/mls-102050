/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/openDailyShift.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "openDailyShift",
  "pageName": "Abrir turno diário",
  "moduleName": "cafeFlow",
  "sourceKind": "workflow",
  "ownerIds": [
    "workflow:openDailyShift",
    "operation:createDailyShift",
    "operation:recordOpeningCashMovement"
  ],
  "operationIds": [
    "createDailyShift",
    "recordOpeningCashMovement"
  ],
  "contractRef": {
    "defPath": "_102050_/l2/cafeFlow/web/contracts/openDailyShift.defs.ts",
    "tsPath": "_102050_/l2/cafeFlow/web/contracts/openDailyShift.ts"
  },
  "layoutRef": {
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/openDailyShift.defs.ts",
    "layoutId": "openDailyShift.default"
  },
  "states": [
    {
      "stateKey": "ui.openDailyShift.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.openDailyShift.action.createDailyShift.status",
      "name": "createDailyShiftState",
      "kind": "actionStatus",
      "actionRef": "createDailyShift",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.openDailyShift.input.createDailyShift.shiftDate",
      "name": "createDailyShiftShiftDate",
      "kind": "input",
      "contractRef": {
        "commandName": "createDailyShift",
        "direction": "input",
        "field": "shiftDate"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.openDailyShift.input.createDailyShift.status",
      "name": "createDailyShiftStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "createDailyShift",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.openDailyShift.input.createDailyShift.openedAt",
      "name": "createDailyShiftOpenedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "createDailyShift",
        "direction": "input",
        "field": "openedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.openDailyShift.input.createDailyShift.openingCashBalance",
      "name": "createDailyShiftOpeningCashBalance",
      "kind": "input",
      "contractRef": {
        "commandName": "createDailyShift",
        "direction": "input",
        "field": "openingCashBalance"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.openDailyShift.action.recordOpeningCashMovement.status",
      "name": "recordOpeningCashMovementState",
      "kind": "actionStatus",
      "actionRef": "recordOpeningCashMovement",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.openDailyShift.input.recordOpeningCashMovement.movementType",
      "name": "recordOpeningCashMovementMovementType",
      "kind": "input",
      "contractRef": {
        "commandName": "recordOpeningCashMovement",
        "direction": "input",
        "field": "movementType"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.openDailyShift.input.recordOpeningCashMovement.amount",
      "name": "recordOpeningCashMovementAmount",
      "kind": "input",
      "contractRef": {
        "commandName": "recordOpeningCashMovement",
        "direction": "input",
        "field": "amount"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.openDailyShift.input.recordOpeningCashMovement.reason",
      "name": "recordOpeningCashMovementReason",
      "kind": "input",
      "contractRef": {
        "commandName": "recordOpeningCashMovement",
        "direction": "input",
        "field": "reason"
      },
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "createDailyShift",
      "kind": "command",
      "commandRef": "createDailyShift",
      "routeKey": "cafeFlow.openDailyShift.createDailyShift",
      "purpose": "Criar turno diário",
      "methodName": "createDailyShift",
      "handlerName": "handleCreateDailyShiftClick",
      "inputStateKeys": [
        "ui.openDailyShift.input.createDailyShift.shiftDate",
        "ui.openDailyShift.input.createDailyShift.status",
        "ui.openDailyShift.input.createDailyShift.openedAt",
        "ui.openDailyShift.input.createDailyShift.openingCashBalance"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.openDailyShift.action.createDailyShift.status"
    },
    {
      "actionId": "recordOpeningCashMovement",
      "kind": "command",
      "commandRef": "recordOpeningCashMovement",
      "routeKey": "cafeFlow.openDailyShift.recordOpeningCashMovement",
      "purpose": "Registrar movimento de caixa de abertura",
      "methodName": "recordOpeningCashMovement",
      "handlerName": "handleRecordOpeningCashMovementClick",
      "inputStateKeys": [
        "ui.openDailyShift.input.recordOpeningCashMovement.movementType",
        "ui.openDailyShift.input.recordOpeningCashMovement.amount",
        "ui.openDailyShift.input.recordOpeningCashMovement.reason"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.openDailyShift.action.recordOpeningCashMovement.status"
    },
    {
      "actionId": "set.createDailyShiftShiftDate",
      "kind": "stateSetter",
      "stateKey": "ui.openDailyShift.input.createDailyShift.shiftDate",
      "methodName": "setCreateDailyShiftShiftDate",
      "handlerName": "handleCreateDailyShiftShiftDateChange"
    },
    {
      "actionId": "set.createDailyShiftStatus",
      "kind": "stateSetter",
      "stateKey": "ui.openDailyShift.input.createDailyShift.status",
      "methodName": "setCreateDailyShiftStatus",
      "handlerName": "handleCreateDailyShiftStatusChange"
    },
    {
      "actionId": "set.createDailyShiftOpenedAt",
      "kind": "stateSetter",
      "stateKey": "ui.openDailyShift.input.createDailyShift.openedAt",
      "methodName": "setCreateDailyShiftOpenedAt",
      "handlerName": "handleCreateDailyShiftOpenedAtChange"
    },
    {
      "actionId": "set.createDailyShiftOpeningCashBalance",
      "kind": "stateSetter",
      "stateKey": "ui.openDailyShift.input.createDailyShift.openingCashBalance",
      "methodName": "setCreateDailyShiftOpeningCashBalance",
      "handlerName": "handleCreateDailyShiftOpeningCashBalanceChange"
    },
    {
      "actionId": "set.recordOpeningCashMovementMovementType",
      "kind": "stateSetter",
      "stateKey": "ui.openDailyShift.input.recordOpeningCashMovement.movementType",
      "methodName": "setRecordOpeningCashMovementMovementType",
      "handlerName": "handleRecordOpeningCashMovementMovementTypeChange"
    },
    {
      "actionId": "set.recordOpeningCashMovementAmount",
      "kind": "stateSetter",
      "stateKey": "ui.openDailyShift.input.recordOpeningCashMovement.amount",
      "methodName": "setRecordOpeningCashMovementAmount",
      "handlerName": "handleRecordOpeningCashMovementAmountChange"
    },
    {
      "actionId": "set.recordOpeningCashMovementReason",
      "kind": "stateSetter",
      "stateKey": "ui.openDailyShift.input.recordOpeningCashMovement.reason",
      "methodName": "setRecordOpeningCashMovementReason",
      "handlerName": "handleRecordOpeningCashMovementReasonChange"
    }
  ],
  "initialLoads": [],
  "navigationRefs": [],
  "i18n": {
    "section.openDailyShift.title": "Abrir turno diário",
    "organism.createDailyShift.title": "Criar turno diário",
    "organism.recordOpeningCashMovement.title": "Registrar movimento de caixa de abertura",
    "molecule.createDailyShift.timeline.title": "Progresso do turno",
    "molecule.createDailyShift.form.title": "Dados do turno",
    "molecule.createDailyShift.actionBar.title": "Ações do turno",
    "molecule.recordOpening.summary.title": "Turno criado",
    "molecule.recordOpening.summary.empty": "Nenhum turno criado ainda. Crie o turno acima para continuar.",
    "molecule.recordOpening.form.title": "Movimento de abertura",
    "molecule.recordOpening.actionBar.title": "Ações do movimento",
    "field.shiftDate.label": "Data do turno",
    "field.status.label": "Status",
    "field.openedAt.label": "Aberto em",
    "field.openingCashBalance.label": "Saldo inicial",
    "field.dailyShiftId.label": "ID do turno",
    "field.movementType.label": "Tipo de movimento",
    "field.amount.label": "Valor",
    "field.reason.label": "Motivo",
    "action.createDailyShift.label": "Criar turno",
    "action.recordOpeningCashMovement.label": "Registrar abertura de caixa"
  },
  "automation": {
    "statePrefix": "ui.openDailyShift",
    "stateKeys": [
      "ui.openDailyShift.status",
      "ui.openDailyShift.action.createDailyShift.status",
      "ui.openDailyShift.input.createDailyShift.shiftDate",
      "ui.openDailyShift.input.createDailyShift.status",
      "ui.openDailyShift.input.createDailyShift.openedAt",
      "ui.openDailyShift.input.createDailyShift.openingCashBalance",
      "ui.openDailyShift.action.recordOpeningCashMovement.status",
      "ui.openDailyShift.input.recordOpeningCashMovement.movementType",
      "ui.openDailyShift.input.recordOpeningCashMovement.amount",
      "ui.openDailyShift.input.recordOpeningCashMovement.reason"
    ],
    "actionIds": [
      "createDailyShift",
      "recordOpeningCashMovement",
      "set.createDailyShiftShiftDate",
      "set.createDailyShiftStatus",
      "set.createDailyShiftOpenedAt",
      "set.createDailyShiftOpeningCashBalance",
      "set.recordOpeningCashMovementMovementType",
      "set.recordOpeningCashMovementAmount",
      "set.recordOpeningCashMovementReason"
    ]
  }
};

export const pipeline = [
  {
    "id": "openDailyShift__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102050_/l2/cafeFlow/web/shared/openDailyShift.ts",
    "defPath": "_102050_/l2/cafeFlow/web/shared/openDailyShift.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/contracts/openDailyShift.defs.ts",
      "_102050_/l2/cafeFlow/web/contracts/openDailyShift.ts",
      "_102050_/l2/cafeFlow/web/desktop/page11/openDailyShift.defs.ts"
    ],
    "dependsOn": [],
    "skills": [
      "/_102020_/l2/agentMaterializeSolution/skills/genPageShared.ts"
    ],
    "rulesApplied": [
      "paymentTimingByOrderType",
      "aiOutputLanguageSelection"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
