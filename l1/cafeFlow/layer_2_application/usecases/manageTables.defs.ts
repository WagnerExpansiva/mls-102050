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
    "ports": [],
    "functions": [
      {
        "functionName": "updateTable",
        "inputTypeName": "UpdateTableInput",
        "outputTypeName": "UpdateTableOutput",
        "input": [
          {
            "name": "tableId",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "ID of the table to update"
          },
          {
            "name": "number",
            "type": "string",
            "required": false,
            "ofEntity": "Table",
            "description": "Table number/label"
          },
          {
            "name": "status",
            "type": "string",
            "required": false,
            "ofEntity": "Table",
            "description": "New table status: available | occupied | disabled"
          }
        ],
        "output": [
          {
            "name": "tableId",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "ID of the updated table"
          },
          {
            "name": "number",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Updated table number"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Updated table status"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Timestamp of the update"
          }
        ],
        "ports": [],
        "rulesApplied": [
          "tableOccupancyConsistency"
        ],
        "transactional": true,
        "steps": [
          "Read the Table master-data document by tableId via ctx.data.mdmDocument.get({ mdmId: tableId })",
          "Validate tableOccupancyConsistency: if status is being set to 'available', ensure no active orders/seats are linked to the table; if set to 'occupied', ensure it is not currently 'disabled'",
          "Apply requested field changes (number and/or status) to the Table document",
          "Set updatedAt to current timestamp",
          "Persist the updated Table master-data document via ctx.data.mdmDocument.save",
          "Return tableId, number, status, and updatedAt"
        ]
      },
      {
        "functionName": "changeTableStatus",
        "inputTypeName": "ChangeTableStatusInput",
        "outputTypeName": "ChangeTableStatusOutput",
        "input": [
          {
            "name": "tableId",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "ID of the table whose status changes"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Target status: available | occupied | disabled"
          }
        ],
        "output": [
          {
            "name": "tableId",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "ID of the table"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "New status after transition"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "Table",
            "description": "Timestamp of the status change"
          }
        ],
        "ports": [],
        "rulesApplied": [
          "tableOccupancyConsistency"
        ],
        "transactional": true,
        "steps": [
          "Read the Table master-data document by tableId via ctx.data.mdmDocument.get({ mdmId: tableId })",
          "Validate tableOccupancyConsistency: transitioning to 'available' requires no active occupancy; transitioning to 'occupied' requires current status is 'available'; transitioning to 'disabled' requires current status is 'available'",
          "Set status to the target value and updatedAt to current timestamp",
          "Persist the updated Table master-data document via ctx.data.mdmDocument.save",
          "Return tableId, status, and updatedAt"
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
