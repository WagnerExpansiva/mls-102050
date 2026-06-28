/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/dineInOrderLifecycle.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "dineInOrderLifecycle",
  "pageName": "Ciclo de pedido (mesa)",
  "actor": "attendant",
  "purpose": "Executar Ciclo de pedido (mesa).",
  "capabilities": [
    "dineInOrderLifecycle",
    "takeoutOrderLifecycle"
  ],
  "flowRefs": {
    "experienceFlows": [
      "dineInOrderLifecycle"
    ],
    "entityLifecycles": [],
    "taskWorkflows": [
      "dineInOrderLifecycle"
    ],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section-dineInOrderLifecycle",
      "type": "section",
      "sectionName": "Ciclo de pedido (mesa)",
      "titleKey": "section.dineInOrderLifecycle.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "organism-createOrder",
          "type": "organism",
          "organismName": "CreateOrder",
          "titleKey": "organism.createOrder.title",
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
              "id": "intention-createOrder-form",
              "intent": "commandForm",
              "action": "createOrder",
              "submitAction": "createOrder",
              "order": 10
            }
          ]
        },
        {
          "id": "organism-addOrderItem",
          "type": "organism",
          "organismName": "AddOrderItem",
          "titleKey": "organism.addOrderItem.title",
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
              "id": "intention-addOrderItem-form",
              "intent": "commandForm",
              "action": "addOrderItem",
              "submitAction": "addOrderItem",
              "order": 10
            }
          ]
        },
        {
          "id": "organism-createKitchenTicket",
          "type": "organism",
          "organismName": "CreateKitchenTicket",
          "titleKey": "organism.createKitchenTicket.title",
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
              "id": "intention-createKitchenTicket-form",
              "intent": "commandForm",
              "action": "createKitchenTicket",
              "submitAction": "createKitchenTicket",
              "order": 10
            }
          ]
        },
        {
          "id": "organism-updateOrderStatus",
          "type": "organism",
          "organismName": "UpdateOrderStatus",
          "titleKey": "organism.updateOrderStatus.title",
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
              "id": "intention-updateOrderStatus-form",
              "intent": "commandForm",
              "action": "updateOrderStatus",
              "submitAction": "updateOrderStatus",
              "order": 10
            }
          ]
        },
        {
          "id": "organism-updateTableStatus",
          "type": "organism",
          "organismName": "UpdateTableStatus",
          "titleKey": "organism.updateTableStatus.title",
          "purpose": "Atualizar ocupação da mesa",
          "userActions": [
            "updateTableStatus"
          ],
          "requiredEntities": [
            "Table"
          ],
          "readsFields": [],
          "writesFields": [
            "Table.status",
            "Table.updatedAt"
          ],
          "rulesApplied": [
            "tableOccupancyConsistency"
          ],
          "order": 50,
          "intentionRefs": [
            {
              "id": "intention-updateTableStatus-form",
              "intent": "commandForm",
              "action": "updateTableStatus",
              "submitAction": "updateTableStatus",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "dineInOrderLifecycleLayout",
    "type": "page",
    "sections": [
      {
        "id": "section-dineInOrderLifecycle",
        "type": "section",
        "sectionName": "Ciclo de pedido (mesa)",
        "titleKey": "section.dineInOrderLifecycle.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "organism-createOrder",
            "type": "organism",
            "organismName": "CreateOrder",
            "titleKey": "organism.createOrder.title",
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
                "id": "intention-createOrder-form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intention.createOrder.form.title",
                "action": "createOrder",
                "submitAction": "createOrder",
                "fields": [
                  {
                    "id": "field-createOrder-orderType",
                    "field": "orderType",
                    "labelKey": "field.orderType.label",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.dineInOrderLifecycle.input.createOrder.orderType"
                  },
                  {
                    "id": "field-createOrder-status",
                    "field": "status",
                    "labelKey": "field.status.label",
                    "order": 20,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.dineInOrderLifecycle.input.createOrder.status"
                  },
                  {
                    "id": "field-createOrder-totalAmount",
                    "field": "totalAmount",
                    "labelKey": "field.totalAmount.label",
                    "order": 30,
                    "required": true,
                    "inputType": "money",
                    "stateKey": "ui.dineInOrderLifecycle.input.createOrder.totalAmount"
                  },
                  {
                    "id": "field-createOrder-notes",
                    "field": "notes",
                    "labelKey": "field.notes.label",
                    "order": 40,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.dineInOrderLifecycle.input.createOrder.notes"
                  },
                  {
                    "id": "field-createOrder-customerName",
                    "field": "customerName",
                    "labelKey": "field.customerName.label",
                    "order": 50,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.dineInOrderLifecycle.input.createOrder.customerName"
                  },
                  {
                    "id": "field-createOrder-customerPhone",
                    "field": "customerPhone",
                    "labelKey": "field.customerPhone.label",
                    "order": 60,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.dineInOrderLifecycle.input.createOrder.customerPhone"
                  },
                  {
                    "id": "field-createOrder-numberOfGuests",
                    "field": "numberOfGuests",
                    "labelKey": "field.numberOfGuests.label",
                    "order": 70,
                    "required": false,
                    "inputType": "number",
                    "stateKey": "ui.dineInOrderLifecycle.input.createOrder.numberOfGuests"
                  },
                  {
                    "id": "field-createOrder-closedAt",
                    "field": "closedAt",
                    "labelKey": "field.closedAt.label",
                    "order": 80,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.dineInOrderLifecycle.input.createOrder.closedAt"
                  },
                  {
                    "id": "field-createOrder-cancelledAt",
                    "field": "cancelledAt",
                    "labelKey": "field.cancelledAt.label",
                    "order": 90,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.dineInOrderLifecycle.input.createOrder.cancelledAt"
                  },
                  {
                    "id": "field-createOrder-cancellationReason",
                    "field": "cancellationReason",
                    "labelKey": "field.cancellationReason.label",
                    "order": 100,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.dineInOrderLifecycle.input.createOrder.cancellationReason"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action-createOrder-submit",
                    "action": "createOrder",
                    "labelKey": "action.createOrder.label",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "createOrder"
                  }
                ]
              }
            ]
          },
          {
            "id": "organism-addOrderItem",
            "type": "organism",
            "organismName": "AddOrderItem",
            "titleKey": "organism.addOrderItem.title",
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
                "id": "intention-addOrderItem-form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intention.addOrderItem.form.title",
                "action": "addOrderItem",
                "submitAction": "addOrderItem",
                "fields": [
                  {
                    "id": "field-addOrderItem-quantity",
                    "field": "quantity",
                    "labelKey": "field.quantity.label",
                    "order": 10,
                    "required": true,
                    "inputType": "number",
                    "stateKey": "ui.dineInOrderLifecycle.input.addOrderItem.quantity"
                  },
                  {
                    "id": "field-addOrderItem-unitPrice",
                    "field": "unitPrice",
                    "labelKey": "field.unitPrice.label",
                    "order": 20,
                    "required": true,
                    "inputType": "money",
                    "stateKey": "ui.dineInOrderLifecycle.input.addOrderItem.unitPrice"
                  },
                  {
                    "id": "field-addOrderItem-totalPrice",
                    "field": "totalPrice",
                    "labelKey": "field.totalPrice.label",
                    "order": 30,
                    "required": true,
                    "inputType": "money",
                    "stateKey": "ui.dineInOrderLifecycle.input.addOrderItem.totalPrice"
                  },
                  {
                    "id": "field-addOrderItem-observations",
                    "field": "observations",
                    "labelKey": "field.observations.label",
                    "order": 40,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.dineInOrderLifecycle.input.addOrderItem.observations"
                  },
                  {
                    "id": "field-addOrderItem-status",
                    "field": "status",
                    "labelKey": "field.status.label",
                    "order": 50,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.dineInOrderLifecycle.input.addOrderItem.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action-addOrderItem-submit",
                    "action": "addOrderItem",
                    "labelKey": "action.addOrderItem.label",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "addOrderItem"
                  }
                ]
              }
            ]
          },
          {
            "id": "organism-createKitchenTicket",
            "type": "organism",
            "organismName": "CreateKitchenTicket",
            "titleKey": "organism.createKitchenTicket.title",
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
                "id": "intention-createKitchenTicket-form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intention.createKitchenTicket.form.title",
                "action": "createKitchenTicket",
                "submitAction": "createKitchenTicket",
                "fields": [
                  {
                    "id": "field-createKitchenTicket-status",
                    "field": "status",
                    "labelKey": "field.kitchenTicketStatus.label",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.dineInOrderLifecycle.input.createKitchenTicket.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action-createKitchenTicket-submit",
                    "action": "createKitchenTicket",
                    "labelKey": "action.createKitchenTicket.label",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "createKitchenTicket"
                  }
                ]
              }
            ]
          },
          {
            "id": "organism-updateOrderStatus",
            "type": "organism",
            "organismName": "UpdateOrderStatus",
            "titleKey": "organism.updateOrderStatus.title",
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
                "id": "intention-updateOrderStatus-form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intention.updateOrderStatus.form.title",
                "action": "updateOrderStatus",
                "submitAction": "updateOrderStatus",
                "fields": [
                  {
                    "id": "field-updateOrderStatus-status",
                    "field": "status",
                    "labelKey": "field.status.label",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.dineInOrderLifecycle.input.updateOrderStatus.status"
                  },
                  {
                    "id": "field-updateOrderStatus-closedAt",
                    "field": "closedAt",
                    "labelKey": "field.closedAt.label",
                    "order": 20,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.dineInOrderLifecycle.input.updateOrderStatus.closedAt"
                  },
                  {
                    "id": "field-updateOrderStatus-cancelledAt",
                    "field": "cancelledAt",
                    "labelKey": "field.cancelledAt.label",
                    "order": 30,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.dineInOrderLifecycle.input.updateOrderStatus.cancelledAt"
                  },
                  {
                    "id": "field-updateOrderStatus-cancellationReason",
                    "field": "cancellationReason",
                    "labelKey": "field.cancellationReason.label",
                    "order": 40,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.dineInOrderLifecycle.input.updateOrderStatus.cancellationReason"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action-updateOrderStatus-submit",
                    "action": "updateOrderStatus",
                    "labelKey": "action.updateOrderStatus.label",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "updateOrderStatus"
                  }
                ]
              }
            ]
          },
          {
            "id": "organism-updateTableStatus",
            "type": "organism",
            "organismName": "UpdateTableStatus",
            "titleKey": "organism.updateTableStatus.title",
            "purpose": "Atualizar ocupação da mesa",
            "userActions": [
              "updateTableStatus"
            ],
            "requiredEntities": [
              "Table"
            ],
            "readsFields": [],
            "writesFields": [
              "Table.status",
              "Table.updatedAt"
            ],
            "rulesApplied": [
              "tableOccupancyConsistency"
            ],
            "order": 50,
            "intentions": [
              {
                "id": "intention-updateTableStatus-form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intention.updateTableStatus.form.title",
                "action": "updateTableStatus",
                "submitAction": "updateTableStatus",
                "fields": [
                  {
                    "id": "field-updateTableStatus-status",
                    "field": "status",
                    "labelKey": "field.tableStatus.label",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.dineInOrderLifecycle.input.updateTableStatus.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "action-updateTableStatus-submit",
                    "action": "updateTableStatus",
                    "labelKey": "action.updateTableStatus.label",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "updateTableStatus"
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
    "id": "dineInOrderLifecycle__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/dineInOrderLifecycle.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/dineInOrderLifecycle.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/dineInOrderLifecycle.defs.ts",
      "_102050_/l2/cafeFlow/web/shared/dineInOrderLifecycle.ts",
      "_102050_/l2/cafeFlow/web/contracts/dineInOrderLifecycle.defs.ts",
      "_102050_/l2/cafeFlow/web/contracts/dineInOrderLifecycle.ts"
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
