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
      "Read DailyShift for the requested period via DailyShift port",
      "Read Orders within the shift via Order port",
      "Read MenuItem details via MenuItem port",
      "Aggregate totalAmount, status counts, closedAt timestamps",
      "Apply aiOutputLanguageSelection rule to format output language",
      "Generate natural-language sales summary",
      "Return summary with key metrics"
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
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "aiOutputLanguageSelection"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
