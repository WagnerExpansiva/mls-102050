/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/createDailyShift.defs.ts" enhancement="_blank"/>

export const createDailyShiftUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createDailyShift",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createDailyShift",
    "functionName": "createDailyShift",
    "inputTypeName": "CreateDailyShiftInput",
    "outputTypeName": "CreateDailyShiftOutput",
    "ports": [
      "DailyShift"
    ],
    "rulesApplied": [
      "paymentTimingByOrderType",
      "aiOutputLanguageSelection"
    ],
    "transactional": true,
    "steps": [
      "Check via DailyShift port that no shift is already OPEN for the target date",
      "Validate openingCashBalance is non-negative",
      "Create DailyShift with shiftDate, status=OPEN, openedAt=now, openingCashBalance",
      "Apply paymentTimingByOrderType defaults for the shift context",
      "Select language via aiOutputLanguageSelection for shift locale",
      "Persist DailyShift via DailyShift port",
      "Return created shift with generated dailyShiftId"
    ]
  }
} as const;

export default createDailyShiftUsecase;

export const pipeline = [
  {
    "id": "createDailyShift__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/createDailyShift.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/createDailyShift.defs.ts",
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
