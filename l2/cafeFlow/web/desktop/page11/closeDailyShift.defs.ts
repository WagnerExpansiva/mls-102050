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
      "sectionName": "Fechar turno diário (fechamento de caixa)",
      "mode": "edit",
      "organisms": [
        {
          "organismName": "UpdateDailyShiftStatus",
          "purpose": "Update Daily Shift Status",
          "userActions": [
            "updateDailyShiftStatus"
          ],
          "requiredEntities": [
            "DailyShift"
          ],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": []
        },
        {
          "organismName": "RecordClosingCashMovement",
          "purpose": "Record Closing Cash Movement",
          "userActions": [
            "recordClosingCashMovement"
          ],
          "requiredEntities": [
            "DailyShift"
          ],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": []
        }
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
