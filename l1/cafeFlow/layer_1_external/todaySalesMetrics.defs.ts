/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/todaySalesMetrics.defs.ts" enhancement="_blank"/>

export const todaySalesMetricsMetricTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "metricTable",
  "artifactId": "todaySalesMetrics",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanMetricTableDefinition",
    "stepId": 51,
    "planId": ""
  },
  "data": {
    "metricTableDefinition": {
      "metricTableId": "todaySalesMetrics",
      "tableName": "today_sales_metrics",
      "moduleId": "cafeFlow",
      "title": "Vendas de Hoje",
      "purpose": "Consolidar em tempo real o faturamento e o volume de pedidos do turno atual",
      "tableKind": "metricTimeseries",
      "storageEngine": "postgresTimescaleDB",
      "layer": "layer_1_external",
      "timeColumn": "recorded_at",
      "columns": [
        {
          "name": "recorded_at",
          "type": "timestamptz",
          "nullable": false,
          "description": "Data e hora de registro do ponto de métrica"
        },
        {
          "name": "daily_shift_id",
          "type": "uuid",
          "nullable": false,
          "description": "Turno diário relacionado ao pedido"
        },
        {
          "name": "order_id",
          "type": "uuid",
          "nullable": false,
          "description": "Pedido transacional"
        },
        {
          "name": "order_status",
          "type": "varchar(32)",
          "nullable": false,
          "description": "Status atual do pedido"
        },
        {
          "name": "order_item_id",
          "type": "uuid",
          "nullable": false,
          "description": "Item do pedido associado"
        },
        {
          "name": "menu_item_id",
          "type": "uuid",
          "nullable": false,
          "description": "Item do cardápio vendido"
        },
        {
          "name": "total_revenue",
          "type": "numeric(12,2)",
          "nullable": false,
          "default": 0,
          "description": "Receita total dos pedidos"
        },
        {
          "name": "order_count",
          "type": "integer",
          "nullable": false,
          "default": 0,
          "description": "Quantidade de pedidos"
        },
        {
          "name": "items_sold",
          "type": "integer",
          "nullable": false,
          "default": 0,
          "description": "Total de unidades de itens vendidos"
        }
      ],
      "dimensions": [
        {
          "dimensionId": "dailyShiftId",
          "column": "daily_shift_id",
          "type": "uuid",
          "description": "Turno diário relacionado ao pedido"
        },
        {
          "dimensionId": "orderId",
          "column": "order_id",
          "type": "uuid",
          "description": "Pedido transacional"
        },
        {
          "dimensionId": "orderStatus",
          "column": "order_status",
          "type": "string",
          "description": "Status atual do pedido"
        },
        {
          "dimensionId": "orderItemId",
          "column": "order_item_id",
          "type": "uuid",
          "description": "FK dimension derived from ontology relationship OrderHasItems (Order -> OrderItem)"
        },
        {
          "dimensionId": "menuItemId",
          "column": "menu_item_id",
          "type": "uuid",
          "description": "FK dimension derived from ontology relationship OrderItemRefersMenuItem (OrderItem -> MenuItem)"
        }
      ],
      "measures": [
        {
          "measureId": "totalRevenue",
          "column": "total_revenue",
          "aggregation": "sum",
          "unit": "BRL",
          "description": "Receita total dos pedidos"
        },
        {
          "measureId": "orderCount",
          "column": "order_count",
          "aggregation": "sum",
          "unit": "count",
          "description": "Quantidade de pedidos"
        },
        {
          "measureId": "itemsSold",
          "column": "items_sold",
          "aggregation": "sum",
          "unit": "units",
          "description": "Total de unidades de itens vendidos"
        }
      ],
      "sourceWriteEvents": [
        "orderCreated",
        "orderStatusUpdated",
        "orderItemCreated",
        "dailyShiftOpened",
        "dailyShiftClosed"
      ],
      "hypertable": {
        "timeColumn": "recorded_at",
        "chunkTimeInterval": "1 day",
        "retentionPolicy": "30 days",
        "compressionPolicy": "7 days",
        "indexes": [
          {
            "indexName": "idx_today_sales_metrics_recorded_at",
            "columns": [
              "recorded_at"
            ],
            "purpose": "Suporte a consultas por janela temporal no dashboard"
          },
          {
            "indexName": "idx_today_sales_metrics_shift_time",
            "columns": [
              "daily_shift_id",
              "recorded_at"
            ],
            "purpose": "Consultas por turno diário ao longo do tempo"
          },
          {
            "indexName": "idx_today_sales_metrics_order_time",
            "columns": [
              "order_id",
              "recorded_at"
            ],
            "purpose": "Filtrar por pedido ao longo do tempo"
          },
          {
            "indexName": "idx_today_sales_metrics_status_time",
            "columns": [
              "order_status",
              "recorded_at"
            ],
            "purpose": "Filtrar por status do pedido ao longo do tempo"
          },
          {
            "indexName": "idx_today_sales_metrics_item_time",
            "columns": [
              "menu_item_id",
              "recorded_at"
            ],
            "purpose": "Análises por item do cardápio ao longo do tempo"
          }
        ]
      },
      "updatePolicy": {
        "updatedByLayer": "layer_3_usecases",
        "pagesMayUpdate": false,
        "controllersMayUpdate": false
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
        "ruleOrderRequiresOpenShift",
        "ruleOrderStatusFlow",
        "ruleShiftCloseNoOpenOrders"
      ]
    },
    "defsPlan": {
      "fileName": "tables/todaySalesMetrics.defs.ts",
      "exportName": "todaySalesMetricsMetricTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default todaySalesMetricsMetricTableDefinition;
