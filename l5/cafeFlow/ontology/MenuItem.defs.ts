/// <mls fileReference="_102050_/l5/cafeFlow/ontology/MenuItem.defs.ts" enhancement="_blank"/>

export const MenuItemEntityDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "ontologyEntity",
  "artifactId": "MenuItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanEntityDefinition",
    "stepId": 40,
    "planId": ""
  },
  "data": {
    "entityDefinition": {
      "entityId": "MenuItem",
      "title": "Item do Cardápio",
      "description": "Item vendido no cardápio, com nome, categoria, preço, disponibilidade e vínculo com ingredientes em estoque.",
      "ownership": "mdmOwned",
      "kind": "product",
      "fields": [
        {
          "fieldId": "menuItemId",
          "type": "uuid",
          "required": true,
          "description": "Identificador único do item do cardápio."
        },
        {
          "fieldId": "name",
          "type": "string",
          "required": true,
          "description": "Nome do item do cardápio."
        },
        {
          "fieldId": "description",
          "type": "text",
          "required": false,
          "description": "Descrição do item do cardápio."
        },
        {
          "fieldId": "menuCategoryId",
          "type": "MenuCategory",
          "required": true,
          "description": "Categoria do cardápio à qual o item pertence."
        },
        {
          "fieldId": "price",
          "type": "money",
          "required": true,
          "description": "Preço de venda do item do cardápio."
        },
        {
          "fieldId": "isAvailable",
          "type": "boolean",
          "required": true,
          "description": "Indica se o item está disponível para venda."
        },
        {
          "fieldId": "status",
          "type": "string",
          "required": true,
          "description": "Status do item do cardápio.",
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
      "rulesApplied": [
        "ruleMenuItemPricePositive"
      ]
    }
  }
} as const;

export default MenuItemEntityDefinition;
