/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/takeoutOrderLifecycle.defs.ts" enhancement="_blank"/>

export const takeoutOrderLifecycleUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "takeoutOrderLifecycle",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "takeoutOrderLifecycle",
    "functionName": "takeoutOrderLifecycle",
    "inputTypeName": "TakeoutOrderLifecycleInput",
    "outputTypeName": "TakeoutOrderLifecycleOutput",
    "ports": [
      "Order",
      "DailyShift"
    ],
    "rulesApplied": [
      "orderStatusTransitions",
      "paymentTimingByOrderType",
      "ingredientConsumptionTrigger"
    ],
    "transactional": true,
    "steps": [
      "Step 1 - Create Order: validate open DailyShift, set orderType=TAKEOUT, status=OPEN (no Table assignment needed)",
      "Step 2 - Add Items: add OrderItems with MenuItem references, recalculate totals",
      "Step 3 - Payment: apply paymentTimingByOrderType (TAKEOUT may require payment upfront), record Payment(s)",
      "Step 4 - Confirm Order: transition status OPEN -> CONFIRMED (orderStatusTransitions), trigger ingredientConsumptionTrigger",
      "Step 5 - Kitchen: create KitchenTicket, track preparation through statuses",
      "Step 6 - Ready: transition all OrderItems to READY, notify customer for pickup",
      "Step 7 - Close: transition Order to CLOSED after pickup confirmation",
      "Return final Order state with full lifecycle summary"
    ]
  }
} as const;

export default takeoutOrderLifecycleUsecase;

export const pipeline = [
  {
    "id": "takeoutOrderLifecycle__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/takeoutOrderLifecycle.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/takeoutOrderLifecycle.defs.ts",
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
      "ingredientConsumptionTrigger"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
