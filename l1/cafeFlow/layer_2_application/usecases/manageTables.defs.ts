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
      "Validate Table fields: number/label, capacity, area/zone",
      "Apply tableOccupancyConsistency rule: ensure no active Orders reference a table being deleted or deactivated",
      "Create/Update/Delete Table entity",
      "Persist within transaction",
      "Return created/updated Table with current status"
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
    "agent": "agentMaterializeGen"
  }
] as const;
