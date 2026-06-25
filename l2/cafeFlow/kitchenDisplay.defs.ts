/// <mls fileReference="_102050_/l2/cafeFlow/kitchenDisplay.defs.ts" enhancement="_blank"/>

export const kitchenDisplayPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "kitchenDisplay",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 72,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "kitchenDisplay",
      "pageName": "Display da Cozinha",
      "actor": "cook",
      "purpose": "Acompanhar fila de pedidos e atualizar status de preparo.",
      "capabilities": [
        "updateKitchenStatus"
      ],
      "flowRefs": {
        "experienceFlows": [],
        "entityLifecycles": [],
        "taskWorkflows": [
          "workflowOrderLifecycle"
        ],
        "automations": []
      },
      "pluginRefs": [],
      "mdmRefs": [
        "order",
        "stock"
      ],
      "pageInputs": [],
      "navigationRefs": [
        {
          "direction": "inbound",
          "pageId": "posOrder",
          "trigger": "Pedido enviado à cozinha",
          "description": "Entrada quando um pedido é enviado do POS."
        }
      ],
      "sections": [
        {
          "sectionName": "Fila de pedidos",
          "mode": "view",
          "organisms": [
            {
              "organismName": "Lista de pedidos em andamento",
              "purpose": "Exibir pedidos recebidos e em preparo com itens para a cozinha.",
              "userActions": [
                "Ver detalhes do pedido",
                "Filtrar por status",
                "Atualização automática da fila"
              ],
              "requiredEntities": [
                "Order",
                "OrderItem"
              ],
              "readsFields": [
                "Order.orderId",
                "Order.status",
                "Order.createdAt",
                "OrderItem.name",
                "OrderItem.quantity",
                "OrderItem.notes"
              ],
              "writesFields": [],
              "rulesApplied": [
                "ruleOrderStatusFlow"
              ]
            }
          ]
        },
        {
          "sectionName": "Ações de preparo",
          "mode": "edit",
          "organisms": [
            {
              "organismName": "Atualização de status do pedido",
              "purpose": "Permitir marcar pedido como em preparo ou pronto.",
              "userActions": [
                "Marcar preparando",
                "Marcar pronto"
              ],
              "requiredEntities": [
                "Order",
                "OrderItem",
                "StockMovement"
              ],
              "readsFields": [
                "Order.orderId",
                "Order.status"
              ],
              "writesFields": [
                "Order.status",
                "Order.updatedAt",
                "StockMovement.movementType",
                "StockMovement.quantity",
                "StockMovement.occurredAt"
              ],
              "rulesApplied": [
                "ruleOrderStatusFlow",
                "ruleStockDeductionOnOrderPreparation"
              ]
            }
          ]
        }
      ]
    },
    "bffCommands": [
      {
        "commandName": "listarPedidos",
        "purpose": "Listar pedidos recebidos e em preparo para a fila da cozinha.",
        "kind": "query",
        "input": [
          {
            "name": "status",
            "type": "string",
            "required": false
          },
          {
            "name": "periodoInicio",
            "type": "date",
            "required": false
          },
          {
            "name": "periodoFim",
            "type": "date",
            "required": false
          }
        ],
        "output": [
          {
            "name": "pedidoId",
            "type": "Order"
          },
          {
            "name": "status",
            "type": "string"
          },
          {
            "name": "criadoEm",
            "type": "date"
          },
          {
            "name": "itens",
            "type": "OrderItem[]"
          }
        ],
        "readsEntities": [
          "Order",
          "OrderItem"
        ],
        "writesEntities": [],
        "readsTables": [
          "order_item"
        ],
        "writesTables": [],
        "usecaseRefs": [
          "listarPedidos"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": []
      },
      {
        "commandName": "atualizarStatusPedido",
        "purpose": "Atualizar status do pedido para preparando ou pronto e disparar baixa de estoque quando aplicável.",
        "kind": "mutation",
        "input": [
          {
            "name": "pedidoId",
            "type": "Order",
            "required": true
          },
          {
            "name": "novoStatus",
            "type": "string",
            "required": true
          }
        ],
        "output": [
          {
            "name": "pedidoId",
            "type": "Order"
          },
          {
            "name": "status",
            "type": "string"
          },
          {
            "name": "atualizadoEm",
            "type": "date"
          }
        ],
        "readsEntities": [
          "Order",
          "OrderItem",
          "StockItem"
        ],
        "writesEntities": [
          "Order",
          "StockItem",
          "StockMovement"
        ],
        "readsTables": [
          "order_item"
        ],
        "writesTables": [
          "stock_movement",
          "today_sales_metrics",
          "top_selling_items_metrics",
          "low_stock_metrics"
        ],
        "usecaseRefs": [
          "atualizarStatusPedido"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "ruleOrderStatusFlow",
          "ruleStockDeductionOnOrderPreparation"
        ]
      }
    ]
  }
} as const;

export default kitchenDisplayPagePlan;
