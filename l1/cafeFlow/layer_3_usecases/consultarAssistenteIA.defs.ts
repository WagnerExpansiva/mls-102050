/// <mls fileReference="_102050_/l1/cafeFlow/layer_3_usecases/consultarAssistenteIA.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "consultarAssistenteIA",
  "title": "Consultar Assistente IA",
  "purpose": "Fornecer dados agregados para o assistente de vendas respeitando privacidade.",
  "actor": "managerOwner",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "metricasCafeFlow"
  ],
  "outputEntities": [
    "metricasCafeFlow"
  ],
  "readsTables": [
    {
      "tableName": "today_sales_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "top_selling_items_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "low_stock_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "writesTables": [],
  "rulesApplied": [
    "ruleLlmDataPrivacy"
  ],
  "entityRefs": [
    "metricasCafeFlow"
  ],
  "commands": [
    {
      "commandId": "consultarAssistenteIA",
      "input": [],
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
