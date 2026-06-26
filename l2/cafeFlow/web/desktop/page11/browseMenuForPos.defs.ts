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
      "id": "sec-browse-menu",
      "type": "section",
      "sectionName": "Consultar cardápio no POS",
      "titleKey": "section.browseMenu.title",
      "mode": "view",
      "order": 10,
      "organisms": [
        {
          "id": "org-filters",
          "type": "filter",
          "organismName": "MenuItemFilters",
          "titleKey": "organism.filters.title",
          "purpose": "Filtrar itens do cardápio no POS",
          "userActions": [
            "browseMenuForPos"
          ],
          "requiredEntities": [
            "MenuItem",
            "MenuCategory"
          ],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "aiOutputLanguageSelection"
          ],
          "order": 10,
          "moleculeRefs": [
            {
              "id": "mol-filter-form",
              "type": "form",
              "stateKey": "ui.browseMenuForPos.data.browseMenuForPos",
              "order": 10
            },
            {
              "id": "mol-filter-actions",
              "type": "actionBar",
              "stateKey": "ui.browseMenuForPos.data.browseMenuForPos",
              "order": 20
            }
          ]
        },
        {
          "id": "org-results",
          "type": "list",
          "organismName": "MenuItemResults",
          "titleKey": "organism.results.title",
          "purpose": "Exibir resultados da consulta de cardápio",
          "userActions": [],
          "requiredEntities": [
            "MenuItem"
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
          "order": 20,
          "moleculeRefs": [
            {
              "id": "mol-results-table",
              "type": "groupviewtable.mlDataTable",
              "stateKey": "browseMenuForPosResult",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "browseMenuForPos-layout",
    "type": "page",
    "sections": [
      {
        "id": "sec-browse-menu",
        "type": "section",
        "sectionName": "Consultar cardápio no POS",
        "titleKey": "section.browseMenu.title",
        "mode": "view",
        "order": 10,
        "organisms": [
          {
            "id": "org-filters",
            "type": "filter",
            "organismName": "MenuItemFilters",
            "titleKey": "organism.filters.title",
            "purpose": "Filtrar itens do cardápio no POS",
            "userActions": [
              "browseMenuForPos"
            ],
            "requiredEntities": [
              "MenuItem",
              "MenuCategory"
            ],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "aiOutputLanguageSelection"
            ],
            "order": 10,
            "molecules": [
              {
                "id": "mol-filter-form",
                "type": "form",
                "order": 10,
                "stateKey": "ui.browseMenuForPos.data.browseMenuForPos",
                "fields": [
                  {
                    "id": "fld-menu-category-id",
                    "field": "menuCategoryId",
                    "labelKey": "field.menuCategoryId",
                    "order": 10,
                    "required": false,
                    "inputType": "select",
                    "source": "MenuCategory",
                    "stateKey": "ui.browseMenuForPos.input.browseMenuForPos.menuCategoryId"
                  },
                  {
                    "id": "fld-name",
                    "field": "name",
                    "labelKey": "field.name",
                    "order": 20,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.browseMenuForPos.input.browseMenuForPos.name"
                  },
                  {
                    "id": "fld-status",
                    "field": "status",
                    "labelKey": "field.status",
                    "order": 30,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.browseMenuForPos.input.browseMenuForPos.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "mol-filter-actions",
                "type": "actionBar",
                "order": 20,
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-browse-menu",
                    "action": "browseMenuForPos",
                    "labelKey": "action.browseMenuForPos",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "browseMenuForPos"
                  }
                ],
                "stateKey": "ui.browseMenuForPos.data.browseMenuForPos"
              }
            ]
          },
          {
            "id": "org-results",
            "type": "list",
            "organismName": "MenuItemResults",
            "titleKey": "organism.results.title",
            "purpose": "Exibir resultados da consulta de cardápio",
            "userActions": [],
            "requiredEntities": [
              "MenuItem"
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
            "order": 20,
            "molecules": [
              {
                "id": "mol-results-table",
                "type": "groupviewtable.mlDataTable",
                "order": 10,
                "source": "browseMenuForPos",
                "emptyKey": "table.empty",
                "stateKey": "browseMenuForPosResult",
                "fields": [],
                "columns": [
                  {
                    "id": "col-name",
                    "field": "name",
                    "labelKey": "column.name",
                    "order": 10,
                    "required": false
                  },
                  {
                    "id": "col-description",
                    "field": "description",
                    "labelKey": "column.description",
                    "order": 20,
                    "required": false
                  },
                  {
                    "id": "col-price",
                    "field": "price",
                    "labelKey": "column.price",
                    "order": 30,
                    "required": false,
                    "format": "money"
                  },
                  {
                    "id": "col-status",
                    "field": "status",
                    "labelKey": "column.status",
                    "order": 40,
                    "required": false
                  },
                  {
                    "id": "col-menu-category-id",
                    "field": "menuCategoryId",
                    "labelKey": "column.menuCategoryId",
                    "order": 50,
                    "required": false
                  }
                ],
                "filters": [],
                "toolbar": [
                  {
                    "id": "act-refresh",
                    "action": "browseMenuForPos",
                    "labelKey": "action.refresh",
                    "order": 10,
                    "displayHint": "secondary",
                    "actionKey": "browseMenuForPos"
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
    "section.browseMenu.title": "Consultar cardápio no POS",
    "organism.filters.title": "Filtros",
    "organism.results.title": "Itens do cardápio",
    "field.menuCategoryId": "Categoria",
    "field.name": "Nome",
    "field.status": "Status",
    "column.name": "Nome",
    "column.description": "Descrição",
    "column.price": "Preço",
    "column.status": "Status",
    "column.menuCategoryId": "Categoria",
    "action.browseMenuForPos": "Buscar",
    "action.refresh": "Atualizar",
    "table.empty": "Nenhum item encontrado"
  },
  "dataBindings": [
    {
      "id": "bind-browse-menu",
      "source": "command",
      "entity": "MenuItem",
      "command": "browseMenuForPos",
      "description": "Consultar cardápio no POS",
      "stateKey": "ui.browseMenuForPos.data.browseMenuForPos",
      "inputStateKeys": [
        "ui.browseMenuForPos.input.browseMenuForPos.menuItemId",
        "ui.browseMenuForPos.input.browseMenuForPos.menuCategoryId",
        "ui.browseMenuForPos.input.browseMenuForPos.name",
        "ui.browseMenuForPos.input.browseMenuForPos.status",
        "ui.browseMenuForPos.input.browseMenuForPos.createdAt",
        "ui.browseMenuForPos.input.browseMenuForPos.updatedAt"
      ]
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
