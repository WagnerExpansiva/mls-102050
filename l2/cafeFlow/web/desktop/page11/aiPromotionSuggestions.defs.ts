/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/aiPromotionSuggestions.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "aiPromotionSuggestions",
  "pageName": "Assistente IA: sugestões de itens para promover (últimos 7 dias)",
  "actor": "manager",
  "purpose": "Executar Assistente IA: sugestões de itens para promover (últimos 7 dias).",
  "capabilities": [
    "aiPromotionSuggestions"
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
      "id": "sec-ai-promo",
      "type": "section",
      "sectionName": "Assistente IA: sugestões de itens para promover (últimos 7 dias)",
      "titleKey": "aiPromotionSuggestions.section.title",
      "mode": "view",
      "order": 10,
      "organisms": [
        {
          "id": "org-ai-promo",
          "type": "organism",
          "organismName": "AiPromotionSuggestions",
          "titleKey": "aiPromotionSuggestions.organism.title",
          "purpose": "Assistente IA: sugestões de itens para promover (últimos 7 dias)",
          "userActions": [
            "aiPromotionSuggestions"
          ],
          "requiredEntities": [
            "OrderItem",
            "Order",
            "MenuItem"
          ],
          "readsFields": [
            "id",
            "orderId",
            "menuItemId",
            "kitchenTicketId",
            "status",
            "createdAt",
            "quantity",
            "unitPrice",
            "totalPrice",
            "observations"
          ],
          "writesFields": [],
          "rulesApplied": [],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent-ai-promo-query",
              "intent": "queryList",
              "stateKey": "ui.aiPromotionSuggestions.data.aiPromotionSuggestions",
              "action": "aiPromotionSuggestions",
              "submitAction": "aiPromotionSuggestions",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "aiPromotionSuggestions.layout",
    "type": "page",
    "sections": [
      {
        "id": "sec-ai-promo",
        "type": "section",
        "sectionName": "Assistente IA: sugestões de itens para promover (últimos 7 dias)",
        "titleKey": "aiPromotionSuggestions.section.title",
        "mode": "view",
        "order": 10,
        "organisms": [
          {
            "id": "org-ai-promo",
            "type": "organism",
            "organismName": "AiPromotionSuggestions",
            "titleKey": "aiPromotionSuggestions.organism.title",
            "purpose": "Assistente IA: sugestões de itens para promover (últimos 7 dias)",
            "userActions": [
              "aiPromotionSuggestions"
            ],
            "requiredEntities": [
              "OrderItem",
              "Order",
              "MenuItem"
            ],
            "readsFields": [
              "id",
              "orderId",
              "menuItemId",
              "kitchenTicketId",
              "status",
              "createdAt",
              "quantity",
              "unitPrice",
              "totalPrice",
              "observations"
            ],
            "writesFields": [],
            "rulesApplied": [],
            "order": 10,
            "intentions": [
              {
                "id": "intent-ai-promo-query",
                "intent": "queryList",
                "order": 10,
                "titleKey": "aiPromotionSuggestions.intent.query.title",
                "action": "aiPromotionSuggestions",
                "submitAction": "aiPromotionSuggestions",
                "fields": [],
                "columns": [
                  {
                    "id": "col-id",
                    "field": "id",
                    "labelKey": "aiPromotionSuggestions.field.id",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.aiPromotionSuggestions.data.aiPromotionSuggestions"
                  },
                  {
                    "id": "col-orderId",
                    "field": "orderId",
                    "labelKey": "aiPromotionSuggestions.field.orderId",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.aiPromotionSuggestions.data.aiPromotionSuggestions"
                  },
                  {
                    "id": "col-menuItemId",
                    "field": "menuItemId",
                    "labelKey": "aiPromotionSuggestions.field.menuItemId",
                    "order": 30,
                    "required": false,
                    "stateKey": "ui.aiPromotionSuggestions.data.aiPromotionSuggestions"
                  },
                  {
                    "id": "col-kitchenTicketId",
                    "field": "kitchenTicketId",
                    "labelKey": "aiPromotionSuggestions.field.kitchenTicketId",
                    "order": 40,
                    "required": false,
                    "stateKey": "ui.aiPromotionSuggestions.data.aiPromotionSuggestions"
                  },
                  {
                    "id": "col-quantity",
                    "field": "quantity",
                    "labelKey": "aiPromotionSuggestions.field.quantity",
                    "order": 50,
                    "required": false,
                    "stateKey": "ui.aiPromotionSuggestions.data.aiPromotionSuggestions"
                  },
                  {
                    "id": "col-unitPrice",
                    "field": "unitPrice",
                    "labelKey": "aiPromotionSuggestions.field.unitPrice",
                    "order": 60,
                    "required": false,
                    "stateKey": "ui.aiPromotionSuggestions.data.aiPromotionSuggestions"
                  },
                  {
                    "id": "col-totalPrice",
                    "field": "totalPrice",
                    "labelKey": "aiPromotionSuggestions.field.totalPrice",
                    "order": 70,
                    "required": false,
                    "stateKey": "ui.aiPromotionSuggestions.data.aiPromotionSuggestions"
                  },
                  {
                    "id": "col-observations",
                    "field": "observations",
                    "labelKey": "aiPromotionSuggestions.field.observations",
                    "order": 80,
                    "required": false,
                    "stateKey": "ui.aiPromotionSuggestions.data.aiPromotionSuggestions"
                  }
                ],
                "filters": [
                  {
                    "id": "filter-id",
                    "field": "id",
                    "labelKey": "aiPromotionSuggestions.filter.id",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.id"
                  },
                  {
                    "id": "filter-orderId",
                    "field": "orderId",
                    "labelKey": "aiPromotionSuggestions.filter.orderId",
                    "order": 20,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.orderId"
                  },
                  {
                    "id": "filter-menuItemId",
                    "field": "menuItemId",
                    "labelKey": "aiPromotionSuggestions.filter.menuItemId",
                    "order": 30,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.menuItemId"
                  },
                  {
                    "id": "filter-kitchenTicketId",
                    "field": "kitchenTicketId",
                    "labelKey": "aiPromotionSuggestions.filter.kitchenTicketId",
                    "order": 40,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.kitchenTicketId"
                  },
                  {
                    "id": "filter-status",
                    "field": "status",
                    "labelKey": "aiPromotionSuggestions.filter.status",
                    "order": 50,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.status"
                  },
                  {
                    "id": "filter-createdAt",
                    "field": "createdAt",
                    "labelKey": "aiPromotionSuggestions.filter.createdAt",
                    "order": 60,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.createdAt"
                  }
                ],
                "toolbar": [
                  {
                    "id": "tb-run",
                    "action": "aiPromotionSuggestions",
                    "labelKey": "aiPromotionSuggestions.action.run",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "aiPromotionSuggestions"
                  }
                ],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-run",
                    "action": "aiPromotionSuggestions",
                    "labelKey": "aiPromotionSuggestions.action.run",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "aiPromotionSuggestions"
                  }
                ],
                "stateKey": "ui.aiPromotionSuggestions.data.aiPromotionSuggestions"
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
    "id": "aiPromotionSuggestions__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/aiPromotionSuggestions.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/aiPromotionSuggestions.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/aiPromotionSuggestions.defs.ts",
      "_102050_/l2/cafeFlow/web/shared/aiPromotionSuggestions.ts",
      "_102050_/l2/cafeFlow/web/contracts/aiPromotionSuggestions.defs.ts",
      "_102050_/l2/cafeFlow/web/contracts/aiPromotionSuggestions.ts"
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
