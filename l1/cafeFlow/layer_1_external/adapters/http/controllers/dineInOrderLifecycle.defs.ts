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
    "ownerKind": "workflow",
    "outputSource": "contract",
    "handlers": [
      {
        "handlerName": "cafeFlowDineInOrderLifecycleHandler",
        "command": "dineInOrderLifecycle",
        "usecaseRef": "dineInOrderLifecycle",
        "kind": "command"
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.dineInOrderLifecycle.dineInOrderLifecycle",
        "handlerName": "cafeFlowDineInOrderLifecycleHandler"
      }
    ]
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
      "_102050_/l1/cafeFlow/layer_2_application/usecases/dineInOrderLifecycle.d.ts",
      "_102050_/l2/cafeFlow/web/contracts/dineInOrderLifecycle.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/httpController.md",
      "_102034_.d.ts"
    ],
    "afterSaveBackEnd": "_102021_/l2/agentMaterializeSolution/registerBackEnd.ts?registerController",
    "agent": "agentMaterializeGen"
  }
] as const;
