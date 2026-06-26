/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/browseMenuForPos.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "browseMenuForPos",
  "pageName": "Consultar cardápio no POS",
  "moduleName": "cafeFlow",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:browseMenuForPos"
  ],
  "operationIds": [
    "browseMenuForPos"
  ],
  "contractRef": {
    "defPath": "_102050_/l2/cafeFlow/web/contracts/browseMenuForPos.defs.ts",
    "tsPath": "_102050_/l2/cafeFlow/web/contracts/browseMenuForPos.ts"
  },
  "layoutRef": {
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/browseMenuForPos.defs.ts",
    "layoutId": "browseMenuForPos-layout"
  },
  "states": [
    {
      "stateKey": "ui.browseMenuForPos.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.browseMenuForPos.action.browseMenuForPos.status",
      "name": "browseMenuForPosState",
      "kind": "actionStatus",
      "actionRef": "browseMenuForPos",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.browseMenuForPos.input.browseMenuForPos.menuItemId",
      "name": "browseMenuForPosMenuItemId",
      "kind": "input",
      "contractRef": {
        "commandName": "browseMenuForPos",
        "direction": "input",
        "field": "menuItemId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.browseMenuForPos.input.browseMenuForPos.menuCategoryId",
      "name": "browseMenuForPosMenuCategoryId",
      "kind": "input",
      "contractRef": {
        "commandName": "browseMenuForPos",
        "direction": "input",
        "field": "menuCategoryId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.browseMenuForPos.input.browseMenuForPos.name",
      "name": "browseMenuForPosName",
      "kind": "input",
      "contractRef": {
        "commandName": "browseMenuForPos",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.browseMenuForPos.input.browseMenuForPos.status",
      "name": "browseMenuForPosStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "browseMenuForPos",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.browseMenuForPos.input.browseMenuForPos.createdAt",
      "name": "browseMenuForPosCreatedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "browseMenuForPos",
        "direction": "input",
        "field": "createdAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.browseMenuForPos.input.browseMenuForPos.updatedAt",
      "name": "browseMenuForPosUpdatedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "browseMenuForPos",
        "direction": "input",
        "field": "updatedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.browseMenuForPos.data.browseMenuForPos",
      "name": "browseMenuForPosData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "browseMenuForPos",
        "direction": "output"
      },
      "collection": true,
      "defaultValue": []
    }
  ],
  "actions": [
    {
      "actionId": "browseMenuForPos",
      "kind": "query",
      "commandRef": "browseMenuForPos",
      "routeKey": "cafeFlow.browseMenuForPos.browseMenuForPos",
      "purpose": "Consultar cardápio no POS",
      "methodName": "loadBrowseMenuForPos",
      "handlerName": "handleBrowseMenuForPosClick",
      "inputStateKeys": [
        "ui.browseMenuForPos.input.browseMenuForPos.menuItemId",
        "ui.browseMenuForPos.input.browseMenuForPos.menuCategoryId",
        "ui.browseMenuForPos.input.browseMenuForPos.name",
        "ui.browseMenuForPos.input.browseMenuForPos.status",
        "ui.browseMenuForPos.input.browseMenuForPos.createdAt",
        "ui.browseMenuForPos.input.browseMenuForPos.updatedAt"
      ],
      "outputStateKeys": [
        "ui.browseMenuForPos.data.browseMenuForPos"
      ],
      "statusStateKey": "ui.browseMenuForPos.action.browseMenuForPos.status"
    },
    {
      "actionId": "set.browseMenuForPosMenuItemId",
      "kind": "stateSetter",
      "stateKey": "ui.browseMenuForPos.input.browseMenuForPos.menuItemId",
      "methodName": "setBrowseMenuForPosMenuItemId",
      "handlerName": "handleBrowseMenuForPosMenuItemIdChange"
    },
    {
      "actionId": "set.browseMenuForPosMenuCategoryId",
      "kind": "stateSetter",
      "stateKey": "ui.browseMenuForPos.input.browseMenuForPos.menuCategoryId",
      "methodName": "setBrowseMenuForPosMenuCategoryId",
      "handlerName": "handleBrowseMenuForPosMenuCategoryIdChange"
    },
    {
      "actionId": "set.browseMenuForPosName",
      "kind": "stateSetter",
      "stateKey": "ui.browseMenuForPos.input.browseMenuForPos.name",
      "methodName": "setBrowseMenuForPosName",
      "handlerName": "handleBrowseMenuForPosNameChange"
    },
    {
      "actionId": "set.browseMenuForPosStatus",
      "kind": "stateSetter",
      "stateKey": "ui.browseMenuForPos.input.browseMenuForPos.status",
      "methodName": "setBrowseMenuForPosStatus",
      "handlerName": "handleBrowseMenuForPosStatusChange"
    },
    {
      "actionId": "set.browseMenuForPosCreatedAt",
      "kind": "stateSetter",
      "stateKey": "ui.browseMenuForPos.input.browseMenuForPos.createdAt",
      "methodName": "setBrowseMenuForPosCreatedAt",
      "handlerName": "handleBrowseMenuForPosCreatedAtChange"
    },
    {
      "actionId": "set.browseMenuForPosUpdatedAt",
      "kind": "stateSetter",
      "stateKey": "ui.browseMenuForPos.input.browseMenuForPos.updatedAt",
      "methodName": "setBrowseMenuForPosUpdatedAt",
      "handlerName": "handleBrowseMenuForPosUpdatedAtChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "browseMenuForPos",
      "stateKey": "ui.browseMenuForPos.data.browseMenuForPos"
    }
  ],
  "navigationRefs": [],
  "i18n": {
    "section.browseMenu.title": "Consultar cardápio no POS",
    "organism.filters.title": "Filtros",
    "organism.results.title": "Itens do cardápio",
    "field.menuCategoryId": "Categoria",
    "field.name": "Nome",
    "field.status": "Status",
    "column.name": "Nome",
    "column.description": "Descrição",
    "column.price": "Preço",
    "column.status": "Status",
    "column.menuCategoryId": "Categoria",
    "action.browseMenuForPos": "Buscar",
    "action.refresh": "Atualizar",
    "table.empty": "Nenhum item encontrado"
  },
  "automation": {
    "statePrefix": "ui.browseMenuForPos",
    "stateKeys": [
      "ui.browseMenuForPos.status",
      "ui.browseMenuForPos.action.browseMenuForPos.status",
      "ui.browseMenuForPos.input.browseMenuForPos.menuItemId",
      "ui.browseMenuForPos.input.browseMenuForPos.menuCategoryId",
      "ui.browseMenuForPos.input.browseMenuForPos.name",
      "ui.browseMenuForPos.input.browseMenuForPos.status",
      "ui.browseMenuForPos.input.browseMenuForPos.createdAt",
      "ui.browseMenuForPos.input.browseMenuForPos.updatedAt",
      "ui.browseMenuForPos.data.browseMenuForPos"
    ],
    "actionIds": [
      "browseMenuForPos",
      "set.browseMenuForPosMenuItemId",
      "set.browseMenuForPosMenuCategoryId",
      "set.browseMenuForPosName",
      "set.browseMenuForPosStatus",
      "set.browseMenuForPosCreatedAt",
      "set.browseMenuForPosUpdatedAt"
    ]
  }
};

export const pipeline = [
  {
    "id": "browseMenuForPos__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102050_/l2/cafeFlow/web/shared/browseMenuForPos.ts",
    "defPath": "_102050_/l2/cafeFlow/web/shared/browseMenuForPos.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/contracts/browseMenuForPos.defs.ts",
      "_102050_/l2/cafeFlow/web/contracts/browseMenuForPos.ts",
      "_102050_/l2/cafeFlow/web/desktop/page11/browseMenuForPos.defs.ts"
    ],
    "dependsOn": [],
    "skills": [
      "/_102020_/l2/agentMaterializeSolution/skills/genPageShared.ts"
    ],
    "rulesApplied": [
      "aiOutputLanguageSelection"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
