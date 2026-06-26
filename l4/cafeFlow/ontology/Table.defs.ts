/// <mls fileReference="_102050_/l4/cafeFlow/ontology/Table.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityTable = {
  "entityId": "Table",
  "title": "Mesa",
  "description": "Identificador de mesa para atendimento no salão; suporte a abertura e fechamento consolidado de consumo.",
  "ownership": "moduleOwned",
  "kind": "mdm",
  "fields": [
    {
      "fieldId": "tableId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único da mesa."
    },
    {
      "fieldId": "number",
      "type": "string",
      "required": true,
      "description": "Número ou identificador da mesa no salão."
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Situação atual da mesa no ciclo de atendimento.",
      "enum": [
        "available",
        "occupied",
        "disabled"
      ]
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
    "available",
    "occupied",
    "disabled"
  ],
  "lifecycleStates": [
    "available",
    "occupied",
    "disabled"
  ],
  "rulesApplied": [
    "tableOccupancyConsistency"
  ]
} as const;

export default cafeFlowEntityTable;
