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
    "transactional": true,
    "steps": [
      "Perform CRUD operation on MenuCategory (create/update/delete)",
      "Validate category name uniqueness and display order",
      "Persist changes and return updated MenuCategory(ies)"
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
      "_102021_/l2/skills/layer_3.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
