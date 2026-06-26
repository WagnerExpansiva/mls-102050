/// <mls fileReference="_102050_/l4/cafeFlow/ontology/DailyShift.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityDailyShift = {
  "entityId": "DailyShift",
  "title": "Turno Diário",
  "description": "Período operacional (abertura→fechamento) para consolidar vendas, caixa e relatórios de fechamento.",
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
      "description": "Data operacional do turno."
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Estado atual do turno.",
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
      "fieldId": "openingCashBalance",
      "type": "money",
      "required": false,
      "description": "Valor inicial em caixa ao abrir o turno."
    },
    {
      "fieldId": "closingCashBalance",
      "type": "money",
      "required": false,
      "description": "Valor final em caixa ao fechar o turno."
    },
    {
      "fieldId": "totalSales",
      "type": "money",
      "required": false,
      "description": "Total consolidado de vendas no turno."
    },
    {
      "fieldId": "totalPayments",
      "type": "money",
      "required": false,
      "description": "Total consolidado de pagamentos recebidos no turno."
    },
    {
      "fieldId": "closingNotes",
      "type": "text",
      "required": false,
      "description": "Observações e relatório de fechamento do turno."
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
    "paymentTimingByOrderType",
    "aiOutputLanguageSelection"
  ]
} as const;

export default cafeFlowEntityDailyShift;
