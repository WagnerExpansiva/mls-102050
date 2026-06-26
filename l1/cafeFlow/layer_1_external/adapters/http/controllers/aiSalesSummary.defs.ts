/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/aiSalesSummary.defs.ts" enhancement="_blank"/>

export const aiSalesSummaryController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "aiSalesSummary",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "aiSalesSummary",
    "controllerName": "AiSalesSummaryController",
    "handlers": [],
    "routes": []
  }
} as const;

export default aiSalesSummaryController;

export const pipeline = [
  {
    "id": "aiSalesSummary__httpController",
    "type": "httpController",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/aiSalesSummary.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/aiSalesSummary.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/contracts/aiSalesSummary.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_2.md",
      "_102034_.d.ts"
    ],
    "afterSaveBackEnd": "_102021_/l2/agentMaterializeSolution/registerBackEnd.ts?registerController",
    "agent": "agentMaterializeGen"
  }
] as const;
