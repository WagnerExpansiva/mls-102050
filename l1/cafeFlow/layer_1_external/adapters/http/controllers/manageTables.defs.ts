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
    "handlers": [],
    "routes": []
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
      "_102050_/l2/cafeFlow/web/contracts/manageTables.ts"
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
