/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/dineInOrderLifecycle.defs.ts" enhancement="_blank"/>

export const dineInOrderLifecycleController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "dineInOrderLifecycle",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "dineInOrderLifecycle",
    "controllerName": "DineInOrderLifecycleController",
    "handlers": [],
    "routes": []
  }
} as const;

export default dineInOrderLifecycleController;

export const pipeline = [
  {
    "id": "dineInOrderLifecycle__httpController",
    "type": "httpController",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/dineInOrderLifecycle.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/dineInOrderLifecycle.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/contracts/dineInOrderLifecycle.ts"
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
