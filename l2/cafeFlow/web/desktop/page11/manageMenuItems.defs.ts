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
      "id": "sec-manageMenuItems",
      "type": "section",
      "sectionName": "Gerenciar itens do cardápio",
      "titleKey": "section.manageMenuItems.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org-manageMenuItems-table",
          "type": "listOrganism",
          "organismName": "MenuItemsList",
          "titleKey": "organism.menuItemsList.title",
          "purpose": "Listar, filtrar e selecionar itens do cardápio para edição",
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
            "status",
            "createdAt",
            "updatedAt"
          ],
          "writesFields": [],
          "rulesApplied": [
            "aiOutputLanguageSelection"
          ],
          "order": 10,
          "moleculeRefs": [
            {
              "id": "mol-menuItems-filters",
              "type": "filterBar",
              "order": 10
            },
            {
              "id": "mol-menuItems-table",
              "type": "groupviewtable.mlDataTable",
              "stateKey": "state.menuItems.list",
              "order": 20
            }
          ]
        },
        {
          "id": "org-manageMenuItems-form",
          "type": "formOrganism",
          "organismName": "MenuItemForm",
          "titleKey": "organism.menuItemForm.title",
          "purpose": "Formulário para criar ou editar um item do cardápio",
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
          "order": 20,
          "moleculeRefs": [
            {
              "id": "mol-menuItem-form",
              "type": "form",
              "stateKey": "form.menuItem",
              "submitAction": "manageMenuItems",
              "order": 10
            },
            {
              "id": "mol-menuItem-actionBar",
              "type": "actionBar",
              "order": 20
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "manageMenuItems-default",
    "type": "page",
    "sections": [
      {
        "id": "sec-manageMenuItems",
        "type": "section",
        "sectionName": "Gerenciar itens do cardápio",
        "titleKey": "section.manageMenuItems.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org-manageMenuItems-table",
            "type": "listOrganism",
            "organismName": "MenuItemsList",
            "titleKey": "organism.menuItemsList.title",
            "purpose": "Listar, filtrar e selecionar itens do cardápio para edição",
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
              "status",
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
                "id": "mol-menuItems-filters",
                "type": "filterBar",
                "order": 10,
                "fields": [],
                "columns": [],
                "filters": [
                  {
                    "id": "flt-name",
                    "field": "name",
                    "labelKey": "filter.name.label",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.manageMenuItems.input.manageMenuItems.name"
                  },
                  {
                    "id": "flt-status",
                    "field": "status",
                    "labelKey": "filter.status.label",
                    "order": 20,
                    "required": false,
                    "inputType": "select",
                    "source": "enum:MenuItem.status",
                    "stateKey": "ui.manageMenuItems.input.manageMenuItems.status"
                  },
                  {
                    "id": "flt-menuCategoryId",
                    "field": "menuCategoryId",
                    "labelKey": "filter.menuCategoryId.label",
                    "order": 30,
                    "required": false,
                    "inputType": "select",
                    "source": "entity:MenuCategory",
                    "stateKey": "ui.manageMenuItems.input.manageMenuItems.menuCategoryId"
                  }
                ],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "mol-menuItems-table",
                "type": "groupviewtable.mlDataTable",
                "order": 20,
                "source": "entity:MenuItem",
                "binding": "dataBinding.menuItemsList",
                "emptyKey": "empty.menuItemsTable",
                "stateKey": "state.menuItems.list",
                "fields": [],
                "columns": [
                  {
                    "id": "col-name",
                    "field": "name",
                    "labelKey": "column.name.label",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.manageMenuItems.data.manageMenuItems"
                  },
                  {
                    "id": "col-menuCategoryId",
                    "field": "menuCategoryId",
                    "labelKey": "column.menuCategoryId.label",
                    "order": 20,
                    "required": false,
                    "inputType": "select",
                    "source": "entity:MenuCategory",
                    "stateKey": "ui.manageMenuItems.data.manageMenuItems"
                  },
                  {
                    "id": "col-price",
                    "field": "price",
                    "labelKey": "column.price.label",
                    "order": 30,
                    "required": false,
                    "inputType": "number",
                    "format": "money",
                    "stateKey": "ui.manageMenuItems.data.manageMenuItems"
                  },
                  {
                    "id": "col-status",
                    "field": "status",
                    "labelKey": "column.status.label",
                    "order": 40,
                    "required": false,
                    "inputType": "select",
                    "source": "enum:MenuItem.status",
                    "stateKey": "ui.manageMenuItems.data.manageMenuItems"
                  },
                  {
                    "id": "col-updatedAt",
                    "field": "updatedAt",
                    "labelKey": "column.updatedAt.label",
                    "order": 50,
                    "required": false,
                    "inputType": "datetime",
                    "format": "datetime",
                    "stateKey": "ui.manageMenuItems.data.manageMenuItems"
                  }
                ],
                "filters": [],
                "toolbar": [
                  {
                    "id": "tb-new",
                    "action": "manageMenuItems",
                    "labelKey": "toolbar.new.label",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "manageMenuItems"
                  }
                ],
                "rowActions": [
                  {
                    "id": "ra-edit",
                    "action": "manageMenuItems",
                    "labelKey": "rowAction.edit.label",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "manageMenuItems"
                  },
                  {
                    "id": "ra-deactivate",
                    "action": "manageMenuItems",
                    "labelKey": "rowAction.deactivate.label",
                    "order": 20,
                    "displayHint": "danger",
                    "actionKey": "manageMenuItems"
                  }
                ],
                "actions": []
              }
            ]
          },
          {
            "id": "org-manageMenuItems-form",
            "type": "formOrganism",
            "organismName": "MenuItemForm",
            "titleKey": "organism.menuItemForm.title",
            "purpose": "Formulário para criar ou editar um item do cardápio",
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
            "order": 20,
            "molecules": [
              {
                "id": "mol-menuItem-form",
                "type": "form",
                "order": 10,
                "binding": "dataBinding.menuItemForm",
                "submitAction": "manageMenuItems",
                "stateKey": "form.menuItem",
                "fields": [
                  {
                    "id": "fld-menuItemId",
                    "field": "menuItemId",
                    "labelKey": "field.menuItemId.label",
                    "order": 10,
                    "required": false,
                    "inputType": "hidden",
                    "stateKey": "ui.manageMenuItems.input.manageMenuItems.menuItemId"
                  },
                  {
                    "id": "fld-menuCategoryId",
                    "field": "menuCategoryId",
                    "labelKey": "field.menuCategoryId.label",
                    "order": 20,
                    "required": true,
                    "inputType": "select",
                    "source": "entity:MenuCategory",
                    "stateKey": "ui.manageMenuItems.input.manageMenuItems.menuCategoryId"
                  },
                  {
                    "id": "fld-name",
                    "field": "name",
                    "labelKey": "field.name.label",
                    "order": 30,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.manageMenuItems.input.manageMenuItems.name"
                  },
                  {
                    "id": "fld-description",
                    "field": "description",
                    "labelKey": "field.description.label",
                    "order": 40,
                    "required": false,
                    "inputType": "textarea",
                    "stateKey": "ui.manageMenuItems.input.manageMenuItems.description"
                  },
                  {
                    "id": "fld-price",
                    "field": "price",
                    "labelKey": "field.price.label",
                    "order": 50,
                    "required": true,
                    "inputType": "number",
                    "format": "money",
                    "stateKey": "ui.manageMenuItems.input.manageMenuItems.price"
                  },
                  {
                    "id": "fld-status",
                    "field": "status",
                    "labelKey": "field.status.label",
                    "order": 60,
                    "required": true,
                    "inputType": "select",
                    "source": "enum:MenuItem.status",
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
                "id": "mol-menuItem-actionBar",
                "type": "actionBar",
                "order": 20,
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-save",
                    "action": "manageMenuItems",
                    "labelKey": "action.save.label",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "manageMenuItems"
                  },
                  {
                    "id": "act-cancel",
                    "action": "manageMenuItems",
                    "labelKey": "action.cancel.label",
                    "order": 20,
                    "displayHint": "secondary",
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
  "i18n": {
    "section.manageMenuItems.title": "Gerenciar itens do cardápio",
    "organism.menuItemsList.title": "Itens do cardápio",
    "organism.menuItemForm.title": "Editar item do cardápio",
    "filter.name.label": "Nome",
    "filter.status.label": "Status",
    "filter.menuCategoryId.label": "Categoria",
    "column.name.label": "Nome",
    "column.menuCategoryId.label": "Categoria",
    "column.price.label": "Preço",
    "column.status.label": "Status",
    "column.updatedAt.label": "Atualizado em",
    "toolbar.new.label": "Novo item",
    "rowAction.edit.label": "Editar",
    "rowAction.deactivate.label": "Desativar",
    "empty.menuItemsTable": "Nenhum item do cardápio encontrado.",
    "field.menuItemId.label": "ID do item",
    "field.menuCategoryId.label": "Categoria",
    "field.name.label": "Nome",
    "field.description.label": "Descrição",
    "field.price.label": "Preço",
    "field.status.label": "Status",
    "action.save.label": "Salvar",
    "action.cancel.label": "Cancelar"
  },
  "dataBindings": [
    {
      "id": "dataBinding.menuItemsList",
      "source": "bff",
      "entity": "MenuItem",
      "command": "manageMenuItems",
      "description": "Lista de itens do cardápio para exibição na tabela",
      "stateKey": "ui.manageMenuItems.data.manageMenuItems",
      "inputStateKeys": [
        "ui.manageMenuItems.input.manageMenuItems.menuItemId",
        "ui.manageMenuItems.input.manageMenuItems.menuCategoryId",
        "ui.manageMenuItems.input.manageMenuItems.name",
        "ui.manageMenuItems.input.manageMenuItems.description",
        "ui.manageMenuItems.input.manageMenuItems.price",
        "ui.manageMenuItems.input.manageMenuItems.status"
      ]
    },
    {
      "id": "dataBinding.menuItemForm",
      "source": "bff",
      "entity": "MenuItem",
      "command": "manageMenuItems",
      "description": "Binding do formulário de criação/edição de item do cardápio",
      "stateKey": "ui.manageMenuItems.data.manageMenuItems",
      "inputStateKeys": [
        "ui.manageMenuItems.input.manageMenuItems.menuItemId",
        "ui.manageMenuItems.input.manageMenuItems.menuCategoryId",
        "ui.manageMenuItems.input.manageMenuItems.name",
        "ui.manageMenuItems.input.manageMenuItems.description",
        "ui.manageMenuItems.input.manageMenuItems.price",
        "ui.manageMenuItems.input.manageMenuItems.status"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "manageMenuItems__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/manageMenuItems.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/manageMenuItems.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/manageMenuItems.ts",
      "_102050_/l2/cafeFlow/web/contracts/manageMenuItems.ts"
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
