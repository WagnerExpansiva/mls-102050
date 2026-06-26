/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/aiSalesSummary.defs.ts" enhancement="_blank"/>

export const definition = {
  "bffCommands": [
    {
      "commandName": "aiSalesSummary",
      "purpose": "Assistente IA: resumo de vendas do dia",
      "kind": "query",
      "input": [
        {
          "name": "orderType",
          "type": "string",
          "required": false
        },
        {
          "name": "status",
          "type": "string",
          "required": false
        },
        {
          "name": "customerName",
          "type": "string",
          "required": false
        }
      ],
      "output": [
        {
          "name": "orderId",
          "type": "string"
        },
        {
          "name": "dailyShiftId",
          "type": "string"
        },
        {
          "name": "tableId",
          "type": "string"
        },
        {
          "name": "kitchenTicketId",
          "type": "string"
        },
        {
          "name": "orderType",
          "type": "string"
        },
        {
          "name": "status",
          "type": "string"
        },
        {
          "name": "totalAmount",
          "type": "number"
        },
        {
          "name": "notes",
          "type": "string"
        }
      ],
      "readsEntities": [
        "Order",
        "OrderItem",
        "DailyShift",
        "MenuItem"
      ],
      "writesEntities": [],
      "readsTables": [],
      "writesTables": [],
      "usecaseRefs": [
        "aiSalesSummary"
      ],
      "layerContract": {
        "controllerLayer": "layer_2_controllers",
        "mustCallLayer": "layer_3_usecases",
        "directTableAccessForbidden": true
      },
      "rulesApplied": [
        "aiOutputLanguageSelection",
        "orderStatusTransitions",
        "paymentTimingByOrderType",
        "ingredientConsumptionTrigger",
        "tableOccupancyConsistency"
      ]
    }
  ],
  "navigationRefs": []
};

export const pipeline = [
  {
    "id": "aiSalesSummary__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102050_/l2/cafeFlow/web/shared/aiSalesSummary.ts",
    "defPath": "_102050_/l2/cafeFlow/web/shared/aiSalesSummary.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/contracts/aiSalesSummary.ts"
    ],
    "dependsOn": [],
    "skills": [
      "/_102020_/l2/agentMaterializeSolution/skills/genPageShared.ts"
    ],
    "rulesApplied": [
      "aiOutputLanguageSelection",
      "orderStatusTransitions",
      "paymentTimingByOrderType",
      "ingredientConsumptionTrigger",
      "tableOccupancyConsistency"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
