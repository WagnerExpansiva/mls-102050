/// <mls fileReference="_102050_/l4/cafeFlow/ontology/Table.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityTable = {
  "entityId": "Table",
  "title": "Mesa",
  "description": "Referência estável das mesas do salão para associar pedidos e acelerar operação.",
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
      "fieldId": "name",
      "type": "string",
      "required": true,
      "description": "Nome ou número da mesa para identificação no salão."
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "enum": [
        "active",
        "inactive"
      ],
      "description": "Situação atual da mesa no ciclo de vida."
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
    "active",
    "inactive"
  ],
  "rulesApplied": [
    "singleEstablishmentPerAccount"
  ]
} as const;

export default cafeFlowEntityTable;
