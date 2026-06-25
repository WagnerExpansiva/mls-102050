/// <mls fileReference="_102050_/l4/workflows/workflowStockManagement.defs.ts" enhancement="_blank"/>

export const workflowStockManagementDef = {
  "schemaVersion": "2026-06-06",
  "artifactType": "workflow",
  "artifactId": "workflowStockManagement",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanWorkflowDefinition",
    "stepId": 29,
    "planId": "plan-validate-solution-coverage"
  },
  "data": {
    "workflowDefinition": {
      "workflowId": "workflowStockManagement",
      "title": "Gerenciamento de Estoque",
      "purpose": "Controlar o cadastro de itens de estoque, registrar entradas, saídas e ajustes, e alimentar alertas de estoque baixo.",
      "executionMode": "entityLifecycle",
      "createsTask": false,
      "taskConfig": {
        "taskTitleTemplate": "",
        "assigneeRules": [],
        "slaRules": [],
        "taskRoomRequired": false
      },
      "actors": [
        "managerOwner"
      ],
      "states": [
        {
          "stateId": "stockItemDraft",
          "description": "Item de estoque em criação, ainda não ativo."
        },
        {
          "stateId": "stockItemActive",
          "description": "Item de estoque ativo para uso e movimentações."
        },
        {
          "stateId": "stockItemInactive",
          "description": "Item de estoque inativo e fora de uso."
        },
        {
          "stateId": "movementDraft",
          "description": "Movimentação de estoque em preparação."
        },
        {
          "stateId": "movementRecorded",
          "description": "Movimentação de estoque registrada e aplicada ao saldo."
        }
      ],
      "transitions": [
        {
          "from": "stockItemDraft",
          "to": "stockItemActive",
          "trigger": "criarItemEstoque",
          "actor": "managerOwner",
          "conditions": [],
          "actions": [
            "StockItem.status = \"active\"",
            "StockItem.currentQuantity = input.currentQuantity",
            "StockItem.alertThreshold = input.alertThreshold",
            "StockItem.unitOfMeasure = input.unitOfMeasure",
            "StockItem.name = input.name",
            "StockItem.createdAt = now()",
            "StockItem.updatedAt = now()"
          ],
          "rulesApplied": [
            "ruleStockQuantityNonNegative"
          ]
        },
        {
          "from": "stockItemActive",
          "to": "stockItemActive",
          "trigger": "atualizarItemEstoque",
          "actor": "managerOwner",
          "conditions": [],
          "actions": [
            "StockItem.name = input.name",
            "StockItem.unitOfMeasure = input.unitOfMeasure",
            "StockItem.alertThreshold = input.alertThreshold",
            "StockItem.updatedAt = now()"
          ],
          "rulesApplied": [
            "ruleStockQuantityNonNegative"
          ]
        },
        {
          "from": "stockItemActive",
          "to": "stockItemInactive",
          "trigger": "inativarItemEstoque",
          "actor": "managerOwner",
          "conditions": [],
          "actions": [
            "StockItem.status = \"inactive\"",
            "StockItem.updatedAt = now()"
          ],
          "rulesApplied": []
        },
        {
          "from": "stockItemInactive",
          "to": "stockItemActive",
          "trigger": "reativarItemEstoque",
          "actor": "managerOwner",
          "conditions": [],
          "actions": [
            "StockItem.status = \"active\"",
            "StockItem.updatedAt = now()"
          ],
          "rulesApplied": []
        },
        {
          "from": "movementDraft",
          "to": "movementRecorded",
          "trigger": "registrarEntradaEstoque",
          "actor": "managerOwner",
          "conditions": [],
          "actions": [
            "StockMovement.stockItemId = input.stockItemId",
            "StockMovement.movementType = \"entrada\"",
            "StockMovement.quantity = input.quantity",
            "StockMovement.note = input.note",
            "StockMovement.occurredAt = input.occurredAt",
            "StockMovement.createdAt = now()",
            "StockMovement.updatedAt = now()",
            "StockItem.currentQuantity = StockItem.currentQuantity + input.quantity",
            "StockItem.updatedAt = now()"
          ],
          "rulesApplied": [
            "ruleStockQuantityNonNegative",
            "ruleLowStockAlert"
          ]
        },
        {
          "from": "movementDraft",
          "to": "movementRecorded",
          "trigger": "registrarSaidaEstoque",
          "actor": "managerOwner",
          "conditions": [],
          "actions": [
            "StockMovement.stockItemId = input.stockItemId",
            "StockMovement.orderId = input.orderId",
            "StockMovement.movementType = \"saida\"",
            "StockMovement.quantity = input.quantity",
            "StockMovement.note = input.note",
            "StockMovement.occurredAt = input.occurredAt",
            "StockMovement.createdAt = now()",
            "StockMovement.updatedAt = now()",
            "StockItem.currentQuantity = StockItem.currentQuantity - input.quantity",
            "StockItem.updatedAt = now()"
          ],
          "rulesApplied": [
            "ruleStockQuantityNonNegative",
            "ruleLowStockAlert"
          ]
        },
        {
          "from": "movementDraft",
          "to": "movementRecorded",
          "trigger": "registrarAjusteEstoque",
          "actor": "managerOwner",
          "conditions": [],
          "actions": [
            "StockMovement.stockItemId = input.stockItemId",
            "StockMovement.movementType = \"ajuste\"",
            "StockMovement.quantity = input.quantity",
            "StockMovement.note = input.note",
            "StockMovement.occurredAt = input.occurredAt",
            "StockMovement.createdAt = now()",
            "StockMovement.updatedAt = now()",
            "StockItem.currentQuantity = input.adjustedQuantity",
            "StockItem.updatedAt = now()"
          ],
          "rulesApplied": [
            "ruleStockQuantityNonNegative",
            "ruleLowStockAlert"
          ]
        },
        {
          "from": "stockItemActive",
          "to": "stockItemActive",
          "trigger": "listarItensEstoque",
          "actor": "managerOwner",
          "conditions": [],
          "actions": [],
          "rulesApplied": []
        },
        {
          "from": "movementRecorded",
          "to": "movementRecorded",
          "trigger": "listarMovimentacoesEstoque",
          "actor": "managerOwner",
          "conditions": [],
          "actions": [],
          "rulesApplied": []
        },
        {
          "from": "stockItemActive",
          "to": "stockItemActive",
          "trigger": "listarAlertasEstoqueBaixo",
          "actor": "managerOwner",
          "conditions": [],
          "actions": [],
          "rulesApplied": []
        }
      ],
      "requiredEntities": [
        "StockItem",
        "StockMovement"
      ],
      "persistenceRefs": [
        "stockMovement",
        "lowStockMetrics"
      ],
      "usecaseRefs": [
        "gerenciarItemEstoque",
        "listarItensEstoque",
        "registrarMovimentacaoEstoque",
        "listarMovimentacoesEstoque",
        "listarAlertasEstoqueBaixo"
      ],
      "metricRefs": [
        "lowStockMetrics"
      ],
      "userActions": [
        "criarItemEstoque",
        "atualizarItemEstoque",
        "inativarItemEstoque",
        "reativarItemEstoque",
        "registrarEntradaEstoque",
        "registrarSaidaEstoque",
        "registrarAjusteEstoque",
        "listarItensEstoque",
        "listarMovimentacoesEstoque",
        "listarAlertasEstoqueBaixo"
      ],
      "relatedPages": [
        "dashboard",
        "stockManagement"
      ],
      "relatedAgents": [],
      "relatedPlugins": [],
      "rulesApplied": [
        "ruleStockQuantityNonNegative",
        "ruleLowStockAlert"
      ],
      "implementationSuggestions": [
        {
          "suggestionId": "suggStockAutoDeduction",
          "title": "Integração com baixa automática de pedidos",
          "priority": "now",
          "description": "As movimentações de saída devem ser geradas automaticamente pelo workflow de pedidos ao iniciar o preparo.",
          "tradeoff": "Exige integração entre workflows e pode aumentar a complexidade de orquestração."
        },
        {
          "suggestionId": "suggStockAlertThreshold",
          "title": "Configuração de limite de alerta por item",
          "priority": "soon",
          "description": "Cada item de estoque deve ter um nível mínimo configurável para disparar o alerta de estoque baixo.",
          "tradeoff": "Requer ajustes na gestão de cadastro e validações adicionais."
        },
        {
          "suggestionId": "suggNoTaskForStock",
          "title": "Sem criação de tarefas para movimentações de estoque",
          "priority": "later",
          "description": "Mantém o fluxo direto no painel de estoque sem geração de tarefas, usando somente estados e métricas.",
          "tradeoff": "Pode reduzir rastreabilidade de pendências operacionais que poderiam ser tratadas como tarefas."
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
          "entity": "StockMovement"
        }
      ],
      "writesArtifacts": [
        {
          "moduleId": "cafeFlow",
          "artifactType": "workflow",
          "artifactId": "workflowStockManagement"
        }
      ]
    },
    "defsPlan": {
      "fileName": "workflows/workflowStockManagement.defs.ts",
      "exportName": "workflowStockManagementDef",
      "saveAsDefs": true
    }
  }
} as const;

export default workflowStockManagementDef;
