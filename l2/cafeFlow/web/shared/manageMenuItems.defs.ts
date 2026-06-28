/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/manageMenuItems.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "manageMenuItems",
  "pageName": "Gerenciar itens do cardápio",
  "moduleName": "cafeFlow",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:manageMenuItems"
  ],
  "operationIds": [
    "manageMenuItems"
  ],
  "contractRef": {
    "defPath": "_102050_/l2/cafeFlow/web/contracts/manageMenuItems.defs.ts",
    "tsPath": "_102050_/l2/cafeFlow/web/contracts/manageMenuItems.ts"
  },
  "layoutRef": {
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/manageMenuItems.defs.ts",
    "layoutId": "manageMenuItems.layout"
  },
  "states": [
    {
      "stateKey": "ui.manageMenuItems.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.manageMenuItems.action.manageMenuItems.status",
      "name": "manageMenuItemsState",
      "kind": "actionStatus",
      "actionRef": "manageMenuItems",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.manageMenuItems.input.manageMenuItems.menuItemId",
      "name": "manageMenuItemsMenuItemId",
      "kind": "input",
      "contractRef": {
        "commandName": "manageMenuItems",
        "direction": "input",
        "field": "menuItemId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.manageMenuItems.input.manageMenuItems.menuCategoryId",
      "name": "manageMenuItemsMenuCategoryId",
      "kind": "input",
      "contractRef": {
        "commandName": "manageMenuItems",
        "direction": "input",
        "field": "menuCategoryId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.manageMenuItems.input.manageMenuItems.name",
      "name": "manageMenuItemsName",
      "kind": "input",
      "contractRef": {
        "commandName": "manageMenuItems",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.manageMenuItems.input.manageMenuItems.description",
      "name": "manageMenuItemsDescription",
      "kind": "input",
      "contractRef": {
        "commandName": "manageMenuItems",
        "direction": "input",
        "field": "description"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.manageMenuItems.input.manageMenuItems.price",
      "name": "manageMenuItemsPrice",
      "kind": "input",
      "contractRef": {
        "commandName": "manageMenuItems",
        "direction": "input",
        "field": "price"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.manageMenuItems.input.manageMenuItems.status",
      "name": "manageMenuItemsStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "manageMenuItems",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "manageMenuItems",
      "kind": "command",
      "commandRef": "manageMenuItems",
      "routeKey": "cafeFlow.manageMenuItems.manageMenuItems",
      "purpose": "Gerenciar itens do cardápio",
      "methodName": "manageMenuItems",
      "handlerName": "handleManageMenuItemsClick",
      "inputStateKeys": [
        "ui.manageMenuItems.input.manageMenuItems.menuItemId",
        "ui.manageMenuItems.input.manageMenuItems.menuCategoryId",
        "ui.manageMenuItems.input.manageMenuItems.name",
        "ui.manageMenuItems.input.manageMenuItems.description",
        "ui.manageMenuItems.input.manageMenuItems.price",
        "ui.manageMenuItems.input.manageMenuItems.status"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.manageMenuItems.action.manageMenuItems.status"
    },
    {
      "actionId": "set.manageMenuItemsMenuItemId",
      "kind": "stateSetter",
      "stateKey": "ui.manageMenuItems.input.manageMenuItems.menuItemId",
      "methodName": "setManageMenuItemsMenuItemId",
      "handlerName": "handleManageMenuItemsMenuItemIdChange"
    },
    {
      "actionId": "set.manageMenuItemsMenuCategoryId",
      "kind": "stateSetter",
      "stateKey": "ui.manageMenuItems.input.manageMenuItems.menuCategoryId",
      "methodName": "setManageMenuItemsMenuCategoryId",
      "handlerName": "handleManageMenuItemsMenuCategoryIdChange"
    },
    {
      "actionId": "set.manageMenuItemsName",
      "kind": "stateSetter",
      "stateKey": "ui.manageMenuItems.input.manageMenuItems.name",
      "methodName": "setManageMenuItemsName",
      "handlerName": "handleManageMenuItemsNameChange"
    },
    {
      "actionId": "set.manageMenuItemsDescription",
      "kind": "stateSetter",
      "stateKey": "ui.manageMenuItems.input.manageMenuItems.description",
      "methodName": "setManageMenuItemsDescription",
      "handlerName": "handleManageMenuItemsDescriptionChange"
    },
    {
      "actionId": "set.manageMenuItemsPrice",
      "kind": "stateSetter",
      "stateKey": "ui.manageMenuItems.input.manageMenuItems.price",
      "methodName": "setManageMenuItemsPrice",
      "handlerName": "handleManageMenuItemsPriceChange"
    },
    {
      "actionId": "set.manageMenuItemsStatus",
      "kind": "stateSetter",
      "stateKey": "ui.manageMenuItems.input.manageMenuItems.status",
      "methodName": "setManageMenuItemsStatus",
      "handlerName": "handleManageMenuItemsStatusChange"
    }
  ],
  "initialLoads": [],
  "navigationRefs": [],
  "i18n": {
    "manageMenuItems.section.title": "Gerenciar itens do cardápio",
    "manageMenuItems.organism.title": "Gerenciar itens do cardápio",
    "manageMenuItems.form.title": "Detalhes do item do cardápio",
    "manageMenuItems.actions.title": "Ações",
    "manageMenuItems.field.menuItemId": "ID do item",
    "manageMenuItems.field.menuCategoryId": "Categoria",
    "manageMenuItems.field.name": "Nome",
    "manageMenuItems.field.description": "Descrição",
    "manageMenuItems.field.price": "Preço",
    "manageMenuItems.field.status": "Status",
    "manageMenuItems.action.submit": "Salvar alterações"
  },
  "automation": {
    "statePrefix": "ui.manageMenuItems",
    "stateKeys": [
      "ui.manageMenuItems.status",
      "ui.manageMenuItems.action.manageMenuItems.status",
      "ui.manageMenuItems.input.manageMenuItems.menuItemId",
      "ui.manageMenuItems.input.manageMenuItems.menuCategoryId",
      "ui.manageMenuItems.input.manageMenuItems.name",
      "ui.manageMenuItems.input.manageMenuItems.description",
      "ui.manageMenuItems.input.manageMenuItems.price",
      "ui.manageMenuItems.input.manageMenuItems.status"
    ],
    "actionIds": [
      "manageMenuItems",
      "set.manageMenuItemsMenuItemId",
      "set.manageMenuItemsMenuCategoryId",
      "set.manageMenuItemsName",
      "set.manageMenuItemsDescription",
      "set.manageMenuItemsPrice",
      "set.manageMenuItemsStatus"
    ]
  }
};

export const pipeline = [
  {
    "id": "manageMenuItems__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102050_/l2/cafeFlow/web/shared/manageMenuItems.ts",
    "defPath": "_102050_/l2/cafeFlow/web/shared/manageMenuItems.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/contracts/manageMenuItems.defs.ts",
      "_102050_/l2/cafeFlow/web/contracts/manageMenuItems.ts",
      "_102050_/l2/cafeFlow/web/desktop/page11/manageMenuItems.defs.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentMaterializeGen"
  }
] as const;
