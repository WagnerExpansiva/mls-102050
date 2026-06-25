/// <mls fileReference="_102050_/l1/cafeFlow/layer_3_usecases/listarItensEstoque.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "listarItensEstoque",
  "title": "Listar Itens de Estoque",
  "purpose": "Consultar itens de estoque.",
  "actor": "managerOwner",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "estoqueAggregate"
  ],
  "outputEntities": [
    "estoqueAggregate"
  ],
  "readsTables": [
    {
      "tableName": "stock_item",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [],
  "rulesApplied": [],
  "entityRefs": [
    "stockItem"
  ],
  "commands": [
    {
      "commandId": "listarItensEstoque",
      "input": [],
      "output": [
        {
          "name": "itensEstoque",
          "type": "estoqueAggregate[]"
        }
      ]
    }
  ]
} as const;

export default useCase;
