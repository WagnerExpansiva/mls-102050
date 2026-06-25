/// <mls fileReference="_102050_/l4/cafeFlow/ontology/MenuCategory.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityMenuCategory = {
  "entityId": "MenuCategory",
  "title": "Categoria de Cardápio",
  "description": "Classificação dos itens do cardápio (ex.: bebidas, salgados) para organização e relatórios simples.",
  "ownership": "mdmOwned",
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
      "description": "Nome da categoria (ex.: Bebidas, Salgados)"
    },
    {
      "fieldId": "description",
      "type": "text",
      "required": false,
      "description": "Descrição detalhada da categoria"
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
      "description": "Situação da categoria no ciclo de vida",
      "enum": [
        "ACTIVE",
        "INACTIVE"
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
    "ACTIVE",
    "INACTIVE"
  ],
  "lifecycleStates": [
    "ACTIVE",
    "INACTIVE"
  ],
  "rulesApplied": []
} as const;

export default cafeFlowEntityMenuCategory;
