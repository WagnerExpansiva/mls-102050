/// <mls fileReference="_102050_/l5/cafeFlow/ontology/MenuCategory.defs.ts" enhancement="_blank"/>

export const MenuCategoryEntityDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "ontologyEntity",
  "artifactId": "MenuCategory",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanEntityDefinition",
    "stepId": 39,
    "planId": ""
  },
  "data": {
    "entityDefinition": {
      "entityId": "MenuCategory",
      "title": "Categoria do Cardápio",
      "description": "Agrupamento de itens do cardápio, como bebidas, salgados ou doces, usado para organizar o POS e a gestão.",
      "ownership": "mdmOwned",
      "kind": "category",
      "fields": [
        {
          "fieldId": "menuCategoryId",
          "type": "uuid",
          "required": true,
          "description": "Identificador único da categoria do cardápio."
        },
        {
          "fieldId": "name",
          "type": "string",
          "required": true,
          "description": "Nome da categoria exibido no cardápio e no POS."
        },
        {
          "fieldId": "description",
          "type": "text",
          "required": false,
          "description": "Descrição adicional da categoria para uso interno."
        },
        {
          "fieldId": "sortOrder",
          "type": "number",
          "required": false,
          "description": "Ordem de exibição da categoria no cardápio."
        },
        {
          "fieldId": "isActive",
          "type": "boolean",
          "required": true,
          "description": "Indica se a categoria está ativa para exibição e venda."
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
      "rulesApplied": []
    }
  }
} as const;

export default MenuCategoryEntityDefinition;
