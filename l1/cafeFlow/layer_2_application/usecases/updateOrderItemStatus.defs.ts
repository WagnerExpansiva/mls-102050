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
    "functionName": "updateOrderItemStatus",
    "inputTypeName": "UpdateOrderItemStatusInput",
    "outputTypeName": "UpdateOrderItemStatusOutput",
    "ports": [],
    "transactional": true,
    "steps": [
      "Fetch OrderItem by id including current status",
      "Validate status transition per orderStatusTransitions (e.g., PENDING -> PREPARING -> READY -> SERVED)",
      "Update OrderItem.status and set updatedAt",
      "If transition to READY or SERVED, evaluate ingredientConsumptionTrigger to ensure stock consumption has been recorded",
      "Persist updated OrderItem",
      "Return updated order item"
    ]
  }
} as const;

export default updateOrderItemStatusUsecase;

export const pipeline = [
  {
    "id": "updateOrderItemStatus__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/updateOrderItemStatus.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/updateOrderItemStatus.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_3.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
