/// <mls fileReference="_102050_/l1/cafeFlow/layer_3_usecases/registrarMovimentacaoEstoque.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "registrarMovimentacaoEstoque",
  "title": "Registrar Movimentação de Estoque",
  "purpose": "Registrar entrada/saída de estoque e atualizar métricas de estoque baixo.",
  "actor": "managerOwner",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "estoqueAggregate"
  ],
  "outputEntities": [
    "estoqueAggregate"
  ],
  "readsTables": [
    {
      "tableName": "stock_item",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "stock_movement",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "stock_item",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "low_stock_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [
    "ruleStockQuantityNonNegative",
    "ruleLowStockAlert"
  ],
  "entityRefs": [
    "metricasCafeFlow",
    "stockItem"
  ],
  "commands": [
    {
      "commandId": "registrarMovimentacaoEstoque",
      "input": [
        {
          "name": "stockItemId",
          "type": "string",
          "required": true
        },
        {
          "name": "movementType",
          "type": "string",
          "required": true
        },
        {
          "name": "quantity",
          "type": "number",
          "required": true
        },
        {
          "name": "movementDate",
          "type": "date",
          "required": false
        },
        {
          "name": "reason",
          "type": "string",
          "required": false
        }
      ],
      "output": [
        {
          "name": "estoqueAggregate",
          "type": "estoqueAggregate"
        }
      ]
    }
  ],
  "pendingQuestions": [
    "Quais são os campos obrigatórios exatos para registrar a movimentação (ex.: data, motivo, local, usuário responsável)?",
    "O tipo de movimento deve ser um enum específico (ex.: ENTRADA/SAIDA/ajuste)? Qual o nome do enum?",
    "Existe algum identificador de movimentação que deve ser retornado além do estoqueAggregate?",
    "Há necessidade de informar lote/serial do item no input?",
    "A data da movimentação é sempre ‘agora’ ou pode ser informada pelo usuário?"
  ]
} as const;

export default useCase;
