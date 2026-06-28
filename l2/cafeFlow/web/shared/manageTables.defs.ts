/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/manageTables.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "manageTables",
  "pageName": "Gerenciar mesas",
  "moduleName": "cafeFlow",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:manageTables"
  ],
  "operationIds": [
    "manageTables"
  ],
  "contractRef": {
    "defPath": "_102050_/l2/cafeFlow/web/contracts/manageTables.defs.ts",
    "tsPath": "_102050_/l2/cafeFlow/web/contracts/manageTables.ts"
  },
  "layoutRef": {
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/manageTables.defs.ts",
    "layoutId": "manageTablesLayout"
  },
  "states": [
    {
      "stateKey": "ui.manageTables.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.manageTables.action.manageTables.status",
      "name": "manageTablesState",
      "kind": "actionStatus",
      "actionRef": "manageTables",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.manageTables.input.manageTables.tableId",
      "name": "manageTablesTableId",
      "kind": "input",
      "contractRef": {
        "commandName": "manageTables",
        "direction": "input",
        "field": "tableId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.manageTables.input.manageTables.number",
      "name": "manageTablesNumber",
      "kind": "input",
      "contractRef": {
        "commandName": "manageTables",
        "direction": "input",
        "field": "number"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.manageTables.input.manageTables.status",
      "name": "manageTablesStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "manageTables",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "manageTables",
      "kind": "command",
      "commandRef": "manageTables",
      "routeKey": "cafeFlow.manageTables.manageTables",
      "purpose": "Gerenciar mesas",
      "methodName": "manageTables",
      "handlerName": "handleManageTablesClick",
      "inputStateKeys": [
        "ui.manageTables.input.manageTables.tableId",
        "ui.manageTables.input.manageTables.number",
        "ui.manageTables.input.manageTables.status"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.manageTables.action.manageTables.status"
    },
    {
      "actionId": "set.manageTablesTableId",
      "kind": "stateSetter",
      "stateKey": "ui.manageTables.input.manageTables.tableId",
      "methodName": "setManageTablesTableId",
      "handlerName": "handleManageTablesTableIdChange"
    },
    {
      "actionId": "set.manageTablesNumber",
      "kind": "stateSetter",
      "stateKey": "ui.manageTables.input.manageTables.number",
      "methodName": "setManageTablesNumber",
      "handlerName": "handleManageTablesNumberChange"
    },
    {
      "actionId": "set.manageTablesStatus",
      "kind": "stateSetter",
      "stateKey": "ui.manageTables.input.manageTables.status",
      "methodName": "setManageTablesStatus",
      "handlerName": "handleManageTablesStatusChange"
    }
  ],
  "initialLoads": [],
  "navigationRefs": [],
  "i18n": {
    "manageTables.section.title": "Gerenciar mesas",
    "manageTables.organism.title": "Gerenciar mesas",
    "manageTables.form.title": "Dados da mesa",
    "manageTables.field.tableId": "Identificador da mesa",
    "manageTables.field.number": "Número da mesa",
    "manageTables.field.status": "Situação",
    "manageTables.action.submit": "Salvar",
    "manageTables.status.title": "Status da operação"
  },
  "automation": {
    "statePrefix": "ui.manageTables",
    "stateKeys": [
      "ui.manageTables.status",
      "ui.manageTables.action.manageTables.status",
      "ui.manageTables.input.manageTables.tableId",
      "ui.manageTables.input.manageTables.number",
      "ui.manageTables.input.manageTables.status"
    ],
    "actionIds": [
      "manageTables",
      "set.manageTablesTableId",
      "set.manageTablesNumber",
      "set.manageTablesStatus"
    ]
  }
};

export const pipeline = [
  {
    "id": "manageTables__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102050_/l2/cafeFlow/web/shared/manageTables.ts",
    "defPath": "_102050_/l2/cafeFlow/web/shared/manageTables.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/contracts/manageTables.defs.ts",
      "_102050_/l2/cafeFlow/web/contracts/manageTables.ts",
      "_102050_/l2/cafeFlow/web/desktop/page11/manageTables.defs.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentMaterializeGen"
  }
] as const;
