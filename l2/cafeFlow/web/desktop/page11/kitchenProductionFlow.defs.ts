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
      "id": "sec.kitchenProductionFlow.main",
      "type": "section",
      "sectionName": "Fluxo de produção da cozinha",
      "titleKey": "kitchenProductionFlow.section.main.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org.viewKitchenTickets",
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
              "id": "intent.viewKitchenTickets.queryList",
              "intent": "queryList",
              "stateKey": "ui.kitchenProductionFlow.data.viewKitchenTickets",
              "action": "viewKitchenTickets",
              "order": 10
            }
          ]
        },
        {
          "id": "org.updateKitchenTicketStatus",
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
              "id": "intent.updateKitchenTicketStatus.commandForm",
              "intent": "commandForm",
              "action": "updateKitchenTicketStatus",
              "submitAction": "updateKitchenTicketStatus",
              "order": 10
            }
          ]
        },
        {
          "id": "org.updateOrderItemStatus",
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
              "id": "intent.updateOrderItemStatus.commandForm",
              "intent": "commandForm",
              "action": "updateOrderItemStatus",
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
        "id": "sec.kitchenProductionFlow.main",
        "type": "section",
        "sectionName": "Fluxo de produção da cozinha",
        "titleKey": "kitchenProductionFlow.section.main.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org.viewKitchenTickets",
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
                "id": "intent.viewKitchenTickets.queryList",
                "intent": "queryList",
                "order": 10,
                "titleKey": "kitchenProductionFlow.intent.viewKitchenTickets.queryList.title",
                "action": "viewKitchenTickets",
                "fields": [],
                "columns": [
                  {
                    "id": "col.viewKitchenTickets.kitchenTicketId",
                    "field": "kitchenTicketId",
                    "labelKey": "kitchenProductionFlow.field.kitchenTicketId.label",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.kitchenProductionFlow.data.viewKitchenTickets"
                  },
                  {
                    "id": "col.viewKitchenTickets.orderId",
                    "field": "orderId",
                    "labelKey": "kitchenProductionFlow.field.orderId.label",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.kitchenProductionFlow.data.viewKitchenTickets"
                  },
                  {
                    "id": "col.viewKitchenTickets.status",
                    "field": "status",
                    "labelKey": "kitchenProductionFlow.field.status.label",
                    "order": 30,
                    "required": false,
                    "stateKey": "ui.kitchenProductionFlow.data.viewKitchenTickets"
                  },
                  {
                    "id": "col.viewKitchenTickets.createdAt",
                    "field": "createdAt",
                    "labelKey": "kitchenProductionFlow.field.createdAt.label",
                    "order": 40,
                    "required": false,
                    "stateKey": "ui.kitchenProductionFlow.data.viewKitchenTickets"
                  },
                  {
                    "id": "col.viewKitchenTickets.updatedAt",
                    "field": "updatedAt",
                    "labelKey": "kitchenProductionFlow.field.updatedAt.label",
                    "order": 50,
                    "required": false,
                    "stateKey": "ui.kitchenProductionFlow.data.viewKitchenTickets"
                  }
                ],
                "filters": [
                  {
                    "id": "filter.viewKitchenTickets.kitchenTicketId",
                    "field": "kitchenTicketId",
                    "labelKey": "kitchenProductionFlow.filter.kitchenTicketId.label",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.kitchenProductionFlow.input.viewKitchenTickets.kitchenTicketId"
                  },
                  {
                    "id": "filter.viewKitchenTickets.orderId",
                    "field": "orderId",
                    "labelKey": "kitchenProductionFlow.filter.orderId.label",
                    "order": 20,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.kitchenProductionFlow.input.viewKitchenTickets.orderId"
                  },
                  {
                    "id": "filter.viewKitchenTickets.status",
                    "field": "status",
                    "labelKey": "kitchenProductionFlow.filter.status.label",
                    "order": 30,
                    "required": false,
                    "inputType": "select",
                    "stateKey": "ui.kitchenProductionFlow.input.viewKitchenTickets.status"
                  },
                  {
                    "id": "filter.viewKitchenTickets.createdAt",
                    "field": "createdAt",
                    "labelKey": "kitchenProductionFlow.filter.createdAt.label",
                    "order": 40,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.kitchenProductionFlow.input.viewKitchenTickets.createdAt"
                  },
                  {
                    "id": "filter.viewKitchenTickets.updatedAt",
                    "field": "updatedAt",
                    "labelKey": "kitchenProductionFlow.filter.updatedAt.label",
                    "order": 50,
                    "required": false,
                    "inputType": "date",
                    "stateKey": "ui.kitchenProductionFlow.input.viewKitchenTickets.updatedAt"
                  }
                ],
                "toolbar": [
                  {
                    "id": "tb.viewKitchenTickets.query",
                    "action": "viewKitchenTickets",
                    "labelKey": "kitchenProductionFlow.action.viewKitchenTickets.label",
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
            "id": "org.updateKitchenTicketStatus",
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
                "id": "intent.updateKitchenTicketStatus.commandForm",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "kitchenProductionFlow.intent.updateKitchenTicketStatus.commandForm.title",
                "action": "updateKitchenTicketStatus",
                "submitAction": "updateKitchenTicketStatus",
                "fields": [
                  {
                    "id": "field.updateKitchenTicketStatus.status",
                    "field": "status",
                    "labelKey": "kitchenProductionFlow.field.kitchenTicketStatus.label",
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
                    "id": "act.updateKitchenTicketStatus.submit",
                    "action": "updateKitchenTicketStatus",
                    "labelKey": "kitchenProductionFlow.action.updateKitchenTicketStatus.label",
                    "order": 10,
                    "actionKey": "updateKitchenTicketStatus"
                  }
                ]
              }
            ]
          },
          {
            "id": "org.updateOrderItemStatus",
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
                "id": "intent.updateOrderItemStatus.commandForm",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "kitchenProductionFlow.intent.updateOrderItemStatus.commandForm.title",
                "action": "updateOrderItemStatus",
                "submitAction": "updateOrderItemStatus",
                "fields": [
                  {
                    "id": "field.updateOrderItemStatus.status",
                    "field": "status",
                    "labelKey": "kitchenProductionFlow.field.orderItemStatus.label",
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
                    "id": "act.updateOrderItemStatus.submit",
                    "action": "updateOrderItemStatus",
                    "labelKey": "kitchenProductionFlow.action.updateOrderItemStatus.label",
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
