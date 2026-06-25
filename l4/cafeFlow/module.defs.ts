/// <mls fileReference="_102050_/l4/cafeFlow/module.defs.ts" enhancement="_blank"/>

export const cafeFlowModule = {
  "module": {
    "moduleName": "cafeFlow",
    "title": "cafeFlow",
    "purpose": "Agilizar o atendimento (POS), coordenar o preparo na cozinha, controlar estoque simples por ingredientes e suportar fechamento de turno e visão diária de vendas, com assistência de IA para insights operacionais.",
    "businessDomain": "Food service (cafeterias e lanchonetes) — operações de pedidos, cozinha, estoque e turnos",
    "languages": [
      "pt-BR",
      "en"
    ],
    "visualStyle": "Profissional, alto contraste, otimizado para toque e uso rápido em balcão/cozinha (UI enxuta, estados claros, tipografia legível)."
  },
  "actors": [
    {
      "actorId": "attendant",
      "title": "Atendente",
      "description": "Registra pedidos rapidamente no POS, acompanha status e entrega ao cliente."
    },
    {
      "actorId": "cashier",
      "title": "Caixa",
      "description": "Finaliza pedidos, confere totais, apoia fechamento de turno e correções operacionais."
    },
    {
      "actorId": "managerOwner",
      "title": "Gerente/Proprietário",
      "description": "Gerencia cardápio, preços, receitas/ingredientes, estoque e acompanha resultados do dia/turno."
    },
    {
      "actorId": "cook",
      "title": "Cozinheiro",
      "description": "Visualiza fila de preparo e atualiza status de itens/pedidos na cozinha."
    }
  ],
  "capabilities": [
    {
      "capabilityId": "manageMenuItemsAndRecipes",
      "title": "Gerenciar itens do cardápio e receitas (ingredientes)",
      "description": "Criar/editar itens do cardápio com categoria, preço e composição por ingredientes de estoque (receita), para suportar POS e baixa automática de estoque.",
      "actor": "managerOwner",
      "priority": "now",
      "behaviorHint": "operation"
    },
    {
      "capabilityId": "manageStockItems",
      "title": "Gerenciar itens de estoque",
      "description": "Cadastrar/editar itens de estoque (unidade, quantidade atual, nível mínimo) e manter dados básicos para alertas e consumo por venda.",
      "actor": "managerOwner",
      "priority": "now",
      "behaviorHint": "operation"
    },
    {
      "capabilityId": "adjustStock",
      "title": "Ajustar/receber estoque",
      "description": "Registrar entradas (recebimento) e ajustes manuais (perdas/contagem) para manter estoque confiável.",
      "actor": "managerOwner",
      "priority": "now",
      "behaviorHint": "operation"
    },
    {
      "capabilityId": "posCreateAndEditOrder",
      "title": "Registrar pedido no POS (mesa/takeout)",
      "description": "Criar pedido, definir tipo (mesa ou takeout), adicionar/remover itens, observar totais e encaminhar para cozinha.",
      "actor": "attendant",
      "priority": "now",
      "behaviorHint": "workflow"
    },
    {
      "capabilityId": "kitchenOrderQueueAndStatus",
      "title": "Fila da cozinha e atualização de status",
      "description": "Visualizar pedidos/itens em preparo e atualizar estados (ex.: em preparo, pronto, entregue/cancelado) conforme regra de transição.",
      "actor": "cook",
      "priority": "now",
      "behaviorHint": "workflow"
    },
    {
      "capabilityId": "finalizeOrder",
      "title": "Finalizar pedido (encerrar atendimento)",
      "description": "Marcar pedido como concluído/entregue e, quando aplicável, registrar forma simples de fechamento (sem módulo financeiro completo).",
      "actor": "cashier",
      "priority": "now",
      "behaviorHint": "workflow"
    },
    {
      "capabilityId": "autoDecrementInventoryFromOrders",
      "title": "Baixar estoque automaticamente a partir de pedidos",
      "description": "Ao confirmar itens do pedido (ou ao finalizar), consumir quantidades de ingredientes conforme receita e registrar movimentações de estoque para rastreio simples.",
      "actor": "cashier",
      "priority": "now",
      "behaviorHint": "either"
    },
    {
      "capabilityId": "dailyShiftOpenClose",
      "title": "Abrir e fechar turno diário",
      "description": "Abrir turno, acompanhar progresso e fechar com consolidação de vendas do período e checklist operacional.",
      "actor": "managerOwner",
      "priority": "now",
      "behaviorHint": "workflow"
    },
    {
      "capabilityId": "shiftCloseReport",
      "title": "Gerar relatório de fechamento de turno",
      "description": "Gerar visão resumida do turno (vendas, pedidos, cancelamentos, principais itens, alertas) para conferência e registro.",
      "actor": "managerOwner",
      "priority": "now",
      "behaviorHint": "operation"
    },
    {
      "capabilityId": "operationalDashboard",
      "title": "Dashboard operacional do dia",
      "description": "Consultar vendas de hoje, itens mais vendidos e itens com estoque baixo (baseado em mínimos).",
      "actor": "managerOwner",
      "priority": "soon",
      "behaviorHint": "operation"
    },
    {
      "capabilityId": "aiSalesSummary",
      "title": "IA: resumo de vendas do dia",
      "description": "Gerar texto de resumo operacional do dia/turno (ex.: volume, picos, itens destaque, rupturas) chamando o proxy LLM da plataforma.",
      "actor": "managerOwner",
      "priority": "soon",
      "behaviorHint": "operation"
    },
    {
      "capabilityId": "aiPromotionSuggestions7d",
      "title": "IA: sugerir itens para promover (últimos 7 dias)",
      "description": "Sugerir itens para promoção com base em tendências e margem operacional aproximada (quando disponível), chamando o proxy LLM da plataforma.",
      "actor": "managerOwner",
      "priority": "soon",
      "behaviorHint": "operation"
    },
    {
      "capabilityId": "lowStockReview",
      "title": "Revisar alertas de estoque baixo",
      "description": "Listar itens críticos (abaixo do mínimo) e registrar ações (ajuste, compra planejada) para evitar ruptura.",
      "actor": "managerOwner",
      "priority": "soon",
      "behaviorHint": "either"
    },
    {
      "capabilityId": "manageMenuCategories",
      "title": "Gerenciar categorias de cardápio",
      "description": "Cadastrar/editar/ordenar/desativar categorias de cardápio para padronizar navegação do POS e relatórios simples.",
      "actor": "managerOwner",
      "priority": "soon",
      "behaviorHint": "operation"
    },
    {
      "capabilityId": "manageTables",
      "title": "Gerenciar mesas",
      "description": "Cadastrar/editar/desativar mesas para uso rápido no POS e reduzir erros de digitação.",
      "actor": "managerOwner",
      "priority": "soon",
      "behaviorHint": "operation"
    }
  ],
  "ontology": {
    "entities": {
      "MenuItem": {
        "title": "Item do Cardápio",
        "description": "Produto vendável no POS (ex.: café, sanduíche), com preço, status de disponibilidade e vínculo com categoria e receita de ingredientes (StockItem) para consumo de estoque.",
        "kind": "core",
        "ownership": "moduleOwned",
        "statusEnum": [
          "active",
          "inactive",
          "temporarilyUnavailable"
        ]
      },
      "Order": {
        "title": "Pedido",
        "description": "Registro do atendimento (mesa ou takeout) contendo itens, quantidades, timestamps e status para coordenação POS↔cozinha↔entrega e base para relatórios.",
        "kind": "core",
        "ownership": "moduleOwned",
        "lifecycleStates": [
          "draft",
          "sentToKitchen",
          "inPreparation",
          "ready",
          "completed",
          "cancelled"
        ]
      },
      "DailyShift": {
        "title": "Turno Diário",
        "description": "Unidade operacional de abertura/fechamento com período, responsável e consolidação de movimentos do dia para fechamento e relatórios.",
        "kind": "core",
        "ownership": "moduleOwned",
        "lifecycleStates": [
          "open",
          "closed"
        ]
      },
      "StockItem": {
        "title": "Item de Estoque",
        "description": "Insumo/ingrediente controlado em quantidade e unidade (ex.: café em gramas, leite em litros), com nível mínimo e status para alertas e consumo por receitas.",
        "kind": "core",
        "ownership": "moduleOwned",
        "statusEnum": [
          "active",
          "inactive"
        ]
      },
      "MenuCategory": {
        "title": "Categoria de Cardápio",
        "description": "Classificação dos itens do cardápio (ex.: bebidas, salgados) para organização e relatórios simples.",
        "kind": "mdm",
        "ownership": "mdmOwned"
      },
      "Table": {
        "title": "Mesa",
        "description": "Identificador estável de mesa para pedidos locais (número, apelido, capacidade opcional) visando velocidade no POS.",
        "kind": "mdm",
        "ownership": "mdmOwned"
      },
      "RecipeLine": {
        "title": "Linha de Receita",
        "description": "Relação entre MenuItem e StockItem com quantidade/unidade consumida por item vendido (bill of materials simplificada).",
        "kind": "supporting",
        "ownership": "moduleOwned"
      },
      "OrderLine": {
        "title": "Item do Pedido",
        "description": "Linha do pedido com MenuItem, quantidade, observações e status operacional (opcionalmente por item) para cozinha e controle de preparo.",
        "kind": "supporting",
        "ownership": "moduleOwned"
      },
      "StockMovement": {
        "title": "Movimentação de Estoque",
        "description": "Evento de alteração de estoque (baixa por venda, ajuste, recebimento) com motivo, quantidade e referência opcional ao pedido/turno.",
        "kind": "event",
        "ownership": "moduleOwned",
        "lifecycleStates": [
          "pending",
          "posted",
          "reversed"
        ]
      }
    }
  },
  "relationships": [
    {
      "relationshipId": "menuItemBelongsToMenuCategory",
      "fromEntity": "MenuItem",
      "toEntity": "MenuCategory",
      "type": "manyToOne",
      "description": "Cada item do cardápio pode pertencer a uma categoria (para organização e relatório)."
    },
    {
      "relationshipId": "orderAssignedToTable",
      "fromEntity": "Order",
      "toEntity": "Table",
      "type": "manyToOne_optional",
      "description": "Pedidos do tipo mesa referenciam uma mesa; takeout não precisa."
    },
    {
      "relationshipId": "orderHasOrderLines",
      "fromEntity": "Order",
      "toEntity": "OrderLine",
      "type": "oneToMany",
      "description": "Um pedido contém várias linhas de itens."
    },
    {
      "relationshipId": "orderLineReferencesMenuItem",
      "fromEntity": "OrderLine",
      "toEntity": "MenuItem",
      "type": "manyToOne",
      "description": "Cada linha do pedido aponta para um item do cardápio."
    },
    {
      "relationshipId": "menuItemHasRecipeLines",
      "fromEntity": "MenuItem",
      "toEntity": "RecipeLine",
      "type": "oneToMany",
      "description": "Um item do cardápio possui uma receita composta por linhas de ingredientes."
    },
    {
      "relationshipId": "recipeLineReferencesStockItem",
      "fromEntity": "RecipeLine",
      "toEntity": "StockItem",
      "type": "manyToOne",
      "description": "Cada linha de receita referencia um insumo de estoque."
    },
    {
      "relationshipId": "stockMovementAffectsStockItem",
      "fromEntity": "StockMovement",
      "toEntity": "StockItem",
      "type": "manyToOne",
      "description": "Cada movimentação afeta um item de estoque específico."
    },
    {
      "relationshipId": "stockMovementMayReferenceOrder",
      "fromEntity": "StockMovement",
      "toEntity": "Order",
      "type": "manyToOne_optional",
      "description": "Baixas por venda podem referenciar o pedido de origem para auditoria simples."
    },
    {
      "relationshipId": "orderCapturedWithinDailyShift",
      "fromEntity": "Order",
      "toEntity": "DailyShift",
      "type": "manyToOne_optional",
      "description": "Pedidos podem ser associados ao turno vigente para fechamento e relatórios (associação automática pelo turno aberto)."
    }
  ],
  "approvedArtifacts": {
    "mdm": [
      {
        "title": "MenuCategory (Categoria de Cardápio)",
        "reason": "MDM leve para padronizar categorias e melhorar navegação/relatórios; prioridade soon conforme decisão aceita."
      },
      {
        "title": "Table (Mesa)",
        "reason": "Lista estável de mesas para acelerar POS e reduzir erros; prioridade soon conforme decisão aceita."
      }
    ],
    "horizontals": [
      {
        "title": "Payments/Cash handling (opcional)",
        "reason": "Fechamento de turno frequentemente pede pagamentos/sangria/reforço; manter como horizontal later para não bloquear MVP."
      },
      {
        "title": "Relatórios/BI operacional",
        "reason": "Dashboard e rankings dependem de agregações consistentes; tratar como capacidade horizontal de análise (sem infra)."
      }
    ],
    "plugins": [],
    "agents": [
      {
        "title": "Agente de insights diários (resumo + recomendações)",
        "reason": "Gera resumo de vendas do dia/turno e sugestões de promoção (7 dias) sob demanda ou no fechamento; chama o proxy LLM da plataforma."
      },
      {
        "title": "Agente de alerta de estoque baixo",
        "reason": "Avalia itens abaixo do mínimo e sinaliza no app para ação rápida; não requer infraestrutura externa de notificações."
      }
    ]
  }
} as const;

export default cafeFlowModule;
