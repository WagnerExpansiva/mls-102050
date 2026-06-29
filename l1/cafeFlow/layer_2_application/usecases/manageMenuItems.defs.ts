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
    "ports": [
      "MenuItem"
    ],
    "functions": [
      {
        "functionName": "updateMenuItem",
        "inputTypeName": "UpdateMenuItemInput",
        "outputTypeName": "UpdateMenuItemOutput",
        "input": [
          {
            "name": "menuItemId",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Identifier of the menu item to update"
          },
          {
            "name": "menuCategoryId",
            "type": "string",
            "required": false,
            "ofEntity": "MenuCategory",
            "description": "New category reference (mdmRef) for the menu item"
          },
          {
            "name": "name",
            "type": "string",
            "required": false,
            "ofEntity": "MenuItem",
            "description": "Updated display name of the menu item"
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "ofEntity": "MenuItem",
            "description": "Updated description of the menu item"
          },
          {
            "name": "price",
            "type": "number",
            "required": false,
            "ofEntity": "MenuItem",
            "description": "Updated price of the menu item"
          },
          {
            "name": "status",
            "type": "string",
            "required": false,
            "ofEntity": "MenuItem",
            "description": "Updated status: draft, active, or inactive"
          }
        ],
        "output": [
          {
            "name": "menuItemId",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Identifier of the updated menu item"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Current status of the menu item after update"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "MenuItem",
            "description": "Timestamp of the last update"
          }
        ],
        "ports": [
          "MenuItem"
        ],
        "rulesApplied": [
          "aiOutputLanguageSelection"
        ],
        "transactional": true,
        "steps": [
          "1. Load the MenuItem aggregate by menuItemId via MenuItemPort.findById",
          "2. Validate that the MenuItem exists; throw NotFound if missing",
          "3. If menuCategoryId is provided, verify the MenuCategory exists via ctx.data.mdmDocument.get({ mdmId: menuCategoryId }) and that its status is active",
          "4. Apply field changes (name, description, price, status, menuCategoryId) to the loaded MenuItem aggregate using its domain mutation methods",
          "5. Validate status transition rules (draft->active, active->inactive, etc.) within the MenuItem entity",
          "6. Save the updated MenuItem aggregate via MenuItemPort.save",
          "7. Return menuItemId, current status, and updatedAt timestamp"
        ]
      }
    ],
    "mdmRefs": [
      "MenuCategory"
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
    "agent": "agentMaterializeGen"
  }
] as const;
