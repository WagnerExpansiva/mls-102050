/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/kitchenProductionFlow.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "viewKitchenTickets",
    "purpose": "Consultar tickets da cozinha",
    "kind": "query",
    "input": [
      {
        "name": "kitchenTicketId",
        "type": "string",
        "required": false,
        "description": "Identificador único do ticket de cozinha"
      },
      {
        "name": "orderId",
        "type": "string",
        "required": false,
        "description": "Referência ao pedido que gerou este ticket para a fila de preparo"
      },
      {
        "name": "status",
        "type": "string",
        "required": false,
        "enum": [
          "open",
          "inProgress",
          "done",
          "void"
        ],
        "description": "Status atual do ticket na fila de preparo da cozinha"
      },
      {
        "name": "createdAt",
        "type": "date",
        "required": false,
        "description": "Data e hora de criação do ticket"
      },
      {
        "name": "updatedAt",
        "type": "date",
        "required": false,
        "description": "Data e hora da última atualização do ticket"
      }
    ],
    "output": [
      {
        "name": "kitchenTicketId",
        "type": "string",
        "description": "Identificador único do ticket de cozinha"
      },
      {
        "name": "orderId",
        "type": "string",
        "description": "Referência ao pedido que gerou este ticket para a fila de preparo"
      },
      {
        "name": "status",
        "type": "string",
        "enum": [
          "open",
          "inProgress",
          "done",
          "void"
        ],
        "description": "Status atual do ticket na fila de preparo da cozinha"
      },
      {
        "name": "createdAt",
        "type": "date",
        "description": "Data e hora de criação do ticket"
      },
      {
        "name": "updatedAt",
        "type": "date",
        "description": "Data e hora da última atualização do ticket"
      }
    ]
  },
  {
    "commandName": "updateKitchenTicketStatus",
    "purpose": "Atualizar status do ticket de cozinha",
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
    "commandName": "updateOrderItemStatus",
    "purpose": "Atualizar status de item do pedido",
    "kind": "command",
    "input": [
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
  }
];

export const pipeline = [
  {
    "id": "kitchenProductionFlow__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102050_/l2/cafeFlow/web/contracts/kitchenProductionFlow.ts",
    "defPath": "_102050_/l2/cafeFlow/web/contracts/kitchenProductionFlow.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
