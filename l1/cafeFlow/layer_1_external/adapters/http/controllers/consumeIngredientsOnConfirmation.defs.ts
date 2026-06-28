/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/consumeIngredientsOnConfirmation.defs.ts" enhancement="_blank"/>

export const consumeIngredientsOnConfirmationController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "consumeIngredientsOnConfirmation",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "consumeIngredientsOnConfirmation",
    "controllerName": "ConsumeIngredientsOnConfirmationController",
    "ownerKind": "workflow",
    "outputSource": "contract",
    "handlers": [
      {
        "handlerName": "cafeFlowConsumeIngredientsOnConfirmationHandler",
        "command": "consumeIngredientsOnConfirmation",
        "usecaseRef": "consumeIngredientsOnConfirmation",
        "kind": "command"
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.consumeIngredientsOnConfirmation.consumeIngredientsOnConfirmation",
        "handlerName": "cafeFlowConsumeIngredientsOnConfirmationHandler"
      }
    ]
  }
} as const;

export default consumeIngredientsOnConfirmationController;

export const pipeline = [
  {
    "id": "consumeIngredientsOnConfirmation__httpController",
    "type": "httpController",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/consumeIngredientsOnConfirmation.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/consumeIngredientsOnConfirmation.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/usecases/consumeIngredientsOnConfirmation.d.ts",
      "_102050_/l2/cafeFlow/web/contracts/consumeIngredientsOnConfirmation.ts"
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
