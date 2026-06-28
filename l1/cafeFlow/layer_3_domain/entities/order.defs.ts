/// <mls fileReference="_102050_/l1/cafeFlow/layer_3_domain/entities/order.defs.ts" enhancement="_blank"/>

export const orderDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "Order",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "Order",
    "fields": [
      {
        "fieldId": "orderId",
        "type": "uuid",
        "required": true,
        "description": "Identificador único do pedido"
      },
      {
        "fieldId": "dailyShiftId",
        "type": "uuid",
        "required": true,
        "description": "Turno diário em que o pedido foi registrado"
      },
      {
        "fieldId": "tableId",
        "type": "uuid",
        "required": false,
        "description": "Referência à mesa associada (para pedidos do tipo mesa)"
      },
      {
        "fieldId": "kitchenTicketId",
        "type": "uuid",
        "required": false,
        "description": "Ticket de cozinha gerado para fila de preparo"
      },
      {
        "fieldId": "orderType",
        "type": "string",
        "required": true,
        "description": "Tipo do pedido: mesa ou takeout",
        "enum": [
          "mesa",
          "takeout"
        ]
      },
      {
        "fieldId": "status",
        "type": "string",
        "required": true,
        "description": "Status atual do pedido na coordenação com a cozinha",
        "enum": [
          "draft",
          "sentToKitchen",
          "inPreparation",
          "ready",
          "served",
          "closed",
          "cancelled"
        ]
      },
      {
        "fieldId": "totalAmount",
        "type": "money",
        "required": true,
        "description": "Valor total do pedido com preços no momento da venda"
      },
      {
        "fieldId": "notes",
        "type": "text",
        "required": false,
        "description": "Observações gerais do pedido"
      },
      {
        "fieldId": "customerName",
        "type": "string",
        "required": false,
        "description": "Nome do cliente para identificação do pedido"
      },
      {
        "fieldId": "customerPhone",
        "type": "string",
        "required": false,
        "description": "Telefone de contato do cliente"
      },
      {
        "fieldId": "numberOfGuests",
        "type": "number",
        "required": false,
        "description": "Número de pessoas na mesa"
      },
      {
        "fieldId": "closedAt",
        "type": "datetime",
        "required": false,
        "description": "Data e hora do fechamento do pedido"
      },
      {
        "fieldId": "cancelledAt",
        "type": "datetime",
        "required": false,
        "description": "Data e hora do cancelamento do pedido"
      },
      {
        "fieldId": "cancellationReason",
        "type": "text",
        "required": false,
        "description": "Motivo do cancelamento"
      },
      {
        "fieldId": "createdAt",
        "type": "datetime",
        "required": true,
        "description": "Data e hora de criação do registro"
      },
      {
        "fieldId": "updatedAt",
        "type": "datetime",
        "required": true,
        "description": "Data e hora da última atualização do registro"
      }
    ],
    "statusEnum": [
      "draft",
      "sentToKitchen",
      "inPreparation",
      "ready",
      "served",
      "closed",
      "cancelled"
    ],
    "invariants": [
      "totalAmount must equal the sum of all OrderItem.totalPrice",
      "when orderType is 'mesa', tableId is required",
      "when orderType is 'takeout', tableId must be null",
      "status transitions: draft -> sentToKitchen -> inPreparation -> ready -> served -> closed; draft or any pre-closed state -> cancelled allowed",
      "when status is 'closed', closedAt must be set",
      "when status is 'cancelled', cancelledAt and cancellationReason must be set",
      "cannot add or modify OrderItems after status is sentToKitchen",
      "OrderItem.quantity must be > 0",
      "OrderItem.totalPrice must equal OrderItem.quantity * OrderItem.unitPrice",
      "OrderItem.status transitions: new -> sentToKitchen -> inPreparation -> ready -> served; any pre-served -> cancelled",
      "KitchenTicket.status transitions: open -> inProgress -> done; open or inProgress -> void",
      "at least one OrderItem is required before sending to kitchen"
    ],
    "valueObjects": [
      {
        "name": "OrderItem",
        "fields": [
          {
            "fieldId": "id",
            "type": "uuid",
            "required": true,
            "description": "Identificador único do item do pedido"
          },
          {
            "fieldId": "orderId",
            "type": "uuid",
            "required": true,
            "description": "Referência ao pedido (Order) ao qual este item pertence"
          },
          {
            "fieldId": "menuItemId",
            "type": "uuid",
            "required": true,
            "description": "Referência ao item do cardápio (MenuItem) solicitado"
          },
          {
            "fieldId": "kitchenTicketId",
            "type": "uuid",
            "required": false,
            "description": "Referência ao ticket de cozinha (KitchenTicket) quando o item exige preparo"
          },
          {
            "fieldId": "quantity",
            "type": "number",
            "required": true,
            "description": "Quantidade solicitada do item"
          },
          {
            "fieldId": "unitPrice",
            "type": "money",
            "required": true,
            "description": "Preço unitário do item no momento do pedido"
          },
          {
            "fieldId": "totalPrice",
            "type": "money",
            "required": true,
            "description": "Preço total do item (quantidade × preço unitário)"
          },
          {
            "fieldId": "observations",
            "type": "text",
            "required": false,
            "description": "Observações ou instruções especiais para o item"
          },
          {
            "fieldId": "status",
            "type": "string",
            "required": true,
            "description": "Status de produção/atendimento do item",
            "enum": [
              "new",
              "sentToKitchen",
              "inPreparation",
              "ready",
              "served",
              "cancelled"
            ]
          },
          {
            "fieldId": "createdAt",
            "type": "datetime",
            "required": true,
            "description": "Data e hora de criação do registro"
          },
          {
            "fieldId": "updatedAt",
            "type": "datetime",
            "required": true,
            "description": "Data e hora da última atualização do registro"
          }
        ],
        "collection": true
      },
      {
        "name": "KitchenTicket",
        "fields": [
          {
            "fieldId": "kitchenTicketId",
            "type": "uuid",
            "required": true,
            "description": "Identificador único do ticket de cozinha"
          },
          {
            "fieldId": "orderId",
            "type": "uuid",
            "required": true,
            "description": "Referência ao pedido que gerou este ticket para a fila de preparo"
          },
          {
            "fieldId": "status",
            "type": "string",
            "required": true,
            "description": "Status atual do ticket na fila de preparo da cozinha",
            "enum": [
              "open",
              "inProgress",
              "done",
              "void"
            ]
          },
          {
            "fieldId": "createdAt",
            "type": "datetime",
            "required": true,
            "description": "Data e hora de criação do ticket"
          },
          {
            "fieldId": "updatedAt",
            "type": "datetime",
            "required": true,
            "description": "Data e hora da última atualização do ticket"
          }
        ],
        "collection": true
      }
    ]
  }
} as const;

export default orderDomainEntity;

export const pipeline = [
  {
    "id": "order__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102050_/l1/cafeFlow/layer_3_domain/entities/order.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_3_domain/entities/order.defs.ts",
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
