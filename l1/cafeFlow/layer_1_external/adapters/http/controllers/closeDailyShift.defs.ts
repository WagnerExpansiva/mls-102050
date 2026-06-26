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
    "handlers": [],
    "routes": []
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
      "_102050_/l2/cafeFlow/web/contracts/closeDailyShift.ts"
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
