/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/recordPayment.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "recordPayment",
  "pageName": "Registrar pagamento/recebimento",
  "moduleName": "cafeFlow",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:recordPayment"
  ],
  "operationIds": [
    "recordPayment"
  ],
  "contractRef": {
    "defPath": "_102050_/l2/cafeFlow/web/contracts/recordPayment.defs.ts",
    "tsPath": "_102050_/l2/cafeFlow/web/contracts/recordPayment.ts"
  },
  "layoutRef": {
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/recordPayment.defs.ts",
    "layoutId": "recordPaymentLayout"
  },
  "states": [
    {
      "stateKey": "ui.recordPayment.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.recordPayment.action.recordPayment.status",
      "name": "recordPaymentState",
      "kind": "actionStatus",
      "actionRef": "recordPayment",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.recordPayment.input.recordPayment.method",
      "name": "recordPaymentMethod",
      "kind": "input",
      "contractRef": {
        "commandName": "recordPayment",
        "direction": "input",
        "field": "method"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.recordPayment.input.recordPayment.amount",
      "name": "recordPaymentAmount",
      "kind": "input",
      "contractRef": {
        "commandName": "recordPayment",
        "direction": "input",
        "field": "amount"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.recordPayment.input.recordPayment.status",
      "name": "recordPaymentStatus",
      "kind": "input",
      "contractRef": {
        "commandName": "recordPayment",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "recordPayment",
      "kind": "command",
      "commandRef": "recordPayment",
      "routeKey": "cafeFlow.recordPayment.recordPayment",
      "purpose": "Registrar pagamento/recebimento",
      "methodName": "recordPayment",
      "handlerName": "handleRecordPaymentClick",
      "inputStateKeys": [
        "ui.recordPayment.input.recordPayment.method",
        "ui.recordPayment.input.recordPayment.amount",
        "ui.recordPayment.input.recordPayment.status"
      ],
      "outputStateKeys": [],
      "statusStateKey": "ui.recordPayment.action.recordPayment.status"
    },
    {
      "actionId": "set.recordPaymentMethod",
      "kind": "stateSetter",
      "stateKey": "ui.recordPayment.input.recordPayment.method",
      "methodName": "setRecordPaymentMethod",
      "handlerName": "handleRecordPaymentMethodChange"
    },
    {
      "actionId": "set.recordPaymentAmount",
      "kind": "stateSetter",
      "stateKey": "ui.recordPayment.input.recordPayment.amount",
      "methodName": "setRecordPaymentAmount",
      "handlerName": "handleRecordPaymentAmountChange"
    },
    {
      "actionId": "set.recordPaymentStatus",
      "kind": "stateSetter",
      "stateKey": "ui.recordPayment.input.recordPayment.status",
      "methodName": "setRecordPaymentStatus",
      "handlerName": "handleRecordPaymentStatusChange"
    }
  ],
  "initialLoads": [],
  "navigationRefs": [],
  "i18n": {
    "recordPayment.page.title": "Registrar pagamento/recebimento",
    "recordPayment.section.title": "Registrar pagamento/recebimento",
    "recordPayment.organism.title": "Registrar pagamento/recebimento",
    "recordPayment.order.summary.title": "Resumo do pedido",
    "recordPayment.order.field.orderId": "Pedido",
    "recordPayment.order.field.orderType": "Tipo do pedido",
    "recordPayment.order.field.status": "Status do pedido",
    "recordPayment.order.field.totalAmount": "Total do pedido",
    "recordPayment.order.field.tableId": "Mesa",
    "recordPayment.order.field.customerName": "Cliente",
    "recordPayment.payment.form.title": "Dados do pagamento",
    "recordPayment.payment.field.method": "Método de pagamento",
    "recordPayment.payment.field.amount": "Valor",
    "recordPayment.payment.field.status": "Status do pagamento",
    "recordPayment.action.submit": "Registrar pagamento"
  },
  "automation": {
    "statePrefix": "ui.recordPayment",
    "stateKeys": [
      "ui.recordPayment.status",
      "ui.recordPayment.action.recordPayment.status",
      "ui.recordPayment.input.recordPayment.method",
      "ui.recordPayment.input.recordPayment.amount",
      "ui.recordPayment.input.recordPayment.status"
    ],
    "actionIds": [
      "recordPayment",
      "set.recordPaymentMethod",
      "set.recordPaymentAmount",
      "set.recordPaymentStatus"
    ]
  }
};

export const pipeline = [
  {
    "id": "recordPayment__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102050_/l2/cafeFlow/web/shared/recordPayment.ts",
    "defPath": "_102050_/l2/cafeFlow/web/shared/recordPayment.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/contracts/recordPayment.defs.ts",
      "_102050_/l2/cafeFlow/web/contracts/recordPayment.ts",
      "_102050_/l2/cafeFlow/web/desktop/page11/recordPayment.defs.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentMaterializeGen"
  }
] as const;
