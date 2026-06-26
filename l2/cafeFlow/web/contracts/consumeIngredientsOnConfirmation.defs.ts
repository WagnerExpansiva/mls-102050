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
        "sourceEntity": "StockConsumption",
        "sourceField": "quantity",
        "required": true,
        "description": "Quantidade consumida do ingrediente."
      },
      {
        "name": "status",
        "type": "string",
        "sourceEntity": "StockConsumption",
        "sourceField": "status",
        "required": true,
        "enum": [
          "posted",
          "voided"
        ],
        "description": "Situação do evento de consumo (lançado ou estornado)."
      },
      {
        "name": "consumedAt",
        "type": "date",
        "sourceEntity": "StockConsumption",
        "sourceField": "consumedAt",
        "required": true,
        "description": "Data e hora em que o consumo ocorreu.",
        "sourceType": "datetime"
      }
    ],
    "output": [
      {
        "name": "id",
        "type": "string",
        "sourceEntity": "StockConsumption",
        "sourceField": "id",
        "description": "Identificador único do evento de consumo de estoque.",
        "sourceType": "uuid"
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
