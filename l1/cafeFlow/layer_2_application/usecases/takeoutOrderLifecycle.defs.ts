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
      "paymentTimingByOrderType"
    ],
    "transactional": true,
    "steps": [
      "Validate DailyShift is OPEN via DailyShift port",
      "Create Order with orderType=TAKEOUT, status=OPEN via Order port (no table assignment needed)",
      "Add OrderItems to the order (delegates to addOrderItem logic)",
      "Process payment upfront per paymentTimingByOrderType (takeout = prepaid)",
      "Transition order to SENT and create KitchenTicket",
      "On kitchen readiness, transition items to READY",
      "Customer picks up; transition order to CLOSED",
      "Return completed order lifecycle result"
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
      "_102021_/l2/skills/layer_3.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "orderStatusTransitions",
      "paymentTimingByOrderType"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
