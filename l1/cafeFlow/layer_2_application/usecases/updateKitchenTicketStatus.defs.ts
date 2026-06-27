/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/updateKitchenTicketStatus.defs.ts" enhancement="_blank"/>

export const updateKitchenTicketStatusUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateKitchenTicketStatus",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateKitchenTicketStatus",
    "functionName": "updateKitchenTicketStatus",
    "inputTypeName": "UpdateKitchenTicketStatusInput",
    "outputTypeName": "UpdateKitchenTicketStatusOutput",
    "ports": [],
    "transactional": true,
    "steps": [
      "Read KitchenTicket by id",
      "Apply orderStatusTransitions rule to validate the status transition (PENDING -> IN_PROGRESS -> READY -> COMPLETED)",
      "Update KitchenTicket.status and updatedAt",
      "Persist within transaction",
      "Return updated KitchenTicket with new status"
    ]
  }
} as const;

export default updateKitchenTicketStatusUsecase;

export const pipeline = [
  {
    "id": "updateKitchenTicketStatus__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/updateKitchenTicketStatus.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/updateKitchenTicketStatus.defs.ts",
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
