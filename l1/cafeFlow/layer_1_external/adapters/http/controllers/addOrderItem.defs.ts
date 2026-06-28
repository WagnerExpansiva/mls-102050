/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/addOrderItem.defs.ts" enhancement="_blank"/>

export const addOrderItemController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "addOrderItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "addOrderItem",
    "controllerName": "AddOrderItemController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "cafeFlowAddOrderItemHandler",
        "command": "addOrderItem",
        "usecaseRef": "addOrderItem",
        "kind": "create"
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.addOrderItem.addOrderItem",
        "handlerName": "cafeFlowAddOrderItemHandler"
      }
    ]
  }
} as const;

export default addOrderItemController;

export const pipeline = [
  {
    "id": "addOrderItem__httpController",
    "type": "httpController",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/addOrderItem.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/addOrderItem.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/usecases/addOrderItem.d.ts"
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
