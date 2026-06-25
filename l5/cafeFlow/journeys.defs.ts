/// <mls fileReference="_102050_/l5/cafeFlow/journeys.defs.ts" enhancement="_blank"/>

export const userJourneysPlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "userJourneys",
  "artifactId": "journeys",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanUserJourneys",
    "stepId": 12,
    "planId": "plan-user-journeys"
  },
  "data": {
    "journeys": [
      {
        "journeyId": "abrirTurnoDiario",
        "title": "Abrir turno diário no caixa",
        "actor": "attendantCashier",
        "capabilityIds": [
          "openDailyShift"
        ],
        "description": "O atendente abre o turno do dia para liberar o lançamento de pedidos.",
        "steps": [
          {
            "intent": "Iniciar o dia de atendimento",
            "action": "Acessa o painel do turno e verifica se há turno aberto",
            "entities": [
              "DailyShift"
            ],
            "pageHint": "shiftOpen",
            "outcome": "Sistema indica que não há turno aberto"
          },
          {
            "intent": "Abrir o turno do dia",
            "action": "Informa o valor inicial de caixa e confirma a abertura",
            "entities": [
              "DailyShift"
            ],
            "pageHint": "shiftOpen",
            "outcome": "Turno diário fica com status aberto"
          }
        ]
      },
      {
        "journeyId": "lancarPedidoNoPos",
        "title": "Lançar pedido no POS",
        "actor": "attendantCashier",
        "capabilityIds": [
          "createOrder"
        ],
        "description": "O atendente registra o pedido do cliente no fluxo rápido de balcão.",
        "steps": [
          {
            "intent": "Registrar um novo pedido",
            "action": "Abre o POS e inicia um pedido",
            "entities": [
              "Order"
            ],
            "pageHint": "posOrder",
            "outcome": "Pedido em rascunho é criado"
          },
          {
            "intent": "Selecionar itens e quantidades",
            "action": "Busca itens do cardápio por categoria e adiciona ao pedido",
            "entities": [
              "MenuCategory",
              "MenuItem",
              "OrderItem",
              "Order"
            ],
            "pageHint": "posOrder",
            "outcome": "Itens do pedido são adicionados com preços"
          },
          {
            "intent": "Confirmar o pedido para a cozinha",
            "action": "Revisa total e confirma o envio",
            "entities": [
              "Order"
            ],
            "pageHint": "posOrder",
            "outcome": "Pedido muda para recebido e entra no fluxo da cozinha"
          }
        ]
      },
      {
        "journeyId": "atualizarStatusCozinha",
        "title": "Atualizar status dos pedidos na cozinha",
        "actor": "cook",
        "capabilityIds": [
          "updateKitchenStatus"
        ],
        "description": "O cozinheiro acompanha o quadro da cozinha e atualiza o andamento dos pedidos.",
        "steps": [
          {
            "intent": "Ver fila de preparo",
            "action": "Abre o display da cozinha e filtra por recebidos",
            "entities": [
              "Order"
            ],
            "pageHint": "kitchenDisplay",
            "outcome": "Lista de pedidos recebidos é exibida"
          },
          {
            "intent": "Iniciar o preparo",
            "action": "Seleciona um pedido e marca como preparando",
            "entities": [
              "Order",
              "StockItem",
              "StockMovement"
            ],
            "pageHint": "kitchenDisplay",
            "outcome": "Pedido muda para preparando e a baixa de estoque é registrada"
          },
          {
            "intent": "Indicar que o pedido está pronto",
            "action": "Marca o pedido como pronto",
            "entities": [
              "Order"
            ],
            "pageHint": "kitchenDisplay",
            "outcome": "Pedido muda para pronto e fica disponível para entrega"
          }
        ]
      },
      {
        "journeyId": "gerenciarCardapio",
        "title": "Gerenciar cardápio da cafeteria",
        "actor": "managerOwner",
        "capabilityIds": [
          "manageMenu"
        ],
        "description": "O gerente ajusta categorias e itens do cardápio.",
        "steps": [
          {
            "intent": "Organizar categorias do cardápio",
            "action": "Abre gerenciamento de cardápio e cria/edita categorias",
            "entities": [
              "MenuCategory"
            ],
            "pageHint": "menuManagement",
            "outcome": "Categorias do cardápio são atualizadas"
          },
          {
            "intent": "Atualizar itens do cardápio",
            "action": "Cria ou edita itens com preço e status ativo/inativo",
            "entities": [
              "MenuItem",
              "MenuItemIngredient"
            ],
            "pageHint": "menuManagement",
            "outcome": "Itens do cardápio ficam disponíveis com preços válidos"
          }
        ]
      },
      {
        "journeyId": "gerenciarEstoque",
        "title": "Gerenciar estoque e movimentações",
        "actor": "managerOwner",
        "capabilityIds": [
          "manageStock"
        ],
        "description": "O gerente mantém o estoque atualizado e registra entradas e saídas.",
        "steps": [
          {
            "intent": "Revisar itens de estoque",
            "action": "Abre gerenciamento de estoque e consulta níveis atuais",
            "entities": [
              "StockItem"
            ],
            "pageHint": "stockManagement",
            "outcome": "Níveis e status dos itens são exibidos"
          },
          {
            "intent": "Atualizar itens e alertas",
            "action": "Edita quantidade e status de itens com validação de estoque não negativo",
            "entities": [
              "StockItem"
            ],
            "pageHint": "stockManagement",
            "outcome": "Itens ficam atualizados sem quantidade negativa"
          },
          {
            "intent": "Registrar movimentação de estoque",
            "action": "Lança entrada ou saída manual de itens",
            "entities": [
              "StockMovement",
              "StockItem"
            ],
            "pageHint": "stockManagement",
            "outcome": "Movimentação registrada e saldo recalculado"
          }
        ]
      },
      {
        "journeyId": "fecharTurnoDiarioComPendencias",
        "title": "Tentar fechar turno com pedidos abertos",
        "actor": "managerOwner",
        "capabilityIds": [
          "closeDailyShift"
        ],
        "description": "O gerente tenta fechar o turno, mas há pedidos abertos.",
        "steps": [
          {
            "intent": "Fechar o turno do dia",
            "action": "Abre o relatório de fechamento e solicita fechar turno",
            "entities": [
              "DailyShift",
              "Order"
            ],
            "pageHint": "shiftCloseReport",
            "outcome": "Sistema verifica pedidos em aberto"
          },
          {
            "intent": "Resolver pendências antes do fechamento",
            "action": "Identifica pedidos abertos e decide aguardar a conclusão",
            "entities": [
              "Order"
            ],
            "pageHint": "shiftCloseReport",
            "outcome": "Fechamento é bloqueado até não haver pedidos abertos"
          }
        ]
      },
      {
        "journeyId": "fecharTurnoDiario",
        "title": "Fechar turno diário",
        "actor": "managerOwner",
        "capabilityIds": [
          "closeDailyShift"
        ],
        "description": "O gerente encerra o turno após concluir os pedidos.",
        "steps": [
          {
            "intent": "Encerrar o turno do dia",
            "action": "Abre o relatório de fechamento e revisa o resumo",
            "entities": [
              "DailyShift",
              "Order"
            ],
            "pageHint": "shiftCloseReport",
            "outcome": "Resumo do turno é exibido"
          },
          {
            "intent": "Confirmar fechamento",
            "action": "Confirma o fechamento do turno",
            "entities": [
              "DailyShift"
            ],
            "pageHint": "shiftCloseReport",
            "outcome": "Turno diário muda para fechado e o relatório fica disponível"
          }
        ]
      },
      {
        "journeyId": "visualizarDashboard",
        "title": "Visualizar dashboard de métricas",
        "actor": "managerOwner",
        "capabilityIds": [
          "viewDashboard"
        ],
        "description": "O gerente acompanha vendas e indicadores do dia.",
        "steps": [
          {
            "intent": "Acompanhar resultados do dia",
            "action": "Acessa o dashboard de métricas",
            "entities": [
              "Order",
              "StockItem",
              "DailyShift"
            ],
            "pageHint": "dashboard",
            "outcome": "Métricas de vendas e estoque baixo são exibidas"
          },
          {
            "intent": "Detalhar indicadores",
            "action": "Filtra por período do dia e itens mais vendidos",
            "entities": [
              "Order",
              "MenuItem"
            ],
            "pageHint": "dashboard",
            "outcome": "Indicadores são atualizados conforme o filtro"
          }
        ]
      },
      {
        "journeyId": "consultarAssistenteIa",
        "title": "Consultar assistente IA de vendas",
        "actor": "managerOwner",
        "capabilityIds": [
          "askSalesAssistant"
        ],
        "description": "O gerente pede insights e sugestões ao assistente IA com dados do negócio.",
        "steps": [
          {
            "intent": "Obter recomendações de vendas",
            "action": "Abre o assistente IA e escreve a pergunta",
            "entities": [
              "Order",
              "MenuItem",
              "StockItem"
            ],
            "pageHint": "aiAssistant",
            "outcome": "Pergunta enviada ao assistente"
          },
          {
            "intent": "Avaliar resposta e sugestões",
            "action": "Lê o retorno com itens sugeridos e justificativas",
            "entities": [
              "Order",
              "MenuItem"
            ],
            "pageHint": "aiAssistant",
            "outcome": "Insights são apresentados respeitando privacidade de dados"
          }
        ]
      },
      {
        "journeyId": "cancelarPedido",
        "title": "Cancelar pedido já lançado",
        "actor": "managerOwner",
        "capabilityIds": [
          "cancelOrder"
        ],
        "description": "O gerente cancela um pedido por solicitação do cliente ou erro.",
        "steps": [
          {
            "intent": "Localizar o pedido a cancelar",
            "action": "Abre a lista de pedidos e busca pelo número ou cliente",
            "entities": [
              "Order"
            ],
            "pageHint": "ordersTracker",
            "outcome": "Pedido selecionado é exibido"
          },
          {
            "intent": "Cancelar o pedido",
            "action": "Confirma o cancelamento e registra o motivo",
            "entities": [
              "Order"
            ],
            "pageHint": "ordersTracker",
            "outcome": "Pedido muda para cancelado e deixa o fluxo da cozinha"
          }
        ]
      }
    ]
  }
} as const;

export default userJourneysPlan;
