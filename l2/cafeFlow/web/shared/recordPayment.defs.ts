/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/recordPayment.defs.ts" enhancement="_blank"/>

export const definition = {
  "bffCommands": [
    {
      "commandName": "recordPayment",
      "purpose": "Registrar pagamento/recebimento",
      "kind": "command",
      "input": [
        {
          "name": "method",
          "type": "string",
          "required": true
        },
        {
          "name": "amount",
          "type": "number",
          "required": true
        },
        {
          "name": "status",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "paymentId",
          "type": "string"
        }
      ],
      "readsEntities": [
        "Payment",
        "Order",
        "DailyShift"
      ],
      "writesEntities": [
        "Payment"
      ],
      "readsTables": [],
      "writesTables": [],
      "usecaseRefs": [
        "recordPayment"
      ],
      "layerContract": {
        "controllerLayer": "layer_2_controllers",
        "mustCallLayer": "layer_3_usecases",
        "directTableAccessForbidden": true
      },
      "rulesApplied": [
        "paymentTimingByOrderType"
      ]
    }
  ],
  "navigationRefs": []
};

export const pipeline = [
  {
    "id": "recordPayment__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102050_/l2/cafeFlow/web/shared/recordPayment.ts",
    "defPath": "_102050_/l2/cafeFlow/web/shared/recordPayment.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/contracts/recordPayment.ts"
    ],
    "dependsOn": [],
    "skills": [
      "/_102020_/l2/agentMaterializeSolution/skills/genPageShared.ts"
    ],
    "rulesApplied": [
      "paymentTimingByOrderType"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
