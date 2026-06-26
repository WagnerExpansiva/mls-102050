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
    "functionName": "browseMenuForPos",
    "inputTypeName": "BrowseMenuForPosInput",
    "outputTypeName": "BrowseMenuForPosOutput",
    "ports": [
      "MenuItem"
    ],
    "rulesApplied": [
      "aiOutputLanguageSelection"
    ],
    "transactional": false,
    "steps": [
      "Determine display language via aiOutputLanguageSelection rule",
      "Read all active MenuItems grouped by MenuCategory via MenuItem port",
      "Filter out unavailable or discontinued items",
      "Format items with localized names, prices, and category labels for POS display",
      "Return categorized menu tree"
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
      "_102021_/l2/skills/layer_3.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "aiOutputLanguageSelection"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
