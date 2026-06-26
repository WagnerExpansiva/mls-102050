/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/aiSalesSummary.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "aiSalesSummary",
    "purpose": "Assistente IA: resumo de vendas do dia",
    "kind": "query",
    "input": [
      {
        "name": "dailyShiftId",
        "type": "string",
        "sourceEntity": "Order",
        "sourceField": "dailyShiftId",
        "required": false,
        "description": "Turno diário em que o pedido foi registrado",
        "sourceType": "uuid"
      },
      {
        "name": "status",
        "type": "string",
        "sourceEntity": "Order",
        "sourceField": "status",
        "required": false,
        "enum": [
          "draft",
          "sentToKitchen",
          "inPreparation",
          "ready",
          "served",
          "closed",
          "cancelled"
        ],
        "lifecycleStates": [
          "draft",
          "sentToKitchen",
          "inPreparation",
          "ready",
          "served",
          "closed",
          "cancelled"
        ],
        "description": "Status atual do pedido na coordenação com a cozinha"
      },
      {
        "name": "closedAt",
        "type": "date",
        "sourceEntity": "Order",
        "sourceField": "closedAt",
        "required": false,
        "description": "Data e hora do fechamento do pedido",
        "sourceType": "datetime"
      }
    ],
    "output": [
      {
        "name": "dailyShiftId",
        "type": "string",
        "sourceEntity": "Order",
        "sourceField": "dailyShiftId",
        "description": "Turno diário em que o pedido foi registrado",
        "sourceType": "uuid"
      },
      {
        "name": "status",
        "type": "string",
        "sourceEntity": "Order",
        "sourceField": "status",
        "enum": [
          "draft",
          "sentToKitchen",
          "inPreparation",
          "ready",
          "served",
          "closed",
          "cancelled"
        ],
        "lifecycleStates": [
          "draft",
          "sentToKitchen",
          "inPreparation",
          "ready",
          "served",
          "closed",
          "cancelled"
        ],
        "description": "Status atual do pedido na coordenação com a cozinha"
      },
      {
        "name": "totalAmount",
        "type": "number",
        "sourceEntity": "Order",
        "sourceField": "totalAmount",
        "description": "Valor total do pedido com preços no momento da venda",
        "sourceType": "money"
      },
      {
        "name": "closedAt",
        "type": "date",
        "sourceEntity": "Order",
        "sourceField": "closedAt",
        "description": "Data e hora do fechamento do pedido",
        "sourceType": "datetime"
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
