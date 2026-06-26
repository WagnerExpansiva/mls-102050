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
      "id": "sec-dinein-lifecycle",
      "type": "section",
      "sectionName": "Ciclo de pedido (mesa)",
      "titleKey": "dineInOrderLifecycle.section.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org-create-order",
          "type": "organism",
          "organismName": "CreateOrder",
          "titleKey": "dineInOrderLifecycle.createOrder.title",
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
          "molecules": [
            {
              "id": "mol-create-order-form",
              "type": "form",
              "order": 10,
              "titleKey": "dineInOrderLifecycle.createOrder.form.title",
              "fields": [
                {
                  "id": "fld-create-order-orderType",
                  "field": "orderType",
                  "labelKey": "dineInOrderLifecycle.fields.orderType",
                  "order": 10,
                  "required": true,
                  "inputType": "select"
                },
                {
                  "id": "fld-create-order-status",
                  "field": "status",
                  "labelKey": "dineInOrderLifecycle.fields.status",
                  "order": 20,
                  "required": true,
                  "inputType": "select"
                },
                {
                  "id": "fld-create-order-totalAmount",
                  "field": "totalAmount",
                  "labelKey": "dineInOrderLifecycle.fields.totalAmount",
                  "order": 30,
                  "required": true,
                  "inputType": "money"
                },
                {
                  "id": "fld-create-order-notes",
                  "field": "notes",
                  "labelKey": "dineInOrderLifecycle.fields.notes",
                  "order": 40,
                  "required": false,
                  "inputType": "text"
                },
                {
                  "id": "fld-create-order-customerName",
                  "field": "customerName",
                  "labelKey": "dineInOrderLifecycle.fields.customerName",
                  "order": 50,
                  "required": false,
                  "inputType": "text"
                },
                {
                  "id": "fld-create-order-customerPhone",
                  "field": "customerPhone",
                  "labelKey": "dineInOrderLifecycle.fields.customerPhone",
                  "order": 60,
                  "required": false,
                  "inputType": "text"
                },
                {
                  "id": "fld-create-order-numberOfGuests",
                  "field": "numberOfGuests",
                  "labelKey": "dineInOrderLifecycle.fields.numberOfGuests",
                  "order": 70,
                  "required": false,
                  "inputType": "number"
                },
                {
                  "id": "fld-create-order-closedAt",
                  "field": "closedAt",
                  "labelKey": "dineInOrderLifecycle.fields.closedAt",
                  "order": 80,
                  "required": false,
                  "inputType": "datetime"
                },
                {
                  "id": "fld-create-order-cancelledAt",
                  "field": "cancelledAt",
                  "labelKey": "dineInOrderLifecycle.fields.cancelledAt",
                  "order": 90,
                  "required": false,
                  "inputType": "datetime"
                },
                {
                  "id": "fld-create-order-cancellationReason",
                  "field": "cancellationReason",
                  "labelKey": "dineInOrderLifecycle.fields.cancellationReason",
                  "order": 100,
                  "required": false,
                  "inputType": "text"
                }
              ],
              "columns": [],
              "filters": [],
              "toolbar": [],
              "rowActions": [],
              "actions": []
            },
            {
              "id": "mol-create-order-actions",
              "type": "actionBar",
              "order": 20,
              "titleKey": "dineInOrderLifecycle.createOrder.actions.title",
              "fields": [],
              "columns": [],
              "filters": [],
              "toolbar": [],
              "rowActions": [],
              "actions": [
                {
                  "id": "act-create-order-submit",
                  "action": "createOrder",
                  "labelKey": "dineInOrderLifecycle.actions.createOrder",
                  "order": 10,
                  "displayHint": "primary"
                }
              ]
            }
          ]
        },
        {
          "id": "org-add-order-item",
          "type": "organism",
          "organismName": "AddOrderItem",
          "titleKey": "dineInOrderLifecycle.addOrderItem.title",
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
          "molecules": [
            {
              "id": "mol-add-order-item-form",
              "type": "form",
              "order": 10,
              "titleKey": "dineInOrderLifecycle.addOrderItem.form.title",
              "fields": [
                {
                  "id": "fld-add-item-quantity",
                  "field": "quantity",
                  "labelKey": "dineInOrderLifecycle.fields.quantity",
                  "order": 10,
                  "required": true,
                  "inputType": "number"
                },
                {
                  "id": "fld-add-item-unitPrice",
                  "field": "unitPrice",
                  "labelKey": "dineInOrderLifecycle.fields.unitPrice",
                  "order": 20,
                  "required": true,
                  "inputType": "money"
                },
                {
                  "id": "fld-add-item-totalPrice",
                  "field": "totalPrice",
                  "labelKey": "dineInOrderLifecycle.fields.totalPrice",
                  "order": 30,
                  "required": true,
                  "inputType": "money"
                },
                {
                  "id": "fld-add-item-observations",
                  "field": "observations",
                  "labelKey": "dineInOrderLifecycle.fields.observations",
                  "order": 40,
                  "required": false,
                  "inputType": "text"
                },
                {
                  "id": "fld-add-item-status",
                  "field": "status",
                  "labelKey": "dineInOrderLifecycle.fields.itemStatus",
                  "order": 50,
                  "required": true,
                  "inputType": "select"
                }
              ],
              "columns": [],
              "filters": [],
              "toolbar": [],
              "rowActions": [],
              "actions": []
            },
            {
              "id": "mol-add-order-item-actions",
              "type": "actionBar",
              "order": 20,
              "titleKey": "dineInOrderLifecycle.addOrderItem.actions.title",
              "fields": [],
              "columns": [],
              "filters": [],
              "toolbar": [],
              "rowActions": [],
              "actions": [
                {
                  "id": "act-add-order-item-submit",
                  "action": "addOrderItem",
                  "labelKey": "dineInOrderLifecycle.actions.addOrderItem",
                  "order": 10,
                  "displayHint": "primary"
                }
              ]
            }
          ]
        },
        {
          "id": "org-create-kitchen-ticket",
          "type": "organism",
          "organismName": "CreateKitchenTicket",
          "titleKey": "dineInOrderLifecycle.createKitchenTicket.title",
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
          "molecules": [
            {
              "id": "mol-create-kitchen-ticket-form",
              "type": "form",
              "order": 10,
              "titleKey": "dineInOrderLifecycle.createKitchenTicket.form.title",
              "fields": [
                {
                  "id": "fld-kitchen-ticket-status",
                  "field": "status",
                  "labelKey": "dineInOrderLifecycle.fields.kitchenTicketStatus",
                  "order": 10,
                  "required": true,
                  "inputType": "select"
                }
              ],
              "columns": [],
              "filters": [],
              "toolbar": [],
              "rowActions": [],
              "actions": []
            },
            {
              "id": "mol-create-kitchen-ticket-actions",
              "type": "actionBar",
              "order": 20,
              "titleKey": "dineInOrderLifecycle.createKitchenTicket.actions.title",
              "fields": [],
              "columns": [],
              "filters": [],
              "toolbar": [],
              "rowActions": [],
              "actions": [
                {
                  "id": "act-create-kitchen-ticket-submit",
                  "action": "createKitchenTicket",
                  "labelKey": "dineInOrderLifecycle.actions.createKitchenTicket",
                  "order": 10,
                  "displayHint": "primary"
                }
              ]
            }
          ]
        },
        {
          "id": "org-update-order-status",
          "type": "organism",
          "organismName": "UpdateOrderStatus",
          "titleKey": "dineInOrderLifecycle.updateOrderStatus.title",
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
          "molecules": [
            {
              "id": "mol-order-summary",
              "type": "summaryPanel",
              "order": 10,
              "titleKey": "dineInOrderLifecycle.updateOrderStatus.summary.title",
              "fields": [
                {
                  "id": "fld-order-status",
                  "field": "Order.status",
                  "labelKey": "dineInOrderLifecycle.fields.status",
                  "order": 10,
                  "required": false
                },
                {
                  "id": "fld-order-type",
                  "field": "Order.orderType",
                  "labelKey": "dineInOrderLifecycle.fields.orderType",
                  "order": 20,
                  "required": false
                },
                {
                  "id": "fld-order-table",
                  "field": "Order.tableId",
                  "labelKey": "dineInOrderLifecycle.fields.tableId",
                  "order": 30,
                  "required": false
                }
              ],
              "columns": [],
              "filters": [],
              "toolbar": [],
              "rowActions": [],
              "actions": []
            },
            {
              "id": "mol-update-order-status-form",
              "type": "form",
              "order": 20,
              "titleKey": "dineInOrderLifecycle.updateOrderStatus.form.title",
              "fields": [
                {
                  "id": "fld-update-order-status",
                  "field": "status",
                  "labelKey": "dineInOrderLifecycle.fields.status",
                  "order": 10,
                  "required": true,
                  "inputType": "select"
                },
                {
                  "id": "fld-update-order-closedAt",
                  "field": "closedAt",
                  "labelKey": "dineInOrderLifecycle.fields.closedAt",
                  "order": 20,
                  "required": false,
                  "inputType": "datetime"
                },
                {
                  "id": "fld-update-order-cancelledAt",
                  "field": "cancelledAt",
                  "labelKey": "dineInOrderLifecycle.fields.cancelledAt",
                  "order": 30,
                  "required": false,
                  "inputType": "datetime"
                },
                {
                  "id": "fld-update-order-cancel-reason",
                  "field": "cancellationReason",
                  "labelKey": "dineInOrderLifecycle.fields.cancellationReason",
                  "order": 40,
                  "required": false,
                  "inputType": "text"
                }
              ],
              "columns": [],
              "filters": [],
              "toolbar": [],
              "rowActions": [],
              "actions": []
            },
            {
              "id": "mol-update-order-status-actions",
              "type": "actionBar",
              "order": 30,
              "titleKey": "dineInOrderLifecycle.updateOrderStatus.actions.title",
              "fields": [],
              "columns": [],
              "filters": [],
              "toolbar": [],
              "rowActions": [],
              "actions": [
                {
                  "id": "act-update-order-status-submit",
                  "action": "updateOrderStatus",
                  "labelKey": "dineInOrderLifecycle.actions.updateOrderStatus",
                  "order": 10,
                  "displayHint": "primary"
                }
              ]
            }
          ]
        },
        {
          "id": "org-update-table-status",
          "type": "organism",
          "organismName": "UpdateTableStatus",
          "titleKey": "dineInOrderLifecycle.updateTableStatus.title",
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
          "molecules": [
            {
              "id": "mol-update-table-status-form",
              "type": "form",
              "order": 10,
              "titleKey": "dineInOrderLifecycle.updateTableStatus.form.title",
              "fields": [
                {
                  "id": "fld-update-table-status",
                  "field": "status",
                  "labelKey": "dineInOrderLifecycle.fields.tableStatus",
                  "order": 10,
                  "required": true,
                  "inputType": "select"
                }
              ],
              "columns": [],
              "filters": [],
              "toolbar": [],
              "rowActions": [],
              "actions": []
            },
            {
              "id": "mol-update-table-status-actions",
              "type": "actionBar",
              "order": 20,
              "titleKey": "dineInOrderLifecycle.updateTableStatus.actions.title",
              "fields": [],
              "columns": [],
              "filters": [],
              "toolbar": [],
              "rowActions": [],
              "actions": [
                {
                  "id": "act-update-table-status-submit",
                  "action": "updateTableStatus",
                  "labelKey": "dineInOrderLifecycle.actions.updateTableStatus",
                  "order": 10,
                  "displayHint": "primary"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "dineInOrderLifecycle.layout.v1",
    "type": "page",
    "sections": [
      {
        "id": "sec-dinein-lifecycle",
        "type": "section",
        "sectionName": "Ciclo de pedido (mesa)",
        "titleKey": "dineInOrderLifecycle.section.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org-create-order",
            "type": "organism",
            "organismName": "CreateOrder",
            "titleKey": "dineInOrderLifecycle.createOrder.title",
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
            "molecules": [
              {
                "id": "mol-create-order-form",
                "type": "form",
                "order": 10,
                "titleKey": "dineInOrderLifecycle.createOrder.form.title",
                "fields": [
                  {
                    "id": "fld-create-order-orderType",
                    "field": "orderType",
                    "labelKey": "dineInOrderLifecycle.fields.orderType",
                    "order": 10,
                    "required": true,
                    "inputType": "select"
                  },
                  {
                    "id": "fld-create-order-status",
                    "field": "status",
                    "labelKey": "dineInOrderLifecycle.fields.status",
                    "order": 20,
                    "required": true,
                    "inputType": "select"
                  },
                  {
                    "id": "fld-create-order-totalAmount",
                    "field": "totalAmount",
                    "labelKey": "dineInOrderLifecycle.fields.totalAmount",
                    "order": 30,
                    "required": true,
                    "inputType": "money"
                  },
                  {
                    "id": "fld-create-order-notes",
                    "field": "notes",
                    "labelKey": "dineInOrderLifecycle.fields.notes",
                    "order": 40,
                    "required": false,
                    "inputType": "text"
                  },
                  {
                    "id": "fld-create-order-customerName",
                    "field": "customerName",
                    "labelKey": "dineInOrderLifecycle.fields.customerName",
                    "order": 50,
                    "required": false,
                    "inputType": "text"
                  },
                  {
                    "id": "fld-create-order-customerPhone",
                    "field": "customerPhone",
                    "labelKey": "dineInOrderLifecycle.fields.customerPhone",
                    "order": 60,
                    "required": false,
                    "inputType": "text"
                  },
                  {
                    "id": "fld-create-order-numberOfGuests",
                    "field": "numberOfGuests",
                    "labelKey": "dineInOrderLifecycle.fields.numberOfGuests",
                    "order": 70,
                    "required": false,
                    "inputType": "number"
                  },
                  {
                    "id": "fld-create-order-closedAt",
                    "field": "closedAt",
                    "labelKey": "dineInOrderLifecycle.fields.closedAt",
                    "order": 80,
                    "required": false,
                    "inputType": "datetime"
                  },
                  {
                    "id": "fld-create-order-cancelledAt",
                    "field": "cancelledAt",
                    "labelKey": "dineInOrderLifecycle.fields.cancelledAt",
                    "order": 90,
                    "required": false,
                    "inputType": "datetime"
                  },
                  {
                    "id": "fld-create-order-cancellationReason",
                    "field": "cancellationReason",
                    "labelKey": "dineInOrderLifecycle.fields.cancellationReason",
                    "order": 100,
                    "required": false,
                    "inputType": "text"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "mol-create-order-actions",
                "type": "actionBar",
                "order": 20,
                "titleKey": "dineInOrderLifecycle.createOrder.actions.title",
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-create-order-submit",
                    "action": "createOrder",
                    "labelKey": "dineInOrderLifecycle.actions.createOrder",
                    "order": 10,
                    "displayHint": "primary"
                  }
                ]
              }
            ]
          },
          {
            "id": "org-add-order-item",
            "type": "organism",
            "organismName": "AddOrderItem",
            "titleKey": "dineInOrderLifecycle.addOrderItem.title",
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
            "molecules": [
              {
                "id": "mol-add-order-item-form",
                "type": "form",
                "order": 10,
                "titleKey": "dineInOrderLifecycle.addOrderItem.form.title",
                "fields": [
                  {
                    "id": "fld-add-item-quantity",
                    "field": "quantity",
                    "labelKey": "dineInOrderLifecycle.fields.quantity",
                    "order": 10,
                    "required": true,
                    "inputType": "number"
                  },
                  {
                    "id": "fld-add-item-unitPrice",
                    "field": "unitPrice",
                    "labelKey": "dineInOrderLifecycle.fields.unitPrice",
                    "order": 20,
                    "required": true,
                    "inputType": "money"
                  },
                  {
                    "id": "fld-add-item-totalPrice",
                    "field": "totalPrice",
                    "labelKey": "dineInOrderLifecycle.fields.totalPrice",
                    "order": 30,
                    "required": true,
                    "inputType": "money"
                  },
                  {
                    "id": "fld-add-item-observations",
                    "field": "observations",
                    "labelKey": "dineInOrderLifecycle.fields.observations",
                    "order": 40,
                    "required": false,
                    "inputType": "text"
                  },
                  {
                    "id": "fld-add-item-status",
                    "field": "status",
                    "labelKey": "dineInOrderLifecycle.fields.itemStatus",
                    "order": 50,
                    "required": true,
                    "inputType": "select"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "mol-add-order-item-actions",
                "type": "actionBar",
                "order": 20,
                "titleKey": "dineInOrderLifecycle.addOrderItem.actions.title",
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-add-order-item-submit",
                    "action": "addOrderItem",
                    "labelKey": "dineInOrderLifecycle.actions.addOrderItem",
                    "order": 10,
                    "displayHint": "primary"
                  }
                ]
              }
            ]
          },
          {
            "id": "org-create-kitchen-ticket",
            "type": "organism",
            "organismName": "CreateKitchenTicket",
            "titleKey": "dineInOrderLifecycle.createKitchenTicket.title",
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
            "molecules": [
              {
                "id": "mol-create-kitchen-ticket-form",
                "type": "form",
                "order": 10,
                "titleKey": "dineInOrderLifecycle.createKitchenTicket.form.title",
                "fields": [
                  {
                    "id": "fld-kitchen-ticket-status",
                    "field": "status",
                    "labelKey": "dineInOrderLifecycle.fields.kitchenTicketStatus",
                    "order": 10,
                    "required": true,
                    "inputType": "select"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "mol-create-kitchen-ticket-actions",
                "type": "actionBar",
                "order": 20,
                "titleKey": "dineInOrderLifecycle.createKitchenTicket.actions.title",
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-create-kitchen-ticket-submit",
                    "action": "createKitchenTicket",
                    "labelKey": "dineInOrderLifecycle.actions.createKitchenTicket",
                    "order": 10,
                    "displayHint": "primary"
                  }
                ]
              }
            ]
          },
          {
            "id": "org-update-order-status",
            "type": "organism",
            "organismName": "UpdateOrderStatus",
            "titleKey": "dineInOrderLifecycle.updateOrderStatus.title",
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
            "molecules": [
              {
                "id": "mol-order-summary",
                "type": "summaryPanel",
                "order": 10,
                "titleKey": "dineInOrderLifecycle.updateOrderStatus.summary.title",
                "fields": [
                  {
                    "id": "fld-order-status",
                    "field": "Order.status",
                    "labelKey": "dineInOrderLifecycle.fields.status",
                    "order": 10,
                    "required": false
                  },
                  {
                    "id": "fld-order-type",
                    "field": "Order.orderType",
                    "labelKey": "dineInOrderLifecycle.fields.orderType",
                    "order": 20,
                    "required": false
                  },
                  {
                    "id": "fld-order-table",
                    "field": "Order.tableId",
                    "labelKey": "dineInOrderLifecycle.fields.tableId",
                    "order": 30,
                    "required": false
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "mol-update-order-status-form",
                "type": "form",
                "order": 20,
                "titleKey": "dineInOrderLifecycle.updateOrderStatus.form.title",
                "fields": [
                  {
                    "id": "fld-update-order-status",
                    "field": "status",
                    "labelKey": "dineInOrderLifecycle.fields.status",
                    "order": 10,
                    "required": true,
                    "inputType": "select"
                  },
                  {
                    "id": "fld-update-order-closedAt",
                    "field": "closedAt",
                    "labelKey": "dineInOrderLifecycle.fields.closedAt",
                    "order": 20,
                    "required": false,
                    "inputType": "datetime"
                  },
                  {
                    "id": "fld-update-order-cancelledAt",
                    "field": "cancelledAt",
                    "labelKey": "dineInOrderLifecycle.fields.cancelledAt",
                    "order": 30,
                    "required": false,
                    "inputType": "datetime"
                  },
                  {
                    "id": "fld-update-order-cancel-reason",
                    "field": "cancellationReason",
                    "labelKey": "dineInOrderLifecycle.fields.cancellationReason",
                    "order": 40,
                    "required": false,
                    "inputType": "text"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "mol-update-order-status-actions",
                "type": "actionBar",
                "order": 30,
                "titleKey": "dineInOrderLifecycle.updateOrderStatus.actions.title",
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-update-order-status-submit",
                    "action": "updateOrderStatus",
                    "labelKey": "dineInOrderLifecycle.actions.updateOrderStatus",
                    "order": 10,
                    "displayHint": "primary"
                  }
                ]
              }
            ]
          },
          {
            "id": "org-update-table-status",
            "type": "organism",
            "organismName": "UpdateTableStatus",
            "titleKey": "dineInOrderLifecycle.updateTableStatus.title",
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
            "molecules": [
              {
                "id": "mol-update-table-status-form",
                "type": "form",
                "order": 10,
                "titleKey": "dineInOrderLifecycle.updateTableStatus.form.title",
                "fields": [
                  {
                    "id": "fld-update-table-status",
                    "field": "status",
                    "labelKey": "dineInOrderLifecycle.fields.tableStatus",
                    "order": 10,
                    "required": true,
                    "inputType": "select"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "mol-update-table-status-actions",
                "type": "actionBar",
                "order": 20,
                "titleKey": "dineInOrderLifecycle.updateTableStatus.actions.title",
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act-update-table-status-submit",
                    "action": "updateTableStatus",
                    "labelKey": "dineInOrderLifecycle.actions.updateTableStatus",
                    "order": 10,
                    "displayHint": "primary"
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
    "dineInOrderLifecycle.section.title": "Ciclo de pedido (mesa)",
    "dineInOrderLifecycle.createOrder.title": "Criar pedido",
    "dineInOrderLifecycle.createOrder.form.title": "Dados do pedido",
    "dineInOrderLifecycle.createOrder.actions.title": "Ações do pedido",
    "dineInOrderLifecycle.addOrderItem.title": "Adicionar item ao pedido",
    "dineInOrderLifecycle.addOrderItem.form.title": "Dados do item",
    "dineInOrderLifecycle.addOrderItem.actions.title": "Ações do item",
    "dineInOrderLifecycle.createKitchenTicket.title": "Criar ticket de cozinha",
    "dineInOrderLifecycle.createKitchenTicket.form.title": "Dados do ticket",
    "dineInOrderLifecycle.createKitchenTicket.actions.title": "Ações do ticket",
    "dineInOrderLifecycle.updateOrderStatus.title": "Atualizar status do pedido",
    "dineInOrderLifecycle.updateOrderStatus.summary.title": "Resumo do pedido",
    "dineInOrderLifecycle.updateOrderStatus.form.title": "Atualização de status",
    "dineInOrderLifecycle.updateOrderStatus.actions.title": "Ações de status",
    "dineInOrderLifecycle.updateTableStatus.title": "Atualizar ocupação da mesa",
    "dineInOrderLifecycle.updateTableStatus.form.title": "Status da mesa",
    "dineInOrderLifecycle.updateTableStatus.actions.title": "Ações da mesa",
    "dineInOrderLifecycle.fields.orderType": "Tipo de pedido",
    "dineInOrderLifecycle.fields.status": "Status do pedido",
    "dineInOrderLifecycle.fields.totalAmount": "Total",
    "dineInOrderLifecycle.fields.notes": "Observações",
    "dineInOrderLifecycle.fields.customerName": "Nome do cliente",
    "dineInOrderLifecycle.fields.customerPhone": "Telefone do cliente",
    "dineInOrderLifecycle.fields.numberOfGuests": "Número de pessoas",
    "dineInOrderLifecycle.fields.closedAt": "Fechado em",
    "dineInOrderLifecycle.fields.cancelledAt": "Cancelado em",
    "dineInOrderLifecycle.fields.cancellationReason": "Motivo do cancelamento",
    "dineInOrderLifecycle.fields.quantity": "Quantidade",
    "dineInOrderLifecycle.fields.unitPrice": "Preço unitário",
    "dineInOrderLifecycle.fields.totalPrice": "Preço total",
    "dineInOrderLifecycle.fields.observations": "Observações do item",
    "dineInOrderLifecycle.fields.itemStatus": "Status do item",
    "dineInOrderLifecycle.fields.kitchenTicketStatus": "Status do ticket",
    "dineInOrderLifecycle.fields.tableId": "Mesa",
    "dineInOrderLifecycle.fields.tableStatus": "Status da mesa",
    "dineInOrderLifecycle.actions.createOrder": "Criar pedido",
    "dineInOrderLifecycle.actions.addOrderItem": "Adicionar item",
    "dineInOrderLifecycle.actions.createKitchenTicket": "Enviar para cozinha",
    "dineInOrderLifecycle.actions.updateOrderStatus": "Atualizar status",
    "dineInOrderLifecycle.actions.updateTableStatus": "Atualizar mesa"
  },
  "dataBindings": [
    {
      "id": "bind-create-order",
      "source": "bffCommand",
      "command": "createOrder",
      "description": "Criar pedido"
    },
    {
      "id": "bind-add-order-item",
      "source": "bffCommand",
      "command": "addOrderItem",
      "description": "Adicionar item ao pedido"
    },
    {
      "id": "bind-create-kitchen-ticket",
      "source": "bffCommand",
      "command": "createKitchenTicket",
      "description": "Criar ticket de cozinha"
    },
    {
      "id": "bind-update-order-status",
      "source": "bffCommand",
      "command": "updateOrderStatus",
      "description": "Atualizar status do pedido"
    },
    {
      "id": "bind-update-table-status",
      "source": "bffCommand",
      "command": "updateTableStatus",
      "description": "Atualizar ocupação da mesa"
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
