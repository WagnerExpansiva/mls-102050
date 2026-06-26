/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/manageInventoryItems.defs.ts" enhancement="_blank"/>

export const manageInventoryItemsController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "manageInventoryItems",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "manageInventoryItems",
    "controllerName": "ManageInventoryItemsController",
    "handlers": [],
    "routes": []
  }
} as const;

export default manageInventoryItemsController;

export const pipeline = [
  {
    "id": "manageInventoryItems__httpController",
    "type": "httpController",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/manageInventoryItems.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/manageInventoryItems.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/contracts/manageInventoryItems.ts"
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
