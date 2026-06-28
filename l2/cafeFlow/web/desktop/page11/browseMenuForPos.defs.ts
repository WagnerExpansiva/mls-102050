/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/browseMenuForPos.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "browseMenuForPos",
  "pageName": "Consultar cardápio no POS",
  "actor": "attendant",
  "purpose": "Executar Consultar cardápio no POS.",
  "capabilities": [
    "browseMenuForPos"
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
      "id": "section.menu",
      "type": "section",
      "sectionName": "Consultar cardápio no POS",
      "titleKey": "browseMenuForPos.section.menu.title",
      "mode": "view",
      "order": 10,
      "organisms": [
        {
          "id": "organism.menu.browse",
          "type": "organism",
          "organismName": "BrowseMenuForPos",
          "titleKey": "browseMenuForPos.organism.menu.title",
          "purpose": "Consultar cardápio no POS",
          "userActions": [
            "browseMenuForPos"
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
            "status",
            "createdAt",
            "updatedAt"
          ],
          "writesFields": [],
          "rulesApplied": [
            "aiOutputLanguageSelection"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intention.menu.list",
              "intent": "queryList",
              "stateKey": "ui.browseMenuForPos.data.browseMenuForPos",
              "action": "browseMenuForPos",
              "submitAction": "browseMenuForPos",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "browseMenuForPos.layout",
    "type": "page",
    "sections": [
      {
        "id": "section.menu",
        "type": "section",
        "sectionName": "Consultar cardápio no POS",
        "titleKey": "browseMenuForPos.section.menu.title",
        "mode": "view",
        "order": 10,
        "organisms": [
          {
            "id": "organism.menu.browse",
            "type": "organism",
            "organismName": "BrowseMenuForPos",
            "titleKey": "browseMenuForPos.organism.menu.title",
            "purpose": "Consultar cardápio no POS",
            "userActions": [
              "browseMenuForPos"
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
              "status",
              "createdAt",
              "updatedAt"
            ],
            "writesFields": [],
            "rulesApplied": [
              "aiOutputLanguageSelection"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intention.menu.list",
                "intent": "queryList",
                "order": 10,
                "titleKey": "browseMenuForPos.intent.list.title",
                "action": "browseMenuForPos",
                "submitAction": "browseMenuForPos",
                "fields": [],
                "columns": [
                  {
                    "id": "col.menu.menuItemId",
                    "field": "menuItemId",
                    "labelKey": "browseMenuForPos.column.menuItemId.label",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.browseMenuForPos.data.browseMenuForPos"
                  },
                  {
                    "id": "col.menu.menuCategoryId",
                    "field": "menuCategoryId",
                    "labelKey": "browseMenuForPos.column.menuCategoryId.label",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.browseMenuForPos.data.browseMenuForPos"
                  },
                  {
                    "id": "col.menu.name",
                    "field": "name",
                    "labelKey": "browseMenuForPos.column.name.label",
                    "order": 30,
                    "required": false,
                    "stateKey": "ui.browseMenuForPos.data.browseMenuForPos"
                  },
                  {
                    "id": "col.menu.description",
                    "field": "description",
                    "labelKey": "browseMenuForPos.column.description.label",
                    "order": 40,
                    "required": false,
                    "stateKey": "ui.browseMenuForPos.data.browseMenuForPos"
                  },
                  {
                    "id": "col.menu.price",
                    "field": "price",
                    "labelKey": "browseMenuForPos.column.price.label",
                    "order": 50,
                    "required": false,
                    "stateKey": "ui.browseMenuForPos.data.browseMenuForPos"
                  },
                  {
                    "id": "col.menu.status",
                    "field": "status",
                    "labelKey": "browseMenuForPos.column.status.label",
                    "order": 60,
                    "required": false,
                    "stateKey": "ui.browseMenuForPos.data.browseMenuForPos"
                  },
                  {
                    "id": "col.menu.createdAt",
                    "field": "createdAt",
                    "labelKey": "browseMenuForPos.column.createdAt.label",
                    "order": 70,
                    "required": false,
                    "stateKey": "ui.browseMenuForPos.data.browseMenuForPos"
                  },
                  {
                    "id": "col.menu.updatedAt",
                    "field": "updatedAt",
                    "labelKey": "browseMenuForPos.column.updatedAt.label",
                    "order": 80,
                    "required": false,
                    "stateKey": "ui.browseMenuForPos.data.browseMenuForPos"
                  }
                ],
                "filters": [
                  {
                    "id": "filter.menu.menuItemId",
                    "field": "menuItemId",
                    "labelKey": "browseMenuForPos.filter.menuItemId.label",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.browseMenuForPos.input.browseMenuForPos.menuItemId"
                  },
                  {
                    "id": "filter.menu.menuCategoryId",
                    "field": "menuCategoryId",
                    "labelKey": "browseMenuForPos.filter.menuCategoryId.label",
                    "order": 20,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.browseMenuForPos.input.browseMenuForPos.menuCategoryId"
                  },
                  {
                    "id": "filter.menu.name",
                    "field": "name",
                    "labelKey": "browseMenuForPos.filter.name.label",
                    "order": 30,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.browseMenuForPos.input.browseMenuForPos.name"
                  },
                  {
                    "id": "filter.menu.status",
                    "field": "status",
                    "labelKey": "browseMenuForPos.filter.status.label",
                    "order": 40,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.browseMenuForPos.input.browseMenuForPos.status"
                  },
                  {
                    "id": "filter.menu.createdAt",
                    "field": "createdAt",
                    "labelKey": "browseMenuForPos.filter.createdAt.label",
                    "order": 50,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.browseMenuForPos.input.browseMenuForPos.createdAt"
                  },
                  {
                    "id": "filter.menu.updatedAt",
                    "field": "updatedAt",
                    "labelKey": "browseMenuForPos.filter.updatedAt.label",
                    "order": 60,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.browseMenuForPos.input.browseMenuForPos.updatedAt"
                  }
                ],
                "toolbar": [
                  {
                    "id": "toolbar.menu.search",
                    "action": "browseMenuForPos",
                    "labelKey": "browseMenuForPos.toolbar.search.label",
                    "order": 10,
                    "actionKey": "browseMenuForPos"
                  }
                ],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action.menu.search",
                    "action": "browseMenuForPos",
                    "labelKey": "browseMenuForPos.toolbar.search.label",
                    "order": 10,
                    "actionKey": "browseMenuForPos"
                  }
                ],
                "stateKey": "ui.browseMenuForPos.data.browseMenuForPos"
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
    "id": "browseMenuForPos__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/browseMenuForPos.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/browseMenuForPos.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/browseMenuForPos.defs.ts",
      "_102050_/l2/cafeFlow/web/shared/browseMenuForPos.ts",
      "_102050_/l2/cafeFlow/web/contracts/browseMenuForPos.defs.ts",
      "_102050_/l2/cafeFlow/web/contracts/browseMenuForPos.ts"
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
