/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/manageMenuCategories.defs.ts" enhancement="_blank"/>

export const definition = {
  "bffCommands": [
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
  ],
  "navigationRefs": []
};

export const pipeline = [
  {
    "id": "manageMenuCategories__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102050_/l2/cafeFlow/web/shared/manageMenuCategories.ts",
    "defPath": "_102050_/l2/cafeFlow/web/shared/manageMenuCategories.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/contracts/manageMenuCategories.ts"
    ],
    "dependsOn": [],
    "skills": [
      "/_102020_/l2/agentMaterializeSolution/skills/genPageShared.ts"
    ],
    "rulesApplied": [],
    "agent": "agentMaterializeGen"
  }
] as const;
