/// <mls fileReference="_102050_/l1/cafeFlow/layer_3_usecases/listarItensCardapio.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "listarItensCardapio",
  "title": "Listar Itens do Cardápio",
  "purpose": "Consultar itens do cardápio e seus ingredientes.",
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
    },
    {
      "tableName": "menu_category",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [],
  "rulesApplied": [],
  "entityRefs": [
    "menuItem"
  ],
  "commands": [
    {
      "commandId": "listarItensCardapio",
      "input": [
        {
          "name": "cardapioId",
          "type": "string",
          "required": true
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
