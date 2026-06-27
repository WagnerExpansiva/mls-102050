/// <mls fileReference="_102050_/l4/workflows/consumeIngredientsOnConfirmation.defs.ts" enhancement="_blank"/>

export const workflowConsumeIngredientsOnConfirmation = {
  "workflowId": "consumeIngredientsOnConfirmation",
  "title": "Baixar estoque por consumo de ingredientes",
  "executionMode": "sequential",
  "trigger": "attendant confirma pedido",
  "actors": [
    "attendant"
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
      "by": "attendant"
    }
  ],
  "operationIds": [
    "createStockConsumption"
  ],
  "entities": [
    "StockConsumption",
    "OrderItem",
    "InventoryItem",
    "RecipeComponent"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "attendant",
    "goal": "registrar consumo de ingredientes ao confirmar pedido",
    "steps": [
      "confirmar pedido",
      "sistema calcula ingredientes por receita",
      "registrar consumo no estoque"
    ],
    "outcome": "estoque consumido automaticamente por pedido confirmado"
  },
  "capabilities": [
    {
      "capabilityId": "consumeIngredientsOnConfirmation",
      "title": "Baixar estoque por consumo de ingredientes",
      "actor": "attendant",
      "priority": "now"
    }
  ],
  "statusFrontend": "toCreate",
  "statusBackend": "done"
} as const;

export default workflowConsumeIngredientsOnConfirmation;
