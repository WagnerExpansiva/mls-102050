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
      "Validate an open DailyShift exists via DailyShift port",
      "Apply orderStatusTransitions rule to set initial Order status (OPEN)",
      "Apply paymentTimingByOrderType rule based on orderType (DINE_IN, TAKEOUT, DELIVERY)",
      "If DINE_IN, validate Table availability and apply tableOccupancyConsistency rule",
      "Apply aiOutputLanguageSelection rule for order language",
      "Create Order entity with orderType, tableId (if dine-in), dailyShiftId, totalAmount=0",
      "If ingredientConsumptionTrigger applies at creation, prepare StockConsumption entries",
      "Persist Order (and update Table status if dine-in) within transaction",
      "Return created Order with generated orderId"
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
