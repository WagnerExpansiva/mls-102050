/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/aiPromotionSuggestions.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "aiPromotionSuggestions",
  "pageName": "Assistente IA: sugestões de itens para promover (últimos 7 dias)",
  "actor": "manager",
  "purpose": "Executar Assistente IA: sugestões de itens para promover (últimos 7 dias).",
  "capabilities": [
    "aiPromotionSuggestions"
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
      "sectionName": "Assistente IA: sugestões de itens para promover (últimos 7 dias)",
      "mode": "view",
      "organisms": [
        {
          "organismName": "AiPromotionSuggestions",
          "purpose": "Assistente IA: sugestões de itens para promover (últimos 7 dias)",
          "userActions": [
            "aiPromotionSuggestions"
          ],
          "requiredEntities": [
            "OrderItem",
            "Order",
            "MenuItem"
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
    "id": "aiPromotionSuggestions__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/aiPromotionSuggestions.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/aiPromotionSuggestions.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/aiPromotionSuggestions.ts",
      "_102050_/l2/cafeFlow/web/contracts/aiPromotionSuggestions.ts"
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
