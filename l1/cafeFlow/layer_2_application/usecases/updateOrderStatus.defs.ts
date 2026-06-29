/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/updateOrderStatus.defs.ts" enhancement="_blank"/>

export const updateOrderStatusUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateOrderStatus",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateOrderStatus",
    "ports": [
      "Order",
      "Payment",
      "InventoryItem",
      "MenuItem"
    ],
    "functions": [
      {
        "functionName": "updateOrderStatus",
        "inputTypeName": "UpdateOrderStatusInput",
        "outputTypeName": "UpdateOrderStatusOutput",
        "input": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "ID of the order whose status is being updated"
          },
          {
            "name": "dailyShiftId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Daily shift context for the operation"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Target status: draft, sentToKitchen, inPreparation, ready, served, closed, cancelled"
          },
          {
            "name": "cancellationReason",
            "type": "string",
            "required": false,
            "ofEntity": "Order",
            "description": "Reason required when status is cancelled"
          },
          {
            "name": "tableId",
            "type": "string",
            "required": false,
            "ofEntity": "Order",
            "description": "Table ID for table-occupancy consistency check (mdmRef)"
          }
        ],
        "output": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "ID of the updated order"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "New status of the order"
          },
          {
            "name": "previousStatus",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Previous status before the transition"
          },
          {
            "name": "closedAt",
            "type": "string",
            "required": false,
            "ofEntity": "Order",
            "description": "Timestamp set when order is closed"
          },
          {
            "name": "cancelledAt",
            "type": "string",
            "required": false,
            "ofEntity": "Order",
            "description": "Timestamp set when order is cancelled"
          },
          {
            "name": "tableReleased",
            "type": "boolean",
            "required": false,
            "description": "Whether the associated table was released to available"
          },
          {
            "name": "stockConsumptionIds",
            "type": "string",
            "required": false,
            "ofEntity": "StockConsumption",
            "description": "IDs of stock consumption records created when ingredients were consumed"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "Order",
            "description": "Timestamp of the update"
          }
        ],
        "ports": [
          "Order",
          "Payment",
          "InventoryItem",
          "MenuItem"
        ],
        "rulesApplied": [
          "orderStatusTransitions",
          "paymentTimingByOrderType",
          "ingredientConsumptionTrigger",
          "aiOutputLanguageSelection",
          "tableOccupancyConsistency"
        ],
        "transactional": true,
        "steps": [
          "1. Load Order by orderId via Order port (includes embedded OrderItem collection and KitchenTicket reference)",
          "2. Validate the requested status transition against the current status using orderStatusTransitions rule — reject illegal transitions",
          "3. If target status is 'closed' or 'cancelled', verify payment requirements per paymentTimingByOrderType rule: for 'mesa' type check that a captured Payment exists via Payment port; for 'takeout' type check payment was authorized before preparation",
          "4. If target status is 'served' or 'closed', trigger ingredientConsumptionTrigger: for each OrderItem load its MenuItem via MenuItem port to obtain RecipeComponent list; for each RecipeComponent deduct quantity * orderItem.quantity from the corresponding InventoryItem via InventoryItem port and create StockConsumption records",
          "5. Apply aiOutputLanguageSelection to determine the language for any kitchen-ticket or notification output associated with the status change",
          "6. If target status is 'closed' or 'cancelled' and order has a tableId, enforce tableOccupancyConsistency: read Table via ctx.data.mdmDocument.get({ mdmId: tableId }), verify it is currently 'occupied', and update it to 'available'",
          "7. If target status is 'cancelled', set cancelledAt and require cancellationReason; if 'closed', set closedAt",
          "8. Update Order.status and updatedAt, then save the Order aggregate via Order port",
          "9. Return orderId, status, previousStatus, closedAt/cancelledAt if set, tableReleased flag, stockConsumptionIds if created, and updatedAt"
        ]
      }
    ],
    "mdmRefs": [
      "Table"
    ]
  }
} as const;

export default updateOrderStatusUsecase;

export const pipeline = [
  {
    "id": "updateOrderStatus__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/updateOrderStatus.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/updateOrderStatus.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_2_application/ports/paymentRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_2_application/ports/inventoryItemRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_2_application/ports/menuItemRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/order.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/payment.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/inventoryItem.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/menuItem.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
