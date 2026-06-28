/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/consumeIngredientsOnConfirmation.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "consumeIngredientsOnConfirmation",
  "pageName": "Baixar estoque por consumo de ingredientes",
  "moduleName": "cafeFlow",
  "sourceKind": "workflow",
  "ownerIds": [
    "workflow:consumeIngredientsOnConfirmation",
    "operation:createStockConsumption"
  ],
  "operationIds": [
    "createStockConsumption"
  ],
  "contractRef": {
    "defPath": "_102050_/l2/cafeFlow/web/contracts/consumeIngredientsOnConfirmation.defs.ts",
    "tsPath": "_102050_/l2/cafeFlow/web/contracts/consumeIngredientsOnConfirmation.ts"
  },
  "layoutRef": {
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/consumeIngredientsOnConfirmation.defs.ts",
    "layoutId": "consumeIngredientsOnConfirmation.layout"
  },
  "states": [
    {
      "stateKey": "ui.consumeIngredientsOnConfirmation.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.consumeIngredientsOnConfirmation.action.createStockConsumption.status",
      "name": "createStockConsumptionState",
      "kind": "actionStatus",
      "actionRef": "createStockConsumption",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.consumeIngredientsOnConfirmation.input.createStockConsumption.quantity",
      "name": "createStockConsumptionQuantity",
      "kind": "input",
      "contractRef": {
        "commandName": "createStockConsumption",
        "direction": "input",
        "field": "quantity"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.consumeIngredientsOnConfirmation.input.createStockConsumption.status",
      "name": "createStockConsumptionStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "createStockConsumption",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.consumeIngredientsOnConfirmation.input.createStockConsumption.consumedAt",
      "name": "createStockConsumptionConsumedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "createStockConsumption",
        "direction": "input",
        "field": "consumedAt"
      },
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "createStockConsumption",
      "kind": "command",
      "commandRef": "createStockConsumption",
      "routeKey": "cafeFlow.consumeIngredientsOnConfirmation.createStockConsumption",
      "purpose": "Registrar consumo de estoque",
      "methodName": "createStockConsumption",
      "handlerName": "handleCreateStockConsumptionClick",
      "inputStateKeys": [
        "ui.consumeIngredientsOnConfirmation.input.createStockConsumption.quantity",
        "ui.consumeIngredientsOnConfirmation.input.createStockConsumption.status",
        "ui.consumeIngredientsOnConfirmation.input.createStockConsumption.consumedAt"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.consumeIngredientsOnConfirmation.action.createStockConsumption.status"
    },
    {
      "actionId": "set.createStockConsumptionQuantity",
      "kind": "stateSetter",
      "stateKey": "ui.consumeIngredientsOnConfirmation.input.createStockConsumption.quantity",
      "methodName": "setCreateStockConsumptionQuantity",
      "handlerName": "handleCreateStockConsumptionQuantityChange"
    },
    {
      "actionId": "set.createStockConsumptionStatus",
      "kind": "stateSetter",
      "stateKey": "ui.consumeIngredientsOnConfirmation.input.createStockConsumption.status",
      "methodName": "setCreateStockConsumptionStatus",
      "handlerName": "handleCreateStockConsumptionStatusChange"
    },
    {
      "actionId": "set.createStockConsumptionConsumedAt",
      "kind": "stateSetter",
      "stateKey": "ui.consumeIngredientsOnConfirmation.input.createStockConsumption.consumedAt",
      "methodName": "setCreateStockConsumptionConsumedAt",
      "handlerName": "handleCreateStockConsumptionConsumedAtChange"
    }
  ],
  "initialLoads": [],
  "navigationRefs": [],
  "i18n": {
    "consumeIngredientsOnConfirmation.section.main.title": "Baixar estoque por consumo de ingredientes",
    "consumeIngredientsOnConfirmation.organism.createStockConsumption.title": "Registrar consumo de estoque",
    "consumeIngredientsOnConfirmation.intention.createStockConsumption.title": "Command Form",
    "consumeIngredientsOnConfirmation.field.quantity.label": "Quantity",
    "consumeIngredientsOnConfirmation.field.status.label": "Status",
    "consumeIngredientsOnConfirmation.field.consumedAt.label": "Consumed At",
    "consumeIngredientsOnConfirmation.action.createStockConsumption.label": "Create Stock Consumption"
  },
  "automation": {
    "statePrefix": "ui.consumeIngredientsOnConfirmation",
    "stateKeys": [
      "ui.consumeIngredientsOnConfirmation.status",
      "ui.consumeIngredientsOnConfirmation.action.createStockConsumption.status",
      "ui.consumeIngredientsOnConfirmation.input.createStockConsumption.quantity",
      "ui.consumeIngredientsOnConfirmation.input.createStockConsumption.status",
      "ui.consumeIngredientsOnConfirmation.input.createStockConsumption.consumedAt"
    ],
    "actionIds": [
      "createStockConsumption",
      "set.createStockConsumptionQuantity",
      "set.createStockConsumptionStatus",
      "set.createStockConsumptionConsumedAt"
    ]
  }
};

export const pipeline = [
  {
    "id": "consumeIngredientsOnConfirmation__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102050_/l2/cafeFlow/web/shared/consumeIngredientsOnConfirmation.ts",
    "defPath": "_102050_/l2/cafeFlow/web/shared/consumeIngredientsOnConfirmation.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/contracts/consumeIngredientsOnConfirmation.defs.ts",
      "_102050_/l2/cafeFlow/web/contracts/consumeIngredientsOnConfirmation.ts",
      "_102050_/l2/cafeFlow/web/desktop/page11/consumeIngredientsOnConfirmation.defs.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentMaterializeGen"
  }
] as const;
