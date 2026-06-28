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
    "rulesApplied": [
      "tableOccupancyConsistency"
    ],
    "transactional": true,
    "steps": [
      "Read existing Table (for updates)",
      "Apply tableOccupancyConsistency rule to prevent changes that conflict with active orders",
      "Create or update Table entity",
      "Persist via repository",
      "Return table"
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
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "tableOccupancyConsistency"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
