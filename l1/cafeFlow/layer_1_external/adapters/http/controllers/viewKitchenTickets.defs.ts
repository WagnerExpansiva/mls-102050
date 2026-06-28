/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/viewKitchenTickets.defs.ts" enhancement="_blank"/>

export const viewKitchenTicketsController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "viewKitchenTickets",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "viewKitchenTickets",
    "controllerName": "ViewKitchenTicketsController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "cafeFlowViewKitchenTicketsHandler",
        "command": "viewKitchenTickets",
        "usecaseRef": "viewKitchenTickets",
        "kind": "query"
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.viewKitchenTickets.viewKitchenTickets",
        "handlerName": "cafeFlowViewKitchenTicketsHandler"
      }
    ]
  }
} as const;

export default viewKitchenTicketsController;

export const pipeline = [
  {
    "id": "viewKitchenTickets__httpController",
    "type": "httpController",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/viewKitchenTickets.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/viewKitchenTickets.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/usecases/viewKitchenTickets.d.ts"
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
