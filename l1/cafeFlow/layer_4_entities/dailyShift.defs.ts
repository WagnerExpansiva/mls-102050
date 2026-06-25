/// <mls fileReference="_102050_/l1/cafeFlow/layer_4_entities/dailyShift.defs.ts" enhancement="_blank"/>

export const entity = {
  "entityId": "dailyShift",
  "title": "Turno Diário",
  "purpose": "Gerenciar abertura/fechamento e consulta de turnos diários.",
  "layer": "layer_4_entities",
  "fields": [
    {
      "fieldId": "dailyShiftId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do turno diário."
    },
    {
      "fieldId": "shiftDate",
      "type": "date",
      "required": true,
      "description": "Data do turno diário (referência do dia de operação)."
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Status atual do turno diário.",
      "enum": [
        "open",
        "closed"
      ]
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de criação do turno diário."
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização do turno diário."
    }
  ],
  "statusEnum": [
    "open",
    "closed"
  ],
  "lifecycleStates": [
    "open",
    "closed"
  ],
  "ontologyEntities": [
    "DailyShift"
  ],
  "sourceTables": [
    {
      "tableName": "daily_shift",
      "ownership": "mdmOwned"
    }
  ],
  "storage": [
    {
      "kind": "mdm",
      "moduleRef": "102034",
      "entity": "DailyShift",
      "domainId": "dailyShift",
      "sourceOfTruth": "102034",
      "governanceRules": [
        "ruleOrderRequiresOpenShift",
        "ruleShiftCloseNoOpenOrders",
        "ruleUniqueOpenShiftPerDay"
      ]
    }
  ],
  "allowedOperations": [
    "create",
    "update",
    "read",
    "list"
  ],
  "rulesApplied": [],
  "usecaseRefs": [
    "abrirTurnoDiario",
    "listarTurnosDiarios",
    "fecharTurnoDiario",
    "criarPedido",
    "gerarResumoVendasDia"
  ],
  "materialization": {
    "fileName": "layer_4_entities/DailyShiftEntity.ts",
    "className": "DailyShiftEntity",
    "contractName": "IDailyShiftEntity"
  }
} as const;

export default entity;
