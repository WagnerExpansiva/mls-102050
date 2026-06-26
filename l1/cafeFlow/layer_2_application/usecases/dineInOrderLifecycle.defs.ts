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
      "tableOccupancyConsistency"
    ],
    "transactional": true,
    "steps": [
      "Validate DailyShift is OPEN via DailyShift port",
      "Validate and reserve Table per tableOccupancyConsistency (set OCCUPIED)",
      "Create Order with orderType=DINE_IN, status=OPEN, tableId via Order port",
      "Add OrderItems to the order (delegates to addOrderItem logic)",
      "Transition order to SENT and create KitchenTicket",
      "On kitchen readiness, transition items to READY then SERVED",
      "Process payment post-meal per paymentTimingByOrderType (dine-in = postpaid)",
      "Transition order to CLOSED, release Table per tableOccupancyConsistency",
      "Return completed order lifecycle result"
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
      "_102021_/l2/skills/layer_3.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "orderStatusTransitions",
      "paymentTimingByOrderType",
      "tableOccupancyConsistency"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
