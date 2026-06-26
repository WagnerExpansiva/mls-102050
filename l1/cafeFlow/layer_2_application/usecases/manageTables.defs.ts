/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/manageTables.defs.ts" enhancement="_blank"/>

export const manageTablesUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "manageTables",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "manageTables",
    "functionName": "manageTables",
    "inputTypeName": "ManageTablesInput",
    "outputTypeName": "ManageTablesOutput",
    "ports": [],
    "transactional": true,
    "steps": [
      "Perform CRUD operation on Table (create/update/delete)",
      "Validate table number uniqueness and capacity fields",
      "Apply tableOccupancyConsistency: prevent deletion or status change if table has active orders",
      "Persist changes and return updated Table(s)"
    ]
  }
} as const;

export default manageTablesUsecase;

export const pipeline = [
  {
    "id": "manageTables__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/manageTables.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/manageTables.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_3.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
