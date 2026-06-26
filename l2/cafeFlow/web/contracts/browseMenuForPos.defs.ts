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
        "sourceEntity": "MenuItem",
        "sourceField": "menuItemId",
        "required": false,
        "description": "Identificador único do item do cardápio",
        "sourceType": "uuid"
      },
      {
        "name": "menuCategoryId",
        "type": "string",
        "sourceEntity": "MenuItem",
        "sourceField": "menuCategoryId",
        "required": false,
        "description": "Referência à categoria do cardápio à qual o item pertence",
        "sourceType": "uuid"
      },
      {
        "name": "name",
        "type": "string",
        "sourceEntity": "MenuItem",
        "sourceField": "name",
        "required": false,
        "description": "Nome do item (ex.: cappuccino, pão de queijo)"
      },
      {
        "name": "status",
        "type": "string",
        "sourceEntity": "MenuItem",
        "sourceField": "status",
        "required": false,
        "enum": [
          "draft",
          "active",
          "inactive"
        ],
        "lifecycleStates": [
          "draft",
          "active",
          "inactive"
        ],
        "description": "Estado do ciclo de vida do item"
      },
      {
        "name": "createdAt",
        "type": "date",
        "sourceEntity": "MenuItem",
        "sourceField": "createdAt",
        "required": false,
        "description": "Data e hora de criação do registro",
        "sourceType": "datetime"
      },
      {
        "name": "updatedAt",
        "type": "date",
        "sourceEntity": "MenuItem",
        "sourceField": "updatedAt",
        "required": false,
        "description": "Data e hora da última atualização do registro",
        "sourceType": "datetime"
      }
    ],
    "output": [
      {
        "name": "menuItemId",
        "type": "string",
        "sourceEntity": "MenuItem",
        "sourceField": "menuItemId",
        "description": "Identificador único do item do cardápio",
        "sourceType": "uuid"
      },
      {
        "name": "menuCategoryId",
        "type": "string",
        "sourceEntity": "MenuItem",
        "sourceField": "menuCategoryId",
        "description": "Referência à categoria do cardápio à qual o item pertence",
        "sourceType": "uuid"
      },
      {
        "name": "name",
        "type": "string",
        "sourceEntity": "MenuItem",
        "sourceField": "name",
        "description": "Nome do item (ex.: cappuccino, pão de queijo)"
      },
      {
        "name": "description",
        "type": "string",
        "sourceEntity": "MenuItem",
        "sourceField": "description",
        "description": "Descrição detalhada do item",
        "sourceType": "text"
      },
      {
        "name": "price",
        "type": "number",
        "sourceEntity": "MenuItem",
        "sourceField": "price",
        "description": "Preço de venda do item",
        "sourceType": "money"
      },
      {
        "name": "status",
        "type": "string",
        "sourceEntity": "MenuItem",
        "sourceField": "status",
        "enum": [
          "draft",
          "active",
          "inactive"
        ],
        "lifecycleStates": [
          "draft",
          "active",
          "inactive"
        ],
        "description": "Estado do ciclo de vida do item"
      },
      {
        "name": "createdAt",
        "type": "date",
        "sourceEntity": "MenuItem",
        "sourceField": "createdAt",
        "description": "Data e hora de criação do registro",
        "sourceType": "datetime"
      },
      {
        "name": "updatedAt",
        "type": "date",
        "sourceEntity": "MenuItem",
        "sourceField": "updatedAt",
        "description": "Data e hora da última atualização do registro",
        "sourceType": "datetime"
      }
    ],
    "readsEntities": [
      "MenuItem",
      "MenuCategory"
    ],
    "writesEntities": [],
    "readsTables": [],
    "writesTables": [],
    "usecaseRefs": [
      "browseMenuForPos"
    ],
    "layerContract": {
      "controllerLayer": "layer_2_controllers",
      "mustCallLayer": "layer_3_usecases",
      "directTableAccessForbidden": true
    },
    "rulesApplied": [
      "aiOutputLanguageSelection"
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
      "_102020_/l2/agentMaterializeSolution/skills/genContract.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
