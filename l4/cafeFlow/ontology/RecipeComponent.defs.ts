/// <mls fileReference="_102050_/l4/cafeFlow/ontology/RecipeComponent.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityRecipeComponent = {
  "entityId": "RecipeComponent",
  "title": "Componente de Receita",
  "description": "Ligação entre MenuItem e InventoryItem com quantidade consumida por unidade vendida (BOM simplificada). Entidade sem estado próprio; alterações são controladas via edição do MenuItem.",
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
      "description": "Referência ao item de menu ao qual este componente pertence"
    },
    {
      "fieldId": "inventoryItemId",
      "type": "uuid",
      "required": true,
      "description": "Referência ao item de inventário utilizado como ingrediente"
    },
    {
      "fieldId": "quantity",
      "type": "number",
      "required": true,
      "description": "Quantidade consumida do item de inventário por unidade vendida do menu item"
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
  "rulesApplied": []
} as const;

export default cafeFlowEntityRecipeComponent;
