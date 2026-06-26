/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/aiSalesSummary.defs.ts" enhancement="_blank"/>

export const aiSalesSummaryUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "aiSalesSummary",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "aiSalesSummary",
    "functionName": "aiSalesSummary",
    "inputTypeName": "AiSalesSummaryInput",
    "outputTypeName": "AiSalesSummaryOutput",
    "ports": [
      "Order",
      "DailyShift",
      "MenuItem"
    ],
    "rulesApplied": [
      "aiOutputLanguageSelection"
    ],
    "transactional": false,
    "steps": [
      "Determine target language via aiOutputLanguageSelection rule",
      "Read Orders filtered by date range and dailyShiftId via Order port",
      "Read DailyShift summary data via DailyShift port",
      "Read MenuItem metadata via MenuItem port for item-level breakdown",
      "Aggregate totalAmount, status distribution, and closedAt timestamps",
      "Call AI service with aggregated data and selected language to produce sales summary",
      "Return formatted summary text and structured metrics"
    ]
  }
} as const;

export default aiSalesSummaryUsecase;

export const pipeline = [
  {
    "id": "aiSalesSummary__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/aiSalesSummary.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/aiSalesSummary.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_2_application/ports/menuItemRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/order.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/menuItem.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_3.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "aiOutputLanguageSelection"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
