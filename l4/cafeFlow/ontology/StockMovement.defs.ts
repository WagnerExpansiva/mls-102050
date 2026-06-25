/// <mls fileReference="_102050_/l4/cafeFlow/ontology/StockMovement.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityStockMovement = {
  "entityId": "StockMovement",
  "title": "Movimentação de Estoque",
  "description": "Evento de alteração de estoque (baixa por venda, ajuste, recebimento) com motivo, quantidade e referência opcional ao pedido/turno.",
  "ownership": "moduleOwned",
  "kind": "event",
  "fields": [
    {
      "fieldId": "stockMovementId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único da movimentação de estoque"
    },
    {
      "fieldId": "stockItemId",
      "type": "uuid",
      "required": true,
      "description": "Referência ao item de estoque afetado pela movimentação"
    },
    {
      "fieldId": "orderId",
      "type": "uuid",
      "required": false,
      "description": "Referência opcional ao pedido de origem da movimentação"
    },
    {
      "fieldId": "movementType",
      "type": "string",
      "required": true,
      "description": "Tipo de movimentação de estoque",
      "enum": [
        "venda",
        "ajuste",
        "recebimento"
      ]
    },
    {
      "fieldId": "quantity",
      "type": "number",
      "required": true,
      "description": "Quantidade movimentada no evento"
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Estado atual do ciclo de vida da movimentação",
      "enum": [
        "pending",
        "posted",
        "reversed"
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
  "statusEnum": [
    "pending",
    "posted",
    "reversed"
  ],
  "lifecycleStates": [
    "pending",
    "posted",
    "reversed"
  ],
  "rulesApplied": [
    "inventoryConsumptionTiming"
  ]
} as const;

export default cafeFlowEntityStockMovement;
