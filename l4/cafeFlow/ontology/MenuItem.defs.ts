/// <mls fileReference="_102050_/l4/cafeFlow/ontology/MenuItem.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityMenuItem = {
  "entityId": "MenuItem",
  "title": "Item do Cardápio",
  "description": "Produto vendido (ex.: cappuccino, pão de queijo), com preço, categoria e composição de ingredientes para baixa de estoque e relatórios.",
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
      "fieldId": "menuCategoryId",
      "type": "uuid",
      "required": true,
      "description": "Referência à categoria do cardápio à qual o item pertence"
    },
    {
      "fieldId": "name",
      "type": "string",
      "required": true,
      "description": "Nome do item (ex.: cappuccino, pão de queijo)"
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
      "description": "Estado do ciclo de vida do item",
      "enum": [
        "draft",
        "active",
        "inactive"
      ]
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
    "draft",
    "active",
    "inactive"
  ],
  "lifecycleStates": [
    "draft",
    "active",
    "inactive"
  ],
  "rulesApplied": [
    "aiOutputLanguageSelection"
  ]
} as const;

export default cafeFlowEntityMenuItem;
