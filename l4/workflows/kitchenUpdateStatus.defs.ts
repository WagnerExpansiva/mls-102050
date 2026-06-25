/// <mls fileReference="_102050_/l4/workflows/kitchenUpdateStatus.defs.ts" enhancement="_blank"/>

export const workflowKitchenUpdateStatus = {
  "workflowId": "kitchenUpdateStatus",
  "title": "Atualizar status na cozinha (em preparo/pronto)",
  "executionMode": "sequential",
  "trigger": "Cozinha recebe pedidos enviados e atualiza andamento conforme produção",
  "actors": [
    "cook"
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
    }
  ],
  "operationIds": [],
  "entities": [
    "Order",
    "OrderItem"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "cook",
    "goal": "Atualizar o andamento dos pedidos recebidos na cozinha",
    "soThat": "o salão saiba o que está em preparo e o que está pronto para entrega",
    "steps": [
      "Visualizar lista de Orders enviados para a cozinha",
      "Selecionar um Order e iniciar preparo, mudando status para em preparo",
      "Quando itens/pedido estiverem prontos, atualizar status para pronto",
      "Manter o status atualizado conforme a produção avança"
    ],
    "outcome": "Status de cozinha refletindo o andamento real dos pedidos"
  }
} as const;

export default workflowKitchenUpdateStatus;
