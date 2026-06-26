/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/consumeIngredientsOnConfirmation.defs.ts" enhancement="_blank"/>

export const definition = {
  "bffCommands": [
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
  ],
  "navigationRefs": []
};

export const pipeline = [
  {
    "id": "consumeIngredientsOnConfirmation__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102050_/l2/cafeFlow/web/shared/consumeIngredientsOnConfirmation.ts",
    "defPath": "_102050_/l2/cafeFlow/web/shared/consumeIngredientsOnConfirmation.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/contracts/consumeIngredientsOnConfirmation.ts"
    ],
    "dependsOn": [],
    "skills": [
      "/_102020_/l2/agentMaterializeSolution/skills/genPageShared.ts"
    ],
    "rulesApplied": [
      "ingredientConsumptionTrigger"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
