/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/manageMenuItems.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "manageMenuItems",
  "pageName": "Gerenciar itens do cardápio",
  "actor": "manager",
  "purpose": "Executar Gerenciar itens do cardápio.",
  "capabilities": [
    "manageMenuItems"
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
      "id": "section.manageMenuItems",
      "type": "section",
      "sectionName": "Gerenciar itens do cardápio",
      "titleKey": "manageMenuItems.section.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "organism.manageMenuItems",
          "type": "form",
          "organismName": "ManageMenuItems",
          "titleKey": "manageMenuItems.organism.title",
          "purpose": "Gerenciar itens do cardápio",
          "userActions": [
            "manageMenuItems"
          ],
          "requiredEntities": [
            "MenuItem",
            "MenuCategory"
          ],
          "readsFields": [
            "menuItemId",
            "menuCategoryId",
            "name",
            "description",
            "price",
            "status"
          ],
          "writesFields": [
            "menuItemId",
            "menuCategoryId",
            "name",
            "description",
            "price",
            "status"
          ],
          "rulesApplied": [
            "aiOutputLanguageSelection"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intention.manageMenuItems.form",
              "intent": "commandForm",
              "order": 10
            },
            {
              "id": "intention.manageMenuItems.actions",
              "intent": "actionList",
              "order": 20
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "manageMenuItems.layout",
    "type": "page",
    "sections": [
      {
        "id": "section.manageMenuItems",
        "type": "section",
        "sectionName": "Gerenciar itens do cardápio",
        "titleKey": "manageMenuItems.section.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "organism.manageMenuItems",
            "type": "form",
            "organismName": "ManageMenuItems",
            "titleKey": "manageMenuItems.organism.title",
            "purpose": "Gerenciar itens do cardápio",
            "userActions": [
              "manageMenuItems"
            ],
            "requiredEntities": [
              "MenuItem",
              "MenuCategory"
            ],
            "readsFields": [
              "menuItemId",
              "menuCategoryId",
              "name",
              "description",
              "price",
              "status"
            ],
            "writesFields": [
              "menuItemId",
              "menuCategoryId",
              "name",
              "description",
              "price",
              "status"
            ],
            "rulesApplied": [
              "aiOutputLanguageSelection"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intention.manageMenuItems.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "manageMenuItems.form.title",
                "fields": [
                  {
                    "id": "field.menuItemId",
                    "field": "menuItemId",
                    "labelKey": "manageMenuItems.field.menuItemId",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.manageMenuItems.input.manageMenuItems.menuItemId"
                  },
                  {
                    "id": "field.menuCategoryId",
                    "field": "menuCategoryId",
                    "labelKey": "manageMenuItems.field.menuCategoryId",
                    "order": 20,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.manageMenuItems.input.manageMenuItems.menuCategoryId"
                  },
                  {
                    "id": "field.name",
                    "field": "name",
                    "labelKey": "manageMenuItems.field.name",
                    "order": 30,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.manageMenuItems.input.manageMenuItems.name"
                  },
                  {
                    "id": "field.description",
                    "field": "description",
                    "labelKey": "manageMenuItems.field.description",
                    "order": 40,
                    "required": false,
                    "inputType": "textarea",
                    "stateKey": "ui.manageMenuItems.input.manageMenuItems.description"
                  },
                  {
                    "id": "field.price",
                    "field": "price",
                    "labelKey": "manageMenuItems.field.price",
                    "order": 50,
                    "required": true,
                    "inputType": "money",
                    "stateKey": "ui.manageMenuItems.input.manageMenuItems.price"
                  },
                  {
                    "id": "field.status",
                    "field": "status",
                    "labelKey": "manageMenuItems.field.status",
                    "order": 60,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.manageMenuItems.input.manageMenuItems.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "intention.manageMenuItems.actions",
                "intent": "actionList",
                "order": 20,
                "titleKey": "manageMenuItems.actions.title",
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action.manageMenuItems.submit",
                    "action": "manageMenuItems",
                    "labelKey": "manageMenuItems.action.submit",
                    "order": 10,
                    "actionKey": "manageMenuItems"
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
    "id": "manageMenuItems__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/manageMenuItems.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/manageMenuItems.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/manageMenuItems.defs.ts",
      "_102050_/l2/cafeFlow/web/shared/manageMenuItems.ts",
      "_102050_/l2/cafeFlow/web/contracts/manageMenuItems.defs.ts",
      "_102050_/l2/cafeFlow/web/contracts/manageMenuItems.ts"
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
