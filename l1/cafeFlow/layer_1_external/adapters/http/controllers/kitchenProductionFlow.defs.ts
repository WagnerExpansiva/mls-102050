/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/kitchenProductionFlow.defs.ts" enhancement="_blank"/>

export const kitchenProductionFlowController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "kitchenProductionFlow",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "kitchenProductionFlow",
    "controllerName": "KitchenProductionFlowController",
    "ownerKind": "workflow",
    "outputSource": "contract",
    "handlers": [
      {
        "handlerName": "cafeFlowKitchenProductionFlowHandler",
        "command": "kitchenProductionFlow",
        "usecaseRef": "kitchenProductionFlow",
        "kind": "command"
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.kitchenProductionFlow.kitchenProductionFlow",
        "handlerName": "cafeFlowKitchenProductionFlowHandler"
      }
    ]
  }
} as const;

export default kitchenProductionFlowController;

export const pipeline = [
  {
    "id": "kitchenProductionFlow__httpController",
    "type": "httpController",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/kitchenProductionFlow.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/kitchenProductionFlow.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/usecases/kitchenProductionFlow.d.ts",
      "_102050_/l2/cafeFlow/web/contracts/kitchenProductionFlow.ts"
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
