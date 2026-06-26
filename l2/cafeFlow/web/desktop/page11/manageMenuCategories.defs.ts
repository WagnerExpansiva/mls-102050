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
      "id": "sec-manage-categories",
      "type": "section",
      "sectionName": "Gerenciar categorias do cardápio",
      "titleKey": "page.manageMenuCategories.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org-manage-categories",
          "type": "manageEntity",
          "organismName": "ManageMenuCategories",
          "titleKey": "organism.manageMenuCategories.title",
          "purpose": "Gerenciar categorias do cardápio: listar, criar, editar e remover categorias",
          "userActions": [
            "manageMenuCategories"
          ],
          "requiredEntities": [
            "MenuCategory"
          ],
          "readsFields": [
            "menuCategoryId",
            "name",
            "description",
            "status",
            "createdAt",
            "updatedAt"
          ],
          "writesFields": [
            "menuCategoryId",
            "name",
            "description",
            "status"
          ],
          "rulesApplied": [],
          "order": 10,
          "moleculeRefs": [
            {
              "id": "mol-categories-table",
              "type": "groupviewtable.mlDataTable",
              "stateKey": "manageMenuCategories.list",
              "order": 10
            },
            {
              "id": "mol-category-form",
              "type": "form",
              "stateKey": "manageMenuCategories.form",
              "submitAction": "manageMenuCategories",
              "order": 20
            },
            {
              "id": "mol-summary-panel",
              "type": "summaryPanel",
              "stateKey": "manageMenuCategories.summary",
              "order": 30
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "manageMenuCategories-default",
    "type": "page",
    "sections": [
      {
        "id": "sec-manage-categories",
        "type": "section",
        "sectionName": "Gerenciar categorias do cardápio",
        "titleKey": "page.manageMenuCategories.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org-manage-categories",
            "type": "manageEntity",
            "organismName": "ManageMenuCategories",
            "titleKey": "organism.manageMenuCategories.title",
            "purpose": "Gerenciar categorias do cardápio: listar, criar, editar e remover categorias",
            "userActions": [
              "manageMenuCategories"
            ],
            "requiredEntities": [
              "MenuCategory"
            ],
            "readsFields": [
              "menuCategoryId",
              "name",
              "description",
              "status",
              "createdAt",
              "updatedAt"
            ],
            "writesFields": [
              "menuCategoryId",
              "name",
              "description",
              "status"
            ],
            "rulesApplied": [],
            "order": 10,
            "molecules": [
              {
                "id": "mol-categories-table",
                "type": "groupviewtable.mlDataTable",
                "order": 10,
                "titleKey": "molecule.categoriesTable.title",
                "source": "MenuCategory",
                "binding": "manageMenuCategories.list",
                "emptyKey": "molecule.categoriesTable.empty",
                "stateKey": "manageMenuCategories.list",
                "fields": [],
                "columns": [
                  {
                    "id": "col-name",
                    "field": "name",
                    "labelKey": "field.menuCategory.name",
                    "order": 10,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.manageMenuCategories.data.manageMenuCategories"
                  },
                  {
                    "id": "col-description",
                    "field": "description",
                    "labelKey": "field.menuCategory.description",
                    "order": 20,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.manageMenuCategories.data.manageMenuCategories"
                  },
                  {
                    "id": "col-status",
                    "field": "status",
                    "labelKey": "field.menuCategory.status",
                    "order": 30,
                    "required": true,
                    "inputType": "enum",
                    "source": "MenuCategory.status",
                    "stateKey": "ui.manageMenuCategories.data.manageMenuCategories"
                  },
                  {
                    "id": "col-updatedAt",
                    "field": "updatedAt",
                    "labelKey": "field.menuCategory.updatedAt",
                    "order": 40,
                    "required": true,
                    "inputType": "datetime",
                    "format": "datetime",
                    "stateKey": "ui.manageMenuCategories.data.manageMenuCategories"
                  },
                  {
                    "id": "col-createdAt",
                    "field": "createdAt",
                    "labelKey": "field.menuCategory.createdAt",
                    "order": 50,
                    "required": true,
                    "inputType": "datetime",
                    "format": "datetime",
                    "stateKey": "ui.manageMenuCategories.data.manageMenuCategories"
                  }
                ],
                "filters": [
                  {
                    "id": "flt-status",
                    "field": "status",
                    "labelKey": "filter.menuCategory.status",
                    "order": 10,
                    "required": false,
                    "inputType": "enum",
                    "source": "MenuCategory.status",
                    "stateKey": "ui.manageMenuCategories.input.manageMenuCategories.status"
                  },
                  {
                    "id": "flt-name",
                    "field": "name",
                    "labelKey": "filter.menuCategory.name",
                    "order": 20,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.manageMenuCategories.input.manageMenuCategories.name"
                  }
                ],
                "toolbar": [
                  {
                    "id": "tb-new",
                    "action": "manageMenuCategories",
                    "labelKey": "action.manageMenuCategories.new",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "manageMenuCategories"
                  }
                ],
                "rowActions": [
                  {
                    "id": "ra-edit",
                    "action": "manageMenuCategories",
                    "labelKey": "action.manageMenuCategories.edit",
                    "order": 10,
                    "displayHint": "default",
                    "actionKey": "manageMenuCategories"
                  },
                  {
                    "id": "ra-toggle-status",
                    "action": "manageMenuCategories",
                    "labelKey": "action.manageMenuCategories.toggleStatus",
                    "order": 20,
                    "displayHint": "default",
                    "actionKey": "manageMenuCategories"
                  },
                  {
                    "id": "ra-delete",
                    "action": "manageMenuCategories",
                    "labelKey": "action.manageMenuCategories.delete",
                    "order": 30,
                    "displayHint": "danger",
                    "actionKey": "manageMenuCategories"
                  }
                ],
                "actions": []
              },
              {
                "id": "mol-category-form",
                "type": "form",
                "order": 20,
                "titleKey": "molecule.categoryForm.title",
                "binding": "manageMenuCategories.form",
                "submitAction": "manageMenuCategories",
                "stateKey": "manageMenuCategories.form",
                "fields": [
                  {
                    "id": "fld-menuCategoryId",
                    "field": "menuCategoryId",
                    "labelKey": "field.menuCategory.menuCategoryId",
                    "order": 10,
                    "required": false,
                    "inputType": "hidden",
                    "stateKey": "ui.manageMenuCategories.input.manageMenuCategories.menuCategoryId"
                  },
                  {
                    "id": "fld-name",
                    "field": "name",
                    "labelKey": "field.menuCategory.name",
                    "order": 20,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.manageMenuCategories.input.manageMenuCategories.name"
                  },
                  {
                    "id": "fld-description",
                    "field": "description",
                    "labelKey": "field.menuCategory.description",
                    "order": 30,
                    "required": false,
                    "inputType": "textarea",
                    "stateKey": "ui.manageMenuCategories.input.manageMenuCategories.description"
                  },
                  {
                    "id": "fld-status",
                    "field": "status",
                    "labelKey": "field.menuCategory.status",
                    "order": 40,
                    "required": true,
                    "inputType": "enum",
                    "source": "MenuCategory.status",
                    "stateKey": "ui.manageMenuCategories.input.manageMenuCategories.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-save",
                    "action": "manageMenuCategories",
                    "labelKey": "action.manageMenuCategories.save",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "manageMenuCategories"
                  },
                  {
                    "id": "act-cancel",
                    "action": "manageMenuCategories",
                    "labelKey": "action.manageMenuCategories.cancel",
                    "order": 20,
                    "displayHint": "default",
                    "actionKey": "manageMenuCategories"
                  }
                ]
              },
              {
                "id": "mol-summary-panel",
                "type": "summaryPanel",
                "order": 30,
                "titleKey": "molecule.summaryPanel.title",
                "stateKey": "manageMenuCategories.summary",
                "fields": [
                  {
                    "id": "sf-total",
                    "field": "status",
                    "labelKey": "summary.menuCategory.total",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.manageMenuCategories.input.manageMenuCategories.status"
                  },
                  {
                    "id": "sf-active",
                    "field": "status",
                    "labelKey": "summary.menuCategory.active",
                    "order": 20,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.manageMenuCategories.input.manageMenuCategories.status"
                  },
                  {
                    "id": "sf-inactive",
                    "field": "status",
                    "labelKey": "summary.menuCategory.inactive",
                    "order": 30,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.manageMenuCategories.input.manageMenuCategories.status"
                  }
                ],
                "columns": [],
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
    "page.manageMenuCategories.title": "Gerenciar categorias do cardápio",
    "organism.manageMenuCategories.title": "Categorias do cardápio",
    "molecule.categoriesTable.title": "Lista de categorias",
    "molecule.categoriesTable.empty": "Nenhuma categoria cadastrada",
    "molecule.categoryForm.title": "Dados da categoria",
    "molecule.summaryPanel.title": "Resumo",
    "field.menuCategory.menuCategoryId": "ID",
    "field.menuCategory.name": "Nome",
    "field.menuCategory.description": "Descrição",
    "field.menuCategory.status": "Status",
    "field.menuCategory.createdAt": "Criado em",
    "field.menuCategory.updatedAt": "Atualizado em",
    "filter.menuCategory.status": "Filtrar por status",
    "filter.menuCategory.name": "Filtrar por nome",
    "action.manageMenuCategories.new": "Nova categoria",
    "action.manageMenuCategories.edit": "Editar",
    "action.manageMenuCategories.toggleStatus": "Ativar/Desativar",
    "action.manageMenuCategories.delete": "Remover",
    "action.manageMenuCategories.save": "Salvar",
    "action.manageMenuCategories.cancel": "Cancelar",
    "summary.menuCategory.total": "Total de categorias",
    "summary.menuCategory.active": "Categorias ativas",
    "summary.menuCategory.inactive": "Categorias inativas"
  },
  "dataBindings": [
    {
      "id": "bind-list",
      "source": "MenuCategory",
      "entity": "MenuCategory",
      "command": "manageMenuCategories",
      "description": "Lista de categorias de cardápio para exibição na tabela",
      "stateKey": "ui.manageMenuCategories.data.manageMenuCategories",
      "inputStateKeys": [
        "ui.manageMenuCategories.input.manageMenuCategories.menuCategoryId",
        "ui.manageMenuCategories.input.manageMenuCategories.name",
        "ui.manageMenuCategories.input.manageMenuCategories.description",
        "ui.manageMenuCategories.input.manageMenuCategories.status"
      ]
    },
    {
      "id": "bind-form",
      "source": "MenuCategory",
      "entity": "MenuCategory",
      "command": "manageMenuCategories",
      "description": "Formulário de criação/edição de categoria de cardápio",
      "stateKey": "ui.manageMenuCategories.data.manageMenuCategories",
      "inputStateKeys": [
        "ui.manageMenuCategories.input.manageMenuCategories.menuCategoryId",
        "ui.manageMenuCategories.input.manageMenuCategories.name",
        "ui.manageMenuCategories.input.manageMenuCategories.description",
        "ui.manageMenuCategories.input.manageMenuCategories.status"
      ]
    },
    {
      "id": "bind-summary",
      "source": "MenuCategory",
      "entity": "MenuCategory",
      "command": "manageMenuCategories",
      "description": "Resumo agregado de categorias por status",
      "stateKey": "ui.manageMenuCategories.data.manageMenuCategories",
      "inputStateKeys": [
        "ui.manageMenuCategories.input.manageMenuCategories.menuCategoryId",
        "ui.manageMenuCategories.input.manageMenuCategories.name",
        "ui.manageMenuCategories.input.manageMenuCategories.description",
        "ui.manageMenuCategories.input.manageMenuCategories.status"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "manageMenuCategories__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/manageMenuCategories.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/manageMenuCategories.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/manageMenuCategories.ts",
      "_102050_/l2/cafeFlow/web/contracts/manageMenuCategories.ts"
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
