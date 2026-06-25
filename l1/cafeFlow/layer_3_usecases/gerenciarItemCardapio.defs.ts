/// <mls fileReference="_102050_/l1/cafeFlow/layer_3_usecases/gerenciarItemCardapio.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "gerenciarItemCardapio",
  "title": "Gerenciar Item do Cardápio",
  "purpose": "Criar, editar ou remover itens do cardápio e seus ingredientes.",
  "actor": "managerOwner",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "cardapioAggregate"
  ],
  "outputEntities": [
    "cardapioAggregate"
  ],
  "readsTables": [
    {
      "tableName": "menu_item",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "menu_item_ingredient",
      "ownership": "moduleOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "menu_item",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "menu_item_ingredient",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [
    "ruleMenuItemPricePositive"
  ],
  "entityRefs": [
    "menuItem"
  ],
  "commands": [
    {
      "commandId": "gerenciarItemCardapio",
      "input": [
        {
          "name": "operacao",
          "type": "menuItemOperation",
          "required": true
        },
        {
          "name": "menuItemId",
          "type": "menuItemId",
          "required": false
        },
        {
          "name": "nome",
          "type": "string",
          "required": false
        },
        {
          "name": "descricao",
          "type": "string",
          "required": false
        },
        {
          "name": "preco",
          "type": "number",
          "required": false
        },
        {
          "name": "ingredientes",
          "type": "ingredientId[]",
          "required": false
        }
      ],
      "output": [
        {
          "name": "cardapioAggregate",
          "type": "cardapioAggregate"
        }
      ]
    }
  ]
} as const;

export default useCase;
