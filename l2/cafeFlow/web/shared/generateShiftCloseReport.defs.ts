/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/generateShiftCloseReport.defs.ts" enhancement="_blank"/>

export const definition = {
  "bffCommands": [
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
  ],
  "navigationRefs": []
};

export const pipeline = [
  {
    "id": "generateShiftCloseReport__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102050_/l2/cafeFlow/web/shared/generateShiftCloseReport.ts",
    "defPath": "_102050_/l2/cafeFlow/web/shared/generateShiftCloseReport.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/contracts/generateShiftCloseReport.ts"
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
