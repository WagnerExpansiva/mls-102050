/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/generateShiftCloseReport.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "generateShiftCloseReport",
  "pageName": "Gerar relatório de fechamento de turno",
  "actor": "manager",
  "purpose": "Executar Gerar relatório de fechamento de turno.",
  "capabilities": [
    "generateShiftCloseReport"
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
      "id": "sec-filters",
      "type": "section",
      "sectionName": "Filtros do Turno",
      "titleKey": "section.filters.title",
      "mode": "view",
      "order": 10,
      "organisms": [
        {
          "id": "org-shift-filter",
          "type": "filter",
          "organismName": "ShiftFilter",
          "titleKey": "organism.shiftFilter.title",
          "purpose": "Filtrar turno para geração do relatório de fechamento",
          "userActions": [
            "generateShiftCloseReport"
          ],
          "requiredEntities": [
            "DailyShift"
          ],
          "readsFields": [
            "DailyShift.status",
            "DailyShift.openedAt",
            "DailyShift.closedAt"
          ],
          "writesFields": [],
          "rulesApplied": [
            "paymentTimingByOrderType",
            "aiOutputLanguageSelection"
          ],
          "order": 10,
          "moleculeRefs": [
            {
              "id": "mol-filter-form",
              "type": "form",
              "stateKey": "ui.generateShiftCloseReport.data.generateShiftCloseReport",
              "submitAction": "generateShiftCloseReport",
              "order": 10
            }
          ]
        }
      ]
    },
    {
      "id": "sec-report",
      "type": "section",
      "sectionName": "Relatório de Fechamento",
      "titleKey": "section.report.title",
      "mode": "view",
      "order": 20,
      "organisms": [
        {
          "id": "org-shift-report",
          "type": "summary",
          "organismName": "ShiftCloseReport",
          "titleKey": "organism.shiftCloseReport.title",
          "purpose": "Exibir resumo do fechamento do turno gerado",
          "userActions": [],
          "requiredEntities": [
            "DailyShift",
            "Payment",
            "CashMovement",
            "Order",
            "OrderItem"
          ],
          "readsFields": [
            "DailyShift.status",
            "DailyShift.openedAt",
            "DailyShift.closedAt",
            "DailyShift.openingCashBalance",
            "DailyShift.closingCashBalance",
            "DailyShift.totalSales",
            "DailyShift.totalPayments",
            "DailyShift.closingNotes"
          ],
          "writesFields": [],
          "rulesApplied": [
            "paymentTimingByOrderType",
            "aiOutputLanguageSelection"
          ],
          "order": 10,
          "moleculeRefs": [
            {
              "id": "mol-summary-panel",
              "type": "summaryPanel",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "generateShiftCloseReport",
    "type": "page",
    "sections": [
      {
        "id": "sec-filters",
        "type": "section",
        "sectionName": "Filtros do Turno",
        "titleKey": "section.filters.title",
        "mode": "view",
        "order": 10,
        "organisms": [
          {
            "id": "org-shift-filter",
            "type": "filter",
            "organismName": "ShiftFilter",
            "titleKey": "organism.shiftFilter.title",
            "purpose": "Filtrar turno para geração do relatório de fechamento",
            "userActions": [
              "generateShiftCloseReport"
            ],
            "requiredEntities": [
              "DailyShift"
            ],
            "readsFields": [
              "DailyShift.status",
              "DailyShift.openedAt",
              "DailyShift.closedAt"
            ],
            "writesFields": [],
            "rulesApplied": [
              "paymentTimingByOrderType",
              "aiOutputLanguageSelection"
            ],
            "order": 10,
            "molecules": [
              {
                "id": "mol-filter-form",
                "type": "form",
                "order": 10,
                "titleKey": "molecule.filterForm.title",
                "submitAction": "generateShiftCloseReport",
                "fields": [
                  {
                    "id": "fld-status",
                    "field": "status",
                    "labelKey": "field.status.label",
                    "order": 10,
                    "required": false,
                    "inputType": "select",
                    "source": "DailyShift",
                    "stateKey": "ui.generateShiftCloseReport.input.generateShiftCloseReport.status"
                  },
                  {
                    "id": "fld-openedAt",
                    "field": "openedAt",
                    "labelKey": "field.openedAt.label",
                    "order": 20,
                    "required": false,
                    "inputType": "date",
                    "source": "DailyShift",
                    "stateKey": "ui.generateShiftCloseReport.input.generateShiftCloseReport.openedAt"
                  },
                  {
                    "id": "fld-closedAt",
                    "field": "closedAt",
                    "labelKey": "field.closedAt.label",
                    "order": 30,
                    "required": false,
                    "inputType": "date",
                    "source": "DailyShift",
                    "stateKey": "ui.generateShiftCloseReport.input.generateShiftCloseReport.closedAt"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-generate",
                    "action": "generateShiftCloseReport",
                    "labelKey": "action.generateShiftCloseReport.label",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "generateShiftCloseReport"
                  }
                ],
                "stateKey": "ui.generateShiftCloseReport.data.generateShiftCloseReport"
              }
            ]
          }
        ]
      },
      {
        "id": "sec-report",
        "type": "section",
        "sectionName": "Relatório de Fechamento",
        "titleKey": "section.report.title",
        "mode": "view",
        "order": 20,
        "organisms": [
          {
            "id": "org-shift-report",
            "type": "summary",
            "organismName": "ShiftCloseReport",
            "titleKey": "organism.shiftCloseReport.title",
            "purpose": "Exibir resumo do fechamento do turno gerado",
            "userActions": [],
            "requiredEntities": [
              "DailyShift",
              "Payment",
              "CashMovement",
              "Order",
              "OrderItem"
            ],
            "readsFields": [
              "DailyShift.status",
              "DailyShift.openedAt",
              "DailyShift.closedAt",
              "DailyShift.openingCashBalance",
              "DailyShift.closingCashBalance",
              "DailyShift.totalSales",
              "DailyShift.totalPayments",
              "DailyShift.closingNotes"
            ],
            "writesFields": [],
            "rulesApplied": [
              "paymentTimingByOrderType",
              "aiOutputLanguageSelection"
            ],
            "order": 10,
            "molecules": [
              {
                "id": "mol-summary-panel",
                "type": "summaryPanel",
                "order": 10,
                "titleKey": "molecule.summaryPanel.title",
                "binding": "binding.generateShiftCloseReport",
                "emptyKey": "empty.report",
                "fields": [
                  {
                    "id": "fld-res-status",
                    "field": "status",
                    "labelKey": "field.status.label",
                    "order": 10,
                    "required": false,
                    "source": "DailyShift",
                    "stateKey": "result.status"
                  },
                  {
                    "id": "fld-res-openedAt",
                    "field": "openedAt",
                    "labelKey": "field.openedAt.label",
                    "order": 20,
                    "required": false,
                    "source": "DailyShift",
                    "stateKey": "result.openedAt"
                  },
                  {
                    "id": "fld-res-closedAt",
                    "field": "closedAt",
                    "labelKey": "field.closedAt.label",
                    "order": 30,
                    "required": false,
                    "source": "DailyShift",
                    "stateKey": "result.closedAt"
                  },
                  {
                    "id": "fld-res-openingCashBalance",
                    "field": "openingCashBalance",
                    "labelKey": "field.openingCashBalance.label",
                    "order": 40,
                    "required": false,
                    "format": "money",
                    "source": "DailyShift",
                    "stateKey": "result.openingCashBalance"
                  },
                  {
                    "id": "fld-res-closingCashBalance",
                    "field": "closingCashBalance",
                    "labelKey": "field.closingCashBalance.label",
                    "order": 50,
                    "required": false,
                    "format": "money",
                    "source": "DailyShift",
                    "stateKey": "result.closingCashBalance"
                  },
                  {
                    "id": "fld-res-totalSales",
                    "field": "totalSales",
                    "labelKey": "field.totalSales.label",
                    "order": 60,
                    "required": false,
                    "format": "money",
                    "source": "DailyShift",
                    "stateKey": "result.totalSales"
                  },
                  {
                    "id": "fld-res-totalPayments",
                    "field": "totalPayments",
                    "labelKey": "field.totalPayments.label",
                    "order": 70,
                    "required": false,
                    "format": "money",
                    "source": "DailyShift",
                    "stateKey": "result.totalPayments"
                  },
                  {
                    "id": "fld-res-closingNotes",
                    "field": "closingNotes",
                    "labelKey": "field.closingNotes.label",
                    "order": 80,
                    "required": false,
                    "source": "DailyShift",
                    "stateKey": "result.closingNotes"
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
    "page.title": "Gerar relatório de fechamento de turno",
    "section.filters.title": "Filtros do Turno",
    "section.report.title": "Relatório de Fechamento",
    "organism.shiftFilter.title": "Critérios de Seleção",
    "organism.shiftCloseReport.title": "Resumo do Fechamento",
    "molecule.filterForm.title": "Selecionar Turno",
    "molecule.summaryPanel.title": "Resumo Financeiro",
    "field.status.label": "Status",
    "field.openedAt.label": "Data de Abertura",
    "field.closedAt.label": "Data de Fechamento",
    "field.openingCashBalance.label": "Valor Inicial em Caixa",
    "field.closingCashBalance.label": "Valor Final em Caixa",
    "field.totalSales.label": "Total de Vendas",
    "field.totalPayments.label": "Total de Pagamentos",
    "field.closingNotes.label": "Observações de Fechamento",
    "action.generateShiftCloseReport.label": "Gerar Relatório",
    "empty.report": "Nenhum relatório gerado. Ajuste os filtros e clique em Gerar Relatório."
  },
  "dataBindings": [
    {
      "id": "binding.generateShiftCloseReport",
      "source": "command",
      "command": "generateShiftCloseReport",
      "description": "Executa a consulta de relatório de fechamento de turno e armazena o resultado em estado compartilhado",
      "stateKey": "ui.generateShiftCloseReport.data.generateShiftCloseReport",
      "inputStateKeys": [
        "ui.generateShiftCloseReport.input.generateShiftCloseReport.status",
        "ui.generateShiftCloseReport.input.generateShiftCloseReport.openedAt",
        "ui.generateShiftCloseReport.input.generateShiftCloseReport.closedAt"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "generateShiftCloseReport__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/generateShiftCloseReport.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/generateShiftCloseReport.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/generateShiftCloseReport.ts",
      "_102050_/l2/cafeFlow/web/contracts/generateShiftCloseReport.ts"
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
