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
      "Read existing MenuItem by id (for update) or list all (for browse) via MenuItem port",
      "Validate MenuItem fields: name, price, category, availability",
      "Apply aiOutputLanguageSelection rule for localized name/description fields",
      "For create: assign to MenuCategory and set initial availability",
      "For update: validate category exists and price is positive",
      "Persist MenuItem within transaction",
      "Return created/updated MenuItem with category reference"
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
