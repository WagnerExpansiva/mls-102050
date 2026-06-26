/// <mls fileReference="_102050_/l4/rules/cafeFlowRules.defs.ts" enhancement="_blank"/>

export const cafeFlowRules = {
  "ruleSetId": "cafeFlowRules",
  "rules": [
    {
      "ruleId": "orderStatusTransitions",
      "title": "Regras de transição de status de pedido/itens",
      "description": "Definir transições válidas e consistentes entre estados de Order e OrderItem (ex.: draft→sentToKitchen→inPreparation→ready→served/closed; cancelamentos com reversões apropriadas). KitchenTicket deve refletir o progresso agregado dos OrderItem relevantes.",
      "appliesTo": [
        "Order",
        "OrderItem",
        "KitchenTicket"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "paymentTimingByOrderType",
      "title": "Regra de momento do pagamento por tipo de pedido",
      "description": "Takeout deve ser pago no ato (antes de fechar/entregar); mesa permite consumo em aberto e pagamento consolidado no fechamento da conta/mesa.",
      "appliesTo": [
        "Order",
        "Payment",
        "DailyShift"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "inventoryLowStockThreshold",
      "title": "Regra de baixo estoque",
      "description": "Um InventoryItem entra em 'baixo estoque' quando quantidade atual ≤ nível mínimo configurado; alertas devem considerar unidade e arredondamentos de segurança.",
      "appliesTo": [
        "InventoryItem"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "ingredientConsumptionTrigger",
      "title": "Regra de gatilho de baixa de ingredientes",
      "description": "Baixa de ingredientes ocorre em um ponto único e configurável do fluxo (ex.: ao enviar para cozinha ou ao marcar em preparo), evitando dupla contagem; cancelamentos devem gerar StockConsumption compensatório (voided) quando aplicável.",
      "appliesTo": [
        "Order",
        "OrderItem",
        "StockConsumption",
        "InventoryItem"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "aiOutputLanguageSelection",
      "title": "Regra de idioma para saídas do assistente IA",
      "description": "Saídas textuais geradas via LLM devem respeitar o idioma escolhido pelo usuário (pt-BR/en), usando i18n da plataforma e instruções de prompt; não persistir traduções como entidade.",
      "appliesTo": [
        "DailyShift",
        "Order",
        "MenuItem"
      ],
      "layer": "application"
    },
    {
      "ruleId": "tableOccupancyConsistency",
      "title": "Consistência de ocupação de mesa",
      "description": "Uma Table só pode estar 'occupied' quando existir ao menos um Order aberto associado; ao fechar/cancelar o último Order aberto da mesa, a Table deve voltar para 'available' (salvo 'disabled').",
      "appliesTo": [
        "Table",
        "Order"
      ],
      "layer": "domain"
    }
  ]
} as const;

export default cafeFlowRules;
