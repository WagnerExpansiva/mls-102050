/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/dineInOrderLifecycle.defs.ts" enhancement="_blank"/>

export const dineInOrderLifecycleUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "dineInOrderLifecycle",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "dineInOrderLifecycle",
    "functionName": "dineInOrderLifecycle",
    "inputTypeName": "DineInOrderLifecycleInput",
    "outputTypeName": "DineInOrderLifecycleOutput",
    "ports": [
      "Order",
      "MenuItem",
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
      "Step 1 — Create Order: invoke createOrder with orderType=DINE_IN, assign Table (apply tableOccupancyConsistency)",
      "Step 2 — Add Items: invoke addOrderItem for each requested MenuItem (apply orderStatusTransitions)",
      "Step 3 — Send to Kitchen: invoke createKitchenTicket for the order",
      "Step 4 — Kitchen Production: invoke updateKitchenTicketStatus and updateOrderItemStatus as items are prepared",
      "Step 5 — Consume Ingredients: invoke consumeIngredientsOnConfirmation when items are confirmed (apply ingredientConsumptionTrigger via InventoryItem port)",
      "Step 6 — Record Payment: invoke recordPayment (apply paymentTimingByOrderType — dine-in pays after consumption)",
      "Step 7 — Close Order: invoke updateOrderStatus to CLOSED, release Table (apply tableOccupancyConsistency)",
      "Apply aiOutputLanguageSelection rule throughout for localized communication",
      "Return full lifecycle result with order, ticket, payment, and consumption references"
    ]
  }
} as const;

export default dineInOrderLifecycleUsecase;

export const pipeline = [
  {
    "id": "dineInOrderLifecycle__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/dineInOrderLifecycle.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/dineInOrderLifecycle.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_2_application/ports/menuItemRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_2_application/ports/paymentRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_2_application/ports/inventoryItemRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/order.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/menuItem.d.ts",
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
