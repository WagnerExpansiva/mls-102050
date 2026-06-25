/// <mls fileReference="_102050_/l4/rules/cafeFlowRules.defs.ts" enhancement="_blank"/>

export const cafeFlowRules = {
  "ruleSetId": "cafeFlowRules",
  "rules": [
    {
      "ruleId": "orderStatusStateMachine",
      "title": "Máquina de estados do Pedido",
      "description": "Define transições válidas entre estados do pedido e (quando aplicável) dos itens do pedido, garantindo consistência para cozinha, POS e relatórios (ex.: draft→sentToKitchen→inPreparation→ready→completed; cancelamento permitido antes de completed; evitar regressões sem estorno/ajuste).",
      "appliesTo": [
        "Order",
        "OrderLine"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "inventoryConsumptionTiming",
      "title": "Momento de consumo de estoque",
      "description": "Define quando a baixa de estoque ocorre (ex.: ao enviar para cozinha ou ao completar pedido) e como tratar cancelamentos/estornos, garantindo rastreabilidade via StockMovement.",
      "appliesTo": [
        "Order",
        "StockMovement",
        "StockItem",
        "RecipeLine"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "lowStockThresholdRule",
      "title": "Regra de estoque baixo",
      "description": "Um StockItem é considerado 'baixo' quando quantidadeAtual <= nivelMinimo (com possibilidade de buffers por unidade), alimentando dashboard e alertas operacionais.",
      "appliesTo": [
        "StockItem"
      ],
      "layer": "domain"
    },
    {
      "ruleId": "shiftCloseEligibility",
      "title": "Condições para fechar turno",
      "description": "Um turno só pode ser fechado quando não houver pedidos em aberto (não completed/cancelled) ou quando for efetuado procedimento de encerramento forçado com justificativa.",
      "appliesTo": [
        "DailyShift",
        "Order"
      ],
      "layer": "domain"
    }
  ]
} as const;

export default cafeFlowRules;
