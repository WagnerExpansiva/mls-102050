/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/browseMenuForPos.defs.ts" enhancement="_blank"/>

export const browseMenuForPosUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "browseMenuForPos",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "browseMenuForPos",
    "ports": [
      "MenuItem"
    ],
    "functions": [
      {
        "functionName": "browseMenuForPos",
        "inputTypeName": "BrowseMenuForPosInput",
        "outputTypeName": "BrowseMenuForPosOutput",
        "input": [
          {
            "name": "menuCategoryId",
            "type": "string",
            "required": false,
            "description": "Filter menu items by category id (optional)"
          },
          {
            "name": "status",
            "type": "string",
            "required": false,
            "description": "Filter by menu item status (e.g. 'active' for POS display)"
          }
        ],
        "output": [
          {
            "name": "menuItemId",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem"
          },
          {
            "name": "menuCategoryId",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem"
          },
          {
            "name": "categoryName",
            "type": "string",
            "required": true,
            "ofEntity": "MenuCategory",
            "description": "Category name resolved from MDM MenuCategory"
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem"
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "ofEntity": "MenuItem"
          },
          {
            "name": "price",
            "type": "number",
            "required": true,
            "ofEntity": "MenuItem"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem"
          }
        ],
        "ports": [
          "MenuItem"
        ],
        "rulesApplied": [
          "aiOutputLanguageSelection"
        ],
        "transactional": false,
        "steps": [
          "1. Query MenuItem entities via MenuItem port, optionally filtered by menuCategoryId and status",
          "2. Collect distinct menuCategoryIds from the returned items",
          "3. For each distinct menuCategoryId, resolve MenuCategory from MDM via ctx.data.mdmDocument.get({ mdmId: menuCategoryId }) to obtain the category name",
          "4. Apply aiOutputLanguageSelection rule to select the appropriate language for display fields (name, description, categoryName)",
          "5. Return the enriched list of menu items with categoryName included"
        ]
      }
    ],
    "mdmRefs": [
      "MenuCategory"
    ]
  }
} as const;

export default browseMenuForPosUsecase;

export const pipeline = [
  {
    "id": "browseMenuForPos__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/browseMenuForPos.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/browseMenuForPos.defs.ts",
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
    "agent": "agentMaterializeGen"
  }
] as const;
