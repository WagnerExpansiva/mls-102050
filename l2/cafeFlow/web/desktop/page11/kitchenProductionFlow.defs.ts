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
      "id": "sec_kitchenProductionFlow",
      "type": "section",
      "sectionName": "Fluxo de produção da cozinha",
      "titleKey": "section.kitchenProductionFlow.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org_viewKitchenTickets",
          "type": "queryOrganism",
          "organismName": "ViewKitchenTickets",
          "titleKey": "organism.viewKitchenTickets.title",
          "purpose": "Consultar tickets da cozinha pendentes para produção",
          "userActions": [
            "viewKitchenTickets"
          ],
          "requiredEntities": [
            "KitchenTicket"
          ],
          "readsFields": [
            "KitchenTicket.kitchenTicketId",
            "KitchenTicket.orderId",
            "KitchenTicket.status",
            "KitchenTicket.createdAt",
            "KitchenTicket.updatedAt"
          ],
          "writesFields": [],
          "rulesApplied": [],
          "order": 10,
          "moleculeRefs": [
            {
              "id": "mol_ticketFilters",
              "type": "filterBar",
              "stateKey": "ui.kitchenProductionFlow.data.viewKitchenTickets",
              "order": 10
            },
            {
              "id": "mol_ticketTable",
              "type": "groupviewtable.mlDataTable",
              "stateKey": "ui.kitchenProductionFlow.data.viewKitchenTickets",
              "order": 20
            }
          ]
        },
        {
          "id": "org_updateKitchenTicketStatus",
          "type": "actionOrganism",
          "organismName": "UpdateKitchenTicketStatus",
          "titleKey": "organism.updateKitchenTicketStatus.title",
          "purpose": "Atualizar status do ticket de cozinha conforme preparo",
          "userActions": [
            "updateKitchenTicketStatus"
          ],
          "requiredEntities": [
            "KitchenTicket"
          ],
          "readsFields": [
            "KitchenTicket.status",
            "KitchenTicket.kitchenTicketId",
            "KitchenTicket.orderId",
            "KitchenTicket.createdAt"
          ],
          "writesFields": [
            "KitchenTicket.status",
            "KitchenTicket.updatedAt"
          ],
          "rulesApplied": [
            "orderStatusTransitions"
          ],
          "order": 20,
          "moleculeRefs": [
            {
              "id": "mol_ticketSummary",
              "type": "summaryPanel",
              "stateKey": "selectedKitchenTicket",
              "order": 10
            },
            {
              "id": "mol_ticketActionBar",
              "type": "actionBar",
              "stateKey": "selectedKitchenTicket.status",
              "order": 20
            }
          ]
        },
        {
          "id": "org_updateOrderItemStatus",
          "type": "actionOrganism",
          "organismName": "UpdateOrderItemStatus",
          "titleKey": "organism.updateOrderItemStatus.title",
          "purpose": "Atualizar status dos itens do pedido sincronizando cozinha e POS",
          "userActions": [
            "updateOrderItemStatus"
          ],
          "requiredEntities": [
            "OrderItem"
          ],
          "readsFields": [
            "OrderItem.status",
            "OrderItem.id",
            "OrderItem.menuItemId",
            "OrderItem.quantity",
            "OrderItem.observations",
            "OrderItem.kitchenTicketId"
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
          "moleculeRefs": [
            {
              "id": "mol_orderItemTable",
              "type": "groupviewtable.mlDataTable",
              "stateKey": "orderItemList",
              "order": 10
            },
            {
              "id": "mol_orderItemActionBar",
              "type": "actionBar",
              "stateKey": "selectedOrderItem.status",
              "order": 20
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "kitchenProductionFlow.default",
    "type": "page",
    "sections": [
      {
        "id": "sec_kitchenProductionFlow",
        "type": "section",
        "sectionName": "Fluxo de produção da cozinha",
        "titleKey": "section.kitchenProductionFlow.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org_viewKitchenTickets",
            "type": "queryOrganism",
            "organismName": "ViewKitchenTickets",
            "titleKey": "organism.viewKitchenTickets.title",
            "purpose": "Consultar tickets da cozinha pendentes para produção",
            "userActions": [
              "viewKitchenTickets"
            ],
            "requiredEntities": [
              "KitchenTicket"
            ],
            "readsFields": [
              "KitchenTicket.kitchenTicketId",
              "KitchenTicket.orderId",
              "KitchenTicket.status",
              "KitchenTicket.createdAt",
              "KitchenTicket.updatedAt"
            ],
            "writesFields": [],
            "rulesApplied": [],
            "order": 10,
            "molecules": [
              {
                "id": "mol_ticketFilters",
                "type": "filterBar",
                "order": 10,
                "fields": [],
                "columns": [],
                "filters": [
                  {
                    "id": "flt_status",
                    "field": "status",
                    "labelKey": "filter.status.label",
                    "order": 10,
                    "required": false,
                    "inputType": "select",
                    "source": "KitchenTicket.status",
                    "stateKey": "ui.kitchenProductionFlow.input.viewKitchenTickets.status"
                  },
                  {
                    "id": "flt_orderId",
                    "field": "orderId",
                    "labelKey": "filter.orderId.label",
                    "order": 20,
                    "required": false,
                    "inputType": "text",
                    "source": "KitchenTicket.orderId",
                    "stateKey": "ui.kitchenProductionFlow.input.viewKitchenTickets.orderId"
                  }
                ],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act_applyFilters",
                    "action": "viewKitchenTickets",
                    "labelKey": "action.applyFilters.label",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "viewKitchenTickets"
                  }
                ],
                "stateKey": "ui.kitchenProductionFlow.data.viewKitchenTickets"
              },
              {
                "id": "mol_ticketTable",
                "type": "groupviewtable.mlDataTable",
                "order": 20,
                "binding": "viewKitchenTickets",
                "emptyKey": "empty.tickets.label",
                "stateKey": "ui.kitchenProductionFlow.data.viewKitchenTickets",
                "fields": [],
                "columns": [
                  {
                    "id": "col_kitchenTicketId",
                    "field": "kitchenTicketId",
                    "labelKey": "column.kitchenTicketId.label",
                    "order": 10,
                    "required": false,
                    "source": "KitchenTicket.kitchenTicketId",
                    "stateKey": "ui.kitchenProductionFlow.data.viewKitchenTickets"
                  },
                  {
                    "id": "col_orderId",
                    "field": "orderId",
                    "labelKey": "column.orderId.label",
                    "order": 20,
                    "required": false,
                    "source": "KitchenTicket.orderId",
                    "stateKey": "ui.kitchenProductionFlow.data.viewKitchenTickets"
                  },
                  {
                    "id": "col_status",
                    "field": "status",
                    "labelKey": "column.status.label",
                    "order": 30,
                    "required": false,
                    "source": "KitchenTicket.status",
                    "stateKey": "ui.kitchenProductionFlow.data.viewKitchenTickets"
                  },
                  {
                    "id": "col_createdAt",
                    "field": "createdAt",
                    "labelKey": "column.createdAt.label",
                    "order": 40,
                    "required": false,
                    "format": "datetime",
                    "source": "KitchenTicket.createdAt",
                    "stateKey": "ui.kitchenProductionFlow.data.viewKitchenTickets"
                  },
                  {
                    "id": "col_updatedAt",
                    "field": "updatedAt",
                    "labelKey": "column.updatedAt.label",
                    "order": 50,
                    "required": false,
                    "format": "datetime",
                    "source": "KitchenTicket.updatedAt",
                    "stateKey": "ui.kitchenProductionFlow.data.viewKitchenTickets"
                  }
                ],
                "filters": [],
                "toolbar": [
                  {
                    "id": "tb_refreshTickets",
                    "action": "viewKitchenTickets",
                    "labelKey": "toolbar.refresh.label",
                    "order": 10,
                    "displayHint": "ghost",
                    "actionKey": "viewKitchenTickets"
                  }
                ],
                "rowActions": [
                  {
                    "id": "ra_selectTicket",
                    "action": "viewKitchenTickets",
                    "labelKey": "rowAction.selectTicket.label",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "viewKitchenTickets"
                  }
                ],
                "actions": []
              }
            ]
          },
          {
            "id": "org_updateKitchenTicketStatus",
            "type": "actionOrganism",
            "organismName": "UpdateKitchenTicketStatus",
            "titleKey": "organism.updateKitchenTicketStatus.title",
            "purpose": "Atualizar status do ticket de cozinha conforme preparo",
            "userActions": [
              "updateKitchenTicketStatus"
            ],
            "requiredEntities": [
              "KitchenTicket"
            ],
            "readsFields": [
              "KitchenTicket.status",
              "KitchenTicket.kitchenTicketId",
              "KitchenTicket.orderId",
              "KitchenTicket.createdAt"
            ],
            "writesFields": [
              "KitchenTicket.status",
              "KitchenTicket.updatedAt"
            ],
            "rulesApplied": [
              "orderStatusTransitions"
            ],
            "order": 20,
            "molecules": [
              {
                "id": "mol_ticketSummary",
                "type": "summaryPanel",
                "order": 10,
                "emptyKey": "empty.selectedTicket.label",
                "stateKey": "selectedKitchenTicket",
                "fields": [
                  {
                    "id": "sf_kitchenTicketId",
                    "field": "kitchenTicketId",
                    "labelKey": "field.kitchenTicketId.label",
                    "order": 10,
                    "required": false,
                    "source": "KitchenTicket.kitchenTicketId",
                    "stateKey": "ui.kitchenProductionFlow.input.updateKitchenTicketStatus.kitchenTicketId"
                  },
                  {
                    "id": "sf_orderId",
                    "field": "orderId",
                    "labelKey": "field.orderId.label",
                    "order": 20,
                    "required": false,
                    "source": "KitchenTicket.orderId",
                    "stateKey": "ui.kitchenProductionFlow.input.updateKitchenTicketStatus.orderId"
                  },
                  {
                    "id": "sf_status",
                    "field": "status",
                    "labelKey": "field.status.label",
                    "order": 30,
                    "required": false,
                    "source": "KitchenTicket.status",
                    "stateKey": "ui.kitchenProductionFlow.input.updateKitchenTicketStatus.status"
                  },
                  {
                    "id": "sf_createdAt",
                    "field": "createdAt",
                    "labelKey": "field.createdAt.label",
                    "order": 40,
                    "required": false,
                    "format": "datetime",
                    "source": "KitchenTicket.createdAt",
                    "stateKey": "ui.kitchenProductionFlow.input.updateKitchenTicketStatus.createdAt"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "mol_ticketActionBar",
                "type": "actionBar",
                "order": 20,
                "stateKey": "selectedKitchenTicket.status",
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act_startPreparation",
                    "action": "updateKitchenTicketStatus",
                    "labelKey": "action.startPreparation.label",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "updateKitchenTicketStatus"
                  },
                  {
                    "id": "act_finishPreparation",
                    "action": "updateKitchenTicketStatus",
                    "labelKey": "action.finishPreparation.label",
                    "order": 20,
                    "displayHint": "primary",
                    "actionKey": "updateKitchenTicketStatus"
                  },
                  {
                    "id": "act_cancelTicket",
                    "action": "updateKitchenTicketStatus",
                    "labelKey": "action.cancelTicket.label",
                    "order": 30,
                    "displayHint": "danger",
                    "actionKey": "updateKitchenTicketStatus"
                  }
                ]
              }
            ]
          },
          {
            "id": "org_updateOrderItemStatus",
            "type": "actionOrganism",
            "organismName": "UpdateOrderItemStatus",
            "titleKey": "organism.updateOrderItemStatus.title",
            "purpose": "Atualizar status dos itens do pedido sincronizando cozinha e POS",
            "userActions": [
              "updateOrderItemStatus"
            ],
            "requiredEntities": [
              "OrderItem"
            ],
            "readsFields": [
              "OrderItem.status",
              "OrderItem.id",
              "OrderItem.menuItemId",
              "OrderItem.quantity",
              "OrderItem.observations",
              "OrderItem.kitchenTicketId"
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
            "molecules": [
              {
                "id": "mol_orderItemTable",
                "type": "groupviewtable.mlDataTable",
                "order": 10,
                "binding": "viewKitchenTickets",
                "emptyKey": "empty.orderItems.label",
                "stateKey": "orderItemList",
                "fields": [],
                "columns": [
                  {
                    "id": "col_itemId",
                    "field": "id",
                    "labelKey": "column.itemId.label",
                    "order": 10,
                    "required": false,
                    "source": "OrderItem.id",
                    "stateKey": "ui.kitchenProductionFlow.data.updateOrderItemStatus"
                  },
                  {
                    "id": "col_menuItemId",
                    "field": "menuItemId",
                    "labelKey": "column.menuItemId.label",
                    "order": 20,
                    "required": false,
                    "source": "OrderItem.menuItemId",
                    "stateKey": "ui.kitchenProductionFlow.data.updateOrderItemStatus"
                  },
                  {
                    "id": "col_quantity",
                    "field": "quantity",
                    "labelKey": "column.quantity.label",
                    "order": 30,
                    "required": false,
                    "source": "OrderItem.quantity",
                    "stateKey": "ui.kitchenProductionFlow.data.updateOrderItemStatus"
                  },
                  {
                    "id": "col_observations",
                    "field": "observations",
                    "labelKey": "column.observations.label",
                    "order": 40,
                    "required": false,
                    "source": "OrderItem.observations",
                    "stateKey": "ui.kitchenProductionFlow.data.updateOrderItemStatus"
                  },
                  {
                    "id": "col_itemStatus",
                    "field": "status",
                    "labelKey": "column.itemStatus.label",
                    "order": 50,
                    "required": false,
                    "source": "OrderItem.status",
                    "stateKey": "ui.kitchenProductionFlow.data.updateOrderItemStatus"
                  },
                  {
                    "id": "col_itemUpdatedAt",
                    "field": "updatedAt",
                    "labelKey": "column.itemUpdatedAt.label",
                    "order": 60,
                    "required": false,
                    "format": "datetime",
                    "source": "OrderItem.updatedAt",
                    "stateKey": "ui.kitchenProductionFlow.data.updateOrderItemStatus"
                  }
                ],
                "filters": [],
                "toolbar": [],
                "rowActions": [
                  {
                    "id": "ra_selectItem",
                    "action": "updateOrderItemStatus",
                    "labelKey": "rowAction.selectItem.label",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "updateOrderItemStatus"
                  }
                ],
                "actions": []
              },
              {
                "id": "mol_orderItemActionBar",
                "type": "actionBar",
                "order": 20,
                "stateKey": "selectedOrderItem.status",
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act_markInPreparation",
                    "action": "updateOrderItemStatus",
                    "labelKey": "action.markInPreparation.label",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "updateOrderItemStatus"
                  },
                  {
                    "id": "act_markReady",
                    "action": "updateOrderItemStatus",
                    "labelKey": "action.markReady.label",
                    "order": 20,
                    "displayHint": "primary",
                    "actionKey": "updateOrderItemStatus"
                  },
                  {
                    "id": "act_markServed",
                    "action": "updateOrderItemStatus",
                    "labelKey": "action.markServed.label",
                    "order": 30,
                    "displayHint": "primary",
                    "actionKey": "updateOrderItemStatus"
                  },
                  {
                    "id": "act_cancelItem",
                    "action": "updateOrderItemStatus",
                    "labelKey": "action.cancelItem.label",
                    "order": 40,
                    "displayHint": "danger",
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
  "i18n": {
    "section.kitchenProductionFlow.title": "Fluxo de produção da cozinha",
    "organism.viewKitchenTickets.title": "Fila de Tickets da Cozinha",
    "organism.updateKitchenTicketStatus.title": "Atualizar Status do Ticket",
    "organism.updateOrderItemStatus.title": "Itens do Pedido",
    "filter.status.label": "Status",
    "filter.orderId.label": "Pedido",
    "action.applyFilters.label": "Filtrar",
    "column.kitchenTicketId.label": "Ticket",
    "column.orderId.label": "Pedido",
    "column.status.label": "Status",
    "column.createdAt.label": "Criado em",
    "column.updatedAt.label": "Atualizado em",
    "toolbar.refresh.label": "Atualizar",
    "rowAction.selectTicket.label": "Selecionar",
    "empty.tickets.label": "Nenhum ticket encontrado",
    "field.kitchenTicketId.label": "Ticket",
    "field.orderId.label": "Pedido",
    "field.status.label": "Status atual",
    "field.createdAt.label": "Criado em",
    "empty.selectedTicket.label": "Selecione um ticket para visualizar detalhes",
    "action.startPreparation.label": "Iniciar Preparo",
    "action.finishPreparation.label": "Finalizar Preparo",
    "action.cancelTicket.label": "Cancelar Ticket",
    "column.itemId.label": "Item",
    "column.menuItemId.label": "Produto",
    "column.quantity.label": "Qtd",
    "column.observations.label": "Observações",
    "column.itemStatus.label": "Status",
    "column.itemUpdatedAt.label": "Atualizado em",
    "rowAction.selectItem.label": "Selecionar",
    "empty.orderItems.label": "Nenhum item encontrado para este ticket",
    "action.markInPreparation.label": "Em Preparo",
    "action.markReady.label": "Pronto",
    "action.markServed.label": "Servido",
    "action.cancelItem.label": "Cancelar Item"
  },
  "dataBindings": [
    {
      "id": "bind_viewKitchenTickets",
      "source": "viewKitchenTickets",
      "entity": "KitchenTicket",
      "command": "viewKitchenTickets",
      "description": "Consulta tickets da cozinha com filtros opcionais por status e orderId",
      "stateKey": "ui.kitchenProductionFlow.data.viewKitchenTickets",
      "inputStateKeys": [
        "ui.kitchenProductionFlow.input.viewKitchenTickets.kitchenTicketId",
        "ui.kitchenProductionFlow.input.viewKitchenTickets.orderId",
        "ui.kitchenProductionFlow.input.viewKitchenTickets.status",
        "ui.kitchenProductionFlow.input.viewKitchenTickets.createdAt",
        "ui.kitchenProductionFlow.input.viewKitchenTickets.updatedAt"
      ]
    },
    {
      "id": "bind_updateKitchenTicketStatus",
      "source": "updateKitchenTicketStatus",
      "entity": "KitchenTicket",
      "command": "updateKitchenTicketStatus",
      "description": "Atualiza o status do ticket de cozinha selecionado conforme transições do workflow",
      "stateKey": "ui.kitchenProductionFlow.data.updateKitchenTicketStatus",
      "inputStateKeys": [
        "ui.kitchenProductionFlow.input.updateKitchenTicketStatus.status"
      ]
    },
    {
      "id": "bind_updateOrderItemStatus",
      "source": "updateOrderItemStatus",
      "entity": "OrderItem",
      "command": "updateOrderItemStatus",
      "description": "Atualiza o status do item do pedido selecionado sincronizando cozinha e POS",
      "stateKey": "ui.kitchenProductionFlow.data.updateOrderItemStatus",
      "inputStateKeys": [
        "ui.kitchenProductionFlow.input.updateOrderItemStatus.status"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "kitchenProductionFlow__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/kitchenProductionFlow.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/kitchenProductionFlow.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/kitchenProductionFlow.ts",
      "_102050_/l2/cafeFlow/web/contracts/kitchenProductionFlow.ts"
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
