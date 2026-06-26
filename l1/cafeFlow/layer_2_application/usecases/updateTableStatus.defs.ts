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
      "Fetch Table by id",
      "Validate tableOccupancyConsistency: cannot set AVAILABLE if active orders exist; cannot set OCCUPIED without linked order",
      "Update Table.status and set updatedAt",
      "Persist updated Table",
      "Return updated table"
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
      "_102021_/l2/skills/layer_3.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
