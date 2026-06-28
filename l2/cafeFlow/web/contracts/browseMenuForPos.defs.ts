/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/browseMenuForPos.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "browseMenuForPos",
    "purpose": "Consultar cardápio no POS",
    "kind": "query",
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
        "required": false,
        "description": "Nome do item (ex.: cappuccino, pão de queijo)"
      },
      {
        "name": "status",
        "type": "string",
        "required": false,
        "enum": [
          "draft",
          "active",
          "inactive"
        ],
        "description": "Estado do ciclo de vida do item"
      },
      {
        "name": "createdAt",
        "type": "date",
        "required": false,
        "description": "Data e hora de criação do registro"
      },
      {
        "name": "updatedAt",
        "type": "date",
        "required": false,
        "description": "Data e hora da última atualização do registro"
      }
    ],
    "output": [
      {
        "name": "menuItemId",
        "type": "string",
        "description": "Identificador único do item do cardápio"
      },
      {
        "name": "menuCategoryId",
        "type": "string",
        "description": "Referência à categoria do cardápio à qual o item pertence"
      },
      {
        "name": "name",
        "type": "string",
        "description": "Nome do item (ex.: cappuccino, pão de queijo)"
      },
      {
        "name": "description",
        "type": "string",
        "description": "Descrição detalhada do item"
      },
      {
        "name": "price",
        "type": "number",
        "description": "Preço de venda do item"
      },
      {
        "name": "status",
        "type": "string",
        "enum": [
          "draft",
          "active",
          "inactive"
        ],
        "description": "Estado do ciclo de vida do item"
      },
      {
        "name": "createdAt",
        "type": "date",
        "description": "Data e hora de criação do registro"
      },
      {
        "name": "updatedAt",
        "type": "date",
        "description": "Data e hora da última atualização do registro"
      }
    ]
  }
];

export const pipeline = [
  {
    "id": "browseMenuForPos__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102050_/l2/cafeFlow/web/contracts/browseMenuForPos.ts",
    "defPath": "_102050_/l2/cafeFlow/web/contracts/browseMenuForPos.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
