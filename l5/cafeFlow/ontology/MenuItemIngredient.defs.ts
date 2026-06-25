/// <mls fileReference="_102050_/l5/cafeFlow/ontology/MenuItemIngredient.defs.ts" enhancement="_blank"/>

export const MenuItemIngredientEntityDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "ontologyEntity",
  "artifactId": "MenuItemIngredient",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanEntityDefinition",
    "stepId": 41,
    "planId": ""
  },
  "data": {
    "entityDefinition": {
      "entityId": "MenuItemIngredient",
      "title": "Ingrediente do Item do Cardápio",
      "description": "Relação entre um item do cardápio e os insumos necessários para sua produção, com quantidade por unidade vendida.",
      "ownership": "moduleOwned",
      "kind": "composition",
      "fields": [
        {
          "fieldId": "menuItemIngredientId",
          "type": "uuid",
          "required": true,
          "description": "Identificador único do ingrediente do item do cardápio"
        },
        {
          "fieldId": "menuItemId",
          "type": "uuid",
          "required": true,
          "description": "Referência ao item do cardápio ao qual o ingrediente pertence"
        },
        {
          "fieldId": "stockItemId",
          "type": "uuid",
          "required": true,
          "description": "Referência ao item de estoque utilizado como insumo na produção"
        },
        {
          "fieldId": "quantity",
          "type": "number",
          "required": true,
          "description": "Quantidade necessária do insumo por unidade vendida do item do cardápio"
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
    }
  }
} as const;

export default MenuItemIngredientEntityDefinition;
