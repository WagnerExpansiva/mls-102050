/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/manageMenuCategories.defs.ts" enhancement="_blank"/>

export const manageMenuCategoriesUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "manageMenuCategories",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "manageMenuCategories",
    "functionName": "manageMenuCategories",
    "inputTypeName": "ManageMenuCategoriesInput",
    "outputTypeName": "ManageMenuCategoriesOutput",
    "ports": [],
    "rulesApplied": [],
    "transactional": true,
    "steps": [
      "Validate category name uniqueness",
      "Create or update MenuCategory entity",
      "Persist via repository",
      "Return category"
    ]
  }
} as const;

export default manageMenuCategoriesUsecase;

export const pipeline = [
  {
    "id": "manageMenuCategories__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/manageMenuCategories.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/manageMenuCategories.defs.ts",
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
