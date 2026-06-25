/// <mls fileReference="_102050_/l1/cafeFlow/layer_4_entities/order.defs.ts" enhancement="_blank"/>

export const entity = {
  "entityId": "order",
  "title": "Pedido",
  "purpose": "Gerenciar pedidos e seus itens.",
  "layer": "layer_4_entities",
  "fields": [
    {
      "fieldId": "orderId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do pedido."
    },
    {
      "fieldId": "dailyShiftId",
      "type": "DailyShift",
      "required": true,
      "description": "Referência ao turno diário ao qual o pedido pertence."
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Status atual do pedido no fluxo operacional.",
      "enum": [
        "received",
        "preparing",
        "ready",
        "delivered",
        "cancelled"
      ]
    },
    {
      "fieldId": "tableIdentifier",
      "type": "string",
      "required": false,
      "description": "Identificação da mesa quando o pedido é para consumo no local."
    },
    {
      "fieldId": "isTakeout",
      "type": "boolean",
      "required": true,
      "description": "Indica se o pedido é para retirada (takeout)."
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de criação do pedido."
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização do pedido."
    }
  ],
  "statusEnum": [
    "received",
    "preparing",
    "ready",
    "delivered",
    "cancelled"
  ],
  "lifecycleStates": [
    "received",
    "preparing",
    "ready",
    "delivered",
    "cancelled"
  ],
  "ontologyEntities": [
    "Order",
    "OrderItem"
  ],
  "sourceTables": [
    {
      "tableName": "order",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "order_item",
      "ownership": "moduleOwned"
    }
  ],
  "storage": [
    {
      "kind": "mdm",
      "moduleRef": "102034",
      "entity": "Order",
      "domainId": "order",
      "sourceOfTruth": "102034",
      "governanceRules": [
        "ruleOrderStatusFlow",
        "ruleStockDeductionOnOrderPreparation",
        "ruleStockQuantityNonNegative",
        "ruleOrderRequiresOpenShift",
        "ruleShiftCloseNoOpenOrders"
      ]
    },
    {
      "kind": "moduleTable",
      "tableId": "orderItem",
      "tableName": "order_item",
      "fileRef": "_102050_/l1/cafeFlow/layer_1_external/orderItem.defs.ts"
    }
  ],
  "allowedOperations": [
    "create",
    "update",
    "read",
    "list"
  ],
  "rulesApplied": [],
  "usecaseRefs": [
    "fecharTurnoDiario",
    "criarPedido",
    "listarPedidos",
    "atualizarStatusPedido",
    "cancelarPedido"
  ],
  "materialization": {
    "fileName": "layer_4_entities/OrderEntity.ts",
    "className": "OrderEntity",
    "contractName": "IOrderEntity"
  }
} as const;

export default entity;
