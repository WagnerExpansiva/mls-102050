/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/viewKitchenTickets.defs.ts" enhancement="_blank"/>

export const viewKitchenTicketsUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "viewKitchenTickets",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "viewKitchenTickets",
    "functionName": "viewKitchenTickets",
    "inputTypeName": "ViewKitchenTicketsInput",
    "outputTypeName": "ViewKitchenTicketsOutput",
    "ports": [],
    "transactional": false,
    "steps": [
      "Query KitchenTickets with optional status filter",
      "Sort by creation time (oldest first for FIFO production)",
      "Return list of kitchen tickets with line items"
    ]
  }
} as const;

export default viewKitchenTicketsUsecase;

export const pipeline = [
  {
    "id": "viewKitchenTickets__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/viewKitchenTickets.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/viewKitchenTickets.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_3.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
