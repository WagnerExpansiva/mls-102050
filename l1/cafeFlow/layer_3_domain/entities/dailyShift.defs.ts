/// <mls fileReference="_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.defs.ts" enhancement="_blank"/>

export const dailyShiftDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "DailyShift",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "DailyShift",
    "fields": [
      {
        "fieldId": "dailyShiftId",
        "type": "uuid",
        "required": true,
        "description": "Identificador único do turno diário."
      },
      {
        "fieldId": "shiftDate",
        "type": "date",
        "required": true,
        "description": "Data operacional do turno."
      },
      {
        "fieldId": "status",
        "type": "string",
        "required": true,
        "description": "Estado atual do turno.",
        "enum": [
          "open",
          "closed"
        ]
      },
      {
        "fieldId": "openedAt",
        "type": "datetime",
        "required": true,
        "description": "Data e hora de abertura do turno."
      },
      {
        "fieldId": "closedAt",
        "type": "datetime",
        "required": false,
        "description": "Data e hora de fechamento do turno."
      },
      {
        "fieldId": "openingCashBalance",
        "type": "money",
        "required": false,
        "description": "Valor inicial em caixa ao abrir o turno."
      },
      {
        "fieldId": "closingCashBalance",
        "type": "money",
        "required": false,
        "description": "Valor final em caixa ao fechar o turno."
      },
      {
        "fieldId": "totalSales",
        "type": "money",
        "required": false,
        "description": "Total consolidado de vendas no turno."
      },
      {
        "fieldId": "totalPayments",
        "type": "money",
        "required": false,
        "description": "Total consolidado de pagamentos recebidos no turno."
      },
      {
        "fieldId": "closingNotes",
        "type": "text",
        "required": false,
        "description": "Observações e relatório de fechamento do turno."
      },
      {
        "fieldId": "createdAt",
        "type": "datetime",
        "required": true,
        "description": "Data e hora de criação do registro."
      },
      {
        "fieldId": "updatedAt",
        "type": "datetime",
        "required": true,
        "description": "Data e hora da última atualização do registro."
      }
    ],
    "statusEnum": [
      "open",
      "closed"
    ],
    "invariants": [
      "only one DailyShift per shiftDate may be open at a time",
      "when status is closed, closedAt and closingCashBalance must be set",
      "status can only transition from open to closed",
      "cash movements cannot be added to a closed shift",
      "openingCashBalance must be set when the shift is opened",
      "totalSales and totalPayments are computed from associated orders and payments during the shift"
    ],
    "valueObjects": [
      {
        "name": "CashMovement",
        "fields": [
          {
            "fieldId": "cashMovementId",
            "type": "uuid",
            "required": true,
            "description": "Identificador único do movimento de caixa"
          },
          {
            "fieldId": "dailyShiftId",
            "type": "uuid",
            "required": true,
            "description": "Referência ao turno (DailyShift) ao qual o movimento pertence"
          },
          {
            "fieldId": "movementType",
            "type": "string",
            "required": true,
            "description": "Tipo do movimento: entrada ou saída de caixa",
            "enum": [
              "entrada",
              "saída"
            ]
          },
          {
            "fieldId": "amount",
            "type": "money",
            "required": true,
            "description": "Valor do movimento"
          },
          {
            "fieldId": "reason",
            "type": "string",
            "required": true,
            "description": "Motivo do movimento (ex.: sangria, reforço, estorno)"
          },
          {
            "fieldId": "createdAt",
            "type": "datetime",
            "required": true,
            "description": "Data/hora de criação do registro"
          },
          {
            "fieldId": "updatedAt",
            "type": "datetime",
            "required": true,
            "description": "Data/hora da última atualização do registro"
          }
        ],
        "collection": true
      }
    ]
  }
} as const;

export default dailyShiftDomainEntity;

export const pipeline = [
  {
    "id": "dailyShift__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_4.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
