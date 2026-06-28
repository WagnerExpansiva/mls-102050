/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/viewOperationalDashboard.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "viewOperationalDashboard",
  "pageName": "Ver dashboard operacional do dia",
  "moduleName": "cafeFlow",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:viewOperationalDashboard"
  ],
  "operationIds": [
    "viewOperationalDashboard"
  ],
  "contractRef": {
    "defPath": "_102050_/l2/cafeFlow/web/contracts/viewOperationalDashboard.defs.ts",
    "tsPath": "_102050_/l2/cafeFlow/web/contracts/viewOperationalDashboard.ts"
  },
  "layoutRef": {
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/viewOperationalDashboard.defs.ts",
    "layoutId": "viewOperationalDashboard.layout"
  },
  "states": [
    {
      "stateKey": "ui.viewOperationalDashboard.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.viewOperationalDashboard.action.viewOperationalDashboard.status",
      "name": "viewOperationalDashboardState",
      "kind": "actionStatus",
      "actionRef": "viewOperationalDashboard",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.dailyShiftId",
      "name": "viewOperationalDashboardDailyShiftId",
      "kind": "input",
      "contractRef": {
        "commandName": "viewOperationalDashboard",
        "direction": "input",
        "field": "dailyShiftId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.shiftDate",
      "name": "viewOperationalDashboardShiftDate",
      "kind": "input",
      "contractRef": {
        "commandName": "viewOperationalDashboard",
        "direction": "input",
        "field": "shiftDate"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.status",
      "name": "viewOperationalDashboardStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "viewOperationalDashboard",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.openedAt",
      "name": "viewOperationalDashboardOpenedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "viewOperationalDashboard",
        "direction": "input",
        "field": "openedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.closedAt",
      "name": "viewOperationalDashboardClosedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "viewOperationalDashboard",
        "direction": "input",
        "field": "closedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.createdAt",
      "name": "viewOperationalDashboardCreatedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "viewOperationalDashboard",
        "direction": "input",
        "field": "createdAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard",
      "name": "viewOperationalDashboardData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "viewOperationalDashboard",
        "direction": "output"
      },
      "collection": true,
      "defaultValue": []
    }
  ],
  "actions": [
    {
      "actionId": "viewOperationalDashboard",
      "kind": "query",
      "commandRef": "viewOperationalDashboard",
      "routeKey": "cafeFlow.viewOperationalDashboard.viewOperationalDashboard",
      "purpose": "Ver dashboard operacional do dia",
      "methodName": "loadViewOperationalDashboard",
      "handlerName": "handleViewOperationalDashboardClick",
      "inputStateKeys": [
        "ui.viewOperationalDashboard.input.viewOperationalDashboard.dailyShiftId",
        "ui.viewOperationalDashboard.input.viewOperationalDashboard.shiftDate",
        "ui.viewOperationalDashboard.input.viewOperationalDashboard.status",
        "ui.viewOperationalDashboard.input.viewOperationalDashboard.openedAt",
        "ui.viewOperationalDashboard.input.viewOperationalDashboard.closedAt",
        "ui.viewOperationalDashboard.input.viewOperationalDashboard.createdAt"
      ],
      "outputStateKeys": [
        "ui.viewOperationalDashboard.data.viewOperationalDashboard"
      ],
      "statusStateKey": "ui.viewOperationalDashboard.action.viewOperationalDashboard.status"
    },
    {
      "actionId": "set.viewOperationalDashboardDailyShiftId",
      "kind": "stateSetter",
      "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.dailyShiftId",
      "methodName": "setViewOperationalDashboardDailyShiftId",
      "handlerName": "handleViewOperationalDashboardDailyShiftIdChange"
    },
    {
      "actionId": "set.viewOperationalDashboardShiftDate",
      "kind": "stateSetter",
      "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.shiftDate",
      "methodName": "setViewOperationalDashboardShiftDate",
      "handlerName": "handleViewOperationalDashboardShiftDateChange"
    },
    {
      "actionId": "set.viewOperationalDashboardStatus",
      "kind": "stateSetter",
      "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.status",
      "methodName": "setViewOperationalDashboardStatus",
      "handlerName": "handleViewOperationalDashboardStatusChange"
    },
    {
      "actionId": "set.viewOperationalDashboardOpenedAt",
      "kind": "stateSetter",
      "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.openedAt",
      "methodName": "setViewOperationalDashboardOpenedAt",
      "handlerName": "handleViewOperationalDashboardOpenedAtChange"
    },
    {
      "actionId": "set.viewOperationalDashboardClosedAt",
      "kind": "stateSetter",
      "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.closedAt",
      "methodName": "setViewOperationalDashboardClosedAt",
      "handlerName": "handleViewOperationalDashboardClosedAtChange"
    },
    {
      "actionId": "set.viewOperationalDashboardCreatedAt",
      "kind": "stateSetter",
      "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.createdAt",
      "methodName": "setViewOperationalDashboardCreatedAt",
      "handlerName": "handleViewOperationalDashboardCreatedAtChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "viewOperationalDashboard",
      "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
    }
  ],
  "navigationRefs": [],
  "i18n": {
    "viewOperationalDashboard.section.dashboard.title": "Dashboard operacional do dia",
    "viewOperationalDashboard.organism.dashboard.title": "Visão operacional do dia",
    "viewOperationalDashboard.intention.query.title": "Indicadores do turno",
    "viewOperationalDashboard.field.dailyShiftId.label": "ID do turno",
    "viewOperationalDashboard.field.shiftDate.label": "Data do turno",
    "viewOperationalDashboard.field.status.label": "Status do turno",
    "viewOperationalDashboard.field.openedAt.label": "Abertura",
    "viewOperationalDashboard.field.closedAt.label": "Fechamento",
    "viewOperationalDashboard.field.createdAt.label": "Criado em",
    "viewOperationalDashboard.col.dailyShiftId.label": "ID do turno",
    "viewOperationalDashboard.col.shiftDate.label": "Data do turno",
    "viewOperationalDashboard.col.status.label": "Status do turno",
    "viewOperationalDashboard.col.openedAt.label": "Abertura",
    "viewOperationalDashboard.col.closedAt.label": "Fechamento",
    "viewOperationalDashboard.col.openingCashBalance.label": "Caixa inicial",
    "viewOperationalDashboard.col.closingCashBalance.label": "Caixa final",
    "viewOperationalDashboard.col.totalSales.label": "Vendas totais",
    "viewOperationalDashboard.filter.dailyShiftId.label": "ID do turno",
    "viewOperationalDashboard.filter.shiftDate.label": "Data do turno",
    "viewOperationalDashboard.filter.status.label": "Status do turno",
    "viewOperationalDashboard.filter.openedAt.label": "Abertura",
    "viewOperationalDashboard.filter.closedAt.label": "Fechamento",
    "viewOperationalDashboard.filter.createdAt.label": "Criado em",
    "viewOperationalDashboard.action.viewOperationalDashboard.label": "Atualizar dashboard"
  },
  "automation": {
    "statePrefix": "ui.viewOperationalDashboard",
    "stateKeys": [
      "ui.viewOperationalDashboard.status",
      "ui.viewOperationalDashboard.action.viewOperationalDashboard.status",
      "ui.viewOperationalDashboard.input.viewOperationalDashboard.dailyShiftId",
      "ui.viewOperationalDashboard.input.viewOperationalDashboard.shiftDate",
      "ui.viewOperationalDashboard.input.viewOperationalDashboard.status",
      "ui.viewOperationalDashboard.input.viewOperationalDashboard.openedAt",
      "ui.viewOperationalDashboard.input.viewOperationalDashboard.closedAt",
      "ui.viewOperationalDashboard.input.viewOperationalDashboard.createdAt",
      "ui.viewOperationalDashboard.data.viewOperationalDashboard"
    ],
    "actionIds": [
      "viewOperationalDashboard",
      "set.viewOperationalDashboardDailyShiftId",
      "set.viewOperationalDashboardShiftDate",
      "set.viewOperationalDashboardStatus",
      "set.viewOperationalDashboardOpenedAt",
      "set.viewOperationalDashboardClosedAt",
      "set.viewOperationalDashboardCreatedAt"
    ]
  }
};

export const pipeline = [
  {
    "id": "viewOperationalDashboard__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102050_/l2/cafeFlow/web/shared/viewOperationalDashboard.ts",
    "defPath": "_102050_/l2/cafeFlow/web/shared/viewOperationalDashboard.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/contracts/viewOperationalDashboard.defs.ts",
      "_102050_/l2/cafeFlow/web/contracts/viewOperationalDashboard.ts",
      "_102050_/l2/cafeFlow/web/desktop/page11/viewOperationalDashboard.defs.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentMaterializeGen"
  }
] as const;
