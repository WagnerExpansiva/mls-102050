/// <mls fileReference="_102050_/l4/workflows/workflowOrderLifecycle.defs.ts" enhancement="_blank"/>

export const workflowOrderLifecycleDef = {
  "schemaVersion": "2026-06-06",
  "artifactType": "workflow",
  "artifactId": "workflowOrderLifecycle",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanWorkflowDefinition",
    "stepId": 29,
    "planId": "plan-validate-solution-coverage"
  },
  "data": {
    "workflowDefinition": {
      "workflowId": "workflowOrderLifecycle",
      "title": "Ciclo de Vida do Pedido",
      "purpose": "Coordenar o fluxo completo do pedido desde o lançamento no POS até a entrega ou cancelamento, conectando atendente, cozinha e estoque em um único fluxo de trabalho.",
      "executionMode": "taskWorkflow",
      "createsTask": true,
      "taskConfig": {
        "taskTitleTemplate": "Pedido {{orderId}}: acompanhar ciclo",
        "assigneeRules": [
          "attendantCashier quando status=received",
          "cook quando status=preparing",
          "attendantCashier quando status=ready",
          "managerOwner quando status=cancelled"
        ],
        "slaRules": [
          "received->preparing em até 10 minutos",
          "preparing->ready em até 20 minutos",
          "ready->delivered em até 15 minutos"
        ],
        "taskRoomRequired": false
      },
      "actors": [
        "attendantCashier",
        "cook",
        "managerOwner"
      ],
      "states": [
        {
          "stateId": "received",
          "description": "Pedido recebido e aguardando início do preparo."
        },
        {
          "stateId": "preparing",
          "description": "Pedido em preparo na cozinha."
        },
        {
          "stateId": "ready",
          "description": "Pedido pronto para entrega ou retirada."
        },
        {
          "stateId": "delivered",
          "description": "Pedido entregue ao cliente."
        },
        {
          "stateId": "cancelled",
          "description": "Pedido cancelado."
        }
      ],
      "transitions": [
        {
          "from": "received",
          "to": "preparing",
          "trigger": "startPreparation",
          "actor": "cook",
          "conditions": [
            "ruleOrderStatusFlow"
          ],
          "actions": [
            "set Order.status = 'preparing'",
            "set Order.updatedAt = now"
          ],
          "rulesApplied": [
            "ruleOrderStatusFlow",
            "ruleStockDeductionOnOrderPreparation"
          ]
        },
        {
          "from": "preparing",
          "to": "ready",
          "trigger": "markReady",
          "actor": "cook",
          "conditions": [
            "ruleOrderStatusFlow"
          ],
          "actions": [
            "set Order.status = 'ready'",
            "set Order.updatedAt = now"
          ],
          "rulesApplied": [
            "ruleOrderStatusFlow"
          ]
        },
        {
          "from": "ready",
          "to": "delivered",
          "trigger": "confirmDelivery",
          "actor": "attendantCashier",
          "conditions": [
            "ruleOrderStatusFlow"
          ],
          "actions": [
            "set Order.status = 'delivered'",
            "set Order.updatedAt = now"
          ],
          "rulesApplied": [
            "ruleOrderStatusFlow"
          ]
        },
        {
          "from": "received",
          "to": "cancelled",
          "trigger": "cancelOrder",
          "actor": "managerOwner",
          "conditions": [
            "ruleOrderStatusFlow"
          ],
          "actions": [
            "set Order.status = 'cancelled'",
            "set Order.updatedAt = now"
          ],
          "rulesApplied": [
            "ruleOrderStatusFlow"
          ]
        },
        {
          "from": "preparing",
          "to": "cancelled",
          "trigger": "cancelOrder",
          "actor": "managerOwner",
          "conditions": [
            "ruleOrderStatusFlow"
          ],
          "actions": [
            "set Order.status = 'cancelled'",
            "set Order.updatedAt = now"
          ],
          "rulesApplied": [
            "ruleOrderStatusFlow"
          ]
        },
        {
          "from": "ready",
          "to": "cancelled",
          "trigger": "cancelOrder",
          "actor": "managerOwner",
          "conditions": [
            "ruleOrderStatusFlow"
          ],
          "actions": [
            "set Order.status = 'cancelled'",
            "set Order.updatedAt = now"
          ],
          "rulesApplied": [
            "ruleOrderStatusFlow"
          ]
        }
      ],
      "requiredEntities": [
        "Order",
        "OrderItem"
      ],
      "persistenceRefs": [
        "orderItem",
        "todaySalesMetrics",
        "topSellingItemsMetrics"
      ],
      "usecaseRefs": [
        "criarPedido",
        "listarPedidos",
        "atualizarStatusPedido",
        "cancelarPedido"
      ],
      "metricRefs": [
        "todaySalesMetrics",
        "topSellingItemsMetrics"
      ],
      "userActions": [
        "createOrder",
        "startPreparation",
        "markReady",
        "confirmDelivery",
        "cancelOrder"
      ],
      "relatedPages": [
        "kitchenDisplay",
        "ordersTracker",
        "posOrder",
        "shiftCloseReport"
      ],
      "relatedAgents": [],
      "relatedPlugins": [],
      "rulesApplied": [
        "ruleOrderRequiresOpenShift",
        "ruleOrderStatusFlow",
        "ruleStockDeductionOnOrderPreparation"
      ],
      "implementationSuggestions": [
        {
          "suggestionId": "suggKitchenDisplayAutoRefresh",
          "title": "Atualização automática do display da cozinha",
          "priority": "now",
          "description": "Atualizar automaticamente a lista de pedidos na cozinha a cada mudança de status para reduzir atrasos operacionais.",
          "tradeoff": "Aumenta o tráfego de rede e exige tratamento de concorrência na UI."
        },
        {
          "suggestionId": "suggStockDeductionOnPreparing",
          "title": "Baixa automática de estoque ao iniciar preparo",
          "priority": "now",
          "description": "Garantir que a transição para preparing dispare a baixa de estoque via usecase de atualização de status.",
          "tradeoff": "Pode exigir reversão de estoque em cancelamentos posteriores."
        },
        {
          "suggestionId": "suggOrderCancelJustification",
          "title": "Exigir justificativa no cancelamento",
          "priority": "soon",
          "description": "Adicionar coleta obrigatória de justificativa ao cancelar pedidos para auditoria e análises futuras.",
          "tradeoff": "Aumenta o tempo de operação no balcão e na gerência."
        }
      ],
      "workflowScope": "singleModule",
      "moduleRefs": [
        "cafeFlow"
      ],
      "pageRefsByModule": [],
      "entityRefsByModule": [
        {
          "moduleId": "cafeFlow",
          "entity": "Order"
        },
        {
          "moduleId": "cafeFlow",
          "entity": "OrderItem"
        }
      ],
      "writesArtifacts": [
        {
          "moduleId": "cafeFlow",
          "artifactType": "workflow",
          "artifactId": "workflowOrderLifecycle"
        }
      ]
    },
    "defsPlan": {
      "fileName": "workflows/workflowOrderLifecycle.defs.ts",
      "exportName": "workflowOrderLifecycleDef",
      "saveAsDefs": true
    }
  }
} as const;

export default workflowOrderLifecycleDef;
