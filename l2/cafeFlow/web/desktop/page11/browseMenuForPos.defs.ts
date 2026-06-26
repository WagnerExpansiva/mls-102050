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
      "id": "section.browseMenuForPos.main",
      "type": "section",
      "sectionName": "Consultar cardápio no POS",
      "titleKey": "browseMenuForPos.section.title",
      "mode": "view",
      "order": 10,
      "organisms": [
        {
          "id": "organism.browseMenuForPos.menuBrowser",
          "type": "organism",
          "organismName": "BrowseMenuForPos",
          "titleKey": "browseMenuForPos.organism.title",
          "purpose": "Consultar cardápio no POS",
          "userActions": [
            "browseMenuForPos"
          ],
          "requiredEntities": [
            "MenuItem",
            "MenuCategory"
          ],
          "readsFields": [
            "menuCategoryId",
            "name",
            "status",
            "menuItemId",
            "description",
            "price",
            "createdAt",
            "updatedAt"
          ],
          "writesFields": [],
          "rulesApplied": [
            "aiOutputLanguageSelection"
          ],
          "order": 10,
          "molecules": [
            {
              "id": "molecule.browseMenuForPos.filterForm",
              "type": "form",
              "order": 10,
              "titleKey": "browseMenuForPos.filterForm.title",
              "submitAction": "browseMenuForPos",
              "fields": [
                {
                  "id": "field.filter.menuCategoryId",
                  "field": "menuCategoryId",
                  "labelKey": "browseMenuForPos.field.menuCategoryId",
                  "order": 10,
                  "required": false,
                  "inputType": "text",
                  "source": "browseMenuForPos.input"
                },
                {
                  "id": "field.filter.name",
                  "field": "name",
                  "labelKey": "browseMenuForPos.field.name",
                  "order": 20,
                  "required": false,
                  "inputType": "text",
                  "source": "browseMenuForPos.input"
                },
                {
                  "id": "field.filter.status",
                  "field": "status",
                  "labelKey": "browseMenuForPos.field.status",
                  "order": 30,
                  "required": false,
                  "inputType": "text",
                  "source": "browseMenuForPos.input"
                }
              ],
              "columns": [],
              "filters": [],
              "toolbar": [],
              "rowActions": [],
              "actions": []
            },
            {
              "id": "molecule.browseMenuForPos.resultsTable",
              "type": "groupviewtable.mlDataTable",
              "order": 20,
              "titleKey": "browseMenuForPos.resultsTable.title",
              "source": "browseMenuForPos.output",
              "fields": [],
              "columns": [
                {
                  "id": "col.menuItemId",
                  "field": "menuItemId",
                  "labelKey": "browseMenuForPos.col.menuItemId",
                  "order": 10,
                  "required": false
                },
                {
                  "id": "col.menuCategoryId",
                  "field": "menuCategoryId",
                  "labelKey": "browseMenuForPos.col.menuCategoryId",
                  "order": 20,
                  "required": false
                },
                {
                  "id": "col.name",
                  "field": "name",
                  "labelKey": "browseMenuForPos.col.name",
                  "order": 30,
                  "required": false
                },
                {
                  "id": "col.description",
                  "field": "description",
                  "labelKey": "browseMenuForPos.col.description",
                  "order": 40,
                  "required": false
                },
                {
                  "id": "col.price",
                  "field": "price",
                  "labelKey": "browseMenuForPos.col.price",
                  "order": 50,
                  "required": false,
                  "format": "money"
                },
                {
                  "id": "col.status",
                  "field": "status",
                  "labelKey": "browseMenuForPos.col.status",
                  "order": 60,
                  "required": false
                },
                {
                  "id": "col.createdAt",
                  "field": "createdAt",
                  "labelKey": "browseMenuForPos.col.createdAt",
                  "order": 70,
                  "required": false,
                  "format": "date"
                },
                {
                  "id": "col.updatedAt",
                  "field": "updatedAt",
                  "labelKey": "browseMenuForPos.col.updatedAt",
                  "order": 80,
                  "required": false,
                  "format": "date"
                }
              ],
              "filters": [],
              "toolbar": [
                {
                  "id": "tb.refresh",
                  "action": "browseMenuForPos",
                  "labelKey": "browseMenuForPos.action.refresh",
                  "order": 10,
                  "displayHint": "primary"
                }
              ],
              "rowActions": [],
              "actions": []
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "browseMenuForPos.layout.v1",
    "type": "page",
    "sections": [
      {
        "id": "section.browseMenuForPos.main",
        "type": "section",
        "sectionName": "Consultar cardápio no POS",
        "titleKey": "browseMenuForPos.section.title",
        "mode": "view",
        "order": 10,
        "organisms": [
          {
            "id": "organism.browseMenuForPos.menuBrowser",
            "type": "organism",
            "organismName": "BrowseMenuForPos",
            "titleKey": "browseMenuForPos.organism.title",
            "purpose": "Consultar cardápio no POS",
            "userActions": [
              "browseMenuForPos"
            ],
            "requiredEntities": [
              "MenuItem",
              "MenuCategory"
            ],
            "readsFields": [
              "menuCategoryId",
              "name",
              "status",
              "menuItemId",
              "description",
              "price",
              "createdAt",
              "updatedAt"
            ],
            "writesFields": [],
            "rulesApplied": [
              "aiOutputLanguageSelection"
            ],
            "order": 10,
            "molecules": [
              {
                "id": "molecule.browseMenuForPos.filterForm",
                "type": "form",
                "order": 10,
                "titleKey": "browseMenuForPos.filterForm.title",
                "submitAction": "browseMenuForPos",
                "fields": [
                  {
                    "id": "field.filter.menuCategoryId",
                    "field": "menuCategoryId",
                    "labelKey": "browseMenuForPos.field.menuCategoryId",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "source": "browseMenuForPos.input"
                  },
                  {
                    "id": "field.filter.name",
                    "field": "name",
                    "labelKey": "browseMenuForPos.field.name",
                    "order": 20,
                    "required": false,
                    "inputType": "text",
                    "source": "browseMenuForPos.input"
                  },
                  {
                    "id": "field.filter.status",
                    "field": "status",
                    "labelKey": "browseMenuForPos.field.status",
                    "order": 30,
                    "required": false,
                    "inputType": "text",
                    "source": "browseMenuForPos.input"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "molecule.browseMenuForPos.resultsTable",
                "type": "groupviewtable.mlDataTable",
                "order": 20,
                "titleKey": "browseMenuForPos.resultsTable.title",
                "source": "browseMenuForPos.output",
                "fields": [],
                "columns": [
                  {
                    "id": "col.menuItemId",
                    "field": "menuItemId",
                    "labelKey": "browseMenuForPos.col.menuItemId",
                    "order": 10,
                    "required": false
                  },
                  {
                    "id": "col.menuCategoryId",
                    "field": "menuCategoryId",
                    "labelKey": "browseMenuForPos.col.menuCategoryId",
                    "order": 20,
                    "required": false
                  },
                  {
                    "id": "col.name",
                    "field": "name",
                    "labelKey": "browseMenuForPos.col.name",
                    "order": 30,
                    "required": false
                  },
                  {
                    "id": "col.description",
                    "field": "description",
                    "labelKey": "browseMenuForPos.col.description",
                    "order": 40,
                    "required": false
                  },
                  {
                    "id": "col.price",
                    "field": "price",
                    "labelKey": "browseMenuForPos.col.price",
                    "order": 50,
                    "required": false,
                    "format": "money"
                  },
                  {
                    "id": "col.status",
                    "field": "status",
                    "labelKey": "browseMenuForPos.col.status",
                    "order": 60,
                    "required": false
                  },
                  {
                    "id": "col.createdAt",
                    "field": "createdAt",
                    "labelKey": "browseMenuForPos.col.createdAt",
                    "order": 70,
                    "required": false,
                    "format": "date"
                  },
                  {
                    "id": "col.updatedAt",
                    "field": "updatedAt",
                    "labelKey": "browseMenuForPos.col.updatedAt",
                    "order": 80,
                    "required": false,
                    "format": "date"
                  }
                ],
                "filters": [],
                "toolbar": [
                  {
                    "id": "tb.refresh",
                    "action": "browseMenuForPos",
                    "labelKey": "browseMenuForPos.action.refresh",
                    "order": 10,
                    "displayHint": "primary"
                  }
                ],
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
    "browseMenuForPos.section.title": "Consultar cardápio no POS",
    "browseMenuForPos.organism.title": "Consultar cardápio no POS",
    "browseMenuForPos.filterForm.title": "Filtros do cardápio",
    "browseMenuForPos.field.menuCategoryId": "Categoria",
    "browseMenuForPos.field.name": "Nome do item",
    "browseMenuForPos.field.status": "Status",
    "browseMenuForPos.resultsTable.title": "Itens do cardápio",
    "browseMenuForPos.col.menuItemId": "ID do item",
    "browseMenuForPos.col.menuCategoryId": "Categoria",
    "browseMenuForPos.col.name": "Nome",
    "browseMenuForPos.col.description": "Descrição",
    "browseMenuForPos.col.price": "Preço",
    "browseMenuForPos.col.status": "Status",
    "browseMenuForPos.col.createdAt": "Criado em",
    "browseMenuForPos.col.updatedAt": "Atualizado em",
    "browseMenuForPos.action.refresh": "Atualizar"
  },
  "dataBindings": [
    {
      "id": "binding.browseMenuForPos.query",
      "source": "bff",
      "command": "browseMenuForPos",
      "description": "Consultar cardápio no POS"
    }
  ]
};

export const pipeline = [
  {
    "id": "browseMenuForPos__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/browseMenuForPos.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/browseMenuForPos.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/browseMenuForPos.ts",
      "_102050_/l2/cafeFlow/web/contracts/browseMenuForPos.ts"
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
