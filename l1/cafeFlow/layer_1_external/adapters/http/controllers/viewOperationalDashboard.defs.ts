/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/viewOperationalDashboard.defs.ts" enhancement="_blank"/>

export const viewOperationalDashboardController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "viewOperationalDashboard",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "viewOperationalDashboard",
    "controllerName": "ViewOperationalDashboardController",
    "ownerKind": "operation",
    "outputSource": "contract",
    "handlers": [
      {
        "handlerName": "cafeFlowViewOperationalDashboardHandler",
        "command": "viewOperationalDashboard",
        "usecaseRef": "viewOperationalDashboard",
        "kind": "query"
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.viewOperationalDashboard.viewOperationalDashboard",
        "handlerName": "cafeFlowViewOperationalDashboardHandler"
      }
    ]
  }
} as const;

export default viewOperationalDashboardController;

export const pipeline = [
  {
    "id": "viewOperationalDashboard__httpController",
    "type": "httpController",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/viewOperationalDashboard.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/viewOperationalDashboard.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/usecases/viewOperationalDashboard.d.ts",
      "_102050_/l2/cafeFlow/web/contracts/viewOperationalDashboard.ts"
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
