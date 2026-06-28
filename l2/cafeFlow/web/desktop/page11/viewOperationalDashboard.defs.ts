/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/viewOperationalDashboard.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "viewOperationalDashboard",
  "pageName": "Ver dashboard operacional do dia",
  "actor": "manager",
  "purpose": "Executar Ver dashboard operacional do dia.",
  "capabilities": [
    "viewOperationalDashboard"
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
      "id": "section.operationalDashboard",
      "type": "section",
      "sectionName": "Ver dashboard operacional do dia",
      "titleKey": "viewOperationalDashboard.section.title",
      "mode": "view",
      "order": 10,
      "organisms": [
        {
          "id": "organism.viewOperationalDashboard",
          "type": "panel",
          "organismName": "ViewOperationalDashboard",
          "titleKey": "viewOperationalDashboard.organism.title",
          "purpose": "Ver dashboard operacional do dia",
          "userActions": [
            "viewOperationalDashboard"
          ],
          "requiredEntities": [
            "DailyShift",
            "Order",
            "Payment",
            "CashMovement"
          ],
          "readsFields": [
            "dailyShiftId",
            "shiftDate",
            "status",
            "openedAt",
            "closedAt",
            "openingCashBalance",
            "closingCashBalance",
            "totalSales"
          ],
          "writesFields": [],
          "rulesApplied": [
            "paymentTimingByOrderType",
            "aiOutputLanguageSelection"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intention.dashboardFilters",
              "intent": "commandForm",
              "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard",
              "action": "viewOperationalDashboard",
              "submitAction": "viewOperationalDashboard",
              "order": 10
            },
            {
              "id": "intention.dashboardSummary",
              "intent": "summary",
              "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard",
              "order": 20
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "viewOperationalDashboard.layout",
    "type": "page",
    "sections": [
      {
        "id": "section.operationalDashboard",
        "type": "section",
        "sectionName": "Ver dashboard operacional do dia",
        "titleKey": "viewOperationalDashboard.section.title",
        "mode": "view",
        "order": 10,
        "organisms": [
          {
            "id": "organism.viewOperationalDashboard",
            "type": "panel",
            "organismName": "ViewOperationalDashboard",
            "titleKey": "viewOperationalDashboard.organism.title",
            "purpose": "Ver dashboard operacional do dia",
            "userActions": [
              "viewOperationalDashboard"
            ],
            "requiredEntities": [
              "DailyShift",
              "Order",
              "Payment",
              "CashMovement"
            ],
            "readsFields": [
              "dailyShiftId",
              "shiftDate",
              "status",
              "openedAt",
              "closedAt",
              "openingCashBalance",
              "closingCashBalance",
              "totalSales"
            ],
            "writesFields": [],
            "rulesApplied": [
              "paymentTimingByOrderType",
              "aiOutputLanguageSelection"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intention.dashboardFilters",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "viewOperationalDashboard.filters.title",
                "action": "viewOperationalDashboard",
                "submitAction": "viewOperationalDashboard",
                "fields": [
                  {
                    "id": "field.dailyShiftId",
                    "field": "dailyShiftId",
                    "labelKey": "viewOperationalDashboard.field.dailyShiftId",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.dailyShiftId"
                  },
                  {
                    "id": "field.shiftDate",
                    "field": "shiftDate",
                    "labelKey": "viewOperationalDashboard.field.shiftDate",
                    "order": 20,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.shiftDate"
                  },
                  {
                    "id": "field.status",
                    "field": "status",
                    "labelKey": "viewOperationalDashboard.field.status",
                    "order": 30,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.status"
                  },
                  {
                    "id": "field.openedAt",
                    "field": "openedAt",
                    "labelKey": "viewOperationalDashboard.field.openedAt",
                    "order": 40,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.openedAt"
                  },
                  {
                    "id": "field.closedAt",
                    "field": "closedAt",
                    "labelKey": "viewOperationalDashboard.field.closedAt",
                    "order": 50,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.closedAt"
                  },
                  {
                    "id": "field.createdAt",
                    "field": "createdAt",
                    "labelKey": "viewOperationalDashboard.field.createdAt",
                    "order": 60,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.createdAt"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action.viewOperationalDashboard",
                    "action": "viewOperationalDashboard",
                    "labelKey": "viewOperationalDashboard.action.run",
                    "order": 10,
                    "actionKey": "viewOperationalDashboard"
                  }
                ],
                "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
              },
              {
                "id": "intention.dashboardSummary",
                "intent": "summary",
                "order": 20,
                "titleKey": "viewOperationalDashboard.summary.title",
                "fields": [
                  {
                    "id": "field.summary.dailyShiftId",
                    "field": "dailyShiftId",
                    "labelKey": "viewOperationalDashboard.summary.dailyShiftId",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.dailyShiftId"
                  },
                  {
                    "id": "field.summary.shiftDate",
                    "field": "shiftDate",
                    "labelKey": "viewOperationalDashboard.summary.shiftDate",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.shiftDate"
                  },
                  {
                    "id": "field.summary.status",
                    "field": "status",
                    "labelKey": "viewOperationalDashboard.summary.status",
                    "order": 30,
                    "required": false,
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.status"
                  },
                  {
                    "id": "field.summary.openedAt",
                    "field": "openedAt",
                    "labelKey": "viewOperationalDashboard.summary.openedAt",
                    "order": 40,
                    "required": false,
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.openedAt"
                  },
                  {
                    "id": "field.summary.closedAt",
                    "field": "closedAt",
                    "labelKey": "viewOperationalDashboard.summary.closedAt",
                    "order": 50,
                    "required": false,
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.closedAt"
                  },
                  {
                    "id": "field.summary.openingCashBalance",
                    "field": "openingCashBalance",
                    "labelKey": "viewOperationalDashboard.summary.openingCashBalance",
                    "order": 60,
                    "required": false,
                    "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
                  },
                  {
                    "id": "field.summary.closingCashBalance",
                    "field": "closingCashBalance",
                    "labelKey": "viewOperationalDashboard.summary.closingCashBalance",
                    "order": 70,
                    "required": false,
                    "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
                  },
                  {
                    "id": "field.summary.totalSales",
                    "field": "totalSales",
                    "labelKey": "viewOperationalDashboard.summary.totalSales",
                    "order": 80,
                    "required": false,
                    "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
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
    "id": "viewOperationalDashboard__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/viewOperationalDashboard.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/viewOperationalDashboard.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/viewOperationalDashboard.defs.ts",
      "_102050_/l2/cafeFlow/web/shared/viewOperationalDashboard.ts",
      "_102050_/l2/cafeFlow/web/contracts/viewOperationalDashboard.defs.ts",
      "_102050_/l2/cafeFlow/web/contracts/viewOperationalDashboard.ts"
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
