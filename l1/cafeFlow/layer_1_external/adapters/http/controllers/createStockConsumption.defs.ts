/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createStockConsumption.defs.ts" enhancement="_blank"/>

export const createStockConsumptionController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "createStockConsumption",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "createStockConsumption",
    "controllerName": "CreateStockConsumptionController",
    "ownerKind": "operation",
    "outputSource": "usecase",
    "handlers": [
      {
        "handlerName": "cafeFlowCreateStockConsumptionHandler",
        "command": "createStockConsumption",
        "usecaseRef": "createStockConsumption",
        "kind": "create"
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.createStockConsumption.createStockConsumption",
        "handlerName": "cafeFlowCreateStockConsumptionHandler"
      }
    ]
  }
} as const;

export default createStockConsumptionController;

export const pipeline = [
  {
    "id": "createStockConsumption__httpController",
    "type": "httpController",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createStockConsumption.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createStockConsumption.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/usecases/createStockConsumption.d.ts"
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
