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
      "Read Order with OrderItems via Order port",
      "Apply orderStatusTransitions rule to validate the requested status transition",
      "If transitioning to CLOSED: validate all OrderItems are SERVED/COMPLETED via Order port",
      "If transitioning to CLOSED: validate payments cover totalAmount via Payment port",
      "Apply paymentTimingByOrderType rule to ensure payment timing constraints are met",
      "If ingredientConsumptionTrigger applies (e.g., on CONFIRMED): create StockConsumption and update InventoryItem via InventoryItem port",
      "If DINE_IN and closing/cancelling: apply tableOccupancyConsistency rule to free the Table",
      "Apply aiOutputLanguageSelection rule for any notification messages",
      "Update Order.status, updatedAt, closedAt or cancelledAt + cancellationReason",
      "Persist Order (and Table, StockConsumption) within transaction",
      "Return updated Order with new status and side-effect summary"
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
