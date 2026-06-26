/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/aiPromotionSuggestions.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "aiPromotionSuggestions",
  "pageName": "Assistente IA: sugestões de itens para promover (últimos 7 dias)",
  "moduleName": "cafeFlow",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:aiPromotionSuggestions"
  ],
  "operationIds": [
    "aiPromotionSuggestions"
  ],
  "contractRef": {
    "defPath": "_102050_/l2/cafeFlow/web/contracts/aiPromotionSuggestions.defs.ts",
    "tsPath": "_102050_/l2/cafeFlow/web/contracts/aiPromotionSuggestions.ts"
  },
  "layoutRef": {
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/aiPromotionSuggestions.defs.ts",
    "layoutId": "layout-aiPromotionSuggestions"
  },
  "states": [
    {
      "stateKey": "ui.aiPromotionSuggestions.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.aiPromotionSuggestions.action.aiPromotionSuggestions.status",
      "name": "aiPromotionSuggestionsState",
      "kind": "actionStatus",
      "actionRef": "aiPromotionSuggestions",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.id",
      "name": "aiPromotionSuggestionsId",
      "kind": "input",
      "contractRef": {
        "commandName": "aiPromotionSuggestions",
        "direction": "input",
        "field": "id"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.orderId",
      "name": "aiPromotionSuggestionsOrderId",
      "kind": "input",
      "contractRef": {
        "commandName": "aiPromotionSuggestions",
        "direction": "input",
        "field": "orderId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.menuItemId",
      "name": "aiPromotionSuggestionsMenuItemId",
      "kind": "input",
      "contractRef": {
        "commandName": "aiPromotionSuggestions",
        "direction": "input",
        "field": "menuItemId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.kitchenTicketId",
      "name": "aiPromotionSuggestionsKitchenTicketId",
      "kind": "input",
      "contractRef": {
        "commandName": "aiPromotionSuggestions",
        "direction": "input",
        "field": "kitchenTicketId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.status",
      "name": "aiPromotionSuggestionsStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "aiPromotionSuggestions",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.createdAt",
      "name": "aiPromotionSuggestionsCreatedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "aiPromotionSuggestions",
        "direction": "input",
        "field": "createdAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.aiPromotionSuggestions.data.aiPromotionSuggestions",
      "name": "aiPromotionSuggestionsData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "aiPromotionSuggestions",
        "direction": "output"
      },
      "collection": true,
      "defaultValue": []
    }
  ],
  "actions": [
    {
      "actionId": "aiPromotionSuggestions",
      "kind": "query",
      "commandRef": "aiPromotionSuggestions",
      "routeKey": "cafeFlow.aiPromotionSuggestions.aiPromotionSuggestions",
      "purpose": "Assistente IA: sugestões de itens para promover (últimos 7 dias)",
      "methodName": "loadAiPromotionSuggestions",
      "handlerName": "handleAiPromotionSuggestionsClick",
      "inputStateKeys": [
        "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.id",
        "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.orderId",
        "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.menuItemId",
        "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.kitchenTicketId",
        "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.status",
        "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.createdAt"
      ],
      "outputStateKeys": [
        "ui.aiPromotionSuggestions.data.aiPromotionSuggestions"
      ],
      "statusStateKey": "ui.aiPromotionSuggestions.action.aiPromotionSuggestions.status"
    },
    {
      "actionId": "set.aiPromotionSuggestionsId",
      "kind": "stateSetter",
      "stateKey": "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.id",
      "methodName": "setAiPromotionSuggestionsId",
      "handlerName": "handleAiPromotionSuggestionsIdChange"
    },
    {
      "actionId": "set.aiPromotionSuggestionsOrderId",
      "kind": "stateSetter",
      "stateKey": "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.orderId",
      "methodName": "setAiPromotionSuggestionsOrderId",
      "handlerName": "handleAiPromotionSuggestionsOrderIdChange"
    },
    {
      "actionId": "set.aiPromotionSuggestionsMenuItemId",
      "kind": "stateSetter",
      "stateKey": "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.menuItemId",
      "methodName": "setAiPromotionSuggestionsMenuItemId",
      "handlerName": "handleAiPromotionSuggestionsMenuItemIdChange"
    },
    {
      "actionId": "set.aiPromotionSuggestionsKitchenTicketId",
      "kind": "stateSetter",
      "stateKey": "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.kitchenTicketId",
      "methodName": "setAiPromotionSuggestionsKitchenTicketId",
      "handlerName": "handleAiPromotionSuggestionsKitchenTicketIdChange"
    },
    {
      "actionId": "set.aiPromotionSuggestionsStatus",
      "kind": "stateSetter",
      "stateKey": "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.status",
      "methodName": "setAiPromotionSuggestionsStatus",
      "handlerName": "handleAiPromotionSuggestionsStatusChange"
    },
    {
      "actionId": "set.aiPromotionSuggestionsCreatedAt",
      "kind": "stateSetter",
      "stateKey": "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.createdAt",
      "methodName": "setAiPromotionSuggestionsCreatedAt",
      "handlerName": "handleAiPromotionSuggestionsCreatedAtChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "aiPromotionSuggestions",
      "stateKey": "ui.aiPromotionSuggestions.data.aiPromotionSuggestions"
    }
  ],
  "navigationRefs": [],
  "i18n": {
    "section.aiPromotionSuggestions.title": "Assistente IA: sugestões de itens para promover (últimos 7 dias)",
    "organism.aiPromotionSuggestions.title": "Sugestões de Promoção com IA",
    "molecule.actionBar.title": "Ações",
    "action.aiPromotionSuggestions.label": "Gerar Sugestões com IA",
    "molecule.table.title": "Itens Sugeridos para Promoção",
    "table.aiPromotionSuggestions.empty": "Nenhuma sugestão gerada. Clique no botão acima para analisar os últimos 7 dias.",
    "column.id": "ID",
    "column.orderId": "Pedido",
    "column.menuItemId": "Item do Cardápio",
    "column.kitchenTicketId": "Ticket Cozinha",
    "column.quantity": "Quantidade",
    "column.unitPrice": "Preço Unitário",
    "column.totalPrice": "Preço Total",
    "column.observations": "Observações"
  },
  "automation": {
    "statePrefix": "ui.aiPromotionSuggestions",
    "stateKeys": [
      "ui.aiPromotionSuggestions.status",
      "ui.aiPromotionSuggestions.action.aiPromotionSuggestions.status",
      "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.id",
      "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.orderId",
      "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.menuItemId",
      "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.kitchenTicketId",
      "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.status",
      "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.createdAt",
      "ui.aiPromotionSuggestions.data.aiPromotionSuggestions"
    ],
    "actionIds": [
      "aiPromotionSuggestions",
      "set.aiPromotionSuggestionsId",
      "set.aiPromotionSuggestionsOrderId",
      "set.aiPromotionSuggestionsMenuItemId",
      "set.aiPromotionSuggestionsKitchenTicketId",
      "set.aiPromotionSuggestionsStatus",
      "set.aiPromotionSuggestionsCreatedAt"
    ]
  }
};

export const pipeline = [
  {
    "id": "aiPromotionSuggestions__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102050_/l2/cafeFlow/web/shared/aiPromotionSuggestions.ts",
    "defPath": "_102050_/l2/cafeFlow/web/shared/aiPromotionSuggestions.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/contracts/aiPromotionSuggestions.defs.ts",
      "_102050_/l2/cafeFlow/web/contracts/aiPromotionSuggestions.ts",
      "_102050_/l2/cafeFlow/web/desktop/page11/aiPromotionSuggestions.defs.ts"
    ],
    "dependsOn": [],
    "skills": [
      "/_102020_/l2/agentMaterializeSolution/skills/genPageShared.ts"
    ],
    "rulesApplied": [
      "orderStatusTransitions",
      "ingredientConsumptionTrigger"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
