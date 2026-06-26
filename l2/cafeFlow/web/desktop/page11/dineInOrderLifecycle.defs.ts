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
      "id": "sec_dineInLifecycle",
      "type": "section",
      "sectionName": "Ciclo de pedido (mesa)",
      "titleKey": "section.dineInLifecycle.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org_createOrder",
          "type": "formPanel",
          "organismName": "CreateOrder",
          "titleKey": "organism.createOrder.title",
          "purpose": "Criar pedido dine-in selecionando mesa e definindo dados iniciais",
          "userActions": [
            "createOrder"
          ],
          "requiredEntities": [
            "Order",
            "DailyShift",
            "Table"
          ],
          "readsFields": [
            "Table.number",
            "Table.status",
            "DailyShift.status",
            "DailyShift.dailyShiftId"
          ],
          "writesFields": [
            "Order.orderType",
            "Order.status",
            "Order.totalAmount",
            "Order.notes",
            "Order.customerName",
            "Order.customerPhone",
            "Order.numberOfGuests",
            "Order.tableId",
            "Order.dailyShiftId"
          ],
          "rulesApplied": [
            "orderStatusTransitions",
            "paymentTimingByOrderType",
            "ingredientConsumptionTrigger",
            "aiOutputLanguageSelection",
            "tableOccupancyConsistency"
          ],
          "order": 10,
          "moleculeRefs": [
            {
              "id": "mol_createOrder_form",
              "type": "form",
              "order": 10
            },
            {
              "id": "mol_createOrder_actionBar",
              "type": "actionBar",
              "order": 20
            }
          ]
        },
        {
          "id": "org_addOrderItem",
          "type": "formPanel",
          "organismName": "AddOrderItem",
          "titleKey": "organism.addOrderItem.title",
          "purpose": "Adicionar itens do cardápio ao pedido atual com quantidade e observações",
          "userActions": [
            "addOrderItem"
          ],
          "requiredEntities": [
            "OrderItem",
            "MenuItem",
            "Order",
            "StockConsumption"
          ],
          "readsFields": [
            "MenuItem.name",
            "MenuItem.price",
            "MenuItem.menuItemId",
            "MenuItem.status",
            "Order.orderId",
            "Order.status"
          ],
          "writesFields": [
            "OrderItem.menuItemId",
            "OrderItem.quantity",
            "OrderItem.unitPrice",
            "OrderItem.totalPrice",
            "OrderItem.observations",
            "OrderItem.status",
            "OrderItem.orderId"
          ],
          "rulesApplied": [
            "orderStatusTransitions",
            "ingredientConsumptionTrigger"
          ],
          "order": 20,
          "moleculeRefs": [
            {
              "id": "mol_addOrderItem_form",
              "type": "form",
              "order": 10
            },
            {
              "id": "mol_addOrderItem_actionBar",
              "type": "actionBar",
              "order": 20
            },
            {
              "id": "mol_orderItems_table",
              "type": "groupviewtable.mlDataTable",
              "order": 30
            }
          ]
        },
        {
          "id": "org_createKitchenTicket",
          "type": "actionPanel",
          "organismName": "CreateKitchenTicket",
          "titleKey": "organism.createKitchenTicket.title",
          "purpose": "Enviar pedido para a cozinha criando ticket de preparo",
          "userActions": [
            "createKitchenTicket"
          ],
          "requiredEntities": [
            "KitchenTicket",
            "Order",
            "OrderItem"
          ],
          "readsFields": [
            "Order.orderId",
            "Order.status",
            "OrderItem.id",
            "OrderItem.menuItemId",
            "OrderItem.quantity",
            "KitchenTicket.status"
          ],
          "writesFields": [
            "KitchenTicket.orderId",
            "KitchenTicket.status"
          ],
          "rulesApplied": [
            "orderStatusTransitions"
          ],
          "order": 30,
          "moleculeRefs": [
            {
              "id": "mol_kitchenTicket_summary",
              "type": "summaryPanel",
              "order": 10
            },
            {
              "id": "mol_createKitchenTicket_actionBar",
              "type": "actionBar",
              "order": 20
            }
          ]
        },
        {
          "id": "org_updateOrderStatus",
          "type": "statusPanel",
          "organismName": "UpdateOrderStatus",
          "titleKey": "organism.updateOrderStatus.title",
          "purpose": "Acompanhar e atualizar o status do pedido durante o serviço",
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
            "Order.tableId",
            "Order.orderId",
            "KitchenTicket.status"
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
          "moleculeRefs": [
            {
              "id": "mol_orderStatus_timeline",
              "type": "statusTimeline",
              "stateKey": "currentOrder.status",
              "order": 10
            },
            {
              "id": "mol_updateOrderStatus_form",
              "type": "form",
              "order": 20
            },
            {
              "id": "mol_updateOrderStatus_actionBar",
              "type": "actionBar",
              "order": 30
            }
          ]
        },
        {
          "id": "org_updateTableStatus",
          "type": "formPanel",
          "organismName": "UpdateTableStatus",
          "titleKey": "organism.updateTableStatus.title",
          "purpose": "Atualizar ocupação da mesa ao finalizar o ciclo do pedido",
          "userActions": [
            "updateTableStatus"
          ],
          "requiredEntities": [
            "Table"
          ],
          "readsFields": [
            "Table.tableId",
            "Table.number",
            "Table.status"
          ],
          "writesFields": [
            "Table.status",
            "Table.updatedAt"
          ],
          "rulesApplied": [
            "tableOccupancyConsistency"
          ],
          "order": 50,
          "moleculeRefs": [
            {
              "id": "mol_updateTableStatus_form",
              "type": "form",
              "order": 10
            },
            {
              "id": "mol_updateTableStatus_actionBar",
              "type": "actionBar",
              "order": 20
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "dineInOrderLifecycle_default",
    "type": "page",
    "sections": [
      {
        "id": "sec_dineInLifecycle",
        "type": "section",
        "sectionName": "Ciclo de pedido (mesa)",
        "titleKey": "section.dineInLifecycle.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org_createOrder",
            "type": "formPanel",
            "organismName": "CreateOrder",
            "titleKey": "organism.createOrder.title",
            "purpose": "Criar pedido dine-in selecionando mesa e definindo dados iniciais",
            "userActions": [
              "createOrder"
            ],
            "requiredEntities": [
              "Order",
              "DailyShift",
              "Table"
            ],
            "readsFields": [
              "Table.number",
              "Table.status",
              "DailyShift.status",
              "DailyShift.dailyShiftId"
            ],
            "writesFields": [
              "Order.orderType",
              "Order.status",
              "Order.totalAmount",
              "Order.notes",
              "Order.customerName",
              "Order.customerPhone",
              "Order.numberOfGuests",
              "Order.tableId",
              "Order.dailyShiftId"
            ],
            "rulesApplied": [
              "orderStatusTransitions",
              "paymentTimingByOrderType",
              "ingredientConsumptionTrigger",
              "aiOutputLanguageSelection",
              "tableOccupancyConsistency"
            ],
            "order": 10,
            "molecules": [
              {
                "id": "mol_createOrder_form",
                "type": "form",
                "order": 10,
                "fields": [
                  {
                    "id": "fld_orderType",
                    "field": "orderType",
                    "labelKey": "field.orderType.label",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "source": "Order.orderType",
                    "stateKey": "ui.dineInOrderLifecycle.input.createOrder.orderType"
                  },
                  {
                    "id": "fld_tableId",
                    "field": "tableId",
                    "labelKey": "field.tableId.label",
                    "order": 20,
                    "required": false,
                    "inputType": "select",
                    "source": "Table.tableId",
                    "stateKey": "ui.dineInOrderLifecycle.input.createOrder.tableId"
                  },
                  {
                    "id": "fld_numberOfGuests",
                    "field": "numberOfGuests",
                    "labelKey": "field.numberOfGuests.label",
                    "order": 30,
                    "required": false,
                    "inputType": "number",
                    "source": "Order.numberOfGuests",
                    "stateKey": "ui.dineInOrderLifecycle.input.createOrder.numberOfGuests"
                  },
                  {
                    "id": "fld_customerName",
                    "field": "customerName",
                    "labelKey": "field.customerName.label",
                    "order": 40,
                    "required": false,
                    "inputType": "text",
                    "source": "Order.customerName",
                    "stateKey": "ui.dineInOrderLifecycle.input.createOrder.customerName"
                  },
                  {
                    "id": "fld_customerPhone",
                    "field": "customerPhone",
                    "labelKey": "field.customerPhone.label",
                    "order": 50,
                    "required": false,
                    "inputType": "text",
                    "source": "Order.customerPhone",
                    "stateKey": "ui.dineInOrderLifecycle.input.createOrder.customerPhone"
                  },
                  {
                    "id": "fld_notes",
                    "field": "notes",
                    "labelKey": "field.notes.label",
                    "order": 60,
                    "required": false,
                    "inputType": "textarea",
                    "source": "Order.notes",
                    "stateKey": "ui.dineInOrderLifecycle.input.createOrder.notes"
                  },
                  {
                    "id": "fld_totalAmount",
                    "field": "totalAmount",
                    "labelKey": "field.totalAmount.label",
                    "order": 70,
                    "required": true,
                    "inputType": "number",
                    "format": "money",
                    "source": "Order.totalAmount",
                    "stateKey": "ui.dineInOrderLifecycle.input.createOrder.totalAmount"
                  },
                  {
                    "id": "fld_orderStatus",
                    "field": "status",
                    "labelKey": "field.orderStatus.label",
                    "order": 80,
                    "required": true,
                    "inputType": "hidden",
                    "source": "Order.status",
                    "stateKey": "ui.dineInOrderLifecycle.input.createOrder.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "mol_createOrder_actionBar",
                "type": "actionBar",
                "order": 20,
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act_createOrder",
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
            "id": "org_addOrderItem",
            "type": "formPanel",
            "organismName": "AddOrderItem",
            "titleKey": "organism.addOrderItem.title",
            "purpose": "Adicionar itens do cardápio ao pedido atual com quantidade e observações",
            "userActions": [
              "addOrderItem"
            ],
            "requiredEntities": [
              "OrderItem",
              "MenuItem",
              "Order",
              "StockConsumption"
            ],
            "readsFields": [
              "MenuItem.name",
              "MenuItem.price",
              "MenuItem.menuItemId",
              "MenuItem.status",
              "Order.orderId",
              "Order.status"
            ],
            "writesFields": [
              "OrderItem.menuItemId",
              "OrderItem.quantity",
              "OrderItem.unitPrice",
              "OrderItem.totalPrice",
              "OrderItem.observations",
              "OrderItem.status",
              "OrderItem.orderId"
            ],
            "rulesApplied": [
              "orderStatusTransitions",
              "ingredientConsumptionTrigger"
            ],
            "order": 20,
            "molecules": [
              {
                "id": "mol_addOrderItem_form",
                "type": "form",
                "order": 10,
                "fields": [
                  {
                    "id": "fld_menuItemId",
                    "field": "menuItemId",
                    "labelKey": "field.menuItemId.label",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "source": "MenuItem.menuItemId",
                    "stateKey": "ui.dineInOrderLifecycle.input.addOrderItem.menuItemId"
                  },
                  {
                    "id": "fld_quantity",
                    "field": "quantity",
                    "labelKey": "field.quantity.label",
                    "order": 20,
                    "required": true,
                    "inputType": "number",
                    "source": "OrderItem.quantity",
                    "stateKey": "ui.dineInOrderLifecycle.input.addOrderItem.quantity"
                  },
                  {
                    "id": "fld_unitPrice",
                    "field": "unitPrice",
                    "labelKey": "field.unitPrice.label",
                    "order": 30,
                    "required": true,
                    "inputType": "number",
                    "format": "money",
                    "source": "OrderItem.unitPrice",
                    "stateKey": "ui.dineInOrderLifecycle.input.addOrderItem.unitPrice"
                  },
                  {
                    "id": "fld_totalPrice",
                    "field": "totalPrice",
                    "labelKey": "field.totalPrice.label",
                    "order": 40,
                    "required": true,
                    "inputType": "number",
                    "format": "money",
                    "source": "OrderItem.totalPrice",
                    "stateKey": "ui.dineInOrderLifecycle.input.addOrderItem.totalPrice"
                  },
                  {
                    "id": "fld_observations",
                    "field": "observations",
                    "labelKey": "field.observations.label",
                    "order": 50,
                    "required": false,
                    "inputType": "textarea",
                    "source": "OrderItem.observations",
                    "stateKey": "ui.dineInOrderLifecycle.input.addOrderItem.observations"
                  },
                  {
                    "id": "fld_itemStatus",
                    "field": "status",
                    "labelKey": "field.itemStatus.label",
                    "order": 60,
                    "required": true,
                    "inputType": "hidden",
                    "source": "OrderItem.status",
                    "stateKey": "ui.dineInOrderLifecycle.input.addOrderItem.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "mol_addOrderItem_actionBar",
                "type": "actionBar",
                "order": 20,
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act_addOrderItem",
                    "action": "addOrderItem",
                    "labelKey": "action.addOrderItem.label",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "addOrderItem"
                  }
                ]
              },
              {
                "id": "mol_orderItems_table",
                "type": "groupviewtable.mlDataTable",
                "order": 30,
                "binding": "orderItems",
                "emptyKey": "empty.orderItems",
                "displayHint": "compact",
                "fields": [],
                "columns": [
                  {
                    "id": "col_item_menuItemId",
                    "field": "menuItemId",
                    "labelKey": "column.menuItemId.label",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "source": "MenuItem.name",
                    "stateKey": "ui.dineInOrderLifecycle.data.addOrderItem"
                  },
                  {
                    "id": "col_item_quantity",
                    "field": "quantity",
                    "labelKey": "column.quantity.label",
                    "order": 20,
                    "required": false,
                    "inputType": "number",
                    "source": "OrderItem.quantity",
                    "stateKey": "ui.dineInOrderLifecycle.data.addOrderItem"
                  },
                  {
                    "id": "col_item_unitPrice",
                    "field": "unitPrice",
                    "labelKey": "column.unitPrice.label",
                    "order": 30,
                    "required": false,
                    "inputType": "number",
                    "format": "money",
                    "source": "OrderItem.unitPrice",
                    "stateKey": "ui.dineInOrderLifecycle.data.addOrderItem"
                  },
                  {
                    "id": "col_item_totalPrice",
                    "field": "totalPrice",
                    "labelKey": "column.totalPrice.label",
                    "order": 40,
                    "required": false,
                    "inputType": "number",
                    "format": "money",
                    "source": "OrderItem.totalPrice",
                    "stateKey": "ui.dineInOrderLifecycle.data.addOrderItem"
                  },
                  {
                    "id": "col_item_observations",
                    "field": "observations",
                    "labelKey": "column.observations.label",
                    "order": 50,
                    "required": false,
                    "inputType": "text",
                    "source": "OrderItem.observations",
                    "stateKey": "ui.dineInOrderLifecycle.data.addOrderItem"
                  },
                  {
                    "id": "col_item_status",
                    "field": "status",
                    "labelKey": "column.itemStatus.label",
                    "order": 60,
                    "required": false,
                    "inputType": "text",
                    "source": "OrderItem.status",
                    "stateKey": "ui.dineInOrderLifecycle.data.addOrderItem"
                  }
                ],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              }
            ]
          },
          {
            "id": "org_createKitchenTicket",
            "type": "actionPanel",
            "organismName": "CreateKitchenTicket",
            "titleKey": "organism.createKitchenTicket.title",
            "purpose": "Enviar pedido para a cozinha criando ticket de preparo",
            "userActions": [
              "createKitchenTicket"
            ],
            "requiredEntities": [
              "KitchenTicket",
              "Order",
              "OrderItem"
            ],
            "readsFields": [
              "Order.orderId",
              "Order.status",
              "OrderItem.id",
              "OrderItem.menuItemId",
              "OrderItem.quantity",
              "KitchenTicket.status"
            ],
            "writesFields": [
              "KitchenTicket.orderId",
              "KitchenTicket.status"
            ],
            "rulesApplied": [
              "orderStatusTransitions"
            ],
            "order": 30,
            "molecules": [
              {
                "id": "mol_kitchenTicket_summary",
                "type": "summaryPanel",
                "order": 10,
                "fields": [
                  {
                    "id": "fld_kt_orderId",
                    "field": "orderId",
                    "labelKey": "field.orderId.label",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "source": "Order.orderId",
                    "stateKey": "ui.dineInOrderLifecycle.input.createKitchenTicket.orderId"
                  },
                  {
                    "id": "fld_kt_orderStatus",
                    "field": "status",
                    "labelKey": "field.orderStatus.label",
                    "order": 20,
                    "required": false,
                    "inputType": "text",
                    "source": "Order.status",
                    "stateKey": "ui.dineInOrderLifecycle.input.createKitchenTicket.status"
                  },
                  {
                    "id": "fld_kt_ticketStatus",
                    "field": "status",
                    "labelKey": "field.kitchenTicketStatus.label",
                    "order": 30,
                    "required": false,
                    "inputType": "hidden",
                    "source": "KitchenTicket.status",
                    "stateKey": "ui.dineInOrderLifecycle.input.createKitchenTicket.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "mol_createKitchenTicket_actionBar",
                "type": "actionBar",
                "order": 20,
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act_createKitchenTicket",
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
            "id": "org_updateOrderStatus",
            "type": "statusPanel",
            "organismName": "UpdateOrderStatus",
            "titleKey": "organism.updateOrderStatus.title",
            "purpose": "Acompanhar e atualizar o status do pedido durante o serviço",
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
              "Order.tableId",
              "Order.orderId",
              "KitchenTicket.status"
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
            "molecules": [
              {
                "id": "mol_orderStatus_timeline",
                "type": "statusTimeline",
                "order": 10,
                "binding": "orderLifecycleStates",
                "displayHint": "horizontal",
                "stateKey": "currentOrder.status",
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "mol_updateOrderStatus_form",
                "type": "form",
                "order": 20,
                "fields": [
                  {
                    "id": "fld_updateStatus",
                    "field": "status",
                    "labelKey": "field.updateStatus.label",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "source": "Order.status",
                    "stateKey": "ui.dineInOrderLifecycle.input.updateOrderStatus.status"
                  },
                  {
                    "id": "fld_cancellationReason",
                    "field": "cancellationReason",
                    "labelKey": "field.cancellationReason.label",
                    "order": 20,
                    "required": false,
                    "inputType": "textarea",
                    "source": "Order.cancellationReason",
                    "stateKey": "ui.dineInOrderLifecycle.input.updateOrderStatus.cancellationReason"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "mol_updateOrderStatus_actionBar",
                "type": "actionBar",
                "order": 30,
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act_updateOrderStatus",
                    "action": "updateOrderStatus",
                    "labelKey": "action.updateOrderStatus.label",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "updateOrderStatus"
                  },
                  {
                    "id": "act_cancelOrder",
                    "action": "updateOrderStatus",
                    "labelKey": "action.cancelOrder.label",
                    "order": 20,
                    "displayHint": "danger",
                    "actionKey": "updateOrderStatus"
                  }
                ]
              }
            ]
          },
          {
            "id": "org_updateTableStatus",
            "type": "formPanel",
            "organismName": "UpdateTableStatus",
            "titleKey": "organism.updateTableStatus.title",
            "purpose": "Atualizar ocupação da mesa ao finalizar o ciclo do pedido",
            "userActions": [
              "updateTableStatus"
            ],
            "requiredEntities": [
              "Table"
            ],
            "readsFields": [
              "Table.tableId",
              "Table.number",
              "Table.status"
            ],
            "writesFields": [
              "Table.status",
              "Table.updatedAt"
            ],
            "rulesApplied": [
              "tableOccupancyConsistency"
            ],
            "order": 50,
            "molecules": [
              {
                "id": "mol_updateTableStatus_form",
                "type": "form",
                "order": 10,
                "fields": [
                  {
                    "id": "fld_tableStatus",
                    "field": "status",
                    "labelKey": "field.tableStatus.label",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "source": "Table.status",
                    "stateKey": "ui.dineInOrderLifecycle.input.updateTableStatus.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "mol_updateTableStatus_actionBar",
                "type": "actionBar",
                "order": 20,
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act_updateTableStatus",
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
  "i18n": {
    "section.dineInLifecycle.title": "Ciclo de pedido (mesa)",
    "organism.createOrder.title": "Criar pedido",
    "organism.addOrderItem.title": "Adicionar itens ao pedido",
    "organism.createKitchenTicket.title": "Enviar para cozinha",
    "organism.updateOrderStatus.title": "Status do pedido",
    "organism.updateTableStatus.title": "Ocupação da mesa",
    "field.orderType.label": "Tipo do pedido",
    "field.tableId.label": "Mesa",
    "field.numberOfGuests.label": "Número de pessoas",
    "field.customerName.label": "Nome do cliente",
    "field.customerPhone.label": "Telefone do cliente",
    "field.notes.label": "Observações gerais",
    "field.totalAmount.label": "Valor total",
    "field.orderStatus.label": "Status do pedido",
    "field.menuItemId.label": "Item do cardápio",
    "field.quantity.label": "Quantidade",
    "field.unitPrice.label": "Preço unitário",
    "field.totalPrice.label": "Preço total",
    "field.observations.label": "Observações do item",
    "field.itemStatus.label": "Status do item",
    "field.orderId.label": "Pedido",
    "field.kitchenTicketStatus.label": "Status do ticket",
    "field.updateStatus.label": "Novo status",
    "field.cancellationReason.label": "Motivo do cancelamento",
    "field.tableStatus.label": "Status da mesa",
    "column.menuItemId.label": "Item",
    "column.quantity.label": "Qtd.",
    "column.unitPrice.label": "Preço unit.",
    "column.totalPrice.label": "Preço total",
    "column.observations.label": "Observações",
    "column.itemStatus.label": "Status",
    "action.createOrder.label": "Criar pedido",
    "action.addOrderItem.label": "Adicionar item",
    "action.createKitchenTicket.label": "Enviar para cozinha",
    "action.updateOrderStatus.label": "Atualizar status",
    "action.cancelOrder.label": "Cancelar pedido",
    "action.updateTableStatus.label": "Atualizar mesa",
    "empty.orderItems": "Nenhum item adicionado ao pedido ainda."
  },
  "dataBindings": [
    {
      "id": "bind_createOrder",
      "source": "bff",
      "entity": "Order",
      "command": "createOrder",
      "description": "Cria um novo pedido dine-in com mesa e dados iniciais",
      "stateKey": "ui.dineInOrderLifecycle.data.createOrder",
      "inputStateKeys": [
        "ui.dineInOrderLifecycle.input.createOrder.orderType",
        "ui.dineInOrderLifecycle.input.createOrder.status",
        "ui.dineInOrderLifecycle.input.createOrder.totalAmount",
        "ui.dineInOrderLifecycle.input.createOrder.notes",
        "ui.dineInOrderLifecycle.input.createOrder.customerName",
        "ui.dineInOrderLifecycle.input.createOrder.customerPhone",
        "ui.dineInOrderLifecycle.input.createOrder.numberOfGuests",
        "ui.dineInOrderLifecycle.input.createOrder.closedAt",
        "ui.dineInOrderLifecycle.input.createOrder.cancelledAt",
        "ui.dineInOrderLifecycle.input.createOrder.cancellationReason"
      ]
    },
    {
      "id": "bind_addOrderItem",
      "source": "bff",
      "entity": "OrderItem",
      "command": "addOrderItem",
      "description": "Adiciona um item do cardápio ao pedido atual",
      "stateKey": "ui.dineInOrderLifecycle.data.addOrderItem",
      "inputStateKeys": [
        "ui.dineInOrderLifecycle.input.addOrderItem.quantity",
        "ui.dineInOrderLifecycle.input.addOrderItem.unitPrice",
        "ui.dineInOrderLifecycle.input.addOrderItem.totalPrice",
        "ui.dineInOrderLifecycle.input.addOrderItem.observations",
        "ui.dineInOrderLifecycle.input.addOrderItem.status"
      ]
    },
    {
      "id": "bind_orderItems",
      "source": "bff",
      "entity": "OrderItem",
      "description": "Lista de itens do pedido atual para exibição em tabela",
      "stateKey": "orderItems"
    },
    {
      "id": "bind_createKitchenTicket",
      "source": "bff",
      "entity": "KitchenTicket",
      "command": "createKitchenTicket",
      "description": "Cria ticket de cozinha enviando o pedido para preparo",
      "stateKey": "ui.dineInOrderLifecycle.data.createKitchenTicket",
      "inputStateKeys": [
        "ui.dineInOrderLifecycle.input.createKitchenTicket.status"
      ]
    },
    {
      "id": "bind_updateOrderStatus",
      "source": "bff",
      "entity": "Order",
      "command": "updateOrderStatus",
      "description": "Atualiza o status do pedido no ciclo de serviço",
      "stateKey": "ui.dineInOrderLifecycle.data.updateOrderStatus",
      "inputStateKeys": [
        "ui.dineInOrderLifecycle.input.updateOrderStatus.status",
        "ui.dineInOrderLifecycle.input.updateOrderStatus.closedAt",
        "ui.dineInOrderLifecycle.input.updateOrderStatus.cancelledAt",
        "ui.dineInOrderLifecycle.input.updateOrderStatus.cancellationReason"
      ]
    },
    {
      "id": "bind_updateTableStatus",
      "source": "bff",
      "entity": "Table",
      "command": "updateTableStatus",
      "description": "Atualiza o status de ocupação da mesa",
      "stateKey": "ui.dineInOrderLifecycle.data.updateTableStatus",
      "inputStateKeys": [
        "ui.dineInOrderLifecycle.input.updateTableStatus.status"
      ]
    },
    {
      "id": "bind_currentOrder",
      "source": "bff",
      "entity": "Order",
      "description": "Pedido atual em edição no ciclo",
      "stateKey": "currentOrder"
    },
    {
      "id": "bind_orderLifecycleStates",
      "source": "workflow",
      "entity": "Order",
      "description": "Estados do ciclo de vida do pedido para timeline",
      "stateKey": "orderLifecycleStates"
    }
  ]
};

export const pipeline = [
  {
    "id": "dineInOrderLifecycle__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/dineInOrderLifecycle.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/dineInOrderLifecycle.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/dineInOrderLifecycle.ts",
      "_102050_/l2/cafeFlow/web/contracts/dineInOrderLifecycle.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentMaterializeSolution/skills/genPageRender.ts",
      "_102020_/l2/agentMaterializeSolution/skills/genPageDS.ts"
    ],
    "afterSaveFrontEnd": "_102020_/l2/agentMaterializeSolution/registerFrontEnd.ts?registerPage",
    "visualStyle": {
      "description": "POS-first, high-contrast, touch-friendly, low-latency, status-driven UI"
    },
    "agent": "agentMaterializeGen"
  }
] as const;
