/// <mls fileReference="_102050_/l4/workflows/inventoryMovements.defs.ts" enhancement="_blank"/>

export const workflowInventoryMovements = {
  "workflowId": "inventoryMovements",
  "title": "Movimentação de estoque (entrada/saída/ajuste) e reabastecimento simples",
  "executionMode": "sequential",
  "trigger": "Gestor/owner registra uma movimentação de estoque ou reabastecimento",
  "actors": [
    "managerOwner"
  ],
  "states": [
    "posted",
    "voided"
  ],
  "transitions": [
    {
      "from": "posted",
      "to": "voided",
      "on": "void",
      "by": "managerOwner"
    }
  ],
  "operationIds": [],
  "entities": [
    "InventoryItem",
    "StockMovement"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "managerOwner",
    "goal": "Registrar entradas, saídas e ajustes de estoque",
    "soThat": "o saldo de InventoryItem fique correto e suporte reposição simples",
    "steps": [
      "Localizar o InventoryItem a movimentar",
      "Criar um StockMovement (entrada/saída/ajuste) com quantidade, motivo e data/hora",
      "Aplicar o StockMovement atualizando o saldo do InventoryItem",
      "Revisar histórico de movimentações para auditoria simples"
    ],
    "outcome": "Estoque atualizado com rastreabilidade por movimentação"
  }
} as const;

export default workflowInventoryMovements;
