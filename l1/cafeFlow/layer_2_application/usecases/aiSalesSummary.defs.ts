/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/aiSalesSummary.defs.ts" enhancement="_blank"/>

export const aiSalesSummaryUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "aiSalesSummary",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "aiSalesSummary",
    "ports": [
      "Order",
      "DailyShift",
      "MenuItem"
    ],
    "functions": [
      {
        "functionName": "aiSalesSummary",
        "inputTypeName": "AiSalesSummaryInput",
        "outputTypeName": "AiSalesSummaryOutput",
        "input": [
          {
            "name": "dailyShiftId",
            "type": "string",
            "required": false,
            "description": "Filter summary to a specific daily shift"
          },
          {
            "name": "startDate",
            "type": "string",
            "required": false,
            "description": "Start date for the summary period (ISO date)"
          },
          {
            "name": "endDate",
            "type": "string",
            "required": false,
            "description": "End date for the summary period (ISO date)"
          },
          {
            "name": "language",
            "type": "string",
            "required": false,
            "description": "Preferred output language for the AI-generated summary text (e.g. pt-BR, en-US)"
          }
        ],
        "output": [
          {
            "name": "totalSales",
            "type": "number",
            "required": true,
            "description": "Sum of totalAmount across all closed orders in the period"
          },
          {
            "name": "totalOrders",
            "type": "number",
            "required": true,
            "description": "Count of orders included in the summary"
          },
          {
            "name": "totalCancelledOrders",
            "type": "number",
            "required": true,
            "description": "Count of cancelled orders in the period"
          },
          {
            "name": "averageOrderValue",
            "type": "number",
            "required": true,
            "description": "Average totalAmount per closed order"
          },
          {
            "name": "topSellingItems",
            "type": "string",
            "required": true,
            "description": "JSON string listing top-selling menu items by quantity and revenue"
          },
          {
            "name": "salesByOrderType",
            "type": "string",
            "required": true,
            "description": "JSON string with sales breakdown by order type (mesa vs takeout)"
          },
          {
            "name": "summaryText",
            "type": "string",
            "required": true,
            "description": "AI-generated natural-language sales summary in the selected language"
          },
          {
            "name": "language",
            "type": "string",
            "required": true,
            "description": "The language used for the AI summary text"
          }
        ],
        "ports": [
          "Order",
          "DailyShift",
          "MenuItem"
        ],
        "rulesApplied": [
          "aiOutputLanguageSelection"
        ],
        "transactional": false,
        "steps": [
          "1. Resolve the target period: if dailyShiftId is provided, load the DailyShift via DailyShiftPort to obtain shiftDate; otherwise use startDate/endDate (defaulting to today if both absent).",
          "2. Query all Order aggregates within the period via OrderPort, including embedded OrderItem children.",
          "3. Separate closed orders (status=closed) from cancelled orders (status=cancelled) for metric computation.",
          "4. Compute totalSales (sum of totalAmount on closed orders), totalOrders, totalCancelledOrders, and averageOrderValue.",
          "5. Aggregate OrderItem quantities grouped by menuItemId; load MenuItem names via MenuItemPort to build topSellingItems ranking.",
          "6. Break down sales by orderType (mesa vs takeout) into salesByOrderType.",
          "7. Apply rule aiOutputLanguageSelection: determine the output language from the language input field (default to pt-BR if not provided), and generate summaryText in that language.",
          "8. Return the assembled AiSalesSummaryOutput."
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default aiSalesSummaryUsecase;

export const pipeline = [
  {
    "id": "aiSalesSummary__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/aiSalesSummary.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/aiSalesSummary.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_2_application/ports/menuItemRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/order.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/menuItem.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
