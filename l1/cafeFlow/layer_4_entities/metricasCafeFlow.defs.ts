/// <mls fileReference="_102050_/l1/cafeFlow/layer_4_entities/metricasCafeFlow.defs.ts" enhancement="_blank"/>

export const entity = {
  "entityId": "metricasCafeFlow",
  "title": "Métricas CafeFlow",
  "purpose": "Consultar e atualizar métricas operacionais do CafeFlow.",
  "layer": "layer_4_entities",
  "sourceTables": [
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
  "storage": [
    {
      "kind": "metricTable",
      "metricTableId": "todaySalesMetrics",
      "tableName": "today_sales_metrics",
      "fileRef": "_102050_/l1/cafeFlow/layer_1_external/todaySalesMetrics.defs.ts"
    },
    {
      "kind": "metricTable",
      "metricTableId": "topSellingItemsMetrics",
      "tableName": "top_selling_items_metrics",
      "fileRef": "_102050_/l1/cafeFlow/layer_1_external/topSellingItemsMetrics.defs.ts"
    },
    {
      "kind": "metricTable",
      "metricTableId": "lowStockMetrics",
      "tableName": "low_stock_metrics",
      "fileRef": "_102050_/l1/cafeFlow/layer_1_external/lowStockMetrics.defs.ts"
    }
  ],
  "allowedOperations": [
    "read",
    "update"
  ],
  "rulesApplied": [],
  "usecaseRefs": [
    "criarPedido",
    "atualizarStatusPedido",
    "cancelarPedido",
    "registrarMovimentacaoEstoque",
    "gerarResumoVendasDia",
    "sugerirItensParaPromover",
    "listarAlertasEstoqueBaixo",
    "consultarAssistenteIA"
  ],
  "materialization": {
    "fileName": "layer_4_entities/MetricasCafeFlowEntity.ts",
    "className": "MetricasCafeFlowEntity",
    "contractName": "IMetricasCafeFlowEntity"
  }
} as const;

export default entity;
