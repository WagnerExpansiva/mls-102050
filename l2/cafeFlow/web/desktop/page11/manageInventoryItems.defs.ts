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
      "id": "sec_inventory_main",
      "type": "section",
      "sectionName": "Gerenciar itens de estoque (ingredientes)",
      "titleKey": "page.manageInventoryItems.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org_manage_inventory",
          "type": "manageInventoryItems",
          "organismName": "ManageInventoryItems",
          "titleKey": "organism.manageInventoryItems.title",
          "purpose": "Gerenciar itens de estoque (ingredientes): listar, criar, editar e desativar ingredientes",
          "userActions": [
            "manageInventoryItems"
          ],
          "requiredEntities": [
            "InventoryItem"
          ],
          "readsFields": [
            "InventoryItem.inventoryItemId",
            "InventoryItem.name",
            "InventoryItem.description",
            "InventoryItem.unit",
            "InventoryItem.currentQuantity",
            "InventoryItem.minimumLevel",
            "InventoryItem.status",
            "InventoryItem.createdAt",
            "InventoryItem.updatedAt"
          ],
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
          "moleculeRefs": [
            {
              "id": "mol_inventory_filters",
              "type": "filterBar",
              "order": 10
            },
            {
              "id": "mol_inventory_table",
              "type": "groupviewtable.mlDataTable",
              "order": 20
            },
            {
              "id": "mol_inventory_summary",
              "type": "summaryPanel",
              "order": 30
            },
            {
              "id": "mol_inventory_form",
              "type": "form",
              "order": 40
            },
            {
              "id": "mol_inventory_actionbar",
              "type": "actionBar",
              "order": 50
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "manageInventoryItems.default",
    "type": "page",
    "sections": [
      {
        "id": "sec_inventory_main",
        "type": "section",
        "sectionName": "Gerenciar itens de estoque (ingredientes)",
        "titleKey": "page.manageInventoryItems.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org_manage_inventory",
            "type": "manageInventoryItems",
            "organismName": "ManageInventoryItems",
            "titleKey": "organism.manageInventoryItems.title",
            "purpose": "Gerenciar itens de estoque (ingredientes): listar, criar, editar e desativar ingredientes",
            "userActions": [
              "manageInventoryItems"
            ],
            "requiredEntities": [
              "InventoryItem"
            ],
            "readsFields": [
              "InventoryItem.inventoryItemId",
              "InventoryItem.name",
              "InventoryItem.description",
              "InventoryItem.unit",
              "InventoryItem.currentQuantity",
              "InventoryItem.minimumLevel",
              "InventoryItem.status",
              "InventoryItem.createdAt",
              "InventoryItem.updatedAt"
            ],
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
            "molecules": [
              {
                "id": "mol_inventory_filters",
                "type": "filterBar",
                "order": 10,
                "fields": [],
                "columns": [],
                "filters": [
                  {
                    "id": "flt_name",
                    "field": "InventoryItem.name",
                    "labelKey": "filter.name.label",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.manageInventoryItems.input.manageInventoryItems.InventoryItem.name"
                  },
                  {
                    "id": "flt_status",
                    "field": "InventoryItem.status",
                    "labelKey": "filter.status.label",
                    "order": 20,
                    "required": false,
                    "inputType": "select",
                    "source": "enum:active,inactive",
                    "stateKey": "ui.manageInventoryItems.input.manageInventoryItems.InventoryItem.status"
                  }
                ],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "mol_inventory_table",
                "type": "groupviewtable.mlDataTable",
                "order": 20,
                "fields": [],
                "columns": [
                  {
                    "id": "col_name",
                    "field": "InventoryItem.name",
                    "labelKey": "column.name.label",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.manageInventoryItems.data.manageInventoryItems"
                  },
                  {
                    "id": "col_unit",
                    "field": "InventoryItem.unit",
                    "labelKey": "column.unit.label",
                    "order": 20,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.manageInventoryItems.data.manageInventoryItems"
                  },
                  {
                    "id": "col_currentQuantity",
                    "field": "InventoryItem.currentQuantity",
                    "labelKey": "column.currentQuantity.label",
                    "order": 30,
                    "required": false,
                    "inputType": "number",
                    "format": "number",
                    "stateKey": "ui.manageInventoryItems.data.manageInventoryItems"
                  },
                  {
                    "id": "col_minimumLevel",
                    "field": "InventoryItem.minimumLevel",
                    "labelKey": "column.minimumLevel.label",
                    "order": 40,
                    "required": false,
                    "inputType": "number",
                    "format": "number",
                    "stateKey": "ui.manageInventoryItems.data.manageInventoryItems"
                  },
                  {
                    "id": "col_status",
                    "field": "InventoryItem.status",
                    "labelKey": "column.status.label",
                    "order": 50,
                    "required": false,
                    "inputType": "select",
                    "source": "enum:active,inactive",
                    "stateKey": "ui.manageInventoryItems.data.manageInventoryItems"
                  },
                  {
                    "id": "col_updatedAt",
                    "field": "InventoryItem.updatedAt",
                    "labelKey": "column.updatedAt.label",
                    "order": 60,
                    "required": false,
                    "inputType": "datetime",
                    "format": "datetime",
                    "stateKey": "ui.manageInventoryItems.data.manageInventoryItems"
                  }
                ],
                "filters": [],
                "toolbar": [
                  {
                    "id": "tb_new",
                    "action": "manageInventoryItems",
                    "labelKey": "toolbar.new.label",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "manageInventoryItems"
                  },
                  {
                    "id": "tb_refresh",
                    "action": "manageInventoryItems",
                    "labelKey": "toolbar.refresh.label",
                    "order": 20,
                    "displayHint": "ghost",
                    "actionKey": "manageInventoryItems"
                  }
                ],
                "rowActions": [
                  {
                    "id": "ra_edit",
                    "action": "manageInventoryItems",
                    "labelKey": "rowAction.edit.label",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "manageInventoryItems"
                  },
                  {
                    "id": "ra_deactivate",
                    "action": "manageInventoryItems",
                    "labelKey": "rowAction.deactivate.label",
                    "order": 20,
                    "displayHint": "danger",
                    "actionKey": "manageInventoryItems"
                  }
                ],
                "actions": []
              },
              {
                "id": "mol_inventory_summary",
                "type": "summaryPanel",
                "order": 30,
                "fields": [
                  {
                    "id": "sf_totalItems",
                    "field": "InventoryItem.inventoryItemId",
                    "labelKey": "summary.totalItems.label",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.manageInventoryItems.input.manageInventoryItems.InventoryItem.inventoryItemId"
                  },
                  {
                    "id": "sf_lowStockItems",
                    "field": "InventoryItem.currentQuantity",
                    "labelKey": "summary.lowStockItems.label",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.manageInventoryItems.input.manageInventoryItems.InventoryItem.currentQuantity"
                  },
                  {
                    "id": "sf_activeItems",
                    "field": "InventoryItem.status",
                    "labelKey": "summary.activeItems.label",
                    "order": 30,
                    "required": false,
                    "stateKey": "ui.manageInventoryItems.input.manageInventoryItems.InventoryItem.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "mol_inventory_form",
                "type": "form",
                "order": 40,
                "fields": [
                  {
                    "id": "fld_name",
                    "field": "InventoryItem.name",
                    "labelKey": "field.name.label",
                    "order": 10,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.manageInventoryItems.input.manageInventoryItems.InventoryItem.name"
                  },
                  {
                    "id": "fld_description",
                    "field": "InventoryItem.description",
                    "labelKey": "field.description.label",
                    "order": 20,
                    "required": false,
                    "inputType": "textarea",
                    "stateKey": "ui.manageInventoryItems.input.manageInventoryItems.InventoryItem.description"
                  },
                  {
                    "id": "fld_unit",
                    "field": "InventoryItem.unit",
                    "labelKey": "field.unit.label",
                    "order": 30,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.manageInventoryItems.input.manageInventoryItems.InventoryItem.unit"
                  },
                  {
                    "id": "fld_currentQuantity",
                    "field": "InventoryItem.currentQuantity",
                    "labelKey": "field.currentQuantity.label",
                    "order": 40,
                    "required": true,
                    "inputType": "number",
                    "format": "number",
                    "stateKey": "ui.manageInventoryItems.input.manageInventoryItems.InventoryItem.currentQuantity"
                  },
                  {
                    "id": "fld_minimumLevel",
                    "field": "InventoryItem.minimumLevel",
                    "labelKey": "field.minimumLevel.label",
                    "order": 50,
                    "required": true,
                    "inputType": "number",
                    "format": "number",
                    "stateKey": "ui.manageInventoryItems.input.manageInventoryItems.InventoryItem.minimumLevel"
                  },
                  {
                    "id": "fld_status",
                    "field": "InventoryItem.status",
                    "labelKey": "field.status.label",
                    "order": 60,
                    "required": true,
                    "inputType": "select",
                    "source": "enum:active,inactive",
                    "stateKey": "ui.manageInventoryItems.input.manageInventoryItems.InventoryItem.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "mol_inventory_actionbar",
                "type": "actionBar",
                "order": 50,
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act_save",
                    "action": "manageInventoryItems",
                    "labelKey": "action.save.label",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "manageInventoryItems"
                  },
                  {
                    "id": "act_cancel",
                    "action": "manageInventoryItems",
                    "labelKey": "action.cancel.label",
                    "order": 20,
                    "displayHint": "ghost",
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
  "i18n": {
    "page.manageInventoryItems.title": "Gerenciar itens de estoque (ingredientes)",
    "organism.manageInventoryItems.title": "Cadastro de itens de estoque",
    "filter.name.label": "Nome",
    "filter.status.label": "Status",
    "column.name.label": "Nome",
    "column.unit.label": "Unidade",
    "column.currentQuantity.label": "Qtd. Atual",
    "column.minimumLevel.label": "Nível Mínimo",
    "column.status.label": "Status",
    "column.updatedAt.label": "Atualizado em",
    "toolbar.new.label": "Novo Item",
    "toolbar.refresh.label": "Atualizar",
    "rowAction.edit.label": "Editar",
    "rowAction.deactivate.label": "Desativar",
    "summary.totalItems.label": "Total de itens",
    "summary.lowStockItems.label": "Itens com baixo estoque",
    "summary.activeItems.label": "Itens ativos",
    "field.name.label": "Nome do ingrediente",
    "field.description.label": "Descrição",
    "field.unit.label": "Unidade de medida",
    "field.currentQuantity.label": "Quantidade atual",
    "field.minimumLevel.label": "Nível mínimo",
    "field.status.label": "Status",
    "action.save.label": "Salvar",
    "action.cancel.label": "Cancelar",
    "table.empty": "Nenhum item de estoque encontrado"
  },
  "dataBindings": [
    {
      "id": "bind_inventory_list",
      "source": "InventoryItem",
      "entity": "InventoryItem",
      "description": "Carrega lista de itens de estoque para exibição na tabela",
      "stateKey": "inventoryItems"
    },
    {
      "id": "bind_manage_inventory",
      "source": "InventoryItem",
      "entity": "InventoryItem",
      "command": "manageInventoryItems",
      "description": "Executa comando manageInventoryItems para criar/editar/desativar itens de estoque",
      "stateKey": "ui.manageInventoryItems.data.manageInventoryItems",
      "inputStateKeys": [
        "ui.manageInventoryItems.input.manageInventoryItems.name",
        "ui.manageInventoryItems.input.manageInventoryItems.description",
        "ui.manageInventoryItems.input.manageInventoryItems.unit",
        "ui.manageInventoryItems.input.manageInventoryItems.currentQuantity",
        "ui.manageInventoryItems.input.manageInventoryItems.minimumLevel",
        "ui.manageInventoryItems.input.manageInventoryItems.status"
      ]
    },
    {
      "id": "bind_inventory_summary",
      "source": "InventoryItem",
      "entity": "InventoryItem",
      "description": "Calcula totais de itens, itens ativos e itens com baixo estoque para o painel de resumo",
      "stateKey": "inventorySummary"
    }
  ]
};

export const pipeline = [
  {
    "id": "manageInventoryItems__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/manageInventoryItems.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/manageInventoryItems.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/manageInventoryItems.ts",
      "_102050_/l2/cafeFlow/web/contracts/manageInventoryItems.ts"
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
