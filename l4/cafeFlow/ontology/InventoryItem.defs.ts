/// <mls fileReference="_102050_/l4/cafeFlow/ontology/InventoryItem.defs.ts" enhancement="_blank"/>

export const cafeFlowEntityInventoryItem = {
  "entityId": "InventoryItem",
  "title": "Item de Estoque (Insumo)",
  "description": "Ingrediente/insumo controlado em estoque, com unidade de medida, nível mínimo e custo opcional.",
  "ownership": "moduleOwned",
  "kind": "mdm",
  "fields": [
    {
      "fieldId": "inventoryItemId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do item de estoque"
    },
    {
      "fieldId": "name",
      "type": "string",
      "required": true,
      "description": "Nome do insumo ou ingrediente"
    },
    {
      "fieldId": "description",
      "type": "text",
      "required": false,
      "description": "Descrição detalhada do item"
    },
    {
      "fieldId": "unitOfMeasure",
      "type": "string",
      "required": true,
      "description": "Unidade de medida (ex: kg, litro, unidade, grama)"
    },
    {
      "fieldId": "minimumLevel",
      "type": "number",
      "required": true,
      "description": "Quantidade mínima de estoque para alerta de reposição"
    },
    {
      "fieldId": "cost",
      "type": "money",
      "required": false,
      "description": "Custo unitário do insumo, quando aplicável"
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
  "rulesApplied": [
    "singleEstablishmentPerAccount"
  ]
} as const;

export default cafeFlowEntityInventoryItem;
