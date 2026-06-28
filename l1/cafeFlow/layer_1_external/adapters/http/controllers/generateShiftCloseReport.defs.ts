/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/generateShiftCloseReport.defs.ts" enhancement="_blank"/>

export const generateShiftCloseReportController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "generateShiftCloseReport",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "generateShiftCloseReport",
    "controllerName": "GenerateShiftCloseReportController",
    "ownerKind": "operation",
    "outputSource": "contract",
    "handlers": [
      {
        "handlerName": "cafeFlowGenerateShiftCloseReportHandler",
        "command": "generateShiftCloseReport",
        "usecaseRef": "generateShiftCloseReport",
        "kind": "query"
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.generateShiftCloseReport.generateShiftCloseReport",
        "handlerName": "cafeFlowGenerateShiftCloseReportHandler"
      }
    ]
  }
} as const;

export default generateShiftCloseReportController;

export const pipeline = [
  {
    "id": "generateShiftCloseReport__httpController",
    "type": "httpController",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/generateShiftCloseReport.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/generateShiftCloseReport.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/usecases/generateShiftCloseReport.d.ts",
      "_102050_/l2/cafeFlow/web/contracts/generateShiftCloseReport.ts"
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
