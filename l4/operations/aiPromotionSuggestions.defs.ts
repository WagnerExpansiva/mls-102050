/// <mls fileReference="_102050_/l4/operations/aiPromotionSuggestions.defs.ts" enhancement="_blank"/>

export const operationAiPromotionSuggestions = {
  "operationId": "aiPromotionSuggestions",
  "title": "Assistente IA: sugestões de itens para promover (últimos 7 dias)",
  "actor": "manager",
  "entity": "OrderItem",
  "kind": "query",
  "reads": [
    "OrderItem",
    "Order",
    "MenuItem"
  ],
  "writes": [],
  "rulesApplied": [],
  "story": {
    "actor": "manager",
    "goal": "obter sugestões de promoção com IA",
    "steps": [
      "solicitar sugestões de promoção",
      "plataforma consulta histórico e chama IA",
      "visualizar sugestões no idioma configurado"
    ],
    "outcome": "sugestões de itens para promover apresentadas"
  },
  "capability": {
    "capabilityId": "aiPromotionSuggestions",
    "title": "Assistente IA: sugestões de itens para promover (últimos 7 dias)",
    "actor": "manager",
    "priority": "soon"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationAiPromotionSuggestions;
