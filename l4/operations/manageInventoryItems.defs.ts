/// <mls fileReference="_102050_/l4/operations/manageInventoryItems.defs.ts" enhancement="_blank"/>

export const operationManageInventoryItems = {
  "operationId": "manageInventoryItems",
  "title": "Gerenciar itens de estoque (ingredientes)",
  "actor": "manager",
  "entity": "InventoryItem",
  "kind": "update",
  "reads": [
    "InventoryItem"
  ],
  "writes": [
    "InventoryItem",
    "InventoryItem.name",
    "InventoryItem.description",
    "InventoryItem.unit",
    "InventoryItem.currentQuantity",
    "InventoryItem.minimumLevel",
    "InventoryItem.status"
  ],
  "rulesApplied": [
    "inventoryLowStockThreshold",
    "ingredientConsumptionTrigger"
  ],
  "story": {
    "actor": "manager",
    "goal": "manter ingredientes de estoque atualizados",
    "steps": [
      "abrir cadastro de estoque",
      "criar, editar ou desativar itens",
      "salvar alterações"
    ],
    "outcome": "itens de estoque atualizados"
  },
  "capability": {
    "capabilityId": "manageInventoryItems",
    "title": "Gerenciar itens de estoque (ingredientes)",
    "actor": "manager",
    "priority": "now"
  },
  "statusFrontend": "done",
  "statusBackend": "toCreate"
} as const;

export default operationManageInventoryItems;
