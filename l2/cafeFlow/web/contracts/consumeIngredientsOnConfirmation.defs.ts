/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/consumeIngredientsOnConfirmation.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "createStockConsumption",
    "purpose": "Registrar consumo de estoque",
    "kind": "command",
    "input": [
      {
        "name": "quantity",
        "type": "number",
        "required": true
      },
      {
        "name": "status",
        "type": "string",
        "required": true
      },
      {
        "name": "consumedAt",
        "type": "date",
        "required": true
      }
    ],
    "output": [
      {
        "name": "id",
        "type": "string"
      }
    ],
    "readsEntities": [
      "StockConsumption",
      "Order",
      "OrderItem",
      "MenuItem",
      "RecipeComponent",
      "InventoryItem"
    ],
    "writesEntities": [
      "StockConsumption",
      "InventoryItem"
    ],
    "readsTables": [],
    "writesTables": [],
    "usecaseRefs": [
      "createStockConsumption"
    ],
    "layerContract": {
      "controllerLayer": "layer_2_controllers",
      "mustCallLayer": "layer_3_usecases",
      "directTableAccessForbidden": true
    },
    "rulesApplied": [
      "ingredientConsumptionTrigger"
    ]
  }
];

export const pipeline = [
  {
    "id": "consumeIngredientsOnConfirmation__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102050_/l2/cafeFlow/web/contracts/consumeIngredientsOnConfirmation.ts",
    "defPath": "_102050_/l2/cafeFlow/web/contracts/consumeIngredientsOnConfirmation.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentMaterializeSolution/skills/genContract.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
