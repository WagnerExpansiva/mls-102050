/// <mls fileReference="_102050_/l4/cafeFlow/ontology/MenuCategory.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityMenuCategory = {
  "entityId": "MenuCategory",
  "title": "Categoria de Cardápio",
  "description": "Classificação para agrupar e filtrar itens do cardápio (ex.: cafés, salgados, doces).",
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
      "description": "Nome da categoria (ex.: Cafés, Salgados, Doces)"
    },
    {
      "fieldId": "description",
      "type": "text",
      "required": false,
      "description": "Descrição opcional da categoria"
    },
    {
      "fieldId": "sortOrder",
      "type": "number",
      "required": false,
      "description": "Ordem de exibição da categoria no cardápio"
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Estado atual da categoria no ciclo de vida",
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
