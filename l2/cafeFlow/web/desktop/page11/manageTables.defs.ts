/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/manageTables.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "manageTables",
  "pageName": "Gerenciar mesas",
  "actor": "manager",
  "purpose": "Executar Gerenciar mesas.",
  "capabilities": [
    "manageTables"
  ],
  "flowRefs": {
    "experienceFlows": [],
    "entityLifecycles": [],
    "taskWorkflows": [],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section.manageTables",
      "type": "section",
      "sectionName": "Gerenciar mesas",
      "titleKey": "manageTables.section.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "organism.manageTables",
          "type": "organism",
          "organismName": "ManageTables",
          "titleKey": "manageTables.organism.title",
          "purpose": "Gerenciar mesas",
          "userActions": [
            "manageTables"
          ],
          "requiredEntities": [
            "Table"
          ],
          "readsFields": [
            "tableId",
            "number",
            "status"
          ],
          "writesFields": [
            "tableId",
            "number",
            "status"
          ],
          "rulesApplied": [
            "tableOccupancyConsistency"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intention.manageTables.form",
              "intent": "commandForm",
              "action": "manageTables",
              "submitAction": "manageTables",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "manageTables.layout",
    "type": "page",
    "sections": [
      {
        "id": "section.manageTables",
        "type": "section",
        "sectionName": "Gerenciar mesas",
        "titleKey": "manageTables.section.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "organism.manageTables",
            "type": "organism",
            "organismName": "ManageTables",
            "titleKey": "manageTables.organism.title",
            "purpose": "Gerenciar mesas",
            "userActions": [
              "manageTables"
            ],
            "requiredEntities": [
              "Table"
            ],
            "readsFields": [
              "tableId",
              "number",
              "status"
            ],
            "writesFields": [
              "tableId",
              "number",
              "status"
            ],
            "rulesApplied": [
              "tableOccupancyConsistency"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intention.manageTables.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "manageTables.form.title",
                "action": "manageTables",
                "submitAction": "manageTables",
                "fields": [
                  {
                    "id": "field.tableId",
                    "field": "tableId",
                    "labelKey": "manageTables.field.tableId",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.manageTables.input.manageTables.tableId"
                  },
                  {
                    "id": "field.number",
                    "field": "number",
                    "labelKey": "manageTables.field.number",
                    "order": 20,
                    "required": true,
                    "inputType": "text",
                    "stateKey": "ui.manageTables.input.manageTables.number"
                  },
                  {
                    "id": "field.status",
                    "field": "status",
                    "labelKey": "manageTables.field.status",
                    "order": 30,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.manageTables.input.manageTables.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action.manageTables.submit",
                    "action": "manageTables",
                    "labelKey": "manageTables.action.submit",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "manageTables"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "dataBindings": []
};

export const pipeline = [
  {
    "id": "manageTables__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/manageTables.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/manageTables.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/manageTables.defs.ts",
      "_102050_/l2/cafeFlow/web/shared/manageTables.ts",
      "_102050_/l2/cafeFlow/web/contracts/manageTables.defs.ts",
      "_102050_/l2/cafeFlow/web/contracts/manageTables.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "afterSaveFrontEnd": "_102020_/l2/agentMaterializeSolution/registerFrontEnd.ts?registerPage",
    "visualStyle": {
      "description": "POS-first, high-contrast, touch-friendly, low-latency, status-driven UI"
    },
    "agent": "agentMaterializeGen"
  }
] as const;
