/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/stockMovement.defs.ts" enhancement="_blank"/>

export const stockMovementTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "table",
  "artifactId": "stockMovement",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanTableDefinition",
    "stepId": 49,
    "planId": ""
  },
  "data": {
    "tableDefinition": {
      "tableId": "stockMovement",
      "tableName": "stock_movement",
      "moduleId": "cafeFlow",
      "title": "Movimentações de Estoque",
      "purpose": "Registrar entradas e saídas de estoque vinculadas a operações e ajustes manuais.",
      "ownership": "moduleOwned",
      "rootEntity": "StockMovement",
      "layer": "layer_1_external",
      "tableKind": "transactional",
      "columns": [
        {
          "name": "stock_movement_id",
          "type": "uuid",
          "nullable": false,
          "primaryKey": true,
          "description": "Identificador único da movimentação de estoque."
        },
        {
          "name": "stock_item_id",
          "type": "uuid",
          "nullable": false,
          "description": "Referência ao item de estoque movimentado."
        },
        {
          "name": "order_id",
          "type": "uuid",
          "nullable": true,
          "description": "Pedido relacionado que consumiu o estoque, quando aplicável."
        },
        {
          "name": "movement_type",
          "type": "varchar",
          "nullable": false,
          "description": "Tipo de movimentação realizada (entrada, saida, ajuste)."
        },
        {
          "name": "quantity",
          "type": "decimal",
          "nullable": false,
          "description": "Quantidade movimentada do item de estoque."
        },
        {
          "name": "note",
          "type": "text",
          "nullable": true,
          "description": "Observação ou motivo da movimentação."
        },
        {
          "name": "movement_status",
          "type": "varchar",
          "nullable": false,
          "default": "ativo",
          "description": "Status da movimentação para controle de ciclo de vida."
        },
        {
          "name": "occurred_at",
          "type": "timestamptz",
          "nullable": false,
          "description": "Data e hora em que a movimentação ocorreu."
        },
        {
          "name": "created_at",
          "type": "timestamptz",
          "nullable": false,
          "description": "Data e hora de criação do registro."
        },
        {
          "name": "updated_at",
          "type": "timestamptz",
          "nullable": false,
          "description": "Data e hora da última atualização do registro."
        }
      ],
      "primaryKey": [
        "stock_movement_id"
      ],
      "foreignRefs": [
        {
          "fieldName": "stock_item_id",
          "targetEntity": "StockItem",
          "targetOwnership": "mdmOwned",
          "reason": "Movimentação vinculada ao item de estoque."
        },
        {
          "fieldName": "order_id",
          "targetEntity": "Order",
          "targetOwnership": "mdmOwned",
          "reason": "Movimentação associada a pedido quando houver consumo de estoque."
        }
      ],
      "indexes": [
        {
          "indexName": "idx_stock_movement_stock_item_id_occurred_at",
          "columns": [
            "stock_item_id",
            "occurred_at"
          ],
          "unique": false,
          "reason": "Listagem de movimentações por item e data."
        },
        {
          "indexName": "idx_stock_movement_order_id",
          "columns": [
            "order_id"
          ],
          "unique": false,
          "reason": "Consulta de movimentações ligadas a um pedido."
        },
        {
          "indexName": "idx_stock_movement_movement_type",
          "columns": [
            "movement_type"
          ],
          "unique": false,
          "reason": "Filtros por tipo de movimentação em relatórios e ajustes."
        },
        {
          "indexName": "idx_stock_movement_occurred_at",
          "columns": [
            "occurred_at"
          ],
          "unique": false,
          "reason": "Filtros por período no gerenciamento de estoque."
        }
      ],
      "detailsColumn": {
        "enabled": false
      },
      "metricUpdatePolicy": {
        "feedsMetrics": true,
        "metricRefs": [],
        "updatedByLayer": "layer_3_usecases"
      },
      "accessPolicy": {
        "directAccessAllowedFor": [
          "layer_3_usecases"
        ],
        "forbiddenFor": [
          "pages",
          "layer_2_controllers",
          "agents"
        ]
      },
      "rulesApplied": [
        "ruleStockQuantityNonNegative",
        "ruleLowStockAlert"
      ]
    },
    "defsPlan": {
      "fileName": "tables/stockMovement.defs.ts",
      "exportName": "stockMovementTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default stockMovementTableDefinition;
