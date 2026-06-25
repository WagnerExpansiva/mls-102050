/// <mls fileReference="_102050_/l4/cafeFlow/ontology/DailyShift.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityDailyShift = {
  "entityId": "DailyShift",
  "title": "Turno Diário",
  "description": "Período operacional com abertura/fechamento, responsável e agregados para fechamento e conferência.",
  "ownership": "moduleOwned",
  "kind": "core",
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
      "description": "Data do turno operacional."
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Estado do ciclo de vida do turno (aberto ou fechado).",
      "enum": [
        "open",
        "closed"
      ]
    },
    {
      "fieldId": "openedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de abertura do turno."
    },
    {
      "fieldId": "closedAt",
      "type": "datetime",
      "required": false,
      "description": "Data e hora de fechamento do turno."
    },
    {
      "fieldId": "responsibleId",
      "type": "uuid",
      "required": true,
      "description": "Identificador do responsável pela abertura e fechamento do turno."
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de criação do registro."
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização do registro."
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
  "rulesApplied": [
    "singleEstablishmentPerAccount",
    "shiftMustBeOpenToRegisterOrders"
  ]
} as const;

export default cafeFlowEntityDailyShift;
