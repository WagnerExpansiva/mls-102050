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
    "functionName": "openDailyShift",
    "inputTypeName": "OpenDailyShiftInput",
    "outputTypeName": "OpenDailyShiftOutput",
    "ports": [
      "DailyShift"
    ],
    "rulesApplied": [
      "paymentTimingByOrderType",
      "aiOutputLanguageSelection"
    ],
    "transactional": true,
    "steps": [
      "Step 1 - Validate: check no other DailyShift is OPEN for the same or overlapping date via DailyShift port",
      "Step 2 - Create Shift: create DailyShift with shiftDate, status=OPEN, openedAt=now, openingCashBalance",
      "Step 3 - Configure: apply paymentTimingByOrderType rule to set payment flow defaults for the shift",
      "Step 4 - Language: apply aiOutputLanguageSelection rule for shift default language",
      "Step 5 - Record Cash: record opening CashMovement (movementType=OPENING) linked to the shift",
      "Step 6 - Persist: save DailyShift and CashMovement within transaction",
      "Return opened DailyShift with dailyShiftId and initial cash balance"
    ]
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
    "rulesApplied": [
      "paymentTimingByOrderType",
      "aiOutputLanguageSelection"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
