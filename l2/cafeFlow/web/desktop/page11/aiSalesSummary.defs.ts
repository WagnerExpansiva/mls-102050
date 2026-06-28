/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/aiSalesSummary.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "aiSalesSummary",
  "pageName": "Assistente IA: resumo de vendas do dia",
  "actor": "manager",
  "purpose": "Executar Assistente IA: resumo de vendas do dia.",
  "capabilities": [
    "aiSalesSummary"
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
      "id": "section-ai-sales-summary",
      "type": "section",
      "sectionName": "Assistente IA: resumo de vendas do dia",
      "titleKey": "aiSalesSummary.section.title",
      "mode": "view",
      "order": 10,
      "organisms": [
        {
          "id": "organism-ai-sales-summary",
          "type": "panel",
          "organismName": "AiSalesSummary",
          "titleKey": "aiSalesSummary.organism.title",
          "purpose": "Assistente IA: resumo de vendas do dia",
          "userActions": [
            "aiSalesSummary"
          ],
          "requiredEntities": [
            "Order",
            "OrderItem",
            "DailyShift",
            "MenuItem"
          ],
          "readsFields": [
            "Order.totalAmount",
            "Order.status",
            "Order.closedAt",
            "Order.dailyShiftId"
          ],
          "writesFields": [],
          "rulesApplied": [
            "aiOutputLanguageSelection"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intention-ai-sales-summary-form",
              "intent": "commandForm",
              "stateKey": "ui.aiSalesSummary.data.aiSalesSummary",
              "action": "aiSalesSummary",
              "submitAction": "aiSalesSummary",
              "order": 10
            },
            {
              "id": "intention-ai-sales-summary-results",
              "intent": "queryList",
              "stateKey": "ui.aiSalesSummary.data.aiSalesSummary",
              "order": 20
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "aiSalesSummaryLayout",
    "type": "page",
    "sections": [
      {
        "id": "section-ai-sales-summary",
        "type": "section",
        "sectionName": "Assistente IA: resumo de vendas do dia",
        "titleKey": "aiSalesSummary.section.title",
        "mode": "view",
        "order": 10,
        "organisms": [
          {
            "id": "organism-ai-sales-summary",
            "type": "panel",
            "organismName": "AiSalesSummary",
            "titleKey": "aiSalesSummary.organism.title",
            "purpose": "Assistente IA: resumo de vendas do dia",
            "userActions": [
              "aiSalesSummary"
            ],
            "requiredEntities": [
              "Order",
              "OrderItem",
              "DailyShift",
              "MenuItem"
            ],
            "readsFields": [
              "Order.totalAmount",
              "Order.status",
              "Order.closedAt",
              "Order.dailyShiftId"
            ],
            "writesFields": [],
            "rulesApplied": [
              "aiOutputLanguageSelection"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intention-ai-sales-summary-form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "aiSalesSummary.form.title",
                "action": "aiSalesSummary",
                "submitAction": "aiSalesSummary",
                "fields": [
                  {
                    "id": "field-daily-shift-id",
                    "field": "dailyShiftId",
                    "labelKey": "aiSalesSummary.field.dailyShiftId",
                    "order": 10,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.aiSalesSummary.input.aiSalesSummary.dailyShiftId"
                  },
                  {
                    "id": "field-status",
                    "field": "status",
                    "labelKey": "aiSalesSummary.field.status",
                    "order": 20,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.aiSalesSummary.input.aiSalesSummary.status"
                  },
                  {
                    "id": "field-closed-at",
                    "field": "closedAt",
                    "labelKey": "aiSalesSummary.field.closedAt",
                    "order": 30,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.aiSalesSummary.input.aiSalesSummary.closedAt"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action-ai-sales-summary-submit",
                    "action": "aiSalesSummary",
                    "labelKey": "aiSalesSummary.action.run",
                    "order": 10,
                    "actionKey": "aiSalesSummary"
                  }
                ],
                "stateKey": "ui.aiSalesSummary.data.aiSalesSummary"
              },
              {
                "id": "intention-ai-sales-summary-results",
                "intent": "queryList",
                "order": 20,
                "titleKey": "aiSalesSummary.results.title",
                "fields": [],
                "columns": [
                  {
                    "id": "col-daily-shift-id",
                    "field": "dailyShiftId",
                    "labelKey": "aiSalesSummary.col.dailyShiftId",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.aiSalesSummary.data.aiSalesSummary"
                  },
                  {
                    "id": "col-status",
                    "field": "status",
                    "labelKey": "aiSalesSummary.col.status",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.aiSalesSummary.data.aiSalesSummary"
                  },
                  {
                    "id": "col-total-amount",
                    "field": "totalAmount",
                    "labelKey": "aiSalesSummary.col.totalAmount",
                    "order": 30,
                    "required": false,
                    "format": "money",
                    "stateKey": "ui.aiSalesSummary.data.aiSalesSummary"
                  },
                  {
                    "id": "col-closed-at",
                    "field": "closedAt",
                    "labelKey": "aiSalesSummary.col.closedAt",
                    "order": 40,
                    "required": false,
                    "format": "datetime",
                    "stateKey": "ui.aiSalesSummary.data.aiSalesSummary"
                  }
                ],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.aiSalesSummary.data.aiSalesSummary"
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
    "id": "aiSalesSummary__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/aiSalesSummary.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/aiSalesSummary.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/aiSalesSummary.defs.ts",
      "_102050_/l2/cafeFlow/web/shared/aiSalesSummary.ts",
      "_102050_/l2/cafeFlow/web/contracts/aiSalesSummary.defs.ts",
      "_102050_/l2/cafeFlow/web/contracts/aiSalesSummary.ts"
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
