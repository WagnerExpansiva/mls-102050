/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/updateOrderItemStatus.defs.ts" enhancement="_blank"/>

export const updateOrderItemStatusUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateOrderItemStatus",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateOrderItemStatus",
    "ports": [
      "Order"
    ],
    "functions": [
      {
        "functionName": "updateOrderItemStatus",
        "inputTypeName": "UpdateOrderItemStatusInput",
        "outputTypeName": "UpdateOrderItemStatusOutput",
        "input": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "description": "ID of the parent Order aggregate to load",
            "ofEntity": "Order"
          },
          {
            "name": "orderItemId",
            "type": "string",
            "required": true,
            "description": "ID of the OrderItem whose status will be updated",
            "ofEntity": "OrderItem"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "New status for the OrderItem (new, sentToKitchen, inPreparation, ready, served, cancelled)",
            "ofEntity": "OrderItem"
          }
        ],
        "output": [
          {
            "name": "orderId",
            "type": "string",
            "required": true,
            "description": "ID of the parent Order aggregate",
            "ofEntity": "Order"
          },
          {
            "name": "orderItemId",
            "type": "string",
            "required": true,
            "description": "ID of the updated OrderItem",
            "ofEntity": "OrderItem"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "description": "The new status applied to the OrderItem",
            "ofEntity": "OrderItem"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "description": "Timestamp of the status update",
            "ofEntity": "OrderItem"
          }
        ],
        "ports": [
          "Order"
        ],
        "rulesApplied": [
          "orderStatusTransitions",
          "ingredientConsumptionTrigger"
        ],
        "transactional": true,
        "steps": [
          "Load the parent Order aggregate by orderId via the Order port",
          "Find the OrderItem with matching orderItemId within the Order's items collection",
          "Validate the requested status transition against the orderStatusTransitions rule (e.g. new→sentToKitchen→inPreparation→ready→served; cancelled is terminal)",
          "If the OrderItem is not found or the transition is invalid, raise a domain error",
          "Apply the new status to the OrderItem and update its updatedAt timestamp",
          "If the new status is 'inPreparation', apply the ingredientConsumptionTrigger rule to consume ingredients for the OrderItem's menuItemId and quantity",
          "Save the parent Order aggregate via the Order port",
          "Return orderId, orderItemId, the applied status, and updatedAt"
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default updateOrderItemStatusUsecase;

export const pipeline = [
  {
    "id": "updateOrderItemStatus__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/updateOrderItemStatus.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/updateOrderItemStatus.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/order.d.ts"
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
