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
      "id": "sec_openDailyShift_main",
      "type": "section",
      "sectionName": "Abrir turno diário",
      "titleKey": "section.openDailyShift.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org_createDailyShift",
          "type": "formPanel",
          "organismName": "CreateDailyShift",
          "titleKey": "organism.createDailyShift.title",
          "purpose": "Criar turno diário informando data, status e saldo inicial",
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
          "moleculeRefs": [
            {
              "id": "mol_createDailyShift_timeline",
              "type": "statusTimeline",
              "stateKey": "workflow.openDailyShift.state",
              "order": 10
            },
            {
              "id": "mol_createDailyShift_form",
              "type": "form",
              "submitAction": "createDailyShift",
              "order": 20
            },
            {
              "id": "mol_createDailyShift_actionBar",
              "type": "actionBar",
              "order": 30
            }
          ]
        },
        {
          "id": "org_recordOpeningCashMovement",
          "type": "formPanel",
          "organismName": "RecordOpeningCashMovement",
          "titleKey": "organism.recordOpeningCashMovement.title",
          "purpose": "Registrar movimento de caixa de abertura vinculado ao turno criado",
          "userActions": [
            "recordOpeningCashMovement"
          ],
          "requiredEntities": [
            "CashMovement",
            "DailyShift"
          ],
          "readsFields": [
            "DailyShift.dailyShiftId",
            "DailyShift.shiftDate",
            "DailyShift.status",
            "DailyShift.openingCashBalance"
          ],
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
          "moleculeRefs": [
            {
              "id": "mol_recordOpening_summary",
              "type": "summaryPanel",
              "stateKey": "form.createDailyShift.dailyShiftId",
              "order": 10
            },
            {
              "id": "mol_recordOpening_form",
              "type": "form",
              "submitAction": "recordOpeningCashMovement",
              "order": 20
            },
            {
              "id": "mol_recordOpening_actionBar",
              "type": "actionBar",
              "order": 30
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "openDailyShift.default",
    "type": "page",
    "sections": [
      {
        "id": "sec_openDailyShift_main",
        "type": "section",
        "sectionName": "Abrir turno diário",
        "titleKey": "section.openDailyShift.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org_createDailyShift",
            "type": "formPanel",
            "organismName": "CreateDailyShift",
            "titleKey": "organism.createDailyShift.title",
            "purpose": "Criar turno diário informando data, status e saldo inicial",
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
            "molecules": [
              {
                "id": "mol_createDailyShift_timeline",
                "type": "statusTimeline",
                "order": 10,
                "titleKey": "molecule.createDailyShift.timeline.title",
                "displayHint": "horizontal",
                "stateKey": "workflow.openDailyShift.state",
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "mol_createDailyShift_form",
                "type": "form",
                "order": 20,
                "titleKey": "molecule.createDailyShift.form.title",
                "binding": "createDailyShift",
                "submitAction": "createDailyShift",
                "fields": [
                  {
                    "id": "fld_shiftDate",
                    "field": "DailyShift.shiftDate",
                    "labelKey": "field.shiftDate.label",
                    "order": 10,
                    "required": true,
                    "inputType": "date",
                    "format": "date",
                    "stateKey": "ui.openDailyShift.input.createDailyShift.DailyShift.shiftDate"
                  },
                  {
                    "id": "fld_status",
                    "field": "DailyShift.status",
                    "labelKey": "field.status.label",
                    "order": 20,
                    "required": true,
                    "inputType": "select",
                    "source": "enum:open,closed",
                    "stateKey": "ui.openDailyShift.input.createDailyShift.DailyShift.status"
                  },
                  {
                    "id": "fld_openedAt",
                    "field": "DailyShift.openedAt",
                    "labelKey": "field.openedAt.label",
                    "order": 30,
                    "required": true,
                    "inputType": "datetime",
                    "format": "datetime",
                    "stateKey": "ui.openDailyShift.input.createDailyShift.DailyShift.openedAt"
                  },
                  {
                    "id": "fld_openingCashBalance",
                    "field": "DailyShift.openingCashBalance",
                    "labelKey": "field.openingCashBalance.label",
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
                "actions": []
              },
              {
                "id": "mol_createDailyShift_actionBar",
                "type": "actionBar",
                "order": 30,
                "titleKey": "molecule.createDailyShift.actionBar.title",
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act_createDailyShift",
                    "action": "createDailyShift",
                    "labelKey": "action.createDailyShift.label",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "createDailyShift"
                  }
                ]
              }
            ]
          },
          {
            "id": "org_recordOpeningCashMovement",
            "type": "formPanel",
            "organismName": "RecordOpeningCashMovement",
            "titleKey": "organism.recordOpeningCashMovement.title",
            "purpose": "Registrar movimento de caixa de abertura vinculado ao turno criado",
            "userActions": [
              "recordOpeningCashMovement"
            ],
            "requiredEntities": [
              "CashMovement",
              "DailyShift"
            ],
            "readsFields": [
              "DailyShift.dailyShiftId",
              "DailyShift.shiftDate",
              "DailyShift.status",
              "DailyShift.openingCashBalance"
            ],
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
            "molecules": [
              {
                "id": "mol_recordOpening_summary",
                "type": "summaryPanel",
                "order": 10,
                "titleKey": "molecule.recordOpening.summary.title",
                "emptyKey": "molecule.recordOpening.summary.empty",
                "stateKey": "form.createDailyShift.dailyShiftId",
                "fields": [
                  {
                    "id": "fld_summary_dailyShiftId",
                    "field": "DailyShift.dailyShiftId",
                    "labelKey": "field.dailyShiftId.label",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.openDailyShift.input.recordOpeningCashMovement.DailyShift.dailyShiftId"
                  },
                  {
                    "id": "fld_summary_shiftDate",
                    "field": "DailyShift.shiftDate",
                    "labelKey": "field.shiftDate.label",
                    "order": 20,
                    "required": false,
                    "inputType": "date",
                    "format": "date",
                    "stateKey": "ui.openDailyShift.input.recordOpeningCashMovement.DailyShift.shiftDate"
                  },
                  {
                    "id": "fld_summary_status",
                    "field": "DailyShift.status",
                    "labelKey": "field.status.label",
                    "order": 30,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.openDailyShift.input.recordOpeningCashMovement.DailyShift.status"
                  },
                  {
                    "id": "fld_summary_openingCashBalance",
                    "field": "DailyShift.openingCashBalance",
                    "labelKey": "field.openingCashBalance.label",
                    "order": 40,
                    "required": false,
                    "inputType": "number",
                    "format": "money",
                    "stateKey": "ui.openDailyShift.input.recordOpeningCashMovement.DailyShift.openingCashBalance"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "mol_recordOpening_form",
                "type": "form",
                "order": 20,
                "titleKey": "molecule.recordOpening.form.title",
                "binding": "recordOpeningCashMovement",
                "submitAction": "recordOpeningCashMovement",
                "fields": [
                  {
                    "id": "fld_movementType",
                    "field": "CashMovement.movementType",
                    "labelKey": "field.movementType.label",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "source": "enum:entrada,saída",
                    "stateKey": "ui.openDailyShift.input.recordOpeningCashMovement.CashMovement.movementType"
                  },
                  {
                    "id": "fld_amount",
                    "field": "CashMovement.amount",
                    "labelKey": "field.amount.label",
                    "order": 20,
                    "required": true,
                    "inputType": "number",
                    "format": "money",
                    "stateKey": "ui.openDailyShift.input.recordOpeningCashMovement.CashMovement.amount"
                  },
                  {
                    "id": "fld_reason",
                    "field": "CashMovement.reason",
                    "labelKey": "field.reason.label",
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
                "actions": []
              },
              {
                "id": "mol_recordOpening_actionBar",
                "type": "actionBar",
                "order": 30,
                "titleKey": "molecule.recordOpening.actionBar.title",
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act_recordOpeningCashMovement",
                    "action": "recordOpeningCashMovement",
                    "labelKey": "action.recordOpeningCashMovement.label",
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
  "i18n": {
    "section.openDailyShift.title": "Abrir turno diário",
    "organism.createDailyShift.title": "Criar turno diário",
    "organism.recordOpeningCashMovement.title": "Registrar movimento de caixa de abertura",
    "molecule.createDailyShift.timeline.title": "Progresso do turno",
    "molecule.createDailyShift.form.title": "Dados do turno",
    "molecule.createDailyShift.actionBar.title": "Ações do turno",
    "molecule.recordOpening.summary.title": "Turno criado",
    "molecule.recordOpening.summary.empty": "Nenhum turno criado ainda. Crie o turno acima para continuar.",
    "molecule.recordOpening.form.title": "Movimento de abertura",
    "molecule.recordOpening.actionBar.title": "Ações do movimento",
    "field.shiftDate.label": "Data do turno",
    "field.status.label": "Status",
    "field.openedAt.label": "Aberto em",
    "field.openingCashBalance.label": "Saldo inicial",
    "field.dailyShiftId.label": "ID do turno",
    "field.movementType.label": "Tipo de movimento",
    "field.amount.label": "Valor",
    "field.reason.label": "Motivo",
    "action.createDailyShift.label": "Criar turno",
    "action.recordOpeningCashMovement.label": "Registrar abertura de caixa"
  },
  "dataBindings": [
    {
      "id": "binding_createDailyShift",
      "source": "bffCommand",
      "entity": "DailyShift",
      "command": "createDailyShift",
      "description": "Cria o turno diário com data, status, horário de abertura e saldo inicial.",
      "stateKey": "ui.openDailyShift.data.createDailyShift",
      "inputStateKeys": [
        "ui.openDailyShift.input.createDailyShift.shiftDate",
        "ui.openDailyShift.input.createDailyShift.status",
        "ui.openDailyShift.input.createDailyShift.openedAt",
        "ui.openDailyShift.input.createDailyShift.openingCashBalance"
      ]
    },
    {
      "id": "binding_recordOpeningCashMovement",
      "source": "bffCommand",
      "entity": "CashMovement",
      "command": "recordOpeningCashMovement",
      "description": "Registra o movimento de caixa de abertura vinculado ao turno criado.",
      "stateKey": "ui.openDailyShift.data.recordOpeningCashMovement",
      "inputStateKeys": [
        "ui.openDailyShift.input.recordOpeningCashMovement.movementType",
        "ui.openDailyShift.input.recordOpeningCashMovement.amount",
        "ui.openDailyShift.input.recordOpeningCashMovement.reason"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "openDailyShift__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/openDailyShift.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/openDailyShift.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/openDailyShift.ts",
      "_102050_/l2/cafeFlow/web/contracts/openDailyShift.ts"
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
