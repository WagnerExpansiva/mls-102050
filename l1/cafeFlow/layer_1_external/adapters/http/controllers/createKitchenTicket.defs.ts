/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createKitchenTicket.defs.ts" enhancement="_blank"/>

export const createKitchenTicketController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "createKitchenTicket",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "createKitchenTicket",
    "controllerName": "CreateKitchenTicketController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "cafeFlowCreateKitchenTicketHandler",
        "command": "createKitchenTicket",
        "usecaseRef": "createKitchenTicket",
        "kind": "create"
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.createKitchenTicket.createKitchenTicket",
        "handlerName": "cafeFlowCreateKitchenTicketHandler"
      }
    ]
  }
} as const;

export default createKitchenTicketController;

export const pipeline = [
  {
    "id": "createKitchenTicket__httpController",
    "type": "httpController",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createKitchenTicket.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createKitchenTicket.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/usecases/createKitchenTicket.d.ts"
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
