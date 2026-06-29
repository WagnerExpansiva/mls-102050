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
    "ports": [],
    "functions": [
      {
        "functionName": "updateTableStatus",
        "inputTypeName": "UpdateTableStatusInput",
        "outputTypeName": "UpdateTableStatusOutput",
        "input": [
          {
            "name": "tableId",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Unique identifier of the table whose status is being updated"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "New status for the table: available, occupied, or disabled"
          }
        ],
        "output": [
          {
            "name": "tableId",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Identifier of the updated table"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Confirmed status after update"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Timestamp of the status update"
          }
        ],
        "ports": [],
        "rulesApplied": [
          "tableOccupancyConsistency"
        ],
        "transactional": true,
        "steps": [
          "Load Table master-data document by id via ctx.data.mdmDocument.get({ mdmId: tableId })",
          "Validate that the requested status is one of available, occupied, disabled",
          "Apply tableOccupancyConsistency rule: if transitioning to 'occupied' ensure no conflicting active occupancy; if transitioning to 'available' ensure no active orders/reservations tied to the table",
          "Update the Table document status field and set updatedAt to current timestamp",
          "Persist the updated Table master-data document via ctx.data.mdmDocument update within a single transaction",
          "Return tableId, confirmed status, and updatedAt"
        ]
      }
    ],
    "rulesApplied": [
      "tableOccupancyConsistency"
    ],
    "mdmRefs": [
      "Table"
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
    "rulesApplied": [
      "tableOccupancyConsistency"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
