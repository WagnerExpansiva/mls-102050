/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/viewOperationalDashboard.defs.ts" enhancement="_blank"/>

export const viewOperationalDashboardUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "viewOperationalDashboard",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "viewOperationalDashboard",
    "functionName": "viewOperationalDashboard",
    "inputTypeName": "ViewOperationalDashboardInput",
    "outputTypeName": "ViewOperationalDashboardOutput",
    "ports": [
      "DailyShift",
      "Order",
      "Payment"
    ],
    "rulesApplied": [
      "paymentTimingByOrderType",
      "aiOutputLanguageSelection"
    ],
    "transactional": false,
    "steps": [
      "Fetch current DailyShift via DailyShift port",
      "Read active and recent Orders via Order port for the current shift",
      "Read Payments via Payment port for the current shift",
      "Apply paymentTimingByOrderType to categorize revenue by order type",
      "Select dashboard language via aiOutputLanguageSelection",
      "Aggregate KPIs: total sales, open orders, kitchen load, payment breakdown",
      "Return structured dashboard data"
    ]
  }
} as const;

export default viewOperationalDashboardUsecase;

export const pipeline = [
  {
    "id": "viewOperationalDashboard__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/viewOperationalDashboard.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/viewOperationalDashboard.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_2_application/ports/paymentRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/order.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/payment.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_3.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "paymentTimingByOrderType",
      "aiOutputLanguageSelection"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
