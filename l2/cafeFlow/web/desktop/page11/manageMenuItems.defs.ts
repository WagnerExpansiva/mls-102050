/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/manageMenuItems.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "manageMenuItems",
  "pageName": "Gerenciar itens do cardápio",
  "actor": "manager",
  "purpose": "Executar Gerenciar itens do cardápio.",
  "capabilities": [
    "manageMenuItems"
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
      "sectionName": "Gerenciar itens do cardápio",
      "mode": "edit",
      "organisms": [
        {
          "organismName": "ManageMenuItems",
          "purpose": "Gerenciar itens do cardápio",
          "userActions": [
            "manageMenuItems"
          ],
          "requiredEntities": [
            "MenuItem",
            "MenuCategory"
          ],
          "readsFields": [],
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
    "id": "manageMenuItems__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/manageMenuItems.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/manageMenuItems.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/manageMenuItems.ts",
      "_102050_/l2/cafeFlow/web/contracts/manageMenuItems.ts"
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
