/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/manageTables.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "manageTables",
  "pageName": "Gerenciar mesas",
  "actor": "manager",
  "purpose": "Executar Gerenciar mesas.",
  "capabilities": [
    "manageTables"
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
      "sectionName": "Gerenciar mesas",
      "mode": "edit",
      "organisms": [
        {
          "organismName": "ManageTables",
          "purpose": "Gerenciar mesas",
          "userActions": [
            "manageTables"
          ],
          "requiredEntities": [
            "Table"
          ],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "tableOccupancyConsistency"
          ]
        }
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "manageTables__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/manageTables.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/manageTables.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/manageTables.ts",
      "_102050_/l2/cafeFlow/web/contracts/manageTables.ts"
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
