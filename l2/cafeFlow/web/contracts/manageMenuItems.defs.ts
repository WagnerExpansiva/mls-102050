/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/manageMenuItems.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "manageMenuItems",
    "purpose": "Gerenciar itens do cardápio",
    "kind": "command",
    "input": [
      {
        "name": "menuItemId",
        "type": "string",
        "required": false,
        "description": "Identificador único do item do cardápio"
      },
      {
        "name": "menuCategoryId",
        "type": "string",
        "required": false,
        "description": "Referência à categoria do cardápio à qual o item pertence"
      },
      {
        "name": "name",
        "type": "string",
        "required": true,
        "description": "Nome do item (ex.: cappuccino, pão de queijo)"
      },
      {
        "name": "description",
        "type": "string",
        "required": false,
        "description": "Descrição detalhada do item"
      },
      {
        "name": "price",
        "type": "number",
        "required": true,
        "description": "Preço de venda do item"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "draft",
          "active",
          "inactive"
        ],
        "description": "Estado do ciclo de vida do item"
      }
    ],
    "output": [
      {
        "name": "menuItemId",
        "type": "string",
        "description": "Identificador único do item do cardápio"
      }
    ]
  }
];

export const pipeline = [
  {
    "id": "manageMenuItems__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102050_/l2/cafeFlow/web/contracts/manageMenuItems.ts",
    "defPath": "_102050_/l2/cafeFlow/web/contracts/manageMenuItems.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
