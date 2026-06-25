/// <mls fileReference="_102050_/l1/cafeFlow/layer_3_usecases/listarAlertasEstoqueBaixo.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "listarAlertasEstoqueBaixo",
  "title": "Listar Alertas de Estoque Baixo",
  "purpose": "Consultar alertas de estoque baixo.",
  "actor": "managerOwner",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "metricasCafeFlow",
    "estoqueAggregate"
  ],
  "outputEntities": [
    "metricasCafeFlow"
  ],
  "readsTables": [
    {
      "tableName": "low_stock_metrics",
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
    "metricasCafeFlow",
    "stockItem"
  ],
  "commands": [
    {
      "commandId": "listarAlertasEstoqueBaixo",
      "input": [],
      "output": [
        {
          "name": "metricasCafeFlowList",
          "type": "metricasCafeFlow[]"
        }
      ]
    }
  ]
} as const;

export default useCase;
