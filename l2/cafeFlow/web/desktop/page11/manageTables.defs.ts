/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/manageTables.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "manageTables",
  "pageName": "Gerenciar mesas",
  "actor": "manager",
  "purpose": "Executar Gerenciar mesas.",
  "capabilities": [
    "manageTables"
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
      "id": "sec-manageTables",
      "type": "section",
      "sectionName": "Gerenciar mesas",
      "titleKey": "page.manageTables.section.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org-manageTables-tableList",
          "type": "organism",
          "organismName": "ManageTables",
          "titleKey": "page.manageTables.organism.tableList.title",
          "purpose": "Listar e filtrar mesas cadastradas para seleção e edição",
          "userActions": [
            "manageTables"
          ],
          "requiredEntities": [
            "Table"
          ],
          "readsFields": [
            "tableId",
            "number",
            "status",
            "createdAt",
            "updatedAt"
          ],
          "writesFields": [],
          "rulesApplied": [
            "tableOccupancyConsistency"
          ],
          "order": 10,
          "moleculeRefs": [
            {
              "id": "mol-tableFilters",
              "type": "filterBar",
              "order": 10
            },
            {
              "id": "mol-tableList",
              "type": "groupviewtable.mlDataTable",
              "stateKey": "manageTables.tableList",
              "order": 20
            }
          ]
        },
        {
          "id": "org-manageTables-form",
          "type": "organism",
          "organismName": "ManageTablesForm",
          "titleKey": "page.manageTables.organism.form.title",
          "purpose": "Formulário para criar ou editar uma mesa com número e status",
          "userActions": [
            "manageTables"
          ],
          "requiredEntities": [
            "Table"
          ],
          "readsFields": [
            "tableId",
            "number",
            "status"
          ],
          "writesFields": [
            "tableId",
            "number",
            "status"
          ],
          "rulesApplied": [
            "tableOccupancyConsistency"
          ],
          "order": 20,
          "moleculeRefs": [
            {
              "id": "mol-tableForm",
              "type": "form",
              "stateKey": "manageTables.form",
              "submitAction": "manageTables",
              "order": 10
            },
            {
              "id": "mol-tableFormActions",
              "type": "actionBar",
              "order": 20
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "manageTables-default",
    "type": "page",
    "sections": [
      {
        "id": "sec-manageTables",
        "type": "section",
        "sectionName": "Gerenciar mesas",
        "titleKey": "page.manageTables.section.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org-manageTables-tableList",
            "type": "organism",
            "organismName": "ManageTables",
            "titleKey": "page.manageTables.organism.tableList.title",
            "purpose": "Listar e filtrar mesas cadastradas para seleção e edição",
            "userActions": [
              "manageTables"
            ],
            "requiredEntities": [
              "Table"
            ],
            "readsFields": [
              "tableId",
              "number",
              "status",
              "createdAt",
              "updatedAt"
            ],
            "writesFields": [],
            "rulesApplied": [
              "tableOccupancyConsistency"
            ],
            "order": 10,
            "molecules": [
              {
                "id": "mol-tableFilters",
                "type": "filterBar",
                "order": 10,
                "fields": [],
                "columns": [],
                "filters": [
                  {
                    "id": "filter-status",
                    "field": "status",
                    "labelKey": "page.manageTables.filter.status",
                    "order": 10,
                    "required": false,
                    "inputType": "select",
                    "source": "Table.status",
                    "stateKey": "ui.manageTables.input.manageTables.status"
                  }
                ],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "mol-tableList",
                "type": "groupviewtable.mlDataTable",
                "order": 20,
                "binding": "Table",
                "emptyKey": "page.manageTables.table.empty",
                "stateKey": "manageTables.tableList",
                "fields": [],
                "columns": [
                  {
                    "id": "col-number",
                    "field": "number",
                    "labelKey": "page.manageTables.column.number",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.manageTables.data.manageTables"
                  },
                  {
                    "id": "col-status",
                    "field": "status",
                    "labelKey": "page.manageTables.column.status",
                    "order": 20,
                    "required": false,
                    "inputType": "text",
                    "source": "Table.status",
                    "stateKey": "ui.manageTables.data.manageTables"
                  },
                  {
                    "id": "col-createdAt",
                    "field": "createdAt",
                    "labelKey": "page.manageTables.column.createdAt",
                    "order": 30,
                    "required": false,
                    "inputType": "datetime",
                    "format": "datetime",
                    "stateKey": "ui.manageTables.data.manageTables"
                  },
                  {
                    "id": "col-updatedAt",
                    "field": "updatedAt",
                    "labelKey": "page.manageTables.column.updatedAt",
                    "order": 40,
                    "required": false,
                    "inputType": "datetime",
                    "format": "datetime",
                    "stateKey": "ui.manageTables.data.manageTables"
                  }
                ],
                "filters": [],
                "toolbar": [
                  {
                    "id": "tb-newTable",
                    "action": "manageTables",
                    "labelKey": "page.manageTables.toolbar.newTable",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "manageTables"
                  }
                ],
                "rowActions": [
                  {
                    "id": "ra-editTable",
                    "action": "manageTables",
                    "labelKey": "page.manageTables.rowAction.edit",
                    "order": 10,
                    "displayHint": "default",
                    "actionKey": "manageTables"
                  },
                  {
                    "id": "ra-deleteTable",
                    "action": "manageTables",
                    "labelKey": "page.manageTables.rowAction.delete",
                    "order": 20,
                    "displayHint": "danger",
                    "actionKey": "manageTables"
                  }
                ],
                "actions": []
              }
            ]
          },
          {
            "id": "org-manageTables-form",
            "type": "organism",
            "organismName": "ManageTablesForm",
            "titleKey": "page.manageTables.organism.form.title",
            "purpose": "Formulário para criar ou editar uma mesa com número e status",
            "userActions": [
              "manageTables"
            ],
            "requiredEntities": [
              "Table"
            ],
            "readsFields": [
              "tableId",
              "number",
              "status"
            ],
            "writesFields": [
              "tableId",
              "number",
              "status"
            ],
            "rulesApplied": [
              "tableOccupancyConsistency"
            ],
            "order": 20,
            "molecules": [
              {
                "id": "mol-tableForm",
                "type": "form",
                "order": 10,
                "binding": "Table",
                "submitAction": "manageTables",
                "stateKey": "manageTables.form",
                "fields": [
                  {
                    "id": "fld-tableId",
                    "field": "tableId",
                    "labelKey": "page.manageTables.field.tableId",
                    "order": 10,
                    "required": false,
                    "inputType": "hidden",
                    "stateKey": "ui.manageTables.input.manageTables.tableId"
                  },
                  {
                    "id": "fld-number",
                    "field": "number",
                    "labelKey": "page.manageTables.field.number",
                    "order": 20,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.manageTables.input.manageTables.number"
                  },
                  {
                    "id": "fld-status",
                    "field": "status",
                    "labelKey": "page.manageTables.field.status",
                    "order": 30,
                    "required": true,
                    "inputType": "select",
                    "source": "Table.status",
                    "stateKey": "ui.manageTables.input.manageTables.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "mol-tableFormActions",
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
                    "action": "manageTables",
                    "labelKey": "page.manageTables.action.save",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "manageTables"
                  },
                  {
                    "id": "act-cancel",
                    "action": "manageTables",
                    "labelKey": "page.manageTables.action.cancel",
                    "order": 20,
                    "displayHint": "default",
                    "actionKey": "manageTables"
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
    "page.manageTables.section.title": "Gerenciar mesas",
    "page.manageTables.organism.tableList.title": "Mesas cadastradas",
    "page.manageTables.organism.form.title": "Editar / criar mesa",
    "page.manageTables.filter.status": "Status",
    "page.manageTables.column.number": "Número",
    "page.manageTables.column.status": "Status",
    "page.manageTables.column.createdAt": "Criado em",
    "page.manageTables.column.updatedAt": "Atualizado em",
    "page.manageTables.toolbar.newTable": "Nova mesa",
    "page.manageTables.rowAction.edit": "Editar",
    "page.manageTables.rowAction.delete": "Remover",
    "page.manageTables.table.empty": "Nenhuma mesa cadastrada.",
    "page.manageTables.field.tableId": "ID da mesa",
    "page.manageTables.field.number": "Número da mesa",
    "page.manageTables.field.status": "Status da mesa",
    "page.manageTables.action.save": "Salvar",
    "page.manageTables.action.cancel": "Cancelar"
  },
  "dataBindings": [
    {
      "id": "bind-manageTables",
      "source": "bff",
      "entity": "Table",
      "command": "manageTables",
      "description": "Carrega lista de mesas e envia comando manageTables para criar/editar/remover mesas.",
      "stateKey": "ui.manageTables.data.manageTables",
      "inputStateKeys": [
        "ui.manageTables.input.manageTables.tableId",
        "ui.manageTables.input.manageTables.number",
        "ui.manageTables.input.manageTables.status"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "manageTables__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/manageTables.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/manageTables.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/manageTables.ts",
      "_102050_/l2/cafeFlow/web/contracts/manageTables.ts"
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
