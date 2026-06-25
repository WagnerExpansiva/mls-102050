/// <mls fileReference="_102050_/l1/cafeFlow/layer_3_usecases/criarPedido.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "criarPedido",
  "title": "Criar Pedido",
  "purpose": "Registrar um novo pedido e seus itens.",
  "actor": "attendantCashier",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "pedidoAggregate",
    "turnoDiarioAggregate"
  ],
  "outputEntities": [
    "pedidoAggregate"
  ],
  "readsTables": [
    {
      "tableName": "daily_shift",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "menu_item",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "order",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "order_item",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "today_sales_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "top_selling_items_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [
    "ruleOrderRequiresOpenShift"
  ],
  "entityRefs": [
    "dailyShift",
    "menuItem",
    "metricasCafeFlow",
    "order"
  ],
  "commands": [
    {
      "commandId": "criarPedido",
      "input": [
        {
          "name": "pedidoAggregate",
          "type": "pedidoAggregate",
          "required": true
        },
        {
          "name": "turnoDiarioAggregate",
          "type": "turnoDiarioAggregate",
          "required": true
        }
      ],
      "output": [
        {
          "name": "pedidoAggregate",
          "type": "pedidoAggregate"
        }
      ]
    }
  ]
} as const;

export default useCase;
