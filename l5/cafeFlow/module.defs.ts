/// <mls fileReference="_102050_/l5/cafeFlow/module.defs.ts" enhancement="_blank"/>

export const modulePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "module",
  "artifactId": "cafeFlow",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentFinalizeSolutionPlan",
    "stepId": 11,
    "planId": "plan-finalize-solution-plan"
  },
  "data": {
    "module": {
      "moduleName": "cafeFlow",
      "title": "CafeFlow",
      "purpose": "Agilizar o atendimento de pedidos, coordenar a cozinha e controlar o estoque de forma simples para cafeterias e lanchonetes pequenas.",
      "businessDomain": "Food Service - Cafeterias e Lanchonetes de Pequeno Porte",
      "languages": [
        "pt-BR",
        "en"
      ],
      "visualStyle": {
        "tone": "limpa, moderna, rápida e acolhedora",
        "layout": "Interface responsiva com barra lateral e cartões de ação rápida, otimizada para tablets e desktops no balcão e na cozinha",
        "palette": [
          "#6F4E37",
          "#D4A373",
          "#F5F5F0",
          "#2C2C2C",
          "#E76F51"
        ]
      }
    },
    "actors": [
      {
        "actorId": "attendantCashier",
        "title": "Atendente/Caixa",
        "description": "Atendente ou caixa que lança pedidos no POS, seleciona mesa/takeout e acompanha o andamento."
      },
      {
        "actorId": "cook",
        "title": "Cozinheiro",
        "description": "Cozinheiro que visualiza a fila de pedidos e atualiza os status de preparo."
      },
      {
        "actorId": "managerOwner",
        "title": "Gerente/Proprietário",
        "description": "Gerente ou proprietário que gerencia cardápio, estoque, turnos e acessa relatórios."
      }
    ],
    "capabilities": [
      {
        "capabilityId": "createOrder",
        "title": "Lançar Pedido",
        "description": "Lançar pedidos no POS selecionando itens do cardápio e definindo mesa ou takeout.",
        "actor": "attendantCashier",
        "priority": "now"
      },
      {
        "capabilityId": "openDailyShift",
        "title": "Abrir Turno Diário",
        "description": "Abrir o turno diário antes de iniciar as vendas.",
        "actor": "attendantCashier",
        "priority": "now"
      },
      {
        "capabilityId": "updateKitchenStatus",
        "title": "Atualizar Status da Cozinha",
        "description": "Visualizar a fila de pedidos e atualizar os status de preparo na cozinha.",
        "actor": "cook",
        "priority": "now"
      },
      {
        "capabilityId": "manageMenu",
        "title": "Gerenciar Cardápio",
        "description": "Cadastrar, editar e remover itens do cardápio, categorias, preços e ingredientes.",
        "actor": "managerOwner",
        "priority": "now"
      },
      {
        "capabilityId": "manageStock",
        "title": "Gerenciar Estoque",
        "description": "Controlar entradas, saídas, ajustes e alertas de itens de estoque.",
        "actor": "managerOwner",
        "priority": "now"
      },
      {
        "capabilityId": "closeDailyShift",
        "title": "Fechar Turno Diário",
        "description": "Realizar o fechamento do turno e emitir o relatório de vendas do dia.",
        "actor": "managerOwner",
        "priority": "now"
      },
      {
        "capabilityId": "viewDashboard",
        "title": "Visualizar Dashboard",
        "description": "Acompanhar vendas de hoje, itens mais vendidos e alertas de estoque baixo.",
        "actor": "managerOwner",
        "priority": "now"
      },
      {
        "capabilityId": "askSalesAssistant",
        "title": "Consultar Assistente IA",
        "description": "Consultar o assistente IA para resumos de vendas do dia e sugestões de promoção.",
        "actor": "managerOwner",
        "priority": "now"
      },
      {
        "capabilityId": "cancelOrder",
        "title": "Cancelar Pedido",
        "description": "Cancelar um pedido e reverter baixa de estoque quando aplicável.",
        "actor": "managerOwner",
        "priority": "now"
      }
    ],
    "ontology": {
      "entities": {
        "DailyShift": {
          "title": "Turno Diário",
          "description": "Período operacional diário que delimita quando a loja está aberta para vendas, servindo de base para fechamento e relatórios.",
          "ownership": "mdmOwned",
          "kind": "calendar"
        },
        "MenuCategory": {
          "title": "Categoria do Cardápio",
          "description": "Agrupamento de itens do cardápio, como bebidas, salgados ou doces, usado para organizar o POS e a gestão.",
          "ownership": "mdmOwned",
          "kind": "category"
        },
        "MenuItem": {
          "title": "Item do Cardápio",
          "description": "Item vendido no cardápio, com nome, categoria, preço, disponibilidade e vínculo com ingredientes em estoque.",
          "ownership": "mdmOwned",
          "kind": "product"
        },
        "MenuItemIngredient": {
          "title": "Ingrediente do Item do Cardápio",
          "description": "Relação entre um item do cardápio e os insumos necessários para sua produção, com quantidade por unidade vendida.",
          "ownership": "moduleOwned",
          "kind": "composition"
        },
        "Order": {
          "title": "Pedido",
          "description": "Compromisso de venda central do domínio, contendo itens do cardápio, identificação de mesa ou takeout e ciclo de status.",
          "ownership": "mdmOwned",
          "kind": "transaction"
        },
        "OrderItem": {
          "title": "Item do Pedido",
          "description": "Linha de um pedido, vinculada a um item do cardápio, com quantidade, preço unitário e observações.",
          "ownership": "moduleOwned",
          "kind": "transactionItem"
        },
        "StockItem": {
          "title": "Item de Estoque",
          "description": "Insumo controlado em estoque, como café, pão ou leite, com unidade de medida, saldo e ponto de alerta.",
          "ownership": "mdmOwned",
          "kind": "inventory"
        },
        "StockMovement": {
          "title": "Movimentação de Estoque",
          "description": "Registro de entrada, saída ou ajuste de estoque, vinculado a um item de estoque e, quando aplicável, a um pedido.",
          "ownership": "moduleOwned",
          "kind": "transaction"
        }
      }
    },
    "relationships": [
      {
        "relationshipId": "MenuCategoryHasMenuItems",
        "fromEntity": "MenuCategory",
        "toEntity": "MenuItem",
        "type": "one-to-many",
        "description": "Uma categoria pode conter vários itens do cardápio."
      },
      {
        "relationshipId": "MenuItemHasIngredients",
        "fromEntity": "MenuItem",
        "toEntity": "MenuItemIngredient",
        "type": "one-to-many",
        "description": "Um item do cardápio possui uma lista de ingredientes necessários."
      },
      {
        "relationshipId": "IngredientUsesStockItem",
        "fromEntity": "MenuItemIngredient",
        "toEntity": "StockItem",
        "type": "many-to-one",
        "description": "Cada ingrediente do cardápio referencia um item de estoque."
      },
      {
        "relationshipId": "OrderHasItems",
        "fromEntity": "Order",
        "toEntity": "OrderItem",
        "type": "one-to-many",
        "description": "Um pedido é composto por vários itens de pedido."
      },
      {
        "relationshipId": "OrderItemRefersMenuItem",
        "fromEntity": "OrderItem",
        "toEntity": "MenuItem",
        "type": "many-to-one",
        "description": "Cada item de pedido referencia um item do cardápio."
      },
      {
        "relationshipId": "OrderBelongsToShift",
        "fromEntity": "Order",
        "toEntity": "DailyShift",
        "type": "many-to-one",
        "description": "Todo pedido pertence a um turno diário."
      },
      {
        "relationshipId": "StockMovementRefersStockItem",
        "fromEntity": "StockMovement",
        "toEntity": "StockItem",
        "type": "many-to-one",
        "description": "Cada movimentação de estoque referencia um item de estoque."
      },
      {
        "relationshipId": "StockMovementRelatedToOrder",
        "fromEntity": "StockMovement",
        "toEntity": "Order",
        "type": "many-to-one",
        "description": "Movimentações de baixa de estoque podem estar vinculadas ao pedido que as consumiu."
      }
    ]
  }
} as const;

export default modulePlan;
