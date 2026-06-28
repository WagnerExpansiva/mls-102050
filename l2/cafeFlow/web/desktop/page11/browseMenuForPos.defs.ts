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
      "id": "sectionMenu",
      "type": "section",
      "sectionName": "Consultar cardápio no POS",
      "titleKey": "section.menu.title",
      "mode": "view",
      "order": 10,
      "organisms": [
        {
          "id": "organismBrowseMenu",
          "type": "data",
          "organismName": "BrowseMenuForPos",
          "titleKey": "organism.menu.title",
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
              "id": "intentMenuQuery",
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
    "id": "browseMenuForPosLayout",
    "type": "page",
    "sections": [
      {
        "id": "sectionMenu",
        "type": "section",
        "sectionName": "Consultar cardápio no POS",
        "titleKey": "section.menu.title",
        "mode": "view",
        "order": 10,
        "organisms": [
          {
            "id": "organismBrowseMenu",
            "type": "data",
            "organismName": "BrowseMenuForPos",
            "titleKey": "organism.menu.title",
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
                "id": "intentMenuQuery",
                "intent": "queryList",
                "order": 10,
                "titleKey": "intent.menu.query.title",
                "action": "browseMenuForPos",
                "submitAction": "browseMenuForPos",
                "fields": [],
                "columns": [
                  {
                    "id": "colMenuItemId",
                    "field": "menuItemId",
                    "labelKey": "column.menuItemId.label",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.browseMenuForPos.data.browseMenuForPos"
                  },
                  {
                    "id": "colMenuCategoryId",
                    "field": "menuCategoryId",
                    "labelKey": "column.menuCategoryId.label",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.browseMenuForPos.data.browseMenuForPos"
                  },
                  {
                    "id": "colName",
                    "field": "name",
                    "labelKey": "column.name.label",
                    "order": 30,
                    "required": false,
                    "stateKey": "ui.browseMenuForPos.data.browseMenuForPos"
                  },
                  {
                    "id": "colDescription",
                    "field": "description",
                    "labelKey": "column.description.label",
                    "order": 40,
                    "required": false,
                    "stateKey": "ui.browseMenuForPos.data.browseMenuForPos"
                  },
                  {
                    "id": "colPrice",
                    "field": "price",
                    "labelKey": "column.price.label",
                    "order": 50,
                    "required": false,
                    "stateKey": "ui.browseMenuForPos.data.browseMenuForPos"
                  },
                  {
                    "id": "colStatus",
                    "field": "status",
                    "labelKey": "column.status.label",
                    "order": 60,
                    "required": false,
                    "stateKey": "ui.browseMenuForPos.data.browseMenuForPos"
                  },
                  {
                    "id": "colCreatedAt",
                    "field": "createdAt",
                    "labelKey": "column.createdAt.label",
                    "order": 70,
                    "required": false,
                    "format": "date",
                    "stateKey": "ui.browseMenuForPos.data.browseMenuForPos"
                  },
                  {
                    "id": "colUpdatedAt",
                    "field": "updatedAt",
                    "labelKey": "column.updatedAt.label",
                    "order": 80,
                    "required": false,
                    "format": "date",
                    "stateKey": "ui.browseMenuForPos.data.browseMenuForPos"
                  }
                ],
                "filters": [
                  {
                    "id": "filterMenuItemId",
                    "field": "menuItemId",
                    "labelKey": "filter.menuItemId.label",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.browseMenuForPos.input.browseMenuForPos.menuItemId"
                  },
                  {
                    "id": "filterMenuCategoryId",
                    "field": "menuCategoryId",
                    "labelKey": "filter.menuCategoryId.label",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.browseMenuForPos.input.browseMenuForPos.menuCategoryId"
                  },
                  {
                    "id": "filterName",
                    "field": "name",
                    "labelKey": "filter.name.label",
                    "order": 30,
                    "required": false,
                    "stateKey": "ui.browseMenuForPos.input.browseMenuForPos.name"
                  },
                  {
                    "id": "filterStatus",
                    "field": "status",
                    "labelKey": "filter.status.label",
                    "order": 40,
                    "required": false,
                    "stateKey": "ui.browseMenuForPos.input.browseMenuForPos.status"
                  },
                  {
                    "id": "filterCreatedAt",
                    "field": "createdAt",
                    "labelKey": "filter.createdAt.label",
                    "order": 50,
                    "required": false,
                    "format": "date",
                    "stateKey": "ui.browseMenuForPos.input.browseMenuForPos.createdAt"
                  },
                  {
                    "id": "filterUpdatedAt",
                    "field": "updatedAt",
                    "labelKey": "filter.updatedAt.label",
                    "order": 60,
                    "required": false,
                    "format": "date",
                    "stateKey": "ui.browseMenuForPos.input.browseMenuForPos.updatedAt"
                  }
                ],
                "toolbar": [
                  {
                    "id": "tbBrowse",
                    "action": "browseMenuForPos",
                    "labelKey": "action.browseMenuForPos.label",
                    "order": 10,
                    "actionKey": "browseMenuForPos"
                  }
                ],
                "rowActions": [],
                "actions": [
                  {
                    "id": "actBrowse",
                    "action": "browseMenuForPos",
                    "labelKey": "action.browseMenuForPos.label",
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
