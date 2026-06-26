/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/manageTables.defs.ts" enhancement="_blank"/>

export const definition = {
  "bffCommands": [
    {
      "commandName": "manageTables",
      "purpose": "Gerenciar mesas",
      "kind": "command",
      "input": [
        {
          "name": "tableId",
          "type": "string",
          "required": false
        },
        {
          "name": "number",
          "type": "string",
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
          "name": "tableId",
          "type": "string"
        }
      ],
      "readsEntities": [
        "Table"
      ],
      "writesEntities": [
        "Table"
      ],
      "readsTables": [],
      "writesTables": [],
      "usecaseRefs": [
        "manageTables"
      ],
      "layerContract": {
        "controllerLayer": "layer_2_controllers",
        "mustCallLayer": "layer_3_usecases",
        "directTableAccessForbidden": true
      },
      "rulesApplied": [
        "tableOccupancyConsistency"
      ]
    }
  ],
  "navigationRefs": []
};

export const pipeline = [
  {
    "id": "manageTables__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102050_/l2/cafeFlow/web/shared/manageTables.ts",
    "defPath": "_102050_/l2/cafeFlow/web/shared/manageTables.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/contracts/manageTables.ts"
    ],
    "dependsOn": [],
    "skills": [
      "/_102020_/l2/agentMaterializeSolution/skills/genPageShared.ts"
    ],
    "rulesApplied": [
      "tableOccupancyConsistency"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
