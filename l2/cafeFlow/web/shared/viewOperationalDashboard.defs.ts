/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/viewOperationalDashboard.defs.ts" enhancement="_blank"/>

export const definition = {
  "bffCommands": [
    {
      "commandName": "viewOperationalDashboard",
      "purpose": "Ver dashboard operacional do dia",
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
        "Order",
        "Payment",
        "CashMovement"
      ],
      "writesEntities": [],
      "readsTables": [],
      "writesTables": [],
      "usecaseRefs": [
        "viewOperationalDashboard"
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
    "id": "viewOperationalDashboard__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102050_/l2/cafeFlow/web/shared/viewOperationalDashboard.ts",
    "defPath": "_102050_/l2/cafeFlow/web/shared/viewOperationalDashboard.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/contracts/viewOperationalDashboard.ts"
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
