/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/aiSalesSummary.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "aiSalesSummary",
  "pageName": "Assistente IA: resumo de vendas do dia",
  "actor": "manager",
  "purpose": "Executar Assistente IA: resumo de vendas do dia.",
  "capabilities": [
    "aiSalesSummary"
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
      "sectionName": "Assistente IA: resumo de vendas do dia",
      "mode": "view",
      "organisms": [
        {
          "organismName": "AiSalesSummary",
          "purpose": "Assistente IA: resumo de vendas do dia",
          "userActions": [
            "aiSalesSummary"
          ],
          "requiredEntities": [
            "Order",
            "OrderItem",
            "DailyShift",
            "MenuItem"
          ],
          "readsFields": [
            "Order.totalAmount",
            "Order.status",
            "Order.closedAt",
            "Order.dailyShiftId"
          ],
          "writesFields": [],
          "rulesApplied": [
            "aiOutputLanguageSelection"
          ]
        }
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "aiSalesSummary__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/aiSalesSummary.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/aiSalesSummary.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/aiSalesSummary.ts",
      "_102050_/l2/cafeFlow/web/contracts/aiSalesSummary.ts"
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
