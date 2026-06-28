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
      "id": "section.recordPayment",
      "type": "section",
      "sectionName": "Registrar pagamento/recebimento",
      "titleKey": "recordPayment.section.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "organism.recordPayment",
          "type": "organism",
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
          "readsFields": [],
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
              "id": "intention.recordPayment.form",
              "intent": "commandForm",
              "submitAction": "recordPayment",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "recordPayment.default",
    "type": "page",
    "sections": [
      {
        "id": "section.recordPayment",
        "type": "section",
        "sectionName": "Registrar pagamento/recebimento",
        "titleKey": "recordPayment.section.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "organism.recordPayment",
            "type": "organism",
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
            "readsFields": [],
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
                "id": "intention.recordPayment.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "recordPayment.form.title",
                "submitAction": "recordPayment",
                "fields": [
                  {
                    "id": "field.payment.method",
                    "field": "method",
                    "labelKey": "recordPayment.field.method",
                    "order": 10,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.recordPayment.input.recordPayment.method"
                  },
                  {
                    "id": "field.payment.amount",
                    "field": "amount",
                    "labelKey": "recordPayment.field.amount",
                    "order": 20,
                    "required": true,
                    "inputType": "money",
                    "stateKey": "ui.recordPayment.input.recordPayment.amount"
                  },
                  {
                    "id": "field.payment.status",
                    "field": "status",
                    "labelKey": "recordPayment.field.status",
                    "order": 30,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.recordPayment.input.recordPayment.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action.recordPayment.submit",
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
