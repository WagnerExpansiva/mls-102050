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
        "required": false
      },
      {
        "name": "menuCategoryId",
        "type": "string",
        "required": false
      },
      {
        "name": "name",
        "type": "string",
        "required": true
      },
      {
        "name": "description",
        "type": "string",
        "required": false
      },
      {
        "name": "price",
        "type": "number",
        "required": true
      },
      {
        "name": "status",
        "type": "string",
        "required": true
      }
    ],
    "output": [
      {
        "name": "menuItemId",
        "type": "string"
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
