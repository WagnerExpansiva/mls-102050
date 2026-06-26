/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/manageInventoryItems.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "manageInventoryItems",
  "pageName": "Gerenciar itens de estoque (ingredientes)",
  "moduleName": "cafeFlow",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:manageInventoryItems"
  ],
  "operationIds": [
    "manageInventoryItems"
  ],
  "contractRef": {
    "defPath": "_102050_/l2/cafeFlow/web/contracts/manageInventoryItems.defs.ts",
    "tsPath": "_102050_/l2/cafeFlow/web/contracts/manageInventoryItems.ts"
  },
  "layoutRef": {
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/manageInventoryItems.defs.ts",
    "layoutId": "manageInventoryItems.default"
  },
  "states": [
    {
      "stateKey": "ui.manageInventoryItems.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.manageInventoryItems.action.manageInventoryItems.status",
      "name": "manageInventoryItemsState",
      "kind": "actionStatus",
      "actionRef": "manageInventoryItems",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.manageInventoryItems.input.manageInventoryItems.name",
      "name": "manageInventoryItemsName",
      "kind": "input",
      "contractRef": {
        "commandName": "manageInventoryItems",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.manageInventoryItems.input.manageInventoryItems.description",
      "name": "manageInventoryItemsDescription",
      "kind": "input",
      "contractRef": {
        "commandName": "manageInventoryItems",
        "direction": "input",
        "field": "description"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.manageInventoryItems.input.manageInventoryItems.unit",
      "name": "manageInventoryItemsUnit",
      "kind": "input",
      "contractRef": {
        "commandName": "manageInventoryItems",
        "direction": "input",
        "field": "unit"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.manageInventoryItems.input.manageInventoryItems.currentQuantity",
      "name": "manageInventoryItemsCurrentQuantity",
      "kind": "input",
      "contractRef": {
        "commandName": "manageInventoryItems",
        "direction": "input",
        "field": "currentQuantity"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.manageInventoryItems.input.manageInventoryItems.minimumLevel",
      "name": "manageInventoryItemsMinimumLevel",
      "kind": "input",
      "contractRef": {
        "commandName": "manageInventoryItems",
        "direction": "input",
        "field": "minimumLevel"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.manageInventoryItems.input.manageInventoryItems.status",
      "name": "manageInventoryItemsStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "manageInventoryItems",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "manageInventoryItems",
      "kind": "command",
      "commandRef": "manageInventoryItems",
      "routeKey": "cafeFlow.manageInventoryItems.manageInventoryItems",
      "purpose": "Gerenciar itens de estoque (ingredientes)",
      "methodName": "manageInventoryItems",
      "handlerName": "handleManageInventoryItemsClick",
      "inputStateKeys": [
        "ui.manageInventoryItems.input.manageInventoryItems.name",
        "ui.manageInventoryItems.input.manageInventoryItems.description",
        "ui.manageInventoryItems.input.manageInventoryItems.unit",
        "ui.manageInventoryItems.input.manageInventoryItems.currentQuantity",
        "ui.manageInventoryItems.input.manageInventoryItems.minimumLevel",
        "ui.manageInventoryItems.input.manageInventoryItems.status"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.manageInventoryItems.action.manageInventoryItems.status"
    },
    {
      "actionId": "set.manageInventoryItemsName",
      "kind": "stateSetter",
      "stateKey": "ui.manageInventoryItems.input.manageInventoryItems.name",
      "methodName": "setManageInventoryItemsName",
      "handlerName": "handleManageInventoryItemsNameChange"
    },
    {
      "actionId": "set.manageInventoryItemsDescription",
      "kind": "stateSetter",
      "stateKey": "ui.manageInventoryItems.input.manageInventoryItems.description",
      "methodName": "setManageInventoryItemsDescription",
      "handlerName": "handleManageInventoryItemsDescriptionChange"
    },
    {
      "actionId": "set.manageInventoryItemsUnit",
      "kind": "stateSetter",
      "stateKey": "ui.manageInventoryItems.input.manageInventoryItems.unit",
      "methodName": "setManageInventoryItemsUnit",
      "handlerName": "handleManageInventoryItemsUnitChange"
    },
    {
      "actionId": "set.manageInventoryItemsCurrentQuantity",
      "kind": "stateSetter",
      "stateKey": "ui.manageInventoryItems.input.manageInventoryItems.currentQuantity",
      "methodName": "setManageInventoryItemsCurrentQuantity",
      "handlerName": "handleManageInventoryItemsCurrentQuantityChange"
    },
    {
      "actionId": "set.manageInventoryItemsMinimumLevel",
      "kind": "stateSetter",
      "stateKey": "ui.manageInventoryItems.input.manageInventoryItems.minimumLevel",
      "methodName": "setManageInventoryItemsMinimumLevel",
      "handlerName": "handleManageInventoryItemsMinimumLevelChange"
    },
    {
      "actionId": "set.manageInventoryItemsStatus",
      "kind": "stateSetter",
      "stateKey": "ui.manageInventoryItems.input.manageInventoryItems.status",
      "methodName": "setManageInventoryItemsStatus",
      "handlerName": "handleManageInventoryItemsStatusChange"
    }
  ],
  "initialLoads": [],
  "navigationRefs": [],
  "i18n": {
    "page.manageInventoryItems.title": "Gerenciar itens de estoque (ingredientes)",
    "organism.manageInventoryItems.title": "Cadastro de itens de estoque",
    "filter.name.label": "Nome",
    "filter.status.label": "Status",
    "column.name.label": "Nome",
    "column.unit.label": "Unidade",
    "column.currentQuantity.label": "Qtd. Atual",
    "column.minimumLevel.label": "Nível Mínimo",
    "column.status.label": "Status",
    "column.updatedAt.label": "Atualizado em",
    "toolbar.new.label": "Novo Item",
    "toolbar.refresh.label": "Atualizar",
    "rowAction.edit.label": "Editar",
    "rowAction.deactivate.label": "Desativar",
    "summary.totalItems.label": "Total de itens",
    "summary.lowStockItems.label": "Itens com baixo estoque",
    "summary.activeItems.label": "Itens ativos",
    "field.name.label": "Nome do ingrediente",
    "field.description.label": "Descrição",
    "field.unit.label": "Unidade de medida",
    "field.currentQuantity.label": "Quantidade atual",
    "field.minimumLevel.label": "Nível mínimo",
    "field.status.label": "Status",
    "action.save.label": "Salvar",
    "action.cancel.label": "Cancelar",
    "table.empty": "Nenhum item de estoque encontrado"
  },
  "automation": {
    "statePrefix": "ui.manageInventoryItems",
    "stateKeys": [
      "ui.manageInventoryItems.status",
      "ui.manageInventoryItems.action.manageInventoryItems.status",
      "ui.manageInventoryItems.input.manageInventoryItems.name",
      "ui.manageInventoryItems.input.manageInventoryItems.description",
      "ui.manageInventoryItems.input.manageInventoryItems.unit",
      "ui.manageInventoryItems.input.manageInventoryItems.currentQuantity",
      "ui.manageInventoryItems.input.manageInventoryItems.minimumLevel",
      "ui.manageInventoryItems.input.manageInventoryItems.status"
    ],
    "actionIds": [
      "manageInventoryItems",
      "set.manageInventoryItemsName",
      "set.manageInventoryItemsDescription",
      "set.manageInventoryItemsUnit",
      "set.manageInventoryItemsCurrentQuantity",
      "set.manageInventoryItemsMinimumLevel",
      "set.manageInventoryItemsStatus"
    ]
  }
};

export const pipeline = [
  {
    "id": "manageInventoryItems__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102050_/l2/cafeFlow/web/shared/manageInventoryItems.ts",
    "defPath": "_102050_/l2/cafeFlow/web/shared/manageInventoryItems.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/contracts/manageInventoryItems.defs.ts",
      "_102050_/l2/cafeFlow/web/contracts/manageInventoryItems.ts",
      "_102050_/l2/cafeFlow/web/desktop/page11/manageInventoryItems.defs.ts"
    ],
    "dependsOn": [],
    "skills": [
      "/_102020_/l2/agentMaterializeSolution/skills/genPageShared.ts"
    ],
    "rulesApplied": [
      "inventoryLowStockThreshold",
      "ingredientConsumptionTrigger"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
