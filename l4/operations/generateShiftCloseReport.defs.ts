/// <mls fileReference="_102050_/l4/operations/generateShiftCloseReport.defs.ts" enhancement="_blank"/>

export const operationGenerateShiftCloseReport = {
  "operationId": "generateShiftCloseReport",
  "title": "Gerar relatório de fechamento de turno",
  "actor": "manager",
  "entity": "DailyShift",
  "kind": "query",
  "reads": [
    "DailyShift",
    "DailyShift.openingCashBalance",
    "DailyShift.closingCashBalance",
    "DailyShift.totalSales",
    "DailyShift.totalPayments",
    "DailyShift.closingNotes",
    "DailyShift.openedAt",
    "DailyShift.closedAt",
    "DailyShift.status",
    "Payment",
    "CashMovement",
    "Order",
    "OrderItem"
  ],
  "writes": [],
  "rulesApplied": [
    "paymentTimingByOrderType",
    "aiOutputLanguageSelection"
  ],
  "story": {
    "actor": "manager",
    "goal": "obter resumo do fechamento do turno",
    "soThat": "possa revisar o desempenho operacional e conciliar o caixa",
    "steps": [
      "selecionar turno",
      "gerar relatório de fechamento",
      "visualizar ou exportar"
    ],
    "outcome": "relatório de fechamento gerado"
  },
  "capability": {
    "capabilityId": "generateShiftCloseReport",
    "title": "Gerar relatório de fechamento de turno",
    "actor": "manager",
    "priority": "now"
  },
  "statusFrontend": "done",
  "statusBackend": "inProgress"
} as const;

export default operationGenerateShiftCloseReport;
