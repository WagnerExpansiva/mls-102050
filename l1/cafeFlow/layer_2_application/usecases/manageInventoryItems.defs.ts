/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/manageInventoryItems.defs.ts" enhancement="_blank"/>

export const manageInventoryItemsUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "manageInventoryItems",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "manageInventoryItems",
    "ports": [
      "InventoryItem"
    ],
    "functions": [
      {
        "functionName": "updateInventoryItem",
        "inputTypeName": "UpdateInventoryItemInput",
        "outputTypeName": "UpdateInventoryItemOutput",
        "input": [
          {
            "name": "inventoryItemId",
            "type": "string",
            "required": true,
            "ofEntity": "InventoryItem",
            "description": "ID of the inventory item to update"
          },
          {
            "name": "name",
            "type": "string",
            "required": false,
            "ofEntity": "InventoryItem",
            "description": "Updated name of the inventory item"
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "ofEntity": "InventoryItem",
            "description": "Updated description"
          },
          {
            "name": "unit",
            "type": "string",
            "required": false,
            "ofEntity": "InventoryItem",
            "description": "Updated unit of measure"
          },
          {
            "name": "currentQuantity",
            "type": "number",
            "required": false,
            "ofEntity": "InventoryItem",
            "description": "Updated current stock quantity"
          },
          {
            "name": "minimumLevel",
            "type": "number",
            "required": false,
            "ofEntity": "InventoryItem",
            "description": "Updated minimum stock threshold level"
          },
          {
            "name": "status",
            "type": "string",
            "required": false,
            "ofEntity": "InventoryItem",
            "description": "Updated status (active or inactive)"
          }
        ],
        "output": [
          {
            "name": "inventoryItemId",
            "type": "string",
            "required": true,
            "ofEntity": "InventoryItem",
            "description": "ID of the updated inventory item"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Result status of the update operation"
          },
          {
            "name": "lowStockAlert",
            "type": "boolean",
            "required": true,
            "description": "True if currentQuantity fell at or below minimumLevel after update"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "InventoryItem",
            "description": "Timestamp of the update"
          }
        ],
        "ports": [
          "InventoryItem"
        ],
        "rulesApplied": [
          "inventoryLowStockThreshold"
        ],
        "transactional": true,
        "steps": [
          "Load InventoryItem by inventoryItemId via InventoryItem port",
          "Validate that the item exists and is not in a terminal state",
          "Apply provided field changes (name, description, unit, currentQuantity, minimumLevel, status) to the loaded aggregate",
          "Evaluate inventoryLowStockThreshold rule: if currentQuantity <= minimumLevel, set lowStockAlert true",
          "Save the updated InventoryItem aggregate via InventoryItem port",
          "Return inventoryItemId, status, lowStockAlert, and updatedAt"
        ]
      },
      {
        "functionName": "adjustStock",
        "inputTypeName": "AdjustStockInput",
        "outputTypeName": "AdjustStockOutput",
        "input": [
          {
            "name": "inventoryItemId",
            "type": "string",
            "required": true,
            "ofEntity": "InventoryItem",
            "description": "ID of the inventory item whose stock is being adjusted"
          },
          {
            "name": "quantityDelta",
            "type": "number",
            "required": true,
            "description": "Positive value for restock, negative value for consumption"
          }
        ],
        "output": [
          {
            "name": "inventoryItemId",
            "type": "string",
            "required": true,
            "ofEntity": "InventoryItem",
            "description": "ID of the adjusted inventory item"
          },
          {
            "name": "currentQuantity",
            "type": "number",
            "required": true,
            "ofEntity": "InventoryItem",
            "description": "Resulting stock quantity after adjustment"
          },
          {
            "name": "lowStockAlert",
            "type": "boolean",
            "required": true,
            "description": "True if currentQuantity is at or below minimumLevel after adjustment"
          },
          {
            "name": "consumptionTriggered",
            "type": "boolean",
            "required": true,
            "description": "True if ingredient consumption was triggered (negative delta applied)"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "Result status of the stock adjustment"
          }
        ],
        "ports": [
          "InventoryItem"
        ],
        "rulesApplied": [
          "inventoryLowStockThreshold",
          "ingredientConsumptionTrigger"
        ],
        "transactional": true,
        "steps": [
          "Load InventoryItem by inventoryItemId via InventoryItem port",
          "Validate that the item exists and is active",
          "Compute new currentQuantity = currentQuantity + quantityDelta; reject if result would be negative",
          "If quantityDelta < 0, evaluate ingredientConsumptionTrigger rule: mark consumptionTriggered true for downstream ingredient consumption processing",
          "Evaluate inventoryLowStockThreshold rule: if new currentQuantity <= minimumLevel, set lowStockAlert true",
          "Update currentQuantity on the aggregate and save via InventoryItem port",
          "Return inventoryItemId, currentQuantity, lowStockAlert, consumptionTriggered, and status"
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default manageInventoryItemsUsecase;

export const pipeline = [
  {
    "id": "manageInventoryItems__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/manageInventoryItems.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/manageInventoryItems.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/ports/inventoryItemRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/inventoryItem.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
