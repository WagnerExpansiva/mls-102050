/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/recordOpeningCashMovement.defs.ts" enhancement="_blank"/>

export const recordOpeningCashMovementController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "recordOpeningCashMovement",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "recordOpeningCashMovement",
    "controllerName": "RecordOpeningCashMovementController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "cafeFlowRecordOpeningCashMovementHandler",
        "command": "recordOpeningCashMovement",
        "usecaseRef": "recordOpeningCashMovement",
        "kind": "create"
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.recordOpeningCashMovement.recordOpeningCashMovement",
        "handlerName": "cafeFlowRecordOpeningCashMovementHandler"
      }
    ]
  }
} as const;

export default recordOpeningCashMovementController;

export const pipeline = [
  {
    "id": "recordOpeningCashMovement__httpController",
    "type": "httpController",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/recordOpeningCashMovement.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/recordOpeningCashMovement.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/usecases/recordOpeningCashMovement.d.ts"
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
