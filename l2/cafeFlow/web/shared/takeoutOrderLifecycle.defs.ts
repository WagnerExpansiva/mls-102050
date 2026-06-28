/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/takeoutOrderLifecycle.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "takeoutOrderLifecycle",
  "pageName": "Ciclo de pedido (takeout)",
  "moduleName": "cafeFlow",
  "sourceKind": "workflow",
  "ownerIds": [
    "workflow:takeoutOrderLifecycle",
    "operation:createOrder",
    "operation:addOrderItem",
    "operation:createKitchenTicket",
    "operation:updateOrderStatus"
  ],
  "operationIds": [
    "createOrder",
    "addOrderItem",
    "createKitchenTicket",
    "updateOrderStatus"
  ],
  "contractRef": {
    "defPath": "_102050_/l2/cafeFlow/web/contracts/takeoutOrderLifecycle.defs.ts",
    "tsPath": "_102050_/l2/cafeFlow/web/contracts/takeoutOrderLifecycle.ts"
  },
  "layoutRef": {
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/takeoutOrderLifecycle.defs.ts",
    "layoutId": "takeoutOrderLifecycle.layout"
  },
  "states": [
    {
      "stateKey": "ui.takeoutOrderLifecycle.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.takeoutOrderLifecycle.action.createOrder.status",
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
      "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.orderType",
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
      "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.status",
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
      "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.totalAmount",
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
      "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.notes",
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
      "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.customerName",
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
      "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.customerPhone",
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
      "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.numberOfGuests",
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
      "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.closedAt",
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
      "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.cancelledAt",
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
      "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.cancellationReason",
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
      "stateKey": "ui.takeoutOrderLifecycle.action.addOrderItem.status",
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
      "stateKey": "ui.takeoutOrderLifecycle.input.addOrderItem.quantity",
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
      "stateKey": "ui.takeoutOrderLifecycle.input.addOrderItem.unitPrice",
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
      "stateKey": "ui.takeoutOrderLifecycle.input.addOrderItem.totalPrice",
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
      "stateKey": "ui.takeoutOrderLifecycle.input.addOrderItem.observations",
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
      "stateKey": "ui.takeoutOrderLifecycle.input.addOrderItem.status",
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
      "stateKey": "ui.takeoutOrderLifecycle.action.createKitchenTicket.status",
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
      "stateKey": "ui.takeoutOrderLifecycle.input.createKitchenTicket.status",
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
      "stateKey": "ui.takeoutOrderLifecycle.action.updateOrderStatus.status",
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
      "stateKey": "ui.takeoutOrderLifecycle.input.updateOrderStatus.status",
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
      "stateKey": "ui.takeoutOrderLifecycle.input.updateOrderStatus.closedAt",
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
      "stateKey": "ui.takeoutOrderLifecycle.input.updateOrderStatus.cancelledAt",
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
      "stateKey": "ui.takeoutOrderLifecycle.input.updateOrderStatus.cancellationReason",
      "name": "updateOrderStatusCancellationReason",
      "kind": "input",
      "contractRef": {
        "commandName": "updateOrderStatus",
        "direction": "input",
        "field": "cancellationReason"
      },
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "createOrder",
      "kind": "command",
      "commandRef": "createOrder",
      "routeKey": "cafeFlow.takeoutOrderLifecycle.createOrder",
      "purpose": "Criar pedido",
      "methodName": "createOrder",
      "handlerName": "handleCreateOrderClick",
      "inputStateKeys": [
        "ui.takeoutOrderLifecycle.input.createOrder.orderType",
        "ui.takeoutOrderLifecycle.input.createOrder.status",
        "ui.takeoutOrderLifecycle.input.createOrder.totalAmount",
        "ui.takeoutOrderLifecycle.input.createOrder.notes",
        "ui.takeoutOrderLifecycle.input.createOrder.customerName",
        "ui.takeoutOrderLifecycle.input.createOrder.customerPhone",
        "ui.takeoutOrderLifecycle.input.createOrder.numberOfGuests",
        "ui.takeoutOrderLifecycle.input.createOrder.closedAt",
        "ui.takeoutOrderLifecycle.input.createOrder.cancelledAt",
        "ui.takeoutOrderLifecycle.input.createOrder.cancellationReason"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.takeoutOrderLifecycle.action.createOrder.status"
    },
    {
      "actionId": "addOrderItem",
      "kind": "command",
      "commandRef": "addOrderItem",
      "routeKey": "cafeFlow.takeoutOrderLifecycle.addOrderItem",
      "purpose": "Adicionar item ao pedido",
      "methodName": "addOrderItem",
      "handlerName": "handleAddOrderItemClick",
      "inputStateKeys": [
        "ui.takeoutOrderLifecycle.input.addOrderItem.quantity",
        "ui.takeoutOrderLifecycle.input.addOrderItem.unitPrice",
        "ui.takeoutOrderLifecycle.input.addOrderItem.totalPrice",
        "ui.takeoutOrderLifecycle.input.addOrderItem.observations",
        "ui.takeoutOrderLifecycle.input.addOrderItem.status"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.takeoutOrderLifecycle.action.addOrderItem.status"
    },
    {
      "actionId": "createKitchenTicket",
      "kind": "command",
      "commandRef": "createKitchenTicket",
      "routeKey": "cafeFlow.takeoutOrderLifecycle.createKitchenTicket",
      "purpose": "Criar ticket de cozinha",
      "methodName": "createKitchenTicket",
      "handlerName": "handleCreateKitchenTicketClick",
      "inputStateKeys": [
        "ui.takeoutOrderLifecycle.input.createKitchenTicket.status"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.takeoutOrderLifecycle.action.createKitchenTicket.status"
    },
    {
      "actionId": "updateOrderStatus",
      "kind": "command",
      "commandRef": "updateOrderStatus",
      "routeKey": "cafeFlow.takeoutOrderLifecycle.updateOrderStatus",
      "purpose": "Atualizar status do pedido",
      "methodName": "updateOrderStatus",
      "handlerName": "handleUpdateOrderStatusClick",
      "inputStateKeys": [
        "ui.takeoutOrderLifecycle.input.updateOrderStatus.status",
        "ui.takeoutOrderLifecycle.input.updateOrderStatus.closedAt",
        "ui.takeoutOrderLifecycle.input.updateOrderStatus.cancelledAt",
        "ui.takeoutOrderLifecycle.input.updateOrderStatus.cancellationReason"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.takeoutOrderLifecycle.action.updateOrderStatus.status"
    },
    {
      "actionId": "set.createOrderOrderType",
      "kind": "stateSetter",
      "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.orderType",
      "methodName": "setCreateOrderOrderType",
      "handlerName": "handleCreateOrderOrderTypeChange"
    },
    {
      "actionId": "set.createOrderStatus",
      "kind": "stateSetter",
      "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.status",
      "methodName": "setCreateOrderStatus",
      "handlerName": "handleCreateOrderStatusChange"
    },
    {
      "actionId": "set.createOrderTotalAmount",
      "kind": "stateSetter",
      "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.totalAmount",
      "methodName": "setCreateOrderTotalAmount",
      "handlerName": "handleCreateOrderTotalAmountChange"
    },
    {
      "actionId": "set.createOrderNotes",
      "kind": "stateSetter",
      "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.notes",
      "methodName": "setCreateOrderNotes",
      "handlerName": "handleCreateOrderNotesChange"
    },
    {
      "actionId": "set.createOrderCustomerName",
      "kind": "stateSetter",
      "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.customerName",
      "methodName": "setCreateOrderCustomerName",
      "handlerName": "handleCreateOrderCustomerNameChange"
    },
    {
      "actionId": "set.createOrderCustomerPhone",
      "kind": "stateSetter",
      "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.customerPhone",
      "methodName": "setCreateOrderCustomerPhone",
      "handlerName": "handleCreateOrderCustomerPhoneChange"
    },
    {
      "actionId": "set.createOrderNumberOfGuests",
      "kind": "stateSetter",
      "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.numberOfGuests",
      "methodName": "setCreateOrderNumberOfGuests",
      "handlerName": "handleCreateOrderNumberOfGuestsChange"
    },
    {
      "actionId": "set.createOrderClosedAt",
      "kind": "stateSetter",
      "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.closedAt",
      "methodName": "setCreateOrderClosedAt",
      "handlerName": "handleCreateOrderClosedAtChange"
    },
    {
      "actionId": "set.createOrderCancelledAt",
      "kind": "stateSetter",
      "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.cancelledAt",
      "methodName": "setCreateOrderCancelledAt",
      "handlerName": "handleCreateOrderCancelledAtChange"
    },
    {
      "actionId": "set.createOrderCancellationReason",
      "kind": "stateSetter",
      "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.cancellationReason",
      "methodName": "setCreateOrderCancellationReason",
      "handlerName": "handleCreateOrderCancellationReasonChange"
    },
    {
      "actionId": "set.addOrderItemQuantity",
      "kind": "stateSetter",
      "stateKey": "ui.takeoutOrderLifecycle.input.addOrderItem.quantity",
      "methodName": "setAddOrderItemQuantity",
      "handlerName": "handleAddOrderItemQuantityChange"
    },
    {
      "actionId": "set.addOrderItemUnitPrice",
      "kind": "stateSetter",
      "stateKey": "ui.takeoutOrderLifecycle.input.addOrderItem.unitPrice",
      "methodName": "setAddOrderItemUnitPrice",
      "handlerName": "handleAddOrderItemUnitPriceChange"
    },
    {
      "actionId": "set.addOrderItemTotalPrice",
      "kind": "stateSetter",
      "stateKey": "ui.takeoutOrderLifecycle.input.addOrderItem.totalPrice",
      "methodName": "setAddOrderItemTotalPrice",
      "handlerName": "handleAddOrderItemTotalPriceChange"
    },
    {
      "actionId": "set.addOrderItemObservations",
      "kind": "stateSetter",
      "stateKey": "ui.takeoutOrderLifecycle.input.addOrderItem.observations",
      "methodName": "setAddOrderItemObservations",
      "handlerName": "handleAddOrderItemObservationsChange"
    },
    {
      "actionId": "set.addOrderItemStatus",
      "kind": "stateSetter",
      "stateKey": "ui.takeoutOrderLifecycle.input.addOrderItem.status",
      "methodName": "setAddOrderItemStatus",
      "handlerName": "handleAddOrderItemStatusChange"
    },
    {
      "actionId": "set.createKitchenTicketStatus",
      "kind": "stateSetter",
      "stateKey": "ui.takeoutOrderLifecycle.input.createKitchenTicket.status",
      "methodName": "setCreateKitchenTicketStatus",
      "handlerName": "handleCreateKitchenTicketStatusChange"
    },
    {
      "actionId": "set.updateOrderStatusStatus",
      "kind": "stateSetter",
      "stateKey": "ui.takeoutOrderLifecycle.input.updateOrderStatus.status",
      "methodName": "setUpdateOrderStatusStatus",
      "handlerName": "handleUpdateOrderStatusStatusChange"
    },
    {
      "actionId": "set.updateOrderStatusClosedAt",
      "kind": "stateSetter",
      "stateKey": "ui.takeoutOrderLifecycle.input.updateOrderStatus.closedAt",
      "methodName": "setUpdateOrderStatusClosedAt",
      "handlerName": "handleUpdateOrderStatusClosedAtChange"
    },
    {
      "actionId": "set.updateOrderStatusCancelledAt",
      "kind": "stateSetter",
      "stateKey": "ui.takeoutOrderLifecycle.input.updateOrderStatus.cancelledAt",
      "methodName": "setUpdateOrderStatusCancelledAt",
      "handlerName": "handleUpdateOrderStatusCancelledAtChange"
    },
    {
      "actionId": "set.updateOrderStatusCancellationReason",
      "kind": "stateSetter",
      "stateKey": "ui.takeoutOrderLifecycle.input.updateOrderStatus.cancellationReason",
      "methodName": "setUpdateOrderStatusCancellationReason",
      "handlerName": "handleUpdateOrderStatusCancellationReasonChange"
    }
  ],
  "initialLoads": [],
  "navigationRefs": [],
  "i18n": {
    "takeoutOrderLifecycle.section.title": "Ciclo de pedido (takeout)",
    "takeoutOrderLifecycle.createOrder.title": "Criar pedido",
    "takeoutOrderLifecycle.createOrder.form.title": "Command Form",
    "takeoutOrderLifecycle.createOrder.field.orderType": "Order Type",
    "takeoutOrderLifecycle.createOrder.field.status": "Status",
    "takeoutOrderLifecycle.createOrder.field.totalAmount": "Total Amount",
    "takeoutOrderLifecycle.createOrder.field.notes": "Notes",
    "takeoutOrderLifecycle.createOrder.field.customerName": "Customer Name",
    "takeoutOrderLifecycle.createOrder.field.customerPhone": "Customer Phone",
    "takeoutOrderLifecycle.createOrder.field.numberOfGuests": "Number Of Guests",
    "takeoutOrderLifecycle.createOrder.field.closedAt": "Closed At",
    "takeoutOrderLifecycle.createOrder.field.cancelledAt": "Cancelled At",
    "takeoutOrderLifecycle.createOrder.field.cancellationReason": "Cancellation Reason",
    "takeoutOrderLifecycle.createOrder.action.submit": "Create Order",
    "takeoutOrderLifecycle.addOrderItem.title": "Adicionar item ao pedido",
    "takeoutOrderLifecycle.addOrderItem.form.title": "Command Form",
    "takeoutOrderLifecycle.addOrderItem.field.quantity": "Quantity",
    "takeoutOrderLifecycle.addOrderItem.field.unitPrice": "Unit Price",
    "takeoutOrderLifecycle.addOrderItem.field.totalPrice": "Total Price",
    "takeoutOrderLifecycle.addOrderItem.field.observations": "Observations",
    "takeoutOrderLifecycle.addOrderItem.field.status": "Status",
    "takeoutOrderLifecycle.addOrderItem.action.submit": "Add Order Item",
    "takeoutOrderLifecycle.createKitchenTicket.title": "Criar ticket de cozinha",
    "takeoutOrderLifecycle.createKitchenTicket.form.title": "Command Form",
    "takeoutOrderLifecycle.createKitchenTicket.field.status": "Status",
    "takeoutOrderLifecycle.createKitchenTicket.action.submit": "Create Kitchen Ticket",
    "takeoutOrderLifecycle.updateOrderStatus.title": "Atualizar status do pedido",
    "takeoutOrderLifecycle.updateOrderStatus.form.title": "Command Form",
    "takeoutOrderLifecycle.updateOrderStatus.field.status": "Status",
    "takeoutOrderLifecycle.updateOrderStatus.field.closedAt": "Closed At",
    "takeoutOrderLifecycle.updateOrderStatus.field.cancelledAt": "Cancelled At",
    "takeoutOrderLifecycle.updateOrderStatus.field.cancellationReason": "Cancellation Reason",
    "takeoutOrderLifecycle.updateOrderStatus.action.submit": "Update Order Status"
  },
  "automation": {
    "statePrefix": "ui.takeoutOrderLifecycle",
    "stateKeys": [
      "ui.takeoutOrderLifecycle.status",
      "ui.takeoutOrderLifecycle.action.createOrder.status",
      "ui.takeoutOrderLifecycle.input.createOrder.orderType",
      "ui.takeoutOrderLifecycle.input.createOrder.status",
      "ui.takeoutOrderLifecycle.input.createOrder.totalAmount",
      "ui.takeoutOrderLifecycle.input.createOrder.notes",
      "ui.takeoutOrderLifecycle.input.createOrder.customerName",
      "ui.takeoutOrderLifecycle.input.createOrder.customerPhone",
      "ui.takeoutOrderLifecycle.input.createOrder.numberOfGuests",
      "ui.takeoutOrderLifecycle.input.createOrder.closedAt",
      "ui.takeoutOrderLifecycle.input.createOrder.cancelledAt",
      "ui.takeoutOrderLifecycle.input.createOrder.cancellationReason",
      "ui.takeoutOrderLifecycle.action.addOrderItem.status",
      "ui.takeoutOrderLifecycle.input.addOrderItem.quantity",
      "ui.takeoutOrderLifecycle.input.addOrderItem.unitPrice",
      "ui.takeoutOrderLifecycle.input.addOrderItem.totalPrice",
      "ui.takeoutOrderLifecycle.input.addOrderItem.observations",
      "ui.takeoutOrderLifecycle.input.addOrderItem.status",
      "ui.takeoutOrderLifecycle.action.createKitchenTicket.status",
      "ui.takeoutOrderLifecycle.input.createKitchenTicket.status",
      "ui.takeoutOrderLifecycle.action.updateOrderStatus.status",
      "ui.takeoutOrderLifecycle.input.updateOrderStatus.status",
      "ui.takeoutOrderLifecycle.input.updateOrderStatus.closedAt",
      "ui.takeoutOrderLifecycle.input.updateOrderStatus.cancelledAt",
      "ui.takeoutOrderLifecycle.input.updateOrderStatus.cancellationReason"
    ],
    "actionIds": [
      "createOrder",
      "addOrderItem",
      "createKitchenTicket",
      "updateOrderStatus",
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
      "set.updateOrderStatusCancellationReason"
    ]
  }
};

export const pipeline = [
  {
    "id": "takeoutOrderLifecycle__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102050_/l2/cafeFlow/web/shared/takeoutOrderLifecycle.ts",
    "defPath": "_102050_/l2/cafeFlow/web/shared/takeoutOrderLifecycle.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/contracts/takeoutOrderLifecycle.defs.ts",
      "_102050_/l2/cafeFlow/web/contracts/takeoutOrderLifecycle.ts",
      "_102050_/l2/cafeFlow/web/desktop/page11/takeoutOrderLifecycle.defs.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentMaterializeGen"
  }
] as const;
