/// <mls fileReference="_102050_/l1/cafeFlow/layer_3_usecases/listarCategoriasCardapio.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "listarCategoriasCardapio",
  "title": "Listar Categorias do Cardápio",
  "purpose": "Consultar categorias do cardápio.",
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
      "commandId": "listarCategoriasCardapio",
      "input": [],
      "output": [
        {
          "name": "categorias",
          "type": "menuCategory[]"
        }
      ]
    }
  ]
} as const;

export default useCase;
