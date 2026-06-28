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
      "id": "section-generate-shift-close-report",
      "type": "section",
      "sectionName": "Gerar relatório de fechamento de turno",
      "titleKey": "section.generateShiftCloseReport.title",
      "mode": "view",
      "order": 10,
      "organisms": [
        {
          "id": "organism-generate-shift-close-report",
          "type": "organism",
          "organismName": "GenerateShiftCloseReport",
          "titleKey": "organism.generateShiftCloseReport.title",
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
              "id": "intention-shift-close-report-filters",
              "intent": "commandForm",
              "stateKey": "ui.generateShiftCloseReport.data.generateShiftCloseReport",
              "action": "generateShiftCloseReport",
              "submitAction": "generateShiftCloseReport",
              "order": 10
            },
            {
              "id": "intention-shift-close-report-summary",
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
        "id": "section-generate-shift-close-report",
        "type": "section",
        "sectionName": "Gerar relatório de fechamento de turno",
        "titleKey": "section.generateShiftCloseReport.title",
        "mode": "view",
        "order": 10,
        "organisms": [
          {
            "id": "organism-generate-shift-close-report",
            "type": "organism",
            "organismName": "GenerateShiftCloseReport",
            "titleKey": "organism.generateShiftCloseReport.title",
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
                "id": "intention-shift-close-report-filters",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intention.shiftCloseReport.filters.title",
                "action": "generateShiftCloseReport",
                "submitAction": "generateShiftCloseReport",
                "emptyKey": "intention.shiftCloseReport.filters.empty",
                "fields": [
                  {
                    "id": "field-status",
                    "field": "status",
                    "labelKey": "field.status.label",
                    "order": 10,
                    "required": false,
                    "inputType": "select",
                    "format": "string",
                    "source": "DailyShift.status",
                    "stateKey": "ui.generateShiftCloseReport.input.generateShiftCloseReport.status"
                  },
                  {
                    "id": "field-openedAt",
                    "field": "openedAt",
                    "labelKey": "field.openedAt.label",
                    "order": 20,
                    "required": false,
                    "inputType": "datetime",
                    "format": "date",
                    "source": "DailyShift.openedAt",
                    "stateKey": "ui.generateShiftCloseReport.input.generateShiftCloseReport.openedAt"
                  },
                  {
                    "id": "field-closedAt",
                    "field": "closedAt",
                    "labelKey": "field.closedAt.label",
                    "order": 30,
                    "required": false,
                    "inputType": "datetime",
                    "format": "date",
                    "source": "DailyShift.closedAt",
                    "stateKey": "ui.generateShiftCloseReport.input.generateShiftCloseReport.closedAt"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action-generate-report",
                    "action": "generateShiftCloseReport",
                    "labelKey": "action.generateShiftCloseReport.label",
                    "order": 10,
                    "actionKey": "generateShiftCloseReport"
                  }
                ],
                "stateKey": "ui.generateShiftCloseReport.data.generateShiftCloseReport"
              },
              {
                "id": "intention-shift-close-report-summary",
                "intent": "summary",
                "order": 20,
                "titleKey": "intention.shiftCloseReport.summary.title",
                "emptyKey": "intention.shiftCloseReport.summary.empty",
                "fields": [
                  {
                    "id": "field-summary-status",
                    "field": "status",
                    "labelKey": "field.status.label",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "format": "string",
                    "source": "DailyShift.status",
                    "stateKey": "ui.generateShiftCloseReport.input.generateShiftCloseReport.status"
                  },
                  {
                    "id": "field-summary-openedAt",
                    "field": "openedAt",
                    "labelKey": "field.openedAt.label",
                    "order": 20,
                    "required": false,
                    "inputType": "datetime",
                    "format": "date",
                    "source": "DailyShift.openedAt",
                    "stateKey": "ui.generateShiftCloseReport.input.generateShiftCloseReport.openedAt"
                  },
                  {
                    "id": "field-summary-closedAt",
                    "field": "closedAt",
                    "labelKey": "field.closedAt.label",
                    "order": 30,
                    "required": false,
                    "inputType": "datetime",
                    "format": "date",
                    "source": "DailyShift.closedAt",
                    "stateKey": "ui.generateShiftCloseReport.input.generateShiftCloseReport.closedAt"
                  },
                  {
                    "id": "field-summary-openingCashBalance",
                    "field": "openingCashBalance",
                    "labelKey": "field.openingCashBalance.label",
                    "order": 40,
                    "required": false,
                    "inputType": "money",
                    "format": "number",
                    "source": "DailyShift.openingCashBalance",
                    "stateKey": "ui.generateShiftCloseReport.input.generateShiftCloseReport.openingCashBalance"
                  },
                  {
                    "id": "field-summary-closingCashBalance",
                    "field": "closingCashBalance",
                    "labelKey": "field.closingCashBalance.label",
                    "order": 50,
                    "required": false,
                    "inputType": "money",
                    "format": "number",
                    "source": "DailyShift.closingCashBalance",
                    "stateKey": "ui.generateShiftCloseReport.input.generateShiftCloseReport.closingCashBalance"
                  },
                  {
                    "id": "field-summary-totalSales",
                    "field": "totalSales",
                    "labelKey": "field.totalSales.label",
                    "order": 60,
                    "required": false,
                    "inputType": "money",
                    "format": "number",
                    "source": "DailyShift.totalSales",
                    "stateKey": "ui.generateShiftCloseReport.input.generateShiftCloseReport.totalSales"
                  },
                  {
                    "id": "field-summary-totalPayments",
                    "field": "totalPayments",
                    "labelKey": "field.totalPayments.label",
                    "order": 70,
                    "required": false,
                    "inputType": "money",
                    "format": "number",
                    "source": "DailyShift.totalPayments",
                    "stateKey": "ui.generateShiftCloseReport.input.generateShiftCloseReport.totalPayments"
                  },
                  {
                    "id": "field-summary-closingNotes",
                    "field": "closingNotes",
                    "labelKey": "field.closingNotes.label",
                    "order": 80,
                    "required": false,
                    "inputType": "text",
                    "format": "string",
                    "source": "DailyShift.closingNotes",
                    "stateKey": "ui.generateShiftCloseReport.input.generateShiftCloseReport.closingNotes"
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
