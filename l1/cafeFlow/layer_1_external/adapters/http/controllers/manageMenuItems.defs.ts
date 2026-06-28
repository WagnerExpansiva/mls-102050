/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/manageMenuItems.defs.ts" enhancement="_blank"/>

export const manageMenuItemsController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "manageMenuItems",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "manageMenuItems",
    "controllerName": "ManageMenuItemsController",
    "ownerKind": "operation",
    "outputSource": "contract",
    "handlers": [
      {
        "handlerName": "cafeFlowManageMenuItemsHandler",
        "command": "manageMenuItems",
        "usecaseRef": "manageMenuItems",
        "kind": "update"
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.manageMenuItems.manageMenuItems",
        "handlerName": "cafeFlowManageMenuItemsHandler"
      }
    ]
  }
} as const;

export default manageMenuItemsController;

export const pipeline = [
  {
    "id": "manageMenuItems__httpController",
    "type": "httpController",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/manageMenuItems.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/manageMenuItems.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/usecases/manageMenuItems.d.ts",
      "_102050_/l2/cafeFlow/web/contracts/manageMenuItems.ts"
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
