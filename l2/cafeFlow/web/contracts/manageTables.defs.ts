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
        "sourceEntity": "Table",
        "sourceField": "tableId",
        "required": false,
        "description": "Identificador único da mesa.",
        "sourceType": "uuid"
      },
      {
        "name": "number",
        "type": "string",
        "sourceEntity": "Table",
        "sourceField": "number",
        "required": true,
        "description": "Número ou identificador da mesa no salão."
      },
      {
        "name": "status",
        "type": "string",
        "sourceEntity": "Table",
        "sourceField": "status",
        "required": true,
        "enum": [
          "available",
          "occupied",
          "disabled"
        ],
        "lifecycleStates": [
          "available",
          "occupied",
          "disabled"
        ],
        "description": "Situação atual da mesa no ciclo de atendimento."
      }
    ],
    "output": [
      {
        "name": "tableId",
        "type": "string",
        "sourceEntity": "Table",
        "sourceField": "tableId",
        "description": "Identificador único da mesa.",
        "sourceType": "uuid"
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
