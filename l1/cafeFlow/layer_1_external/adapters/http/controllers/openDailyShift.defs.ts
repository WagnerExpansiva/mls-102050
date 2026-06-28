/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/openDailyShift.defs.ts" enhancement="_blank"/>

export const openDailyShiftController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "openDailyShift",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "openDailyShift",
    "controllerName": "OpenDailyShiftController",
    "ownerKind": "workflow",
    "outputSource": "contract",
    "handlers": [
      {
        "handlerName": "cafeFlowOpenDailyShiftHandler",
        "command": "openDailyShift",
        "usecaseRef": "openDailyShift",
        "kind": "command"
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.openDailyShift.openDailyShift",
        "handlerName": "cafeFlowOpenDailyShiftHandler"
      }
    ]
  }
} as const;

export default openDailyShiftController;

export const pipeline = [
  {
    "id": "openDailyShift__httpController",
    "type": "httpController",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/openDailyShift.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/openDailyShift.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/usecases/openDailyShift.d.ts",
      "_102050_/l2/cafeFlow/web/contracts/openDailyShift.ts"
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
