/// <mls fileReference="_102050_/l4/operations/viewOperationalDashboard.defs.ts" enhancement="_blank"/>

export const operationViewOperationalDashboard = {
  "operationId": "viewOperationalDashboard",
  "title": "Ver dashboard operacional do dia",
  "actor": "manager",
  "entity": "DailyShift",
  "kind": "query",
  "reads": [
    "DailyShift",
    "Order",
    "Payment",
    "CashMovement"
  ],
  "writes": [],
  "rulesApplied": [
    "paymentTimingByOrderType",
    "aiOutputLanguageSelection"
  ],
  "story": {
    "actor": "manager",
    "goal": "acompanhar indicadores do dia",
    "steps": [
      "abrir dashboard operacional",
      "visualizar vendas, pedidos e caixa",
      "analisar indicadores"
    ],
    "outcome": "visão operacional do dia disponível"
  },
  "capability": {
    "capabilityId": "viewOperationalDashboard",
    "title": "Ver dashboard operacional do dia",
    "actor": "manager",
    "priority": "now"
  },
  "statusFrontend": "done",
  "statusBackend": "toCreate"
} as const;

export default operationViewOperationalDashboard;
