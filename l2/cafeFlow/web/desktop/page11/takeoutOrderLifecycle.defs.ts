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
      "id": "sec_takeout_lifecycle",
      "type": "section",
      "sectionName": "Ciclo de pedido (takeout)",
      "titleKey": "section.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org_create_order",
          "type": "formPanel",
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
          "readsFields": [
            "Order.orderType",
            "Order.status",
            "Order.totalAmount",
            "Order.notes",
            "Order.customerName",
            "Order.customerPhone",
            "Order.numberOfGuests"
          ],
          "writesFields": [
            "Order.orderType",
            "Order.status",
            "Order.totalAmount",
            "Order.notes",
            "Order.customerName",
            "Order.customerPhone",
            "Order.numberOfGuests"
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
              "id": "mol_create_order_form",
              "type": "form",
              "order": 10
            },
            {
              "id": "mol_create_order_actions",
              "type": "actionBar",
              "order": 20
            }
          ]
        },
        {
          "id": "org_add_order_item",
          "type": "formPanel",
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
          "readsFields": [
            "OrderItem.menuItemId",
            "OrderItem.quantity",
            "OrderItem.unitPrice",
            "OrderItem.totalPrice",
            "OrderItem.observations",
            "OrderItem.status",
            "MenuItem.name",
            "MenuItem.price"
          ],
          "writesFields": [
            "OrderItem.menuItemId",
            "OrderItem.quantity",
            "OrderItem.unitPrice",
            "OrderItem.totalPrice",
            "OrderItem.observations",
            "OrderItem.status"
          ],
          "rulesApplied": [
            "orderStatusTransitions",
            "ingredientConsumptionTrigger"
          ],
          "order": 20,
          "moleculeRefs": [
            {
              "id": "mol_add_item_form",
              "type": "form",
              "order": 10
            },
            {
              "id": "mol_order_items_table",
              "type": "groupviewtable.mlDataTable",
              "stateKey": "orderItems",
              "order": 20
            },
            {
              "id": "mol_add_item_actions",
              "type": "actionBar",
              "order": 30
            }
          ]
        },
        {
          "id": "org_create_kitchen_ticket",
          "type": "summaryPanel",
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
          "readsFields": [
            "KitchenTicket.status",
            "KitchenTicket.orderId",
            "Order.status",
            "OrderItem.status"
          ],
          "writesFields": [
            "KitchenTicket.status",
            "KitchenTicket.orderId"
          ],
          "rulesApplied": [
            "orderStatusTransitions"
          ],
          "order": 30,
          "moleculeRefs": [
            {
              "id": "mol_kitchen_ticket_summary",
              "type": "summaryPanel",
              "order": 10
            },
            {
              "id": "mol_kitchen_ticket_actions",
              "type": "actionBar",
              "order": 20
            }
          ]
        },
        {
          "id": "org_update_order_status",
          "type": "statusPanel",
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
            "Order.tableId",
            "Order.closedAt",
            "Order.cancelledAt",
            "Order.cancellationReason"
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
              "id": "mol_order_status_timeline",
              "type": "statusTimeline",
              "stateKey": "currentOrder.status",
              "order": 10
            },
            {
              "id": "mol_update_status_form",
              "type": "form",
              "order": 20
            },
            {
              "id": "mol_update_status_actions",
              "type": "actionBar",
              "order": 30
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "takeoutOrderLifecycle-default",
    "type": "page",
    "sections": [
      {
        "id": "sec_takeout_lifecycle",
        "type": "section",
        "sectionName": "Ciclo de pedido (takeout)",
        "titleKey": "section.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org_create_order",
            "type": "formPanel",
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
            "readsFields": [
              "Order.orderType",
              "Order.status",
              "Order.totalAmount",
              "Order.notes",
              "Order.customerName",
              "Order.customerPhone",
              "Order.numberOfGuests"
            ],
            "writesFields": [
              "Order.orderType",
              "Order.status",
              "Order.totalAmount",
              "Order.notes",
              "Order.customerName",
              "Order.customerPhone",
              "Order.numberOfGuests"
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
                "id": "mol_create_order_form",
                "type": "form",
                "order": 10,
                "fields": [
                  {
                    "id": "fld_orderType",
                    "field": "orderType",
                    "labelKey": "field.orderType",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "source": "Order",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.orderType"
                  },
                  {
                    "id": "fld_customerName",
                    "field": "customerName",
                    "labelKey": "field.customerName",
                    "order": 20,
                    "required": false,
                    "inputType": "text",
                    "source": "Order",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.customerName"
                  },
                  {
                    "id": "fld_customerPhone",
                    "field": "customerPhone",
                    "labelKey": "field.customerPhone",
                    "order": 30,
                    "required": false,
                    "inputType": "text",
                    "source": "Order",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.customerPhone"
                  },
                  {
                    "id": "fld_numberOfGuests",
                    "field": "numberOfGuests",
                    "labelKey": "field.numberOfGuests",
                    "order": 40,
                    "required": false,
                    "inputType": "number",
                    "source": "Order",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.numberOfGuests"
                  },
                  {
                    "id": "fld_notes",
                    "field": "notes",
                    "labelKey": "field.notes",
                    "order": 50,
                    "required": false,
                    "inputType": "textarea",
                    "source": "Order",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createOrder.notes"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "mol_create_order_actions",
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
                    "labelKey": "action.createOrder",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "createOrder"
                  }
                ]
              }
            ]
          },
          {
            "id": "org_add_order_item",
            "type": "formPanel",
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
            "readsFields": [
              "OrderItem.menuItemId",
              "OrderItem.quantity",
              "OrderItem.unitPrice",
              "OrderItem.totalPrice",
              "OrderItem.observations",
              "OrderItem.status",
              "MenuItem.name",
              "MenuItem.price"
            ],
            "writesFields": [
              "OrderItem.menuItemId",
              "OrderItem.quantity",
              "OrderItem.unitPrice",
              "OrderItem.totalPrice",
              "OrderItem.observations",
              "OrderItem.status"
            ],
            "rulesApplied": [
              "orderStatusTransitions",
              "ingredientConsumptionTrigger"
            ],
            "order": 20,
            "molecules": [
              {
                "id": "mol_add_item_form",
                "type": "form",
                "order": 10,
                "fields": [
                  {
                    "id": "fld_menuItemId",
                    "field": "menuItemId",
                    "labelKey": "field.menuItemId",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "source": "MenuItem",
                    "stateKey": "ui.takeoutOrderLifecycle.input.addOrderItem.menuItemId"
                  },
                  {
                    "id": "fld_quantity",
                    "field": "quantity",
                    "labelKey": "field.quantity",
                    "order": 20,
                    "required": true,
                    "inputType": "number",
                    "source": "OrderItem",
                    "stateKey": "ui.takeoutOrderLifecycle.input.addOrderItem.quantity"
                  },
                  {
                    "id": "fld_observations",
                    "field": "observations",
                    "labelKey": "field.observations",
                    "order": 30,
                    "required": false,
                    "inputType": "textarea",
                    "source": "OrderItem",
                    "stateKey": "ui.takeoutOrderLifecycle.input.addOrderItem.observations"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "mol_order_items_table",
                "type": "groupviewtable.mlDataTable",
                "order": 20,
                "binding": "orderItems",
                "emptyKey": "empty.orderItems",
                "stateKey": "orderItems",
                "fields": [],
                "columns": [
                  {
                    "id": "col_menuItemId",
                    "field": "menuItemId",
                    "labelKey": "field.menuItemId",
                    "order": 10,
                    "required": true,
                    "inputType": "text",
                    "source": "OrderItem",
                    "stateKey": "ui.takeoutOrderLifecycle.data.addOrderItem"
                  },
                  {
                    "id": "col_quantity",
                    "field": "quantity",
                    "labelKey": "field.quantity",
                    "order": 20,
                    "required": true,
                    "inputType": "number",
                    "source": "OrderItem",
                    "stateKey": "ui.takeoutOrderLifecycle.data.addOrderItem"
                  },
                  {
                    "id": "col_unitPrice",
                    "field": "unitPrice",
                    "labelKey": "field.unitPrice",
                    "order": 30,
                    "required": true,
                    "inputType": "text",
                    "format": "money",
                    "source": "OrderItem",
                    "stateKey": "ui.takeoutOrderLifecycle.data.addOrderItem"
                  },
                  {
                    "id": "col_totalPrice",
                    "field": "totalPrice",
                    "labelKey": "field.totalPrice",
                    "order": 40,
                    "required": true,
                    "inputType": "text",
                    "format": "money",
                    "source": "OrderItem",
                    "stateKey": "ui.takeoutOrderLifecycle.data.addOrderItem"
                  },
                  {
                    "id": "col_observations",
                    "field": "observations",
                    "labelKey": "field.observations",
                    "order": 50,
                    "required": false,
                    "inputType": "text",
                    "source": "OrderItem",
                    "stateKey": "ui.takeoutOrderLifecycle.data.addOrderItem"
                  },
                  {
                    "id": "col_itemStatus",
                    "field": "status",
                    "labelKey": "field.itemStatus",
                    "order": 60,
                    "required": true,
                    "inputType": "text",
                    "source": "OrderItem",
                    "stateKey": "ui.takeoutOrderLifecycle.data.addOrderItem"
                  }
                ],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "mol_add_item_actions",
                "type": "actionBar",
                "order": 30,
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act_addOrderItem",
                    "action": "addOrderItem",
                    "labelKey": "action.addOrderItem",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "addOrderItem"
                  }
                ]
              }
            ]
          },
          {
            "id": "org_create_kitchen_ticket",
            "type": "summaryPanel",
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
            "readsFields": [
              "KitchenTicket.status",
              "KitchenTicket.orderId",
              "Order.status",
              "OrderItem.status"
            ],
            "writesFields": [
              "KitchenTicket.status",
              "KitchenTicket.orderId"
            ],
            "rulesApplied": [
              "orderStatusTransitions"
            ],
            "order": 30,
            "molecules": [
              {
                "id": "mol_kitchen_ticket_summary",
                "type": "summaryPanel",
                "order": 10,
                "fields": [
                  {
                    "id": "fld_kt_orderId",
                    "field": "orderId",
                    "labelKey": "field.orderId",
                    "order": 10,
                    "required": true,
                    "inputType": "text",
                    "source": "KitchenTicket",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createKitchenTicket.orderId"
                  },
                  {
                    "id": "fld_kt_status",
                    "field": "status",
                    "labelKey": "field.kitchenTicketStatus",
                    "order": 20,
                    "required": true,
                    "inputType": "select",
                    "source": "KitchenTicket",
                    "stateKey": "ui.takeoutOrderLifecycle.input.createKitchenTicket.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "mol_kitchen_ticket_actions",
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
                    "labelKey": "action.createKitchenTicket",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "createKitchenTicket"
                  }
                ]
              }
            ]
          },
          {
            "id": "org_update_order_status",
            "type": "statusPanel",
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
              "Order.tableId",
              "Order.closedAt",
              "Order.cancelledAt",
              "Order.cancellationReason"
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
                "id": "mol_order_status_timeline",
                "type": "statusTimeline",
                "order": 10,
                "displayHint": "workflow:draft>sentToKitchen>inPreparation>ready>served>closed",
                "stateKey": "currentOrder.status",
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "mol_update_status_form",
                "type": "form",
                "order": 20,
                "fields": [
                  {
                    "id": "fld_update_status",
                    "field": "status",
                    "labelKey": "field.status",
                    "order": 10,
                    "required": true,
                    "inputType": "select",
                    "source": "Order",
                    "stateKey": "ui.takeoutOrderLifecycle.input.updateOrderStatus.status"
                  },
                  {
                    "id": "fld_cancellationReason",
                    "field": "cancellationReason",
                    "labelKey": "field.cancellationReason",
                    "order": 20,
                    "required": false,
                    "inputType": "textarea",
                    "source": "Order",
                    "stateKey": "ui.takeoutOrderLifecycle.input.updateOrderStatus.cancellationReason"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "mol_update_status_actions",
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
                    "labelKey": "action.updateOrderStatus",
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
  "i18n": {
    "section.title": "Ciclo de pedido (takeout)",
    "organism.createOrder.title": "Criar pedido",
    "organism.addOrderItem.title": "Adicionar item ao pedido",
    "organism.createKitchenTicket.title": "Criar ticket de cozinha",
    "organism.updateOrderStatus.title": "Atualizar status do pedido",
    "field.orderType": "Tipo do pedido",
    "field.customerName": "Nome do cliente",
    "field.customerPhone": "Telefone do cliente",
    "field.numberOfGuests": "Número de pessoas",
    "field.notes": "Observações gerais",
    "field.menuItemId": "Item do cardápio",
    "field.quantity": "Quantidade",
    "field.observations": "Observações do item",
    "field.unitPrice": "Preço unitário",
    "field.totalPrice": "Preço total",
    "field.itemStatus": "Status do item",
    "field.orderId": "Pedido",
    "field.kitchenTicketStatus": "Status do ticket",
    "field.status": "Status do pedido",
    "field.cancellationReason": "Motivo do cancelamento",
    "action.createOrder": "Criar pedido",
    "action.addOrderItem": "Adicionar item",
    "action.createKitchenTicket": "Enviar para cozinha",
    "action.updateOrderStatus": "Atualizar status",
    "empty.orderItems": "Nenhum item adicionado ao pedido"
  },
  "dataBindings": [
    {
      "id": "bind_createOrder",
      "source": "command",
      "entity": "Order",
      "command": "createOrder",
      "description": "Cria um novo pedido do tipo takeout",
      "stateKey": "ui.takeoutOrderLifecycle.data.createOrder",
      "inputStateKeys": [
        "ui.takeoutOrderLifecycle.input.createOrder.orderType",
        "ui.takeoutOrderLifecycle.input.createOrder.status",
        "ui.takeoutOrderLifecycle.input.createOrder.totalAmount",
        "ui.takeoutOrderLifecycle.input.createOrder.notes",
        "ui.takeoutOrderLifecycle.input.createOrder.customerName",
        "ui.takeoutOrderLifecycle.input.createOrder.customerPhone",
        "ui.takeoutOrderLifecycle.input.createOrder.numberOfGuests",
        "ui.takeoutOrderLifecycle.input.createOrder.closedAt",
        "ui.takeoutOrderLifecycle.input.createOrder.cancelledAt",
        "ui.takeoutOrderLifecycle.input.createOrder.cancellationReason"
      ]
    },
    {
      "id": "bind_addOrderItem",
      "source": "command",
      "entity": "OrderItem",
      "command": "addOrderItem",
      "description": "Adiciona um item ao pedido atual",
      "stateKey": "ui.takeoutOrderLifecycle.data.addOrderItem",
      "inputStateKeys": [
        "ui.takeoutOrderLifecycle.input.addOrderItem.quantity",
        "ui.takeoutOrderLifecycle.input.addOrderItem.unitPrice",
        "ui.takeoutOrderLifecycle.input.addOrderItem.totalPrice",
        "ui.takeoutOrderLifecycle.input.addOrderItem.observations",
        "ui.takeoutOrderLifecycle.input.addOrderItem.status"
      ]
    },
    {
      "id": "bind_createKitchenTicket",
      "source": "command",
      "entity": "KitchenTicket",
      "command": "createKitchenTicket",
      "description": "Cria ticket de cozinha para o pedido atual",
      "stateKey": "ui.takeoutOrderLifecycle.data.createKitchenTicket",
      "inputStateKeys": [
        "ui.takeoutOrderLifecycle.input.createKitchenTicket.status"
      ]
    },
    {
      "id": "bind_updateOrderStatus",
      "source": "command",
      "entity": "Order",
      "command": "updateOrderStatus",
      "description": "Atualiza o status do pedido atual",
      "stateKey": "ui.takeoutOrderLifecycle.data.updateOrderStatus",
      "inputStateKeys": [
        "ui.takeoutOrderLifecycle.input.updateOrderStatus.status",
        "ui.takeoutOrderLifecycle.input.updateOrderStatus.closedAt",
        "ui.takeoutOrderLifecycle.input.updateOrderStatus.cancelledAt",
        "ui.takeoutOrderLifecycle.input.updateOrderStatus.cancellationReason"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "takeoutOrderLifecycle__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/takeoutOrderLifecycle.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/takeoutOrderLifecycle.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/takeoutOrderLifecycle.ts",
      "_102050_/l2/cafeFlow/web/contracts/takeoutOrderLifecycle.ts"
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
