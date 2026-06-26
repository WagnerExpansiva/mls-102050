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
      "Fetch Order with OrderItems, KitchenTickets, and Table via Order port",
      "Validate status transition per orderStatusTransitions (OPEN -> SENT -> PREPARING -> READY -> SERVED -> CLOSED or CANCELLED)",
      "If transitioning to CLOSED: validate all Payments are settled per paymentTimingByOrderType, set closedAt",
      "If transitioning to CANCELLED: set cancelledAt and cancellationReason, release table per tableOccupancyConsistency",
      "If transitioning to confirmation status: trigger ingredientConsumptionTrigger to deduct InventoryItem stock via InventoryItem port",
      "If dine-in and closing: release Table per tableOccupancyConsistency",
      "Apply aiOutputLanguageSelection for any localized notifications",
      "Update Order.status and updatedAt, persist via Order port",
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
      "_102021_/l2/skills/layer_3.md",
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
