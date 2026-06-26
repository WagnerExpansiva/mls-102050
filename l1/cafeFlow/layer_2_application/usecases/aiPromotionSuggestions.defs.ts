/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/aiPromotionSuggestions.defs.ts" enhancement="_blank"/>

export const aiPromotionSuggestionsUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "aiPromotionSuggestions",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "aiPromotionSuggestions",
    "functionName": "aiPromotionSuggestions",
    "inputTypeName": "AiPromotionSuggestionsInput",
    "outputTypeName": "AiPromotionSuggestionsOutput",
    "ports": [
      "Order",
      "MenuItem"
    ],
    "rulesApplied": [],
    "transactional": false,
    "steps": [
      "Read recent OrderItem history via Order port to identify top-selling and slow-moving items",
      "Read MenuItem catalog via MenuItem port for pricing and category context",
      "Aggregate sales volume and revenue per MenuItem",
      "Call AI service with aggregated data to generate promotion suggestions",
      "Return structured promotion recommendations"
    ]
  }
} as const;

export default aiPromotionSuggestionsUsecase;

export const pipeline = [
  {
    "id": "aiPromotionSuggestions__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/aiPromotionSuggestions.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/aiPromotionSuggestions.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_2_application/ports/menuItemRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/order.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/menuItem.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_3.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
