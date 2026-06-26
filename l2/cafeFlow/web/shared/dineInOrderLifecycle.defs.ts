/// <mls fileReference="_102050_/l2/cafeFlow/web/shared/dineInOrderLifecycle.defs.ts" enhancement="_blank"/>

export const definition = {
  "bffCommands": [
    {
      "commandName": "createOrder",
      "purpose": "Criar pedido",
      "kind": "command",
      "input": [
        {
          "name": "orderType",
          "type": "string",
          "required": true
        },
        {
          "name": "status",
          "type": "string",
          "required": true
        },
        {
          "name": "totalAmount",
          "type": "number",
          "required": true
        },
        {
          "name": "notes",
          "type": "string",
          "required": false
        },
        {
          "name": "customerName",
          "type": "string",
          "required": false
        },
        {
          "name": "customerPhone",
          "type": "string",
          "required": false
        },
        {
          "name": "numberOfGuests",
          "type": "number",
          "required": false
        },
        {
          "name": "closedAt",
          "type": "date",
          "required": false
        },
        {
          "name": "cancelledAt",
          "type": "date",
          "required": false
        },
        {
          "name": "cancellationReason",
          "type": "string",
          "required": false
        }
      ],
      "output": [
        {
          "name": "orderId",
          "type": "string"
        }
      ],
      "readsEntities": [
        "Order",
        "DailyShift",
        "Table"
      ],
      "writesEntities": [
        "Order",
        "Table"
      ],
      "readsTables": [],
      "writesTables": [],
      "usecaseRefs": [
        "createOrder"
      ],
      "layerContract": {
        "controllerLayer": "layer_2_controllers",
        "mustCallLayer": "layer_3_usecases",
        "directTableAccessForbidden": true
      },
      "rulesApplied": [
        "orderStatusTransitions",
        "paymentTimingByOrderType",
        "ingredientConsumptionTrigger",
        "aiOutputLanguageSelection",
        "tableOccupancyConsistency"
      ]
    },
    {
      "commandName": "addOrderItem",
      "purpose": "Adicionar item ao pedido",
      "kind": "command",
      "input": [
        {
          "name": "quantity",
          "type": "number",
          "required": true
        },
        {
          "name": "unitPrice",
          "type": "number",
          "required": true
        },
        {
          "name": "totalPrice",
          "type": "number",
          "required": true
        },
        {
          "name": "observations",
          "type": "string",
          "required": false
        },
        {
          "name": "status",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "id",
          "type": "string"
        }
      ],
      "readsEntities": [
        "OrderItem",
        "MenuItem",
        "Order"
      ],
      "writesEntities": [
        "OrderItem",
        "Order",
        "StockConsumption"
      ],
      "readsTables": [],
      "writesTables": [],
      "usecaseRefs": [
        "addOrderItem"
      ],
      "layerContract": {
        "controllerLayer": "layer_2_controllers",
        "mustCallLayer": "layer_3_usecases",
        "directTableAccessForbidden": true
      },
      "rulesApplied": [
        "orderStatusTransitions",
        "ingredientConsumptionTrigger"
      ]
    },
    {
      "commandName": "createKitchenTicket",
      "purpose": "Criar ticket de cozinha",
      "kind": "command",
      "input": [
        {
          "name": "status",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "kitchenTicketId",
          "type": "string"
        }
      ],
      "readsEntities": [
        "KitchenTicket",
        "Order",
        "OrderItem"
      ],
      "writesEntities": [
        "KitchenTicket"
      ],
      "readsTables": [],
      "writesTables": [],
      "usecaseRefs": [
        "createKitchenTicket"
      ],
      "layerContract": {
        "controllerLayer": "layer_2_controllers",
        "mustCallLayer": "layer_3_usecases",
        "directTableAccessForbidden": true
      },
      "rulesApplied": [
        "orderStatusTransitions"
      ]
    },
    {
      "commandName": "updateOrderStatus",
      "purpose": "Atualizar status do pedido",
      "kind": "command",
      "input": [
        {
          "name": "status",
          "type": "string",
          "required": true
        },
        {
          "name": "closedAt",
          "type": "date",
          "required": false
        },
        {
          "name": "cancelledAt",
          "type": "date",
          "required": false
        },
        {
          "name": "cancellationReason",
          "type": "string",
          "required": false
        }
      ],
      "output": [
        {
          "name": "orderId",
          "type": "string"
        }
      ],
      "readsEntities": [
        "Order",
        "OrderItem",
        "KitchenTicket",
        "Table",
        "Payment",
        "InventoryItem",
        "RecipeComponent"
      ],
      "writesEntities": [
        "Order",
        "Table",
        "StockConsumption"
      ],
      "readsTables": [],
      "writesTables": [],
      "usecaseRefs": [
        "updateOrderStatus"
      ],
      "layerContract": {
        "controllerLayer": "layer_2_controllers",
        "mustCallLayer": "layer_3_usecases",
        "directTableAccessForbidden": true
      },
      "rulesApplied": [
        "orderStatusTransitions",
        "paymentTimingByOrderType",
        "ingredientConsumptionTrigger",
        "aiOutputLanguageSelection",
        "tableOccupancyConsistency"
      ]
    },
    {
      "commandName": "updateTableStatus",
      "purpose": "Atualizar ocupação da mesa",
      "kind": "command",
      "input": [
        {
          "name": "status",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "tableId",
          "type": "string"
        }
      ],
      "readsEntities": [
        "Table"
      ],
      "writesEntities": [
        "Table"
      ],
      "readsTables": [],
      "writesTables": [],
      "usecaseRefs": [
        "updateTableStatus"
      ],
      "layerContract": {
        "controllerLayer": "layer_2_controllers",
        "mustCallLayer": "layer_3_usecases",
        "directTableAccessForbidden": true
      },
      "rulesApplied": [
        "tableOccupancyConsistency"
      ]
    }
  ],
  "navigationRefs": []
};

export const pipeline = [
  {
    "id": "dineInOrderLifecycle__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102050_/l2/cafeFlow/web/shared/dineInOrderLifecycle.ts",
    "defPath": "_102050_/l2/cafeFlow/web/shared/dineInOrderLifecycle.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/contracts/dineInOrderLifecycle.ts"
    ],
    "dependsOn": [],
    "skills": [
      "/_102020_/l2/agentMaterializeSolution/skills/genPageShared.ts"
    ],
    "rulesApplied": [
      "orderStatusTransitions",
      "paymentTimingByOrderType",
      "ingredientConsumptionTrigger",
      "aiOutputLanguageSelection",
      "tableOccupancyConsistency"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
