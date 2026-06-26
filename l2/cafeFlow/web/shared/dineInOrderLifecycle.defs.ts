/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/dineInOrderLifecycle.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "dineInOrderLifecycle",
  "pageName": "Ciclo de pedido (mesa)",
  "moduleName": "cafeFlow",
  "sourceKind": "workflow",
  "ownerIds": [
    "workflow:dineInOrderLifecycle",
    "operation:createOrder",
    "operation:addOrderItem",
    "operation:createKitchenTicket",
    "operation:updateOrderStatus",
    "operation:updateTableStatus"
  ],
  "operationIds": [
    "createOrder",
    "addOrderItem",
    "createKitchenTicket",
    "updateOrderStatus",
    "updateTableStatus"
  ],
  "contractRef": {
    "defPath": "_102050_/l2/cafeFlow/web/contracts/dineInOrderLifecycle.defs.ts",
    "tsPath": "_102050_/l2/cafeFlow/web/contracts/dineInOrderLifecycle.ts"
  },
  "layoutRef": {
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/dineInOrderLifecycle.defs.ts",
    "layoutId": "dineInOrderLifecycle_default"
  },
  "states": [
    {
      "stateKey": "ui.dineInOrderLifecycle.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.dineInOrderLifecycle.action.createOrder.status",
      "name": "createOrderState",
      "kind": "actionStatus",
      "actionRef": "createOrder",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.dineInOrderLifecycle.input.createOrder.orderType",
      "name": "createOrderOrderType",
      "kind": "input",
      "contractRef": {
        "commandName": "createOrder",
        "direction": "input",
        "field": "orderType"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.dineInOrderLifecycle.input.createOrder.status",
      "name": "createOrderStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "createOrder",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.dineInOrderLifecycle.input.createOrder.totalAmount",
      "name": "createOrderTotalAmount",
      "kind": "input",
      "contractRef": {
        "commandName": "createOrder",
        "direction": "input",
        "field": "totalAmount"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.dineInOrderLifecycle.input.createOrder.notes",
      "name": "createOrderNotes",
      "kind": "input",
      "contractRef": {
        "commandName": "createOrder",
        "direction": "input",
        "field": "notes"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.dineInOrderLifecycle.input.createOrder.customerName",
      "name": "createOrderCustomerName",
      "kind": "input",
      "contractRef": {
        "commandName": "createOrder",
        "direction": "input",
        "field": "customerName"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.dineInOrderLifecycle.input.createOrder.customerPhone",
      "name": "createOrderCustomerPhone",
      "kind": "input",
      "contractRef": {
        "commandName": "createOrder",
        "direction": "input",
        "field": "customerPhone"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.dineInOrderLifecycle.input.createOrder.numberOfGuests",
      "name": "createOrderNumberOfGuests",
      "kind": "input",
      "contractRef": {
        "commandName": "createOrder",
        "direction": "input",
        "field": "numberOfGuests"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.dineInOrderLifecycle.input.createOrder.closedAt",
      "name": "createOrderClosedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "createOrder",
        "direction": "input",
        "field": "closedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.dineInOrderLifecycle.input.createOrder.cancelledAt",
      "name": "createOrderCancelledAt",
      "kind": "input",
      "contractRef": {
        "commandName": "createOrder",
        "direction": "input",
        "field": "cancelledAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.dineInOrderLifecycle.input.createOrder.cancellationReason",
      "name": "createOrderCancellationReason",
      "kind": "input",
      "contractRef": {
        "commandName": "createOrder",
        "direction": "input",
        "field": "cancellationReason"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.dineInOrderLifecycle.action.addOrderItem.status",
      "name": "addOrderItemState",
      "kind": "actionStatus",
      "actionRef": "addOrderItem",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.dineInOrderLifecycle.input.addOrderItem.quantity",
      "name": "addOrderItemQuantity",
      "kind": "input",
      "contractRef": {
        "commandName": "addOrderItem",
        "direction": "input",
        "field": "quantity"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.dineInOrderLifecycle.input.addOrderItem.unitPrice",
      "name": "addOrderItemUnitPrice",
      "kind": "input",
      "contractRef": {
        "commandName": "addOrderItem",
        "direction": "input",
        "field": "unitPrice"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.dineInOrderLifecycle.input.addOrderItem.totalPrice",
      "name": "addOrderItemTotalPrice",
      "kind": "input",
      "contractRef": {
        "commandName": "addOrderItem",
        "direction": "input",
        "field": "totalPrice"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.dineInOrderLifecycle.input.addOrderItem.observations",
      "name": "addOrderItemObservations",
      "kind": "input",
      "contractRef": {
        "commandName": "addOrderItem",
        "direction": "input",
        "field": "observations"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.dineInOrderLifecycle.input.addOrderItem.status",
      "name": "addOrderItemStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "addOrderItem",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.dineInOrderLifecycle.action.createKitchenTicket.status",
      "name": "createKitchenTicketState",
      "kind": "actionStatus",
      "actionRef": "createKitchenTicket",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.dineInOrderLifecycle.input.createKitchenTicket.status",
      "name": "createKitchenTicketStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "createKitchenTicket",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.dineInOrderLifecycle.action.updateOrderStatus.status",
      "name": "updateOrderStatusState",
      "kind": "actionStatus",
      "actionRef": "updateOrderStatus",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.dineInOrderLifecycle.input.updateOrderStatus.status",
      "name": "updateOrderStatusStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "updateOrderStatus",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.dineInOrderLifecycle.input.updateOrderStatus.closedAt",
      "name": "updateOrderStatusClosedAt",
      "kind": "input",
      "contractRef": {
        "commandName": "updateOrderStatus",
        "direction": "input",
        "field": "closedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.dineInOrderLifecycle.input.updateOrderStatus.cancelledAt",
      "name": "updateOrderStatusCancelledAt",
      "kind": "input",
      "contractRef": {
        "commandName": "updateOrderStatus",
        "direction": "input",
        "field": "cancelledAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.dineInOrderLifecycle.input.updateOrderStatus.cancellationReason",
      "name": "updateOrderStatusCancellationReason",
      "kind": "input",
      "contractRef": {
        "commandName": "updateOrderStatus",
        "direction": "input",
        "field": "cancellationReason"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.dineInOrderLifecycle.action.updateTableStatus.status",
      "name": "updateTableStatusState",
      "kind": "actionStatus",
      "actionRef": "updateTableStatus",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.dineInOrderLifecycle.input.updateTableStatus.status",
      "name": "updateTableStatusStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "updateTableStatus",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "createOrder",
      "kind": "command",
      "commandRef": "createOrder",
      "routeKey": "cafeFlow.dineInOrderLifecycle.createOrder",
      "purpose": "Criar pedido",
      "methodName": "createOrder",
      "handlerName": "handleCreateOrderClick",
      "inputStateKeys": [
        "ui.dineInOrderLifecycle.input.createOrder.orderType",
        "ui.dineInOrderLifecycle.input.createOrder.status",
        "ui.dineInOrderLifecycle.input.createOrder.totalAmount",
        "ui.dineInOrderLifecycle.input.createOrder.notes",
        "ui.dineInOrderLifecycle.input.createOrder.customerName",
        "ui.dineInOrderLifecycle.input.createOrder.customerPhone",
        "ui.dineInOrderLifecycle.input.createOrder.numberOfGuests",
        "ui.dineInOrderLifecycle.input.createOrder.closedAt",
        "ui.dineInOrderLifecycle.input.createOrder.cancelledAt",
        "ui.dineInOrderLifecycle.input.createOrder.cancellationReason"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.dineInOrderLifecycle.action.createOrder.status"
    },
    {
      "actionId": "addOrderItem",
      "kind": "command",
      "commandRef": "addOrderItem",
      "routeKey": "cafeFlow.dineInOrderLifecycle.addOrderItem",
      "purpose": "Adicionar item ao pedido",
      "methodName": "addOrderItem",
      "handlerName": "handleAddOrderItemClick",
      "inputStateKeys": [
        "ui.dineInOrderLifecycle.input.addOrderItem.quantity",
        "ui.dineInOrderLifecycle.input.addOrderItem.unitPrice",
        "ui.dineInOrderLifecycle.input.addOrderItem.totalPrice",
        "ui.dineInOrderLifecycle.input.addOrderItem.observations",
        "ui.dineInOrderLifecycle.input.addOrderItem.status"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.dineInOrderLifecycle.action.addOrderItem.status"
    },
    {
      "actionId": "createKitchenTicket",
      "kind": "command",
      "commandRef": "createKitchenTicket",
      "routeKey": "cafeFlow.dineInOrderLifecycle.createKitchenTicket",
      "purpose": "Criar ticket de cozinha",
      "methodName": "createKitchenTicket",
      "handlerName": "handleCreateKitchenTicketClick",
      "inputStateKeys": [
        "ui.dineInOrderLifecycle.input.createKitchenTicket.status"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.dineInOrderLifecycle.action.createKitchenTicket.status"
    },
    {
      "actionId": "updateOrderStatus",
      "kind": "command",
      "commandRef": "updateOrderStatus",
      "routeKey": "cafeFlow.dineInOrderLifecycle.updateOrderStatus",
      "purpose": "Atualizar status do pedido",
      "methodName": "updateOrderStatus",
      "handlerName": "handleUpdateOrderStatusClick",
      "inputStateKeys": [
        "ui.dineInOrderLifecycle.input.updateOrderStatus.status",
        "ui.dineInOrderLifecycle.input.updateOrderStatus.closedAt",
        "ui.dineInOrderLifecycle.input.updateOrderStatus.cancelledAt",
        "ui.dineInOrderLifecycle.input.updateOrderStatus.cancellationReason"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.dineInOrderLifecycle.action.updateOrderStatus.status"
    },
    {
      "actionId": "updateTableStatus",
      "kind": "command",
      "commandRef": "updateTableStatus",
      "routeKey": "cafeFlow.dineInOrderLifecycle.updateTableStatus",
      "purpose": "Atualizar ocupação da mesa",
      "methodName": "updateTableStatus",
      "handlerName": "handleUpdateTableStatusClick",
      "inputStateKeys": [
        "ui.dineInOrderLifecycle.input.updateTableStatus.status"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.dineInOrderLifecycle.action.updateTableStatus.status"
    },
    {
      "actionId": "set.createOrderOrderType",
      "kind": "stateSetter",
      "stateKey": "ui.dineInOrderLifecycle.input.createOrder.orderType",
      "methodName": "setCreateOrderOrderType",
      "handlerName": "handleCreateOrderOrderTypeChange"
    },
    {
      "actionId": "set.createOrderStatus",
      "kind": "stateSetter",
      "stateKey": "ui.dineInOrderLifecycle.input.createOrder.status",
      "methodName": "setCreateOrderStatus",
      "handlerName": "handleCreateOrderStatusChange"
    },
    {
      "actionId": "set.createOrderTotalAmount",
      "kind": "stateSetter",
      "stateKey": "ui.dineInOrderLifecycle.input.createOrder.totalAmount",
      "methodName": "setCreateOrderTotalAmount",
      "handlerName": "handleCreateOrderTotalAmountChange"
    },
    {
      "actionId": "set.createOrderNotes",
      "kind": "stateSetter",
      "stateKey": "ui.dineInOrderLifecycle.input.createOrder.notes",
      "methodName": "setCreateOrderNotes",
      "handlerName": "handleCreateOrderNotesChange"
    },
    {
      "actionId": "set.createOrderCustomerName",
      "kind": "stateSetter",
      "stateKey": "ui.dineInOrderLifecycle.input.createOrder.customerName",
      "methodName": "setCreateOrderCustomerName",
      "handlerName": "handleCreateOrderCustomerNameChange"
    },
    {
      "actionId": "set.createOrderCustomerPhone",
      "kind": "stateSetter",
      "stateKey": "ui.dineInOrderLifecycle.input.createOrder.customerPhone",
      "methodName": "setCreateOrderCustomerPhone",
      "handlerName": "handleCreateOrderCustomerPhoneChange"
    },
    {
      "actionId": "set.createOrderNumberOfGuests",
      "kind": "stateSetter",
      "stateKey": "ui.dineInOrderLifecycle.input.createOrder.numberOfGuests",
      "methodName": "setCreateOrderNumberOfGuests",
      "handlerName": "handleCreateOrderNumberOfGuestsChange"
    },
    {
      "actionId": "set.createOrderClosedAt",
      "kind": "stateSetter",
      "stateKey": "ui.dineInOrderLifecycle.input.createOrder.closedAt",
      "methodName": "setCreateOrderClosedAt",
      "handlerName": "handleCreateOrderClosedAtChange"
    },
    {
      "actionId": "set.createOrderCancelledAt",
      "kind": "stateSetter",
      "stateKey": "ui.dineInOrderLifecycle.input.createOrder.cancelledAt",
      "methodName": "setCreateOrderCancelledAt",
      "handlerName": "handleCreateOrderCancelledAtChange"
    },
    {
      "actionId": "set.createOrderCancellationReason",
      "kind": "stateSetter",
      "stateKey": "ui.dineInOrderLifecycle.input.createOrder.cancellationReason",
      "methodName": "setCreateOrderCancellationReason",
      "handlerName": "handleCreateOrderCancellationReasonChange"
    },
    {
      "actionId": "set.addOrderItemQuantity",
      "kind": "stateSetter",
      "stateKey": "ui.dineInOrderLifecycle.input.addOrderItem.quantity",
      "methodName": "setAddOrderItemQuantity",
      "handlerName": "handleAddOrderItemQuantityChange"
    },
    {
      "actionId": "set.addOrderItemUnitPrice",
      "kind": "stateSetter",
      "stateKey": "ui.dineInOrderLifecycle.input.addOrderItem.unitPrice",
      "methodName": "setAddOrderItemUnitPrice",
      "handlerName": "handleAddOrderItemUnitPriceChange"
    },
    {
      "actionId": "set.addOrderItemTotalPrice",
      "kind": "stateSetter",
      "stateKey": "ui.dineInOrderLifecycle.input.addOrderItem.totalPrice",
      "methodName": "setAddOrderItemTotalPrice",
      "handlerName": "handleAddOrderItemTotalPriceChange"
    },
    {
      "actionId": "set.addOrderItemObservations",
      "kind": "stateSetter",
      "stateKey": "ui.dineInOrderLifecycle.input.addOrderItem.observations",
      "methodName": "setAddOrderItemObservations",
      "handlerName": "handleAddOrderItemObservationsChange"
    },
    {
      "actionId": "set.addOrderItemStatus",
      "kind": "stateSetter",
      "stateKey": "ui.dineInOrderLifecycle.input.addOrderItem.status",
      "methodName": "setAddOrderItemStatus",
      "handlerName": "handleAddOrderItemStatusChange"
    },
    {
      "actionId": "set.createKitchenTicketStatus",
      "kind": "stateSetter",
      "stateKey": "ui.dineInOrderLifecycle.input.createKitchenTicket.status",
      "methodName": "setCreateKitchenTicketStatus",
      "handlerName": "handleCreateKitchenTicketStatusChange"
    },
    {
      "actionId": "set.updateOrderStatusStatus",
      "kind": "stateSetter",
      "stateKey": "ui.dineInOrderLifecycle.input.updateOrderStatus.status",
      "methodName": "setUpdateOrderStatusStatus",
      "handlerName": "handleUpdateOrderStatusStatusChange"
    },
    {
      "actionId": "set.updateOrderStatusClosedAt",
      "kind": "stateSetter",
      "stateKey": "ui.dineInOrderLifecycle.input.updateOrderStatus.closedAt",
      "methodName": "setUpdateOrderStatusClosedAt",
      "handlerName": "handleUpdateOrderStatusClosedAtChange"
    },
    {
      "actionId": "set.updateOrderStatusCancelledAt",
      "kind": "stateSetter",
      "stateKey": "ui.dineInOrderLifecycle.input.updateOrderStatus.cancelledAt",
      "methodName": "setUpdateOrderStatusCancelledAt",
      "handlerName": "handleUpdateOrderStatusCancelledAtChange"
    },
    {
      "actionId": "set.updateOrderStatusCancellationReason",
      "kind": "stateSetter",
      "stateKey": "ui.dineInOrderLifecycle.input.updateOrderStatus.cancellationReason",
      "methodName": "setUpdateOrderStatusCancellationReason",
      "handlerName": "handleUpdateOrderStatusCancellationReasonChange"
    },
    {
      "actionId": "set.updateTableStatusStatus",
      "kind": "stateSetter",
      "stateKey": "ui.dineInOrderLifecycle.input.updateTableStatus.status",
      "methodName": "setUpdateTableStatusStatus",
      "handlerName": "handleUpdateTableStatusStatusChange"
    }
  ],
  "initialLoads": [],
  "navigationRefs": [],
  "i18n": {
    "section.dineInLifecycle.title": "Ciclo de pedido (mesa)",
    "organism.createOrder.title": "Criar pedido",
    "organism.addOrderItem.title": "Adicionar itens ao pedido",
    "organism.createKitchenTicket.title": "Enviar para cozinha",
    "organism.updateOrderStatus.title": "Status do pedido",
    "organism.updateTableStatus.title": "Ocupação da mesa",
    "field.orderType.label": "Tipo do pedido",
    "field.tableId.label": "Mesa",
    "field.numberOfGuests.label": "Número de pessoas",
    "field.customerName.label": "Nome do cliente",
    "field.customerPhone.label": "Telefone do cliente",
    "field.notes.label": "Observações gerais",
    "field.totalAmount.label": "Valor total",
    "field.orderStatus.label": "Status do pedido",
    "field.menuItemId.label": "Item do cardápio",
    "field.quantity.label": "Quantidade",
    "field.unitPrice.label": "Preço unitário",
    "field.totalPrice.label": "Preço total",
    "field.observations.label": "Observações do item",
    "field.itemStatus.label": "Status do item",
    "field.orderId.label": "Pedido",
    "field.kitchenTicketStatus.label": "Status do ticket",
    "field.updateStatus.label": "Novo status",
    "field.cancellationReason.label": "Motivo do cancelamento",
    "field.tableStatus.label": "Status da mesa",
    "column.menuItemId.label": "Item",
    "column.quantity.label": "Qtd.",
    "column.unitPrice.label": "Preço unit.",
    "column.totalPrice.label": "Preço total",
    "column.observations.label": "Observações",
    "column.itemStatus.label": "Status",
    "action.createOrder.label": "Criar pedido",
    "action.addOrderItem.label": "Adicionar item",
    "action.createKitchenTicket.label": "Enviar para cozinha",
    "action.updateOrderStatus.label": "Atualizar status",
    "action.cancelOrder.label": "Cancelar pedido",
    "action.updateTableStatus.label": "Atualizar mesa",
    "empty.orderItems": "Nenhum item adicionado ao pedido ainda."
  },
  "automation": {
    "statePrefix": "ui.dineInOrderLifecycle",
    "stateKeys": [
      "ui.dineInOrderLifecycle.status",
      "ui.dineInOrderLifecycle.action.createOrder.status",
      "ui.dineInOrderLifecycle.input.createOrder.orderType",
      "ui.dineInOrderLifecycle.input.createOrder.status",
      "ui.dineInOrderLifecycle.input.createOrder.totalAmount",
      "ui.dineInOrderLifecycle.input.createOrder.notes",
      "ui.dineInOrderLifecycle.input.createOrder.customerName",
      "ui.dineInOrderLifecycle.input.createOrder.customerPhone",
      "ui.dineInOrderLifecycle.input.createOrder.numberOfGuests",
      "ui.dineInOrderLifecycle.input.createOrder.closedAt",
      "ui.dineInOrderLifecycle.input.createOrder.cancelledAt",
      "ui.dineInOrderLifecycle.input.createOrder.cancellationReason",
      "ui.dineInOrderLifecycle.action.addOrderItem.status",
      "ui.dineInOrderLifecycle.input.addOrderItem.quantity",
      "ui.dineInOrderLifecycle.input.addOrderItem.unitPrice",
      "ui.dineInOrderLifecycle.input.addOrderItem.totalPrice",
      "ui.dineInOrderLifecycle.input.addOrderItem.observations",
      "ui.dineInOrderLifecycle.input.addOrderItem.status",
      "ui.dineInOrderLifecycle.action.createKitchenTicket.status",
      "ui.dineInOrderLifecycle.input.createKitchenTicket.status",
      "ui.dineInOrderLifecycle.action.updateOrderStatus.status",
      "ui.dineInOrderLifecycle.input.updateOrderStatus.status",
      "ui.dineInOrderLifecycle.input.updateOrderStatus.closedAt",
      "ui.dineInOrderLifecycle.input.updateOrderStatus.cancelledAt",
      "ui.dineInOrderLifecycle.input.updateOrderStatus.cancellationReason",
      "ui.dineInOrderLifecycle.action.updateTableStatus.status",
      "ui.dineInOrderLifecycle.input.updateTableStatus.status"
    ],
    "actionIds": [
      "createOrder",
      "addOrderItem",
      "createKitchenTicket",
      "updateOrderStatus",
      "updateTableStatus",
      "set.createOrderOrderType",
      "set.createOrderStatus",
      "set.createOrderTotalAmount",
      "set.createOrderNotes",
      "set.createOrderCustomerName",
      "set.createOrderCustomerPhone",
      "set.createOrderNumberOfGuests",
      "set.createOrderClosedAt",
      "set.createOrderCancelledAt",
      "set.createOrderCancellationReason",
      "set.addOrderItemQuantity",
      "set.addOrderItemUnitPrice",
      "set.addOrderItemTotalPrice",
      "set.addOrderItemObservations",
      "set.addOrderItemStatus",
      "set.createKitchenTicketStatus",
      "set.updateOrderStatusStatus",
      "set.updateOrderStatusClosedAt",
      "set.updateOrderStatusCancelledAt",
      "set.updateOrderStatusCancellationReason",
      "set.updateTableStatusStatus"
    ]
  }
};

export const pipeline = [
  {
    "id": "dineInOrderLifecycle__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102050_/l2/cafeFlow/web/shared/dineInOrderLifecycle.ts",
    "defPath": "_102050_/l2/cafeFlow/web/shared/dineInOrderLifecycle.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/contracts/dineInOrderLifecycle.defs.ts",
      "_102050_/l2/cafeFlow/web/contracts/dineInOrderLifecycle.ts",
      "_102050_/l2/cafeFlow/web/desktop/page11/dineInOrderLifecycle.defs.ts"
    ],
    "dependsOn": [],
    "skills": [
      "/_102020_/l2/agentMaterializeSolution/skills/genPageShared.ts"
    ],
    "rulesApplied": [
      "orderStatusTransitions",
      "paymentTimingByOrderType",
      "ingredientConsumptionTrigger",
      "aiOutputLanguageSelection",
      "tableOccupancyConsistency"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
