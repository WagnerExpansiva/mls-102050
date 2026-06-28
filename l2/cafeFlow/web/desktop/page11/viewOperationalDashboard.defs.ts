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
      "id": "section-dashboard",
      "type": "section",
      "sectionName": "Ver dashboard operacional do dia",
      "titleKey": "viewOperationalDashboard.section.dashboard.title",
      "mode": "view",
      "order": 10,
      "organisms": [
        {
          "id": "organism-dashboard",
          "type": "summaryPanel",
          "organismName": "ViewOperationalDashboard",
          "titleKey": "viewOperationalDashboard.organism.dashboard.title",
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
              "id": "intention-dashboard-query",
              "intent": "queryList",
              "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard",
              "action": "viewOperationalDashboard",
              "submitAction": "viewOperationalDashboard",
              "order": 10
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
        "id": "section-dashboard",
        "type": "section",
        "sectionName": "Ver dashboard operacional do dia",
        "titleKey": "viewOperationalDashboard.section.dashboard.title",
        "mode": "view",
        "order": 10,
        "organisms": [
          {
            "id": "organism-dashboard",
            "type": "summaryPanel",
            "organismName": "ViewOperationalDashboard",
            "titleKey": "viewOperationalDashboard.organism.dashboard.title",
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
                "id": "intention-dashboard-query",
                "intent": "queryList",
                "order": 10,
                "titleKey": "viewOperationalDashboard.intention.query.title",
                "action": "viewOperationalDashboard",
                "submitAction": "viewOperationalDashboard",
                "fields": [
                  {
                    "id": "field-dailyShiftId",
                    "field": "dailyShiftId",
                    "labelKey": "viewOperationalDashboard.field.dailyShiftId.label",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.dailyShiftId"
                  },
                  {
                    "id": "field-shiftDate",
                    "field": "shiftDate",
                    "labelKey": "viewOperationalDashboard.field.shiftDate.label",
                    "order": 20,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.shiftDate"
                  },
                  {
                    "id": "field-status",
                    "field": "status",
                    "labelKey": "viewOperationalDashboard.field.status.label",
                    "order": 30,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.status"
                  },
                  {
                    "id": "field-openedAt",
                    "field": "openedAt",
                    "labelKey": "viewOperationalDashboard.field.openedAt.label",
                    "order": 40,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.openedAt"
                  },
                  {
                    "id": "field-closedAt",
                    "field": "closedAt",
                    "labelKey": "viewOperationalDashboard.field.closedAt.label",
                    "order": 50,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.closedAt"
                  },
                  {
                    "id": "field-createdAt",
                    "field": "createdAt",
                    "labelKey": "viewOperationalDashboard.field.createdAt.label",
                    "order": 60,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.createdAt"
                  }
                ],
                "columns": [
                  {
                    "id": "col-dailyShiftId",
                    "field": "dailyShiftId",
                    "labelKey": "viewOperationalDashboard.col.dailyShiftId.label",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
                  },
                  {
                    "id": "col-shiftDate",
                    "field": "shiftDate",
                    "labelKey": "viewOperationalDashboard.col.shiftDate.label",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
                  },
                  {
                    "id": "col-status",
                    "field": "status",
                    "labelKey": "viewOperationalDashboard.col.status.label",
                    "order": 30,
                    "required": false,
                    "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
                  },
                  {
                    "id": "col-openedAt",
                    "field": "openedAt",
                    "labelKey": "viewOperationalDashboard.col.openedAt.label",
                    "order": 40,
                    "required": false,
                    "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
                  },
                  {
                    "id": "col-closedAt",
                    "field": "closedAt",
                    "labelKey": "viewOperationalDashboard.col.closedAt.label",
                    "order": 50,
                    "required": false,
                    "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
                  },
                  {
                    "id": "col-openingCashBalance",
                    "field": "openingCashBalance",
                    "labelKey": "viewOperationalDashboard.col.openingCashBalance.label",
                    "order": 60,
                    "required": false,
                    "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
                  },
                  {
                    "id": "col-closingCashBalance",
                    "field": "closingCashBalance",
                    "labelKey": "viewOperationalDashboard.col.closingCashBalance.label",
                    "order": 70,
                    "required": false,
                    "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
                  },
                  {
                    "id": "col-totalSales",
                    "field": "totalSales",
                    "labelKey": "viewOperationalDashboard.col.totalSales.label",
                    "order": 80,
                    "required": false,
                    "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
                  }
                ],
                "filters": [
                  {
                    "id": "filter-dailyShiftId",
                    "field": "dailyShiftId",
                    "labelKey": "viewOperationalDashboard.filter.dailyShiftId.label",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.dailyShiftId"
                  },
                  {
                    "id": "filter-shiftDate",
                    "field": "shiftDate",
                    "labelKey": "viewOperationalDashboard.filter.shiftDate.label",
                    "order": 20,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.shiftDate"
                  },
                  {
                    "id": "filter-status",
                    "field": "status",
                    "labelKey": "viewOperationalDashboard.filter.status.label",
                    "order": 30,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.status"
                  },
                  {
                    "id": "filter-openedAt",
                    "field": "openedAt",
                    "labelKey": "viewOperationalDashboard.filter.openedAt.label",
                    "order": 40,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.openedAt"
                  },
                  {
                    "id": "filter-closedAt",
                    "field": "closedAt",
                    "labelKey": "viewOperationalDashboard.filter.closedAt.label",
                    "order": 50,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.closedAt"
                  },
                  {
                    "id": "filter-createdAt",
                    "field": "createdAt",
                    "labelKey": "viewOperationalDashboard.filter.createdAt.label",
                    "order": 60,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.createdAt"
                  }
                ],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action-viewOperationalDashboard",
                    "action": "viewOperationalDashboard",
                    "labelKey": "viewOperationalDashboard.action.viewOperationalDashboard.label",
                    "order": 10,
                    "actionKey": "viewOperationalDashboard"
                  }
                ],
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
