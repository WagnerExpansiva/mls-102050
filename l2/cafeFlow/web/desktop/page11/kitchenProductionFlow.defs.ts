/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/kitchenProductionFlow.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "kitchenProductionFlow",
  "pageName": "Fluxo de produção da cozinha",
  "actor": "cook",
  "purpose": "Executar Fluxo de produção da cozinha.",
  "capabilities": [
    "kitchenProductionFlow",
    "updateOrderAndKitchenStatuses"
  ],
  "flowRefs": {
    "experienceFlows": [
      "kitchenProductionFlow"
    ],
    "entityLifecycles": [],
    "taskWorkflows": [
      "kitchenProductionFlow"
    ],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "sectionName": "Fluxo de produção da cozinha",
      "mode": "edit",
      "organisms": [
        {
          "organismName": "ViewKitchenTickets",
          "purpose": "Consultar tickets da cozinha",
          "userActions": [
            "viewKitchenTickets"
          ],
          "requiredEntities": [
            "KitchenTicket"
          ],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": []
        },
        {
          "organismName": "UpdateKitchenTicketStatus",
          "purpose": "Atualizar status do ticket de cozinha",
          "userActions": [
            "updateKitchenTicketStatus"
          ],
          "requiredEntities": [
            "KitchenTicket"
          ],
          "readsFields": [
            "KitchenTicket.status"
          ],
          "writesFields": [
            "KitchenTicket.status",
            "KitchenTicket.updatedAt"
          ],
          "rulesApplied": [
            "orderStatusTransitions"
          ]
        },
        {
          "organismName": "UpdateOrderItemStatus",
          "purpose": "Atualizar status de item do pedido",
          "userActions": [
            "updateOrderItemStatus"
          ],
          "requiredEntities": [
            "OrderItem"
          ],
          "readsFields": [
            "OrderItem.status"
          ],
          "writesFields": [
            "OrderItem.status",
            "OrderItem.updatedAt"
          ],
          "rulesApplied": [
            "orderStatusTransitions",
            "ingredientConsumptionTrigger"
          ]
        }
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "kitchenProductionFlow__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/kitchenProductionFlow.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/kitchenProductionFlow.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/kitchenProductionFlow.ts",
      "_102050_/l2/cafeFlow/web/contracts/kitchenProductionFlow.ts"
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
