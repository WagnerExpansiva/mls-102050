/// <mls fileReference="_102050_/l4/cafeFlow/ontology/Table.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityTable = {
  "entityId": "Table",
  "title": "Mesa",
  "description": "Identificador estável de mesa para pedidos locais (número, apelido, capacidade opcional) visando velocidade no POS.",
  "ownership": "mdmOwned",
  "kind": "mdm",
  "fields": [
    {
      "fieldId": "tableId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único da mesa"
    },
    {
      "fieldId": "number",
      "type": "string",
      "required": true,
      "description": "Número da mesa para identificação rápida no POS"
    },
    {
      "fieldId": "nickname",
      "type": "string",
      "required": false,
      "description": "Apelido opcional da mesa (ex: Varanda, Sala VIP)"
    },
    {
      "fieldId": "capacity",
      "type": "number",
      "required": false,
      "description": "Capacidade opcional de pessoas"
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Situação atual da mesa no ciclo de vida",
      "enum": [
        "active",
        "inactive"
      ]
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
