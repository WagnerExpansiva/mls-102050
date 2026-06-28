/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/takeoutOrderLifecycle.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "createOrder",
    "purpose": "Criar pedido",
    "kind": "command",
    "input": [
      {
        "name": "orderType",
        "type": "string",
        "required": true,
        "enum": [
          "mesa",
          "takeout"
        ],
        "description": "Tipo do pedido: mesa ou takeout"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "draft",
          "sentToKitchen",
          "inPreparation",
          "ready",
          "served",
          "closed",
          "cancelled"
        ],
        "description": "Status atual do pedido na coordenação com a cozinha"
      },
      {
        "name": "totalAmount",
        "type": "number",
        "required": true,
        "description": "Valor total do pedido com preços no momento da venda"
      },
      {
        "name": "notes",
        "type": "string",
        "required": false,
        "description": "Observações gerais do pedido"
      },
      {
        "name": "customerName",
        "type": "string",
        "required": false,
        "description": "Nome do cliente para identificação do pedido"
      },
      {
        "name": "customerPhone",
        "type": "string",
        "required": false,
        "description": "Telefone de contato do cliente"
      },
      {
        "name": "numberOfGuests",
        "type": "number",
        "required": false,
        "description": "Número de pessoas na mesa"
      },
      {
        "name": "closedAt",
        "type": "date",
        "required": false,
        "description": "Data e hora do fechamento do pedido"
      },
      {
        "name": "cancelledAt",
        "type": "date",
        "required": false,
        "description": "Data e hora do cancelamento do pedido"
      },
      {
        "name": "cancellationReason",
        "type": "string",
        "required": false,
        "description": "Motivo do cancelamento"
      }
    ],
    "output": [
      {
        "name": "orderId",
        "type": "string",
        "description": "Identificador único do pedido"
      }
    ]
  },
  {
    "commandName": "addOrderItem",
    "purpose": "Adicionar item ao pedido",
    "kind": "command",
    "input": [
      {
        "name": "quantity",
        "type": "number",
        "required": true,
        "description": "Quantidade solicitada do item"
      },
      {
        "name": "unitPrice",
        "type": "number",
        "required": true,
        "description": "Preço unitário do item no momento do pedido"
      },
      {
        "name": "totalPrice",
        "type": "number",
        "required": true,
        "description": "Preço total do item (quantidade × preço unitário)"
      },
      {
        "name": "observations",
        "type": "string",
        "required": false,
        "description": "Observações ou instruções especiais para o item"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "new",
          "sentToKitchen",
          "inPreparation",
          "ready",
          "served",
          "cancelled"
        ],
        "description": "Status de produção/atendimento do item"
      }
    ],
    "output": [
      {
        "name": "id",
        "type": "string",
        "description": "Identificador único do item do pedido"
      }
    ]
  },
  {
    "commandName": "createKitchenTicket",
    "purpose": "Criar ticket de cozinha",
    "kind": "command",
    "input": [
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "open",
          "inProgress",
          "done",
          "void"
        ],
        "description": "Status atual do ticket na fila de preparo da cozinha"
      }
    ],
    "output": [
      {
        "name": "kitchenTicketId",
        "type": "string",
        "description": "Identificador único do ticket de cozinha"
      }
    ]
  },
  {
    "commandName": "updateOrderStatus",
    "purpose": "Atualizar status do pedido",
    "kind": "command",
    "input": [
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "draft",
          "sentToKitchen",
          "inPreparation",
          "ready",
          "served",
          "closed",
          "cancelled"
        ],
        "description": "Status atual do pedido na coordenação com a cozinha"
      },
      {
        "name": "closedAt",
        "type": "date",
        "required": false,
        "description": "Data e hora do fechamento do pedido"
      },
      {
        "name": "cancelledAt",
        "type": "date",
        "required": false,
        "description": "Data e hora do cancelamento do pedido"
      },
      {
        "name": "cancellationReason",
        "type": "string",
        "required": false,
        "description": "Motivo do cancelamento"
      }
    ],
    "output": [
      {
        "name": "orderId",
        "type": "string",
        "description": "Identificador único do pedido"
      }
    ]
  }
];

export const pipeline = [
  {
    "id": "takeoutOrderLifecycle__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102050_/l2/cafeFlow/web/contracts/takeoutOrderLifecycle.ts",
    "defPath": "_102050_/l2/cafeFlow/web/contracts/takeoutOrderLifecycle.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
