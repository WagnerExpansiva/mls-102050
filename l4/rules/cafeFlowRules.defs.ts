/// <mls fileReference="_102050_/l4/rules/cafeFlowRules.defs.ts" enhancement="_blank"/>

export const cafeFlowRules = {
  "ruleSetId": "cafeFlowRules",
  "rules": [
    {
      "ruleId": "platformProvidedAuthRbacI18n",
      "title": "Recursos de autenticação/RBAC e i18n são fornecidos pela plataforma",
      "description": "Não modelar usuários, papéis, permissões ou entidades de tradução; assumir controle de acesso e internacionalização como baseline da plataforma.",
      "appliesTo": [
        "Module",
        "Actors",
        "AllCapabilities"
      ],
      "layer": "platform-assumption"
    },
    {
      "ruleId": "singleEstablishmentPerAccount",
      "title": "Conta representa um único estabelecimento (sem filiais)",
      "description": "Todos os dados operacionais pertencem a um único ponto de venda por conta/tenant.",
      "appliesTo": [
        "Table",
        "DailyShift",
        "Order",
        "InventoryItem",
        "MenuItem"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "inventoryAutoConsumptionByRecipeOnOrderCompletion",
      "title": "Baixa automática de estoque por venda baseada na receita",
      "description": "Ao finalizar (ou ao enviar para cozinha, conforme política) um Order não cancelado, registrar consumo conforme RecipeComponent, gerando StockMovement de saída e atualizando níveis.",
      "appliesTo": [
        "Order",
        "OrderItem",
        "RecipeComponent",
        "StockMovement"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "orderCancellationStockHandling",
      "title": "Cancelamento deve tratar efeitos em estoque e histórico",
      "description": "Ao cancelar Order, manter histórico; se já houve baixa de insumos, registrar estorno/ajuste via StockMovement para manter rastreabilidade.",
      "appliesTo": [
        "Order",
        "StockMovement"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "shiftMustBeOpenToRegisterOrders",
      "title": "Pedidos só podem ser registrados em turno aberto",
      "description": "Para consistência de fechamento, Order deve estar vinculado a um DailyShift em estado open no momento do registro.",
      "appliesTo": [
        "DailyShift",
        "Order"
      ],
      "layer": "domain"
    }
  ]
} as const;

export default cafeFlowRules;
