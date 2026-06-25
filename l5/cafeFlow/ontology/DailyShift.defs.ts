/// <mls fileReference="_102050_/l5/cafeFlow/ontology/DailyShift.defs.ts" enhancement="_blank"/>

export const DailyShiftEntityDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "ontologyEntity",
  "artifactId": "DailyShift",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanEntityDefinition",
    "stepId": 38,
    "planId": ""
  },
  "data": {
    "entityDefinition": {
      "entityId": "DailyShift",
      "title": "Turno Diário",
      "description": "Período operacional diário que delimita quando a loja está aberta para vendas, servindo de base para fechamento e relatórios.",
      "ownership": "mdmOwned",
      "kind": "calendar",
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
          "description": "Data do turno diário (referência do dia de operação)."
        },
        {
          "fieldId": "status",
          "type": "string",
          "required": true,
          "description": "Status atual do turno diário.",
          "enum": [
            "open",
            "closed"
          ]
        },
        {
          "fieldId": "createdAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora de criação do turno diário."
        },
        {
          "fieldId": "updatedAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora da última atualização do turno diário."
        }
      ],
      "statusEnum": [
        "open",
        "closed"
      ],
      "lifecycleStates": [
        "open",
        "closed"
      ],
      "rulesApplied": [
        "ruleShiftCloseNoOpenOrders",
        "ruleUniqueOpenShiftPerDay"
      ]
    }
  }
} as const;

export default DailyShiftEntityDefinition;
