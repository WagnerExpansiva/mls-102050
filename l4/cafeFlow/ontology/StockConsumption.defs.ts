/// <mls fileReference="_102050_/l4/cafeFlow/ontology/StockConsumption.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityStockConsumption = {
  "entityId": "StockConsumption",
  "title": "Consumo de Estoque",
  "description": "Evento de baixa de ingredientes decorrente de itens de pedido confirmados/preparados, para rastreabilidade simples. Estornos via evento compensatório vinculado ao mesmo OrderItem.",
  "ownership": "moduleOwned",
  "kind": "event",
  "fields": [
    {
      "fieldId": "id",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do evento de consumo de estoque."
    },
    {
      "fieldId": "inventoryItemId",
      "type": "InventoryItem",
      "required": true,
      "description": "Referência ao item de inventário afetado pela baixa."
    },
    {
      "fieldId": "orderItemId",
      "type": "OrderItem",
      "required": true,
      "description": "Referência ao item de pedido que gerou o consumo."
    },
    {
      "fieldId": "quantity",
      "type": "number",
      "required": true,
      "description": "Quantidade consumida do ingrediente."
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "enum": [
        "posted",
        "voided"
      ],
      "description": "Situação do evento de consumo (lançado ou estornado)."
    },
    {
      "fieldId": "consumedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora em que o consumo ocorreu."
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
    "posted",
    "voided"
  ],
  "rulesApplied": [
    "ingredientConsumptionTrigger"
  ]
} as const;

export default cafeFlowEntityStockConsumption;
