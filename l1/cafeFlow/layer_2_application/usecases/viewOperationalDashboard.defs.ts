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
      "Read current open DailyShift via DailyShift port",
      "Read active and recent Orders for the shift via Order port",
      "Read Payments for the shift via Payment port",
      "Apply paymentTimingByOrderType rule to categorize revenue by order type",
      "Apply aiOutputLanguageSelection rule for dashboard labels and language",
      "Compute real-time metrics: open orders, kitchen load, revenue, table occupancy, payment totals",
      "Return dashboard data structure with KPIs and breakdowns"
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
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "paymentTimingByOrderType",
      "aiOutputLanguageSelection"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
