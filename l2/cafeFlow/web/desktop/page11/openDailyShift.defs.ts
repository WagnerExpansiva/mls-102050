/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/openDailyShift.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "openDailyShift",
  "pageName": "Abrir turno diário",
  "actor": "cashier",
  "purpose": "Executar Abrir turno diário.",
  "capabilities": [
    "openDailyShift"
  ],
  "flowRefs": {
    "experienceFlows": [
      "openDailyShift"
    ],
    "entityLifecycles": [],
    "taskWorkflows": [
      "openDailyShift"
    ],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section-open-daily-shift",
      "type": "section",
      "sectionName": "Abrir turno diário",
      "titleKey": "openDailyShift.section.openDailyShift.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "organism-create-daily-shift",
          "type": "form",
          "organismName": "CreateDailyShift",
          "titleKey": "openDailyShift.organism.createDailyShift.title",
          "purpose": "Criar turno diário",
          "userActions": [
            "createDailyShift"
          ],
          "requiredEntities": [
            "DailyShift"
          ],
          "readsFields": [],
          "writesFields": [
            "DailyShift.dailyShiftId",
            "DailyShift.shiftDate",
            "DailyShift.status",
            "DailyShift.openedAt",
            "DailyShift.openingCashBalance",
            "DailyShift.createdAt",
            "DailyShift.updatedAt"
          ],
          "rulesApplied": [
            "paymentTimingByOrderType",
            "aiOutputLanguageSelection"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intention-create-daily-shift-form",
              "intent": "commandForm",
              "submitAction": "createDailyShift",
              "order": 10
            }
          ]
        },
        {
          "id": "organism-record-opening-cash-movement",
          "type": "form",
          "organismName": "RecordOpeningCashMovement",
          "titleKey": "openDailyShift.organism.recordOpeningCashMovement.title",
          "purpose": "Registrar movimento de caixa de abertura",
          "userActions": [
            "recordOpeningCashMovement"
          ],
          "requiredEntities": [
            "CashMovement",
            "DailyShift"
          ],
          "readsFields": [],
          "writesFields": [
            "CashMovement.dailyShiftId",
            "CashMovement.movementType",
            "CashMovement.amount",
            "CashMovement.reason",
            "CashMovement.createdAt",
            "CashMovement.updatedAt"
          ],
          "rulesApplied": [],
          "order": 20,
          "intentionRefs": [
            {
              "id": "intention-record-opening-cash-movement-form",
              "intent": "commandForm",
              "submitAction": "recordOpeningCashMovement",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "openDailyShift.layout",
    "type": "page",
    "sections": [
      {
        "id": "section-open-daily-shift",
        "type": "section",
        "sectionName": "Abrir turno diário",
        "titleKey": "openDailyShift.section.openDailyShift.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "organism-create-daily-shift",
            "type": "form",
            "organismName": "CreateDailyShift",
            "titleKey": "openDailyShift.organism.createDailyShift.title",
            "purpose": "Criar turno diário",
            "userActions": [
              "createDailyShift"
            ],
            "requiredEntities": [
              "DailyShift"
            ],
            "readsFields": [],
            "writesFields": [
              "DailyShift.dailyShiftId",
              "DailyShift.shiftDate",
              "DailyShift.status",
              "DailyShift.openedAt",
              "DailyShift.openingCashBalance",
              "DailyShift.createdAt",
              "DailyShift.updatedAt"
            ],
            "rulesApplied": [
              "paymentTimingByOrderType",
              "aiOutputLanguageSelection"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intention-create-daily-shift-form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "openDailyShift.intention.createDailyShiftForm.title",
                "submitAction": "createDailyShift",
                "fields": [
                  {
                    "id": "field-dailyShift-shiftDate",
                    "field": "DailyShift.shiftDate",
                    "labelKey": "openDailyShift.field.shiftDate.label",
                    "order": 10,
                    "required": true,
                    "inputType": "date",
                    "format": "date",
                    "stateKey": "ui.openDailyShift.input.createDailyShift.DailyShift.shiftDate"
                  },
                  {
                    "id": "field-dailyShift-status",
                    "field": "DailyShift.status",
                    "labelKey": "openDailyShift.field.status.label",
                    "order": 20,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.openDailyShift.input.createDailyShift.DailyShift.status"
                  },
                  {
                    "id": "field-dailyShift-openedAt",
                    "field": "DailyShift.openedAt",
                    "labelKey": "openDailyShift.field.openedAt.label",
                    "order": 30,
                    "required": true,
                    "inputType": "datetime",
                    "format": "datetime",
                    "stateKey": "ui.openDailyShift.input.createDailyShift.DailyShift.openedAt"
                  },
                  {
                    "id": "field-dailyShift-openingCashBalance",
                    "field": "DailyShift.openingCashBalance",
                    "labelKey": "openDailyShift.field.openingCashBalance.label",
                    "order": 40,
                    "required": false,
                    "inputType": "number",
                    "format": "money",
                    "stateKey": "ui.openDailyShift.input.createDailyShift.DailyShift.openingCashBalance"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action-create-daily-shift",
                    "action": "createDailyShift",
                    "labelKey": "openDailyShift.action.createDailyShift.label",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "createDailyShift"
                  }
                ]
              }
            ]
          },
          {
            "id": "organism-record-opening-cash-movement",
            "type": "form",
            "organismName": "RecordOpeningCashMovement",
            "titleKey": "openDailyShift.organism.recordOpeningCashMovement.title",
            "purpose": "Registrar movimento de caixa de abertura",
            "userActions": [
              "recordOpeningCashMovement"
            ],
            "requiredEntities": [
              "CashMovement",
              "DailyShift"
            ],
            "readsFields": [],
            "writesFields": [
              "CashMovement.dailyShiftId",
              "CashMovement.movementType",
              "CashMovement.amount",
              "CashMovement.reason",
              "CashMovement.createdAt",
              "CashMovement.updatedAt"
            ],
            "rulesApplied": [],
            "order": 20,
            "intentions": [
              {
                "id": "intention-record-opening-cash-movement-form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "openDailyShift.intention.recordOpeningCashMovementForm.title",
                "submitAction": "recordOpeningCashMovement",
                "fields": [
                  {
                    "id": "field-cashMovement-movementType",
                    "field": "CashMovement.movementType",
                    "labelKey": "openDailyShift.field.movementType.label",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.openDailyShift.input.recordOpeningCashMovement.CashMovement.movementType"
                  },
                  {
                    "id": "field-cashMovement-amount",
                    "field": "CashMovement.amount",
                    "labelKey": "openDailyShift.field.amount.label",
                    "order": 20,
                    "required": true,
                    "inputType": "number",
                    "format": "money",
                    "stateKey": "ui.openDailyShift.input.recordOpeningCashMovement.CashMovement.amount"
                  },
                  {
                    "id": "field-cashMovement-reason",
                    "field": "CashMovement.reason",
                    "labelKey": "openDailyShift.field.reason.label",
                    "order": 30,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.openDailyShift.input.recordOpeningCashMovement.CashMovement.reason"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action-record-opening-cash-movement",
                    "action": "recordOpeningCashMovement",
                    "labelKey": "openDailyShift.action.recordOpeningCashMovement.label",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "recordOpeningCashMovement"
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
    "id": "openDailyShift__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/openDailyShift.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/openDailyShift.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/openDailyShift.defs.ts",
      "_102050_/l2/cafeFlow/web/shared/openDailyShift.ts",
      "_102050_/l2/cafeFlow/web/contracts/openDailyShift.defs.ts",
      "_102050_/l2/cafeFlow/web/contracts/openDailyShift.ts"
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
