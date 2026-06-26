/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/manageTables.defs.ts" enhancement="_blank"/>

export const definition = [
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
];

export const pipeline = [
  {
    "id": "manageTables__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102050_/l2/cafeFlow/web/contracts/manageTables.ts",
    "defPath": "_102050_/l2/cafeFlow/web/contracts/manageTables.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentMaterializeSolution/skills/genContract.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
