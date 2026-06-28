/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/kitchenProductionFlow.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "kitchenProductionFlow",
  "pageName": "Fluxo de produção da cozinha",
  "moduleName": "cafeFlow",
  "sourceKind": "workflow",
  "ownerIds": [
    "workflow:kitchenProductionFlow",
    "operation:viewKitchenTickets",
    "operation:updateKitchenTicketStatus",
    "operation:updateOrderItemStatus"
  ],
  "operationIds": [
    "viewKitchenTickets",
    "updateKitchenTicketStatus",
    "updateOrderItemStatus"
  ],
  "contractRef": {
    "defPath": "_102050_/l2/cafeFlow/web/contracts/kitchenProductionFlow.defs.ts",
    "tsPath": "_102050_/l2/cafeFlow/web/contracts/kitchenProductionFlow.ts"
  },
  "layoutRef": {
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/kitchenProductionFlow.defs.ts",
    "layoutId": "kitchenProductionFlow.layout"
  },
  "states": [
    {
      "stateKey": "ui.kitchenProductionFlow.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.kitchenProductionFlow.action.viewKitchenTickets.status",
      "name": "viewKitchenTicketsState",
      "kind": "actionStatus",
      "actionRef": "viewKitchenTickets",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.kitchenProductionFlow.input.viewKitchenTickets.kitchenTicketId",
      "name": "viewKitchenTicketsKitchenTicketId",
      "kind": "input",
      "contractRef": {
        "commandName": "viewKitchenTickets",
        "direction": "input",
        "field": "kitchenTicketId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.kitchenProductionFlow.input.viewKitchenTickets.orderId",
      "name": "viewKitchenTicketsOrderId",
      "kind": "input",
      "contractRef": {
        "commandName": "viewKitchenTickets",
        "direction": "input",
        "field": "orderId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.kitchenProductionFlow.input.viewKitchenTickets.status",
      "name": "viewKitchenTicketsStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "viewKitchenTickets",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.kitchenProductionFlow.input.viewKitchenTickets.createdAt",
      "name": "viewKitchenTicketsCreatedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "viewKitchenTickets",
        "direction": "input",
        "field": "createdAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.kitchenProductionFlow.input.viewKitchenTickets.updatedAt",
      "name": "viewKitchenTicketsUpdatedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "viewKitchenTickets",
        "direction": "input",
        "field": "updatedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.kitchenProductionFlow.data.viewKitchenTickets",
      "name": "viewKitchenTicketsData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "viewKitchenTickets",
        "direction": "output"
      },
      "collection": true,
      "defaultValue": []
    },
    {
      "stateKey": "ui.kitchenProductionFlow.action.updateKitchenTicketStatus.status",
      "name": "updateKitchenTicketStatusState",
      "kind": "actionStatus",
      "actionRef": "updateKitchenTicketStatus",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.kitchenProductionFlow.input.updateKitchenTicketStatus.status",
      "name": "updateKitchenTicketStatusStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "updateKitchenTicketStatus",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.kitchenProductionFlow.action.updateOrderItemStatus.status",
      "name": "updateOrderItemStatusState",
      "kind": "actionStatus",
      "actionRef": "updateOrderItemStatus",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.kitchenProductionFlow.input.updateOrderItemStatus.status",
      "name": "updateOrderItemStatusStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "updateOrderItemStatus",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "viewKitchenTickets",
      "kind": "query",
      "commandRef": "viewKitchenTickets",
      "routeKey": "cafeFlow.kitchenProductionFlow.viewKitchenTickets",
      "purpose": "Consultar tickets da cozinha",
      "methodName": "loadViewKitchenTickets",
      "handlerName": "handleViewKitchenTicketsClick",
      "inputStateKeys": [
        "ui.kitchenProductionFlow.input.viewKitchenTickets.kitchenTicketId",
        "ui.kitchenProductionFlow.input.viewKitchenTickets.orderId",
        "ui.kitchenProductionFlow.input.viewKitchenTickets.status",
        "ui.kitchenProductionFlow.input.viewKitchenTickets.createdAt",
        "ui.kitchenProductionFlow.input.viewKitchenTickets.updatedAt"
      ],
      "outputStateKeys": [
        "ui.kitchenProductionFlow.data.viewKitchenTickets"
      ],
      "statusStateKey": "ui.kitchenProductionFlow.action.viewKitchenTickets.status"
    },
    {
      "actionId": "updateKitchenTicketStatus",
      "kind": "command",
      "commandRef": "updateKitchenTicketStatus",
      "routeKey": "cafeFlow.kitchenProductionFlow.updateKitchenTicketStatus",
      "purpose": "Atualizar status do ticket de cozinha",
      "methodName": "updateKitchenTicketStatus",
      "handlerName": "handleUpdateKitchenTicketStatusClick",
      "inputStateKeys": [
        "ui.kitchenProductionFlow.input.updateKitchenTicketStatus.status"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.kitchenProductionFlow.action.updateKitchenTicketStatus.status"
    },
    {
      "actionId": "updateOrderItemStatus",
      "kind": "command",
      "commandRef": "updateOrderItemStatus",
      "routeKey": "cafeFlow.kitchenProductionFlow.updateOrderItemStatus",
      "purpose": "Atualizar status de item do pedido",
      "methodName": "updateOrderItemStatus",
      "handlerName": "handleUpdateOrderItemStatusClick",
      "inputStateKeys": [
        "ui.kitchenProductionFlow.input.updateOrderItemStatus.status"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.kitchenProductionFlow.action.updateOrderItemStatus.status"
    },
    {
      "actionId": "set.viewKitchenTicketsKitchenTicketId",
      "kind": "stateSetter",
      "stateKey": "ui.kitchenProductionFlow.input.viewKitchenTickets.kitchenTicketId",
      "methodName": "setViewKitchenTicketsKitchenTicketId",
      "handlerName": "handleViewKitchenTicketsKitchenTicketIdChange"
    },
    {
      "actionId": "set.viewKitchenTicketsOrderId",
      "kind": "stateSetter",
      "stateKey": "ui.kitchenProductionFlow.input.viewKitchenTickets.orderId",
      "methodName": "setViewKitchenTicketsOrderId",
      "handlerName": "handleViewKitchenTicketsOrderIdChange"
    },
    {
      "actionId": "set.viewKitchenTicketsStatus",
      "kind": "stateSetter",
      "stateKey": "ui.kitchenProductionFlow.input.viewKitchenTickets.status",
      "methodName": "setViewKitchenTicketsStatus",
      "handlerName": "handleViewKitchenTicketsStatusChange"
    },
    {
      "actionId": "set.viewKitchenTicketsCreatedAt",
      "kind": "stateSetter",
      "stateKey": "ui.kitchenProductionFlow.input.viewKitchenTickets.createdAt",
      "methodName": "setViewKitchenTicketsCreatedAt",
      "handlerName": "handleViewKitchenTicketsCreatedAtChange"
    },
    {
      "actionId": "set.viewKitchenTicketsUpdatedAt",
      "kind": "stateSetter",
      "stateKey": "ui.kitchenProductionFlow.input.viewKitchenTickets.updatedAt",
      "methodName": "setViewKitchenTicketsUpdatedAt",
      "handlerName": "handleViewKitchenTicketsUpdatedAtChange"
    },
    {
      "actionId": "set.updateKitchenTicketStatusStatus",
      "kind": "stateSetter",
      "stateKey": "ui.kitchenProductionFlow.input.updateKitchenTicketStatus.status",
      "methodName": "setUpdateKitchenTicketStatusStatus",
      "handlerName": "handleUpdateKitchenTicketStatusStatusChange"
    },
    {
      "actionId": "set.updateOrderItemStatusStatus",
      "kind": "stateSetter",
      "stateKey": "ui.kitchenProductionFlow.input.updateOrderItemStatus.status",
      "methodName": "setUpdateOrderItemStatusStatus",
      "handlerName": "handleUpdateOrderItemStatusStatusChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "viewKitchenTickets",
      "stateKey": "ui.kitchenProductionFlow.data.viewKitchenTickets"
    }
  ],
  "navigationRefs": [],
  "i18n": {
    "kitchenProductionFlow.section.main.title": "Fluxo de produção da cozinha",
    "kitchenProductionFlow.organism.viewKitchenTickets.title": "Consultar tickets da cozinha",
    "kitchenProductionFlow.intent.viewKitchenTickets.queryList.title": "Query List",
    "kitchenProductionFlow.field.kitchenTicketId.label": "Kitchen Ticket Id",
    "kitchenProductionFlow.field.orderId.label": "Order Id",
    "kitchenProductionFlow.field.status.label": "Status",
    "kitchenProductionFlow.field.createdAt.label": "Created At",
    "kitchenProductionFlow.field.updatedAt.label": "Updated At",
    "kitchenProductionFlow.filter.kitchenTicketId.label": "Kitchen Ticket Id",
    "kitchenProductionFlow.filter.orderId.label": "Order Id",
    "kitchenProductionFlow.filter.status.label": "Status",
    "kitchenProductionFlow.filter.createdAt.label": "Created At",
    "kitchenProductionFlow.filter.updatedAt.label": "Updated At",
    "kitchenProductionFlow.action.viewKitchenTickets.label": "View Kitchen Tickets",
    "kitchenProductionFlow.organism.updateKitchenTicketStatus.title": "Atualizar status do ticket de cozinha",
    "kitchenProductionFlow.intent.updateKitchenTicketStatus.commandForm.title": "Command Form",
    "kitchenProductionFlow.field.kitchenTicketStatus.label": "Status",
    "kitchenProductionFlow.action.updateKitchenTicketStatus.label": "Update Kitchen Ticket Status",
    "kitchenProductionFlow.organism.updateOrderItemStatus.title": "Atualizar status de item do pedido",
    "kitchenProductionFlow.intent.updateOrderItemStatus.commandForm.title": "Command Form",
    "kitchenProductionFlow.field.orderItemStatus.label": "Status",
    "kitchenProductionFlow.action.updateOrderItemStatus.label": "Update Order Item Status"
  },
  "automation": {
    "statePrefix": "ui.kitchenProductionFlow",
    "stateKeys": [
      "ui.kitchenProductionFlow.status",
      "ui.kitchenProductionFlow.action.viewKitchenTickets.status",
      "ui.kitchenProductionFlow.input.viewKitchenTickets.kitchenTicketId",
      "ui.kitchenProductionFlow.input.viewKitchenTickets.orderId",
      "ui.kitchenProductionFlow.input.viewKitchenTickets.status",
      "ui.kitchenProductionFlow.input.viewKitchenTickets.createdAt",
      "ui.kitchenProductionFlow.input.viewKitchenTickets.updatedAt",
      "ui.kitchenProductionFlow.data.viewKitchenTickets",
      "ui.kitchenProductionFlow.action.updateKitchenTicketStatus.status",
      "ui.kitchenProductionFlow.input.updateKitchenTicketStatus.status",
      "ui.kitchenProductionFlow.action.updateOrderItemStatus.status",
      "ui.kitchenProductionFlow.input.updateOrderItemStatus.status"
    ],
    "actionIds": [
      "viewKitchenTickets",
      "updateKitchenTicketStatus",
      "updateOrderItemStatus",
      "set.viewKitchenTicketsKitchenTicketId",
      "set.viewKitchenTicketsOrderId",
      "set.viewKitchenTicketsStatus",
      "set.viewKitchenTicketsCreatedAt",
      "set.viewKitchenTicketsUpdatedAt",
      "set.updateKitchenTicketStatusStatus",
      "set.updateOrderItemStatusStatus"
    ]
  }
};

export const pipeline = [
  {
    "id": "kitchenProductionFlow__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102050_/l2/cafeFlow/web/shared/kitchenProductionFlow.ts",
    "defPath": "_102050_/l2/cafeFlow/web/shared/kitchenProductionFlow.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/contracts/kitchenProductionFlow.defs.ts",
      "_102050_/l2/cafeFlow/web/contracts/kitchenProductionFlow.ts",
      "_102050_/l2/cafeFlow/web/desktop/page11/kitchenProductionFlow.defs.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentMaterializeGen"
  }
] as const;
