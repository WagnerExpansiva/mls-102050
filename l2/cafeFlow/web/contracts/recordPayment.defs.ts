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
        "sourceEntity": "Payment",
        "sourceField": "method",
        "required": true,
        "description": "Método de pagamento utilizado (ex.: dinheiro, cartão de crédito, PIX)."
      },
      {
        "name": "amount",
        "type": "number",
        "sourceEntity": "Payment",
        "sourceField": "amount",
        "required": true,
        "description": "Valor recebido/pago.",
        "sourceType": "money"
      },
      {
        "name": "status",
        "type": "string",
        "sourceEntity": "Payment",
        "sourceField": "status",
        "required": true,
        "enum": [
          "authorized",
          "captured",
          "voided",
          "refunded"
        ],
        "description": "Situação atual do pagamento no ciclo de vida."
      }
    ],
    "output": [
      {
        "name": "paymentId",
        "type": "string",
        "sourceEntity": "Payment",
        "sourceField": "paymentId",
        "description": "Identificador único do pagamento.",
        "sourceType": "uuid"
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
