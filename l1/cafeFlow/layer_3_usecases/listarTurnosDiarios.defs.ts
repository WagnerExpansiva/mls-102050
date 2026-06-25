/// <mls fileReference="_102050_/l1/cafeFlow/layer_3_usecases/listarTurnosDiarios.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "listarTurnosDiarios",
  "title": "Listar Turnos Diários",
  "purpose": "Consultar turnos diários existentes.",
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
  "writesTables": [],
  "rulesApplied": [],
  "entityRefs": [
    "dailyShift"
  ],
  "commands": [
    {
      "commandId": "listarTurnosDiarios",
      "input": [],
      "output": [
        {
          "name": "turnosDiarios",
          "type": "turnoDiarioAggregate[]"
        }
      ]
    }
  ]
} as const;

export default useCase;
