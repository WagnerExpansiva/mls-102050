/// <mls fileReference="_102050_/l1/cafeFlow/layer_3_usecases/atualizarStatusPedido.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "atualizarStatusPedido",
  "title": "Atualizar Status do Pedido",
  "purpose": "Atualizar status do pedido e iniciar baixa de estoque no preparo.",
  "actor": "cook",
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
    "ruleOrderStatusFlow",
    "ruleStockDeductionOnOrderPreparation",
    "ruleStockQuantityNonNegative",
    "ruleLowStockAlert"
  ],
  "entityRefs": [
    "metricasCafeFlow",
    "order",
    "stockItem"
  ],
  "commands": [
    {
      "commandId": "atualizarStatusPedido",
      "input": [
        {
          "name": "pedidoId",
          "type": "string",
          "required": true
        },
        {
          "name": "novoStatus",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "pedidoAggregate",
          "type": "pedidoAggregate"
        },
        {
          "name": "estoqueAggregate",
          "type": "estoqueAggregate"
        }
      ]
    }
  ]
} as const;

export default useCase;
