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
      "id": "sec_aiSalesSummary",
      "type": "section",
      "sectionName": "Assistente IA: resumo de vendas do dia",
      "titleKey": "page.aiSalesSummary.title",
      "mode": "view",
      "order": 10,
      "organisms": [
        {
          "id": "org_aiSalesSummary",
          "type": "aiAssistantPanel",
          "organismName": "AiSalesSummary",
          "titleKey": "organism.aiSalesSummary.title",
          "purpose": "Permitir ao gerente solicitar e visualizar o resumo de vendas do dia gerado por IA, com filtros por turno, status e data de fechamento.",
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
          "moleculeRefs": [
            {
              "id": "mol_filterForm",
              "type": "form",
              "stateKey": "ui.aiSalesSummary.data.aiSalesSummary",
              "order": 10
            },
            {
              "id": "mol_actionBar",
              "type": "actionBar",
              "stateKey": "ui.aiSalesSummary.data.aiSalesSummary",
              "order": 20
            },
            {
              "id": "mol_summaryPanel",
              "type": "summaryPanel",
              "stateKey": "ui.aiSalesSummary.data.aiSalesSummary",
              "order": 30
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "aiSalesSummary.default",
    "type": "page",
    "sections": [
      {
        "id": "sec_aiSalesSummary",
        "type": "section",
        "sectionName": "Assistente IA: resumo de vendas do dia",
        "titleKey": "page.aiSalesSummary.title",
        "mode": "view",
        "order": 10,
        "organisms": [
          {
            "id": "org_aiSalesSummary",
            "type": "aiAssistantPanel",
            "organismName": "AiSalesSummary",
            "titleKey": "organism.aiSalesSummary.title",
            "purpose": "Permitir ao gerente solicitar e visualizar o resumo de vendas do dia gerado por IA, com filtros por turno, status e data de fechamento.",
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
            "molecules": [
              {
                "id": "mol_filterForm",
                "type": "form",
                "order": 10,
                "fields": [
                  {
                    "id": "fld_dailyShiftId",
                    "field": "dailyShiftId",
                    "labelKey": "field.dailyShiftId.label",
                    "order": 10,
                    "required": false,
                    "inputType": "select",
                    "source": "Order.dailyShiftId",
                    "stateKey": "ui.aiSalesSummary.input.aiSalesSummary.dailyShiftId"
                  },
                  {
                    "id": "fld_status",
                    "field": "status",
                    "labelKey": "field.status.label",
                    "order": 20,
                    "required": false,
                    "inputType": "select",
                    "source": "Order.status",
                    "stateKey": "ui.aiSalesSummary.input.aiSalesSummary.status"
                  },
                  {
                    "id": "fld_closedAt",
                    "field": "closedAt",
                    "labelKey": "field.closedAt.label",
                    "order": 30,
                    "required": false,
                    "inputType": "date",
                    "format": "datetime",
                    "source": "Order.closedAt",
                    "stateKey": "ui.aiSalesSummary.input.aiSalesSummary.closedAt"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.aiSalesSummary.data.aiSalesSummary"
              },
              {
                "id": "mol_actionBar",
                "type": "actionBar",
                "order": 20,
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act_runAiSalesSummary",
                    "action": "aiSalesSummary",
                    "labelKey": "action.aiSalesSummary.run",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "aiSalesSummary"
                  }
                ],
                "stateKey": "ui.aiSalesSummary.data.aiSalesSummary"
              },
              {
                "id": "mol_summaryPanel",
                "type": "summaryPanel",
                "order": 30,
                "fields": [
                  {
                    "id": "fld_out_dailyShiftId",
                    "field": "dailyShiftId",
                    "labelKey": "field.dailyShiftId.label",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "source": "Order.dailyShiftId",
                    "stateKey": "ui.aiSalesSummary.input.aiSalesSummary.dailyShiftId"
                  },
                  {
                    "id": "fld_out_status",
                    "field": "status",
                    "labelKey": "field.status.label",
                    "order": 20,
                    "required": false,
                    "inputType": "text",
                    "source": "Order.status",
                    "stateKey": "ui.aiSalesSummary.input.aiSalesSummary.status"
                  },
                  {
                    "id": "fld_out_totalAmount",
                    "field": "totalAmount",
                    "labelKey": "field.totalAmount.label",
                    "order": 30,
                    "required": false,
                    "inputType": "text",
                    "format": "money",
                    "source": "Order.totalAmount",
                    "stateKey": "ui.aiSalesSummary.input.aiSalesSummary.totalAmount"
                  },
                  {
                    "id": "fld_out_closedAt",
                    "field": "closedAt",
                    "labelKey": "field.closedAt.label",
                    "order": 40,
                    "required": false,
                    "inputType": "text",
                    "format": "datetime",
                    "source": "Order.closedAt",
                    "stateKey": "ui.aiSalesSummary.input.aiSalesSummary.closedAt"
                  }
                ],
                "columns": [],
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
  "i18n": {
    "page.aiSalesSummary.title": "Assistente IA: resumo de vendas do dia",
    "organism.aiSalesSummary.title": "Resumo de Vendas por IA",
    "field.dailyShiftId.label": "Turno diário",
    "field.status.label": "Status do pedido",
    "field.closedAt.label": "Data de fechamento",
    "field.totalAmount.label": "Valor total",
    "action.aiSalesSummary.run": "Gerar resumo de vendas",
    "summary.aiSalesSummary.empty": "Nenhum resumo gerado ainda. Ajuste os filtros e clique em \"Gerar resumo de vendas\"."
  },
  "dataBindings": [
    {
      "id": "bind_aiSalesSummary",
      "source": "bff",
      "entity": "Order",
      "command": "aiSalesSummary",
      "description": "Consulta IA para resumo de vendas do dia filtrando por turno, status e data de fechamento",
      "stateKey": "ui.aiSalesSummary.data.aiSalesSummary",
      "inputStateKeys": [
        "ui.aiSalesSummary.input.aiSalesSummary.dailyShiftId",
        "ui.aiSalesSummary.input.aiSalesSummary.status",
        "ui.aiSalesSummary.input.aiSalesSummary.closedAt"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "aiSalesSummary__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/aiSalesSummary.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/aiSalesSummary.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/aiSalesSummary.ts",
      "_102050_/l2/cafeFlow/web/contracts/aiSalesSummary.ts"
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
