/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/takeoutOrderLifecycle.defs.ts" enhancement="_blank"/>

export const takeoutOrderLifecycleController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "takeoutOrderLifecycle",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "takeoutOrderLifecycle",
    "controllerName": "TakeoutOrderLifecycleController",
    "handlers": [],
    "routes": []
  }
} as const;

export default takeoutOrderLifecycleController;

export const pipeline = [
  {
    "id": "takeoutOrderLifecycle__httpController",
    "type": "httpController",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/takeoutOrderLifecycle.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/takeoutOrderLifecycle.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/contracts/takeoutOrderLifecycle.ts"
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
