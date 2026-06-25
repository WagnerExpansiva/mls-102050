/// <mls fileReference="_102050_/l5/cafeFlow/process.defs.ts" enhancement="_blank"/>

export const cafeFlowProcess = {
  "schemaVersion": "2026-06-08",
  "moduleName": "cafeFlow",
  "runs": [
    {
      "runId": "newSolution",
      "kind": "newSolution",
      "startedAt": "2026-06-25T01:27:33.515Z",
      "initialPrompt": "Gere um app profissional chamado CafeFlow para cafeterias e lanchonetes pequenas. Entidades principais: Item do Cardápio (categoria, preço, ingredientes em estoque), Pedido (mesa ou takeout, itens, status), Turno Diário, Item de Estoque. Telas chave: Dashboard (vendas de hoje, itens mais vendidos, estoque baixo), Interface rápida de POS (lançamento de pedido + status cozinha), Gerenciamento de cardápio e estoque, Relatório de fechamento de turno. Funcionalidade LLM: Assistente IA que gera \"resumo de vendas do dia\" ou sugere \"quais itens promover com base nos últimos 7 dias\". Foco: Atendimento rápido de pedidos, coordenação de cozinha e controle simples de estoque para food service. linguagem: en, pt-br",
      "userLanguage": "pt-BR",
      "decisions": [],
      "deferredItems": [
        {
          "id": "pluginKitchenPrinter",
          "title": "Impressora de Cozinha",
          "description": "Integração com impressora térmica de cozinha ainda não confirmada; pode ser adicionada em versão futura."
        },
        {
          "id": "horizontalOfflineResilience",
          "title": "Resiliência Offline",
          "description": "Resiliência básica para quedas de internet, planejada para versões futuras fora do MVP."
        }
      ],
      "openDetails": [
        {
          "title": "Integração com impressoras de cozinha",
          "description": "O CafeFlow precisa enviar comandas diretamente para impressoras térmicas da cozinha ou apenas exibir status em tela?"
        },
        {
          "title": "Modelo de negócio e multi-tenancy",
          "description": "A solução será multi-tenant (várias cafeterias em uma mesma instância) ou single-tenant? Haverá controle de assinaturas?"
        },
        {
          "title": "Alertas de estoque baixo",
          "description": "Os alertas de estoque baixo no dashboard devem ser automáticos por quantidade mínima configurada ou apenas visuais para o gestor?"
        }
      ],
      "healthReport": {
        "summary": {
          "passed": false,
          "errorCount": 2,
          "warningCount": 71
        },
        "issues": [
          {
            "severity": "error",
            "code": "horizontal.artifact.missing",
            "message": "approved horizontal module horizontalAuditLog produced no plan item/artifact",
            "path": "approvedArtifacts.horizontalModules[1]",
            "evidence": []
          },
          {
            "severity": "error",
            "code": "horizontal.artifact.missing",
            "message": "approved horizontal module horizontalOfflineResilience produced no plan item/artifact",
            "path": "approvedArtifacts.horizontalModules[2]",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "bffCommand dashboard.listarAlertasEstoqueBaixo references unknown entity estoqueAggregate",
            "path": "pageDefinition.dashboard.bffCommands.listarAlertasEstoqueBaixo.readsEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "bffCommand dashboard.sugerirItensParaPromover references unknown entity cardapioAggregate",
            "path": "pageDefinition.dashboard.bffCommands.sugerirItensParaPromover.readsEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "organism dashboard.RankingItensVendidos references unknown entity cardapioAggregate",
            "path": "pageDefinition.dashboard.requiredEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "organism dashboard.ListaAlertasEstoque references unknown entity estoqueAggregate",
            "path": "pageDefinition.dashboard.requiredEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "organism dashboard.SugestoesPromocao references unknown entity cardapioAggregate",
            "path": "pageDefinition.dashboard.requiredEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "bffCommand ordersTracker.listarPedidos references unknown entity pedidoAggregate",
            "path": "pageDefinition.ordersTracker.bffCommands.listarPedidos.readsEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "bffCommand ordersTracker.cancelarPedido references unknown entity pedidoAggregate",
            "path": "pageDefinition.ordersTracker.bffCommands.cancelarPedido.readsEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "bffCommand ordersTracker.cancelarPedido references unknown entity estoqueAggregate",
            "path": "pageDefinition.ordersTracker.bffCommands.cancelarPedido.readsEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "bffCommand ordersTracker.cancelarPedido references unknown entity pedidoAggregate",
            "path": "pageDefinition.ordersTracker.bffCommands.cancelarPedido.writesEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "bffCommand ordersTracker.cancelarPedido references unknown entity estoqueAggregate",
            "path": "pageDefinition.ordersTracker.bffCommands.cancelarPedido.writesEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "organism ordersTracker.orderSearchFilters references unknown entity pedidoAggregate",
            "path": "pageDefinition.ordersTracker.requiredEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "organism ordersTracker.ordersResultList references unknown entity pedidoAggregate",
            "path": "pageDefinition.ordersTracker.requiredEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "organism ordersTracker.orderCancelForm references unknown entity pedidoAggregate",
            "path": "pageDefinition.ordersTracker.requiredEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "organism ordersTracker.orderCancelForm references unknown entity estoqueAggregate",
            "path": "pageDefinition.ordersTracker.requiredEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "bffCommand posOrder.listarCategoriasCardapio references unknown entity cardapioAggregate",
            "path": "pageDefinition.posOrder.bffCommands.listarCategoriasCardapio.readsEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "bffCommand posOrder.listarItensCardapio references unknown entity cardapioAggregate",
            "path": "pageDefinition.posOrder.bffCommands.listarItensCardapio.readsEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "bffCommand posOrder.criarPedido references unknown entity turnoDiarioAggregate",
            "path": "pageDefinition.posOrder.bffCommands.criarPedido.readsEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "bffCommand posOrder.criarPedido references unknown entity cardapioAggregate",
            "path": "pageDefinition.posOrder.bffCommands.criarPedido.readsEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "bffCommand posOrder.criarPedido references unknown entity pedidoAggregate",
            "path": "pageDefinition.posOrder.bffCommands.criarPedido.writesEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "bffCommand shiftCloseReport.gerarResumoVendasDia references unknown entity turnoDiarioAggregate",
            "path": "pageDefinition.shiftCloseReport.bffCommands.gerarResumoVendasDia.readsEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "bffCommand shiftCloseReport.listarPedidosAbertos references unknown entity pedidoAggregate",
            "path": "pageDefinition.shiftCloseReport.bffCommands.listarPedidosAbertos.readsEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "bffCommand shiftCloseReport.fecharTurnoDiario references unknown entity turnoDiarioAggregate",
            "path": "pageDefinition.shiftCloseReport.bffCommands.fecharTurnoDiario.readsEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "bffCommand shiftCloseReport.fecharTurnoDiario references unknown entity pedidoAggregate",
            "path": "pageDefinition.shiftCloseReport.bffCommands.fecharTurnoDiario.readsEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "bffCommand shiftCloseReport.fecharTurnoDiario references unknown entity turnoDiarioAggregate",
            "path": "pageDefinition.shiftCloseReport.bffCommands.fecharTurnoDiario.writesEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "organism shiftCloseReport.TurnoSelecionado references unknown entity turnoDiarioAggregate",
            "path": "pageDefinition.shiftCloseReport.requiredEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "organism shiftCloseReport.ResumoVendasTurno references unknown entity turnoDiarioAggregate",
            "path": "pageDefinition.shiftCloseReport.requiredEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "organism shiftCloseReport.ListaPedidosAbertos references unknown entity pedidoAggregate",
            "path": "pageDefinition.shiftCloseReport.requiredEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "organism shiftCloseReport.ConfirmarFechamentoTurno references unknown entity turnoDiarioAggregate",
            "path": "pageDefinition.shiftCloseReport.requiredEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "bffCommand shiftOpen.listarTurnosDiarios references unknown entity turnoDiarioAggregate",
            "path": "pageDefinition.shiftOpen.bffCommands.listarTurnosDiarios.readsEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "bffCommand shiftOpen.abrirTurnoDiario references unknown entity turnoDiarioAggregate",
            "path": "pageDefinition.shiftOpen.bffCommands.abrirTurnoDiario.readsEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "bffCommand shiftOpen.abrirTurnoDiario references unknown entity turnoDiarioAggregate",
            "path": "pageDefinition.shiftOpen.bffCommands.abrirTurnoDiario.writesEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "organism shiftOpen.Lista de turnos do dia references unknown entity turnoDiarioAggregate",
            "path": "pageDefinition.shiftOpen.requiredEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "organism shiftOpen.Formulário de abertura de turno references unknown entity turnoDiarioAggregate",
            "path": "pageDefinition.shiftOpen.requiredEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase abrirTurnoDiario references unknown entity turnoDiarioAggregate",
            "path": "usecase.abrirTurnoDiario.inputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase abrirTurnoDiario references unknown entity turnoDiarioAggregate",
            "path": "usecase.abrirTurnoDiario.outputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase listarTurnosDiarios references unknown entity turnoDiarioAggregate",
            "path": "usecase.listarTurnosDiarios.inputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase listarTurnosDiarios references unknown entity turnoDiarioAggregate",
            "path": "usecase.listarTurnosDiarios.outputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase fecharTurnoDiario references unknown entity turnoDiarioAggregate",
            "path": "usecase.fecharTurnoDiario.inputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase fecharTurnoDiario references unknown entity pedidoAggregate",
            "path": "usecase.fecharTurnoDiario.inputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase fecharTurnoDiario references unknown entity turnoDiarioAggregate",
            "path": "usecase.fecharTurnoDiario.outputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase criarPedido references unknown entity pedidoAggregate",
            "path": "usecase.criarPedido.inputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase criarPedido references unknown entity turnoDiarioAggregate",
            "path": "usecase.criarPedido.inputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase criarPedido references unknown entity pedidoAggregate",
            "path": "usecase.criarPedido.outputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase listarPedidos references unknown entity pedidoAggregate",
            "path": "usecase.listarPedidos.inputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase listarPedidos references unknown entity pedidoAggregate",
            "path": "usecase.listarPedidos.outputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase atualizarStatusPedido references unknown entity pedidoAggregate",
            "path": "usecase.atualizarStatusPedido.inputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase atualizarStatusPedido references unknown entity estoqueAggregate",
            "path": "usecase.atualizarStatusPedido.inputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase atualizarStatusPedido references unknown entity pedidoAggregate",
            "path": "usecase.atualizarStatusPedido.outputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase atualizarStatusPedido references unknown entity estoqueAggregate",
            "path": "usecase.atualizarStatusPedido.outputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase cancelarPedido references unknown entity pedidoAggregate",
            "path": "usecase.cancelarPedido.inputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase cancelarPedido references unknown entity estoqueAggregate",
            "path": "usecase.cancelarPedido.inputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase cancelarPedido references unknown entity pedidoAggregate",
            "path": "usecase.cancelarPedido.outputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase cancelarPedido references unknown entity estoqueAggregate",
            "path": "usecase.cancelarPedido.outputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase gerenciarCategoriaCardapio references unknown entity cardapioAggregate",
            "path": "usecase.gerenciarCategoriaCardapio.inputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase gerenciarCategoriaCardapio references unknown entity cardapioAggregate",
            "path": "usecase.gerenciarCategoriaCardapio.outputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase listarCategoriasCardapio references unknown entity cardapioAggregate",
            "path": "usecase.listarCategoriasCardapio.inputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase listarCategoriasCardapio references unknown entity cardapioAggregate",
            "path": "usecase.listarCategoriasCardapio.outputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase gerenciarItemCardapio references unknown entity cardapioAggregate",
            "path": "usecase.gerenciarItemCardapio.inputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase gerenciarItemCardapio references unknown entity cardapioAggregate",
            "path": "usecase.gerenciarItemCardapio.outputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase listarItensCardapio references unknown entity cardapioAggregate",
            "path": "usecase.listarItensCardapio.inputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase listarItensCardapio references unknown entity cardapioAggregate",
            "path": "usecase.listarItensCardapio.outputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase gerenciarItemEstoque references unknown entity estoqueAggregate",
            "path": "usecase.gerenciarItemEstoque.inputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase gerenciarItemEstoque references unknown entity estoqueAggregate",
            "path": "usecase.gerenciarItemEstoque.outputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase listarItensEstoque references unknown entity estoqueAggregate",
            "path": "usecase.listarItensEstoque.inputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase listarItensEstoque references unknown entity estoqueAggregate",
            "path": "usecase.listarItensEstoque.outputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase registrarMovimentacaoEstoque references unknown entity estoqueAggregate",
            "path": "usecase.registrarMovimentacaoEstoque.inputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase registrarMovimentacaoEstoque references unknown entity estoqueAggregate",
            "path": "usecase.registrarMovimentacaoEstoque.outputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase listarMovimentacoesEstoque references unknown entity estoqueAggregate",
            "path": "usecase.listarMovimentacoesEstoque.inputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase listarMovimentacoesEstoque references unknown entity estoqueAggregate",
            "path": "usecase.listarMovimentacoesEstoque.outputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase sugerirItensParaPromover references unknown entity cardapioAggregate",
            "path": "usecase.sugerirItensParaPromover.inputEntities",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "entity.ref.unknown",
            "message": "usecase listarAlertasEstoqueBaixo references unknown entity estoqueAggregate",
            "path": "usecase.listarAlertasEstoqueBaixo.inputEntities",
            "evidence": []
          }
        ],
        "checklistResults": null,
        "readyToSaveDefs": false,
        "deterministicOnly": true,
        "refreshedAt": "2026-06-25T01:27:34.122Z",
        "refreshedBy": "agentNewSolutionFinal (T-016 deterministic re-validation)"
      },
      "nextSteps": [
        {
          "id": "horizontalModule:notifications",
          "kind": "horizontalModule",
          "title": "notifications",
          "description": "Alertas de cozinha e de estoque baixo foram aceitos como necessidade operacional e melhoram a coordenação entre atendentes e cozinha.",
          "moduleId": "notifications",
          "status": "dismissed"
        },
        {
          "id": "plugin:impressora",
          "kind": "plugin",
          "title": "impressora",
          "description": "Integração com impressora térmica de cozinha ainda não confirmada; pode ser adicionada em versão futura.",
          "pluginId": "impressora",
          "status": "dismissed"
        }
      ],
      "finishedAt": "2026-06-25T01:29:58.760Z"
    }
  ]
} as const;

export default cafeFlowProcess;
