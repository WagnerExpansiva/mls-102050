/// <mls fileReference="_102050_/l4/cafeFlow/ontology/DailyShift.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityDailyShift = {
  "entityId": "DailyShift",
  "title": "Turno Diário",
  "description": "Unidade operacional de abertura/fechamento com período, responsável e consolidação de movimentos do dia para fechamento e relatórios.",
  "ownership": "moduleOwned",
  "kind": "core",
  "fields": [
    {
      "fieldId": "id",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do turno"
    },
    {
      "fieldId": "shiftDate",
      "type": "date",
      "required": true,
      "description": "Data do turno"
    },
    {
      "fieldId": "openedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de abertura do turno"
    },
    {
      "fieldId": "closedAt",
      "type": "datetime",
      "required": false,
      "description": "Data e hora de fechamento do turno"
    },
    {
      "fieldId": "responsibleName",
      "type": "string",
      "required": true,
      "description": "Nome do responsável pelo turno"
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Situação atual do turno",
      "enum": [
        "open",
        "closed"
      ]
    },
    {
      "fieldId": "forcedClosureReason",
      "type": "text",
      "required": false,
      "description": "Justificativa para encerramento forçado do turno"
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de criação do registro"
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização do registro"
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
    "shiftCloseEligibility"
  ]
} as const;

export default cafeFlowEntityDailyShift;
