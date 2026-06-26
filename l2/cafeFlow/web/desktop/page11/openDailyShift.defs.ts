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
      "sectionName": "Abrir turno diário",
      "mode": "edit",
      "organisms": [
        {
          "organismName": "CreateDailyShift",
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
          ]
        },
        {
          "organismName": "RecordOpeningCashMovement",
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
          "rulesApplied": []
        }
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
