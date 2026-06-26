/// <mls fileReference="_102050_/l5/cafeFlow/process.defs.ts" enhancement="_blank"/>

export const cafeFlowProcess = {
  "schemaVersion": "2026-06-25",
  "moduleName": "cafeFlow",
  "runs": [
    {
      "runId": "newSolution2-cafeFlow",
      "kind": "newSolution2-behavior",
      "startedAt": "2026-06-26T01:01:41.436Z",
      "finishedAt": "2026-06-26T01:01:41.436Z",
      "initialPrompt": "Gere um app profissional chamado CafeFlow para cafeterias e lanchonetes pequenas.\nEntidades principais: Item do Cardápio (categoria, preço, ingredientes em estoque), Pedido (mesa ou takeout, itens, status), Turno Diário, Item de Estoque.\nTelas chave: Dashboard (vendas de hoje, itens mais vendidos, estoque baixo), Interface rápida de POS (lançamento de pedido + status cozinha), Gerenciamento de cardápio e estoque, Relatório de fechamento de turno.\nFuncionalidade LLM: Assistente IA que gera \"resumo de vendas do dia\" ou sugere \"quais itens promover com base nos últimos 7 dias\".\nFoco: Atendimento rápido de pedidos, coordenação de cozinha e controle simples de estoque para food service.\nlinguagem: en, pt-br",
      "userLanguage": "pt-BR",
      "decisions": [
        {
          "recommendationId": "menuItemOntology",
          "artifactType": "ontologyEntity",
          "title": "Menu Item ontology (product sold)",
          "decidedPriority": "now",
          "accepted": true,
          "reason": "Core to order taking, pricing, kitchen tickets, and sales summaries; required by multiple workflows and operations."
        },
        {
          "recommendationId": "menuCategoryOntology",
          "artifactType": "ontologyEntity",
          "title": "Menu Category ontology",
          "decidedPriority": "now",
          "accepted": true,
          "reason": "Needed to keep POS fast and structured; referenced by Menu Item and dashboards."
        },
        {
          "recommendationId": "inventoryItemOntology",
          "artifactType": "ontologyEntity",
          "title": "Inventory Item (Ingredient) ontology",
          "decidedPriority": "now",
          "accepted": true,
          "reason": "Required for low-stock dashboard and for decrementing stock from confirmed orders."
        },
        {
          "recommendationId": "tableOntology",
          "artifactType": "ontologyEntity",
          "title": "Table ontology (dine-in identifier)",
          "decidedPriority": "now",
          "accepted": true,
          "reason": "Explicit requirement: orders can be by table; enables the dine-in workflow."
        },
        {
          "recommendationId": "dailyShiftOntology",
          "artifactType": "ontologyEntity",
          "title": "Daily Shift ontology",
          "decidedPriority": "now",
          "accepted": true,
          "reason": "Shift opening/closing and closing report are key screens and operational needs."
        },
        {
          "recommendationId": "orderOntology",
          "artifactType": "ontologyEntity",
          "title": "Order ontology (dine-in or takeout)",
          "decidedPriority": "now",
          "accepted": true,
          "reason": "Central object for fast order entry, kitchen coordination, and revenue reporting."
        },
        {
          "recommendationId": "cashierPaymentsModule",
          "artifactType": "horizontalModule",
          "title": "Cashier payments & shift cash-up module",
          "decidedPriority": "now",
          "accepted": true,
          "reason": "Scope includes immediate takeout payment and consolidated table payment plus shift closing report; without this, close-out cannot reconcile."
        },
        {
          "recommendationId": "dineInOrderWorkflow",
          "artifactType": "workflow",
          "title": "Dine-in order lifecycle workflow",
          "decidedPriority": "now",
          "accepted": true,
          "reason": "Explicit core workflow for table service and kitchen coordination."
        },
        {
          "recommendationId": "takeoutOrderWorkflow",
          "artifactType": "workflow",
          "title": "Takeout order lifecycle workflow",
          "decidedPriority": "now",
          "accepted": true,
          "reason": "Explicit core workflow for quick service and immediate payment."
        },
        {
          "recommendationId": "kitchenProductionWorkflow",
          "artifactType": "workflow",
          "title": "Kitchen production workflow",
          "decidedPriority": "now",
          "accepted": true,
          "reason": "Required for coordination between POS and kitchen and the requested POS status view."
        },
        {
          "recommendationId": "stockConsumptionWorkflow",
          "artifactType": "workflow",
          "title": "Ingredient stock consumption on order confirmation workflow",
          "decidedPriority": "now",
          "accepted": true,
          "reason": "Directly connects menu ingredients to inventory control and low-stock alerts."
        },
        {
          "recommendationId": "dailyShiftWorkflow",
          "artifactType": "workflow",
          "title": "Daily shift open/close workflow",
          "decidedPriority": "now",
          "accepted": true,
          "reason": "Matches Turno Diário requirement and close-out report screen."
        },
        {
          "recommendationId": "menuManagementOperations",
          "artifactType": "operation",
          "title": "Menu management operations",
          "decidedPriority": "now",
          "accepted": true,
          "reason": "Required for cardápio management and POS browsing."
        },
        {
          "recommendationId": "inventoryManagementOperations",
          "artifactType": "operation",
          "title": "Inventory management operations",
          "decidedPriority": "now",
          "accepted": true,
          "reason": "Required for simple stock control and low-stock dashboard."
        },
        {
          "recommendationId": "orderPosOperations",
          "artifactType": "operation",
          "title": "POS order operations",
          "decidedPriority": "now",
          "accepted": true,
          "reason": "Core to fast service and kitchen coordination."
        },
        {
          "recommendationId": "paymentOperations",
          "artifactType": "operation",
          "title": "Payment/receipt operations",
          "decidedPriority": "now",
          "accepted": true,
          "reason": "Needed for takeout paid-at-order and dine-in pay-at-close; supports shift close report."
        },
        {
          "recommendationId": "dashboardOperations",
          "artifactType": "operation",
          "title": "Operational dashboard operations",
          "decidedPriority": "now",
          "accepted": true,
          "reason": "Explicit dashboard requirements; also supplies inputs for AI summaries."
        },
        {
          "recommendationId": "shiftCloseReportOperation",
          "artifactType": "operation",
          "title": "Shift close-out report operation",
          "decidedPriority": "now",
          "accepted": true,
          "reason": "Explicit key screen: relatório de fechamento de turno."
        },
        {
          "recommendationId": "posKitchenStatusRules",
          "artifactType": "rule",
          "title": "Order and kitchen status transition rules",
          "decidedPriority": "now",
          "accepted": true,
          "reason": "Prevents inconsistent states and supports reliable coordination between POS and kitchen."
        },
        {
          "recommendationId": "lowStockRule",
          "artifactType": "rule",
          "title": "Low-stock threshold rule",
          "decidedPriority": "now",
          "accepted": true,
          "reason": "Explicit low-stock dashboard requirement; keeps alerting consistent."
        },
        {
          "recommendationId": "salesInsightsAgent",
          "artifactType": "agent",
          "title": "AI sales insights agent (daily summary & 7-day promotions)",
          "decidedPriority": "soon",
          "accepted": true,
          "reason": "LLM feature requested; not required for core POS transaction flow."
        },
        {
          "recommendationId": "lowStockMonitorAgent",
          "artifactType": "agent",
          "title": "Low-stock monitoring & replenishment suggestions agent",
          "decidedPriority": "soon",
          "accepted": true,
          "reason": "Enhances operational control; complements dashboard but not required for MVP transactions."
        },
        {
          "recommendationId": "multiLanguageConfig",
          "artifactType": "rule",
          "title": "Language support configuration (en, pt-br)",
          "decidedPriority": "soon",
          "accepted": true,
          "reason": "Language requirement present; platform provides i18n but AI outputs need explicit language selection behavior."
        }
      ],
      "openDetails": [
        {
          "title": "Modelo de Receita Durável",
          "description": "Qual estratégia de monetização para cafeterias e lanchonetes pequenas?"
        },
        {
          "title": "Priorização de Funcionalidades LLM",
          "description": "Como o assistente IA deve gerar resumos de vendas e sugestões de itens a promover?"
        }
      ],
      "healthReport": {
        "passed": false,
        "counts": {
          "entities": 13,
          "workflows": 6,
          "operations": 21
        },
        "errors": [
          {
            "severity": "error",
            "code": "workflow.operation.unknown",
            "message": "workflow closeDailyShift: orchestrated operation 'updateDailyShiftStatus' does not exist"
          },
          {
            "severity": "error",
            "code": "workflow.operation.unknown",
            "message": "workflow closeDailyShift: orchestrated operation 'recordClosingCashMovement' does not exist"
          }
        ],
        "warnings": [
          {
            "severity": "warning",
            "code": "capability.multiowned",
            "message": "capability 'openDailyShift' is owned by 3 behaviors"
          },
          {
            "severity": "warning",
            "code": "capability.multiowned",
            "message": "capability 'takeoutOrderLifecycle' is owned by 5 behaviors"
          },
          {
            "severity": "warning",
            "code": "capability.multiowned",
            "message": "capability 'dineInOrderLifecycle' is owned by 2 behaviors"
          },
          {
            "severity": "warning",
            "code": "capability.multiowned",
            "message": "capability 'kitchenProductionFlow' is owned by 3 behaviors"
          },
          {
            "severity": "warning",
            "code": "capability.multiowned",
            "message": "capability 'consumeIngredientsOnConfirmation' is owned by 3 behaviors"
          }
        ]
      },
      "nextSteps": [
        {
          "id": "stage2-experience",
          "kind": "workflowExperience",
          "title": "Etapa 2 — Experiencia",
          "description": "Telas + BFF a partir dos l4/workflows e l4/operations.",
          "status": "pending"
        },
        {
          "id": "stage3-backend",
          "kind": "backendImplementation",
          "title": "Etapa 3 — Backend",
          "description": "Persistencia + implementacao a partir das ontology/operations l4.",
          "status": "pending"
        }
      ]
    }
  ]
} as const;

export default cafeFlowProcess;
