/// <mls fileReference="_102050_/l1/cafeFlow/layer_3_usecases/listarPedidos.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "listarPedidos",
  "title": "Listar Pedidos",
  "purpose": "Consultar pedidos e seus itens por filtros.",
  "actor": "attendantCashier",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "pedidoAggregate"
  ],
  "outputEntities": [
    "pedidoAggregate"
  ],
  "readsTables": [
    {
      "tableName": "order",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "order_item",
      "ownership": "moduleOwned"
    }
  ],
  "writesTables": [],
  "rulesApplied": [],
  "entityRefs": [
    "order"
  ],
  "commands": [
    {
      "commandId": "listarPedidos",
      "input": [
        {
          "name": "filtro",
          "type": "pedidoFiltro",
          "required": false
        }
      ],
      "output": [
        {
          "name": "pedidos",
          "type": "pedidoAggregate[]"
        }
      ]
    }
  ]
} as const;

export default useCase;
