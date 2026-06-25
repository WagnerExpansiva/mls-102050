/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/orderItem.defs.ts" enhancement="_blank"/>

export const orderItemTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "table",
  "artifactId": "orderItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanTableDefinition",
    "stepId": 48,
    "planId": ""
  },
  "data": {
    "tableDefinition": {
      "tableId": "orderItem",
      "tableName": "order_item",
      "moduleId": "cafeFlow",
      "title": "Itens do Pedido",
      "purpose": "Persistir os itens associados a cada pedido para preparo e acompanhamento da cozinha.",
      "ownership": "moduleOwned",
      "rootEntity": "OrderItem",
      "layer": "layer_1_external",
      "tableKind": "transactional",
      "columns": [
        {
          "name": "order_item_id",
          "type": "uuid",
          "nullable": false,
          "primaryKey": true,
          "description": "Identificador único do item do pedido."
        },
        {
          "name": "order_id",
          "type": "uuid",
          "nullable": false,
          "description": "Referência ao pedido ao qual este item pertence."
        },
        {
          "name": "menu_item_id",
          "type": "uuid",
          "nullable": false,
          "description": "Referência ao item do cardápio selecionado."
        },
        {
          "name": "item_status",
          "type": "varchar(32)",
          "nullable": false,
          "default": "recebido",
          "description": "Status do item para preparo na cozinha."
        },
        {
          "name": "quantity",
          "type": "integer",
          "nullable": false,
          "description": "Quantidade solicitada do item do cardápio."
        },
        {
          "name": "unit_price",
          "type": "decimal(10,2)",
          "nullable": false,
          "description": "Preço unitário do item no momento do pedido."
        },
        {
          "name": "notes",
          "type": "text",
          "nullable": true,
          "description": "Observações ou modificações solicitadas para este item do pedido."
        },
        {
          "name": "created_at",
          "type": "datetime",
          "nullable": false,
          "description": "Data e hora de criação do registro."
        },
        {
          "name": "updated_at",
          "type": "datetime",
          "nullable": false,
          "description": "Data e hora da última atualização do registro."
        }
      ],
      "primaryKey": [
        "order_item_id"
      ],
      "foreignRefs": [
        {
          "fieldName": "order_id",
          "targetEntity": "Order",
          "targetOwnership": "mdmOwned",
          "reason": "Item pertence a um pedido MDM."
        },
        {
          "fieldName": "menu_item_id",
          "targetEntity": "MenuItem",
          "targetOwnership": "mdmOwned",
          "reason": "Item aponta para item do cardápio MDM."
        }
      ],
      "indexes": [
        {
          "indexName": "idx_order_item_order_id",
          "columns": [
            "order_id"
          ],
          "reason": "Buscar itens por pedido no acompanhamento e na cozinha."
        },
        {
          "indexName": "idx_order_item_menu_item_id",
          "columns": [
            "menu_item_id"
          ],
          "reason": "Relatórios e consistência por item do cardápio."
        },
        {
          "indexName": "idx_order_item_status",
          "columns": [
            "item_status"
          ],
          "reason": "Filtrar itens por status de preparo."
        },
        {
          "indexName": "idx_order_item_created_at",
          "columns": [
            "created_at"
          ],
          "reason": "Filtro por período em listagens de pedidos."
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
        "ruleOrderStatusFlow",
        "ruleStockDeductionOnOrderPreparation"
      ]
    },
    "defsPlan": {
      "fileName": "tables/orderItem.defs.ts",
      "exportName": "orderItemTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default orderItemTableDefinition;
