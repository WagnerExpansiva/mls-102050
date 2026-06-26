/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/generateShiftCloseReport.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "generateShiftCloseReport",
    "purpose": "Gerar relatório de fechamento de turno",
    "kind": "query",
    "input": [
      {
        "name": "status",
        "type": "string",
        "sourceEntity": "DailyShift",
        "sourceField": "status",
        "required": false,
        "enum": [
          "open",
          "closed"
        ],
        "lifecycleStates": [
          "open",
          "closed"
        ],
        "description": "Estado atual do turno."
      },
      {
        "name": "openedAt",
        "type": "date",
        "sourceEntity": "DailyShift",
        "sourceField": "openedAt",
        "required": false,
        "description": "Data e hora de abertura do turno.",
        "sourceType": "datetime"
      },
      {
        "name": "closedAt",
        "type": "date",
        "sourceEntity": "DailyShift",
        "sourceField": "closedAt",
        "required": false,
        "description": "Data e hora de fechamento do turno.",
        "sourceType": "datetime"
      }
    ],
    "output": [
      {
        "name": "status",
        "type": "string",
        "sourceEntity": "DailyShift",
        "sourceField": "status",
        "enum": [
          "open",
          "closed"
        ],
        "lifecycleStates": [
          "open",
          "closed"
        ],
        "description": "Estado atual do turno."
      },
      {
        "name": "openedAt",
        "type": "date",
        "sourceEntity": "DailyShift",
        "sourceField": "openedAt",
        "description": "Data e hora de abertura do turno.",
        "sourceType": "datetime"
      },
      {
        "name": "closedAt",
        "type": "date",
        "sourceEntity": "DailyShift",
        "sourceField": "closedAt",
        "description": "Data e hora de fechamento do turno.",
        "sourceType": "datetime"
      },
      {
        "name": "openingCashBalance",
        "type": "number",
        "sourceEntity": "DailyShift",
        "sourceField": "openingCashBalance",
        "description": "Valor inicial em caixa ao abrir o turno.",
        "sourceType": "money"
      },
      {
        "name": "closingCashBalance",
        "type": "number",
        "sourceEntity": "DailyShift",
        "sourceField": "closingCashBalance",
        "description": "Valor final em caixa ao fechar o turno.",
        "sourceType": "money"
      },
      {
        "name": "totalSales",
        "type": "number",
        "sourceEntity": "DailyShift",
        "sourceField": "totalSales",
        "description": "Total consolidado de vendas no turno.",
        "sourceType": "money"
      },
      {
        "name": "totalPayments",
        "type": "number",
        "sourceEntity": "DailyShift",
        "sourceField": "totalPayments",
        "description": "Total consolidado de pagamentos recebidos no turno.",
        "sourceType": "money"
      },
      {
        "name": "closingNotes",
        "type": "string",
        "sourceEntity": "DailyShift",
        "sourceField": "closingNotes",
        "description": "Observações e relatório de fechamento do turno.",
        "sourceType": "text"
      }
    ],
    "readsEntities": [
      "DailyShift",
      "Payment",
      "CashMovement",
      "Order",
      "OrderItem"
    ],
    "writesEntities": [],
    "readsTables": [],
    "writesTables": [],
    "usecaseRefs": [
      "generateShiftCloseReport"
    ],
    "layerContract": {
      "controllerLayer": "layer_2_controllers",
      "mustCallLayer": "layer_3_usecases",
      "directTableAccessForbidden": true
    },
    "rulesApplied": [
      "paymentTimingByOrderType",
      "aiOutputLanguageSelection"
    ]
  }
];

export const pipeline = [
  {
    "id": "generateShiftCloseReport__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102050_/l2/cafeFlow/web/contracts/generateShiftCloseReport.ts",
    "defPath": "_102050_/l2/cafeFlow/web/contracts/generateShiftCloseReport.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentMaterializeSolution/skills/genContract.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
