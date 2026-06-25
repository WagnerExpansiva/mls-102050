/// <mls fileReference="_102050_/l1/cafeFlow/layer_3_usecases/gerenciarItemEstoque.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "gerenciarItemEstoque",
  "title": "Gerenciar Item de Estoque",
  "purpose": "Criar, editar ou inativar itens de estoque.",
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
  "writesTables": [
    {
      "tableName": "stock_item",
      "ownership": "mdmOwned"
    }
  ],
  "rulesApplied": [
    "ruleStockQuantityNonNegative"
  ],
  "entityRefs": [
    "stockItem"
  ],
  "commands": [
    {
      "commandId": "gerenciarItemEstoque",
      "input": [
        {
          "name": "estoqueAggregate",
          "type": "estoqueAggregate",
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
