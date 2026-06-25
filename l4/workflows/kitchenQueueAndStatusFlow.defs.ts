/// <mls fileReference="_102050_/l4/workflows/kitchenQueueAndStatusFlow.defs.ts" enhancement="_blank"/>

export const workflowKitchenQueueAndStatusFlow = {
  "workflowId": "kitchenQueueAndStatusFlow",
  "title": "Fila da cozinha e atualização de status do pedido",
  "executionMode": "sequential",
  "trigger": "Cozinheiro abre a tela/fila da cozinha para pedidos pendentes",
  "actors": [
    "cook"
  ],
  "states": [
    "PendingQueueOpened",
    "OrderUnderReview",
    "InPreparation",
    "ReadyForPickup",
    "StatusConfirmed"
  ],
  "transitions": [
    {
      "from": "PendingQueueOpened",
      "to": "OrderUnderReview",
      "on": "SELECT_ORDER",
      "by": "cook"
    },
    {
      "from": "OrderUnderReview",
      "to": "InPreparation",
      "on": "MARK_PREPARING",
      "by": "cook"
    },
    {
      "from": "OrderUnderReview",
      "to": "ReadyForPickup",
      "on": "MARK_READY",
      "by": "cook"
    },
    {
      "from": "InPreparation",
      "to": "ReadyForPickup",
      "on": "MARK_READY",
      "by": "cook"
    },
    {
      "from": "ReadyForPickup",
      "to": "StatusConfirmed",
      "on": "CONFIRM_STATUS_UPDATE",
      "by": "cook"
    }
  ],
  "operationIds": [],
  "entities": [
    "Order",
    "OrderLine",
    "MenuItem",
    "Table"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "cook",
    "goal": "Ver a fila de pedidos e atualizar o status conforme o preparo avança",
    "soThat": "o salão/atendimento acompanhe o andamento e reduza erros/atrasos",
    "steps": [
      "Abrir a fila de pedidos pendentes na cozinha",
      "Selecionar um Order e revisar suas OrderLines e observações",
      "Marcar status de preparo (ex.: em preparo, pronto) conforme regras do estabelecimento",
      "Atualizar o status do pedido/itens para refletir o andamento real"
    ],
    "outcome": "Status do Order/OrderLines atualizado, refletindo o progresso na cozinha"
  }
} as const;

export default workflowKitchenQueueAndStatusFlow;
