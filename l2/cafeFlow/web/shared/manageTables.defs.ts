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
    "layoutId": "manageTables-default"
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
    "page.manageTables.section.title": "Gerenciar mesas",
    "page.manageTables.organism.tableList.title": "Mesas cadastradas",
    "page.manageTables.organism.form.title": "Editar / criar mesa",
    "page.manageTables.filter.status": "Status",
    "page.manageTables.column.number": "Número",
    "page.manageTables.column.status": "Status",
    "page.manageTables.column.createdAt": "Criado em",
    "page.manageTables.column.updatedAt": "Atualizado em",
    "page.manageTables.toolbar.newTable": "Nova mesa",
    "page.manageTables.rowAction.edit": "Editar",
    "page.manageTables.rowAction.delete": "Remover",
    "page.manageTables.table.empty": "Nenhuma mesa cadastrada.",
    "page.manageTables.field.tableId": "ID da mesa",
    "page.manageTables.field.number": "Número da mesa",
    "page.manageTables.field.status": "Status da mesa",
    "page.manageTables.action.save": "Salvar",
    "page.manageTables.action.cancel": "Cancelar"
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
      "/_102020_/l2/agentMaterializeSolution/skills/genPageShared.ts"
    ],
    "rulesApplied": [
      "tableOccupancyConsistency"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
