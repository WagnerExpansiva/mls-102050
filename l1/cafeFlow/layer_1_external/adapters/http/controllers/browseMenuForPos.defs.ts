/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/browseMenuForPos.defs.ts" enhancement="_blank"/>

export const browseMenuForPosController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "browseMenuForPos",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "browseMenuForPos",
    "controllerName": "BrowseMenuForPosController",
    "ownerKind": "operation",
    "outputSource": "contract",
    "handlers": [
      {
        "handlerName": "cafeFlowBrowseMenuForPosHandler",
        "command": "browseMenuForPos",
        "usecaseRef": "browseMenuForPos",
        "kind": "query"
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.browseMenuForPos.browseMenuForPos",
        "handlerName": "cafeFlowBrowseMenuForPosHandler"
      }
    ]
  }
} as const;

export default browseMenuForPosController;

export const pipeline = [
  {
    "id": "browseMenuForPos__httpController",
    "type": "httpController",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/browseMenuForPos.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/browseMenuForPos.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/usecases/browseMenuForPos.d.ts",
      "_102050_/l2/cafeFlow/web/contracts/browseMenuForPos.ts"
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
