/// <mls fileReference="_102050_/l5/cafeFlow/ontology/StockMovement.defs.ts" enhancement="_blank"/>

export const StockMovementEntityDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "ontologyEntity",
  "artifactId": "StockMovement",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanEntityDefinition",
    "stepId": 42,
    "planId": ""
  },
  "data": {
    "entityDefinition": {
      "entityId": "StockMovement",
      "title": "Movimentação de Estoque",
      "description": "Registro de entrada, saída ou ajuste de estoque, vinculado a um item de estoque e, quando aplicável, a um pedido.",
      "ownership": "moduleOwned",
      "kind": "transaction",
      "fields": [
        {
          "fieldId": "stockMovementId",
          "type": "uuid",
          "required": true,
          "description": "Identificador único da movimentação de estoque."
        },
        {
          "fieldId": "stockItemId",
          "type": "StockItem",
          "required": true,
          "description": "Referência ao item de estoque movimentado."
        },
        {
          "fieldId": "orderId",
          "type": "Order",
          "required": false,
          "description": "Pedido relacionado que consumiu o estoque, quando aplicável."
        },
        {
          "fieldId": "movementType",
          "type": "string",
          "required": true,
          "description": "Tipo de movimentação realizada.",
          "enum": [
            "entrada",
            "saida",
            "ajuste"
          ]
        },
        {
          "fieldId": "quantity",
          "type": "number",
          "required": true,
          "description": "Quantidade movimentada do item de estoque."
        },
        {
          "fieldId": "note",
          "type": "text",
          "required": false,
          "description": "Observação ou motivo da movimentação."
        },
        {
          "fieldId": "occurredAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora em que a movimentação ocorreu."
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
      "rulesApplied": [
        "ruleStockDeductionOnOrderPreparation",
        "ruleStockQuantityNonNegative"
      ]
    }
  }
} as const;

export default StockMovementEntityDefinition;
