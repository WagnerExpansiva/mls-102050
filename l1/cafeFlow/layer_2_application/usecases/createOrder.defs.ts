/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/createOrder.defs.ts" enhancement="_blank"/>

export const createOrderUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createOrder",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createOrder",
    "functionName": "createOrder",
    "inputTypeName": "CreateOrderInput",
    "outputTypeName": "CreateOrderOutput",
    "ports": [
      "Order",
      "DailyShift"
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
      "Validate DailyShift is OPEN via DailyShift port",
      "If orderType is DINE_IN, validate table availability per tableOccupancyConsistency and assign tableId",
      "Determine payment timing per paymentTimingByOrderType rule (prepaid for takeout/delivery, postpaid for dine-in)",
      "Create Order with status=OPEN, dailyShiftId, orderType, tableId (if applicable)",
      "Apply aiOutputLanguageSelection for order locale",
      "Set initial orderStatusTransitions state",
      "Persist Order via Order port",
      "Return created order with generated orderId"
    ]
  }
} as const;

export default createOrderUsecase;

export const pipeline = [
  {
    "id": "createOrder__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/createOrder.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/createOrder.defs.ts",
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
      "ingredientConsumptionTrigger",
      "aiOutputLanguageSelection",
      "tableOccupancyConsistency"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
