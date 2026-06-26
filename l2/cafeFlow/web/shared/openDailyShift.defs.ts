/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/openDailyShift.defs.ts" enhancement="_blank"/>

export const definition = {
  "bffCommands": [
    {
      "commandName": "createDailyShift",
      "purpose": "Criar turno diário",
      "kind": "command",
      "input": [
        {
          "name": "shiftDate",
          "type": "date",
          "required": true
        },
        {
          "name": "status",
          "type": "string",
          "required": true
        },
        {
          "name": "openedAt",
          "type": "date",
          "required": true
        },
        {
          "name": "openingCashBalance",
          "type": "number",
          "required": false
        }
      ],
      "output": [
        {
          "name": "dailyShiftId",
          "type": "string"
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
          "required": true
        },
        {
          "name": "amount",
          "type": "number",
          "required": true
        },
        {
          "name": "reason",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "cashMovementId",
          "type": "string"
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
  ],
  "navigationRefs": []
};

export const pipeline = [
  {
    "id": "openDailyShift__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102050_/l2/cafeFlow/web/shared/openDailyShift.ts",
    "defPath": "_102050_/l2/cafeFlow/web/shared/openDailyShift.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/contracts/openDailyShift.ts"
    ],
    "dependsOn": [],
    "skills": [
      "/_102020_/l2/agentMaterializeSolution/skills/genPageShared.ts"
    ],
    "rulesApplied": [
      "paymentTimingByOrderType",
      "aiOutputLanguageSelection"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
