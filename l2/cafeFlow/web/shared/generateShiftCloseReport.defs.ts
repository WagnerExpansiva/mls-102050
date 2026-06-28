/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/generateShiftCloseReport.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "generateShiftCloseReport",
  "pageName": "Gerar relatório de fechamento de turno",
  "moduleName": "cafeFlow",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:generateShiftCloseReport"
  ],
  "operationIds": [
    "generateShiftCloseReport"
  ],
  "contractRef": {
    "defPath": "_102050_/l2/cafeFlow/web/contracts/generateShiftCloseReport.defs.ts",
    "tsPath": "_102050_/l2/cafeFlow/web/contracts/generateShiftCloseReport.ts"
  },
  "layoutRef": {
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/generateShiftCloseReport.defs.ts",
    "layoutId": "generateShiftCloseReport.layout"
  },
  "states": [
    {
      "stateKey": "ui.generateShiftCloseReport.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.generateShiftCloseReport.action.generateShiftCloseReport.status",
      "name": "generateShiftCloseReportState",
      "kind": "actionStatus",
      "actionRef": "generateShiftCloseReport",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.generateShiftCloseReport.input.generateShiftCloseReport.status",
      "name": "generateShiftCloseReportStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "generateShiftCloseReport",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.generateShiftCloseReport.input.generateShiftCloseReport.openedAt",
      "name": "generateShiftCloseReportOpenedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "generateShiftCloseReport",
        "direction": "input",
        "field": "openedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.generateShiftCloseReport.input.generateShiftCloseReport.closedAt",
      "name": "generateShiftCloseReportClosedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "generateShiftCloseReport",
        "direction": "input",
        "field": "closedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.generateShiftCloseReport.data.generateShiftCloseReport",
      "name": "generateShiftCloseReportData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "generateShiftCloseReport",
        "direction": "output"
      },
      "collection": true,
      "defaultValue": []
    }
  ],
  "actions": [
    {
      "actionId": "generateShiftCloseReport",
      "kind": "query",
      "commandRef": "generateShiftCloseReport",
      "routeKey": "cafeFlow.generateShiftCloseReport.generateShiftCloseReport",
      "purpose": "Gerar relatório de fechamento de turno",
      "methodName": "loadGenerateShiftCloseReport",
      "handlerName": "handleGenerateShiftCloseReportClick",
      "inputStateKeys": [
        "ui.generateShiftCloseReport.input.generateShiftCloseReport.status",
        "ui.generateShiftCloseReport.input.generateShiftCloseReport.openedAt",
        "ui.generateShiftCloseReport.input.generateShiftCloseReport.closedAt"
      ],
      "outputStateKeys": [
        "ui.generateShiftCloseReport.data.generateShiftCloseReport"
      ],
      "statusStateKey": "ui.generateShiftCloseReport.action.generateShiftCloseReport.status"
    },
    {
      "actionId": "set.generateShiftCloseReportStatus",
      "kind": "stateSetter",
      "stateKey": "ui.generateShiftCloseReport.input.generateShiftCloseReport.status",
      "methodName": "setGenerateShiftCloseReportStatus",
      "handlerName": "handleGenerateShiftCloseReportStatusChange"
    },
    {
      "actionId": "set.generateShiftCloseReportOpenedAt",
      "kind": "stateSetter",
      "stateKey": "ui.generateShiftCloseReport.input.generateShiftCloseReport.openedAt",
      "methodName": "setGenerateShiftCloseReportOpenedAt",
      "handlerName": "handleGenerateShiftCloseReportOpenedAtChange"
    },
    {
      "actionId": "set.generateShiftCloseReportClosedAt",
      "kind": "stateSetter",
      "stateKey": "ui.generateShiftCloseReport.input.generateShiftCloseReport.closedAt",
      "methodName": "setGenerateShiftCloseReportClosedAt",
      "handlerName": "handleGenerateShiftCloseReportClosedAtChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "generateShiftCloseReport",
      "stateKey": "ui.generateShiftCloseReport.data.generateShiftCloseReport"
    }
  ],
  "navigationRefs": [],
  "i18n": {
    "section.generateShiftCloseReport.title": "Gerar relatório de fechamento de turno",
    "organism.generateShiftCloseReport.title": "Gerar relatório de fechamento de turno",
    "intention.shiftCloseReport.filters.title": "Filtros do relatório de fechamento",
    "intention.shiftCloseReport.filters.empty": "Nenhum filtro definido",
    "intention.shiftCloseReport.summary.title": "Resumo do fechamento do turno",
    "intention.shiftCloseReport.summary.empty": "Nenhum relatório disponível",
    "field.status.label": "Status do turno",
    "field.openedAt.label": "Abertura do turno",
    "field.closedAt.label": "Fechamento do turno",
    "field.openingCashBalance.label": "Caixa inicial",
    "field.closingCashBalance.label": "Caixa final",
    "field.totalSales.label": "Total de vendas",
    "field.totalPayments.label": "Total de pagamentos",
    "field.closingNotes.label": "Observações de fechamento",
    "action.generateShiftCloseReport.label": "Gerar relatório"
  },
  "automation": {
    "statePrefix": "ui.generateShiftCloseReport",
    "stateKeys": [
      "ui.generateShiftCloseReport.status",
      "ui.generateShiftCloseReport.action.generateShiftCloseReport.status",
      "ui.generateShiftCloseReport.input.generateShiftCloseReport.status",
      "ui.generateShiftCloseReport.input.generateShiftCloseReport.openedAt",
      "ui.generateShiftCloseReport.input.generateShiftCloseReport.closedAt",
      "ui.generateShiftCloseReport.data.generateShiftCloseReport"
    ],
    "actionIds": [
      "generateShiftCloseReport",
      "set.generateShiftCloseReportStatus",
      "set.generateShiftCloseReportOpenedAt",
      "set.generateShiftCloseReportClosedAt"
    ]
  }
};

export const pipeline = [
  {
    "id": "generateShiftCloseReport__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102050_/l2/cafeFlow/web/shared/generateShiftCloseReport.ts",
    "defPath": "_102050_/l2/cafeFlow/web/shared/generateShiftCloseReport.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/contracts/generateShiftCloseReport.defs.ts",
      "_102050_/l2/cafeFlow/web/contracts/generateShiftCloseReport.ts",
      "_102050_/l2/cafeFlow/web/desktop/page11/generateShiftCloseReport.defs.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentMaterializeGen"
  }
] as const;
