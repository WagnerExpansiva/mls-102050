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
        "required": true,
        "description": "Método de pagamento utilizado (ex.: dinheiro, cartão de crédito, PIX)."
      },
      {
        "name": "amount",
        "type": "number",
        "required": true,
        "description": "Valor recebido/pago."
      },
      {
        "name": "status",
        "type": "string",
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
        "description": "Identificador único do pagamento."
      }
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
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
