/// <mls fileReference="_102050_/l5/cafeFlow/uiConsolidation.defs.ts" enhancement="_blank"/>

export const uiConsolidationPlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "uiConsolidation",
  "artifactId": "uiConsolidation",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanUiConsolidation",
    "stepId": 28,
    "planId": "plan-ui-consolidation"
  },
  "data": {
    "sharedComponents": [
      {
        "componentId": "stockLowAlertsList",
        "title": "Lista de alertas de estoque baixo",
        "kind": "organism",
        "pages": [
          "dashboard",
          "stockManagement"
        ],
        "replacesOrganisms": [
          "dashboard.ListaAlertasEstoque",
          "stockManagement.ListaAlertasEstoqueBaixo"
        ],
        "responsibilities": "Exibir alertas de estoque baixo para reposição com possibilidade de filtrar/consultar itens em alerta."
      }
    ],
    "namingFixes": [
      {
        "pageId": "aiAssistant",
        "organismName": "FormularioPergunta",
        "suggestedName": "formularioPergunta",
        "reason": "Padronizar para camelCase começando com letra minúscula."
      },
      {
        "pageId": "aiAssistant",
        "organismName": "RespostaAssistente",
        "suggestedName": "respostaAssistente",
        "reason": "Padronizar para camelCase começando com letra minúscula."
      },
      {
        "pageId": "dashboard",
        "organismName": "FiltroPeriodoMetrica",
        "suggestedName": "filtroPeriodoMetrica",
        "reason": "Padronizar para camelCase começando com letra minúscula."
      },
      {
        "pageId": "dashboard",
        "organismName": "CardsResumoVendas",
        "suggestedName": "cardsResumoVendas",
        "reason": "Padronizar para camelCase começando com letra minúscula."
      },
      {
        "pageId": "dashboard",
        "organismName": "RankingItensVendidos",
        "suggestedName": "rankingItensVendidos",
        "reason": "Padronizar para camelCase começando com letra minúscula."
      },
      {
        "pageId": "dashboard",
        "organismName": "ListaAlertasEstoque",
        "suggestedName": "listaAlertasEstoque",
        "reason": "Padronizar para camelCase começando com letra minúscula."
      },
      {
        "pageId": "dashboard",
        "organismName": "SugestoesPromocao",
        "suggestedName": "sugestoesPromocao",
        "reason": "Padronizar para camelCase começando com letra minúscula."
      },
      {
        "pageId": "kitchenDisplay",
        "organismName": "Lista de pedidos em andamento",
        "suggestedName": "listaPedidosEmAndamento",
        "reason": "Remover espaços e padronizar para camelCase."
      },
      {
        "pageId": "kitchenDisplay",
        "organismName": "Atualização de status do pedido",
        "suggestedName": "atualizacaoStatusPedido",
        "reason": "Remover espaços e padronizar para camelCase."
      },
      {
        "pageId": "menuManagement",
        "organismName": "Lista de Categorias",
        "suggestedName": "listaCategorias",
        "reason": "Remover espaços e padronizar para camelCase."
      },
      {
        "pageId": "menuManagement",
        "organismName": "Editor de Categoria",
        "suggestedName": "editorCategoria",
        "reason": "Remover espaços e padronizar para camelCase."
      },
      {
        "pageId": "menuManagement",
        "organismName": "Lista de Itens do Cardápio",
        "suggestedName": "listaItensCardapio",
        "reason": "Remover espaços e padronizar para camelCase."
      },
      {
        "pageId": "menuManagement",
        "organismName": "Editor de Item e Ingredientes",
        "suggestedName": "editorItemIngredientes",
        "reason": "Remover espaços e padronizar para camelCase."
      },
      {
        "pageId": "posOrder",
        "organismName": "MenuCategorySelector",
        "suggestedName": "menuCategorySelector",
        "reason": "Padronizar para camelCase começando com letra minúscula."
      },
      {
        "pageId": "posOrder",
        "organismName": "MenuItemCatalog",
        "suggestedName": "menuItemCatalog",
        "reason": "Padronizar para camelCase começando com letra minúscula."
      },
      {
        "pageId": "posOrder",
        "organismName": "OrderSummary",
        "suggestedName": "orderSummary",
        "reason": "Padronizar para camelCase começando com letra minúscula."
      },
      {
        "pageId": "posOrder",
        "organismName": "OrderConfirmAction",
        "suggestedName": "orderConfirmAction",
        "reason": "Padronizar para camelCase começando com letra minúscula."
      },
      {
        "pageId": "shiftCloseReport",
        "organismName": "TurnoSelecionado",
        "suggestedName": "turnoSelecionado",
        "reason": "Padronizar para camelCase começando com letra minúscula."
      },
      {
        "pageId": "shiftCloseReport",
        "organismName": "ResumoVendasTurno",
        "suggestedName": "resumoVendasTurno",
        "reason": "Padronizar para camelCase começando com letra minúscula."
      },
      {
        "pageId": "shiftCloseReport",
        "organismName": "ListaPedidosAbertos",
        "suggestedName": "listaPedidosAbertos",
        "reason": "Padronizar para camelCase começando com letra minúscula."
      },
      {
        "pageId": "shiftCloseReport",
        "organismName": "ConfirmarFechamentoTurno",
        "suggestedName": "confirmarFechamentoTurno",
        "reason": "Padronizar para camelCase começando com letra minúscula."
      },
      {
        "pageId": "shiftOpen",
        "organismName": "Lista de turnos do dia",
        "suggestedName": "listaTurnosDoDia",
        "reason": "Remover espaços e padronizar para camelCase."
      },
      {
        "pageId": "shiftOpen",
        "organismName": "Formulário de abertura de turno",
        "suggestedName": "formularioAberturaTurno",
        "reason": "Remover espaços e padronizar para camelCase."
      },
      {
        "pageId": "stockManagement",
        "organismName": "ListaAlertasEstoqueBaixo",
        "suggestedName": "listaAlertasEstoqueBaixo",
        "reason": "Padronizar para camelCase começando com letra minúscula."
      },
      {
        "pageId": "stockManagement",
        "organismName": "TabelaItensEstoque",
        "suggestedName": "tabelaItensEstoque",
        "reason": "Padronizar para camelCase começando com letra minúscula."
      },
      {
        "pageId": "stockManagement",
        "organismName": "FormEdicaoItemEstoque",
        "suggestedName": "formEdicaoItemEstoque",
        "reason": "Padronizar para camelCase começando com letra minúscula."
      },
      {
        "pageId": "stockManagement",
        "organismName": "FormRegistrarMovimentacao",
        "suggestedName": "formRegistrarMovimentacao",
        "reason": "Padronizar para camelCase começando com letra minúscula."
      },
      {
        "pageId": "stockManagement",
        "organismName": "HistoricoMovimentacoes",
        "suggestedName": "historicoMovimentacoes",
        "reason": "Padronizar para camelCase começando com letra minúscula."
      }
    ],
    "notes": [
      "Consolidar alertas de estoque baixo entre dashboard e gestão de estoque para manter linguagem e interação consistentes."
    ]
  }
} as const;

export default uiConsolidationPlan;
