/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/manageMenuItems.defs.ts" enhancement="_blank"/>

export const definition = {
  "bffCommands": [
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
  ],
  "navigationRefs": []
};

export const pipeline = [
  {
    "id": "manageMenuItems__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102050_/l2/cafeFlow/web/shared/manageMenuItems.ts",
    "defPath": "_102050_/l2/cafeFlow/web/shared/manageMenuItems.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/contracts/manageMenuItems.ts"
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
