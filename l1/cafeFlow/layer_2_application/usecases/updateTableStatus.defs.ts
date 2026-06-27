/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/updateTableStatus.defs.ts" enhancement="_blank"/>

export const updateTableStatusUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateTableStatus",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateTableStatus",
    "functionName": "updateTableStatus",
    "inputTypeName": "UpdateTableStatusInput",
    "outputTypeName": "UpdateTableStatusOutput",
    "ports": [],
    "transactional": true,
    "steps": [
      "Read Table by id",
      "Apply tableOccupancyConsistency rule: validate no conflicting active Orders if setting to AVAILABLE",
      "Update Table.status (AVAILABLE, OCCUPIED, RESERVED, CLEANING) and updatedAt",
      "Persist within transaction",
      "Return updated Table with new status"
    ]
  }
} as const;

export default updateTableStatusUsecase;

export const pipeline = [
  {
    "id": "updateTableStatus__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/updateTableStatus.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/updateTableStatus.defs.ts",
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
