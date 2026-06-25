/// <mls fileReference="_102050_/l4/actors/cafeFlowActors.defs.ts" enhancement="_blank"/>

export const cafeFlowActors = {
  "moduleName": "cafeFlow",
  "actors": [
    {
      "actorId": "attendant",
      "title": "Atendente",
      "description": "Lança pedidos rapidamente no POS, associa mesa/takeout e acompanha andamento para entregar ao cliente.",
      "roleScope": "cafeFlow:attendant"
    },
    {
      "actorId": "cashier",
      "title": "Caixa",
      "description": "Finaliza pedidos no balcão, opera rotinas de turno (abertura/fechamento) e confere totais de vendas do período.",
      "roleScope": "cafeFlow:cashier"
    },
    {
      "actorId": "cook",
      "title": "Cozinheiro",
      "description": "Visualiza fila de pedidos, atualiza status de preparo e sinaliza itens prontos/indisponibilidades.",
      "roleScope": "cafeFlow:cook"
    },
    {
      "actorId": "managerOwner",
      "title": "Gerente/Proprietário",
      "description": "Administra cardápio e estoque, acompanha dashboard/relatórios e usa insights (incl. IA) para decisões operacionais.",
      "roleScope": "cafeFlow:managerOwner"
    }
  ]
} as const;

export default cafeFlowActors;
