/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/recordPayment.defs.ts" enhancement="_blank"/>

export const recordPaymentController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "recordPayment",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "recordPayment",
    "controllerName": "RecordPaymentController",
    "handlers": [],
    "routes": []
  }
} as const;

export default recordPaymentController;

export const pipeline = [
  {
    "id": "recordPayment__httpController",
    "type": "httpController",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/recordPayment.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/recordPayment.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/contracts/recordPayment.ts"
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
