/// <mls fileReference="_102050_/l1/cafeFlow/layer_4_entities/stockItem.defs.ts" enhancement="_blank"/>

export const entity = {
  "entityId": "stockItem",
  "title": "Estoque",
  "purpose": "Gerenciar itens de estoque e suas movimentações.",
  "layer": "layer_4_entities",
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
  "ontologyEntities": [
    "StockItem",
    "StockMovement"
  ],
  "sourceTables": [
    {
      "tableName": "stock_item",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "stock_movement",
      "ownership": "moduleOwned"
    }
  ],
  "storage": [
    {
      "kind": "mdm",
      "moduleRef": "102034",
      "entity": "StockItem",
      "domainId": "stock",
      "sourceOfTruth": "102034",
      "governanceRules": [
        "ruleStockDeductionOnOrderPreparation",
        "ruleLowStockAlert",
        "ruleStockQuantityNonNegative"
      ]
    },
    {
      "kind": "moduleTable",
      "tableId": "stockMovement",
      "tableName": "stock_movement",
      "fileRef": "_102050_/l1/cafeFlow/layer_1_external/stockMovement.defs.ts"
    }
  ],
  "allowedOperations": [
    "create",
    "update",
    "read",
    "list"
  ],
  "rulesApplied": [],
  "usecaseRefs": [
    "atualizarStatusPedido",
    "cancelarPedido",
    "gerenciarItemEstoque",
    "listarItensEstoque",
    "registrarMovimentacaoEstoque",
    "listarMovimentacoesEstoque",
    "listarAlertasEstoqueBaixo"
  ],
  "materialization": {
    "fileName": "layer_4_entities/StockItemEntity.ts",
    "className": "StockItemEntity",
    "contractName": "IStockItemEntity"
  }
} as const;

export default entity;
