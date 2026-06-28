/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/takeoutOrderLifecycle.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "takeoutOrderLifecycle",
  "pageName": "Ciclo de pedido (takeout)",
  "actor": "attendant",
  "purpose": "Executar Ciclo de pedido (takeout).",
  "capabilities": [
    "takeoutOrderLifecycle"
  ],
  "flowRefs": {
    "experienceFlows": [
      "takeoutOrderLifecycle"
    ],
    "entityLifecycles": [],
    "taskWorkflows": [
      "takeoutOrderLifecycle"
    ],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section.takeoutOrderLifecycle.main",
      "type": "section",
      "sectionName": "Ciclo de pedido (takeout)",
      "titleKey": "takeoutOrderLifecycle.section.main.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "organism.createOrder",
          "type": "form",
          "organismName": "CreateOrder",
          "titleKey": "takeoutOrderLifecycle.createOrder.title",
          "purpose": "Criar pedido",
          "userActions": [
            "createOrder"
          ],
          "requiredEntities": [
            "Order",
            "DailyShift",
            "Table"
          ],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "orderStatusTransitions",
            "paymentTimingByOrderType",
            "ingredientConsumptionTrigger",
            "aiOutputLanguageSelection",
            "tableOccupancyConsistency"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intention.createOrder.form",
              "intent": "commandForm",
              "action": "createOrder",
              "submitAction": "createOrder",
              "order": 10
            }
          ]
        },
        {
          "id": "organism.addOrderItem",
          "type": "form",
          "organismName": "AddOrderItem",
          "titleKey": "takeoutOrderLifecycle.addOrderItem.title",
          "purpose": "Adicionar item ao pedido",
          "userActions": [
            "addOrderItem"
          ],
          "requiredEntities": [
            "OrderItem",
            "MenuItem",
            "Order",
            "StockConsumption"
          ],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "orderStatusTransitions",
            "ingredientConsumptionTrigger"
          ],
          "order": 20,
          "intentionRefs": [
            {
              "id": "intention.addOrderItem.form",
              "intent": "commandForm",
              "action": "addOrderItem",
              "submitAction": "addOrderItem",
              "order": 10
            }
          ]
        },
        {
          "id": "organism.createKitchenTicket",
          "type": "form",
          "organismName": "CreateKitchenTicket",
          "titleKey": "takeoutOrderLifecycle.createKitchenTicket.title",
          "purpose": "Criar ticket de cozinha",
          "userActions": [
            "createKitchenTicket"
          ],
          "requiredEntities": [
            "KitchenTicket",
            "Order",
            "OrderItem"
          ],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "orderStatusTransitions"
          ],
          "order": 30,
          "intentionRefs": [
            {
              "id": "intention.createKitchenTicket.form",
              "intent": "commandForm",
              "action": "createKitchenTicket",
              "submitAction": "createKitchenTicket",
              "order": 10
            }
          ]
        },
        {
          "id": "organism.updateOrderStatus",
          "type": "form",
          "organismName": "UpdateOrderStatus",
          "titleKey": "takeoutOrderLifecycle.updateOrderStatus.title",
          "purpose": "Atualizar status do pedido",
          "userActions": [
            "updateOrderStatus"
          ],
          "requiredEntities": [
            "Order",
            "OrderItem",
            "KitchenTicket",
            "Table",
            "Payment",
            "InventoryItem",
            "RecipeComponent",
            "StockConsumption"
          ],
          "readsFields": [
            "Order.status",
            "Order.orderType",
            "Order.tableId"
          ],
          "writesFields": [
            "Order.status",
            "Order.updatedAt",
            "Order.closedAt",
            "Order.cancelledAt",
            "Order.cancellationReason"
          ],
          "rulesApplied": [
            "orderStatusTransitions",
            "paymentTimingByOrderType",
            "ingredientConsumptionTrigger",
            "aiOutputLanguageSelection",
            "tableOccupancyConsistency"
          ],
          "order": 40,
          "intentionRefs": [
            {
              "id": "intention.updateOrderStatus.form",
              "intent": "commandForm",
              "action": "updateOrderStatus",
              "submitAction": "updateOrderStatus",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "takeoutOrderLifecycle.layout",
    "type": "page",
    "sections": [
      {
        "id": "section.takeoutOrderLifecycle.main",
        "type": "section",
        "sectionName": "Ciclo de pedido (takeout)",
        "titleKey": "takeoutOrderLifecycle.section.main.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "organism.createOrder",
            "type": "form",
            "organismName": "CreateOrder",
            "titleKey": "takeoutOrderLifecycle.createOrder.title",
            "purpose": "Criar pedido",
            "userActions": [
              "createOrder"
            ],
            "requiredEntities": [
              "Order",
              "DailyShift",
              "Table"
            ],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "orderStatusTransitions",
              "paymentTimingByOrderType",
              "ingredientConsumptionTrigger",
              "aiOutputLanguageSelection",
              "tableOccupancyConsistency"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intention.createOrder.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "takeoutOrderLifecycle.createOrder.form.title",
                "action": "createOrder",
                "submitAction": "createOrder",
                "fields": [
                  {
                    "id": "field.createOrder.orderType",
                    "field": "orderType",
                    "labelKey": "takeoutOrderLifecycle.createOrder.orderType.label",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.orderType"
                  },
                  {
                    "id": "field.createOrder.status",
                    "field": "status",
                    "labelKey": "takeoutOrderLifecycle.createOrder.status.label",
                    "order": 20,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.status"
                  },
                  {
                    "id": "field.createOrder.totalAmount",
                    "field": "totalAmount",
                    "labelKey": "takeoutOrderLifecycle.createOrder.totalAmount.label",
                    "order": 30,
                    "required": true,
                    "inputType": "money",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.totalAmount"
                  },
                  {
                    "id": "field.createOrder.notes",
                    "field": "notes",
                    "labelKey": "takeoutOrderLifecycle.createOrder.notes.label",
                    "order": 40,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.notes"
                  },
                  {
                    "id": "field.createOrder.customerName",
                    "field": "customerName",
                    "labelKey": "takeoutOrderLifecycle.createOrder.customerName.label",
                    "order": 50,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.customerName"
                  },
                  {
                    "id": "field.createOrder.customerPhone",
                    "field": "customerPhone",
                    "labelKey": "takeoutOrderLifecycle.createOrder.customerPhone.label",
                    "order": 60,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.customerPhone"
                  },
                  {
                    "id": "field.createOrder.numberOfGuests",
                    "field": "numberOfGuests",
                    "labelKey": "takeoutOrderLifecycle.createOrder.numberOfGuests.label",
                    "order": 70,
                    "required": false,
                    "inputType": "number",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.numberOfGuests"
                  },
                  {
                    "id": "field.createOrder.closedAt",
                    "field": "closedAt",
                    "labelKey": "takeoutOrderLifecycle.createOrder.closedAt.label",
                    "order": 80,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.closedAt"
                  },
                  {
                    "id": "field.createOrder.cancelledAt",
                    "field": "cancelledAt",
                    "labelKey": "takeoutOrderLifecycle.createOrder.cancelledAt.label",
                    "order": 90,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.cancelledAt"
                  },
                  {
                    "id": "field.createOrder.cancellationReason",
                    "field": "cancellationReason",
                    "labelKey": "takeoutOrderLifecycle.createOrder.cancellationReason.label",
                    "order": 100,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.cancellationReason"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action.createOrder.submit",
                    "action": "createOrder",
                    "labelKey": "takeoutOrderLifecycle.createOrder.submit",
                    "order": 10,
                    "actionKey": "createOrder"
                  }
                ]
              }
            ]
          },
          {
            "id": "organism.addOrderItem",
            "type": "form",
            "organismName": "AddOrderItem",
            "titleKey": "takeoutOrderLifecycle.addOrderItem.title",
            "purpose": "Adicionar item ao pedido",
            "userActions": [
              "addOrderItem"
            ],
            "requiredEntities": [
              "OrderItem",
              "MenuItem",
              "Order",
              "StockConsumption"
            ],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "orderStatusTransitions",
              "ingredientConsumptionTrigger"
            ],
            "order": 20,
            "intentions": [
              {
                "id": "intention.addOrderItem.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "takeoutOrderLifecycle.addOrderItem.form.title",
                "action": "addOrderItem",
                "submitAction": "addOrderItem",
                "fields": [
                  {
                    "id": "field.addOrderItem.quantity",
                    "field": "quantity",
                    "labelKey": "takeoutOrderLifecycle.addOrderItem.quantity.label",
                    "order": 10,
                    "required": true,
                    "inputType": "number",
                    "stateKey": "ui.takeoutOrderLifecycle.input.addOrderItem.quantity"
                  },
                  {
                    "id": "field.addOrderItem.unitPrice",
                    "field": "unitPrice",
                    "labelKey": "takeoutOrderLifecycle.addOrderItem.unitPrice.label",
                    "order": 20,
                    "required": true,
                    "inputType": "money",
                    "stateKey": "ui.takeoutOrderLifecycle.input.addOrderItem.unitPrice"
                  },
                  {
                    "id": "field.addOrderItem.totalPrice",
                    "field": "totalPrice",
                    "labelKey": "takeoutOrderLifecycle.addOrderItem.totalPrice.label",
                    "order": 30,
                    "required": true,
                    "inputType": "money",
                    "stateKey": "ui.takeoutOrderLifecycle.input.addOrderItem.totalPrice"
                  },
                  {
                    "id": "field.addOrderItem.observations",
                    "field": "observations",
                    "labelKey": "takeoutOrderLifecycle.addOrderItem.observations.label",
                    "order": 40,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.takeoutOrderLifecycle.input.addOrderItem.observations"
                  },
                  {
                    "id": "field.addOrderItem.status",
                    "field": "status",
                    "labelKey": "takeoutOrderLifecycle.addOrderItem.status.label",
                    "order": 50,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.takeoutOrderLifecycle.input.addOrderItem.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action.addOrderItem.submit",
                    "action": "addOrderItem",
                    "labelKey": "takeoutOrderLifecycle.addOrderItem.submit",
                    "order": 10,
                    "actionKey": "addOrderItem"
                  }
                ]
              }
            ]
          },
          {
            "id": "organism.createKitchenTicket",
            "type": "form",
            "organismName": "CreateKitchenTicket",
            "titleKey": "takeoutOrderLifecycle.createKitchenTicket.title",
            "purpose": "Criar ticket de cozinha",
            "userActions": [
              "createKitchenTicket"
            ],
            "requiredEntities": [
              "KitchenTicket",
              "Order",
              "OrderItem"
            ],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "orderStatusTransitions"
            ],
            "order": 30,
            "intentions": [
              {
                "id": "intention.createKitchenTicket.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "takeoutOrderLifecycle.createKitchenTicket.form.title",
                "action": "createKitchenTicket",
                "submitAction": "createKitchenTicket",
                "fields": [
                  {
                    "id": "field.createKitchenTicket.status",
                    "field": "status",
                    "labelKey": "takeoutOrderLifecycle.createKitchenTicket.status.label",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createKitchenTicket.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action.createKitchenTicket.submit",
                    "action": "createKitchenTicket",
                    "labelKey": "takeoutOrderLifecycle.createKitchenTicket.submit",
                    "order": 10,
                    "actionKey": "createKitchenTicket"
                  }
                ]
              }
            ]
          },
          {
            "id": "organism.updateOrderStatus",
            "type": "form",
            "organismName": "UpdateOrderStatus",
            "titleKey": "takeoutOrderLifecycle.updateOrderStatus.title",
            "purpose": "Atualizar status do pedido",
            "userActions": [
              "updateOrderStatus"
            ],
            "requiredEntities": [
              "Order",
              "OrderItem",
              "KitchenTicket",
              "Table",
              "Payment",
              "InventoryItem",
              "RecipeComponent",
              "StockConsumption"
            ],
            "readsFields": [
              "Order.status",
              "Order.orderType",
              "Order.tableId"
            ],
            "writesFields": [
              "Order.status",
              "Order.updatedAt",
              "Order.closedAt",
              "Order.cancelledAt",
              "Order.cancellationReason"
            ],
            "rulesApplied": [
              "orderStatusTransitions",
              "paymentTimingByOrderType",
              "ingredientConsumptionTrigger",
              "aiOutputLanguageSelection",
              "tableOccupancyConsistency"
            ],
            "order": 40,
            "intentions": [
              {
                "id": "intention.updateOrderStatus.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "takeoutOrderLifecycle.updateOrderStatus.form.title",
                "action": "updateOrderStatus",
                "submitAction": "updateOrderStatus",
                "fields": [
                  {
                    "id": "field.updateOrderStatus.status",
                    "field": "status",
                    "labelKey": "takeoutOrderLifecycle.updateOrderStatus.status.label",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.takeoutOrderLifecycle.input.updateOrderStatus.status"
                  },
                  {
                    "id": "field.updateOrderStatus.closedAt",
                    "field": "closedAt",
                    "labelKey": "takeoutOrderLifecycle.updateOrderStatus.closedAt.label",
                    "order": 20,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.takeoutOrderLifecycle.input.updateOrderStatus.closedAt"
                  },
                  {
                    "id": "field.updateOrderStatus.cancelledAt",
                    "field": "cancelledAt",
                    "labelKey": "takeoutOrderLifecycle.updateOrderStatus.cancelledAt.label",
                    "order": 30,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.takeoutOrderLifecycle.input.updateOrderStatus.cancelledAt"
                  },
                  {
                    "id": "field.updateOrderStatus.cancellationReason",
                    "field": "cancellationReason",
                    "labelKey": "takeoutOrderLifecycle.updateOrderStatus.cancellationReason.label",
                    "order": 40,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.takeoutOrderLifecycle.input.updateOrderStatus.cancellationReason"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action.updateOrderStatus.submit",
                    "action": "updateOrderStatus",
                    "labelKey": "takeoutOrderLifecycle.updateOrderStatus.submit",
                    "order": 10,
                    "actionKey": "updateOrderStatus"
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
    "id": "takeoutOrderLifecycle__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/takeoutOrderLifecycle.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/takeoutOrderLifecycle.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/takeoutOrderLifecycle.defs.ts",
      "_102050_/l2/cafeFlow/web/shared/takeoutOrderLifecycle.ts",
      "_102050_/l2/cafeFlow/web/contracts/takeoutOrderLifecycle.defs.ts",
      "_102050_/l2/cafeFlow/web/contracts/takeoutOrderLifecycle.ts"
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
