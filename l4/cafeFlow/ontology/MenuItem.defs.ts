/// <mls fileReference="_102050_/l4/cafeFlow/ontology/MenuItem.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityMenuItem = {
  "entityId": "MenuItem",
  "title": "Item do Cardápio",
  "description": "Produto vendável no POS (ex.: café, sanduíche), com preço, status de disponibilidade e vínculo com categoria e receita de ingredientes (StockItem) para consumo de estoque.",
  "ownership": "moduleOwned",
  "kind": "core",
  "fields": [
    {
      "fieldId": "menuItemId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do item do cardápio"
    },
    {
      "fieldId": "name",
      "type": "string",
      "required": true,
      "description": "Nome do item no cardápio"
    },
    {
      "fieldId": "description",
      "type": "text",
      "required": false,
      "description": "Descrição detalhada do item"
    },
    {
      "fieldId": "price",
      "type": "money",
      "required": true,
      "description": "Preço de venda do item"
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "enum": [
        "active",
        "inactive",
        "temporarilyUnavailable"
      ],
      "description": "Status de disponibilidade do item no cardápio"
    },
    {
      "fieldId": "menuCategoryId",
      "type": "uuid",
      "required": false,
      "description": "Referência à categoria do cardápio à qual o item pertence"
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
  "statusEnum": [
    "active",
    "inactive",
    "temporarilyUnavailable"
  ],
  "lifecycleStates": [
    "active",
    "inactive",
    "temporarilyUnavailable"
  ],
  "rulesApplied": []
} as const;

export default cafeFlowEntityMenuItem;
