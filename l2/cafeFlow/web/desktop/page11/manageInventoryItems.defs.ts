/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/manageInventoryItems.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "manageInventoryItems",
  "pageName": "Gerenciar itens de estoque (ingredientes)",
  "actor": "manager",
  "purpose": "Executar Gerenciar itens de estoque (ingredientes).",
  "capabilities": [
    "manageInventoryItems"
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
      "id": "section.manageInventoryItems.main",
      "type": "section",
      "sectionName": "Gerenciar itens de estoque (ingredientes)",
      "titleKey": "manageInventoryItems.section.main.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "organism.manageInventoryItems.form",
          "type": "organism",
          "organismName": "ManageInventoryItems",
          "titleKey": "manageInventoryItems.organism.form.title",
          "purpose": "Gerenciar itens de estoque (ingredientes)",
          "userActions": [
            "manageInventoryItems"
          ],
          "requiredEntities": [
            "InventoryItem"
          ],
          "readsFields": [],
          "writesFields": [
            "InventoryItem.name",
            "InventoryItem.description",
            "InventoryItem.unit",
            "InventoryItem.currentQuantity",
            "InventoryItem.minimumLevel",
            "InventoryItem.status"
          ],
          "rulesApplied": [
            "inventoryLowStockThreshold",
            "ingredientConsumptionTrigger"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intention.manageInventoryItems.commandForm",
              "intent": "commandForm",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "manageInventoryItems.layout",
    "type": "page",
    "sections": [
      {
        "id": "section.manageInventoryItems.main",
        "type": "section",
        "sectionName": "Gerenciar itens de estoque (ingredientes)",
        "titleKey": "manageInventoryItems.section.main.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "organism.manageInventoryItems.form",
            "type": "organism",
            "organismName": "ManageInventoryItems",
            "titleKey": "manageInventoryItems.organism.form.title",
            "purpose": "Gerenciar itens de estoque (ingredientes)",
            "userActions": [
              "manageInventoryItems"
            ],
            "requiredEntities": [
              "InventoryItem"
            ],
            "readsFields": [],
            "writesFields": [
              "InventoryItem.name",
              "InventoryItem.description",
              "InventoryItem.unit",
              "InventoryItem.currentQuantity",
              "InventoryItem.minimumLevel",
              "InventoryItem.status"
            ],
            "rulesApplied": [
              "inventoryLowStockThreshold",
              "ingredientConsumptionTrigger"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intention.manageInventoryItems.commandForm",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "manageInventoryItems.intention.commandForm.title",
                "fields": [
                  {
                    "id": "field.manageInventoryItems.name",
                    "field": "InventoryItem.name",
                    "labelKey": "manageInventoryItems.field.name.label",
                    "order": 10,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.manageInventoryItems.input.manageInventoryItems.InventoryItem.name"
                  },
                  {
                    "id": "field.manageInventoryItems.description",
                    "field": "InventoryItem.description",
                    "labelKey": "manageInventoryItems.field.description.label",
                    "order": 20,
                    "required": false,
                    "inputType": "textarea",
                    "stateKey": "ui.manageInventoryItems.input.manageInventoryItems.InventoryItem.description"
                  },
                  {
                    "id": "field.manageInventoryItems.unit",
                    "field": "InventoryItem.unit",
                    "labelKey": "manageInventoryItems.field.unit.label",
                    "order": 30,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.manageInventoryItems.input.manageInventoryItems.InventoryItem.unit"
                  },
                  {
                    "id": "field.manageInventoryItems.currentQuantity",
                    "field": "InventoryItem.currentQuantity",
                    "labelKey": "manageInventoryItems.field.currentQuantity.label",
                    "order": 40,
                    "required": true,
                    "inputType": "number",
                    "stateKey": "ui.manageInventoryItems.input.manageInventoryItems.InventoryItem.currentQuantity"
                  },
                  {
                    "id": "field.manageInventoryItems.minimumLevel",
                    "field": "InventoryItem.minimumLevel",
                    "labelKey": "manageInventoryItems.field.minimumLevel.label",
                    "order": 50,
                    "required": true,
                    "inputType": "number",
                    "stateKey": "ui.manageInventoryItems.input.manageInventoryItems.InventoryItem.minimumLevel"
                  },
                  {
                    "id": "field.manageInventoryItems.status",
                    "field": "InventoryItem.status",
                    "labelKey": "manageInventoryItems.field.status.label",
                    "order": 60,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.manageInventoryItems.input.manageInventoryItems.InventoryItem.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action.manageInventoryItems.submit",
                    "action": "manageInventoryItems",
                    "labelKey": "manageInventoryItems.action.submit.label",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "manageInventoryItems"
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
    "id": "manageInventoryItems__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/manageInventoryItems.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/manageInventoryItems.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/manageInventoryItems.defs.ts",
      "_102050_/l2/cafeFlow/web/shared/manageInventoryItems.ts",
      "_102050_/l2/cafeFlow/web/contracts/manageInventoryItems.defs.ts",
      "_102050_/l2/cafeFlow/web/contracts/manageInventoryItems.ts"
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
