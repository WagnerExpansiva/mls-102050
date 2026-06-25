/// <mls fileReference="_102050_/l1/cafeFlow/layer_3_usecases/gerarResumoVendasDia.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "gerarResumoVendasDia",
  "title": "Gerar Resumo de Vendas do Dia",
  "purpose": "Consultar métricas de vendas do dia para o dashboard.",
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
      "tableName": "daily_shift",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [],
  "rulesApplied": [],
  "entityRefs": [
    "dailyShift",
    "metricasCafeFlow"
  ],
  "commands": [
    {
      "commandId": "gerarResumoVendasDia",
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
