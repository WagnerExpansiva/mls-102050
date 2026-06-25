/// <mls fileReference="_102050_/l5/cafeFlow/rules.defs.ts" enhancement="_blank"/>

export const rulesPlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "rules",
  "artifactId": "cafeFlowRules",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentFinalizeSolutionPlan",
    "stepId": 11,
    "planId": "plan-finalize-solution-plan"
  },
  "data": {
    "moduleName": "cafeFlow",
    "rules": [
      {
        "ruleId": "ruleOrderRequiresOpenShift",
        "title": "Pedido exige turno aberto",
        "description": "Um pedido só pode ser criado quando existir um turno diário aberto para a data atual.",
        "appliesTo": [
          "Order",
          "usecaseEntityCreateOrder"
        ],
        "layer": "layer_3"
      },
      {
        "ruleId": "ruleOrderStatusFlow",
        "title": "Fluxo de status do pedido",
        "description": "O status do pedido deve seguir o fluxo recebido → em preparo → pronto → entregue, não permitindo saltos inválidos.",
        "appliesTo": [
          "Order",
          "usecaseEntityUpdateOrderStatus",
          "usecaseEntityCancelOrder"
        ],
        "layer": "layer_3"
      },
      {
        "ruleId": "ruleStockDeductionOnOrderPreparation",
        "title": "Baixa de estoque no início do preparo",
        "description": "Ao transicionar um pedido para 'em preparo', o sistema debita do estoque os ingredientes vinculados aos itens do pedido.",
        "appliesTo": [
          "Order",
          "StockItem",
          "StockMovement",
          "usecaseEntityUpdateOrderStatus"
        ],
        "layer": "layer_3"
      },
      {
        "ruleId": "ruleLowStockAlert",
        "title": "Alerta de estoque baixo",
        "description": "Um item de estoque gera alerta quando sua quantidade atual for menor ou igual ao ponto de alerta configurado.",
        "appliesTo": [
          "StockItem",
          "usecaseEntityManageStockItem",
          "usecaseEntityRegisterStockMovement"
        ],
        "layer": "layer_3"
      },
      {
        "ruleId": "ruleShiftCloseNoOpenOrders",
        "title": "Fechamento de turno sem pedidos abertos",
        "description": "O turno diário só pode ser fechado quando não houver pedidos em aberto (recebido, em preparo ou pronto).",
        "appliesTo": [
          "DailyShift",
          "usecaseEntityCloseDailyShift"
        ],
        "layer": "layer_3"
      },
      {
        "ruleId": "ruleMenuItemPricePositive",
        "title": "Preço do cardápio não negativo",
        "description": "O preço de venda de um item do cardápio deve ser maior ou igual a zero.",
        "appliesTo": [
          "MenuItem",
          "usecaseEntityManageMenuItem"
        ],
        "layer": "layer_3"
      },
      {
        "ruleId": "ruleStockQuantityNonNegative",
        "title": "Estoque não negativo",
        "description": "A quantidade em estoque não pode ficar negativa após uma movimentação de saída ou ajuste.",
        "appliesTo": [
          "StockItem",
          "StockMovement",
          "usecaseEntityManageStockItem",
          "usecaseEntityRegisterStockMovement",
          "usecaseEntityCancelOrder"
        ],
        "layer": "layer_3"
      },
      {
        "ruleId": "ruleUniqueOpenShiftPerDay",
        "title": "Turno único aberto por dia",
        "description": "Apenas um turno diário pode estar aberto por dia, garantindo base única para vendas e fechamento.",
        "appliesTo": [
          "DailyShift",
          "usecaseEntityOpenDailyShift"
        ],
        "layer": "layer_3"
      },
      {
        "ruleId": "ruleLlmDataPrivacy",
        "title": "Privacidade dos dados no LLM",
        "description": "Dados de vendas enviados ao LLM devem ser agregados e anonimizados, sem informações pessoais de clientes ou atendentes.",
        "appliesTo": [
          "usecaseEntityGenerateDailySalesSummary",
          "usecaseEntitySuggestPromotions",
          "agentSalesAssistant"
        ],
        "layer": "layer_3"
      }
    ]
  }
} as const;

export default rulesPlan;
