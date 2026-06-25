/// <mls fileReference="_102050_/l5/cafeFlow/ontology/Order.defs.ts" enhancement="_blank"/>

export const OrderEntityDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "ontologyEntity",
  "artifactId": "Order",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanEntityDefinition",
    "stepId": 42,
    "planId": ""
  },
  "data": {
    "entityDefinition": {
      "entityId": "Order",
      "title": "Pedido",
      "description": "Compromisso de venda central do domínio, contendo itens do cardápio, identificação de mesa ou takeout e ciclo de status.",
      "ownership": "mdmOwned",
      "kind": "transaction",
      "fields": [
        {
          "fieldId": "orderId",
          "type": "uuid",
          "required": true,
          "description": "Identificador único do pedido."
        },
        {
          "fieldId": "dailyShiftId",
          "type": "DailyShift",
          "required": true,
          "description": "Referência ao turno diário ao qual o pedido pertence."
        },
        {
          "fieldId": "status",
          "type": "string",
          "required": true,
          "description": "Status atual do pedido no fluxo operacional.",
          "enum": [
            "received",
            "preparing",
            "ready",
            "delivered",
            "cancelled"
          ]
        },
        {
          "fieldId": "tableIdentifier",
          "type": "string",
          "required": false,
          "description": "Identificação da mesa quando o pedido é para consumo no local."
        },
        {
          "fieldId": "isTakeout",
          "type": "boolean",
          "required": true,
          "description": "Indica se o pedido é para retirada (takeout)."
        },
        {
          "fieldId": "createdAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora de criação do pedido."
        },
        {
          "fieldId": "updatedAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora da última atualização do pedido."
        }
      ],
      "statusEnum": [
        "received",
        "preparing",
        "ready",
        "delivered",
        "cancelled"
      ],
      "lifecycleStates": [
        "received",
        "preparing",
        "ready",
        "delivered",
        "cancelled"
      ],
      "rulesApplied": [
        "ruleOrderRequiresOpenShift",
        "ruleOrderStatusFlow",
        "ruleStockDeductionOnOrderPreparation"
      ]
    }
  }
} as const;

export default OrderEntityDefinition;
