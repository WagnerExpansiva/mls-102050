/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/consumeIngredientsOnConfirmation.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "consumeIngredientsOnConfirmation",
  "pageName": "Baixar estoque por consumo de ingredientes",
  "actor": "attendant",
  "purpose": "Executar Baixar estoque por consumo de ingredientes.",
  "capabilities": [
    "consumeIngredientsOnConfirmation"
  ],
  "flowRefs": {
    "experienceFlows": [
      "consumeIngredientsOnConfirmation"
    ],
    "entityLifecycles": [],
    "taskWorkflows": [
      "consumeIngredientsOnConfirmation"
    ],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section.consumeIngredientsOnConfirmation.main",
      "type": "section",
      "sectionName": "Baixar estoque por consumo de ingredientes",
      "titleKey": "consumeIngredientsOnConfirmation.section.main.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "organism.createStockConsumption",
          "type": "form",
          "organismName": "CreateStockConsumption",
          "titleKey": "consumeIngredientsOnConfirmation.organism.createStockConsumption.title",
          "purpose": "Registrar consumo de estoque",
          "userActions": [
            "createStockConsumption"
          ],
          "requiredEntities": [
            "StockConsumption",
            "Order",
            "OrderItem",
            "MenuItem",
            "RecipeComponent",
            "InventoryItem"
          ],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "ingredientConsumptionTrigger"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intention.createStockConsumption.commandForm",
              "intent": "commandForm",
              "action": "createStockConsumption",
              "submitAction": "createStockConsumption",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "consumeIngredientsOnConfirmation.layout",
    "type": "page",
    "sections": [
      {
        "id": "section.consumeIngredientsOnConfirmation.main",
        "type": "section",
        "sectionName": "Baixar estoque por consumo de ingredientes",
        "titleKey": "consumeIngredientsOnConfirmation.section.main.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "organism.createStockConsumption",
            "type": "form",
            "organismName": "CreateStockConsumption",
            "titleKey": "consumeIngredientsOnConfirmation.organism.createStockConsumption.title",
            "purpose": "Registrar consumo de estoque",
            "userActions": [
              "createStockConsumption"
            ],
            "requiredEntities": [
              "StockConsumption",
              "Order",
              "OrderItem",
              "MenuItem",
              "RecipeComponent",
              "InventoryItem"
            ],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "ingredientConsumptionTrigger"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intention.createStockConsumption.commandForm",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "consumeIngredientsOnConfirmation.intention.createStockConsumption.title",
                "action": "createStockConsumption",
                "submitAction": "createStockConsumption",
                "fields": [
                  {
                    "id": "field.quantity",
                    "field": "quantity",
                    "labelKey": "consumeIngredientsOnConfirmation.field.quantity.label",
                    "order": 10,
                    "required": true,
                    "inputType": "number",
                    "stateKey": "ui.consumeIngredientsOnConfirmation.input.createStockConsumption.quantity"
                  },
                  {
                    "id": "field.status",
                    "field": "status",
                    "labelKey": "consumeIngredientsOnConfirmation.field.status.label",
                    "order": 20,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.consumeIngredientsOnConfirmation.input.createStockConsumption.status"
                  },
                  {
                    "id": "field.consumedAt",
                    "field": "consumedAt",
                    "labelKey": "consumeIngredientsOnConfirmation.field.consumedAt.label",
                    "order": 30,
                    "required": true,
                    "inputType": "datetime",
                    "stateKey": "ui.consumeIngredientsOnConfirmation.input.createStockConsumption.consumedAt"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action.createStockConsumption.submit",
                    "action": "createStockConsumption",
                    "labelKey": "consumeIngredientsOnConfirmation.action.createStockConsumption.label",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "createStockConsumption"
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
    "id": "consumeIngredientsOnConfirmation__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/consumeIngredientsOnConfirmation.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/consumeIngredientsOnConfirmation.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/consumeIngredientsOnConfirmation.defs.ts",
      "_102050_/l2/cafeFlow/web/shared/consumeIngredientsOnConfirmation.ts",
      "_102050_/l2/cafeFlow/web/contracts/consumeIngredientsOnConfirmation.defs.ts",
      "_102050_/l2/cafeFlow/web/contracts/consumeIngredientsOnConfirmation.ts"
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
