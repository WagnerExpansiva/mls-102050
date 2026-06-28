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
      "id": "sec-aiSalesSummary-main",
      "type": "section",
      "sectionName": "Assistente IA: resumo de vendas do dia",
      "titleKey": "aiSalesSummary.section.main.title",
      "mode": "view",
      "order": 10,
      "organisms": [
        {
          "id": "org-aiSalesSummary",
          "type": "organism",
          "organismName": "AiSalesSummary",
          "titleKey": "aiSalesSummary.organism.main.title",
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
              "id": "intent-aiSalesSummary-filters",
              "intent": "commandForm",
              "stateKey": "ui.aiSalesSummary.data.aiSalesSummary",
              "action": "aiSalesSummary",
              "submitAction": "aiSalesSummary",
              "order": 10
            },
            {
              "id": "intent-aiSalesSummary-results",
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
    "id": "aiSalesSummary.layout",
    "type": "page",
    "sections": [
      {
        "id": "sec-aiSalesSummary-main",
        "type": "section",
        "sectionName": "Assistente IA: resumo de vendas do dia",
        "titleKey": "aiSalesSummary.section.main.title",
        "mode": "view",
        "order": 10,
        "organisms": [
          {
            "id": "org-aiSalesSummary",
            "type": "organism",
            "organismName": "AiSalesSummary",
            "titleKey": "aiSalesSummary.organism.main.title",
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
                "id": "intent-aiSalesSummary-filters",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "aiSalesSummary.intent.filters.title",
                "action": "aiSalesSummary",
                "submitAction": "aiSalesSummary",
                "fields": [
                  {
                    "id": "field-aiSalesSummary-dailyShiftId",
                    "field": "dailyShiftId",
                    "labelKey": "aiSalesSummary.field.dailyShiftId.label",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.aiSalesSummary.input.aiSalesSummary.dailyShiftId"
                  },
                  {
                    "id": "field-aiSalesSummary-status",
                    "field": "status",
                    "labelKey": "aiSalesSummary.field.status.label",
                    "order": 20,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.aiSalesSummary.input.aiSalesSummary.status"
                  },
                  {
                    "id": "field-aiSalesSummary-closedAt",
                    "field": "closedAt",
                    "labelKey": "aiSalesSummary.field.closedAt.label",
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
                    "id": "action-aiSalesSummary-run",
                    "action": "aiSalesSummary",
                    "labelKey": "aiSalesSummary.action.run.label",
                    "order": 10,
                    "actionKey": "aiSalesSummary"
                  }
                ],
                "stateKey": "ui.aiSalesSummary.data.aiSalesSummary"
              },
              {
                "id": "intent-aiSalesSummary-results",
                "intent": "queryList",
                "order": 20,
                "titleKey": "aiSalesSummary.intent.results.title",
                "fields": [],
                "columns": [
                  {
                    "id": "col-aiSalesSummary-dailyShiftId",
                    "field": "dailyShiftId",
                    "labelKey": "aiSalesSummary.col.dailyShiftId.label",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.aiSalesSummary.data.aiSalesSummary"
                  },
                  {
                    "id": "col-aiSalesSummary-status",
                    "field": "status",
                    "labelKey": "aiSalesSummary.col.status.label",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.aiSalesSummary.data.aiSalesSummary"
                  },
                  {
                    "id": "col-aiSalesSummary-totalAmount",
                    "field": "totalAmount",
                    "labelKey": "aiSalesSummary.col.totalAmount.label",
                    "order": 30,
                    "required": false,
                    "stateKey": "ui.aiSalesSummary.data.aiSalesSummary"
                  },
                  {
                    "id": "col-aiSalesSummary-closedAt",
                    "field": "closedAt",
                    "labelKey": "aiSalesSummary.col.closedAt.label",
                    "order": 40,
                    "required": false,
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
