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
    "layoutId": "browseMenuForPosLayout"
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
    "page.title": "Consultar cardápio no POS",
    "section.menu.title": "Consultar cardápio no POS",
    "organism.menu.title": "Cardápio no POS",
    "intent.menu.query.title": "Buscar itens do cardápio",
    "filter.menuItemId.label": "Item",
    "filter.menuCategoryId.label": "Categoria",
    "filter.name.label": "Nome",
    "filter.status.label": "Status",
    "filter.createdAt.label": "Criado em",
    "filter.updatedAt.label": "Atualizado em",
    "column.menuItemId.label": "Item",
    "column.menuCategoryId.label": "Categoria",
    "column.name.label": "Nome",
    "column.description.label": "Descrição",
    "column.price.label": "Preço",
    "column.status.label": "Status",
    "column.createdAt.label": "Criado em",
    "column.updatedAt.label": "Atualizado em",
    "action.browseMenuForPos.label": "Consultar"
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
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentMaterializeGen"
  }
] as const;
