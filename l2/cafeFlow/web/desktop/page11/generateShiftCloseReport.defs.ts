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
      "id": "sec-generate-shift-close-report",
      "type": "section",
      "sectionName": "Gerar relatório de fechamento de turno",
      "titleKey": "generateShiftCloseReport.section.title",
      "mode": "view",
      "order": 10,
      "organisms": [
        {
          "id": "org-generate-shift-close-report",
          "type": "panel",
          "organismName": "GenerateShiftCloseReport",
          "titleKey": "generateShiftCloseReport.organism.title",
          "purpose": "Gerar relatório de fechamento de turno",
          "userActions": [
            "generateShiftCloseReport"
          ],
          "requiredEntities": [
            "DailyShift",
            "Payment",
            "CashMovement",
            "Order",
            "OrderItem"
          ],
          "readsFields": [
            "DailyShift.openingCashBalance",
            "DailyShift.closingCashBalance",
            "DailyShift.totalSales",
            "DailyShift.totalPayments",
            "DailyShift.closingNotes",
            "DailyShift.openedAt",
            "DailyShift.closedAt",
            "DailyShift.status"
          ],
          "writesFields": [],
          "rulesApplied": [
            "paymentTimingByOrderType",
            "aiOutputLanguageSelection"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "int-generate-shift-close-report-filters",
              "intent": "commandForm",
              "stateKey": "ui.generateShiftCloseReport.data.generateShiftCloseReport",
              "order": 10
            },
            {
              "id": "int-generate-shift-close-report-summary",
              "intent": "summary",
              "stateKey": "ui.generateShiftCloseReport.data.generateShiftCloseReport",
              "order": 20
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "generateShiftCloseReport.layout",
    "type": "page",
    "sections": [
      {
        "id": "sec-generate-shift-close-report",
        "type": "section",
        "sectionName": "Gerar relatório de fechamento de turno",
        "titleKey": "generateShiftCloseReport.section.title",
        "mode": "view",
        "order": 10,
        "organisms": [
          {
            "id": "org-generate-shift-close-report",
            "type": "panel",
            "organismName": "GenerateShiftCloseReport",
            "titleKey": "generateShiftCloseReport.organism.title",
            "purpose": "Gerar relatório de fechamento de turno",
            "userActions": [
              "generateShiftCloseReport"
            ],
            "requiredEntities": [
              "DailyShift",
              "Payment",
              "CashMovement",
              "Order",
              "OrderItem"
            ],
            "readsFields": [
              "DailyShift.openingCashBalance",
              "DailyShift.closingCashBalance",
              "DailyShift.totalSales",
              "DailyShift.totalPayments",
              "DailyShift.closingNotes",
              "DailyShift.openedAt",
              "DailyShift.closedAt",
              "DailyShift.status"
            ],
            "writesFields": [],
            "rulesApplied": [
              "paymentTimingByOrderType",
              "aiOutputLanguageSelection"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "int-generate-shift-close-report-filters",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "generateShiftCloseReport.filters.title",
                "fields": [
                  {
                    "id": "fld-generate-status",
                    "field": "status",
                    "labelKey": "generateShiftCloseReport.filters.status",
                    "order": 10,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.generateShiftCloseReport.input.generateShiftCloseReport.status"
                  },
                  {
                    "id": "fld-generate-openedAt",
                    "field": "openedAt",
                    "labelKey": "generateShiftCloseReport.filters.openedAt",
                    "order": 20,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.generateShiftCloseReport.input.generateShiftCloseReport.openedAt"
                  },
                  {
                    "id": "fld-generate-closedAt",
                    "field": "closedAt",
                    "labelKey": "generateShiftCloseReport.filters.closedAt",
                    "order": 30,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.generateShiftCloseReport.input.generateShiftCloseReport.closedAt"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-generate-shift-close-report",
                    "action": "generateShiftCloseReport",
                    "labelKey": "generateShiftCloseReport.actions.generate",
                    "order": 10,
                    "actionKey": "generateShiftCloseReport"
                  }
                ],
                "stateKey": "ui.generateShiftCloseReport.data.generateShiftCloseReport"
              },
              {
                "id": "int-generate-shift-close-report-summary",
                "intent": "summary",
                "order": 20,
                "titleKey": "generateShiftCloseReport.summary.title",
                "fields": [
                  {
                    "id": "fld-summary-status",
                    "field": "status",
                    "labelKey": "generateShiftCloseReport.summary.status",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.generateShiftCloseReport.input.generateShiftCloseReport.status"
                  },
                  {
                    "id": "fld-summary-openedAt",
                    "field": "openedAt",
                    "labelKey": "generateShiftCloseReport.summary.openedAt",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.generateShiftCloseReport.input.generateShiftCloseReport.openedAt"
                  },
                  {
                    "id": "fld-summary-closedAt",
                    "field": "closedAt",
                    "labelKey": "generateShiftCloseReport.summary.closedAt",
                    "order": 30,
                    "required": false,
                    "stateKey": "ui.generateShiftCloseReport.input.generateShiftCloseReport.closedAt"
                  },
                  {
                    "id": "fld-summary-openingCashBalance",
                    "field": "openingCashBalance",
                    "labelKey": "generateShiftCloseReport.summary.openingCashBalance",
                    "order": 40,
                    "required": false,
                    "stateKey": "ui.generateShiftCloseReport.data.generateShiftCloseReport"
                  },
                  {
                    "id": "fld-summary-closingCashBalance",
                    "field": "closingCashBalance",
                    "labelKey": "generateShiftCloseReport.summary.closingCashBalance",
                    "order": 50,
                    "required": false,
                    "stateKey": "ui.generateShiftCloseReport.data.generateShiftCloseReport"
                  },
                  {
                    "id": "fld-summary-totalSales",
                    "field": "totalSales",
                    "labelKey": "generateShiftCloseReport.summary.totalSales",
                    "order": 60,
                    "required": false,
                    "stateKey": "ui.generateShiftCloseReport.data.generateShiftCloseReport"
                  },
                  {
                    "id": "fld-summary-totalPayments",
                    "field": "totalPayments",
                    "labelKey": "generateShiftCloseReport.summary.totalPayments",
                    "order": 70,
                    "required": false,
                    "stateKey": "ui.generateShiftCloseReport.data.generateShiftCloseReport"
                  },
                  {
                    "id": "fld-summary-closingNotes",
                    "field": "closingNotes",
                    "labelKey": "generateShiftCloseReport.summary.closingNotes",
                    "order": 80,
                    "required": false,
                    "inputType": "textarea",
                    "stateKey": "ui.generateShiftCloseReport.data.generateShiftCloseReport"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.generateShiftCloseReport.data.generateShiftCloseReport"
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
    "id": "generateShiftCloseReport__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/generateShiftCloseReport.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/generateShiftCloseReport.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/generateShiftCloseReport.defs.ts",
      "_102050_/l2/cafeFlow/web/shared/generateShiftCloseReport.ts",
      "_102050_/l2/cafeFlow/web/contracts/generateShiftCloseReport.defs.ts",
      "_102050_/l2/cafeFlow/web/contracts/generateShiftCloseReport.ts"
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
