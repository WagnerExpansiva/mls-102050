/// <mls fileReference="_102050_/l4/cafeFlow/ontology/InventoryItem.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityInventoryItem = {
  "entityId": "InventoryItem",
  "title": "Item de Estoque (Ingrediente)",
  "description": "Ingrediente/insumo controlado em quantidade e unidade (ex.: café em grãos, leite, açúcar), com nível mínimo para alertas.",
  "ownership": "moduleOwned",
  "kind": "core",
  "fields": [
    {
      "fieldId": "inventoryItemId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do item de estoque"
    },
    {
      "fieldId": "name",
      "type": "string",
      "required": true,
      "description": "Nome do ingrediente ou insumo"
    },
    {
      "fieldId": "description",
      "type": "text",
      "required": false,
      "description": "Descrição detalhada do item"
    },
    {
      "fieldId": "unit",
      "type": "string",
      "required": true,
      "description": "Unidade de medida (ex.: kg, L, unidade, gramas)"
    },
    {
      "fieldId": "currentQuantity",
      "type": "number",
      "required": true,
      "description": "Quantidade atual disponível em estoque"
    },
    {
      "fieldId": "minimumLevel",
      "type": "number",
      "required": true,
      "description": "Nível mínimo para geração de alerta de baixo estoque"
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Estado do ciclo de vida do item",
      "enum": [
        "active",
        "inactive"
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
    "active",
    "inactive"
  ],
  "lifecycleStates": [
    "active",
    "inactive"
  ],
  "rulesApplied": [
    "inventoryLowStockThreshold",
    "ingredientConsumptionTrigger"
  ]
} as const;

export default cafeFlowEntityInventoryItem;
