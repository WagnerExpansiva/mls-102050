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
      "Validate no DailyShift is currently OPEN via DailyShift port",
      "Create DailyShift with shiftDate=today, status=OPEN, openedAt=now, openingCashBalance via DailyShift port",
      "Apply paymentTimingByOrderType defaults for the new shift",
      "Select language via aiOutputLanguageSelection for shift locale",
      "Record opening CashMovement (movementType=OPENING) linked to the new shift",
      "Persist DailyShift and CashMovement atomically",
      "Return opened shift with dailyShiftId"
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
      "_102021_/l2/skills/layer_3.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "paymentTimingByOrderType",
      "aiOutputLanguageSelection"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
