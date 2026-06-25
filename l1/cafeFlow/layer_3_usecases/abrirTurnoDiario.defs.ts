/// <mls fileReference="_102050_/l1/cafeFlow/layer_3_usecases/abrirTurnoDiario.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "abrirTurnoDiario",
  "title": "Abrir Turno Diário",
  "purpose": "Abrir um turno diário único para o dia atual.",
  "actor": "attendantCashier",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "turnoDiarioAggregate"
  ],
  "outputEntities": [
    "turnoDiarioAggregate"
  ],
  "readsTables": [
    {
      "tableName": "daily_shift",
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
    "ruleUniqueOpenShiftPerDay"
  ],
  "entityRefs": [
    "dailyShift"
  ],
  "commands": [
    {
      "commandId": "abrirTurnoDiario",
      "input": [],
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
