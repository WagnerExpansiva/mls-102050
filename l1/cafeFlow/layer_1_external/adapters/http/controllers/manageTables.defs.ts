/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/manageTables.defs.ts" enhancement="_blank"/>

export const manageTablesController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "manageTables",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "manageTables",
    "controllerName": "ManageTablesController",
    "ownerKind": "operation",
    "outputSource": "contract",
    "handlers": [
      {
        "handlerName": "cafeFlowManageTablesHandler",
        "command": "manageTables",
        "usecaseRef": "manageTables",
        "kind": "update"
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.manageTables.manageTables",
        "handlerName": "cafeFlowManageTablesHandler"
      }
    ]
  }
} as const;

export default manageTablesController;

export const pipeline = [
  {
    "id": "manageTables__httpController",
    "type": "httpController",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/manageTables.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/manageTables.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/usecases/manageTables.d.ts",
      "_102050_/l2/cafeFlow/web/contracts/manageTables.ts"
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
