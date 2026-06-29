/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/closeDailyShift.defs.ts" enhancement="_blank"/>

export const closeDailyShiftUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "closeDailyShift",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "closeDailyShift",
    "ports": [
      "DailyShift"
    ],
    "functions": [
      {
        "functionName": "closeDailyShift",
        "inputTypeName": "CloseDailyShiftInput",
        "outputTypeName": "CloseDailyShiftOutput",
        "input": [
          {
            "name": "dailyShiftId",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift"
          },
          {
            "name": "closingNotes",
            "type": "string",
            "required": false,
            "ofEntity": "DailyShift"
          }
        ],
        "output": [
          {
            "name": "dailyShiftId",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift"
          },
          {
            "name": "closedAt",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift"
          },
          {
            "name": "openingCashBalance",
            "type": "number",
            "required": true,
            "ofEntity": "DailyShift"
          },
          {
            "name": "closingCashBalance",
            "type": "number",
            "required": true,
            "ofEntity": "DailyShift"
          },
          {
            "name": "totalSales",
            "type": "number",
            "required": true,
            "ofEntity": "DailyShift"
          },
          {
            "name": "totalPayments",
            "type": "number",
            "required": true,
            "ofEntity": "DailyShift"
          },
          {
            "name": "closingNotes",
            "type": "string",
            "required": false,
            "ofEntity": "DailyShift"
          }
        ],
        "ports": [
          "DailyShift"
        ],
        "rulesApplied": [
          "SHIFT_MUST_BE_OPEN",
          "CLOSING_BALANCE_CALCULATED_FROM_CASH_MOVEMENTS",
          "CLOSED_AT_SET_TO_CURRENT_TIMESTAMP"
        ],
        "transactional": true,
        "steps": [
          "Load DailyShift by dailyShiftId via DailyShiftPort.findById",
          "Validate shift.status === 'open' (SHIFT_MUST_BE_OPEN)",
          "Load all CashMovements embedded in the DailyShift aggregate for dailyShiftId",
          "Calculate totalCashIn = sum of CashMovement.amount where movementType === 'entrada'",
          "Calculate totalCashOut = sum of CashMovement.amount where movementType === 'saída'",
          "Calculate closingCashBalance = openingCashBalance + totalCashIn - totalCashOut (CLOSING_BALANCE_CALCULATED_FROM_CASH_MOVEMENTS)",
          "Set shift.status = 'closed'",
          "Set shift.closedAt = current timestamp (CLOSED_AT_SET_TO_CURRENT_TIMESTAMP)",
          "Set shift.closingCashBalance = calculated value",
          "Set shift.closingNotes = provided closingNotes if present",
          "Save DailyShift via DailyShiftPort.save",
          "Return updated shift summary"
        ]
      },
      {
        "functionName": "previewDailyShiftClosure",
        "inputTypeName": "PreviewDailyShiftClosureInput",
        "outputTypeName": "PreviewDailyShiftClosureOutput",
        "input": [
          {
            "name": "dailyShiftId",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift"
          }
        ],
        "output": [
          {
            "name": "dailyShiftId",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift"
          },
          {
            "name": "shiftDate",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift"
          },
          {
            "name": "openingCashBalance",
            "type": "number",
            "required": true,
            "ofEntity": "DailyShift"
          },
          {
            "name": "totalCashIn",
            "type": "number",
            "required": true,
            "ofEntity": "CashMovement"
          },
          {
            "name": "totalCashOut",
            "type": "number",
            "required": true,
            "ofEntity": "CashMovement"
          },
          {
            "name": "projectedClosingBalance",
            "type": "number",
            "required": true,
            "ofEntity": "DailyShift"
          },
          {
            "name": "totalSales",
            "type": "number",
            "required": true,
            "ofEntity": "DailyShift"
          },
          {
            "name": "totalPayments",
            "type": "number",
            "required": true,
            "ofEntity": "DailyShift"
          }
        ],
        "ports": [
          "DailyShift"
        ],
        "rulesApplied": [
          "SHIFT_MUST_BE_OPEN",
          "CLOSING_BALANCE_CALCULATED_FROM_CASH_MOVEMENTS"
        ],
        "transactional": false,
        "steps": [
          "Load DailyShift by dailyShiftId via DailyShiftPort.findById",
          "Validate shift.status === 'open' (SHIFT_MUST_BE_OPEN)",
          "Load all CashMovements embedded in the DailyShift aggregate for dailyShiftId",
          "Calculate totalCashIn = sum of CashMovement.amount where movementType === 'entrada'",
          "Calculate totalCashOut = sum of CashMovement.amount where movementType === 'saída'",
          "Calculate projectedClosingBalance = openingCashBalance + totalCashIn - totalCashOut (CLOSING_BALANCE_CALCULATED_FROM_CASH_MOVEMENTS)",
          "Return preview summary without mutating the shift"
        ]
      }
    ],
    "rulesApplied": [
      "SHIFT_MUST_BE_OPEN",
      "CLOSING_BALANCE_CALCULATED_FROM_CASH_MOVEMENTS",
      "CLOSED_AT_SET_TO_CURRENT_TIMESTAMP"
    ],
    "mdmRefs": []
  }
} as const;

export default closeDailyShiftUsecase;

export const pipeline = [
  {
    "id": "closeDailyShift__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/closeDailyShift.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/closeDailyShift.defs.ts",
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
    "rulesApplied": [
      "SHIFT_MUST_BE_OPEN",
      "CLOSING_BALANCE_CALCULATED_FROM_CASH_MOVEMENTS",
      "CLOSED_AT_SET_TO_CURRENT_TIMESTAMP"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
