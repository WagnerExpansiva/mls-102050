/// <mls fileReference="_102050_/l4/operations/shiftCloseReport.defs.ts" enhancement="_blank"/>

export const operationShiftCloseReport = {
  "operationId": "shiftCloseReport",
  "title": "Gerar relatório de fechamento de turno",
  "actor": "cashier",
  "entity": "DailyShift",
  "kind": "query",
  "reads": [
    "DailyShift",
    "Order",
    "OrderItem",
    "SalesInsight"
  ],
  "writes": [],
  "rulesApplied": [
    "singleEstablishmentPerAccount",
    "shiftMustBeOpenToRegisterOrders"
  ],
  "story": {
    "actor": "cashier",
    "goal": "Gerar um relatório do turno para conferência e registro",
    "soThat": "o fechamento seja auditável e fácil de revisar",
    "steps": [
      "Selecionar o DailyShift a reportar (normalmente o turno atual)",
      "Consultar totais de vendas e indicadores do turno",
      "Gerar e visualizar o relatório de fechamento",
      "Exportar/imprimir quando necessário"
    ],
    "outcome": "Relatório de fechamento disponível para conferência"
  }
} as const;

export default operationShiftCloseReport;
