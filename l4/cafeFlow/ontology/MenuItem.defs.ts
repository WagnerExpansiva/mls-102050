/// <mls fileReference="_102050_/l4/cafeFlow/ontology/MenuItem.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityMenuItem = {
  "entityId": "MenuItem",
  "title": "Item do Cardápio",
  "description": "Produto vendido no POS, com categoria, preço e receita (lista de insumos/quantidades) e sinalização de disponibilidade.",
  "ownership": "moduleOwned",
  "kind": "mdm",
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
      "description": "Nome do item do cardápio"
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
      "description": "Preço de venda do item no POS"
    },
    {
      "fieldId": "isAvailable",
      "type": "boolean",
      "required": true,
      "description": "Indica se o item está disponível para venda no momento"
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Estado do ciclo de vida do item no cardápio",
      "enum": [
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
    "active",
    "inactive"
  ],
  "rulesApplied": [
    "singleEstablishmentPerAccount"
  ]
} as const;

export default cafeFlowEntityMenuItem;
