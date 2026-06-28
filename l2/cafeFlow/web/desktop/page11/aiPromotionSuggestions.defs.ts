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
      "id": "sec-aiPromotionSuggestions-main",
      "type": "section",
      "sectionName": "Assistente IA: sugestões de itens para promover (últimos 7 dias)",
      "titleKey": "aiPromotionSuggestions.section.main.title",
      "mode": "view",
      "order": 10,
      "organisms": [
        {
          "id": "org-aiPromotionSuggestions",
          "type": "data",
          "organismName": "AiPromotionSuggestions",
          "titleKey": "aiPromotionSuggestions.organism.main.title",
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
              "id": "int-aiPromotionSuggestions-query",
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
        "id": "sec-aiPromotionSuggestions-main",
        "type": "section",
        "sectionName": "Assistente IA: sugestões de itens para promover (últimos 7 dias)",
        "titleKey": "aiPromotionSuggestions.section.main.title",
        "mode": "view",
        "order": 10,
        "organisms": [
          {
            "id": "org-aiPromotionSuggestions",
            "type": "data",
            "organismName": "AiPromotionSuggestions",
            "titleKey": "aiPromotionSuggestions.organism.main.title",
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
                "id": "int-aiPromotionSuggestions-query",
                "intent": "queryList",
                "order": 10,
                "titleKey": "aiPromotionSuggestions.intent.query.title",
                "action": "aiPromotionSuggestions",
                "submitAction": "aiPromotionSuggestions",
                "fields": [],
                "columns": [
                  {
                    "id": "col-orderItem-id",
                    "field": "id",
                    "labelKey": "aiPromotionSuggestions.field.id.label",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.aiPromotionSuggestions.data.aiPromotionSuggestions"
                  },
                  {
                    "id": "col-orderItem-orderId",
                    "field": "orderId",
                    "labelKey": "aiPromotionSuggestions.field.orderId.label",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.aiPromotionSuggestions.data.aiPromotionSuggestions"
                  },
                  {
                    "id": "col-orderItem-menuItemId",
                    "field": "menuItemId",
                    "labelKey": "aiPromotionSuggestions.field.menuItemId.label",
                    "order": 30,
                    "required": false,
                    "stateKey": "ui.aiPromotionSuggestions.data.aiPromotionSuggestions"
                  },
                  {
                    "id": "col-orderItem-kitchenTicketId",
                    "field": "kitchenTicketId",
                    "labelKey": "aiPromotionSuggestions.field.kitchenTicketId.label",
                    "order": 40,
                    "required": false,
                    "stateKey": "ui.aiPromotionSuggestions.data.aiPromotionSuggestions"
                  },
                  {
                    "id": "col-orderItem-quantity",
                    "field": "quantity",
                    "labelKey": "aiPromotionSuggestions.field.quantity.label",
                    "order": 50,
                    "required": false,
                    "stateKey": "ui.aiPromotionSuggestions.data.aiPromotionSuggestions"
                  },
                  {
                    "id": "col-orderItem-unitPrice",
                    "field": "unitPrice",
                    "labelKey": "aiPromotionSuggestions.field.unitPrice.label",
                    "order": 60,
                    "required": false,
                    "stateKey": "ui.aiPromotionSuggestions.data.aiPromotionSuggestions"
                  },
                  {
                    "id": "col-orderItem-totalPrice",
                    "field": "totalPrice",
                    "labelKey": "aiPromotionSuggestions.field.totalPrice.label",
                    "order": 70,
                    "required": false,
                    "stateKey": "ui.aiPromotionSuggestions.data.aiPromotionSuggestions"
                  },
                  {
                    "id": "col-orderItem-observations",
                    "field": "observations",
                    "labelKey": "aiPromotionSuggestions.field.observations.label",
                    "order": 80,
                    "required": false,
                    "stateKey": "ui.aiPromotionSuggestions.data.aiPromotionSuggestions"
                  }
                ],
                "filters": [
                  {
                    "id": "flt-orderItem-id",
                    "field": "id",
                    "labelKey": "aiPromotionSuggestions.filter.id.label",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.id"
                  },
                  {
                    "id": "flt-orderItem-orderId",
                    "field": "orderId",
                    "labelKey": "aiPromotionSuggestions.filter.orderId.label",
                    "order": 20,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.orderId"
                  },
                  {
                    "id": "flt-orderItem-menuItemId",
                    "field": "menuItemId",
                    "labelKey": "aiPromotionSuggestions.filter.menuItemId.label",
                    "order": 30,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.menuItemId"
                  },
                  {
                    "id": "flt-orderItem-kitchenTicketId",
                    "field": "kitchenTicketId",
                    "labelKey": "aiPromotionSuggestions.filter.kitchenTicketId.label",
                    "order": 40,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.kitchenTicketId"
                  },
                  {
                    "id": "flt-orderItem-status",
                    "field": "status",
                    "labelKey": "aiPromotionSuggestions.filter.status.label",
                    "order": 50,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.status"
                  },
                  {
                    "id": "flt-orderItem-createdAt",
                    "field": "createdAt",
                    "labelKey": "aiPromotionSuggestions.filter.createdAt.label",
                    "order": 60,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.createdAt"
                  }
                ],
                "toolbar": [
                  {
                    "id": "tb-aiPromotionSuggestions-run",
                    "action": "aiPromotionSuggestions",
                    "labelKey": "aiPromotionSuggestions.action.run.label",
                    "order": 10,
                    "actionKey": "aiPromotionSuggestions"
                  }
                ],
                "rowActions": [],
                "actions": [],
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
