/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createOrder.defs.ts" enhancement="_blank"/>

export const createOrderController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "createOrder",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "createOrder",
    "controllerName": "CreateOrderController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "cafeFlowCreateOrderHandler",
        "command": "createOrder",
        "usecaseRef": "createOrder",
        "kind": "create"
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.createOrder.createOrder",
        "handlerName": "cafeFlowCreateOrderHandler"
      }
    ]
  }
} as const;

export default createOrderController;

export const pipeline = [
  {
    "id": "createOrder__httpController",
    "type": "httpController",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createOrder.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createOrder.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/usecases/createOrder.d.ts"
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
