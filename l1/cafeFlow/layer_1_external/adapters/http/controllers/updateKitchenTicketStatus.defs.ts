/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateKitchenTicketStatus.defs.ts" enhancement="_blank"/>

export const updateKitchenTicketStatusController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "updateKitchenTicketStatus",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "updateKitchenTicketStatus",
    "controllerName": "UpdateKitchenTicketStatusController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "cafeFlowUpdateKitchenTicketStatusHandler",
        "command": "updateKitchenTicketStatus",
        "usecaseRef": "updateKitchenTicketStatus",
        "kind": "update"
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.updateKitchenTicketStatus.updateKitchenTicketStatus",
        "handlerName": "cafeFlowUpdateKitchenTicketStatusHandler"
      }
    ]
  }
} as const;

export default updateKitchenTicketStatusController;

export const pipeline = [
  {
    "id": "updateKitchenTicketStatus__httpController",
    "type": "httpController",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateKitchenTicketStatus.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateKitchenTicketStatus.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/usecases/updateKitchenTicketStatus.d.ts"
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
