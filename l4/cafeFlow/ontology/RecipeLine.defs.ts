/// <mls fileReference="_102050_/l4/cafeFlow/ontology/RecipeLine.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityRecipeLine = {
  "entityId": "RecipeLine",
  "title": "Linha de Receita",
  "description": "Relação entre MenuItem e StockItem com quantidade/unidade consumida por item vendido (bill of materials simplificada).",
  "ownership": "moduleOwned",
  "kind": "supporting",
  "fields": [
    {
      "fieldId": "recipeLineId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único da linha de receita"
    },
    {
      "fieldId": "menuItemId",
      "type": "uuid",
      "required": true,
      "description": "Referência ao item do cardápio ao qual esta linha de receita pertence"
    },
    {
      "fieldId": "stockItemId",
      "type": "uuid",
      "required": true,
      "description": "Referência ao insumo de estoque consumido nesta linha de receita"
    },
    {
      "fieldId": "quantity",
      "type": "number",
      "required": true,
      "description": "Quantidade do insumo consumida por unidade do item do cardápio vendido"
    },
    {
      "fieldId": "unit",
      "type": "string",
      "required": true,
      "description": "Unidade de medida da quantidade consumida (ex: grama, ml, unidade)"
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
  "rulesApplied": [
    "inventoryConsumptionTiming"
  ]
} as const;

export default cafeFlowEntityRecipeLine;
