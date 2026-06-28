/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/kitchenProductionFlow.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "kitchenProductionFlow",
  "pageName": "Fluxo de produção da cozinha",
  "actor": "cook",
  "purpose": "Executar Fluxo de produção da cozinha.",
  "capabilities": [
    "kitchenProductionFlow",
    "updateOrderAndKitchenStatuses"
  ],
  "flowRefs": {
    "experienceFlows": [
      "kitchenProductionFlow"
    ],
    "entityLifecycles": [],
    "taskWorkflows": [
      "kitchenProductionFlow"
    ],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section-kitchenProductionFlow-main",
      "type": "section",
      "sectionName": "Fluxo de produção da cozinha",
      "titleKey": "kitchenProductionFlow.section.main.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "organism-viewKitchenTickets",
          "type": "organism",
          "organismName": "ViewKitchenTickets",
          "titleKey": "kitchenProductionFlow.organism.viewKitchenTickets.title",
          "purpose": "Consultar tickets da cozinha",
          "userActions": [
            "viewKitchenTickets"
          ],
          "requiredEntities": [
            "KitchenTicket"
          ],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intention-viewKitchenTickets-list",
              "intent": "queryList",
              "stateKey": "ui.kitchenProductionFlow.data.viewKitchenTickets",
              "action": "viewKitchenTickets",
              "order": 10
            }
          ]
        },
        {
          "id": "organism-updateKitchenTicketStatus",
          "type": "organism",
          "organismName": "UpdateKitchenTicketStatus",
          "titleKey": "kitchenProductionFlow.organism.updateKitchenTicketStatus.title",
          "purpose": "Atualizar status do ticket de cozinha",
          "userActions": [
            "updateKitchenTicketStatus"
          ],
          "requiredEntities": [
            "KitchenTicket"
          ],
          "readsFields": [
            "KitchenTicket.status"
          ],
          "writesFields": [
            "KitchenTicket.status",
            "KitchenTicket.updatedAt"
          ],
          "rulesApplied": [
            "orderStatusTransitions"
          ],
          "order": 20,
          "intentionRefs": [
            {
              "id": "intention-updateKitchenTicketStatus-form",
              "intent": "commandForm",
              "submitAction": "updateKitchenTicketStatus",
              "order": 10
            }
          ]
        },
        {
          "id": "organism-updateOrderItemStatus",
          "type": "organism",
          "organismName": "UpdateOrderItemStatus",
          "titleKey": "kitchenProductionFlow.organism.updateOrderItemStatus.title",
          "purpose": "Atualizar status de item do pedido",
          "userActions": [
            "updateOrderItemStatus"
          ],
          "requiredEntities": [
            "OrderItem"
          ],
          "readsFields": [
            "OrderItem.status"
          ],
          "writesFields": [
            "OrderItem.status",
            "OrderItem.updatedAt"
          ],
          "rulesApplied": [
            "orderStatusTransitions",
            "ingredientConsumptionTrigger"
          ],
          "order": 30,
          "intentionRefs": [
            {
              "id": "intention-updateOrderItemStatus-form",
              "intent": "commandForm",
              "submitAction": "updateOrderItemStatus",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "kitchenProductionFlow.layout",
    "type": "page",
    "sections": [
      {
        "id": "section-kitchenProductionFlow-main",
        "type": "section",
        "sectionName": "Fluxo de produção da cozinha",
        "titleKey": "kitchenProductionFlow.section.main.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "organism-viewKitchenTickets",
            "type": "organism",
            "organismName": "ViewKitchenTickets",
            "titleKey": "kitchenProductionFlow.organism.viewKitchenTickets.title",
            "purpose": "Consultar tickets da cozinha",
            "userActions": [
              "viewKitchenTickets"
            ],
            "requiredEntities": [
              "KitchenTicket"
            ],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [],
            "order": 10,
            "intentions": [
              {
                "id": "intention-viewKitchenTickets-list",
                "intent": "queryList",
                "order": 10,
                "titleKey": "kitchenProductionFlow.intention.viewKitchenTickets.list.title",
                "action": "viewKitchenTickets",
                "fields": [],
                "columns": [
                  {
                    "id": "column-kitchenTicketId",
                    "field": "kitchenTicketId",
                    "labelKey": "kitchenProductionFlow.field.kitchenTicketId",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.kitchenProductionFlow.data.viewKitchenTickets"
                  },
                  {
                    "id": "column-orderId",
                    "field": "orderId",
                    "labelKey": "kitchenProductionFlow.field.orderId",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.kitchenProductionFlow.data.viewKitchenTickets"
                  },
                  {
                    "id": "column-status",
                    "field": "status",
                    "labelKey": "kitchenProductionFlow.field.status",
                    "order": 30,
                    "required": false,
                    "stateKey": "ui.kitchenProductionFlow.data.viewKitchenTickets"
                  },
                  {
                    "id": "column-createdAt",
                    "field": "createdAt",
                    "labelKey": "kitchenProductionFlow.field.createdAt",
                    "order": 40,
                    "required": false,
                    "stateKey": "ui.kitchenProductionFlow.data.viewKitchenTickets"
                  },
                  {
                    "id": "column-updatedAt",
                    "field": "updatedAt",
                    "labelKey": "kitchenProductionFlow.field.updatedAt",
                    "order": 50,
                    "required": false,
                    "stateKey": "ui.kitchenProductionFlow.data.viewKitchenTickets"
                  }
                ],
                "filters": [
                  {
                    "id": "filter-kitchenTicketId",
                    "field": "kitchenTicketId",
                    "labelKey": "kitchenProductionFlow.field.kitchenTicketId",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.kitchenProductionFlow.input.viewKitchenTickets.kitchenTicketId"
                  },
                  {
                    "id": "filter-orderId",
                    "field": "orderId",
                    "labelKey": "kitchenProductionFlow.field.orderId",
                    "order": 20,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.kitchenProductionFlow.input.viewKitchenTickets.orderId"
                  },
                  {
                    "id": "filter-status",
                    "field": "status",
                    "labelKey": "kitchenProductionFlow.field.status",
                    "order": 30,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.kitchenProductionFlow.input.viewKitchenTickets.status"
                  },
                  {
                    "id": "filter-createdAt",
                    "field": "createdAt",
                    "labelKey": "kitchenProductionFlow.field.createdAt",
                    "order": 40,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.kitchenProductionFlow.input.viewKitchenTickets.createdAt"
                  },
                  {
                    "id": "filter-updatedAt",
                    "field": "updatedAt",
                    "labelKey": "kitchenProductionFlow.field.updatedAt",
                    "order": 50,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.kitchenProductionFlow.input.viewKitchenTickets.updatedAt"
                  }
                ],
                "toolbar": [
                  {
                    "id": "toolbar-viewKitchenTickets",
                    "action": "viewKitchenTickets",
                    "labelKey": "kitchenProductionFlow.action.viewKitchenTickets",
                    "order": 10,
                    "actionKey": "viewKitchenTickets"
                  }
                ],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.kitchenProductionFlow.data.viewKitchenTickets"
              }
            ]
          },
          {
            "id": "organism-updateKitchenTicketStatus",
            "type": "organism",
            "organismName": "UpdateKitchenTicketStatus",
            "titleKey": "kitchenProductionFlow.organism.updateKitchenTicketStatus.title",
            "purpose": "Atualizar status do ticket de cozinha",
            "userActions": [
              "updateKitchenTicketStatus"
            ],
            "requiredEntities": [
              "KitchenTicket"
            ],
            "readsFields": [
              "KitchenTicket.status"
            ],
            "writesFields": [
              "KitchenTicket.status",
              "KitchenTicket.updatedAt"
            ],
            "rulesApplied": [
              "orderStatusTransitions"
            ],
            "order": 20,
            "intentions": [
              {
                "id": "intention-updateKitchenTicketStatus-form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "kitchenProductionFlow.intention.updateKitchenTicketStatus.form.title",
                "submitAction": "updateKitchenTicketStatus",
                "fields": [
                  {
                    "id": "field-kitchenTicketStatus",
                    "field": "status",
                    "labelKey": "kitchenProductionFlow.field.status",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.kitchenProductionFlow.input.updateKitchenTicketStatus.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action-updateKitchenTicketStatus",
                    "action": "updateKitchenTicketStatus",
                    "labelKey": "kitchenProductionFlow.action.updateKitchenTicketStatus",
                    "order": 10,
                    "actionKey": "updateKitchenTicketStatus"
                  }
                ]
              }
            ]
          },
          {
            "id": "organism-updateOrderItemStatus",
            "type": "organism",
            "organismName": "UpdateOrderItemStatus",
            "titleKey": "kitchenProductionFlow.organism.updateOrderItemStatus.title",
            "purpose": "Atualizar status de item do pedido",
            "userActions": [
              "updateOrderItemStatus"
            ],
            "requiredEntities": [
              "OrderItem"
            ],
            "readsFields": [
              "OrderItem.status"
            ],
            "writesFields": [
              "OrderItem.status",
              "OrderItem.updatedAt"
            ],
            "rulesApplied": [
              "orderStatusTransitions",
              "ingredientConsumptionTrigger"
            ],
            "order": 30,
            "intentions": [
              {
                "id": "intention-updateOrderItemStatus-form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "kitchenProductionFlow.intention.updateOrderItemStatus.form.title",
                "submitAction": "updateOrderItemStatus",
                "fields": [
                  {
                    "id": "field-orderItemStatus",
                    "field": "status",
                    "labelKey": "kitchenProductionFlow.field.orderItem.status",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.kitchenProductionFlow.input.updateOrderItemStatus.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action-updateOrderItemStatus",
                    "action": "updateOrderItemStatus",
                    "labelKey": "kitchenProductionFlow.action.updateOrderItemStatus",
                    "order": 10,
                    "actionKey": "updateOrderItemStatus"
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
    "id": "kitchenProductionFlow__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/kitchenProductionFlow.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/kitchenProductionFlow.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/kitchenProductionFlow.defs.ts",
      "_102050_/l2/cafeFlow/web/shared/kitchenProductionFlow.ts",
      "_102050_/l2/cafeFlow/web/contracts/kitchenProductionFlow.defs.ts",
      "_102050_/l2/cafeFlow/web/contracts/kitchenProductionFlow.ts"
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
