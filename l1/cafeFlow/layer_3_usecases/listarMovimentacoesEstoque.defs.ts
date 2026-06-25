/// <mls fileReference="_102050_/l1/cafeFlow/layer_3_usecases/listarMovimentacoesEstoque.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "listarMovimentacoesEstoque",
  "title": "Listar Movimentações de Estoque",
  "purpose": "Consultar movimentações de estoque.",
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
      "tableName": "stock_movement",
      "ownership": "moduleOwned"
    },
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
      "commandId": "listarMovimentacoesEstoque",
      "input": [
        {
          "name": "estoqueId",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "estoqueAggregate",
          "type": "estoqueAggregate"
        }
      ]
    }
  ]
} as const;

export default useCase;
