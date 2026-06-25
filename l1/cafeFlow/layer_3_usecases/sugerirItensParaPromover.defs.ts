/// <mls fileReference="_102050_/l1/cafeFlow/layer_3_usecases/sugerirItensParaPromover.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "sugerirItensParaPromover",
  "title": "Sugerir Itens para Promover",
  "purpose": "Sugerir itens com base nas métricas de venda.",
  "actor": "managerOwner",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "metricasCafeFlow",
    "cardapioAggregate"
  ],
  "outputEntities": [
    "metricasCafeFlow"
  ],
  "readsTables": [
    {
      "tableName": "top_selling_items_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "menu_item",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [],
  "rulesApplied": [],
  "entityRefs": [
    "menuItem",
    "metricasCafeFlow"
  ],
  "commands": [
    {
      "commandId": "sugerirItensParaPromover",
      "input": [
        {
          "name": "metricasCafeFlowId",
          "type": "string",
          "required": true
        },
        {
          "name": "cardapioId",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "metricasCafeFlow",
          "type": "metricasCafeFlow"
        }
      ]
    }
  ]
} as const;

export default useCase;
