/// <mls fileReference="_102050_/l4/cafeFlow/ontology/RecipeComponent.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityRecipeComponent = {
  "entityId": "RecipeComponent",
  "title": "Componente de Receita",
  "description": "Vínculo persistente entre MenuItem e InventoryItem, registrando o quanto de cada insumo é consumido por venda.",
  "ownership": "moduleOwned",
  "kind": "supporting",
  "fields": [
    {
      "fieldId": "recipeComponentId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do componente de receita"
    },
    {
      "fieldId": "menuItemId",
      "type": "uuid",
      "required": true,
      "description": "Referência ao item do menu ao qual este componente pertence"
    },
    {
      "fieldId": "inventoryItemId",
      "type": "uuid",
      "required": true,
      "description": "Referência ao item de inventário consumido na receita"
    },
    {
      "fieldId": "quantity",
      "type": "number",
      "required": true,
      "description": "Quantidade do insumo consumida por venda ou por unidade do item do menu"
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
    "inventoryAutoConsumptionByRecipeOnOrderCompletion"
  ]
} as const;

export default cafeFlowEntityRecipeComponent;
