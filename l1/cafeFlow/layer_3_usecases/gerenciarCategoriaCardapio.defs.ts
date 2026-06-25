/// <mls fileReference="_102050_/l1/cafeFlow/layer_3_usecases/gerenciarCategoriaCardapio.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "gerenciarCategoriaCardapio",
  "title": "Gerenciar Categoria do Cardápio",
  "purpose": "Criar, editar ou remover categorias do cardápio.",
  "actor": "managerOwner",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "cardapioAggregate"
  ],
  "outputEntities": [
    "cardapioAggregate"
  ],
  "readsTables": [
    {
      "tableName": "menu_category",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "menu_category",
      "ownership": "mdmOwned"
    }
  ],
  "rulesApplied": [],
  "entityRefs": [
    "menuItem"
  ],
  "commands": [
    {
      "commandId": "criarCategoriaCardapio",
      "input": [
        {
          "name": "nome",
          "type": "string",
          "required": true
        },
        {
          "name": "descricao",
          "type": "string",
          "required": false
        },
        {
          "name": "ativo",
          "type": "boolean",
          "required": false
        }
      ],
      "output": [
        {
          "name": "cardapioAggregate",
          "type": "cardapioAggregate"
        }
      ]
    },
    {
      "commandId": "editarCategoriaCardapio",
      "input": [
        {
          "name": "categoriaId",
          "type": "string",
          "required": true
        },
        {
          "name": "nome",
          "type": "string",
          "required": false
        },
        {
          "name": "descricao",
          "type": "string",
          "required": false
        },
        {
          "name": "ativo",
          "type": "boolean",
          "required": false
        }
      ],
      "output": [
        {
          "name": "cardapioAggregate",
          "type": "cardapioAggregate"
        }
      ]
    },
    {
      "commandId": "removerCategoriaCardapio",
      "input": [
        {
          "name": "categoriaId",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "cardapioAggregate",
          "type": "cardapioAggregate"
        }
      ]
    }
  ],
  "pendingQuestions": [
    "Quais são os campos obrigatórios da tabela menu_category (ex.: nome, descricao, ativo)?",
    "O identificador da categoria deve ser categoriaId ou outro nome?",
    "A saída deve retornar o cardapioAggregate completo ou apenas a categoria alterada?"
  ]
} as const;

export default useCase;
