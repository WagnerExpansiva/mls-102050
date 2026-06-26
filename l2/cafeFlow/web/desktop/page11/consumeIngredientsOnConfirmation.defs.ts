/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/consumeIngredientsOnConfirmation.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "consumeIngredientsOnConfirmation",
  "pageName": "Baixar estoque por consumo de ingredientes",
  "actor": "attendant",
  "purpose": "Executar Baixar estoque por consumo de ingredientes.",
  "capabilities": [
    "consumeIngredientsOnConfirmation"
  ],
  "flowRefs": {
    "experienceFlows": [
      "consumeIngredientsOnConfirmation"
    ],
    "entityLifecycles": [],
    "taskWorkflows": [
      "consumeIngredientsOnConfirmation"
    ],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "sectionName": "Baixar estoque por consumo de ingredientes",
      "mode": "edit",
      "organisms": [
        {
          "organismName": "CreateStockConsumption",
          "purpose": "Registrar consumo de estoque",
          "userActions": [
            "createStockConsumption"
          ],
          "requiredEntities": [
            "StockConsumption",
            "Order",
            "OrderItem",
            "MenuItem",
            "RecipeComponent",
            "InventoryItem"
          ],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "ingredientConsumptionTrigger"
          ]
        }
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "consumeIngredientsOnConfirmation__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/consumeIngredientsOnConfirmation.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/consumeIngredientsOnConfirmation.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/consumeIngredientsOnConfirmation.ts",
      "_102050_/l2/cafeFlow/web/contracts/consumeIngredientsOnConfirmation.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentMaterializeSolution/skills/genPageRender.ts",
      "_102020_/l2/agentMaterializeSolution/skills/genPageDS.ts"
    ],
    "afterSaveFrontEnd": "_102020_/l2/agentMaterializeSolution/registerFrontEnd.ts?registerPage",
    "visualStyle": {
      "description": "POS-first, high-contrast, touch-friendly, low-latency, status-driven UI"
    },
    "agent": "agentMaterializeGen"
  }
] as const;
