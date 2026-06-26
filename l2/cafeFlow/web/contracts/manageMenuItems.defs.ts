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
        "required": true,
        "description": "Nome do item (ex.: cappuccino, pão de queijo)"
      },
      {
        "name": "description",
        "type": "string",
        "sourceEntity": "MenuItem",
        "sourceField": "description",
        "required": false,
        "description": "Descrição detalhada do item",
        "sourceType": "text"
      },
      {
        "name": "price",
        "type": "number",
        "sourceEntity": "MenuItem",
        "sourceField": "price",
        "required": true,
        "description": "Preço de venda do item",
        "sourceType": "money"
      },
      {
        "name": "status",
        "type": "string",
        "sourceEntity": "MenuItem",
        "sourceField": "status",
        "required": true,
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
      }
    ],
    "readsEntities": [
      "MenuItem",
      "MenuCategory"
    ],
    "writesEntities": [
      "MenuItem"
    ],
    "readsTables": [],
    "writesTables": [],
    "usecaseRefs": [
      "manageMenuItems"
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
    "id": "manageMenuItems__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102050_/l2/cafeFlow/web/contracts/manageMenuItems.ts",
    "defPath": "_102050_/l2/cafeFlow/web/contracts/manageMenuItems.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentMaterializeSolution/skills/genContract.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
