/// <mls fileReference="_102050_/l4/cafeFlow/ontology/Payment.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityPayment = {
  "entityId": "Payment",
  "title": "Pagamento/Recebimento",
  "description": "Registro de recebimento associado a um pedido e/ou turno, com método e valor, para conciliação no fechamento.",
  "ownership": "horizontalOwned",
  "kind": "core",
  "fields": [
    {
      "fieldId": "paymentId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do pagamento."
    },
    {
      "fieldId": "orderId",
      "type": "Order",
      "required": false,
      "description": "Referência ao pedido associado ao pagamento, quando aplicável."
    },
    {
      "fieldId": "dailyShiftId",
      "type": "DailyShift",
      "required": false,
      "description": "Referência ao turno diário de fechamento ao qual o pagamento será consolidado."
    },
    {
      "fieldId": "method",
      "type": "string",
      "required": true,
      "description": "Método de pagamento utilizado (ex.: dinheiro, cartão de crédito, PIX)."
    },
    {
      "fieldId": "amount",
      "type": "money",
      "required": true,
      "description": "Valor recebido/pago."
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "enum": [
        "authorized",
        "captured",
        "voided",
        "refunded"
      ],
      "description": "Situação atual do pagamento no ciclo de vida."
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de criação do registro."
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização do registro."
    }
  ],
  "statusEnum": [
    "authorized",
    "captured",
    "voided",
    "refunded"
  ],
  "rulesApplied": [
    "paymentTimingByOrderType"
  ]
} as const;

export default cafeFlowEntityPayment;
