/// <mls fileReference="_102050_/l4/workflows/dailyShiftOpenCloseWorkflow.defs.ts" enhancement="_blank"/>

export const workflowDailyShiftOpenCloseWorkflow = {
  "workflowId": "dailyShiftOpenCloseWorkflow",
  "title": "Abrir e fechar turno diário",
  "executionMode": "sequential",
  "trigger": "Gerente/owner inicia o dia/turno (abrir) ou encerra (fechar)",
  "actors": [
    "managerOwner"
  ],
  "states": [
    "pendingOpen",
    "opened",
    "closing",
    "closed"
  ],
  "transitions": [
    {
      "from": "pendingOpen",
      "to": "opened",
      "on": "openShift",
      "by": "managerOwner"
    },
    {
      "from": "opened",
      "to": "closing",
      "on": "requestClose",
      "by": "managerOwner"
    },
    {
      "from": "closing",
      "to": "closed",
      "on": "confirmClose",
      "by": "managerOwner",
      "guard": "closeConditionsMet"
    }
  ],
  "operationIds": [
    "generateShiftCloseReportOp"
  ],
  "entities": [
    "MenuItem",
    "Order",
    "DailyShift",
    "StockItem",
    "MenuCategory",
    "Table",
    "RecipeLine",
    "OrderLine",
    "StockMovement"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "managerOwner",
    "goal": "Controlar o ciclo diário de operação abrindo e fechando o turno",
    "soThat": "as vendas e operações fiquem organizadas por período e permitam conferência",
    "steps": [
      "Abrir um DailyShift no início do dia/turno",
      "Operar o dia com pedidos vinculados ao turno aberto",
      "Ao final, verificar condições de elegibilidade para fechamento",
      "Fechar o DailyShift registrando o encerramento do turno"
    ],
    "outcome": "DailyShift aberto/fechado corretamente e pronto para relatórios/controle"
  }
} as const;

export default workflowDailyShiftOpenCloseWorkflow;
