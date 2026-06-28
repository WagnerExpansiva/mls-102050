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
      "id": "openDailyShift.section.main",
      "type": "section",
      "sectionName": "Abrir turno diário",
      "titleKey": "openDailyShift.section.main.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "openDailyShift.organism.createDailyShift",
          "type": "organism",
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
              "id": "openDailyShift.intention.createDailyShift.form",
              "intent": "commandForm",
              "submitAction": "createDailyShift",
              "order": 10
            }
          ]
        },
        {
          "id": "openDailyShift.organism.recordOpeningCashMovement",
          "type": "organism",
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
              "id": "openDailyShift.intention.recordOpeningCashMovement.form",
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
        "id": "openDailyShift.section.main",
        "type": "section",
        "sectionName": "Abrir turno diário",
        "titleKey": "openDailyShift.section.main.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "openDailyShift.organism.createDailyShift",
            "type": "organism",
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
                "id": "openDailyShift.intention.createDailyShift.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "openDailyShift.intention.createDailyShift.form.title",
                "submitAction": "createDailyShift",
                "fields": [
                  {
                    "id": "openDailyShift.field.createDailyShift.shiftDate",
                    "field": "shiftDate",
                    "labelKey": "openDailyShift.field.createDailyShift.shiftDate.label",
                    "order": 10,
                    "required": true,
                    "inputType": "date",
                    "stateKey": "ui.openDailyShift.input.createDailyShift.shiftDate"
                  },
                  {
                    "id": "openDailyShift.field.createDailyShift.status",
                    "field": "status",
                    "labelKey": "openDailyShift.field.createDailyShift.status.label",
                    "order": 20,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.openDailyShift.input.createDailyShift.status"
                  },
                  {
                    "id": "openDailyShift.field.createDailyShift.openedAt",
                    "field": "openedAt",
                    "labelKey": "openDailyShift.field.createDailyShift.openedAt.label",
                    "order": 30,
                    "required": true,
                    "inputType": "datetime",
                    "stateKey": "ui.openDailyShift.input.createDailyShift.openedAt"
                  },
                  {
                    "id": "openDailyShift.field.createDailyShift.openingCashBalance",
                    "field": "openingCashBalance",
                    "labelKey": "openDailyShift.field.createDailyShift.openingCashBalance.label",
                    "order": 40,
                    "required": false,
                    "inputType": "money",
                    "stateKey": "ui.openDailyShift.input.createDailyShift.openingCashBalance"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "openDailyShift.action.createDailyShift.submit",
                    "action": "createDailyShift",
                    "labelKey": "openDailyShift.action.createDailyShift.submit.label",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "createDailyShift"
                  }
                ]
              }
            ]
          },
          {
            "id": "openDailyShift.organism.recordOpeningCashMovement",
            "type": "organism",
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
                "id": "openDailyShift.intention.recordOpeningCashMovement.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "openDailyShift.intention.recordOpeningCashMovement.form.title",
                "submitAction": "recordOpeningCashMovement",
                "fields": [
                  {
                    "id": "openDailyShift.field.recordOpeningCashMovement.movementType",
                    "field": "movementType",
                    "labelKey": "openDailyShift.field.recordOpeningCashMovement.movementType.label",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.openDailyShift.input.recordOpeningCashMovement.movementType"
                  },
                  {
                    "id": "openDailyShift.field.recordOpeningCashMovement.amount",
                    "field": "amount",
                    "labelKey": "openDailyShift.field.recordOpeningCashMovement.amount.label",
                    "order": 20,
                    "required": true,
                    "inputType": "money",
                    "stateKey": "ui.openDailyShift.input.recordOpeningCashMovement.amount"
                  },
                  {
                    "id": "openDailyShift.field.recordOpeningCashMovement.reason",
                    "field": "reason",
                    "labelKey": "openDailyShift.field.recordOpeningCashMovement.reason.label",
                    "order": 30,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.openDailyShift.input.recordOpeningCashMovement.reason"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "openDailyShift.action.recordOpeningCashMovement.submit",
                    "action": "recordOpeningCashMovement",
                    "labelKey": "openDailyShift.action.recordOpeningCashMovement.submit.label",
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
