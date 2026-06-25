/// <mls fileReference="_102050_/l4/workflows/openCloseDailyShift.defs.ts" enhancement="_blank"/>

export const workflowOpenCloseDailyShift = {
  "workflowId": "openCloseDailyShift",
  "title": "Abertura e fechamento de turno diário",
  "executionMode": "sequential",
  "trigger": "Caixa abre o turno no início do expediente e o fecha ao final",
  "actors": [
    "cashier"
  ],
  "states": [
    "open",
    "closed"
  ],
  "transitions": [
    {
      "from": "open",
      "to": "closed",
      "on": "close",
      "by": "cashier"
    }
  ],
  "operationIds": [
    "shiftCloseReport"
  ],
  "entities": [
    "DailyShift"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "cashier",
    "goal": "Abrir o turno para permitir vendas e fechá-lo ao final do período",
    "soThat": "as vendas sejam controladas por turno e o caixa feche com conferência",
    "steps": [
      "Abrir um DailyShift informando data/hora e valores iniciais (ex.: fundo de caixa)",
      "Manter o DailyShift em estado aberto durante o atendimento",
      "Encerrar o DailyShift ao final do período confirmando valores e observações",
      "Marcar o DailyShift como fechado, bloqueando novos pedidos nesse turno"
    ],
    "outcome": "Turno registrado com status aberto/fechado e base para relatórios"
  }
} as const;

export default workflowOpenCloseDailyShift;
