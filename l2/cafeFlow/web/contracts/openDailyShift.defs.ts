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
        "name": "openingCashBalance",
        "type": "number",
        "sourceEntity": "DailyShift",
        "sourceField": "openingCashBalance",
        "required": false,
        "description": "Valor inicial em caixa ao abrir o turno.",
        "sourceType": "money"
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
      "createDailyShift"
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
    "commandName": "recordOpeningCashMovement",
    "purpose": "Registrar movimento de caixa de abertura",
    "kind": "command",
    "input": [
      {
        "name": "movementType",
        "type": "string",
        "sourceEntity": "CashMovement",
        "sourceField": "movementType",
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
        "sourceEntity": "CashMovement",
        "sourceField": "amount",
        "required": true,
        "description": "Valor do movimento",
        "sourceType": "money"
      },
      {
        "name": "reason",
        "type": "string",
        "sourceEntity": "CashMovement",
        "sourceField": "reason",
        "required": true,
        "description": "Motivo do movimento (ex.: sangria, reforço, estorno)"
      }
    ],
    "output": [
      {
        "name": "cashMovementId",
        "type": "string",
        "sourceEntity": "CashMovement",
        "sourceField": "cashMovementId",
        "description": "Identificador único do movimento de caixa",
        "sourceType": "uuid"
      }
    ],
    "readsEntities": [
      "CashMovement",
      "DailyShift"
    ],
    "writesEntities": [
      "CashMovement"
    ],
    "readsTables": [],
    "writesTables": [],
    "usecaseRefs": [
      "recordOpeningCashMovement"
    ],
    "layerContract": {
      "controllerLayer": "layer_2_controllers",
      "mustCallLayer": "layer_3_usecases",
      "directTableAccessForbidden": true
    },
    "rulesApplied": []
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
      "_102020_/l2/agentMaterializeSolution/skills/genContract.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
