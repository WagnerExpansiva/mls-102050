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
        "required": false,
        "description": "Turno diário em que o pedido foi registrado"
      },
      {
        "name": "status",
        "type": "string",
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
        "description": "Status atual do pedido na coordenação com a cozinha"
      },
      {
        "name": "closedAt",
        "type": "date",
        "required": false,
        "description": "Data e hora do fechamento do pedido"
      }
    ],
    "output": [
      {
        "name": "dailyShiftId",
        "type": "string",
        "description": "Turno diário em que o pedido foi registrado"
      },
      {
        "name": "status",
        "type": "string",
        "enum": [
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
        "description": "Valor total do pedido com preços no momento da venda"
      },
      {
        "name": "closedAt",
        "type": "date",
        "description": "Data e hora do fechamento do pedido"
      }
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
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
