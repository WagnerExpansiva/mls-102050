/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/manageInventoryItems.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "manageInventoryItems",
  "pageName": "Gerenciar itens de estoque (ingredientes)",
  "actor": "manager",
  "purpose": "Executar Gerenciar itens de estoque (ingredientes).",
  "capabilities": [
    "manageInventoryItems"
  ],
  "flowRefs": {
    "experienceFlows": [],
    "entityLifecycles": [],
    "taskWorkflows": [],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "sectionName": "Gerenciar itens de estoque (ingredientes)",
      "mode": "edit",
      "organisms": [
        {
          "organismName": "ManageInventoryItems",
          "purpose": "Gerenciar itens de estoque (ingredientes)",
          "userActions": [
            "manageInventoryItems"
          ],
          "requiredEntities": [
            "InventoryItem"
          ],
          "readsFields": [],
          "writesFields": [
            "InventoryItem.name",
            "InventoryItem.description",
            "InventoryItem.unit",
            "InventoryItem.currentQuantity",
            "InventoryItem.minimumLevel",
            "InventoryItem.status"
          ],
          "rulesApplied": [
            "inventoryLowStockThreshold",
            "ingredientConsumptionTrigger"
          ]
        }
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "manageInventoryItems__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/manageInventoryItems.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/manageInventoryItems.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/manageInventoryItems.ts",
      "_102050_/l2/cafeFlow/web/contracts/manageInventoryItems.ts"
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
