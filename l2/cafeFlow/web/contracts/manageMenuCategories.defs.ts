/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/manageMenuCategories.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "manageMenuCategories",
    "purpose": "Gerenciar categorias do cardápio",
    "kind": "command",
    "input": [
      {
        "name": "menuCategoryId",
        "type": "string",
        "required": false,
        "description": "Identificador único da categoria de cardápio"
      },
      {
        "name": "name",
        "type": "string",
        "required": true,
        "description": "Nome da categoria exibido no POS e relatórios (ex.: Cafés, Salgados, Doces)"
      },
      {
        "name": "description",
        "type": "string",
        "required": false,
        "description": "Descrição opcional da categoria para uso interno ou detalhamento"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "active",
          "inactive"
        ],
        "description": "Estado do ciclo de vida da categoria"
      }
    ],
    "output": [
      {
        "name": "menuCategoryId",
        "type": "string",
        "description": "Identificador único da categoria de cardápio"
      }
    ]
  }
];

export const pipeline = [
  {
    "id": "manageMenuCategories__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102050_/l2/cafeFlow/web/contracts/manageMenuCategories.ts",
    "defPath": "_102050_/l2/cafeFlow/web/contracts/manageMenuCategories.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
