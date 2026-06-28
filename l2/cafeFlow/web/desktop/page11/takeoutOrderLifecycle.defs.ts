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
      "id": "section-takeout-order-lifecycle",
      "type": "section",
      "sectionName": "Ciclo de pedido (takeout)",
      "titleKey": "takeoutOrderLifecycle.section.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "organism-create-order",
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
              "id": "intention-create-order-form",
              "intent": "commandForm",
              "submitAction": "createOrder",
              "order": 10
            }
          ]
        },
        {
          "id": "organism-add-order-item",
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
              "id": "intention-add-order-item-form",
              "intent": "commandForm",
              "submitAction": "addOrderItem",
              "order": 10
            }
          ]
        },
        {
          "id": "organism-create-kitchen-ticket",
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
              "id": "intention-create-kitchen-ticket-form",
              "intent": "commandForm",
              "submitAction": "createKitchenTicket",
              "order": 10
            }
          ]
        },
        {
          "id": "organism-update-order-status",
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
              "id": "intention-update-order-status-form",
              "intent": "commandForm",
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
        "id": "section-takeout-order-lifecycle",
        "type": "section",
        "sectionName": "Ciclo de pedido (takeout)",
        "titleKey": "takeoutOrderLifecycle.section.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "organism-create-order",
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
                "id": "intention-create-order-form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "takeoutOrderLifecycle.createOrder.form.title",
                "submitAction": "createOrder",
                "fields": [
                  {
                    "id": "field-create-order-orderType",
                    "field": "orderType",
                    "labelKey": "takeoutOrderLifecycle.createOrder.field.orderType",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.orderType"
                  },
                  {
                    "id": "field-create-order-status",
                    "field": "status",
                    "labelKey": "takeoutOrderLifecycle.createOrder.field.status",
                    "order": 20,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.status"
                  },
                  {
                    "id": "field-create-order-totalAmount",
                    "field": "totalAmount",
                    "labelKey": "takeoutOrderLifecycle.createOrder.field.totalAmount",
                    "order": 30,
                    "required": true,
                    "inputType": "money",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.totalAmount"
                  },
                  {
                    "id": "field-create-order-notes",
                    "field": "notes",
                    "labelKey": "takeoutOrderLifecycle.createOrder.field.notes",
                    "order": 40,
                    "required": false,
                    "inputType": "textarea",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.notes"
                  },
                  {
                    "id": "field-create-order-customerName",
                    "field": "customerName",
                    "labelKey": "takeoutOrderLifecycle.createOrder.field.customerName",
                    "order": 50,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.customerName"
                  },
                  {
                    "id": "field-create-order-customerPhone",
                    "field": "customerPhone",
                    "labelKey": "takeoutOrderLifecycle.createOrder.field.customerPhone",
                    "order": 60,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.customerPhone"
                  },
                  {
                    "id": "field-create-order-numberOfGuests",
                    "field": "numberOfGuests",
                    "labelKey": "takeoutOrderLifecycle.createOrder.field.numberOfGuests",
                    "order": 70,
                    "required": false,
                    "inputType": "number",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.numberOfGuests"
                  },
                  {
                    "id": "field-create-order-closedAt",
                    "field": "closedAt",
                    "labelKey": "takeoutOrderLifecycle.createOrder.field.closedAt",
                    "order": 80,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.closedAt"
                  },
                  {
                    "id": "field-create-order-cancelledAt",
                    "field": "cancelledAt",
                    "labelKey": "takeoutOrderLifecycle.createOrder.field.cancelledAt",
                    "order": 90,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.cancelledAt"
                  },
                  {
                    "id": "field-create-order-cancellationReason",
                    "field": "cancellationReason",
                    "labelKey": "takeoutOrderLifecycle.createOrder.field.cancellationReason",
                    "order": 100,
                    "required": false,
                    "inputType": "textarea",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.cancellationReason"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action-create-order-submit",
                    "action": "createOrder",
                    "labelKey": "takeoutOrderLifecycle.createOrder.action.submit",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "createOrder"
                  }
                ]
              }
            ]
          },
          {
            "id": "organism-add-order-item",
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
                "id": "intention-add-order-item-form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "takeoutOrderLifecycle.addOrderItem.form.title",
                "submitAction": "addOrderItem",
                "fields": [
                  {
                    "id": "field-add-order-item-quantity",
                    "field": "quantity",
                    "labelKey": "takeoutOrderLifecycle.addOrderItem.field.quantity",
                    "order": 10,
                    "required": true,
                    "inputType": "number",
                    "stateKey": "ui.takeoutOrderLifecycle.input.addOrderItem.quantity"
                  },
                  {
                    "id": "field-add-order-item-unitPrice",
                    "field": "unitPrice",
                    "labelKey": "takeoutOrderLifecycle.addOrderItem.field.unitPrice",
                    "order": 20,
                    "required": true,
                    "inputType": "money",
                    "stateKey": "ui.takeoutOrderLifecycle.input.addOrderItem.unitPrice"
                  },
                  {
                    "id": "field-add-order-item-totalPrice",
                    "field": "totalPrice",
                    "labelKey": "takeoutOrderLifecycle.addOrderItem.field.totalPrice",
                    "order": 30,
                    "required": true,
                    "inputType": "money",
                    "stateKey": "ui.takeoutOrderLifecycle.input.addOrderItem.totalPrice"
                  },
                  {
                    "id": "field-add-order-item-observations",
                    "field": "observations",
                    "labelKey": "takeoutOrderLifecycle.addOrderItem.field.observations",
                    "order": 40,
                    "required": false,
                    "inputType": "textarea",
                    "stateKey": "ui.takeoutOrderLifecycle.input.addOrderItem.observations"
                  },
                  {
                    "id": "field-add-order-item-status",
                    "field": "status",
                    "labelKey": "takeoutOrderLifecycle.addOrderItem.field.status",
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
                    "id": "action-add-order-item-submit",
                    "action": "addOrderItem",
                    "labelKey": "takeoutOrderLifecycle.addOrderItem.action.submit",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "addOrderItem"
                  }
                ]
              }
            ]
          },
          {
            "id": "organism-create-kitchen-ticket",
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
                "id": "intention-create-kitchen-ticket-form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "takeoutOrderLifecycle.createKitchenTicket.form.title",
                "submitAction": "createKitchenTicket",
                "fields": [
                  {
                    "id": "field-create-kitchen-ticket-status",
                    "field": "status",
                    "labelKey": "takeoutOrderLifecycle.createKitchenTicket.field.status",
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
                    "id": "action-create-kitchen-ticket-submit",
                    "action": "createKitchenTicket",
                    "labelKey": "takeoutOrderLifecycle.createKitchenTicket.action.submit",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "createKitchenTicket"
                  }
                ]
              }
            ]
          },
          {
            "id": "organism-update-order-status",
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
                "id": "intention-update-order-status-form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "takeoutOrderLifecycle.updateOrderStatus.form.title",
                "submitAction": "updateOrderStatus",
                "fields": [
                  {
                    "id": "field-update-order-status-status",
                    "field": "status",
                    "labelKey": "takeoutOrderLifecycle.updateOrderStatus.field.status",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.takeoutOrderLifecycle.input.updateOrderStatus.status"
                  },
                  {
                    "id": "field-update-order-status-closedAt",
                    "field": "closedAt",
                    "labelKey": "takeoutOrderLifecycle.updateOrderStatus.field.closedAt",
                    "order": 20,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.takeoutOrderLifecycle.input.updateOrderStatus.closedAt"
                  },
                  {
                    "id": "field-update-order-status-cancelledAt",
                    "field": "cancelledAt",
                    "labelKey": "takeoutOrderLifecycle.updateOrderStatus.field.cancelledAt",
                    "order": 30,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.takeoutOrderLifecycle.input.updateOrderStatus.cancelledAt"
                  },
                  {
                    "id": "field-update-order-status-cancellationReason",
                    "field": "cancellationReason",
                    "labelKey": "takeoutOrderLifecycle.updateOrderStatus.field.cancellationReason",
                    "order": 40,
                    "required": false,
                    "inputType": "textarea",
                    "stateKey": "ui.takeoutOrderLifecycle.input.updateOrderStatus.cancellationReason"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action-update-order-status-submit",
                    "action": "updateOrderStatus",
                    "labelKey": "takeoutOrderLifecycle.updateOrderStatus.action.submit",
                    "order": 10,
                    "displayHint": "primary",
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
