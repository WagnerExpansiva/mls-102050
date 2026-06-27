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
      "DailyShift"
    ],
    "rulesApplied": [
      "orderStatusTransitions",
      "paymentTimingByOrderType",
      "ingredientConsumptionTrigger",
      "tableOccupancyConsistency"
    ],
    "transactional": true,
    "steps": [
      "Step 1 - Create Order: validate open DailyShift, assign Table (tableOccupancyConsistency), set orderType=DINE_IN, status=OPEN",
      "Step 2 - Add Items: add OrderItems with MenuItem references, recalculate totals",
      "Step 3 - Confirm Order: transition status OPEN -> CONFIRMED (orderStatusTransitions), trigger ingredientConsumptionTrigger",
      "Step 4 - Kitchen: create KitchenTicket, track preparation through statuses",
      "Step 5 - Serve: update OrderItem statuses to SERVED as kitchen completes items",
      "Step 6 - Payment: apply paymentTimingByOrderType (DINE_IN pays at end), record Payment(s)",
      "Step 7 - Close: validate all items served and payments complete, transition to CLOSED, free Table (tableOccupancyConsistency)",
      "Return final Order state with full lifecycle summary"
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
      "_102050_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/order.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.d.ts"
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
      "tableOccupancyConsistency"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
