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
    "functionName": "updateOrderStatus",
    "inputTypeName": "UpdateOrderStatusInput",
    "outputTypeName": "UpdateOrderStatusOutput",
    "ports": [
      "Order",
      "Payment",
      "InventoryItem"
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
      "Read Order with OrderItems, KitchenTickets, Payments via Order port",
      "Apply orderStatusTransitions rule to validate target status is reachable from current",
      "If transitioning to CLOSED: apply paymentTimingByOrderType rule to verify all payments settled",
      "If transitioning to CLOSED: apply ingredientConsumptionTrigger rule to ensure stock consumed via InventoryItem port",
      "If transitioning to CLOSED: set closedAt, release Table (apply tableOccupancyConsistency rule)",
      "If transitioning to CANCELLED: set cancelledAt and cancellationReason, release Table",
      "Apply aiOutputLanguageSelection rule for localized status metadata",
      "Update Order.status and updatedAt",
      "If Table released, update Table status to AVAILABLE",
      "Persist Order via Order port",
      "Return updated order"
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
      "_102050_/l1/cafeFlow/layer_3_domain/entities/order.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/payment.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/inventoryItem.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
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
