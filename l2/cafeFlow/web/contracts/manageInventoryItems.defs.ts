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
        "sourceEntity": "InventoryItem",
        "sourceField": "name",
        "required": true,
        "description": "Nome do ingrediente ou insumo"
      },
      {
        "name": "description",
        "type": "string",
        "sourceEntity": "InventoryItem",
        "sourceField": "description",
        "required": false,
        "description": "Descrição detalhada do item",
        "sourceType": "text"
      },
      {
        "name": "unit",
        "type": "string",
        "sourceEntity": "InventoryItem",
        "sourceField": "unit",
        "required": true,
        "description": "Unidade de medida (ex.: kg, L, unidade, gramas)"
      },
      {
        "name": "currentQuantity",
        "type": "number",
        "sourceEntity": "InventoryItem",
        "sourceField": "currentQuantity",
        "required": true,
        "description": "Quantidade atual disponível em estoque"
      },
      {
        "name": "minimumLevel",
        "type": "number",
        "sourceEntity": "InventoryItem",
        "sourceField": "minimumLevel",
        "required": true,
        "description": "Nível mínimo para geração de alerta de baixo estoque"
      },
      {
        "name": "status",
        "type": "string",
        "sourceEntity": "InventoryItem",
        "sourceField": "status",
        "required": true,
        "enum": [
          "active",
          "inactive"
        ],
        "lifecycleStates": [
          "active",
          "inactive"
        ],
        "description": "Estado do ciclo de vida do item"
      }
    ],
    "output": [
      {
        "name": "inventoryItemId",
        "type": "string",
        "sourceEntity": "InventoryItem",
        "sourceField": "inventoryItemId",
        "description": "Identificador único do item de estoque",
        "sourceType": "uuid"
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
