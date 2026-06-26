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
        "required": false
      }
    ],
    "output": [
      {
        "name": "dailyShiftId",
        "type": "string"
      },
      {
        "name": "shiftDate",
        "type": "date"
      },
      {
        "name": "status",
        "type": "string"
      },
      {
        "name": "openedAt",
        "type": "date"
      },
      {
        "name": "closedAt",
        "type": "date"
      },
      {
        "name": "openingCashBalance",
        "type": "number"
      },
      {
        "name": "closingCashBalance",
        "type": "number"
      },
      {
        "name": "totalSales",
        "type": "number"
      }
    ],
    "readsEntities": [
      "DailyShift",
      "Payment",
      "CashMovement",
      "Order",
      "OrderItem"
    ],
    "writesEntities": [],
    "readsTables": [],
    "writesTables": [],
    "usecaseRefs": [
      "generateShiftCloseReport"
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
    "id": "generateShiftCloseReport__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102050_/l2/cafeFlow/web/contracts/generateShiftCloseReport.ts",
    "defPath": "_102050_/l2/cafeFlow/web/contracts/generateShiftCloseReport.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentMaterializeSolution/skills/genContract.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
