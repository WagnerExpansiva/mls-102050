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
      "id": "sec-closeDailyShift-main",
      "type": "section",
      "sectionName": "Fechar turno diário (fechamento de caixa)",
      "titleKey": "closeDailyShift.section.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org-updateDailyShiftStatus",
          "type": "updateDailyShiftStatus",
          "organismName": "UpdateDailyShiftStatus",
          "titleKey": "closeDailyShift.org.updateDailyShiftStatus.title",
          "purpose": "Update Daily Shift Status",
          "userActions": [
            "updateDailyShiftStatus"
          ],
          "requiredEntities": [
            "DailyShift"
          ],
          "readsFields": [
            "dailyShiftId",
            "shiftDate",
            "status",
            "openedAt",
            "openingCashBalance",
            "totalSales",
            "totalPayments"
          ],
          "writesFields": [
            "status",
            "closedAt",
            "closingCashBalance",
            "closingNotes"
          ],
          "rulesApplied": [
            "paymentTimingByOrderType",
            "aiOutputLanguageSelection"
          ],
          "order": 10,
          "moleculeRefs": [
            {
              "id": "mol-shiftSummary",
              "type": "summaryPanel",
              "order": 10
            },
            {
              "id": "mol-closeShiftForm",
              "type": "form",
              "order": 20
            },
            {
              "id": "mol-updateShiftActionBar",
              "type": "actionBar",
              "order": 30
            }
          ]
        },
        {
          "id": "org-recordClosingCashMovement",
          "type": "recordClosingCashMovement",
          "organismName": "RecordClosingCashMovement",
          "titleKey": "closeDailyShift.org.recordClosingCashMovement.title",
          "purpose": "Record Closing Cash Movement",
          "userActions": [
            "recordClosingCashMovement"
          ],
          "requiredEntities": [
            "DailyShift"
          ],
          "readsFields": [
            "shiftDate",
            "status",
            "openedAt",
            "closingCashBalance",
            "totalSales",
            "totalPayments",
            "closingNotes"
          ],
          "writesFields": [
            "closingCashBalance",
            "closingNotes",
            "status",
            "closedAt"
          ],
          "rulesApplied": [
            "paymentTimingByOrderType",
            "aiOutputLanguageSelection"
          ],
          "order": 20,
          "moleculeRefs": [
            {
              "id": "mol-closingSummary",
              "type": "summaryPanel",
              "order": 10
            },
            {
              "id": "mol-recordMovementActionBar",
              "type": "actionBar",
              "order": 20
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "closeDailyShift-default",
    "type": "page",
    "sections": [
      {
        "id": "sec-closeDailyShift-main",
        "type": "section",
        "sectionName": "Fechar turno diário (fechamento de caixa)",
        "titleKey": "closeDailyShift.section.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org-updateDailyShiftStatus",
            "type": "updateDailyShiftStatus",
            "organismName": "UpdateDailyShiftStatus",
            "titleKey": "closeDailyShift.org.updateDailyShiftStatus.title",
            "purpose": "Update Daily Shift Status",
            "userActions": [
              "updateDailyShiftStatus"
            ],
            "requiredEntities": [
              "DailyShift"
            ],
            "readsFields": [
              "dailyShiftId",
              "shiftDate",
              "status",
              "openedAt",
              "openingCashBalance",
              "totalSales",
              "totalPayments"
            ],
            "writesFields": [
              "status",
              "closedAt",
              "closingCashBalance",
              "closingNotes"
            ],
            "rulesApplied": [
              "paymentTimingByOrderType",
              "aiOutputLanguageSelection"
            ],
            "order": 10,
            "molecules": [
              {
                "id": "mol-shiftSummary",
                "type": "summaryPanel",
                "order": 10,
                "fields": [
                  {
                    "id": "fld-sum-shiftDate",
                    "field": "shiftDate",
                    "labelKey": "closeDailyShift.field.shiftDate",
                    "order": 10,
                    "required": false,
                    "inputType": "date",
                    "format": "date",
                    "source": "DailyShift",
                    "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.shiftDate"
                  },
                  {
                    "id": "fld-sum-status",
                    "field": "status",
                    "labelKey": "closeDailyShift.field.status",
                    "order": 20,
                    "required": false,
                    "inputType": "text",
                    "source": "DailyShift",
                    "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.status"
                  },
                  {
                    "id": "fld-sum-openedAt",
                    "field": "openedAt",
                    "labelKey": "closeDailyShift.field.openedAt",
                    "order": 30,
                    "required": false,
                    "inputType": "datetime",
                    "format": "datetime",
                    "source": "DailyShift",
                    "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.openedAt"
                  },
                  {
                    "id": "fld-sum-openingCashBalance",
                    "field": "openingCashBalance",
                    "labelKey": "closeDailyShift.field.openingCashBalance",
                    "order": 40,
                    "required": false,
                    "inputType": "number",
                    "format": "money",
                    "source": "DailyShift",
                    "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.openingCashBalance"
                  },
                  {
                    "id": "fld-sum-totalSales",
                    "field": "totalSales",
                    "labelKey": "closeDailyShift.field.totalSales",
                    "order": 50,
                    "required": false,
                    "inputType": "number",
                    "format": "money",
                    "source": "DailyShift",
                    "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.totalSales"
                  },
                  {
                    "id": "fld-sum-totalPayments",
                    "field": "totalPayments",
                    "labelKey": "closeDailyShift.field.totalPayments",
                    "order": 60,
                    "required": false,
                    "inputType": "number",
                    "format": "money",
                    "source": "DailyShift",
                    "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.totalPayments"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "mol-closeShiftForm",
                "type": "form",
                "order": 20,
                "fields": [
                  {
                    "id": "fld-form-closingCashBalance",
                    "field": "closingCashBalance",
                    "labelKey": "closeDailyShift.field.closingCashBalance",
                    "order": 10,
                    "required": true,
                    "inputType": "number",
                    "format": "money",
                    "source": "DailyShift",
                    "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.closingCashBalance"
                  },
                  {
                    "id": "fld-form-closedAt",
                    "field": "closedAt",
                    "labelKey": "closeDailyShift.field.closedAt",
                    "order": 20,
                    "required": false,
                    "inputType": "datetime",
                    "format": "datetime",
                    "source": "DailyShift",
                    "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.closedAt"
                  },
                  {
                    "id": "fld-form-status",
                    "field": "status",
                    "labelKey": "closeDailyShift.field.status",
                    "order": 30,
                    "required": true,
                    "inputType": "select",
                    "source": "DailyShift",
                    "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.status"
                  },
                  {
                    "id": "fld-form-closingNotes",
                    "field": "closingNotes",
                    "labelKey": "closeDailyShift.field.closingNotes",
                    "order": 40,
                    "required": false,
                    "inputType": "textarea",
                    "source": "DailyShift",
                    "stateKey": "ui.closeDailyShift.input.updateDailyShiftStatus.closingNotes"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "mol-updateShiftActionBar",
                "type": "actionBar",
                "order": 30,
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-updateDailyShiftStatus",
                    "action": "updateDailyShiftStatus",
                    "labelKey": "closeDailyShift.action.updateDailyShiftStatus",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "updateDailyShiftStatus"
                  }
                ]
              }
            ]
          },
          {
            "id": "org-recordClosingCashMovement",
            "type": "recordClosingCashMovement",
            "organismName": "RecordClosingCashMovement",
            "titleKey": "closeDailyShift.org.recordClosingCashMovement.title",
            "purpose": "Record Closing Cash Movement",
            "userActions": [
              "recordClosingCashMovement"
            ],
            "requiredEntities": [
              "DailyShift"
            ],
            "readsFields": [
              "shiftDate",
              "status",
              "openedAt",
              "closingCashBalance",
              "totalSales",
              "totalPayments",
              "closingNotes"
            ],
            "writesFields": [
              "closingCashBalance",
              "closingNotes",
              "status",
              "closedAt"
            ],
            "rulesApplied": [
              "paymentTimingByOrderType",
              "aiOutputLanguageSelection"
            ],
            "order": 20,
            "molecules": [
              {
                "id": "mol-closingSummary",
                "type": "summaryPanel",
                "order": 10,
                "fields": [
                  {
                    "id": "fld-cs-shiftDate",
                    "field": "shiftDate",
                    "labelKey": "closeDailyShift.field.shiftDate",
                    "order": 10,
                    "required": false,
                    "inputType": "date",
                    "format": "date",
                    "source": "DailyShift",
                    "stateKey": "ui.closeDailyShift.input.recordClosingCashMovement.shiftDate"
                  },
                  {
                    "id": "fld-cs-status",
                    "field": "status",
                    "labelKey": "closeDailyShift.field.status",
                    "order": 20,
                    "required": false,
                    "inputType": "text",
                    "source": "DailyShift",
                    "stateKey": "ui.closeDailyShift.input.recordClosingCashMovement.status"
                  },
                  {
                    "id": "fld-cs-closingCashBalance",
                    "field": "closingCashBalance",
                    "labelKey": "closeDailyShift.field.closingCashBalance",
                    "order": 30,
                    "required": false,
                    "inputType": "number",
                    "format": "money",
                    "source": "DailyShift",
                    "stateKey": "ui.closeDailyShift.input.recordClosingCashMovement.closingCashBalance"
                  },
                  {
                    "id": "fld-cs-totalSales",
                    "field": "totalSales",
                    "labelKey": "closeDailyShift.field.totalSales",
                    "order": 40,
                    "required": false,
                    "inputType": "number",
                    "format": "money",
                    "source": "DailyShift",
                    "stateKey": "ui.closeDailyShift.input.recordClosingCashMovement.totalSales"
                  },
                  {
                    "id": "fld-cs-totalPayments",
                    "field": "totalPayments",
                    "labelKey": "closeDailyShift.field.totalPayments",
                    "order": 50,
                    "required": false,
                    "inputType": "number",
                    "format": "money",
                    "source": "DailyShift",
                    "stateKey": "ui.closeDailyShift.input.recordClosingCashMovement.totalPayments"
                  },
                  {
                    "id": "fld-cs-closingNotes",
                    "field": "closingNotes",
                    "labelKey": "closeDailyShift.field.closingNotes",
                    "order": 60,
                    "required": false,
                    "inputType": "textarea",
                    "source": "DailyShift",
                    "stateKey": "ui.closeDailyShift.input.recordClosingCashMovement.closingNotes"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "mol-recordMovementActionBar",
                "type": "actionBar",
                "order": 20,
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-recordClosingCashMovement",
                    "action": "recordClosingCashMovement",
                    "labelKey": "closeDailyShift.action.recordClosingCashMovement",
                    "order": 10,
                    "displayHint": "primary",
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
  "i18n": {
    "closeDailyShift.section.title": "Fechar turno diário (fechamento de caixa)",
    "closeDailyShift.org.updateDailyShiftStatus.title": "Atualizar status do turno",
    "closeDailyShift.org.recordClosingCashMovement.title": "Registrar movimento de fechamento de caixa",
    "closeDailyShift.field.shiftDate": "Data do turno",
    "closeDailyShift.field.status": "Status",
    "closeDailyShift.field.openedAt": "Aberto em",
    "closeDailyShift.field.openingCashBalance": "Saldo de abertura",
    "closeDailyShift.field.closingCashBalance": "Saldo de fechamento",
    "closeDailyShift.field.totalSales": "Total de vendas",
    "closeDailyShift.field.totalPayments": "Total de pagamentos",
    "closeDailyShift.field.closingNotes": "Observações de fechamento",
    "closeDailyShift.field.closedAt": "Fechado em",
    "closeDailyShift.action.updateDailyShiftStatus": "Atualizar status do turno",
    "closeDailyShift.action.recordClosingCashMovement": "Registrar movimento de fechamento"
  },
  "dataBindings": [
    {
      "id": "bind-updateDailyShiftStatus",
      "source": "bff",
      "entity": "DailyShift",
      "command": "updateDailyShiftStatus",
      "description": "Command to update daily shift status to closed with closing cash balance and notes.",
      "stateKey": "ui.closeDailyShift.data.updateDailyShiftStatus",
      "inputStateKeys": [
        "ui.closeDailyShift.input.updateDailyShiftStatus.dailyShiftId",
        "ui.closeDailyShift.input.updateDailyShiftStatus.shiftDate",
        "ui.closeDailyShift.input.updateDailyShiftStatus.status",
        "ui.closeDailyShift.input.updateDailyShiftStatus.openedAt",
        "ui.closeDailyShift.input.updateDailyShiftStatus.closedAt",
        "ui.closeDailyShift.input.updateDailyShiftStatus.openingCashBalance",
        "ui.closeDailyShift.input.updateDailyShiftStatus.closingCashBalance",
        "ui.closeDailyShift.input.updateDailyShiftStatus.totalSales",
        "ui.closeDailyShift.input.updateDailyShiftStatus.totalPayments",
        "ui.closeDailyShift.input.updateDailyShiftStatus.closingNotes"
      ]
    },
    {
      "id": "bind-recordClosingCashMovement",
      "source": "bff",
      "entity": "DailyShift",
      "command": "recordClosingCashMovement",
      "description": "Command to record the closing cash movement and finalize the shift.",
      "stateKey": "ui.closeDailyShift.data.recordClosingCashMovement",
      "inputStateKeys": [
        "ui.closeDailyShift.input.recordClosingCashMovement.shiftDate",
        "ui.closeDailyShift.input.recordClosingCashMovement.status",
        "ui.closeDailyShift.input.recordClosingCashMovement.openedAt",
        "ui.closeDailyShift.input.recordClosingCashMovement.closedAt",
        "ui.closeDailyShift.input.recordClosingCashMovement.openingCashBalance",
        "ui.closeDailyShift.input.recordClosingCashMovement.closingCashBalance",
        "ui.closeDailyShift.input.recordClosingCashMovement.totalSales",
        "ui.closeDailyShift.input.recordClosingCashMovement.totalPayments",
        "ui.closeDailyShift.input.recordClosingCashMovement.closingNotes"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "closeDailyShift__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/closeDailyShift.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/closeDailyShift.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/closeDailyShift.ts",
      "_102050_/l2/cafeFlow/web/contracts/closeDailyShift.ts"
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
