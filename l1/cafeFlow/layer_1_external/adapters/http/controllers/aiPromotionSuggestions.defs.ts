/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/aiPromotionSuggestions.defs.ts" enhancement="_blank"/>

export const aiPromotionSuggestionsController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "aiPromotionSuggestions",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "aiPromotionSuggestions",
    "controllerName": "AiPromotionSuggestionsController",
    "ownerKind": "operation",
    "outputSource": "contract",
    "handlers": [
      {
        "handlerName": "cafeFlowAiPromotionSuggestionsHandler",
        "command": "aiPromotionSuggestions",
        "usecaseRef": "aiPromotionSuggestions",
        "kind": "query"
      }
    ],
    "routes": [
      {
        "key": "cafeFlow.aiPromotionSuggestions.aiPromotionSuggestions",
        "handlerName": "cafeFlowAiPromotionSuggestionsHandler"
      }
    ]
  }
} as const;

export default aiPromotionSuggestionsController;

export const pipeline = [
  {
    "id": "aiPromotionSuggestions__httpController",
    "type": "httpController",
    "outputPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/aiPromotionSuggestions.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/aiPromotionSuggestions.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/usecases/aiPromotionSuggestions.d.ts",
      "_102050_/l2/cafeFlow/web/contracts/aiPromotionSuggestions.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/httpController.md",
      "_102034_.d.ts"
    ],
    "afterSaveBackEnd": "_102021_/l2/agentMaterializeSolution/registerBackEnd.ts?registerController",
    "agent": "agentMaterializeGen"
  }
] as const;
