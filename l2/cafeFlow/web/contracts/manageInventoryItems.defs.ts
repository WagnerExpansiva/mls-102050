/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/manageInventoryItems.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "manageInventoryItems",
    "purpose": "Gerenciar itens de estoque (ingredientes)",
    "kind": "command",
    "input": [
      {
        "name": "name",
        "type": "string",
        "required": true
      },
      {
        "name": "description",
        "type": "string",
        "required": false
      },
      {
        "name": "unit",
        "type": "string",
        "required": true
      },
      {
        "name": "currentQuantity",
        "type": "number",
        "required": true
      },
      {
        "name": "minimumLevel",
        "type": "number",
        "required": true
      },
      {
        "name": "status",
        "type": "string",
        "required": true
      }
    ],
    "output": [
      {
        "name": "inventoryItemId",
        "type": "string"
      }
    ],
    "readsEntities": [
      "InventoryItem"
    ],
    "writesEntities": [
      "InventoryItem"
    ],
    "readsTables": [],
    "writesTables": [],
    "usecaseRefs": [
      "manageInventoryItems"
    ],
    "layerContract": {
      "controllerLayer": "layer_2_controllers",
      "mustCallLayer": "layer_3_usecases",
      "directTableAccessForbidden": true
    },
    "rulesApplied": [
      "inventoryLowStockThreshold",
      "ingredientConsumptionTrigger"
    ]
  }
];

export const pipeline = [
  {
    "id": "manageInventoryItems__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102050_/l2/cafeFlow/web/contracts/manageInventoryItems.ts",
    "defPath": "_102050_/l2/cafeFlow/web/contracts/manageInventoryItems.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentMaterializeSolution/skills/genContract.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
