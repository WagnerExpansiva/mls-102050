/// <mls fileReference="_102050_/l1/cafeFlow/layer_3_domain/entities/inventoryItem.defs.ts" enhancement="_blank"/>

export const inventoryItemDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "InventoryItem",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "InventoryItem",
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
        "description": "Nome do ingrediente ou insumo"
      },
      {
        "fieldId": "description",
        "type": "text",
        "required": false,
        "description": "Descrição detalhada do item"
      },
      {
        "fieldId": "unit",
        "type": "string",
        "required": true,
        "description": "Unidade de medida (ex.: kg, L, unidade, gramas)"
      },
      {
        "fieldId": "currentQuantity",
        "type": "number",
        "required": true,
        "description": "Quantidade atual disponível em estoque"
      },
      {
        "fieldId": "minimumLevel",
        "type": "number",
        "required": true,
        "description": "Nível mínimo para geração de alerta de baixo estoque"
      },
      {
        "fieldId": "status",
        "type": "string",
        "required": true,
        "description": "Estado do ciclo de vida do item",
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
    "invariants": [
      "currentQuantity must be >= 0",
      "minimumLevel must be >= 0",
      "name must not be empty or whitespace",
      "unit must not be empty or whitespace",
      "status transitions: active -> inactive; inactive -> active allowed",
      "low-stock alert is raised when currentQuantity <= minimumLevel"
    ],
    "valueObjects": []
  }
} as const;

export default inventoryItemDomainEntity;

export const pipeline = [
  {
    "id": "inventoryItem__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102050_/l1/cafeFlow/layer_3_domain/entities/inventoryItem.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_3_domain/entities/inventoryItem.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/domainEntity.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
