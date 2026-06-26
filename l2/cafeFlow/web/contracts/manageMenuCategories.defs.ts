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
        "sourceEntity": "MenuCategory",
        "sourceField": "menuCategoryId",
        "required": false,
        "description": "Identificador único da categoria de cardápio",
        "sourceType": "uuid"
      },
      {
        "name": "name",
        "type": "string",
        "sourceEntity": "MenuCategory",
        "sourceField": "name",
        "required": true,
        "description": "Nome da categoria exibido no POS e relatórios (ex.: Cafés, Salgados, Doces)"
      },
      {
        "name": "description",
        "type": "string",
        "sourceEntity": "MenuCategory",
        "sourceField": "description",
        "required": false,
        "description": "Descrição opcional da categoria para uso interno ou detalhamento",
        "sourceType": "text"
      },
      {
        "name": "status",
        "type": "string",
        "sourceEntity": "MenuCategory",
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
        "description": "Estado do ciclo de vida da categoria"
      }
    ],
    "output": [
      {
        "name": "menuCategoryId",
        "type": "string",
        "sourceEntity": "MenuCategory",
        "sourceField": "menuCategoryId",
        "description": "Identificador único da categoria de cardápio",
        "sourceType": "uuid"
      }
    ],
    "readsEntities": [
      "MenuCategory"
    ],
    "writesEntities": [
      "MenuCategory"
    ],
    "readsTables": [],
    "writesTables": [],
    "usecaseRefs": [
      "manageMenuCategories"
    ],
    "layerContract": {
      "controllerLayer": "layer_2_controllers",
      "mustCallLayer": "layer_3_usecases",
      "directTableAccessForbidden": true
    },
    "rulesApplied": []
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
      "_102020_/l2/agentMaterializeSolution/skills/genContract.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
