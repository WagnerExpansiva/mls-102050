/// <mls fileReference="_102050_/l1/cafeFlow/layer_4_entities/menuItem.defs.ts" enhancement="_blank"/>

export const entity = {
  "entityId": "menuItem",
  "title": "Cardápio",
  "purpose": "Gerenciar itens e categorias do cardápio e seus ingredientes.",
  "layer": "layer_4_entities",
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
  "ontologyEntities": [
    "MenuItem",
    "MenuCategory",
    "MenuItemIngredient"
  ],
  "sourceTables": [
    {
      "tableName": "menu_item",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "menu_category",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "menu_item_ingredient",
      "ownership": "moduleOwned"
    }
  ],
  "storage": [
    {
      "kind": "mdm",
      "moduleRef": "102034",
      "entity": "MenuItem",
      "domainId": "menu",
      "sourceOfTruth": "102034",
      "governanceRules": [
        "ruleMenuItemPricePositive"
      ]
    },
    {
      "kind": "mdm",
      "moduleRef": "102034",
      "entity": "MenuCategory",
      "domainId": "menu",
      "sourceOfTruth": "102034",
      "governanceRules": [
        "ruleMenuItemPricePositive"
      ]
    },
    {
      "kind": "moduleTable",
      "tableId": "menuItemIngredient",
      "tableName": "menu_item_ingredient",
      "fileRef": "_102050_/l1/cafeFlow/layer_1_external/menuItemIngredient.defs.ts"
    }
  ],
  "allowedOperations": [
    "create",
    "update",
    "delete",
    "read",
    "list"
  ],
  "rulesApplied": [],
  "usecaseRefs": [
    "criarPedido",
    "gerenciarCategoriaCardapio",
    "listarCategoriasCardapio",
    "gerenciarItemCardapio",
    "listarItensCardapio",
    "sugerirItensParaPromover"
  ],
  "materialization": {
    "fileName": "layer_4_entities/MenuItemEntity.ts",
    "className": "MenuItemEntity",
    "contractName": "IMenuItemEntity"
  }
} as const;

export default entity;
