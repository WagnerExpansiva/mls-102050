/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/topSellingItemsMetrics.defs.ts" enhancement="_blank"/>

export const topSellingItemsMetricsTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "metricTable",
  "artifactId": "topSellingItemsMetrics",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanMetricTableDefinition",
    "stepId": 52,
    "planId": ""
  },
  "data": {
    "metricTableDefinition": {
      "metricTableId": "topSellingItemsMetrics",
      "tableName": "top_selling_items_metrics",
      "moduleId": "cafeFlow",
      "title": "Itens Mais Vendidos",
      "purpose": "Identificar os produtos do cardápio com maior saída e receita em diferentes períodos",
      "tableKind": "metricTimeseries",
      "storageEngine": "postgresTimescaleDB",
      "layer": "layer_1_external",
      "timeColumn": "recorded_at",
      "columns": [
        {
          "name": "recorded_at",
          "type": "timestamptz",
          "nullable": false,
          "description": "Data e hora de registro da métrica"
        },
        {
          "name": "menu_item_id",
          "type": "uuid",
          "nullable": false,
          "description": "Item do cardápio vendido"
        },
        {
          "name": "order_id",
          "type": "uuid",
          "nullable": false,
          "description": "Pedido de origem"
        },
        {
          "name": "menu_category_id",
          "type": "uuid",
          "nullable": false,
          "description": "Categoria do cardápio do item"
        },
        {
          "name": "menu_item_ingredient_id",
          "type": "uuid",
          "nullable": false,
          "description": "Ingrediente do item do cardápio"
        },
        {
          "name": "quantity_sold",
          "type": "integer",
          "nullable": false,
          "default": 0,
          "description": "Quantidade vendida do item"
        },
        {
          "name": "revenue",
          "type": "numeric",
          "nullable": false,
          "default": 0,
          "description": "Receita gerada pelo item"
        },
        {
          "name": "order_count",
          "type": "integer",
          "nullable": false,
          "default": 0,
          "description": "Número de pedidos que continham o item"
        }
      ],
      "dimensions": [
        {
          "dimensionId": "menuItemId",
          "column": "menu_item_id",
          "type": "uuid",
          "description": "Item do cardápio vendido"
        },
        {
          "dimensionId": "orderId",
          "column": "order_id",
          "type": "uuid",
          "description": "Pedido de origem"
        },
        {
          "dimensionId": "menuCategoryId",
          "column": "menu_category_id",
          "type": "uuid",
          "description": "Categoria do cardápio do item"
        },
        {
          "dimensionId": "menuItemIngredientId",
          "column": "menu_item_ingredient_id",
          "type": "uuid",
          "description": "FK dimension derived from ontology relationship MenuItemHasIngredients (MenuItem -> MenuItemIngredient)"
        }
      ],
      "measures": [
        {
          "measureId": "quantitySold",
          "column": "quantity_sold",
          "aggregation": "sum",
          "unit": "units",
          "description": "Quantidade vendida do item"
        },
        {
          "measureId": "revenue",
          "column": "revenue",
          "aggregation": "sum",
          "unit": "BRL",
          "description": "Receita gerada pelo item"
        },
        {
          "measureId": "orderCount",
          "column": "order_count",
          "aggregation": "sum",
          "unit": "count",
          "description": "Número de pedidos que continham o item"
        }
      ],
      "sourceWriteEvents": [
        "orderItemCreated",
        "orderItemCancelled",
        "menuItemUpdated"
      ],
      "hypertable": {
        "timeColumn": "recorded_at",
        "chunkTimeInterval": "1 day",
        "retentionPolicy": "1 ano",
        "compressionPolicy": "30 days",
        "indexes": [
          {
            "indexName": "idx_top_selling_items_metrics_recorded_at",
            "columns": [
              "recorded_at"
            ],
            "purpose": "Acelerar filtros por período na série temporal"
          },
          {
            "indexName": "idx_top_selling_items_metrics_menu_item_id_recorded_at",
            "columns": [
              "menu_item_id",
              "recorded_at"
            ],
            "purpose": "Ranking por item do cardápio em janelas de tempo"
          },
          {
            "indexName": "idx_top_selling_items_metrics_order_id",
            "columns": [
              "order_id"
            ],
            "purpose": "Rastrear métricas por pedido de origem"
          },
          {
            "indexName": "idx_top_selling_items_metrics_menu_category_id",
            "columns": [
              "menu_category_id"
            ],
            "purpose": "Análises por categoria do cardápio"
          },
          {
            "indexName": "idx_top_selling_items_metrics_menu_item_ingredient_id",
            "columns": [
              "menu_item_ingredient_id"
            ],
            "purpose": "Análises por ingrediente associado ao item"
          }
        ]
      },
      "updatePolicy": {
        "updatedByLayer": "layer_3_usecases",
        "pagesMayUpdate": false,
        "controllersMayUpdate": false,
        "usecaseRefs": [
          "usecaseEntityCreateOrder",
          "usecaseEntityCancelOrder",
          "usecaseEntityManageMenuItem"
        ]
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
        "ruleMenuItemPricePositive"
      ]
    },
    "defsPlan": {
      "fileName": "tables/topSellingItemsMetrics.defs.ts",
      "exportName": "topSellingItemsMetricsTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default topSellingItemsMetricsTableDefinition;
