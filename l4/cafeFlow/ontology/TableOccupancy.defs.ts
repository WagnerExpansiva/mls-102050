/// <mls fileReference="_102050_/l4/cafeFlow/ontology/TableOccupancy.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityTableOccupancy = {
  "entityId": "TableOccupancy",
  "title": "Ocupação de Mesa",
  "description": "Estado operacional de uma mesa do salão (livre/ocupada/desabilitada) e consumo acumulado. Dado transacional do módulo — tabela própria, não MDM. Referencia a Table (cadastro) por id.",
  "ownership": "moduleOwned",
  "kind": "core",
  "fields": [
    {
      "fieldId": "tableOccupancyId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do registro de ocupação."
    },
    {
      "fieldId": "tableId",
      "type": "uuid",
      "required": true,
      "description": "Referência ao cadastro da mesa (Table, MDM)."
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Situação operacional da mesa no atendimento.",
      "enum": [
        "available",
        "occupied",
        "disabled"
      ]
    },
    {
      "fieldId": "currentChargesTotal",
      "type": "decimal",
      "required": true,
      "description": "Consumo acumulado da mesa na ocupação atual."
    },
    {
      "fieldId": "openedAt",
      "type": "datetime",
      "required": false,
      "description": "Início da ocupação atual (null quando livre)."
    },
    {
      "fieldId": "closedAt",
      "type": "datetime",
      "required": false,
      "description": "Fim da última ocupação (null enquanto ocupada)."
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

export default cafeFlowEntityTableOccupancy;
