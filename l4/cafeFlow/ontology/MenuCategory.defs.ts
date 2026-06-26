/// <mls fileReference="_102050_/l4/cafeFlow/ontology/MenuCategory.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityMenuCategory = {
  "entityId": "MenuCategory",
  "title": "Categoria de Cardápio",
  "description": "Agrupamento de itens do cardápio para organização no POS e análises (ex.: Cafés, Salgados, Doces).",
  "ownership": "moduleOwned",
  "kind": "mdm",
  "fields": [
    {
      "fieldId": "menuCategoryId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único da categoria de cardápio"
    },
    {
      "fieldId": "name",
      "type": "string",
      "required": true,
      "description": "Nome da categoria exibido no POS e relatórios (ex.: Cafés, Salgados, Doces)"
    },
    {
      "fieldId": "description",
      "type": "text",
      "required": false,
      "description": "Descrição opcional da categoria para uso interno ou detalhamento"
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Estado do ciclo de vida da categoria",
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
  "rulesApplied": []
} as const;

export default cafeFlowEntityMenuCategory;
