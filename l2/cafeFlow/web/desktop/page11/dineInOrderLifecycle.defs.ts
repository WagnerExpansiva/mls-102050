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
      "id": "section_dine_in_order_lifecycle",
      "type": "section",
      "sectionName": "Ciclo de pedido (mesa)",
      "titleKey": "section.dineInOrderLifecycle.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org_create_order",
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
              "id": "intent_create_order_form",
              "intent": "commandForm",
              "action": "createOrder",
              "submitAction": "createOrder",
              "order": 10
            }
          ]
        },
        {
          "id": "org_add_order_item",
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
              "id": "intent_add_order_item_form",
              "intent": "commandForm",
              "action": "addOrderItem",
              "submitAction": "addOrderItem",
              "order": 10
            }
          ]
        },
        {
          "id": "org_create_kitchen_ticket",
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
              "id": "intent_create_kitchen_ticket_form",
              "intent": "commandForm",
              "action": "createKitchenTicket",
              "submitAction": "createKitchenTicket",
              "order": 10
            }
          ]
        },
        {
          "id": "org_update_order_status",
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
              "id": "intent_update_order_status_form",
              "intent": "commandForm",
              "action": "updateOrderStatus",
              "submitAction": "updateOrderStatus",
              "order": 10
            }
          ]
        },
        {
          "id": "org_update_table_status",
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
              "id": "intent_update_table_status_form",
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
    "id": "dineInOrderLifecycle.layout",
    "type": "page",
    "sections": [
      {
        "id": "section_dine_in_order_lifecycle",
        "type": "section",
        "sectionName": "Ciclo de pedido (mesa)",
        "titleKey": "section.dineInOrderLifecycle.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org_create_order",
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
                "id": "intent_create_order_form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intent.createOrder.form.title",
                "action": "createOrder",
                "submitAction": "createOrder",
                "fields": [
                  {
                    "id": "field_createOrder_orderType",
                    "field": "orderType",
                    "labelKey": "field.createOrder.orderType",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.dineInOrderLifecycle.input.createOrder.orderType"
                  },
                  {
                    "id": "field_createOrder_status",
                    "field": "status",
                    "labelKey": "field.createOrder.status",
                    "order": 20,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.dineInOrderLifecycle.input.createOrder.status"
                  },
                  {
                    "id": "field_createOrder_totalAmount",
                    "field": "totalAmount",
                    "labelKey": "field.createOrder.totalAmount",
                    "order": 30,
                    "required": true,
                    "inputType": "money",
                    "stateKey": "ui.dineInOrderLifecycle.input.createOrder.totalAmount"
                  },
                  {
                    "id": "field_createOrder_notes",
                    "field": "notes",
                    "labelKey": "field.createOrder.notes",
                    "order": 40,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.dineInOrderLifecycle.input.createOrder.notes"
                  },
                  {
                    "id": "field_createOrder_customerName",
                    "field": "customerName",
                    "labelKey": "field.createOrder.customerName",
                    "order": 50,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.dineInOrderLifecycle.input.createOrder.customerName"
                  },
                  {
                    "id": "field_createOrder_customerPhone",
                    "field": "customerPhone",
                    "labelKey": "field.createOrder.customerPhone",
                    "order": 60,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.dineInOrderLifecycle.input.createOrder.customerPhone"
                  },
                  {
                    "id": "field_createOrder_numberOfGuests",
                    "field": "numberOfGuests",
                    "labelKey": "field.createOrder.numberOfGuests",
                    "order": 70,
                    "required": false,
                    "inputType": "number",
                    "stateKey": "ui.dineInOrderLifecycle.input.createOrder.numberOfGuests"
                  },
                  {
                    "id": "field_createOrder_closedAt",
                    "field": "closedAt",
                    "labelKey": "field.createOrder.closedAt",
                    "order": 80,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.dineInOrderLifecycle.input.createOrder.closedAt"
                  },
                  {
                    "id": "field_createOrder_cancelledAt",
                    "field": "cancelledAt",
                    "labelKey": "field.createOrder.cancelledAt",
                    "order": 90,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.dineInOrderLifecycle.input.createOrder.cancelledAt"
                  },
                  {
                    "id": "field_createOrder_cancellationReason",
                    "field": "cancellationReason",
                    "labelKey": "field.createOrder.cancellationReason",
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
                    "id": "action_createOrder_submit",
                    "action": "createOrder",
                    "labelKey": "action.createOrder.submit",
                    "order": 10,
                    "actionKey": "createOrder"
                  }
                ]
              }
            ]
          },
          {
            "id": "org_add_order_item",
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
                "id": "intent_add_order_item_form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intent.addOrderItem.form.title",
                "action": "addOrderItem",
                "submitAction": "addOrderItem",
                "fields": [
                  {
                    "id": "field_addOrderItem_quantity",
                    "field": "quantity",
                    "labelKey": "field.addOrderItem.quantity",
                    "order": 10,
                    "required": true,
                    "inputType": "number",
                    "stateKey": "ui.dineInOrderLifecycle.input.addOrderItem.quantity"
                  },
                  {
                    "id": "field_addOrderItem_unitPrice",
                    "field": "unitPrice",
                    "labelKey": "field.addOrderItem.unitPrice",
                    "order": 20,
                    "required": true,
                    "inputType": "money",
                    "stateKey": "ui.dineInOrderLifecycle.input.addOrderItem.unitPrice"
                  },
                  {
                    "id": "field_addOrderItem_totalPrice",
                    "field": "totalPrice",
                    "labelKey": "field.addOrderItem.totalPrice",
                    "order": 30,
                    "required": true,
                    "inputType": "money",
                    "stateKey": "ui.dineInOrderLifecycle.input.addOrderItem.totalPrice"
                  },
                  {
                    "id": "field_addOrderItem_observations",
                    "field": "observations",
                    "labelKey": "field.addOrderItem.observations",
                    "order": 40,
                    "required": false,
                    "inputType": "text",
                    "stateKey": "ui.dineInOrderLifecycle.input.addOrderItem.observations"
                  },
                  {
                    "id": "field_addOrderItem_status",
                    "field": "status",
                    "labelKey": "field.addOrderItem.status",
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
                    "id": "action_addOrderItem_submit",
                    "action": "addOrderItem",
                    "labelKey": "action.addOrderItem.submit",
                    "order": 10,
                    "actionKey": "addOrderItem"
                  }
                ]
              }
            ]
          },
          {
            "id": "org_create_kitchen_ticket",
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
                "id": "intent_create_kitchen_ticket_form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intent.createKitchenTicket.form.title",
                "action": "createKitchenTicket",
                "submitAction": "createKitchenTicket",
                "fields": [
                  {
                    "id": "field_createKitchenTicket_status",
                    "field": "status",
                    "labelKey": "field.createKitchenTicket.status",
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
                    "id": "action_createKitchenTicket_submit",
                    "action": "createKitchenTicket",
                    "labelKey": "action.createKitchenTicket.submit",
                    "order": 10,
                    "actionKey": "createKitchenTicket"
                  }
                ]
              }
            ]
          },
          {
            "id": "org_update_order_status",
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
                "id": "intent_update_order_status_form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intent.updateOrderStatus.form.title",
                "action": "updateOrderStatus",
                "submitAction": "updateOrderStatus",
                "fields": [
                  {
                    "id": "field_updateOrderStatus_status",
                    "field": "status",
                    "labelKey": "field.updateOrderStatus.status",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "stateKey": "ui.dineInOrderLifecycle.input.updateOrderStatus.status"
                  },
                  {
                    "id": "field_updateOrderStatus_closedAt",
                    "field": "closedAt",
                    "labelKey": "field.updateOrderStatus.closedAt",
                    "order": 20,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.dineInOrderLifecycle.input.updateOrderStatus.closedAt"
                  },
                  {
                    "id": "field_updateOrderStatus_cancelledAt",
                    "field": "cancelledAt",
                    "labelKey": "field.updateOrderStatus.cancelledAt",
                    "order": 30,
                    "required": false,
                    "inputType": "datetime",
                    "stateKey": "ui.dineInOrderLifecycle.input.updateOrderStatus.cancelledAt"
                  },
                  {
                    "id": "field_updateOrderStatus_cancellationReason",
                    "field": "cancellationReason",
                    "labelKey": "field.updateOrderStatus.cancellationReason",
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
                    "id": "action_updateOrderStatus_submit",
                    "action": "updateOrderStatus",
                    "labelKey": "action.updateOrderStatus.submit",
                    "order": 10,
                    "actionKey": "updateOrderStatus"
                  }
                ]
              }
            ]
          },
          {
            "id": "org_update_table_status",
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
                "id": "intent_update_table_status_form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intent.updateTableStatus.form.title",
                "action": "updateTableStatus",
                "submitAction": "updateTableStatus",
                "fields": [
                  {
                    "id": "field_updateTableStatus_status",
                    "field": "status",
                    "labelKey": "field.updateTableStatus.status",
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
                    "id": "action_updateTableStatus_submit",
                    "action": "updateTableStatus",
                    "labelKey": "action.updateTableStatus.submit",
                    "order": 10,
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
