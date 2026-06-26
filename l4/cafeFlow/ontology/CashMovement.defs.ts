/// <mls fileReference="_102050_/l4/cafeFlow/ontology/CashMovement.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityCashMovement = {
  "entityId": "CashMovement",
  "title": "Movimento de Caixa",
  "description": "Entradas/saídas manuais de caixa no turno (ex.: sangria, reforço), para auditoria do fechamento. Lançamentos são append-only; estornos via lançamento compensatório.",
  "ownership": "horizontalOwned",
  "kind": "supporting",
  "fields": [
    {
      "fieldId": "cashMovementId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do movimento de caixa"
    },
    {
      "fieldId": "dailyShiftId",
      "type": "DailyShift",
      "required": true,
      "description": "Referência ao turno (DailyShift) ao qual o movimento pertence"
    },
    {
      "fieldId": "movementType",
      "type": "string",
      "required": true,
      "description": "Tipo do movimento: entrada ou saída de caixa",
      "enum": [
        "entrada",
        "saída"
      ]
    },
    {
      "fieldId": "amount",
      "type": "money",
      "required": true,
      "description": "Valor do movimento"
    },
    {
      "fieldId": "reason",
      "type": "string",
      "required": true,
      "description": "Motivo do movimento (ex.: sangria, reforço, estorno)"
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data/hora de criação do registro"
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data/hora da última atualização do registro"
    }
  ],
  "rulesApplied": []
} as const;

export default cafeFlowEntityCashMovement;
