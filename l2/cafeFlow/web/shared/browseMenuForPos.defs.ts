/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/browseMenuForPos.defs.ts" enhancement="_blank"/>

export const definition = {
  "bffCommands": [
    {
      "commandName": "browseMenuForPos",
      "purpose": "Consultar cardápio no POS",
      "kind": "query",
      "input": [
        {
          "name": "menuCategoryId",
          "type": "string",
          "required": false
        },
        {
          "name": "name",
          "type": "string",
          "required": false
        },
        {
          "name": "status",
          "type": "string",
          "required": false
        }
      ],
      "output": [
        {
          "name": "menuItemId",
          "type": "string"
        },
        {
          "name": "menuCategoryId",
          "type": "string"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "price",
          "type": "number"
        },
        {
          "name": "status",
          "type": "string"
        },
        {
          "name": "createdAt",
          "type": "date"
        },
        {
          "name": "updatedAt",
          "type": "date"
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
  ],
  "navigationRefs": []
};

export const pipeline = [
  {
    "id": "browseMenuForPos__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102050_/l2/cafeFlow/web/shared/browseMenuForPos.ts",
    "defPath": "_102050_/l2/cafeFlow/web/shared/browseMenuForPos.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/contracts/browseMenuForPos.ts"
    ],
    "dependsOn": [],
    "skills": [
      "/_102020_/l2/agentMaterializeSolution/skills/genPageShared.ts"
    ],
    "rulesApplied": [
      "aiOutputLanguageSelection"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
