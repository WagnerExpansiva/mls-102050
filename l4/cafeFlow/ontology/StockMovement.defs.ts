/// <mls fileReference="_102050_/l4/cafeFlow/ontology/StockMovement.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityStockMovement = {
  "entityId": "StockMovement",
  "title": "Movimentação de Estoque",
  "description": "Registro de entrada/saída/ajuste de InventoryItem. Pode ser estornado mantendo rastreabilidade.",
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
      "fieldId": "inventoryItemId",
      "type": "uuid",
      "required": true,
      "description": "Referência ao item de inventário cujo saldo foi alterado"
    },
    {
      "fieldId": "orderId",
      "type": "uuid",
      "required": false,
      "description": "Referência ao pedido que gerou a movimentação, quando aplicável"
    },
    {
      "fieldId": "type",
      "type": "string",
      "required": true,
      "description": "Tipo da movimentação: entrada, saída, ajuste ou estorno",
      "enum": [
        "entrada",
        "saida",
        "ajuste",
        "estorno"
      ]
    },
    {
      "fieldId": "quantity",
      "type": "number",
      "required": true,
      "description": "Quantidade movimentada (valor positivo; direção definida pelo tipo)"
    },
    {
      "fieldId": "unitCost",
      "type": "money",
      "required": false,
      "description": "Custo unitário do item no momento da movimentação"
    },
    {
      "fieldId": "notes",
      "type": "text",
      "required": false,
      "description": "Observações adicionais sobre a movimentação"
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Situação do registro contábil da movimentação",
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
  "rulesApplied": [
    "inventoryAutoConsumptionByRecipeOnOrderCompletion",
    "orderCancellationStockHandling"
  ]
} as const;

export default cafeFlowEntityStockMovement;
