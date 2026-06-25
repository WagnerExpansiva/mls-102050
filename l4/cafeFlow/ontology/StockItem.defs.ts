/// <mls fileReference="_102050_/l4/cafeFlow/ontology/StockItem.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityStockItem = {
  "entityId": "StockItem",
  "title": "Item de Estoque",
  "description": "Insumo/ingrediente controlado em quantidade e unidade (ex.: café em gramas, leite em litros), com nível mínimo e status para alertas e consumo por receitas.",
  "ownership": "moduleOwned",
  "kind": "core",
  "fields": [
    {
      "fieldId": "stockItemId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do item de estoque."
    },
    {
      "fieldId": "name",
      "type": "string",
      "required": true,
      "description": "Nome do insumo/ingrediente (ex.: café, leite)."
    },
    {
      "fieldId": "description",
      "type": "text",
      "required": false,
      "description": "Descrição detalhada do item de estoque."
    },
    {
      "fieldId": "unit",
      "type": "string",
      "required": true,
      "description": "Unidade de medida do item (ex.: gramas, litros, unidades)."
    },
    {
      "fieldId": "currentQuantity",
      "type": "number",
      "required": true,
      "description": "Quantidade atual disponível em estoque."
    },
    {
      "fieldId": "minimumLevel",
      "type": "number",
      "required": true,
      "description": "Nível mínimo de estoque para geração de alertas de reposição."
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Situação do item de estoque no ciclo de vida.",
      "enum": [
        "active",
        "inactive"
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
    "active",
    "inactive"
  ],
  "lifecycleStates": [
    "active",
    "inactive"
  ],
  "rulesApplied": [
    "inventoryConsumptionTiming",
    "lowStockThresholdRule"
  ]
} as const;

export default cafeFlowEntityStockItem;
