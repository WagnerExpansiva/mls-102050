/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/closeDailyShift.defs.ts" enhancement="_blank"/>

export const definition = {
  "bffCommands": [
    {
      "commandName": "updateDailyShiftStatus",
      "purpose": "Update Daily Shift Status",
      "kind": "command",
      "input": [
        {
          "name": "dailyShiftId",
          "type": "string",
          "required": false
        },
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
          "name": "closedAt",
          "type": "date",
          "required": false
        },
        {
          "name": "openingCashBalance",
          "type": "number",
          "required": false
        },
        {
          "name": "closingCashBalance",
          "type": "number",
          "required": false
        },
        {
          "name": "totalSales",
          "type": "number",
          "required": false
        },
        {
          "name": "totalPayments",
          "type": "number",
          "required": false
        },
        {
          "name": "closingNotes",
          "type": "string",
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
          "name": "closedAt",
          "type": "date",
          "required": false
        },
        {
          "name": "openingCashBalance",
          "type": "number",
          "required": false
        },
        {
          "name": "closingCashBalance",
          "type": "number",
          "required": false
        },
        {
          "name": "totalSales",
          "type": "number",
          "required": false
        },
        {
          "name": "totalPayments",
          "type": "number",
          "required": false
        },
        {
          "name": "closingNotes",
          "type": "string",
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
  ],
  "navigationRefs": []
};

export const pipeline = [
  {
    "id": "closeDailyShift__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102050_/l2/cafeFlow/web/shared/closeDailyShift.ts",
    "defPath": "_102050_/l2/cafeFlow/web/shared/closeDailyShift.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/contracts/closeDailyShift.ts"
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
