/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/manageMenuItems.defs.ts" enhancement="_blank"/>

export const manageMenuItemsUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "manageMenuItems",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "manageMenuItems",
    "functionName": "manageMenuItems",
    "inputTypeName": "ManageMenuItemsInput",
    "outputTypeName": "ManageMenuItemsOutput",
    "ports": [
      "MenuItem"
    ],
    "rulesApplied": [
      "aiOutputLanguageSelection"
    ],
    "transactional": true,
    "steps": [
      "Read existing MenuItem via MenuItem port (for updates)",
      "Validate referenced MenuCategory exists",
      "Apply aiOutputLanguageSelection rule for localized name/description fields",
      "Create or update MenuItem entity",
      "Persist MenuItem via MenuItem port",
      "Return updated item"
    ]
  }
} as const;

export default manageMenuItemsUsecase;

export const pipeline = [
  {
    "id": "manageMenuItems__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/manageMenuItems.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/manageMenuItems.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/ports/menuItemRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/menuItem.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "aiOutputLanguageSelection"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
