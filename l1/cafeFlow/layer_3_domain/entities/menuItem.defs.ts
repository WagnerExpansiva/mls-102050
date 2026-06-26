/// <mls fileReference="_102050_/l1/cafeFlow/layer_3_domain/entities/menuItem.defs.ts" enhancement="_blank"/>

export const menuItemDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "MenuItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "MenuItem",
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
    "invariants": [
      "price must be greater than or equal to zero",
      "name must not be empty",
      "status can transition from draft to active, active to inactive, and inactive back to active",
      "at least one RecipeComponent should exist for an active MenuItem"
    ],
    "valueObjects": [
      {
        "name": "RecipeComponent",
        "fields": [
          {
            "fieldId": "recipeComponentId",
            "type": "uuid",
            "required": true,
            "description": "Identificador único do componente de receita"
          },
          {
            "fieldId": "menuItemId",
            "type": "uuid",
            "required": true,
            "description": "Referência ao item de menu ao qual este componente pertence"
          },
          {
            "fieldId": "inventoryItemId",
            "type": "uuid",
            "required": true,
            "description": "Referência ao item de inventário utilizado como ingrediente"
          },
          {
            "fieldId": "quantity",
            "type": "number",
            "required": true,
            "description": "Quantidade consumida do item de inventário por unidade vendida do menu item"
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
        "collection": true
      }
    ]
  }
} as const;

export default menuItemDomainEntity;

export const pipeline = [
  {
    "id": "menuItem__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102050_/l1/cafeFlow/layer_3_domain/entities/menuItem.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_3_domain/entities/menuItem.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_4.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
