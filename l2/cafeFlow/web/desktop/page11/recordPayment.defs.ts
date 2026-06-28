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
      "id": "section-record-payment",
      "type": "section",
      "sectionName": "Registrar pagamento/recebimento",
      "titleKey": "recordPayment.section.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org-record-payment",
          "type": "composite",
          "organismName": "RecordPayment",
          "titleKey": "recordPayment.organism.title",
          "purpose": "Registrar pagamento/recebimento",
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
            "Order.tableId",
            "Order.customerName"
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
          "intentionRefs": [
            {
              "id": "intent-order-summary",
              "intent": "summary",
              "order": 10
            },
            {
              "id": "intent-record-payment-form",
              "intent": "commandForm",
              "submitAction": "recordPayment",
              "order": 20
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "recordPaymentLayout",
    "type": "page",
    "sections": [
      {
        "id": "section-record-payment",
        "type": "section",
        "sectionName": "Registrar pagamento/recebimento",
        "titleKey": "recordPayment.section.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org-record-payment",
            "type": "composite",
            "organismName": "RecordPayment",
            "titleKey": "recordPayment.organism.title",
            "purpose": "Registrar pagamento/recebimento",
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
              "Order.tableId",
              "Order.customerName"
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
            "intentions": [
              {
                "id": "intent-order-summary",
                "intent": "summary",
                "order": 10,
                "titleKey": "recordPayment.order.summary.title",
                "fields": [
                  {
                    "id": "field-order-id",
                    "field": "Order.orderId",
                    "labelKey": "recordPayment.order.field.orderId",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.recordPayment.input.recordPayment.Order.orderId"
                  },
                  {
                    "id": "field-order-type",
                    "field": "Order.orderType",
                    "labelKey": "recordPayment.order.field.orderType",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.recordPayment.input.recordPayment.Order.orderType"
                  },
                  {
                    "id": "field-order-status",
                    "field": "Order.status",
                    "labelKey": "recordPayment.order.field.status",
                    "order": 30,
                    "required": false,
                    "stateKey": "ui.recordPayment.input.recordPayment.Order.status"
                  },
                  {
                    "id": "field-order-total",
                    "field": "Order.totalAmount",
                    "labelKey": "recordPayment.order.field.totalAmount",
                    "order": 40,
                    "required": false,
                    "format": "money",
                    "stateKey": "ui.recordPayment.input.recordPayment.Order.totalAmount"
                  },
                  {
                    "id": "field-order-table",
                    "field": "Order.tableId",
                    "labelKey": "recordPayment.order.field.tableId",
                    "order": 50,
                    "required": false,
                    "stateKey": "ui.recordPayment.input.recordPayment.Order.tableId"
                  },
                  {
                    "id": "field-order-customer",
                    "field": "Order.customerName",
                    "labelKey": "recordPayment.order.field.customerName",
                    "order": 60,
                    "required": false,
                    "stateKey": "ui.recordPayment.input.recordPayment.Order.customerName"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "intent-record-payment-form",
                "intent": "commandForm",
                "order": 20,
                "titleKey": "recordPayment.payment.form.title",
                "submitAction": "recordPayment",
                "fields": [
                  {
                    "id": "field-payment-method",
                    "field": "Payment.method",
                    "labelKey": "recordPayment.payment.field.method",
                    "order": 10,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.recordPayment.input.recordPayment.Payment.method"
                  },
                  {
                    "id": "field-payment-amount",
                    "field": "Payment.amount",
                    "labelKey": "recordPayment.payment.field.amount",
                    "order": 20,
                    "required": true,
                    "inputType": "money",
                    "format": "money",
                    "stateKey": "ui.recordPayment.input.recordPayment.Payment.amount"
                  },
                  {
                    "id": "field-payment-status",
                    "field": "Payment.status",
                    "labelKey": "recordPayment.payment.field.status",
                    "order": 30,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.recordPayment.input.recordPayment.Payment.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action-record-payment",
                    "action": "recordPayment",
                    "labelKey": "recordPayment.action.submit",
                    "order": 10,
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
  "dataBindings": []
};

export const pipeline = [
  {
    "id": "recordPayment__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/recordPayment.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/recordPayment.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/recordPayment.defs.ts",
      "_102050_/l2/cafeFlow/web/shared/recordPayment.ts",
      "_102050_/l2/cafeFlow/web/contracts/recordPayment.defs.ts",
      "_102050_/l2/cafeFlow/web/contracts/recordPayment.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "afterSaveFrontEnd": "_102020_/l2/agentMaterializeSolution/registerFrontEnd.ts?registerPage",
    "visualStyle": {
      "description": "POS-first, high-contrast, touch-friendly, low-latency, status-driven UI"
    },
    "agent": "agentMaterializeGen"
  }
] as const;
