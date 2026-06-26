/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/aiSalesSummary.defs.ts" enhancement="_blank"/>

export const definition = [
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
];

export const pipeline = [
  {
    "id": "aiSalesSummary__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102050_/l2/cafeFlow/web/contracts/aiSalesSummary.ts",
    "defPath": "_102050_/l2/cafeFlow/web/contracts/aiSalesSummary.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentMaterializeSolution/skills/genContract.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
