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
    "layoutId": "consumeIngredientsOnConfirmation_layout_v1"
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
    "page.consumeIngredientsOnConfirmation.title": "Baixar estoque por consumo de ingredientes",
    "organism.orderSummary.title": "Pedido",
    "organism.orderItemsReview.title": "Itens do Pedido",
    "organism.recipeComponentsPreview.title": "Ingredientes a Consumar",
    "organism.createStockConsumption.title": "Registrar Consumo de Estoque",
    "field.order.orderId": "Pedido",
    "field.order.orderType": "Tipo",
    "field.order.status": "Status",
    "field.order.totalAmount": "Total",
    "field.order.customerName": "Cliente",
    "field.order.numberOfGuests": "Pessoas",
    "field.order.createdAt": "Criado em",
    "column.orderItem.id": "ID",
    "column.orderItem.menuItemName": "Item",
    "column.orderItem.quantity": "Qtd.",
    "column.orderItem.unitPrice": "Preço Unit.",
    "column.orderItem.totalPrice": "Preço Total",
    "column.orderItem.status": "Status",
    "column.recipe.inventoryItemName": "Ingrediente",
    "column.recipe.unit": "Unidade",
    "column.recipe.quantityPerUnit": "Qtd. por Unidade",
    "column.recipe.currentStock": "Estoque Atual",
    "column.recipe.minimumLevel": "Nível Mínimo",
    "field.stockConsumption.quantity": "Quantidade Consumida",
    "field.stockConsumption.status": "Situação",
    "field.stockConsumption.consumedAt": "Data do Consumo",
    "action.createStockConsumption.label": "Confirmar Consumo",
    "empty.orderItems.noData": "Nenhum item de pedido encontrado.",
    "empty.recipeComponents.noData": "Nenhum ingrediente calculado para os itens do pedido."
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
      "/_102020_/l2/agentMaterializeSolution/skills/genPageShared.ts"
    ],
    "rulesApplied": [
      "ingredientConsumptionTrigger"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
