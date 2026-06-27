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
      "Read OrderItem by id",
      "Apply orderStatusTransitions rule to validate item status transition (PENDING -> PREPARING -> READY -> SERVED)",
      "Update OrderItem.status and updatedAt",
      "If ingredientConsumptionTrigger applies on status change to READY/SERVED, enqueue stock consumption",
      "Persist within transaction",
      "Return updated OrderItem with new status"
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
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
