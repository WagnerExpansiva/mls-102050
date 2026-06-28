/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/closeDailyShift.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "closeDailyShift",
  "pageName": "Fechar turno diário (fechamento de caixa)",
  "actor": "cashier",
  "purpose": "Executar Fechar turno diário (fechamento de caixa).",
  "capabilities": [
    "closeDailyShift"
  ],
  "flowRefs": {
    "experienceFlows": [
      "closeDailyShift"
    ],
    "entityLifecycles": [],
    "taskWorkflows": [
      "closeDailyShift"
    ],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "sec-close-daily-shift",
      "type": "section",
      "sectionName": "Fechar turno diário (fechamento de caixa)",
      "titleKey": "closeDailyShift.section.main.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org-update-daily-shift-status",
          "type": "form",
          "organismName": "UpdateDailyShiftStatus",
          "titleKey": "closeDailyShift.organism.updateDailyShiftStatus.title",
          "purpose": "Update Daily Shift Status",
          "userActions": [
            "updateDailyShiftStatus"
          ],
          "requiredEntities": [
            "DailyShift"
          ],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent-update-daily-shift-status-form",
              "intent": "commandForm",
              "action": "updateDailyShiftStatus",
              "submitAction": "updateDailyShiftStatus",
              "order": 10
            }
          ]
        },
        {
          "id": "org-record-closing-cash-movement",
          "type": "form",
          "organismName": "RecordClosingCashMovement",
          "titleKey": "closeDailyShift.organism.recordClosingCashMovement.title",
          "purpose": "Record Closing Cash Movement",
          "userActions": [
            "recordClosingCashMovement"
          ],
          "requiredEntities": [
            "DailyShift"
          ],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [],
          "order": 20,
          "intentionRefs": [
            {
              "id": "intent-record-closing-cash-movement-form",
              "intent": "commandForm",
              "action": "recordClosingCashMovement",
              "submitAction": "recordClosingCashMovement",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "closeDailyShift.layout",
    "type": "page",
    "sections": [
      {
        "id": "sec-close-daily-shift",
        "type": "section",
        "sectionName": "Fechar turno diário (fechamento de caixa)",
        "titleKey": "closeDailyShift.section.main.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org-update-daily-shift-status",
            "type": "form",
            "organismName": "UpdateDailyShiftStatus",
            "titleKey": "closeDailyShift.organism.updateDailyShiftStatus.title",
            "purpose": "Update Daily Shift Status",
            "userActions": [
              "updateDailyShiftStatus"
            ],
            "requiredEntities": [
              "DailyShift"
            ],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [],
            "order": 10,
            "intentions": [
              {
                "id": "intent-update-daily-shift-status-form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "closeDailyShift.intent.updateDailyShiftStatus.title",
                "action": "updateDailyShiftStatus",
                "submitAction": "updateDailyShiftStatus",
                "fields": [
                  {
                    "id": "field-update-daily-shift-id",
                    "field": "dailyShiftId",
                    "labelKey": "closeDailyShift.field.dailyShiftId.label",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.dailyShiftId"
                  },
                  {
                    "id": "field-update-shift-date",
                    "field": "shiftDate",
                    "labelKey": "closeDailyShift.field.shiftDate.label",
                    "order": 20,
                    "required": true,
                    "inputType": "date",
                    "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.shiftDate"
                  },
                  {
                    "id": "field-update-status",
                    "field": "status",
                    "labelKey": "closeDailyShift.field.status.label",
                    "order": 30,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.status"
                  },
                  {
                    "id": "field-update-opened-at",
                    "field": "openedAt",
                    "labelKey": "closeDailyShift.field.openedAt.label",
                    "order": 40,
                    "required": true,
                    "inputType": "datetime",
                    "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.openedAt"
                  },
                  {
                    "id": "field-update-closed-at",
                    "field": "closedAt",
                    "labelKey": "closeDailyShift.field.closedAt.label",
                    "order": 50,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.closedAt"
                  },
                  {
                    "id": "field-update-opening-cash-balance",
                    "field": "openingCashBalance",
                    "labelKey": "closeDailyShift.field.openingCashBalance.label",
                    "order": 60,
                    "required": false,
                    "inputType": "money",
                    "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.openingCashBalance"
                  },
                  {
                    "id": "field-update-closing-cash-balance",
                    "field": "closingCashBalance",
                    "labelKey": "closeDailyShift.field.closingCashBalance.label",
                    "order": 70,
                    "required": false,
                    "inputType": "money",
                    "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.closingCashBalance"
                  },
                  {
                    "id": "field-update-total-sales",
                    "field": "totalSales",
                    "labelKey": "closeDailyShift.field.totalSales.label",
                    "order": 80,
                    "required": false,
                    "inputType": "money",
                    "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.totalSales"
                  },
                  {
                    "id": "field-update-total-payments",
                    "field": "totalPayments",
                    "labelKey": "closeDailyShift.field.totalPayments.label",
                    "order": 90,
                    "required": false,
                    "inputType": "money",
                    "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.totalPayments"
                  },
                  {
                    "id": "field-update-closing-notes",
                    "field": "closingNotes",
                    "labelKey": "closeDailyShift.field.closingNotes.label",
                    "order": 100,
                    "required": false,
                    "inputType": "textarea",
                    "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.closingNotes"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action-update-daily-shift-status",
                    "action": "updateDailyShiftStatus",
                    "labelKey": "closeDailyShift.action.updateDailyShiftStatus.label",
                    "order": 10,
                    "actionKey": "updateDailyShiftStatus"
                  }
                ]
              }
            ]
          },
          {
            "id": "org-record-closing-cash-movement",
            "type": "form",
            "organismName": "RecordClosingCashMovement",
            "titleKey": "closeDailyShift.organism.recordClosingCashMovement.title",
            "purpose": "Record Closing Cash Movement",
            "userActions": [
              "recordClosingCashMovement"
            ],
            "requiredEntities": [
              "DailyShift"
            ],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [],
            "order": 20,
            "intentions": [
              {
                "id": "intent-record-closing-cash-movement-form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "closeDailyShift.intent.recordClosingCashMovement.title",
                "action": "recordClosingCashMovement",
                "submitAction": "recordClosingCashMovement",
                "fields": [
                  {
                    "id": "field-record-shift-date",
                    "field": "shiftDate",
                    "labelKey": "closeDailyShift.field.shiftDate.label",
                    "order": 10,
                    "required": true,
                    "inputType": "date",
                    "stateKey": "ui.closeDailyShift.input.recordClosingCashMovement.shiftDate"
                  },
                  {
                    "id": "field-record-status",
                    "field": "status",
                    "labelKey": "closeDailyShift.field.status.label",
                    "order": 20,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.closeDailyShift.input.recordClosingCashMovement.status"
                  },
                  {
                    "id": "field-record-opened-at",
                    "field": "openedAt",
                    "labelKey": "closeDailyShift.field.openedAt.label",
                    "order": 30,
                    "required": true,
                    "inputType": "datetime",
                    "stateKey": "ui.closeDailyShift.input.recordClosingCashMovement.openedAt"
                  },
                  {
                    "id": "field-record-closed-at",
                    "field": "closedAt",
                    "labelKey": "closeDailyShift.field.closedAt.label",
                    "order": 40,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.closeDailyShift.input.recordClosingCashMovement.closedAt"
                  },
                  {
                    "id": "field-record-opening-cash-balance",
                    "field": "openingCashBalance",
                    "labelKey": "closeDailyShift.field.openingCashBalance.label",
                    "order": 50,
                    "required": false,
                    "inputType": "money",
                    "stateKey": "ui.closeDailyShift.input.recordClosingCashMovement.openingCashBalance"
                  },
                  {
                    "id": "field-record-closing-cash-balance",
                    "field": "closingCashBalance",
                    "labelKey": "closeDailyShift.field.closingCashBalance.label",
                    "order": 60,
                    "required": false,
                    "inputType": "money",
                    "stateKey": "ui.closeDailyShift.input.recordClosingCashMovement.closingCashBalance"
                  },
                  {
                    "id": "field-record-total-sales",
                    "field": "totalSales",
                    "labelKey": "closeDailyShift.field.totalSales.label",
                    "order": 70,
                    "required": false,
                    "inputType": "money",
                    "stateKey": "ui.closeDailyShift.input.recordClosingCashMovement.totalSales"
                  },
                  {
                    "id": "field-record-total-payments",
                    "field": "totalPayments",
                    "labelKey": "closeDailyShift.field.totalPayments.label",
                    "order": 80,
                    "required": false,
                    "inputType": "money",
                    "stateKey": "ui.closeDailyShift.input.recordClosingCashMovement.totalPayments"
                  },
                  {
                    "id": "field-record-closing-notes",
                    "field": "closingNotes",
                    "labelKey": "closeDailyShift.field.closingNotes.label",
                    "order": 90,
                    "required": false,
                    "inputType": "textarea",
                    "stateKey": "ui.closeDailyShift.input.recordClosingCashMovement.closingNotes"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action-record-closing-cash-movement",
                    "action": "recordClosingCashMovement",
                    "labelKey": "closeDailyShift.action.recordClosingCashMovement.label",
                    "order": 10,
                    "actionKey": "recordClosingCashMovement"
                  }
                ]
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
    "id": "closeDailyShift__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/closeDailyShift.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/closeDailyShift.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/closeDailyShift.defs.ts",
      "_102050_/l2/cafeFlow/web/shared/closeDailyShift.ts",
      "_102050_/l2/cafeFlow/web/contracts/closeDailyShift.defs.ts",
      "_102050_/l2/cafeFlow/web/contracts/closeDailyShift.ts"
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
