/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/manageMenuCategories.defs.ts" enhancement="_blank"/>

export const manageMenuCategoriesController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "manageMenuCategories",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "manageMenuCategories",
    "controllerName": "ManageMenuCategoriesController",
    "ownerKind": "operation",
    "outputSource": "contract",
    "handlers": [
      {
        "handlerName": "cafeFlowManageMenuCategoriesHandler",
        "command": "manageMenuCategories",
        "usecaseRef": "manageMenuCategories",
        "kind": "update"
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.manageMenuCategories.manageMenuCategories",
        "handlerName": "cafeFlowManageMenuCategoriesHandler"
      }
    ]
  }
} as const;

export default manageMenuCategoriesController;

export const pipeline = [
  {
    "id": "manageMenuCategories__httpController",
    "type": "httpController",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/manageMenuCategories.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/manageMenuCategories.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/usecases/manageMenuCategories.d.ts",
      "_102050_/l2/cafeFlow/web/contracts/manageMenuCategories.ts"
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
