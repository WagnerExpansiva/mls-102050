/// <mls fileReference="_102050_/l2/cafeFlow/web/contracts/consumeIngredientsOnConfirmation.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "createStockConsumption",
    "purpose": "Registrar consumo de estoque",
    "kind": "command",
    "input": [
      {
        "name": "quantity",
        "type": "number",
        "required": true,
        "description": "Quantidade consumida do ingrediente."
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "enum": [
          "posted",
          "voided"
        ],
        "description": "Situação do evento de consumo (lançado ou estornado)."
      },
      {
        "name": "consumedAt",
        "type": "date",
        "required": true,
        "description": "Data e hora em que o consumo ocorreu."
      }
    ],
    "output": [
      {
        "name": "id",
        "type": "string",
        "description": "Identificador único do evento de consumo de estoque."
      }
    ]
  }
];

export const pipeline = [
  {
    "id": "consumeIngredientsOnConfirmation__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102050_/l2/cafeFlow/web/contracts/consumeIngredientsOnConfirmation.ts",
    "defPath": "_102050_/l2/cafeFlow/web/contracts/consumeIngredientsOnConfirmation.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeContractTs.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
