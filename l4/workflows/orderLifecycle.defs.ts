/// <mls fileReference="_102050_/l4/workflows/orderLifecycle.defs.ts" enhancement="_blank"/>

export const workflowOrderLifecycle = {
  "workflowId": "orderLifecycle",
  "title": "Ciclo de vida do pedido (POS → cozinha → finalização/cancelamento)",
  "executionMode": "sequential",
  "trigger": "Atendente inicia um novo pedido no POS durante um DailyShift aberto",
  "actors": [
    "attendant",
    "cook",
    "cashier"
  ],
  "states": [
    "draft",
    "sentToKitchen",
    "inPreparation",
    "ready",
    "delivered",
    "cancelled"
  ],
  "transitions": [
    {
      "from": "draft",
      "to": "sentToKitchen",
      "on": "sendToKitchen",
      "by": "attendant"
    },
    {
      "from": "sentToKitchen",
      "to": "inPreparation",
      "on": "startPreparation",
      "by": "cook"
    },
    {
      "from": "inPreparation",
      "to": "ready",
      "on": "markReady",
      "by": "cook"
    },
    {
      "from": "ready",
      "to": "delivered",
      "on": "deliver",
      "by": "attendant"
    },
    {
      "from": "draft",
      "to": "cancelled",
      "on": "cancel",
      "by": "attendant"
    },
    {
      "from": "sentToKitchen",
      "to": "cancelled",
      "on": "cancel",
      "by": "attendant"
    },
    {
      "from": "inPreparation",
      "to": "cancelled",
      "on": "cancel",
      "by": "cook"
    },
    {
      "from": "ready",
      "to": "cancelled",
      "on": "cancel",
      "by": "attendant"
    }
  ],
  "operationIds": [
    "posFastOrderOps",
    "sendOrderToKitchen"
  ],
  "entities": [
    "Order",
    "OrderItem",
    "DailyShift"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "attendant",
    "goal": "Registrar um pedido no POS, enviar para a cozinha e acompanhar até a finalização",
    "soThat": "o atendimento seja rápido e a cozinha receba e produza os itens corretamente",
    "steps": [
      "Verificar que existe um DailyShift aberto para registrar pedidos",
      "Criar um Order no POS (mesa ou takeout conforme o contexto operacional)",
      "Adicionar e/ou remover OrderItem conforme solicitações do cliente",
      "Enviar o Order para a cozinha (mudando o estado para enviado/em produção)",
      "Acompanhar o progresso do pedido até ficar pronto e entregue",
      "Finalizar o Order (marcando como concluído) ou encaminhar para cancelamento quando necessário"
    ],
    "outcome": "Pedido registrado, preparado e finalizado (ou encaminhado para cancelamento) com histórico consistente"
  }
} as const;

export default workflowOrderLifecycle;
