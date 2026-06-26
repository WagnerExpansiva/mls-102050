/// <mls fileReference="_102050_/l4/cafeFlow/module.defs.ts" enhancement="_blank"/>

export const cafeFlowModule = {
  "module": {
    "moduleName": "cafeFlow",
    "title": "CafeFlow",
    "purpose": "Agilizar o atendimento de pedidos (mesa e takeout), coordenar a cozinha e controlar o estoque de forma simples, com fechamento de turno e insights operacionais para cafeterias e lanchonetes pequenas.",
    "businessDomain": "Food service POS & daily operations (cafeterias e lanchonetes)",
    "languages": [
      "pt-BR",
      "en"
    ],
    "visualStyle": "POS-first, high-contrast, touch-friendly, low-latency, status-driven UI"
  },
  "designContext": {
    "initialPrompt": "Gere um app profissional chamado CafeFlow para cafeterias e lanchonetes pequenas.\nEntidades principais: Item do Cardápio (categoria, preço, ingredientes em estoque), Pedido (mesa ou takeout, itens, status), Turno Diário, Item de Estoque.\nTelas chave: Dashboard (vendas de hoje, itens mais vendidos, estoque baixo), Interface rápida de POS (lançamento de pedido + status cozinha), Gerenciamento de cardápio e estoque, Relatório de fechamento de turno.\nFuncionalidade LLM: Assistente IA que gera \"resumo de vendas do dia\" ou sugere \"quais itens promover com base nos últimos 7 dias\".\nFoco: Atendimento rápido de pedidos, coordenação de cozinha e controle simples de estoque para food service.\nlinguagem: en, pt-br",
    "userLanguage": "pt-BR",
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
    "decisions": [
      {
        "recommendationId": "menuItemOntology",
        "artifactType": "ontologyEntity",
        "title": "Menu Item ontology (product sold)",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "menuCategoryOntology",
        "artifactType": "ontologyEntity",
        "title": "Menu Category ontology",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "inventoryItemOntology",
        "artifactType": "ontologyEntity",
        "title": "Inventory Item (Ingredient) ontology",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "tableOntology",
        "artifactType": "ontologyEntity",
        "title": "Table ontology (dine-in identifier)",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "dailyShiftOntology",
        "artifactType": "ontologyEntity",
        "title": "Daily Shift ontology",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "orderOntology",
        "artifactType": "ontologyEntity",
        "title": "Order ontology (dine-in or takeout)",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "cashierPaymentsModule",
        "artifactType": "horizontalModule",
        "title": "Cashier payments & shift cash-up module",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "dineInOrderWorkflow",
        "artifactType": "workflow",
        "title": "Dine-in order lifecycle workflow",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "takeoutOrderWorkflow",
        "artifactType": "workflow",
        "title": "Takeout order lifecycle workflow",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "kitchenProductionWorkflow",
        "artifactType": "workflow",
        "title": "Kitchen production workflow",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "stockConsumptionWorkflow",
        "artifactType": "workflow",
        "title": "Ingredient stock consumption on order confirmation workflow",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "dailyShiftWorkflow",
        "artifactType": "workflow",
        "title": "Daily shift open/close workflow",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "menuManagementOperations",
        "artifactType": "operation",
        "title": "Menu management operations",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "inventoryManagementOperations",
        "artifactType": "operation",
        "title": "Inventory management operations",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "orderPosOperations",
        "artifactType": "operation",
        "title": "POS order operations",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "paymentOperations",
        "artifactType": "operation",
        "title": "Payment/receipt operations",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "dashboardOperations",
        "artifactType": "operation",
        "title": "Operational dashboard operations",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "shiftCloseReportOperation",
        "artifactType": "operation",
        "title": "Shift close-out report operation",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "posKitchenStatusRules",
        "artifactType": "rule",
        "title": "Order and kitchen status transition rules",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "lowStockRule",
        "artifactType": "rule",
        "title": "Low-stock threshold rule",
        "decidedPriority": "now",
        "accepted": true
      },
      {
        "recommendationId": "salesInsightsAgent",
        "artifactType": "agent",
        "title": "AI sales insights agent (daily summary & 7-day promotions)",
        "decidedPriority": "soon",
        "accepted": true
      },
      {
        "recommendationId": "lowStockMonitorAgent",
        "artifactType": "agent",
        "title": "Low-stock monitoring & replenishment suggestions agent",
        "decidedPriority": "soon",
        "accepted": true
      },
      {
        "recommendationId": "multiLanguageConfig",
        "artifactType": "rule",
        "title": "Language support configuration (en, pt-br)",
        "decidedPriority": "soon",
        "accepted": true
      }
    ]
  },
  "ontology": {
    "entities": {
      "MenuItem": {
        "title": "Item do Cardápio",
        "description": "Produto vendido (ex.: cappuccino, pão de queijo), com preço, categoria e composição de ingredientes para baixa de estoque e relatórios.",
        "kind": "core",
        "ownership": "moduleOwned",
        "lifecycleStates": [
          "draft",
          "active",
          "inactive"
        ]
      },
      "MenuCategory": {
        "title": "Categoria de Cardápio",
        "description": "Agrupamento de itens do cardápio para organização no POS e análises (ex.: Cafés, Salgados, Doces).",
        "kind": "mdm",
        "ownership": "moduleOwned",
        "lifecycleStates": [
          "active",
          "inactive"
        ]
      },
      "InventoryItem": {
        "title": "Item de Estoque (Ingrediente)",
        "description": "Ingrediente/insumo controlado em quantidade e unidade (ex.: café em grãos, leite, açúcar), com nível mínimo para alertas.",
        "kind": "core",
        "ownership": "moduleOwned",
        "lifecycleStates": [
          "active",
          "inactive"
        ]
      },
      "RecipeComponent": {
        "title": "Componente de Receita",
        "description": "Ligação entre MenuItem e InventoryItem com quantidade consumida por unidade vendida (BOM simplificada). Entidade sem estado próprio; alterações são controladas via edição do MenuItem.",
        "kind": "supporting",
        "ownership": "moduleOwned"
      },
      "Table": {
        "title": "Mesa",
        "description": "Identificador de mesa para atendimento no salão; suporte a abertura e fechamento consolidado de consumo.",
        "kind": "mdm",
        "ownership": "moduleOwned",
        "statusEnum": [
          "available",
          "occupied",
          "disabled"
        ]
      },
      "Order": {
        "title": "Pedido",
        "description": "Pedido de venda (mesa ou takeout) com itens, preços no momento da venda e status para coordenação com a cozinha.",
        "kind": "core",
        "ownership": "moduleOwned",
        "statusEnum": [
          "draft",
          "sentToKitchen",
          "inPreparation",
          "ready",
          "served",
          "closed",
          "cancelled"
        ]
      },
      "OrderItem": {
        "title": "Item do Pedido",
        "description": "Linha do pedido com item do cardápio, quantidade, observações e status de produção quando aplicável.",
        "kind": "supporting",
        "ownership": "moduleOwned",
        "statusEnum": [
          "new",
          "sentToKitchen",
          "inPreparation",
          "ready",
          "served",
          "cancelled"
        ]
      },
      "KitchenTicket": {
        "title": "Ticket de Cozinha",
        "description": "Agrupamento operacional de itens a preparar (por pedido), usado para fila e atualização de status na cozinha.",
        "kind": "supporting",
        "ownership": "moduleOwned",
        "statusEnum": [
          "open",
          "inProgress",
          "done",
          "void"
        ]
      },
      "DailyShift": {
        "title": "Turno Diário",
        "description": "Período operacional (abertura→fechamento) para consolidar vendas, caixa e relatórios de fechamento.",
        "kind": "core",
        "ownership": "moduleOwned",
        "statusEnum": [
          "open",
          "closed"
        ]
      },
      "Payment": {
        "title": "Pagamento/Recebimento",
        "description": "Registro de recebimento associado a um pedido e/ou turno, com método e valor, para conciliação no fechamento.",
        "kind": "core",
        "ownership": "horizontalOwned",
        "statusEnum": [
          "authorized",
          "captured",
          "voided",
          "refunded"
        ]
      },
      "CashMovement": {
        "title": "Movimento de Caixa",
        "description": "Entradas/saídas manuais de caixa no turno (ex.: sangria, reforço), para auditoria do fechamento. Lançamentos são append-only; estornos via lançamento compensatório.",
        "kind": "supporting",
        "ownership": "horizontalOwned"
      },
      "StockAdjustment": {
        "title": "Ajuste de Estoque",
        "description": "Evento de ajuste manual de quantidade de um ingrediente (correção, perda, inventário parcial). Evento append-only; reversões por ajuste compensatório.",
        "kind": "event",
        "ownership": "moduleOwned",
        "statusEnum": [
          "posted",
          "voided"
        ]
      },
      "StockConsumption": {
        "title": "Consumo de Estoque",
        "description": "Evento de baixa de ingredientes decorrente de itens de pedido confirmados/preparados, para rastreabilidade simples. Estornos via evento compensatório vinculado ao mesmo OrderItem.",
        "kind": "event",
        "ownership": "moduleOwned",
        "statusEnum": [
          "posted",
          "voided"
        ]
      }
    }
  },
  "relationships": [
    {
      "relationshipId": "menuItemBelongsToCategory",
      "fromEntity": "MenuItem",
      "toEntity": "MenuCategory",
      "type": "manyToOne",
      "description": "Cada MenuItem pertence a uma MenuCategory; categorias organizam o POS e relatórios."
    },
    {
      "relationshipId": "menuItemHasRecipeComponents",
      "fromEntity": "MenuItem",
      "toEntity": "RecipeComponent",
      "type": "oneToMany",
      "description": "Um MenuItem possui RecipeComponent (ingredientes e quantidades)."
    },
    {
      "relationshipId": "recipeComponentUsesInventoryItem",
      "fromEntity": "RecipeComponent",
      "toEntity": "InventoryItem",
      "type": "manyToOne",
      "description": "Cada RecipeComponent referencia um InventoryItem."
    },
    {
      "relationshipId": "orderHasOrderItems",
      "fromEntity": "Order",
      "toEntity": "OrderItem",
      "type": "oneToMany",
      "description": "Um Order é composto por OrderItem (linhas)."
    },
    {
      "relationshipId": "orderItemReferencesMenuItem",
      "fromEntity": "OrderItem",
      "toEntity": "MenuItem",
      "type": "manyToOne",
      "description": "Cada OrderItem referencia o MenuItem (para nome e base de receita)."
    },
    {
      "relationshipId": "orderMayReferenceTable",
      "fromEntity": "Order",
      "toEntity": "Table",
      "type": "manyToOne",
      "description": "Orders do tipo mesa referenciam uma Table; takeout não exige mesa."
    },
    {
      "relationshipId": "orderGeneratesKitchenTicket",
      "fromEntity": "Order",
      "toEntity": "KitchenTicket",
      "type": "oneToOne",
      "description": "Um Order pode gerar um KitchenTicket para fila de preparo."
    },
    {
      "relationshipId": "kitchenTicketContainsOrderItems",
      "fromEntity": "KitchenTicket",
      "toEntity": "OrderItem",
      "type": "oneToMany",
      "description": "KitchenTicket agrupa OrderItem que exigem preparo."
    },
    {
      "relationshipId": "dailyShiftContainsOrders",
      "fromEntity": "DailyShift",
      "toEntity": "Order",
      "type": "oneToMany",
      "description": "Orders são registrados dentro de um DailyShift aberto para consolidação e fechamento."
    },
    {
      "relationshipId": "orderHasPayments",
      "fromEntity": "Order",
      "toEntity": "Payment",
      "type": "oneToMany",
      "description": "Um Order pode ter um ou mais Payment associados (ex.: parcial, múltiplos métodos)."
    },
    {
      "relationshipId": "dailyShiftHasPayments",
      "fromEntity": "DailyShift",
      "toEntity": "Payment",
      "type": "oneToMany",
      "description": "Payments são consolidados no DailyShift para fechamento."
    },
    {
      "relationshipId": "dailyShiftHasCashMovements",
      "fromEntity": "DailyShift",
      "toEntity": "CashMovement",
      "type": "oneToMany",
      "description": "CashMovement pertence ao DailyShift para auditoria."
    },
    {
      "relationshipId": "stockConsumptionAffectsInventoryItem",
      "fromEntity": "StockConsumption",
      "toEntity": "InventoryItem",
      "type": "manyToOne",
      "description": "Cada StockConsumption afeta um InventoryItem."
    },
    {
      "relationshipId": "stockConsumptionRelatedToOrderItem",
      "fromEntity": "StockConsumption",
      "toEntity": "OrderItem",
      "type": "manyToOne",
      "description": "StockConsumption pode ser rastreado até o OrderItem que o gerou."
    },
    {
      "relationshipId": "stockAdjustmentAffectsInventoryItem",
      "fromEntity": "StockAdjustment",
      "toEntity": "InventoryItem",
      "type": "manyToOne",
      "description": "StockAdjustment aplica-se a um InventoryItem."
    },
    {
      "relationshipId": "stockAdjustmentInShift",
      "fromEntity": "StockAdjustment",
      "toEntity": "DailyShift",
      "type": "manyToOne",
      "description": "StockAdjustment pode ser registrado dentro de um DailyShift para rastreabilidade operacional."
    }
  ],
  "approvedArtifacts": {
    "mdm": [
      {
        "title": "Cardápio e Categorias como MDM leve (por tenant)",
        "reason": "Categorias e itens do cardápio precisam estabilidade, ordenação e ativação/desativação para POS rápido e relatórios consistentes."
      },
      {
        "title": "Mesas como cadastro operacional",
        "reason": "Necessário para pedidos por mesa e fechamento consolidado; pequenas alterações e status simples (disponível/ocupada/desativada)."
      }
    ],
    "horizontals": [
      {
        "title": "Pagamentos e conciliação de caixa no fechamento",
        "reason": "Registro de recebimentos por método e movimentos de caixa é regra de negócio para fechar turno e suportar takeout pago no ato e mesas no fechamento."
      }
    ],
    "plugins": [
      {
        "title": "Integração fiscal/nota e TEF (opcional)",
        "reason": "Pode ser necessário por país/operadora; manter como plugin futuro para não travar MVP."
      }
    ],
    "agents": [
      {
        "title": "Agente IA de insights de vendas",
        "reason": "Gera resumo do dia e sugestões de promoção (7 dias) chamando o proxy LLM da plataforma e usando dados operacionais do módulo."
      },
      {
        "title": "Agente de monitoramento de estoque baixo e sugestão de reposição",
        "reason": "Complementa alertas do dashboard com priorização e impacto (itens do cardápio afetados) a partir de níveis mínimos e consumo recente."
      },
      {
        "title": "Sinais/plataforma: autenticação/RBAC, i18n, multi-tenant, runtime de tarefas e proxy LLM",
        "reason": "Assumir capacidades nativas da plataforma; modelar apenas o domínio (pedidos, cozinha, estoque, turno, pagamentos)."
      }
    ]
  }
} as const;

export default cafeFlowModule;
