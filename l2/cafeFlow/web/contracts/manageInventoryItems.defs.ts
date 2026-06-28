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
        "required": true,
        "description": "Nome do ingrediente ou insumo"
      },
      {
        "name": "description",
        "type": "string",
        "required": false,
        "description": "Descrição detalhada do item"
      },
      {
        "name": "unit",
        "type": "string",
        "required": true,
        "description": "Unidade de medida (ex.: kg, L, unidade, gramas)"
      },
      {
        "name": "currentQuantity",
        "type": "number",
        "required": true,
        "description": "Quantidade atual disponível em estoque"
      },
      {
        "name": "minimumLevel",
        "type": "number",
        "required": true,
        "description": "Nível mínimo para geração de alerta de baixo estoque"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
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
        "description": "Identificador único do item de estoque"
      }
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
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
