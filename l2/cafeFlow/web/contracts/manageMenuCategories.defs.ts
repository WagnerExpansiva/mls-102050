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
        "name": "status",
        "type": "string",
        "required": true
      }
    ],
    "output": [
      {
        "name": "menuCategoryId",
        "type": "string"
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
