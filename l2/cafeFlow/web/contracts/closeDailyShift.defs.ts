/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/closeDailyShift.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "updateDailyShiftStatus",
    "purpose": "Update Daily Shift Status",
    "kind": "command",
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
        "required": true,
        "description": "Data operacional do turno."
      },
      {
        "name": "status",
        "type": "string",
        "sourceEntity": "DailyShift",
        "sourceField": "status",
        "required": true,
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
        "required": true,
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
        "name": "openingCashBalance",
        "type": "number",
        "sourceEntity": "DailyShift",
        "sourceField": "openingCashBalance",
        "required": false,
        "description": "Valor inicial em caixa ao abrir o turno.",
        "sourceType": "money"
      },
      {
        "name": "closingCashBalance",
        "type": "number",
        "sourceEntity": "DailyShift",
        "sourceField": "closingCashBalance",
        "required": false,
        "description": "Valor final em caixa ao fechar o turno.",
        "sourceType": "money"
      },
      {
        "name": "totalSales",
        "type": "number",
        "sourceEntity": "DailyShift",
        "sourceField": "totalSales",
        "required": false,
        "description": "Total consolidado de vendas no turno.",
        "sourceType": "money"
      },
      {
        "name": "totalPayments",
        "type": "number",
        "sourceEntity": "DailyShift",
        "sourceField": "totalPayments",
        "required": false,
        "description": "Total consolidado de pagamentos recebidos no turno.",
        "sourceType": "money"
      },
      {
        "name": "closingNotes",
        "type": "string",
        "sourceEntity": "DailyShift",
        "sourceField": "closingNotes",
        "required": false,
        "description": "Observações e relatório de fechamento do turno.",
        "sourceType": "text"
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
      }
    ],
    "readsEntities": [
      "DailyShift"
    ],
    "writesEntities": [
      "DailyShift"
    ],
    "readsTables": [],
    "writesTables": [],
    "usecaseRefs": [
      "updateDailyShiftStatus"
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
  },
  {
    "commandName": "recordClosingCashMovement",
    "purpose": "Record Closing Cash Movement",
    "kind": "command",
    "input": [
      {
        "name": "shiftDate",
        "type": "date",
        "sourceEntity": "DailyShift",
        "sourceField": "shiftDate",
        "required": true,
        "description": "Data operacional do turno."
      },
      {
        "name": "status",
        "type": "string",
        "sourceEntity": "DailyShift",
        "sourceField": "status",
        "required": true,
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
        "required": true,
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
        "name": "openingCashBalance",
        "type": "number",
        "sourceEntity": "DailyShift",
        "sourceField": "openingCashBalance",
        "required": false,
        "description": "Valor inicial em caixa ao abrir o turno.",
        "sourceType": "money"
      },
      {
        "name": "closingCashBalance",
        "type": "number",
        "sourceEntity": "DailyShift",
        "sourceField": "closingCashBalance",
        "required": false,
        "description": "Valor final em caixa ao fechar o turno.",
        "sourceType": "money"
      },
      {
        "name": "totalSales",
        "type": "number",
        "sourceEntity": "DailyShift",
        "sourceField": "totalSales",
        "required": false,
        "description": "Total consolidado de vendas no turno.",
        "sourceType": "money"
      },
      {
        "name": "totalPayments",
        "type": "number",
        "sourceEntity": "DailyShift",
        "sourceField": "totalPayments",
        "required": false,
        "description": "Total consolidado de pagamentos recebidos no turno.",
        "sourceType": "money"
      },
      {
        "name": "closingNotes",
        "type": "string",
        "sourceEntity": "DailyShift",
        "sourceField": "closingNotes",
        "required": false,
        "description": "Observações e relatório de fechamento do turno.",
        "sourceType": "text"
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
      }
    ],
    "readsEntities": [
      "DailyShift"
    ],
    "writesEntities": [
      "DailyShift"
    ],
    "readsTables": [],
    "writesTables": [],
    "usecaseRefs": [
      "recordClosingCashMovement"
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
    "id": "closeDailyShift__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102050_/l2/cafeFlow/web/contracts/closeDailyShift.ts",
    "defPath": "_102050_/l2/cafeFlow/web/contracts/closeDailyShift.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentMaterializeSolution/skills/genContract.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
