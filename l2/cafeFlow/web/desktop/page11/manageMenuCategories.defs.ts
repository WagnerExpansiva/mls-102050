/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/manageMenuCategories.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "manageMenuCategories",
  "pageName": "Gerenciar categorias do cardápio",
  "actor": "manager",
  "purpose": "Executar Gerenciar categorias do cardápio.",
  "capabilities": [
    "manageMenuCategories"
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
      "id": "sec_manage_menu_categories",
      "type": "section",
      "sectionName": "Gerenciar categorias do cardápio",
      "titleKey": "manageMenuCategories.section.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org_manage_menu_categories",
          "type": "form",
          "organismName": "ManageMenuCategories",
          "titleKey": "manageMenuCategories.organism.title",
          "purpose": "Gerenciar categorias do cardápio",
          "userActions": [
            "manageMenuCategories"
          ],
          "requiredEntities": [
            "MenuCategory"
          ],
          "readsFields": [],
          "writesFields": [
            "menuCategoryId",
            "name",
            "description",
            "status"
          ],
          "rulesApplied": [],
          "order": 10,
          "intentionRefs": [
            {
              "id": "int_manage_menu_categories_form",
              "intent": "commandForm",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "manageMenuCategories.layout",
    "type": "page",
    "sections": [
      {
        "id": "sec_manage_menu_categories",
        "type": "section",
        "sectionName": "Gerenciar categorias do cardápio",
        "titleKey": "manageMenuCategories.section.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org_manage_menu_categories",
            "type": "form",
            "organismName": "ManageMenuCategories",
            "titleKey": "manageMenuCategories.organism.title",
            "purpose": "Gerenciar categorias do cardápio",
            "userActions": [
              "manageMenuCategories"
            ],
            "requiredEntities": [
              "MenuCategory"
            ],
            "readsFields": [],
            "writesFields": [
              "menuCategoryId",
              "name",
              "description",
              "status"
            ],
            "rulesApplied": [],
            "order": 10,
            "intentions": [
              {
                "id": "int_manage_menu_categories_form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "manageMenuCategories.form.title",
                "fields": [
                  {
                    "id": "fld_menuCategoryId",
                    "field": "menuCategoryId",
                    "labelKey": "manageMenuCategories.field.menuCategoryId",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.manageMenuCategories.input.manageMenuCategories.menuCategoryId"
                  },
                  {
                    "id": "fld_name",
                    "field": "name",
                    "labelKey": "manageMenuCategories.field.name",
                    "order": 20,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.manageMenuCategories.input.manageMenuCategories.name"
                  },
                  {
                    "id": "fld_description",
                    "field": "description",
                    "labelKey": "manageMenuCategories.field.description",
                    "order": 30,
                    "required": false,
                    "inputType": "textarea",
                    "stateKey": "ui.manageMenuCategories.input.manageMenuCategories.description"
                  },
                  {
                    "id": "fld_status",
                    "field": "status",
                    "labelKey": "manageMenuCategories.field.status",
                    "order": 40,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.manageMenuCategories.input.manageMenuCategories.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act_manage_menu_categories_submit",
                    "action": "manageMenuCategories",
                    "labelKey": "manageMenuCategories.action.submit",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "manageMenuCategories"
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
    "id": "manageMenuCategories__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/manageMenuCategories.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/manageMenuCategories.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/manageMenuCategories.defs.ts",
      "_102050_/l2/cafeFlow/web/shared/manageMenuCategories.ts",
      "_102050_/l2/cafeFlow/web/contracts/manageMenuCategories.defs.ts",
      "_102050_/l2/cafeFlow/web/contracts/manageMenuCategories.ts"
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
