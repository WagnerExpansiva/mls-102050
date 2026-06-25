/// <mls fileReference="_102050_/l5/cafeFlow/ontology/StockItem.defs.ts" enhancement="_blank"/>

export const StockItemEntityDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "ontologyEntity",
  "artifactId": "StockItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanEntityDefinition",
    "stepId": 38,
    "planId": ""
  },
  "data": {
    "entityDefinition": {
      "entityId": "StockItem",
      "title": "Item de Estoque",
      "description": "Insumo controlado em estoque, como café, pão ou leite, com unidade de medida, saldo e ponto de alerta.",
      "ownership": "mdmOwned",
      "kind": "inventory",
      "fields": [
        {
          "fieldId": "stockItemId",
          "type": "uuid",
          "required": true,
          "description": "Identificador único do item de estoque."
        },
        {
          "fieldId": "name",
          "type": "string",
          "required": true,
          "description": "Nome do insumo controlado em estoque."
        },
        {
          "fieldId": "unitOfMeasure",
          "type": "string",
          "required": true,
          "description": "Unidade de medida do item (ex.: kg, l, unidade)."
        },
        {
          "fieldId": "currentQuantity",
          "type": "number",
          "required": true,
          "description": "Quantidade atual disponível em estoque."
        },
        {
          "fieldId": "alertThreshold",
          "type": "number",
          "required": true,
          "description": "Quantidade mínima para disparo de alerta de estoque baixo."
        },
        {
          "fieldId": "status",
          "type": "string",
          "required": true,
          "description": "Status do item de estoque.",
          "enum": [
            "active",
            "inactive"
          ]
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
        "active",
        "inactive"
      ],
      "rulesApplied": [
        "ruleStockDeductionOnOrderPreparation",
        "ruleLowStockAlert",
        "ruleStockQuantityNonNegative"
      ]
    }
  }
} as const;

export default StockItemEntityDefinition;
