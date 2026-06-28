/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/closeDailyShift.defs.ts" enhancement="_blank"/>

export const closeDailyShiftController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "closeDailyShift",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "closeDailyShift",
    "controllerName": "CloseDailyShiftController",
    "ownerKind": "workflow",
    "outputSource": "contract",
    "handlers": [
      {
        "handlerName": "cafeFlowCloseDailyShiftHandler",
        "command": "closeDailyShift",
        "usecaseRef": "closeDailyShift",
        "kind": "command"
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.closeDailyShift.closeDailyShift",
        "handlerName": "cafeFlowCloseDailyShiftHandler"
      }
    ]
  }
} as const;

export default closeDailyShiftController;

export const pipeline = [
  {
    "id": "closeDailyShift__httpController",
    "type": "httpController",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/closeDailyShift.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/closeDailyShift.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/usecases/closeDailyShift.d.ts",
      "_102050_/l2/cafeFlow/web/contracts/closeDailyShift.ts"
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
