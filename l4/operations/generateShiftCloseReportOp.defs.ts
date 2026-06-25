/// <mls fileReference="_102050_/l4/operations/generateShiftCloseReportOp.defs.ts" enhancement="_blank"/>

export const operationGenerateShiftCloseReportOp = {
  "operationId": "generateShiftCloseReportOp",
  "title": "Gerar relatório de fechamento de turno",
  "actor": "managerOwner",
  "entity": "DailyShift",
  "kind": "query",
  "reads": [
    "DailyShift",
    "Order",
    "OrderLine",
    "StockMovement"
  ],
  "writes": [],
  "rulesApplied": [],
  "story": {
    "actor": "managerOwner",
    "goal": "Gerar o relatório do fechamento do turno",
    "soThat": "possa conferir resultados e manter registro operacional",
    "steps": [
      "Selecionar o DailyShift a reportar",
      "Consultar totais e indicadores do turno (ex.: pedidos finalizados, valores)",
      "Gerar/visualizar o relatório consolidado"
    ],
    "outcome": "Relatório de fechamento do DailyShift disponível para conferência"
  }
} as const;

export default operationGenerateShiftCloseReportOp;
