/// <mls fileReference="_102050_/l4/actors/cafeFlowActors.defs.ts" enhancement="_blank"/>

export const cafeFlowActors = {
  "moduleName": "cafeFlow",
  "actors": [
    {
      "actorId": "attendant",
      "title": "Atendente",
      "description": "Lança e acompanha pedidos rapidamente no salão/balcão; interage com status do pedido e da cozinha.",
      "roleScope": "cafeFlow:attendant"
    },
    {
      "actorId": "cashier",
      "title": "Caixa",
      "description": "Registra recebimentos (takeout no ato e mesa no fechamento), acompanha caixa do turno e apoia o fechamento.",
      "roleScope": "cafeFlow:cashier"
    },
    {
      "actorId": "manager",
      "title": "Gerente",
      "description": "Administra cardápio, preços, categorias, estoque e revisa dashboards/relatórios e fechamento de turno.",
      "roleScope": "cafeFlow:manager"
    },
    {
      "actorId": "cook",
      "title": "Cozinheiro",
      "description": "Acompanha fila de produção, muda status de preparo e sinaliza itens prontos/indisponibilidades.",
      "roleScope": "cafeFlow:cook"
    }
  ]
} as const;

export default cafeFlowActors;
