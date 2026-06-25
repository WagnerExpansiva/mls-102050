/// <mls fileReference="_102050_/l4/cafeFlow/ontology/SalesInsight.defs.ts" enhancement="_blank"/>

export const cafeFlowEntitySalesInsight = {
  "entityId": "SalesInsight",
  "title": "Insight de Vendas",
  "description": "Registro imutável (append-only) de um insight/resumo gerado (manual ou IA) para auditoria e reconsulta.",
  "ownership": "moduleOwned",
  "kind": "supporting",
  "fields": [
    {
      "fieldId": "salesInsightId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do insight de vendas"
    },
    {
      "fieldId": "dailyShiftId",
      "type": "uuid",
      "required": false,
      "description": "Referência ao turno diário ao qual o insight está associado"
    },
    {
      "fieldId": "title",
      "type": "string",
      "required": true,
      "description": "Título do insight"
    },
    {
      "fieldId": "content",
      "type": "text",
      "required": true,
      "description": "Conteúdo completo do insight ou resumo gerado"
    },
    {
      "fieldId": "source",
      "type": "string",
      "required": true,
      "description": "Origem da geração do insight: manual por usuário ou automático por IA",
      "enum": [
        "manual",
        "ai"
      ]
    },
    {
      "fieldId": "generatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora em que o insight foi gerado"
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de criação do registro"
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização do registro"
    }
  ],
  "rulesApplied": []
} as const;

export default cafeFlowEntitySalesInsight;
