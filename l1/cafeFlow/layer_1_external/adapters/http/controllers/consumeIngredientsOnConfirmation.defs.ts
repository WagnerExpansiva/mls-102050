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
    "handlers": [],
    "routes": []
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
      "_102050_/l2/cafeFlow/web/contracts/consumeIngredientsOnConfirmation.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_2.md",
      "_102034_.d.ts"
    ],
    "afterSaveBackEnd": "_102021_/l2/agentMaterializeSolution/registerBackEnd.ts?registerController",
    "agent": "agentMaterializeGen"
  }
] as const;
