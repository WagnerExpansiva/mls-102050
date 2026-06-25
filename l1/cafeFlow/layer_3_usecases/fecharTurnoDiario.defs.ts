/// <mls fileReference="_102050_/l1/cafeFlow/layer_3_usecases/fecharTurnoDiario.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "fecharTurnoDiario",
  "title": "Fechar Turno Diário",
  "purpose": "Fechar o turno diário garantindo ausência de pedidos abertos.",
  "actor": "managerOwner",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "turnoDiarioAggregate",
    "pedidoAggregate"
  ],
  "outputEntities": [
    "turnoDiarioAggregate"
  ],
  "readsTables": [
    {
      "tableName": "daily_shift",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "order",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "daily_shift",
      "ownership": "mdmOwned"
    }
  ],
  "rulesApplied": [
    "ruleShiftCloseNoOpenOrders"
  ],
  "entityRefs": [
    "dailyShift",
    "order"
  ],
  "commands": [
    {
      "commandId": "fecharTurnoDiario",
      "input": [
        {
          "name": "turnoDiarioId",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "turnoDiario",
          "type": "turnoDiarioAggregate"
        }
      ]
    }
  ]
} as const;

export default useCase;
