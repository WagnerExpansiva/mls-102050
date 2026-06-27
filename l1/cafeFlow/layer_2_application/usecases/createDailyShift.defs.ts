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
      "Check no open DailyShift exists for the same shiftDate via DailyShift port",
      "Create DailyShift entity with shiftDate, openingCashBalance, openedAt, status=OPEN",
      "Apply paymentTimingByOrderType rule to set expected payment flow configuration",
      "Apply aiOutputLanguageSelection rule for default shift language",
      "Persist DailyShift via DailyShift port within transaction",
      "Return created DailyShift with generated dailyShiftId"
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
