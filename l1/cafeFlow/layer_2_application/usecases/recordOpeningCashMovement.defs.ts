/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/recordOpeningCashMovement.defs.ts" enhancement="_blank"/>

export const recordOpeningCashMovementUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "recordOpeningCashMovement",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "recordOpeningCashMovement",
    "ports": [
      "DailyShift"
    ],
    "functions": [
      {
        "functionName": "recordOpeningCashMovement",
        "inputTypeName": "RecordOpeningCashMovementInput",
        "outputTypeName": "RecordOpeningCashMovementOutput",
        "input": [
          {
            "name": "dailyShiftId",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift",
            "description": "ID of the DailyShift to which the opening cash movement belongs"
          },
          {
            "name": "amount",
            "type": "number",
            "required": true,
            "ofEntity": "CashMovement",
            "description": "Opening cash amount to register as an entrada movement"
          },
          {
            "name": "reason",
            "type": "string",
            "required": true,
            "ofEntity": "CashMovement",
            "description": "Reason for the opening cash movement"
          }
        ],
        "output": [
          {
            "name": "cashMovementId",
            "type": "string",
            "required": true,
            "ofEntity": "CashMovement",
            "description": "ID of the newly created cash movement"
          },
          {
            "name": "dailyShiftId",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift",
            "description": "ID of the parent daily shift"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Result status of the operation"
          }
        ],
        "ports": [
          "DailyShift"
        ],
        "rulesApplied": [
          "DailyShift must be open (status=open) to record an opening cash movement",
          "movementType is forced to 'entrada' for an opening cash movement",
          "amount must be greater than zero",
          "cashMovementId, createdAt and updatedAt are server-generated"
        ],
        "transactional": true,
        "steps": [
          "1. Load DailyShift by dailyShiftId via DailyShift port",
          "2. Validate DailyShift exists and status is 'open'",
          "3. Validate amount is greater than zero",
          "4. Create a new CashMovement with movementType='entrada', the provided amount and reason, and server-generated cashMovementId/createdAt/updatedAt",
          "5. Add the CashMovement to the DailyShift's cash movements collection",
          "6. Update DailyShift.openingCashBalance with the movement amount if not already set",
          "7. Save the DailyShift aggregate via DailyShift port",
          "8. Return cashMovementId, dailyShiftId and status"
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default recordOpeningCashMovementUsecase;

export const pipeline = [
  {
    "id": "recordOpeningCashMovement__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/recordOpeningCashMovement.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/recordOpeningCashMovement.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
