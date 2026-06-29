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
    "ports": [
      "Order",
      "MenuItem"
    ],
    "functions": [
      {
        "functionName": "aiPromotionSuggestions",
        "inputTypeName": "AiPromotionSuggestionsInput",
        "outputTypeName": "AiPromotionSuggestionsOutput",
        "input": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "The order to analyze for promotion suggestions"
          }
        ],
        "output": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "The analyzed order id"
          },
          {
            "name": "suggestions",
            "type": "array",
            "required": true,
            "description": "List of AI-generated promotion suggestions based on the order items and available menu items",
            "ofEntity": "OrderItem"
          }
        ],
        "ports": [
          "Order",
          "MenuItem"
        ],
        "rulesApplied": [],
        "transactional": false,
        "steps": [
          "Load the Order aggregate by orderId via OrderPort (includes embedded OrderItems)",
          "Collect all menuItemIds from the order items",
          "Load referenced MenuItems via MenuItemPort to obtain names, prices, categories and status",
          "Filter MenuItems to only active ones for suggestion candidates",
          "Analyze current order items: quantities, categories, total amount, and item combinations",
          "Generate promotion suggestions (upsell, cross-sell, bundle, discount) based on order composition and available active menu items",
          "Return the orderId and the list of suggestions with suggested menu item, suggestion type, description, suggested price and discount percentage"
        ]
      }
    ],
    "mdmRefs": []
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
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
