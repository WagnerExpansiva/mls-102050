/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/manageMenuCategories.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "manageMenuCategories",
  "pageName": "Gerenciar categorias do cardápio",
  "actor": "manager",
  "purpose": "Executar Gerenciar categorias do cardápio.",
  "capabilities": [
    "manageMenuCategories"
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
      "sectionName": "Gerenciar categorias do cardápio",
      "mode": "edit",
      "organisms": [
        {
          "organismName": "ManageMenuCategories",
          "purpose": "Gerenciar categorias do cardápio",
          "userActions": [
            "manageMenuCategories"
          ],
          "requiredEntities": [
            "MenuCategory"
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
    "id": "manageMenuCategories__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/manageMenuCategories.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/manageMenuCategories.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/manageMenuCategories.ts",
      "_102050_/l2/cafeFlow/web/contracts/manageMenuCategories.ts"
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
