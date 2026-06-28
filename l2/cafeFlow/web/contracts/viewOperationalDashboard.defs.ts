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
        "required": false,
        "description": "Identificador único do turno diário."
      },
      {
        "name": "shiftDate",
        "type": "date",
        "required": false,
        "description": "Data operacional do turno."
      },
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
      },
      {
        "name": "createdAt",
        "type": "date",
        "required": false,
        "description": "Data e hora de criação do registro."
      }
    ],
    "output": [
      {
        "name": "dailyShiftId",
        "type": "string",
        "description": "Identificador único do turno diário."
      },
      {
        "name": "shiftDate",
        "type": "date",
        "description": "Data operacional do turno."
      },
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
      }
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
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
