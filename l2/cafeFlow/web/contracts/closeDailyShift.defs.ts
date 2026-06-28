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
        "required": false,
        "description": "Identificador único do turno diário."
      },
      {
        "name": "shiftDate",
        "type": "date",
        "required": true,
        "description": "Data operacional do turno."
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "open",
          "closed"
        ],
        "description": "Estado atual do turno."
      },
      {
        "name": "openedAt",
        "type": "date",
        "required": true,
        "description": "Data e hora de abertura do turno."
      },
      {
        "name": "closedAt",
        "type": "date",
        "required": false,
        "description": "Data e hora de fechamento do turno."
      },
      {
        "name": "openingCashBalance",
        "type": "number",
        "required": false,
        "description": "Valor inicial em caixa ao abrir o turno."
      },
      {
        "name": "closingCashBalance",
        "type": "number",
        "required": false,
        "description": "Valor final em caixa ao fechar o turno."
      },
      {
        "name": "totalSales",
        "type": "number",
        "required": false,
        "description": "Total consolidado de vendas no turno."
      },
      {
        "name": "totalPayments",
        "type": "number",
        "required": false,
        "description": "Total consolidado de pagamentos recebidos no turno."
      },
      {
        "name": "closingNotes",
        "type": "string",
        "required": false,
        "description": "Observações e relatório de fechamento do turno."
      }
    ],
    "output": [
      {
        "name": "dailyShiftId",
        "type": "string",
        "description": "Identificador único do turno diário."
      }
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
        "required": true,
        "description": "Data operacional do turno."
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "open",
          "closed"
        ],
        "description": "Estado atual do turno."
      },
      {
        "name": "openedAt",
        "type": "date",
        "required": true,
        "description": "Data e hora de abertura do turno."
      },
      {
        "name": "closedAt",
        "type": "date",
        "required": false,
        "description": "Data e hora de fechamento do turno."
      },
      {
        "name": "openingCashBalance",
        "type": "number",
        "required": false,
        "description": "Valor inicial em caixa ao abrir o turno."
      },
      {
        "name": "closingCashBalance",
        "type": "number",
        "required": false,
        "description": "Valor final em caixa ao fechar o turno."
      },
      {
        "name": "totalSales",
        "type": "number",
        "required": false,
        "description": "Total consolidado de vendas no turno."
      },
      {
        "name": "totalPayments",
        "type": "number",
        "required": false,
        "description": "Total consolidado de pagamentos recebidos no turno."
      },
      {
        "name": "closingNotes",
        "type": "string",
        "required": false,
        "description": "Observações e relatório de fechamento do turno."
      }
    ],
    "output": [
      {
        "name": "dailyShiftId",
        "type": "string",
        "description": "Identificador único do turno diário."
      }
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
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
