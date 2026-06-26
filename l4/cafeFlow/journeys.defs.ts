/// <mls fileReference="_102050_/l4/cafeFlow/journeys.defs.ts" enhancement="_blank"/>

export const cafeFlowJourneys = {
  "moduleName": "cafeFlow",
  "note": "Derivado das stories embutidas em workflows/operations (visao consolidada, nao fonte).",
  "journeys": [
    {
      "journeyId": "kitchenProductionFlow",
      "owner": "workflow:kitchenProductionFlow",
      "title": "Fluxo de produção da cozinha",
      "actor": "cook",
      "goal": "produzir os itens recebidos e sinalizar o andamento",
      "soThat": "",
      "steps": [
        "consultar tickets pendentes",
        "atualizar status do ticket conforme preparo",
        "atualizar status dos itens do pedido"
      ],
      "outcome": "cozinha produz itens e status ficam sincronizados"
    },
    {
      "journeyId": "consumeIngredientsOnConfirmation",
      "owner": "workflow:consumeIngredientsOnConfirmation",
      "title": "Baixar estoque por consumo de ingredientes",
      "actor": "attendant",
      "goal": "registrar consumo de ingredientes ao confirmar pedido",
      "soThat": "",
      "steps": [
        "confirmar pedido",
        "sistema calcula ingredientes por receita",
        "registrar consumo no estoque"
      ],
      "outcome": "estoque consumido automaticamente por pedido confirmado"
    },
    {
      "journeyId": "takeoutOrderLifecycle",
      "owner": "workflow:takeoutOrderLifecycle",
      "title": "Ciclo de pedido (takeout)",
      "actor": "attendant",
      "goal": "registrar e encaminhar um pedido para viagem",
      "soThat": "",
      "steps": [
        "criar pedido do tipo takeout",
        "adicionar itens ao pedido",
        "enviar pedido para a cozinha",
        "atualizar status do pedido conforme produção"
      ],
      "outcome": "pedido takeout registrado, enviado à cozinha e acompanhado até pronto"
    },
    {
      "journeyId": "closeDailyShift",
      "owner": "workflow:closeDailyShift",
      "title": "Fechar turno diário (fechamento de caixa)",
      "actor": "cashier",
      "goal": "encerrar o turno com conferência de caixa",
      "soThat": "",
      "steps": [
        "iniciar fechamento do turno",
        "informar valores de fechamento",
        "sistema registra movimento e encerra o turno"
      ],
      "outcome": "turno fechado e caixa conciliado"
    },
    {
      "journeyId": "dineInOrderLifecycle",
      "owner": "workflow:dineInOrderLifecycle",
      "title": "Ciclo de pedido (mesa)",
      "actor": "attendant",
      "goal": "registrar pedido de mesa e acompanhar até finalização",
      "soThat": "",
      "steps": [
        "selecionar mesa e criar pedido dine-in",
        "adicionar itens ao pedido",
        "enviar pedido para a cozinha",
        "atualizar status do pedido durante o serviço",
        "atualizar ocupação da mesa"
      ],
      "outcome": "pedido de mesa registrado, cozinha notificada e mesa controlada"
    },
    {
      "journeyId": "openDailyShift",
      "owner": "workflow:openDailyShift",
      "title": "Abrir turno diário",
      "actor": "cashier",
      "goal": "abrir o turno do dia com saldo inicial",
      "soThat": "",
      "steps": [
        "informar abertura de turno",
        "registrar valor de abertura do caixa",
        "sistema cria o turno e registra o movimento de caixa"
      ],
      "outcome": "turno diário aberto e caixa inicial registrado"
    },
    {
      "journeyId": "manageMenuCategories",
      "owner": "operation:manageMenuCategories",
      "title": "Gerenciar categorias do cardápio",
      "actor": "manager",
      "goal": "organizar categorias do cardápio",
      "soThat": "",
      "steps": [
        "abrir cadastro de categorias",
        "criar, editar ou remover categorias",
        "salvar alterações"
      ],
      "outcome": "categorias do cardápio atualizadas"
    },
    {
      "journeyId": "browseMenuForPos",
      "owner": "operation:browseMenuForPos",
      "title": "Consultar cardápio no POS",
      "actor": "attendant",
      "goal": "consultar itens disponíveis no POS",
      "soThat": "possa atender os clientes com agilidade",
      "steps": [
        "abrir cardápio no POS",
        "filtrar ou buscar itens",
        "visualizar detalhes do item"
      ],
      "outcome": "itens do cardápio exibidos para atendimento"
    },
    {
      "journeyId": "createDailyShift",
      "owner": "operation:createDailyShift",
      "title": "Criar turno diário",
      "actor": "cashier",
      "goal": "registrar abertura do turno",
      "soThat": "",
      "steps": [
        "iniciar abertura de turno",
        "confirmar dados do turno",
        "sistema cria o turno"
      ],
      "outcome": "turno diário criado"
    },
    {
      "journeyId": "manageMenuItems",
      "owner": "operation:manageMenuItems",
      "title": "Gerenciar itens do cardápio",
      "actor": "manager",
      "goal": "manter itens do cardápio atualizados",
      "soThat": "",
      "steps": [
        "abrir cadastro de itens",
        "criar, editar ou desativar itens",
        "salvar alterações"
      ],
      "outcome": "itens do cardápio atualizados"
    },
    {
      "journeyId": "recordOpeningCashMovement",
      "owner": "operation:recordOpeningCashMovement",
      "title": "Registrar movimento de caixa de abertura",
      "actor": "cashier",
      "goal": "registrar saldo inicial do caixa",
      "soThat": "",
      "steps": [
        "informar valor de abertura",
        "confirmar registro",
        "sistema grava movimento de abertura"
      ],
      "outcome": "movimento de caixa de abertura registrado"
    },
    {
      "journeyId": "manageInventoryItems",
      "owner": "operation:manageInventoryItems",
      "title": "Gerenciar itens de estoque (ingredientes)",
      "actor": "manager",
      "goal": "manter ingredientes de estoque atualizados",
      "soThat": "",
      "steps": [
        "abrir cadastro de estoque",
        "criar, editar ou desativar itens",
        "salvar alterações"
      ],
      "outcome": "itens de estoque atualizados"
    },
    {
      "journeyId": "addOrderItem",
      "owner": "operation:addOrderItem",
      "title": "Adicionar item ao pedido",
      "actor": "attendant",
      "goal": "registrar itens no pedido",
      "soThat": "para compor o pedido do cliente",
      "steps": [
        "selecionar item do cardápio",
        "definir quantidade e observações",
        "adicionar ao pedido"
      ],
      "outcome": "itens adicionados ao pedido"
    },
    {
      "journeyId": "createOrder",
      "owner": "operation:createOrder",
      "title": "Criar pedido",
      "actor": "attendant",
      "goal": "registrar um novo pedido",
      "soThat": "",
      "steps": [
        "iniciar novo pedido",
        "definir tipo do pedido",
        "confirmar criação"
      ],
      "outcome": "pedido criado"
    },
    {
      "journeyId": "createKitchenTicket",
      "owner": "operation:createKitchenTicket",
      "title": "Criar ticket de cozinha",
      "actor": "attendant",
      "goal": "enviar o pedido para produção",
      "soThat": "",
      "steps": [
        "confirmar itens do pedido",
        "enviar para cozinha",
        "sistema cria ticket"
      ],
      "outcome": "ticket de cozinha criado"
    },
    {
      "journeyId": "updateTableStatus",
      "owner": "operation:updateTableStatus",
      "title": "Atualizar ocupação da mesa",
      "actor": "attendant",
      "goal": "manter status de mesa consistente",
      "soThat": "",
      "steps": [
        "selecionar mesa",
        "alterar status de ocupação",
        "salvar atualização"
      ],
      "outcome": "ocupação da mesa atualizada"
    },
    {
      "journeyId": "updateKitchenTicketStatus",
      "owner": "operation:updateKitchenTicketStatus",
      "title": "Atualizar status do ticket de cozinha",
      "actor": "cook",
      "goal": "marcar andamento da produção",
      "soThat": "a fila de preparo da cozinha seja gerenciada e os pedidos entregues corretamente",
      "steps": [
        "selecionar ticket",
        "alterar status para em preparo/pronto",
        "confirmar atualização"
      ],
      "outcome": "status do ticket atualizado"
    },
    {
      "journeyId": "updateOrderStatus",
      "owner": "operation:updateOrderStatus",
      "title": "Atualizar status do pedido",
      "actor": "attendant",
      "goal": "acompanhar progresso do pedido",
      "soThat": "",
      "steps": [
        "selecionar pedido",
        "alterar status conforme andamento",
        "confirmar atualização"
      ],
      "outcome": "status do pedido atualizado"
    },
    {
      "journeyId": "recordPayment",
      "owner": "operation:recordPayment",
      "title": "Registrar pagamento/recebimento",
      "actor": "cashier",
      "goal": "registrar recebimento do pedido",
      "soThat": "",
      "steps": [
        "selecionar pedido",
        "informar método e valor do pagamento",
        "confirmar registro"
      ],
      "outcome": "pagamento registrado"
    },
    {
      "journeyId": "updateOrderItemStatus",
      "owner": "operation:updateOrderItemStatus",
      "title": "Atualizar status de item do pedido",
      "actor": "cook",
      "goal": "sincronizar andamento entre cozinha e POS",
      "soThat": "a equipe de salão e o POS tenham visibilidade do progresso em tempo real",
      "steps": [
        "selecionar item do pedido",
        "alterar status do item",
        "confirmar atualização"
      ],
      "outcome": "status do item atualizado e sincronizado"
    },
    {
      "journeyId": "viewKitchenTickets",
      "owner": "operation:viewKitchenTickets",
      "title": "Consultar tickets da cozinha",
      "actor": "cook",
      "goal": "ver pedidos pendentes",
      "soThat": "",
      "steps": [
        "abrir fila de tickets",
        "filtrar por status",
        "visualizar detalhes"
      ],
      "outcome": "tickets de cozinha exibidos"
    },
    {
      "journeyId": "viewOperationalDashboard",
      "owner": "operation:viewOperationalDashboard",
      "title": "Ver dashboard operacional do dia",
      "actor": "manager",
      "goal": "acompanhar indicadores do dia",
      "soThat": "",
      "steps": [
        "abrir dashboard operacional",
        "visualizar vendas, pedidos e caixa",
        "analisar indicadores"
      ],
      "outcome": "visão operacional do dia disponível"
    },
    {
      "journeyId": "aiPromotionSuggestions",
      "owner": "operation:aiPromotionSuggestions",
      "title": "Assistente IA: sugestões de itens para promover (últimos 7 dias)",
      "actor": "manager",
      "goal": "obter sugestões de promoção com IA",
      "soThat": "",
      "steps": [
        "solicitar sugestões de promoção",
        "plataforma consulta histórico e chama IA",
        "visualizar sugestões no idioma configurado"
      ],
      "outcome": "sugestões de itens para promover apresentadas"
    },
    {
      "journeyId": "createStockConsumption",
      "owner": "operation:createStockConsumption",
      "title": "Registrar consumo de estoque",
      "actor": "attendant",
      "goal": "baixar ingredientes consumidos",
      "soThat": "",
      "steps": [
        "confirmar pedido",
        "verificar itens e receitas",
        "registrar consumo no estoque"
      ],
      "outcome": "consumo de estoque registrado"
    },
    {
      "journeyId": "generateShiftCloseReport",
      "owner": "operation:generateShiftCloseReport",
      "title": "Gerar relatório de fechamento de turno",
      "actor": "manager",
      "goal": "obter resumo do fechamento do turno",
      "soThat": "possa revisar o desempenho operacional e conciliar o caixa",
      "steps": [
        "selecionar turno",
        "gerar relatório de fechamento",
        "visualizar ou exportar"
      ],
      "outcome": "relatório de fechamento gerado"
    },
    {
      "journeyId": "aiSalesSummary",
      "owner": "operation:aiSalesSummary",
      "title": "Assistente IA: resumo de vendas do dia",
      "actor": "manager",
      "goal": "receber resumo de vendas por IA",
      "soThat": "",
      "steps": [
        "solicitar resumo de vendas do dia",
        "plataforma consulta dados e chama IA",
        "visualizar resumo no idioma configurado"
      ],
      "outcome": "resumo de vendas apresentado"
    },
    {
      "journeyId": "manageTables",
      "owner": "operation:manageTables",
      "title": "Gerenciar mesas",
      "actor": "manager",
      "goal": "manter cadastro de mesas",
      "soThat": "",
      "steps": [
        "abrir cadastro de mesas",
        "criar, editar ou remover mesas",
        "salvar alterações"
      ],
      "outcome": "mesas atualizadas"
    }
  ]
} as const;

export default cafeFlowJourneys;
