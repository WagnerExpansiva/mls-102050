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
      "id": "sec-aiPromotionSuggestions",
      "type": "section",
      "sectionName": "AiPromotionSuggestions",
      "titleKey": "section.aiPromotionSuggestions.title",
      "mode": "view",
      "order": 10,
      "organisms": [
        {
          "id": "org-aiPromotionSuggestions",
          "type": "view",
          "organismName": "AiPromotionSuggestions",
          "titleKey": "organism.aiPromotionSuggestions.title",
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
          "moleculeRefs": [
            {
              "id": "mol-aiPromotionSuggestions-action",
              "type": "actionBar",
              "stateKey": "ui.aiPromotionSuggestions.data.aiPromotionSuggestions",
              "order": 10
            },
            {
              "id": "mol-aiPromotionSuggestions-table",
              "type": "groupviewtable.mlDataTable",
              "stateKey": "ui.aiPromotionSuggestions.data.aiPromotionSuggestions",
              "order": 20
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "layout-aiPromotionSuggestions",
    "type": "page",
    "sections": [
      {
        "id": "sec-aiPromotionSuggestions",
        "type": "section",
        "sectionName": "AiPromotionSuggestions",
        "titleKey": "section.aiPromotionSuggestions.title",
        "mode": "view",
        "order": 10,
        "organisms": [
          {
            "id": "org-aiPromotionSuggestions",
            "type": "view",
            "organismName": "AiPromotionSuggestions",
            "titleKey": "organism.aiPromotionSuggestions.title",
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
            "molecules": [
              {
                "id": "mol-aiPromotionSuggestions-action",
                "type": "actionBar",
                "order": 10,
                "titleKey": "molecule.actionBar.title",
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-aiPromotionSuggestions",
                    "action": "aiPromotionSuggestions",
                    "labelKey": "action.aiPromotionSuggestions.label",
                    "order": 10,
                    "actionKey": "aiPromotionSuggestions"
                  }
                ],
                "stateKey": "ui.aiPromotionSuggestions.data.aiPromotionSuggestions"
              },
              {
                "id": "mol-aiPromotionSuggestions-table",
                "type": "groupviewtable.mlDataTable",
                "order": 20,
                "titleKey": "molecule.table.title",
                "emptyKey": "table.aiPromotionSuggestions.empty",
                "stateKey": "ui.aiPromotionSuggestions.data.aiPromotionSuggestions",
                "fields": [],
                "columns": [
                  {
                    "id": "col-id",
                    "field": "id",
                    "labelKey": "column.id",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.aiPromotionSuggestions.data.aiPromotionSuggestions"
                  },
                  {
                    "id": "col-orderId",
                    "field": "orderId",
                    "labelKey": "column.orderId",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.aiPromotionSuggestions.data.aiPromotionSuggestions"
                  },
                  {
                    "id": "col-menuItemId",
                    "field": "menuItemId",
                    "labelKey": "column.menuItemId",
                    "order": 30,
                    "required": false,
                    "stateKey": "ui.aiPromotionSuggestions.data.aiPromotionSuggestions"
                  },
                  {
                    "id": "col-kitchenTicketId",
                    "field": "kitchenTicketId",
                    "labelKey": "column.kitchenTicketId",
                    "order": 40,
                    "required": false,
                    "stateKey": "ui.aiPromotionSuggestions.data.aiPromotionSuggestions"
                  },
                  {
                    "id": "col-quantity",
                    "field": "quantity",
                    "labelKey": "column.quantity",
                    "order": 50,
                    "required": false,
                    "format": "number",
                    "stateKey": "ui.aiPromotionSuggestions.data.aiPromotionSuggestions"
                  },
                  {
                    "id": "col-unitPrice",
                    "field": "unitPrice",
                    "labelKey": "column.unitPrice",
                    "order": 60,
                    "required": false,
                    "format": "money",
                    "stateKey": "ui.aiPromotionSuggestions.data.aiPromotionSuggestions"
                  },
                  {
                    "id": "col-totalPrice",
                    "field": "totalPrice",
                    "labelKey": "column.totalPrice",
                    "order": 70,
                    "required": false,
                    "format": "money",
                    "stateKey": "ui.aiPromotionSuggestions.data.aiPromotionSuggestions"
                  },
                  {
                    "id": "col-observations",
                    "field": "observations",
                    "labelKey": "column.observations",
                    "order": 80,
                    "required": false,
                    "stateKey": "ui.aiPromotionSuggestions.data.aiPromotionSuggestions"
                  }
                ],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              }
            ]
          }
        ]
      }
    ]
  },
  "i18n": {
    "section.aiPromotionSuggestions.title": "Assistente IA: sugestões de itens para promover (últimos 7 dias)",
    "organism.aiPromotionSuggestions.title": "Sugestões de Promoção com IA",
    "molecule.actionBar.title": "Ações",
    "action.aiPromotionSuggestions.label": "Gerar Sugestões com IA",
    "molecule.table.title": "Itens Sugeridos para Promoção",
    "table.aiPromotionSuggestions.empty": "Nenhuma sugestão gerada. Clique no botão acima para analisar os últimos 7 dias.",
    "column.id": "ID",
    "column.orderId": "Pedido",
    "column.menuItemId": "Item do Cardápio",
    "column.kitchenTicketId": "Ticket Cozinha",
    "column.quantity": "Quantidade",
    "column.unitPrice": "Preço Unitário",
    "column.totalPrice": "Preço Total",
    "column.observations": "Observações"
  },
  "dataBindings": [
    {
      "id": "bind-aiPromotionSuggestions",
      "source": "command",
      "command": "aiPromotionSuggestions",
      "description": "AI promotion suggestions result set",
      "stateKey": "ui.aiPromotionSuggestions.data.aiPromotionSuggestions",
      "inputStateKeys": [
        "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.id",
        "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.orderId",
        "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.menuItemId",
        "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.kitchenTicketId",
        "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.status",
        "ui.aiPromotionSuggestions.input.aiPromotionSuggestions.createdAt"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "aiPromotionSuggestions__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/aiPromotionSuggestions.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/aiPromotionSuggestions.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/aiPromotionSuggestions.ts",
      "_102050_/l2/cafeFlow/web/contracts/aiPromotionSuggestions.ts"
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
