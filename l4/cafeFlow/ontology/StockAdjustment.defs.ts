/// <mls fileReference="_102050_/l4/cafeFlow/ontology/StockAdjustment.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityStockAdjustment = {
  "entityId": "StockAdjustment",
  "title": "Ajuste de Estoque",
  "description": "Evento de ajuste manual de quantidade de um ingrediente (correção, perda, inventário parcial). Evento append-only; reversões por ajuste compensatório.",
  "ownership": "moduleOwned",
  "kind": "event",
  "fields": [
    {
      "fieldId": "stockAdjustmentId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do ajuste de estoque"
    },
    {
      "fieldId": "inventoryItemId",
      "type": "uuid",
      "required": true,
      "description": "Referência ao item de inventário afetado pelo ajuste"
    },
    {
      "fieldId": "dailyShiftId",
      "type": "uuid",
      "required": false,
      "description": "Referência ao turno diário em que o ajuste foi registrado para rastreabilidade operacional"
    },
    {
      "fieldId": "quantity",
      "type": "number",
      "required": true,
      "description": "Quantidade ajustada (positiva para entrada, negativa para saída)"
    },
    {
      "fieldId": "reason",
      "type": "text",
      "required": true,
      "description": "Motivo do ajuste (ex: correção, perda, inventário parcial)"
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Status do evento de ajuste",
      "enum": [
        "posted",
        "voided"
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
    "posted",
    "voided"
  ],
  "lifecycleStates": [
    "posted",
    "voided"
  ],
  "rulesApplied": []
} as const;

export default cafeFlowEntityStockAdjustment;
