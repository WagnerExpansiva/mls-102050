/// <mls fileReference="_102050_/l1/cafeFlow/layer_3_usecases/cancelarPedido.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "cancelarPedido",
  "title": "Cancelar Pedido",
  "purpose": "Cancelar um pedido e ajustar métricas de vendas.",
  "actor": "managerOwner",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "pedidoAggregate",
    "estoqueAggregate"
  ],
  "outputEntities": [
    "pedidoAggregate",
    "estoqueAggregate"
  ],
  "readsTables": [
    {
      "tableName": "order",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "order_item",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "stock_item",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "order",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "stock_item",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "stock_movement",
      "ownership": "moduleOwned"
    },
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
  "rulesApplied": [
    "ruleOrderStatusFlow"
  ],
  "entityRefs": [
    "metricasCafeFlow",
    "order",
    "stockItem"
  ],
  "commands": [
    {
      "commandId": "cancelarPedido",
      "input": [
        {
          "name": "pedidoId",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "pedido",
          "type": "pedidoAggregate"
        },
        {
          "name": "estoque",
          "type": "estoqueAggregate"
        }
      ]
    }
  ]
} as const;

export default useCase;
