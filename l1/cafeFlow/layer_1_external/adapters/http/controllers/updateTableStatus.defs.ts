/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateTableStatus.defs.ts" enhancement="_blank"/>

export const updateTableStatusController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "updateTableStatus",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "updateTableStatus",
    "controllerName": "UpdateTableStatusController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "cafeFlowUpdateTableStatusHandler",
        "command": "updateTableStatus",
        "usecaseRef": "updateTableStatus",
        "kind": "update"
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.updateTableStatus.updateTableStatus",
        "handlerName": "cafeFlowUpdateTableStatusHandler"
      }
    ]
  }
} as const;

export default updateTableStatusController;

export const pipeline = [
  {
    "id": "updateTableStatus__httpController",
    "type": "httpController",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateTableStatus.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateTableStatus.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/usecases/updateTableStatus.d.ts"
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
