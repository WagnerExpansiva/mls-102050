/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/closeDailyShift.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "closeDailyShift",
  "pageName": "Fechar turno diário (fechamento de caixa)",
  "moduleName": "cafeFlow",
  "sourceKind": "workflow",
  "ownerIds": [
    "workflow:closeDailyShift"
  ],
  "operationIds": [
    "updateDailyShiftStatus",
    "recordClosingCashMovement"
  ],
  "contractRef": {
    "defPath": "_102050_/l2/cafeFlow/web/contracts/closeDailyShift.defs.ts",
    "tsPath": "_102050_/l2/cafeFlow/web/contracts/closeDailyShift.ts"
  },
  "layoutRef": {
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/closeDailyShift.defs.ts",
    "layoutId": "closeDailyShift.layout"
  },
  "states": [
    {
      "stateKey": "ui.closeDailyShift.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.closeDailyShift.action.updateDailyShiftStatus.status",
      "name": "updateDailyShiftStatusState",
      "kind": "actionStatus",
      "actionRef": "updateDailyShiftStatus",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.dailyShiftId",
      "name": "updateDailyShiftStatusDailyShiftId",
      "kind": "input",
      "contractRef": {
        "commandName": "updateDailyShiftStatus",
        "direction": "input",
        "field": "dailyShiftId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.shiftDate",
      "name": "updateDailyShiftStatusShiftDate",
      "kind": "input",
      "contractRef": {
        "commandName": "updateDailyShiftStatus",
        "direction": "input",
        "field": "shiftDate"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.status",
      "name": "updateDailyShiftStatusStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "updateDailyShiftStatus",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.openedAt",
      "name": "updateDailyShiftStatusOpenedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "updateDailyShiftStatus",
        "direction": "input",
        "field": "openedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.closedAt",
      "name": "updateDailyShiftStatusClosedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "updateDailyShiftStatus",
        "direction": "input",
        "field": "closedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.openingCashBalance",
      "name": "updateDailyShiftStatusOpeningCashBalance",
      "kind": "input",
      "contractRef": {
        "commandName": "updateDailyShiftStatus",
        "direction": "input",
        "field": "openingCashBalance"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.closingCashBalance",
      "name": "updateDailyShiftStatusClosingCashBalance",
      "kind": "input",
      "contractRef": {
        "commandName": "updateDailyShiftStatus",
        "direction": "input",
        "field": "closingCashBalance"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.totalSales",
      "name": "updateDailyShiftStatusTotalSales",
      "kind": "input",
      "contractRef": {
        "commandName": "updateDailyShiftStatus",
        "direction": "input",
        "field": "totalSales"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.totalPayments",
      "name": "updateDailyShiftStatusTotalPayments",
      "kind": "input",
      "contractRef": {
        "commandName": "updateDailyShiftStatus",
        "direction": "input",
        "field": "totalPayments"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.closingNotes",
      "name": "updateDailyShiftStatusClosingNotes",
      "kind": "input",
      "contractRef": {
        "commandName": "updateDailyShiftStatus",
        "direction": "input",
        "field": "closingNotes"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.closeDailyShift.action.recordClosingCashMovement.status",
      "name": "recordClosingCashMovementState",
      "kind": "actionStatus",
      "actionRef": "recordClosingCashMovement",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.closeDailyShift.input.recordClosingCashMovement.shiftDate",
      "name": "recordClosingCashMovementShiftDate",
      "kind": "input",
      "contractRef": {
        "commandName": "recordClosingCashMovement",
        "direction": "input",
        "field": "shiftDate"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.closeDailyShift.input.recordClosingCashMovement.status",
      "name": "recordClosingCashMovementStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "recordClosingCashMovement",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.closeDailyShift.input.recordClosingCashMovement.openedAt",
      "name": "recordClosingCashMovementOpenedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "recordClosingCashMovement",
        "direction": "input",
        "field": "openedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.closeDailyShift.input.recordClosingCashMovement.closedAt",
      "name": "recordClosingCashMovementClosedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "recordClosingCashMovement",
        "direction": "input",
        "field": "closedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.closeDailyShift.input.recordClosingCashMovement.openingCashBalance",
      "name": "recordClosingCashMovementOpeningCashBalance",
      "kind": "input",
      "contractRef": {
        "commandName": "recordClosingCashMovement",
        "direction": "input",
        "field": "openingCashBalance"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.closeDailyShift.input.recordClosingCashMovement.closingCashBalance",
      "name": "recordClosingCashMovementClosingCashBalance",
      "kind": "input",
      "contractRef": {
        "commandName": "recordClosingCashMovement",
        "direction": "input",
        "field": "closingCashBalance"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.closeDailyShift.input.recordClosingCashMovement.totalSales",
      "name": "recordClosingCashMovementTotalSales",
      "kind": "input",
      "contractRef": {
        "commandName": "recordClosingCashMovement",
        "direction": "input",
        "field": "totalSales"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.closeDailyShift.input.recordClosingCashMovement.totalPayments",
      "name": "recordClosingCashMovementTotalPayments",
      "kind": "input",
      "contractRef": {
        "commandName": "recordClosingCashMovement",
        "direction": "input",
        "field": "totalPayments"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.closeDailyShift.input.recordClosingCashMovement.closingNotes",
      "name": "recordClosingCashMovementClosingNotes",
      "kind": "input",
      "contractRef": {
        "commandName": "recordClosingCashMovement",
        "direction": "input",
        "field": "closingNotes"
      },
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "updateDailyShiftStatus",
      "kind": "command",
      "commandRef": "updateDailyShiftStatus",
      "routeKey": "cafeFlow.closeDailyShift.updateDailyShiftStatus",
      "purpose": "Update Daily Shift Status",
      "methodName": "updateDailyShiftStatus",
      "handlerName": "handleUpdateDailyShiftStatusClick",
      "inputStateKeys": [
        "ui.closeDailyShift.input.updateDailyShiftStatus.dailyShiftId",
        "ui.closeDailyShift.input.updateDailyShiftStatus.shiftDate",
        "ui.closeDailyShift.input.updateDailyShiftStatus.status",
        "ui.closeDailyShift.input.updateDailyShiftStatus.openedAt",
        "ui.closeDailyShift.input.updateDailyShiftStatus.closedAt",
        "ui.closeDailyShift.input.updateDailyShiftStatus.openingCashBalance",
        "ui.closeDailyShift.input.updateDailyShiftStatus.closingCashBalance",
        "ui.closeDailyShift.input.updateDailyShiftStatus.totalSales",
        "ui.closeDailyShift.input.updateDailyShiftStatus.totalPayments",
        "ui.closeDailyShift.input.updateDailyShiftStatus.closingNotes"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.closeDailyShift.action.updateDailyShiftStatus.status"
    },
    {
      "actionId": "recordClosingCashMovement",
      "kind": "command",
      "commandRef": "recordClosingCashMovement",
      "routeKey": "cafeFlow.closeDailyShift.recordClosingCashMovement",
      "purpose": "Record Closing Cash Movement",
      "methodName": "recordClosingCashMovement",
      "handlerName": "handleRecordClosingCashMovementClick",
      "inputStateKeys": [
        "ui.closeDailyShift.input.recordClosingCashMovement.shiftDate",
        "ui.closeDailyShift.input.recordClosingCashMovement.status",
        "ui.closeDailyShift.input.recordClosingCashMovement.openedAt",
        "ui.closeDailyShift.input.recordClosingCashMovement.closedAt",
        "ui.closeDailyShift.input.recordClosingCashMovement.openingCashBalance",
        "ui.closeDailyShift.input.recordClosingCashMovement.closingCashBalance",
        "ui.closeDailyShift.input.recordClosingCashMovement.totalSales",
        "ui.closeDailyShift.input.recordClosingCashMovement.totalPayments",
        "ui.closeDailyShift.input.recordClosingCashMovement.closingNotes"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.closeDailyShift.action.recordClosingCashMovement.status"
    },
    {
      "actionId": "set.updateDailyShiftStatusDailyShiftId",
      "kind": "stateSetter",
      "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.dailyShiftId",
      "methodName": "setUpdateDailyShiftStatusDailyShiftId",
      "handlerName": "handleUpdateDailyShiftStatusDailyShiftIdChange"
    },
    {
      "actionId": "set.updateDailyShiftStatusShiftDate",
      "kind": "stateSetter",
      "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.shiftDate",
      "methodName": "setUpdateDailyShiftStatusShiftDate",
      "handlerName": "handleUpdateDailyShiftStatusShiftDateChange"
    },
    {
      "actionId": "set.updateDailyShiftStatusStatus",
      "kind": "stateSetter",
      "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.status",
      "methodName": "setUpdateDailyShiftStatusStatus",
      "handlerName": "handleUpdateDailyShiftStatusStatusChange"
    },
    {
      "actionId": "set.updateDailyShiftStatusOpenedAt",
      "kind": "stateSetter",
      "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.openedAt",
      "methodName": "setUpdateDailyShiftStatusOpenedAt",
      "handlerName": "handleUpdateDailyShiftStatusOpenedAtChange"
    },
    {
      "actionId": "set.updateDailyShiftStatusClosedAt",
      "kind": "stateSetter",
      "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.closedAt",
      "methodName": "setUpdateDailyShiftStatusClosedAt",
      "handlerName": "handleUpdateDailyShiftStatusClosedAtChange"
    },
    {
      "actionId": "set.updateDailyShiftStatusOpeningCashBalance",
      "kind": "stateSetter",
      "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.openingCashBalance",
      "methodName": "setUpdateDailyShiftStatusOpeningCashBalance",
      "handlerName": "handleUpdateDailyShiftStatusOpeningCashBalanceChange"
    },
    {
      "actionId": "set.updateDailyShiftStatusClosingCashBalance",
      "kind": "stateSetter",
      "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.closingCashBalance",
      "methodName": "setUpdateDailyShiftStatusClosingCashBalance",
      "handlerName": "handleUpdateDailyShiftStatusClosingCashBalanceChange"
    },
    {
      "actionId": "set.updateDailyShiftStatusTotalSales",
      "kind": "stateSetter",
      "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.totalSales",
      "methodName": "setUpdateDailyShiftStatusTotalSales",
      "handlerName": "handleUpdateDailyShiftStatusTotalSalesChange"
    },
    {
      "actionId": "set.updateDailyShiftStatusTotalPayments",
      "kind": "stateSetter",
      "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.totalPayments",
      "methodName": "setUpdateDailyShiftStatusTotalPayments",
      "handlerName": "handleUpdateDailyShiftStatusTotalPaymentsChange"
    },
    {
      "actionId": "set.updateDailyShiftStatusClosingNotes",
      "kind": "stateSetter",
      "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.closingNotes",
      "methodName": "setUpdateDailyShiftStatusClosingNotes",
      "handlerName": "handleUpdateDailyShiftStatusClosingNotesChange"
    },
    {
      "actionId": "set.recordClosingCashMovementShiftDate",
      "kind": "stateSetter",
      "stateKey": "ui.closeDailyShift.input.recordClosingCashMovement.shiftDate",
      "methodName": "setRecordClosingCashMovementShiftDate",
      "handlerName": "handleRecordClosingCashMovementShiftDateChange"
    },
    {
      "actionId": "set.recordClosingCashMovementStatus",
      "kind": "stateSetter",
      "stateKey": "ui.closeDailyShift.input.recordClosingCashMovement.status",
      "methodName": "setRecordClosingCashMovementStatus",
      "handlerName": "handleRecordClosingCashMovementStatusChange"
    },
    {
      "actionId": "set.recordClosingCashMovementOpenedAt",
      "kind": "stateSetter",
      "stateKey": "ui.closeDailyShift.input.recordClosingCashMovement.openedAt",
      "methodName": "setRecordClosingCashMovementOpenedAt",
      "handlerName": "handleRecordClosingCashMovementOpenedAtChange"
    },
    {
      "actionId": "set.recordClosingCashMovementClosedAt",
      "kind": "stateSetter",
      "stateKey": "ui.closeDailyShift.input.recordClosingCashMovement.closedAt",
      "methodName": "setRecordClosingCashMovementClosedAt",
      "handlerName": "handleRecordClosingCashMovementClosedAtChange"
    },
    {
      "actionId": "set.recordClosingCashMovementOpeningCashBalance",
      "kind": "stateSetter",
      "stateKey": "ui.closeDailyShift.input.recordClosingCashMovement.openingCashBalance",
      "methodName": "setRecordClosingCashMovementOpeningCashBalance",
      "handlerName": "handleRecordClosingCashMovementOpeningCashBalanceChange"
    },
    {
      "actionId": "set.recordClosingCashMovementClosingCashBalance",
      "kind": "stateSetter",
      "stateKey": "ui.closeDailyShift.input.recordClosingCashMovement.closingCashBalance",
      "methodName": "setRecordClosingCashMovementClosingCashBalance",
      "handlerName": "handleRecordClosingCashMovementClosingCashBalanceChange"
    },
    {
      "actionId": "set.recordClosingCashMovementTotalSales",
      "kind": "stateSetter",
      "stateKey": "ui.closeDailyShift.input.recordClosingCashMovement.totalSales",
      "methodName": "setRecordClosingCashMovementTotalSales",
      "handlerName": "handleRecordClosingCashMovementTotalSalesChange"
    },
    {
      "actionId": "set.recordClosingCashMovementTotalPayments",
      "kind": "stateSetter",
      "stateKey": "ui.closeDailyShift.input.recordClosingCashMovement.totalPayments",
      "methodName": "setRecordClosingCashMovementTotalPayments",
      "handlerName": "handleRecordClosingCashMovementTotalPaymentsChange"
    },
    {
      "actionId": "set.recordClosingCashMovementClosingNotes",
      "kind": "stateSetter",
      "stateKey": "ui.closeDailyShift.input.recordClosingCashMovement.closingNotes",
      "methodName": "setRecordClosingCashMovementClosingNotes",
      "handlerName": "handleRecordClosingCashMovementClosingNotesChange"
    }
  ],
  "initialLoads": [],
  "navigationRefs": [],
  "i18n": {
    "closeDailyShift.section.main.title": "Fechar turno diário (fechamento de caixa)",
    "closeDailyShift.organism.updateDailyShiftStatus.title": "Atualizar status do turno",
    "closeDailyShift.organism.recordClosingCashMovement.title": "Registrar movimento de fechamento",
    "closeDailyShift.intent.updateDailyShiftStatus.title": "Atualizar status do turno",
    "closeDailyShift.intent.recordClosingCashMovement.title": "Registrar movimento de fechamento",
    "closeDailyShift.field.dailyShiftId.label": "ID do turno",
    "closeDailyShift.field.shiftDate.label": "Data do turno",
    "closeDailyShift.field.status.label": "Status do turno",
    "closeDailyShift.field.openedAt.label": "Abertura",
    "closeDailyShift.field.closedAt.label": "Fechamento",
    "closeDailyShift.field.openingCashBalance.label": "Saldo inicial em caixa",
    "closeDailyShift.field.closingCashBalance.label": "Saldo final em caixa",
    "closeDailyShift.field.totalSales.label": "Total de vendas",
    "closeDailyShift.field.totalPayments.label": "Total de pagamentos",
    "closeDailyShift.field.closingNotes.label": "Observações de fechamento",
    "closeDailyShift.action.updateDailyShiftStatus.label": "Atualizar status do turno",
    "closeDailyShift.action.recordClosingCashMovement.label": "Registrar movimento de fechamento"
  },
  "automation": {
    "statePrefix": "ui.closeDailyShift",
    "stateKeys": [
      "ui.closeDailyShift.status",
      "ui.closeDailyShift.action.updateDailyShiftStatus.status",
      "ui.closeDailyShift.input.updateDailyShiftStatus.dailyShiftId",
      "ui.closeDailyShift.input.updateDailyShiftStatus.shiftDate",
      "ui.closeDailyShift.input.updateDailyShiftStatus.status",
      "ui.closeDailyShift.input.updateDailyShiftStatus.openedAt",
      "ui.closeDailyShift.input.updateDailyShiftStatus.closedAt",
      "ui.closeDailyShift.input.updateDailyShiftStatus.openingCashBalance",
      "ui.closeDailyShift.input.updateDailyShiftStatus.closingCashBalance",
      "ui.closeDailyShift.input.updateDailyShiftStatus.totalSales",
      "ui.closeDailyShift.input.updateDailyShiftStatus.totalPayments",
      "ui.closeDailyShift.input.updateDailyShiftStatus.closingNotes",
      "ui.closeDailyShift.action.recordClosingCashMovement.status",
      "ui.closeDailyShift.input.recordClosingCashMovement.shiftDate",
      "ui.closeDailyShift.input.recordClosingCashMovement.status",
      "ui.closeDailyShift.input.recordClosingCashMovement.openedAt",
      "ui.closeDailyShift.input.recordClosingCashMovement.closedAt",
      "ui.closeDailyShift.input.recordClosingCashMovement.openingCashBalance",
      "ui.closeDailyShift.input.recordClosingCashMovement.closingCashBalance",
      "ui.closeDailyShift.input.recordClosingCashMovement.totalSales",
      "ui.closeDailyShift.input.recordClosingCashMovement.totalPayments",
      "ui.closeDailyShift.input.recordClosingCashMovement.closingNotes"
    ],
    "actionIds": [
      "updateDailyShiftStatus",
      "recordClosingCashMovement",
      "set.updateDailyShiftStatusDailyShiftId",
      "set.updateDailyShiftStatusShiftDate",
      "set.updateDailyShiftStatusStatus",
      "set.updateDailyShiftStatusOpenedAt",
      "set.updateDailyShiftStatusClosedAt",
      "set.updateDailyShiftStatusOpeningCashBalance",
      "set.updateDailyShiftStatusClosingCashBalance",
      "set.updateDailyShiftStatusTotalSales",
      "set.updateDailyShiftStatusTotalPayments",
      "set.updateDailyShiftStatusClosingNotes",
      "set.recordClosingCashMovementShiftDate",
      "set.recordClosingCashMovementStatus",
      "set.recordClosingCashMovementOpenedAt",
      "set.recordClosingCashMovementClosedAt",
      "set.recordClosingCashMovementOpeningCashBalance",
      "set.recordClosingCashMovementClosingCashBalance",
      "set.recordClosingCashMovementTotalSales",
      "set.recordClosingCashMovementTotalPayments",
      "set.recordClosingCashMovementClosingNotes"
    ]
  }
};

export const pipeline = [
  {
    "id": "closeDailyShift__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102050_/l2/cafeFlow/web/shared/closeDailyShift.ts",
    "defPath": "_102050_/l2/cafeFlow/web/shared/closeDailyShift.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/contracts/closeDailyShift.defs.ts",
      "_102050_/l2/cafeFlow/web/contracts/closeDailyShift.ts",
      "_102050_/l2/cafeFlow/web/desktop/page11/closeDailyShift.defs.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentMaterializeGen"
  }
] as const;
