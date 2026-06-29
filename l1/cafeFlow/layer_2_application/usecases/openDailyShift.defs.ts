/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/openDailyShift.defs.ts" enhancement="_blank"/>

export const openDailyShiftUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "openDailyShift",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "openDailyShift",
    "ports": [
      "DailyShift"
    ],
    "functions": [
      {
        "functionName": "openDailyShift",
        "inputTypeName": "OpenDailyShiftInput",
        "outputTypeName": "OpenDailyShiftOutput",
        "input": [
          {
            "name": "shiftDate",
            "type": "string",
            "required": true,
            "description": "Date of the shift to open"
          },
          {
            "name": "openingCashBalance",
            "type": "number",
            "required": false,
            "description": "Initial cash balance for the shift; if provided an initial entrada CashMovement is created"
          }
        ],
        "output": [
          {
            "name": "dailyShiftId",
            "type": "string",
            "required": true,
            "description": "Id of the newly opened DailyShift"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Status of the shift, always 'open' on creation"
          },
          {
            "name": "openedAt",
            "type": "string",
            "required": true,
            "description": "Timestamp when the shift was opened"
          }
        ],
        "ports": [
          "DailyShift"
        ],
        "rulesApplied": [
          "no-concurrent-open-shift: reject if a DailyShift with status 'open' already exists for the same shiftDate",
          "opening-cash-movement: when openingCashBalance is provided and > 0, create an initial CashMovement of type 'entrada' with reason 'Saldo inicial' embedded in the DailyShift"
        ],
        "transactional": true,
        "steps": [
          "Load existing DailyShift for the given shiftDate via DailyShift port to check for a concurrent open shift",
          "If an open DailyShift exists for shiftDate, reject with validation error (no-concurrent-open-shift)",
          "Create a new DailyShift aggregate with status='open', openedAt=current datetime, openingCashBalance=provided value (or 0)",
          "If openingCashBalance > 0, add an embedded CashMovement with movementType='entrada', amount=openingCashBalance, reason='Saldo inicial' to the DailyShift",
          "Save the DailyShift (with embedded CashMovement) through the DailyShift port",
          "Return dailyShiftId, status, and openedAt of the created shift"
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default openDailyShiftUsecase;

export const pipeline = [
  {
    "id": "openDailyShift__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/openDailyShift.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/openDailyShift.defs.ts",
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
