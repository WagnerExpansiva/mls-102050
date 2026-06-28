/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/openDailyShift.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "createDailyShift",
    "purpose": "Criar turno diário",
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
        "name": "openingCashBalance",
        "type": "number",
        "required": false,
        "description": "Valor inicial em caixa ao abrir o turno."
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
    "commandName": "recordOpeningCashMovement",
    "purpose": "Registrar movimento de caixa de abertura",
    "kind": "command",
    "input": [
      {
        "name": "movementType",
        "type": "string",
        "required": true,
        "enum": [
          "entrada",
          "saída"
        ],
        "description": "Tipo do movimento: entrada ou saída de caixa"
      },
      {
        "name": "amount",
        "type": "number",
        "required": true,
        "description": "Valor do movimento"
      },
      {
        "name": "reason",
        "type": "string",
        "required": true,
        "description": "Motivo do movimento (ex.: sangria, reforço, estorno)"
      }
    ],
    "output": [
      {
        "name": "cashMovementId",
        "type": "string",
        "description": "Identificador único do movimento de caixa"
      }
    ]
  }
];

export const pipeline = [
  {
    "id": "openDailyShift__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102050_/l2/cafeFlow/web/contracts/openDailyShift.ts",
    "defPath": "_102050_/l2/cafeFlow/web/contracts/openDailyShift.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
