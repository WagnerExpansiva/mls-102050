/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/kitchenProductionFlow.defs.ts" enhancement="_blank"/>

export const kitchenProductionFlowController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "kitchenProductionFlow",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "kitchenProductionFlow",
    "controllerName": "KitchenProductionFlowController",
    "handlers": [],
    "routes": []
  }
} as const;

export default kitchenProductionFlowController;

export const pipeline = [
  {
    "id": "kitchenProductionFlow__httpController",
    "type": "httpController",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/kitchenProductionFlow.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/kitchenProductionFlow.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/contracts/kitchenProductionFlow.ts"
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
