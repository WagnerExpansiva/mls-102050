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
      "sectionName": "Gerar relatório de fechamento de turno",
      "mode": "view",
      "organisms": [
        {
          "organismName": "GenerateShiftCloseReport",
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
          ]
        }
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "generateShiftCloseReport__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/generateShiftCloseReport.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/generateShiftCloseReport.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/generateShiftCloseReport.ts",
      "_102050_/l2/cafeFlow/web/contracts/generateShiftCloseReport.ts"
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
