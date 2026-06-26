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
    "layoutId": "viewOperationalDashboard_default"
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
    "page.viewOperationalDashboard.title": "Dashboard Operacional do Dia",
    "organism.viewOperationalDashboard.title": "Visão Operacional do Turno",
    "filter.shiftDate.label": "Data do Turno",
    "filter.status.label": "Status do Turno",
    "field.shiftDate.label": "Data",
    "field.status.label": "Status",
    "field.openedAt.label": "Aberto em",
    "field.closedAt.label": "Fechado em",
    "field.openingCashBalance.label": "Saldo Inicial",
    "field.closingCashBalance.label": "Saldo Final",
    "field.totalSales.label": "Total de Vendas",
    "field.totalPayments.label": "Total de Pagamentos",
    "column.orderId.label": "Pedido",
    "column.orderType.label": "Tipo",
    "column.orderStatus.label": "Status",
    "column.totalAmount.label": "Valor Total",
    "column.customerName.label": "Cliente",
    "column.orderCreatedAt.label": "Criado em",
    "column.paymentId.label": "Pagamento",
    "column.paymentMethod.label": "Método",
    "column.paymentAmount.label": "Valor",
    "column.paymentStatus.label": "Status",
    "column.paymentCreatedAt.label": "Criado em",
    "column.cashMovementId.label": "Movimento",
    "column.movementType.label": "Tipo",
    "column.movementAmount.label": "Valor",
    "column.movementReason.label": "Motivo",
    "column.movementCreatedAt.label": "Criado em",
    "empty.orders": "Nenhum pedido encontrado para este turno.",
    "empty.payments": "Nenhum pagamento encontrado para este turno.",
    "empty.cashMovements": "Nenhum movimento de caixa encontrado para este turno.",
    "action.refreshDashboard.label": "Atualizar Dashboard"
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
      "/_102020_/l2/agentMaterializeSolution/skills/genPageShared.ts"
    ],
    "rulesApplied": [
      "paymentTimingByOrderType",
      "aiOutputLanguageSelection"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
