/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createDailyShift.defs.ts" enhancement="_blank"/>

export const createDailyShiftController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "createDailyShift",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "createDailyShift",
    "controllerName": "CreateDailyShiftController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "cafeFlowCreateDailyShiftHandler",
        "command": "createDailyShift",
        "usecaseRef": "createDailyShift",
        "kind": "create"
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.createDailyShift.createDailyShift",
        "handlerName": "cafeFlowCreateDailyShiftHandler"
      }
    ]
  }
} as const;

export default createDailyShiftController;

export const pipeline = [
  {
    "id": "createDailyShift__httpController",
    "type": "httpController",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createDailyShift.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createDailyShift.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/usecases/createDailyShift.d.ts"
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
