/// <mls fileReference="_102050_/l4/cafeFlow/module.defs.ts" enhancement="_blank"/>

export const cafeFlowModule = {
  "module": {
    "moduleName": "cafeFlow",
    "purpose": "Agilizar o atendimento de pedidos (POS), coordenar o status na cozinha, simplificar o fechamento por turno e manter um controle simples de estoque ligado aos ingredientes/insumos, com apoio de IA para insights de vendas.",
    "businessDomain": "Food service (cafeterias e lanchonetes pequenas) — POS, cozinha, turno e estoque simples",
    "languages": [
      "pt-BR",
      "en"
    ],
    "visualStyle": "Profissional, alto contraste e legibilidade para operação rápida (toques grandes, cores por status, modo balcão/cozinha)."
  },
  "ontology": {
    "entities": {
      "MenuItem": {
        "title": "Item do Cardápio",
        "description": "Produto vendido no POS, com categoria, preço e receita (lista de insumos/quantidades) e sinalização de disponibilidade.",
        "kind": "mdm",
        "ownership": "moduleOwned",
        "statusEnum": [
          "active",
          "inactive"
        ]
      },
      "MenuCategory": {
        "title": "Categoria de Cardápio",
        "description": "Classificação para agrupar e filtrar itens do cardápio (ex.: cafés, salgados, doces).",
        "kind": "mdm",
        "ownership": "moduleOwned"
      },
      "InventoryItem": {
        "title": "Item de Estoque (Insumo)",
        "description": "Ingrediente/insumo controlado em estoque, com unidade de medida, nível mínimo e custo opcional.",
        "kind": "mdm",
        "ownership": "moduleOwned"
      },
      "RecipeComponent": {
        "title": "Componente de Receita",
        "description": "Vínculo persistente entre MenuItem e InventoryItem, registrando o quanto de cada insumo é consumido por venda.",
        "kind": "supporting",
        "ownership": "moduleOwned"
      },
      "Order": {
        "title": "Pedido",
        "description": "Pedido de venda (mesa ou takeout) com status e vínculo ao DailyShift em que ocorreu.",
        "kind": "core",
        "ownership": "moduleOwned",
        "statusEnum": [
          "draft",
          "sentToKitchen",
          "inPreparation",
          "ready",
          "delivered",
          "cancelled"
        ]
      },
      "OrderItem": {
        "title": "Item do Pedido",
        "description": "Linha do pedido com MenuItem, quantidade e preço aplicado no momento.",
        "kind": "core",
        "ownership": "moduleOwned"
      },
      "Table": {
        "title": "Mesa",
        "description": "Referência estável das mesas do salão para associar pedidos e acelerar operação.",
        "kind": "mdm",
        "ownership": "moduleOwned",
        "statusEnum": [
          "active",
          "inactive"
        ]
      },
      "DailyShift": {
        "title": "Turno Diário",
        "description": "Período operacional com abertura/fechamento, responsável e agregados para fechamento e conferência.",
        "kind": "core",
        "ownership": "moduleOwned",
        "lifecycleStates": [
          "open",
          "closed"
        ]
      },
      "StockMovement": {
        "title": "Movimentação de Estoque",
        "description": "Registro de entrada/saída/ajuste de InventoryItem. Pode ser estornado mantendo rastreabilidade.",
        "kind": "event",
        "ownership": "moduleOwned",
        "lifecycleStates": [
          "posted",
          "voided"
        ]
      },
      "SalesInsight": {
        "title": "Insight de Vendas",
        "description": "Registro imutável (append-only) de um insight/resumo gerado (manual ou IA) para auditoria e reconsulta.",
        "kind": "supporting",
        "ownership": "moduleOwned"
      }
    }
  },
  "relationships": [
    {
      "relationshipId": "menuCategoryGroupsMenuItems",
      "fromEntity": "MenuCategory",
      "toEntity": "MenuItem",
      "type": "oneToMany",
      "description": "Uma MenuCategory agrupa vários MenuItem; cada MenuItem pertence a uma MenuCategory."
    },
    {
      "relationshipId": "menuItemHasRecipeComponents",
      "fromEntity": "MenuItem",
      "toEntity": "RecipeComponent",
      "type": "oneToMany",
      "description": "Um MenuItem possui RecipeComponent que determinam consumo de InventoryItem."
    },
    {
      "relationshipId": "recipeComponentUsesInventoryItem",
      "fromEntity": "RecipeComponent",
      "toEntity": "InventoryItem",
      "type": "manyToOne",
      "description": "Cada RecipeComponent aponta para um InventoryItem e a quantidade consumida."
    },
    {
      "relationshipId": "orderHasOrderItems",
      "fromEntity": "Order",
      "toEntity": "OrderItem",
      "type": "oneToMany",
      "description": "Um Order possui OrderItem com itens vendidos e quantidades."
    },
    {
      "relationshipId": "orderItemReferencesMenuItem",
      "fromEntity": "OrderItem",
      "toEntity": "MenuItem",
      "type": "manyToOne",
      "description": "Cada OrderItem referencia um MenuItem (preço é snapshot no OrderItem)."
    },
    {
      "relationshipId": "orderOptionalTable",
      "fromEntity": "Order",
      "toEntity": "Table",
      "type": "manyToOneOptional",
      "description": "Order pode estar associado a uma Table (mesa) ou não (takeout)."
    },
    {
      "relationshipId": "shiftHasOrders",
      "fromEntity": "DailyShift",
      "toEntity": "Order",
      "type": "oneToMany",
      "description": "Um DailyShift agrega os Order registrados durante seu período aberto."
    },
    {
      "relationshipId": "inventoryItemHasMovements",
      "fromEntity": "InventoryItem",
      "toEntity": "StockMovement",
      "type": "oneToMany",
      "description": "StockMovement registram alterações de quantidade do InventoryItem ao longo do tempo."
    },
    {
      "relationshipId": "orderMayGenerateStockMovements",
      "fromEntity": "Order",
      "toEntity": "StockMovement",
      "type": "oneToManyOptional",
      "description": "Consumos/estornos de insumos podem ser registrados como StockMovement vinculados ao Order."
    },
    {
      "relationshipId": "shiftMayHaveInsights",
      "fromEntity": "DailyShift",
      "toEntity": "SalesInsight",
      "type": "oneToManyOptional",
      "description": "SalesInsight podem ser associados ao DailyShift para consulta no fechamento e histórico."
    }
  ],
  "approvedArtifacts": {
    "mdm": [
      {
        "title": "Cardápio (MenuCategory e MenuItem) como dados mestres com ativação/desativação",
        "reason": "Cardápio muda com baixa frequência e precisa ser consistente no POS e relatórios."
      },
      {
        "title": "InventoryItem como dado mestre com nível mínimo",
        "reason": "Base para alertas de estoque baixo e para receita/baixa automática."
      },
      {
        "title": "Table como referência opcional (introduzir após MVP)",
        "reason": "Acelera operação e reduz erros de digitação em pedidos por mesa."
      }
    ],
    "horizontals": [
      {
        "title": "Caixa/Financeiro simplificado (fechamento)",
        "reason": "Fechamento por turno pode evoluir para sumarização de entradas/saídas e conferência; sem reconstruir pagamentos neste estágio."
      }
    ],
    "plugins": [],
    "agents": [
      {
        "title": "Agente de Insights de Vendas (diário e 7 dias)",
        "reason": "Gera resumo e sugestões promocionais usando dados de pedidos/itens e chama o proxy LLM da plataforma."
      },
      {
        "title": "Agente de Monitoramento de Estoque Baixo",
        "reason": "Identifica itens abaixo do mínimo e sugere reposição baseada em consumo; útil mas pode vir depois do MVP."
      }
    ]
  }
} as const;

export default cafeFlowModule;
