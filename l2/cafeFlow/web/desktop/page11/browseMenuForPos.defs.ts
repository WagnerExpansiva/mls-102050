/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/browseMenuForPos.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "browseMenuForPos",
  "pageName": "Consultar cardápio no POS",
  "actor": "attendant",
  "purpose": "Executar Consultar cardápio no POS.",
  "capabilities": [
    "browseMenuForPos"
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
      "sectionName": "Consultar cardápio no POS",
      "mode": "view",
      "organisms": [
        {
          "organismName": "BrowseMenuForPos",
          "purpose": "Consultar cardápio no POS",
          "userActions": [
            "browseMenuForPos"
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
    "id": "browseMenuForPos__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/browseMenuForPos.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/browseMenuForPos.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/browseMenuForPos.ts",
      "_102050_/l2/cafeFlow/web/contracts/browseMenuForPos.ts"
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
