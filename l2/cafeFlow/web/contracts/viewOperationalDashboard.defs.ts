/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/viewOperationalDashboard.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "viewOperationalDashboard",
    "purpose": "Ver dashboard operacional do dia",
    "kind": "query",
    "input": [
      {
        "name": "dailyShiftId",
        "type": "string",
        "sourceEntity": "DailyShift",
        "sourceField": "dailyShiftId",
        "required": false,
        "description": "Identificador único do turno diário.",
        "sourceType": "uuid"
      },
      {
        "name": "shiftDate",
        "type": "date",
        "sourceEntity": "DailyShift",
        "sourceField": "shiftDate",
        "required": false,
        "description": "Data operacional do turno."
      },
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
      },
      {
        "name": "createdAt",
        "type": "date",
        "sourceEntity": "DailyShift",
        "sourceField": "createdAt",
        "required": false,
        "description": "Data e hora de criação do registro.",
        "sourceType": "datetime"
      }
    ],
    "output": [
      {
        "name": "dailyShiftId",
        "type": "string",
        "sourceEntity": "DailyShift",
        "sourceField": "dailyShiftId",
        "description": "Identificador único do turno diário.",
        "sourceType": "uuid"
      },
      {
        "name": "shiftDate",
        "type": "date",
        "sourceEntity": "DailyShift",
        "sourceField": "shiftDate",
        "description": "Data operacional do turno."
      },
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
      }
    ],
    "readsEntities": [
      "DailyShift",
      "Order",
      "Payment",
      "CashMovement"
    ],
    "writesEntities": [],
    "readsTables": [],
    "writesTables": [],
    "usecaseRefs": [
      "viewOperationalDashboard"
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
    "id": "viewOperationalDashboard__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102050_/l2/cafeFlow/web/contracts/viewOperationalDashboard.ts",
    "defPath": "_102050_/l2/cafeFlow/web/contracts/viewOperationalDashboard.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentMaterializeSolution/skills/genContract.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
