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
        "required": false,
        "enum": [
          "open",
          "closed"
        ],
        "description": "Estado atual do turno."
      },
      {
        "name": "openedAt",
        "type": "date",
        "required": false,
        "description": "Data e hora de abertura do turno."
      },
      {
        "name": "closedAt",
        "type": "date",
        "required": false,
        "description": "Data e hora de fechamento do turno."
      }
    ],
    "output": [
      {
        "name": "status",
        "type": "string",
        "enum": [
          "open",
          "closed"
        ],
        "description": "Estado atual do turno."
      },
      {
        "name": "openedAt",
        "type": "date",
        "description": "Data e hora de abertura do turno."
      },
      {
        "name": "closedAt",
        "type": "date",
        "description": "Data e hora de fechamento do turno."
      },
      {
        "name": "openingCashBalance",
        "type": "number",
        "description": "Valor inicial em caixa ao abrir o turno."
      },
      {
        "name": "closingCashBalance",
        "type": "number",
        "description": "Valor final em caixa ao fechar o turno."
      },
      {
        "name": "totalSales",
        "type": "number",
        "description": "Total consolidado de vendas no turno."
      },
      {
        "name": "totalPayments",
        "type": "number",
        "description": "Total consolidado de pagamentos recebidos no turno."
      },
      {
        "name": "closingNotes",
        "type": "string",
        "description": "Observações e relatório de fechamento do turno."
      }
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
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
