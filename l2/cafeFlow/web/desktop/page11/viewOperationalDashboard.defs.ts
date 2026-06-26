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
      "sectionName": "Ver dashboard operacional do dia",
      "mode": "view",
      "organisms": [
        {
          "organismName": "ViewOperationalDashboard",
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
          "readsFields": [],
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
    "id": "viewOperationalDashboard__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/viewOperationalDashboard.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/viewOperationalDashboard.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/viewOperationalDashboard.ts",
      "_102050_/l2/cafeFlow/web/contracts/viewOperationalDashboard.ts"
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
