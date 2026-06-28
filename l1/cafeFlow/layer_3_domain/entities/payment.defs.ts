/// <mls fileReference="_102050_/l1/cafeFlow/layer_3_domain/entities/payment.defs.ts" enhancement="_blank"/>

export const paymentDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "Payment",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "Payment",
    "fields": [
      {
        "fieldId": "paymentId",
        "type": "uuid",
        "required": true,
        "description": "Identificador único do pagamento."
      },
      {
        "fieldId": "orderId",
        "type": "uuid",
        "required": false,
        "description": "Referência ao pedido associado ao pagamento, quando aplicável."
      },
      {
        "fieldId": "dailyShiftId",
        "type": "uuid",
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
        "description": "Situação atual do pagamento no ciclo de vida.",
        "enum": [
          "authorized",
          "captured",
          "voided",
          "refunded"
        ]
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
    "invariants": [
      "amount must be > 0",
      "method must not be empty or whitespace",
      "status transitions: authorized -> captured; authorized -> voided; captured -> refunded",
      "cannot void a payment that is already captured (must refund instead)",
      "cannot refund a payment that is not captured",
      "dailyShiftId must reference an open DailyShift when payment is captured",
      "sum of all Payment.amount for an Order must not exceed Order.totalAmount"
    ],
    "valueObjects": []
  }
} as const;

export default paymentDomainEntity;

export const pipeline = [
  {
    "id": "payment__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102050_/l1/cafeFlow/layer_3_domain/entities/payment.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_3_domain/entities/payment.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/domainEntity.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
