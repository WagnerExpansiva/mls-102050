/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/recordPayment.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "recordPayment",
  "pageName": "Registrar pagamento/recebimento",
  "actor": "cashier",
  "purpose": "Executar Registrar pagamento/recebimento.",
  "capabilities": [
    "recordPayment"
  ],
  "flowRefs": {
    "experienceFlows": [],
    "entityLifecycles": [],
    "taskWorkflows": [],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "sec_recordPayment",
      "type": "section",
      "sectionName": "Registrar pagamento/recebimento",
      "titleKey": "section.recordPayment.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org_recordPayment",
          "type": "RecordPayment",
          "organismName": "RecordPayment",
          "titleKey": "organism.recordPayment.title",
          "purpose": "Registrar pagamento/recebimento: selecionar pedido, informar método e valor do pagamento, confirmar registro.",
          "userActions": [
            "recordPayment"
          ],
          "requiredEntities": [
            "Payment",
            "Order",
            "DailyShift"
          ],
          "readsFields": [
            "Order.orderId",
            "Order.orderType",
            "Order.status",
            "Order.totalAmount",
            "Order.customerName",
            "DailyShift.dailyShiftId",
            "DailyShift.shiftDate",
            "DailyShift.status",
            "DailyShift.totalSales",
            "DailyShift.totalPayments"
          ],
          "writesFields": [
            "Payment.method",
            "Payment.amount",
            "Payment.status"
          ],
          "rulesApplied": [
            "paymentTimingByOrderType"
          ],
          "order": 10,
          "moleculeRefs": [
            {
              "id": "mol_shiftSummary",
              "type": "summaryPanel",
              "order": 10
            },
            {
              "id": "mol_orderSelection",
              "type": "groupviewtable.mlDataTable",
              "stateKey": "selectedOrderId",
              "order": 20
            },
            {
              "id": "mol_orderSummary",
              "type": "summaryPanel",
              "order": 30
            },
            {
              "id": "mol_paymentForm",
              "type": "form",
              "submitAction": "recordPayment",
              "order": 40
            },
            {
              "id": "mol_actionBar",
              "type": "actionBar",
              "order": 50
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "recordPayment_default",
    "type": "page",
    "sections": [
      {
        "id": "sec_recordPayment",
        "type": "section",
        "sectionName": "Registrar pagamento/recebimento",
        "titleKey": "section.recordPayment.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org_recordPayment",
            "type": "RecordPayment",
            "organismName": "RecordPayment",
            "titleKey": "organism.recordPayment.title",
            "purpose": "Registrar pagamento/recebimento: selecionar pedido, informar método e valor do pagamento, confirmar registro.",
            "userActions": [
              "recordPayment"
            ],
            "requiredEntities": [
              "Payment",
              "Order",
              "DailyShift"
            ],
            "readsFields": [
              "Order.orderId",
              "Order.orderType",
              "Order.status",
              "Order.totalAmount",
              "Order.customerName",
              "DailyShift.dailyShiftId",
              "DailyShift.shiftDate",
              "DailyShift.status",
              "DailyShift.totalSales",
              "DailyShift.totalPayments"
            ],
            "writesFields": [
              "Payment.method",
              "Payment.amount",
              "Payment.status"
            ],
            "rulesApplied": [
              "paymentTimingByOrderType"
            ],
            "order": 10,
            "molecules": [
              {
                "id": "mol_shiftSummary",
                "type": "summaryPanel",
                "order": 10,
                "fields": [
                  {
                    "id": "fld_shift_date",
                    "field": "shiftDate",
                    "labelKey": "field.shiftDate.label",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "format": "date",
                    "source": "DailyShift",
                    "stateKey": "ui.recordPayment.input.recordPayment.shiftDate"
                  },
                  {
                    "id": "fld_shift_status",
                    "field": "status",
                    "labelKey": "field.dailyShiftStatus.label",
                    "order": 20,
                    "required": false,
                    "inputType": "text",
                    "format": "string",
                    "source": "DailyShift",
                    "stateKey": "ui.recordPayment.input.recordPayment.status"
                  },
                  {
                    "id": "fld_shift_totalSales",
                    "field": "totalSales",
                    "labelKey": "field.totalSales.label",
                    "order": 30,
                    "required": false,
                    "inputType": "text",
                    "format": "money",
                    "source": "DailyShift",
                    "stateKey": "ui.recordPayment.input.recordPayment.totalSales"
                  },
                  {
                    "id": "fld_shift_totalPayments",
                    "field": "totalPayments",
                    "labelKey": "field.totalPayments.label",
                    "order": 40,
                    "required": false,
                    "inputType": "text",
                    "format": "money",
                    "source": "DailyShift",
                    "stateKey": "ui.recordPayment.input.recordPayment.totalPayments"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "mol_orderSelection",
                "type": "groupviewtable.mlDataTable",
                "order": 20,
                "titleKey": "molecule.orderSelection.title",
                "source": "Order",
                "binding": "bind_orderList",
                "emptyKey": "empty.orderList",
                "displayHint": "selectable",
                "stateKey": "selectedOrderId",
                "fields": [],
                "columns": [
                  {
                    "id": "col_order_id",
                    "field": "orderId",
                    "labelKey": "field.orderId.label",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "format": "uuid",
                    "source": "Order",
                    "stateKey": "ui.recordPayment.data.recordPayment"
                  },
                  {
                    "id": "col_order_type",
                    "field": "orderType",
                    "labelKey": "field.orderType.label",
                    "order": 20,
                    "required": false,
                    "inputType": "text",
                    "format": "string",
                    "source": "Order",
                    "stateKey": "ui.recordPayment.data.recordPayment"
                  },
                  {
                    "id": "col_order_status",
                    "field": "status",
                    "labelKey": "field.orderStatus.label",
                    "order": 30,
                    "required": false,
                    "inputType": "text",
                    "format": "string",
                    "source": "Order",
                    "stateKey": "ui.recordPayment.data.recordPayment"
                  },
                  {
                    "id": "col_order_total",
                    "field": "totalAmount",
                    "labelKey": "field.totalAmount.label",
                    "order": 40,
                    "required": false,
                    "inputType": "text",
                    "format": "money",
                    "source": "Order",
                    "stateKey": "ui.recordPayment.data.recordPayment"
                  },
                  {
                    "id": "col_order_customer",
                    "field": "customerName",
                    "labelKey": "field.customerName.label",
                    "order": 50,
                    "required": false,
                    "inputType": "text",
                    "format": "string",
                    "source": "Order",
                    "stateKey": "ui.recordPayment.data.recordPayment"
                  }
                ],
                "filters": [
                  {
                    "id": "flt_order_status",
                    "field": "status",
                    "labelKey": "field.orderStatus.label",
                    "order": 10,
                    "required": false,
                    "inputType": "select",
                    "format": "string",
                    "source": "Order",
                    "stateKey": "ui.recordPayment.input.recordPayment.status"
                  }
                ],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "mol_orderSummary",
                "type": "summaryPanel",
                "order": 30,
                "titleKey": "molecule.orderSummary.title",
                "emptyKey": "empty.noOrderSelected",
                "fields": [
                  {
                    "id": "fld_sum_orderId",
                    "field": "orderId",
                    "labelKey": "field.orderId.label",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "format": "uuid",
                    "source": "Order",
                    "stateKey": "ui.recordPayment.input.recordPayment.orderId"
                  },
                  {
                    "id": "fld_sum_orderType",
                    "field": "orderType",
                    "labelKey": "field.orderType.label",
                    "order": 20,
                    "required": false,
                    "inputType": "text",
                    "format": "string",
                    "source": "Order",
                    "stateKey": "ui.recordPayment.input.recordPayment.orderType"
                  },
                  {
                    "id": "fld_sum_totalAmount",
                    "field": "totalAmount",
                    "labelKey": "field.totalAmount.label",
                    "order": 30,
                    "required": false,
                    "inputType": "text",
                    "format": "money",
                    "source": "Order",
                    "stateKey": "ui.recordPayment.input.recordPayment.totalAmount"
                  },
                  {
                    "id": "fld_sum_orderStatus",
                    "field": "status",
                    "labelKey": "field.orderStatus.label",
                    "order": 40,
                    "required": false,
                    "inputType": "text",
                    "format": "string",
                    "source": "Order",
                    "stateKey": "ui.recordPayment.input.recordPayment.status"
                  },
                  {
                    "id": "fld_sum_customerName",
                    "field": "customerName",
                    "labelKey": "field.customerName.label",
                    "order": 50,
                    "required": false,
                    "inputType": "text",
                    "format": "string",
                    "source": "Order",
                    "stateKey": "ui.recordPayment.input.recordPayment.customerName"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "mol_paymentForm",
                "type": "form",
                "order": 40,
                "titleKey": "molecule.paymentForm.title",
                "submitAction": "recordPayment",
                "fields": [
                  {
                    "id": "fld_method",
                    "field": "method",
                    "labelKey": "field.method.label",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "format": "string",
                    "source": "Payment",
                    "stateKey": "ui.recordPayment.input.recordPayment.method"
                  },
                  {
                    "id": "fld_amount",
                    "field": "amount",
                    "labelKey": "field.amount.label",
                    "order": 20,
                    "required": true,
                    "inputType": "number",
                    "format": "money",
                    "source": "Payment",
                    "stateKey": "ui.recordPayment.input.recordPayment.amount"
                  },
                  {
                    "id": "fld_paymentStatus",
                    "field": "status",
                    "labelKey": "field.paymentStatus.label",
                    "order": 30,
                    "required": true,
                    "inputType": "select",
                    "format": "string",
                    "source": "Payment",
                    "stateKey": "ui.recordPayment.input.recordPayment.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "mol_actionBar",
                "type": "actionBar",
                "order": 50,
                "titleKey": "molecule.actionBar.title",
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act_recordPayment",
                    "action": "recordPayment",
                    "labelKey": "action.recordPayment.label",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "recordPayment"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "i18n": {
    "section.recordPayment.title": "Registrar pagamento/recebimento",
    "organism.recordPayment.title": "Registrar pagamento/recebimento",
    "molecule.shiftSummary.title": "Turno atual",
    "molecule.orderSelection.title": "Selecione o pedido",
    "molecule.orderSummary.title": "Resumo do pedido",
    "molecule.paymentForm.title": "Dados do pagamento",
    "molecule.actionBar.title": "Ações",
    "field.shiftDate.label": "Data do turno",
    "field.dailyShiftStatus.label": "Situação do turno",
    "field.totalSales.label": "Total de vendas",
    "field.totalPayments.label": "Total de pagamentos",
    "field.orderId.label": "Pedido",
    "field.orderType.label": "Tipo",
    "field.orderStatus.label": "Situação do pedido",
    "field.totalAmount.label": "Valor total",
    "field.customerName.label": "Cliente",
    "field.method.label": "Método de pagamento",
    "field.amount.label": "Valor recebido",
    "field.paymentStatus.label": "Situação do pagamento",
    "action.recordPayment.label": "Confirmar pagamento",
    "empty.orderList": "Nenhum pedido disponível para pagamento",
    "empty.noOrderSelected": "Selecione um pedido para registrar o pagamento"
  },
  "dataBindings": [
    {
      "id": "bind_orderList",
      "source": "query",
      "entity": "Order",
      "description": "Lista de pedidos disponíveis para pagamento",
      "stateKey": "orderList",
      "inputStateKeys": [
        "filters.orderStatus"
      ]
    },
    {
      "id": "bind_currentShift",
      "source": "query",
      "entity": "DailyShift",
      "description": "Turno diário atual em andamento",
      "stateKey": "currentShift"
    },
    {
      "id": "bind_recordPayment",
      "source": "command",
      "entity": "Payment",
      "command": "recordPayment",
      "description": "Registrar pagamento/recebimento",
      "stateKey": "ui.recordPayment.data.recordPayment",
      "inputStateKeys": [
        "ui.recordPayment.input.recordPayment.method",
        "ui.recordPayment.input.recordPayment.amount",
        "ui.recordPayment.input.recordPayment.status"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "recordPayment__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/recordPayment.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/recordPayment.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/recordPayment.ts",
      "_102050_/l2/cafeFlow/web/contracts/recordPayment.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentMaterializeSolution/skills/genPageRender.ts",
      "_102020_/l2/agentMaterializeSolution/skills/genPageDS.ts"
    ],
    "afterSaveFrontEnd": "_102020_/l2/agentMaterializeSolution/registerFrontEnd.ts?registerPage",
    "visualStyle": {
      "description": "POS-first, high-contrast, touch-friendly, low-latency, status-driven UI"
    },
    "agent": "agentMaterializeGen"
  }
] as const;
