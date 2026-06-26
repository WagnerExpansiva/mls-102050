/// <mls fileReference="_102050_/l4/operations/aiSalesSummary.defs.ts" enhancement="_blank"/>

export const operationAiSalesSummary = {
  "operationId": "aiSalesSummary",
  "title": "Assistente IA: resumo de vendas do dia",
  "actor": "manager",
  "entity": "Order",
  "kind": "query",
  "reads": [
    "Order",
    "Order.totalAmount",
    "Order.status",
    "Order.closedAt",
    "Order.dailyShiftId",
    "OrderItem",
    "DailyShift",
    "MenuItem"
  ],
  "writes": [],
  "rulesApplied": [
    "aiOutputLanguageSelection"
  ],
  "story": {
    "actor": "manager",
    "goal": "receber resumo de vendas por IA",
    "steps": [
      "solicitar resumo de vendas do dia",
      "plataforma consulta dados e chama IA",
      "visualizar resumo no idioma configurado"
    ],
    "outcome": "resumo de vendas apresentado"
  },
  "capability": {
    "capabilityId": "aiSalesSummary",
    "title": "Assistente IA: resumo de vendas do dia",
    "actor": "manager",
    "priority": "soon"
  },
  "statusFrontend": "done",
  "statusBackend": "toCreate"
} as const;

export default operationAiSalesSummary;
