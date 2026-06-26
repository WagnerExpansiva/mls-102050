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
