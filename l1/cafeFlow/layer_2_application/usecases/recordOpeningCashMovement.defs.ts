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
    "functionName": "recordOpeningCashMovement",
    "inputTypeName": "RecordOpeningCashMovementInput",
    "outputTypeName": "RecordOpeningCashMovementOutput",
    "ports": [
      "DailyShift"
    ],
    "rulesApplied": [],
    "transactional": true,
    "steps": [
      "Validate DailyShift exists and is OPEN via DailyShift port",
      "Create CashMovement entity with movementType=OPENING, amount, reason",
      "Link CashMovement to dailyShiftId",
      "Persist CashMovement",
      "Return created movement"
    ]
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
