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
    "ports": [],
    "functions": [
      {
        "functionName": "updateMenuCategory",
        "inputTypeName": "UpdateMenuCategoryInput",
        "outputTypeName": "UpdateMenuCategoryOutput",
        "input": [
          {
            "name": "menuCategoryId",
            "type": "string",
            "required": true,
            "ofEntity": "MenuCategory",
            "description": "Identifier of the MenuCategory to update"
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "MenuCategory",
            "description": "Updated category name"
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "ofEntity": "MenuCategory",
            "description": "Updated category description"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "MenuCategory",
            "description": "Updated status (active or inactive)"
          }
        ],
        "output": [
          {
            "name": "menuCategoryId",
            "type": "string",
            "required": true,
            "ofEntity": "MenuCategory",
            "description": "Identifier of the updated MenuCategory"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "MenuCategory",
            "description": "Confirmed status after update"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "MenuCategory",
            "description": "Timestamp of the update"
          }
        ],
        "ports": [],
        "rulesApplied": [],
        "transactional": true,
        "steps": [
          "Load MenuCategory by menuCategoryId via MenuCategory port",
          "Validate that the MenuCategory exists; throw not-found if absent",
          "Validate status is one of 'active' or 'inactive'",
          "Apply updated fields (name, description, status) to the MenuCategory aggregate",
          "Set updatedAt to the current server timestamp",
          "Save the MenuCategory aggregate via MenuCategory port",
          "Return menuCategoryId, status, and updatedAt"
        ]
      }
    ],
    "mdmRefs": [
      "MenuCategory"
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
