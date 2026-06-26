/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/recordPayment.defs.ts" enhancement="_blank"/>

export const definition = [
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
];

export const pipeline = [
  {
    "id": "recordPayment__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102050_/l2/cafeFlow/web/contracts/recordPayment.ts",
    "defPath": "_102050_/l2/cafeFlow/web/contracts/recordPayment.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentMaterializeSolution/skills/genContract.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
