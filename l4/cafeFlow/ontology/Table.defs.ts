/// <mls fileReference="_102050_/l4/cafeFlow/ontology/Table.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityTable = {
  "entityId": "Table",
  "title": "Mesa",
  "description": "Cadastro da mesa do salão (dado mestre/MDM): identificador físico. A ocupação operacional (livre/ocupada/gastos) vive em TableOccupancy.",
  "ownership": "moduleOwned",
  "kind": "mdm",
  "mdmSubtype": "AssetGeneric",
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
      "description": "Situação cadastral da mesa (não confundir com ocupação operacional, que vive em TableOccupancy).",
      "enum": [
        "active",
        "inactive"
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
    "active",
    "inactive"
  ],
  "lifecycleStates": [
    "active",
    "inactive"
  ],
  "rulesApplied": []
} as const;

export default cafeFlowEntityTable;
