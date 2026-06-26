/// <mls fileReference="_102050_/l4/operations/createStockConsumption.defs.ts" enhancement="_blank"/>

export const operationCreateStockConsumption = {
  "operationId": "createStockConsumption",
  "title": "Registrar consumo de estoque",
  "actor": "attendant",
  "entity": "StockConsumption",
  "kind": "create",
  "reads": [
    "Order",
    "OrderItem",
    "MenuItem",
    "RecipeComponent",
    "InventoryItem"
  ],
  "writes": [
    "StockConsumption",
    "InventoryItem"
  ],
  "rulesApplied": [
    "ingredientConsumptionTrigger"
  ],
  "story": {
    "actor": "attendant",
    "goal": "baixar ingredientes consumidos",
    "steps": [
      "confirmar pedido",
      "verificar itens e receitas",
      "registrar consumo no estoque"
    ],
    "outcome": "consumo de estoque registrado"
  },
  "capability": {
    "capabilityId": "consumeIngredientsOnConfirmation",
    "title": "Baixar estoque por consumo de ingredientes",
    "actor": "attendant",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationCreateStockConsumption;
