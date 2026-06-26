/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/viewOperationalDashboard.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "viewOperationalDashboard",
  "pageName": "Ver dashboard operacional do dia",
  "actor": "manager",
  "purpose": "Executar Ver dashboard operacional do dia.",
  "capabilities": [
    "viewOperationalDashboard"
  ],
  "flowRefs": {
    "experienceFlows": [],
    "entityLifecycles": [],
    "taskWorkflows": [],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "sec_dashboard",
      "type": "section",
      "sectionName": "Ver dashboard operacional do dia",
      "titleKey": "page.viewOperationalDashboard.title",
      "mode": "view",
      "order": 10,
      "organisms": [
        {
          "id": "org_dashboard_main",
          "type": "dashboardView",
          "organismName": "ViewOperationalDashboard",
          "titleKey": "organism.viewOperationalDashboard.title",
          "purpose": "Ver dashboard operacional do dia: exibir resumo do turno, vendas, pedidos, pagamentos e movimentos de caixa.",
          "userActions": [
            "viewOperationalDashboard"
          ],
          "requiredEntities": [
            "DailyShift",
            "Order",
            "Payment",
            "CashMovement"
          ],
          "readsFields": [
            "dailyShiftId",
            "shiftDate",
            "status",
            "openedAt",
            "closedAt",
            "openingCashBalance",
            "closingCashBalance",
            "totalSales",
            "totalPayments",
            "orderId",
            "orderType",
            "totalAmount",
            "customerName",
            "paymentId",
            "method",
            "amount",
            "cashMovementId",
            "movementType",
            "reason",
            "createdAt",
            "updatedAt"
          ],
          "writesFields": [],
          "rulesApplied": [
            "paymentTimingByOrderType",
            "aiOutputLanguageSelection"
          ],
          "order": 10,
          "moleculeRefs": [
            {
              "id": "mol_shift_filters",
              "type": "filterBar",
              "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard",
              "order": 10
            },
            {
              "id": "mol_shift_summary",
              "type": "summaryPanel",
              "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard",
              "order": 20
            },
            {
              "id": "mol_orders_table",
              "type": "groupviewtable.mlDataTable",
              "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard",
              "order": 30
            },
            {
              "id": "mol_payments_table",
              "type": "groupviewtable.mlDataTable",
              "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard",
              "order": 40
            },
            {
              "id": "mol_cashmovements_table",
              "type": "groupviewtable.mlDataTable",
              "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard",
              "order": 50
            },
            {
              "id": "mol_dashboard_actionbar",
              "type": "actionBar",
              "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard",
              "order": 60
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "viewOperationalDashboard_default",
    "type": "page",
    "sections": [
      {
        "id": "sec_dashboard",
        "type": "section",
        "sectionName": "Ver dashboard operacional do dia",
        "titleKey": "page.viewOperationalDashboard.title",
        "mode": "view",
        "order": 10,
        "organisms": [
          {
            "id": "org_dashboard_main",
            "type": "dashboardView",
            "organismName": "ViewOperationalDashboard",
            "titleKey": "organism.viewOperationalDashboard.title",
            "purpose": "Ver dashboard operacional do dia: exibir resumo do turno, vendas, pedidos, pagamentos e movimentos de caixa.",
            "userActions": [
              "viewOperationalDashboard"
            ],
            "requiredEntities": [
              "DailyShift",
              "Order",
              "Payment",
              "CashMovement"
            ],
            "readsFields": [
              "dailyShiftId",
              "shiftDate",
              "status",
              "openedAt",
              "closedAt",
              "openingCashBalance",
              "closingCashBalance",
              "totalSales",
              "totalPayments",
              "orderId",
              "orderType",
              "totalAmount",
              "customerName",
              "paymentId",
              "method",
              "amount",
              "cashMovementId",
              "movementType",
              "reason",
              "createdAt",
              "updatedAt"
            ],
            "writesFields": [],
            "rulesApplied": [
              "paymentTimingByOrderType",
              "aiOutputLanguageSelection"
            ],
            "order": 10,
            "molecules": [
              {
                "id": "mol_shift_filters",
                "type": "filterBar",
                "order": 10,
                "fields": [],
                "columns": [],
                "filters": [
                  {
                    "id": "flt_shiftDate",
                    "field": "shiftDate",
                    "labelKey": "filter.shiftDate.label",
                    "order": 10,
                    "required": false,
                    "inputType": "date",
                    "format": "date",
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.shiftDate"
                  },
                  {
                    "id": "flt_status",
                    "field": "status",
                    "labelKey": "filter.status.label",
                    "order": 20,
                    "required": false,
                    "inputType": "select",
                    "source": "enum:open,closed",
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.status"
                  }
                ],
                "toolbar": [],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
              },
              {
                "id": "mol_shift_summary",
                "type": "summaryPanel",
                "order": 20,
                "fields": [
                  {
                    "id": "fld_shiftDate",
                    "field": "shiftDate",
                    "labelKey": "field.shiftDate.label",
                    "order": 10,
                    "required": false,
                    "format": "date",
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.shiftDate"
                  },
                  {
                    "id": "fld_status",
                    "field": "status",
                    "labelKey": "field.status.label",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.status"
                  },
                  {
                    "id": "fld_openedAt",
                    "field": "openedAt",
                    "labelKey": "field.openedAt.label",
                    "order": 30,
                    "required": false,
                    "format": "datetime",
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.openedAt"
                  },
                  {
                    "id": "fld_closedAt",
                    "field": "closedAt",
                    "labelKey": "field.closedAt.label",
                    "order": 40,
                    "required": false,
                    "format": "datetime",
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.closedAt"
                  },
                  {
                    "id": "fld_openingCashBalance",
                    "field": "openingCashBalance",
                    "labelKey": "field.openingCashBalance.label",
                    "order": 50,
                    "required": false,
                    "format": "money",
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.openingCashBalance"
                  },
                  {
                    "id": "fld_closingCashBalance",
                    "field": "closingCashBalance",
                    "labelKey": "field.closingCashBalance.label",
                    "order": 60,
                    "required": false,
                    "format": "money",
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.closingCashBalance"
                  },
                  {
                    "id": "fld_totalSales",
                    "field": "totalSales",
                    "labelKey": "field.totalSales.label",
                    "order": 70,
                    "required": false,
                    "format": "money",
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.totalSales"
                  },
                  {
                    "id": "fld_totalPayments",
                    "field": "totalPayments",
                    "labelKey": "field.totalPayments.label",
                    "order": 80,
                    "required": false,
                    "format": "money",
                    "stateKey": "ui.viewOperationalDashboard.input.viewOperationalDashboard.totalPayments"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
              },
              {
                "id": "mol_orders_table",
                "type": "groupviewtable.mlDataTable",
                "order": 30,
                "source": "viewOperationalDashboard.data.orders",
                "emptyKey": "empty.orders",
                "fields": [],
                "columns": [
                  {
                    "id": "col_orderId",
                    "field": "orderId",
                    "labelKey": "column.orderId.label",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
                  },
                  {
                    "id": "col_orderType",
                    "field": "orderType",
                    "labelKey": "column.orderType.label",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
                  },
                  {
                    "id": "col_orderStatus",
                    "field": "status",
                    "labelKey": "column.orderStatus.label",
                    "order": 30,
                    "required": false,
                    "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
                  },
                  {
                    "id": "col_totalAmount",
                    "field": "totalAmount",
                    "labelKey": "column.totalAmount.label",
                    "order": 40,
                    "required": false,
                    "format": "money",
                    "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
                  },
                  {
                    "id": "col_customerName",
                    "field": "customerName",
                    "labelKey": "column.customerName.label",
                    "order": 50,
                    "required": false,
                    "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
                  },
                  {
                    "id": "col_orderCreatedAt",
                    "field": "createdAt",
                    "labelKey": "column.orderCreatedAt.label",
                    "order": 60,
                    "required": false,
                    "format": "datetime",
                    "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
                  }
                ],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
              },
              {
                "id": "mol_payments_table",
                "type": "groupviewtable.mlDataTable",
                "order": 40,
                "source": "viewOperationalDashboard.data.payments",
                "emptyKey": "empty.payments",
                "fields": [],
                "columns": [
                  {
                    "id": "col_paymentId",
                    "field": "paymentId",
                    "labelKey": "column.paymentId.label",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
                  },
                  {
                    "id": "col_paymentMethod",
                    "field": "method",
                    "labelKey": "column.paymentMethod.label",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
                  },
                  {
                    "id": "col_paymentAmount",
                    "field": "amount",
                    "labelKey": "column.paymentAmount.label",
                    "order": 30,
                    "required": false,
                    "format": "money",
                    "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
                  },
                  {
                    "id": "col_paymentStatus",
                    "field": "status",
                    "labelKey": "column.paymentStatus.label",
                    "order": 40,
                    "required": false,
                    "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
                  },
                  {
                    "id": "col_paymentCreatedAt",
                    "field": "createdAt",
                    "labelKey": "column.paymentCreatedAt.label",
                    "order": 50,
                    "required": false,
                    "format": "datetime",
                    "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
                  }
                ],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
              },
              {
                "id": "mol_cashmovements_table",
                "type": "groupviewtable.mlDataTable",
                "order": 50,
                "source": "viewOperationalDashboard.data.cashMovements",
                "emptyKey": "empty.cashMovements",
                "fields": [],
                "columns": [
                  {
                    "id": "col_cashMovementId",
                    "field": "cashMovementId",
                    "labelKey": "column.cashMovementId.label",
                    "order": 10,
                    "required": false,
                    "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
                  },
                  {
                    "id": "col_movementType",
                    "field": "movementType",
                    "labelKey": "column.movementType.label",
                    "order": 20,
                    "required": false,
                    "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
                  },
                  {
                    "id": "col_movementAmount",
                    "field": "amount",
                    "labelKey": "column.movementAmount.label",
                    "order": 30,
                    "required": false,
                    "format": "money",
                    "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
                  },
                  {
                    "id": "col_movementReason",
                    "field": "reason",
                    "labelKey": "column.movementReason.label",
                    "order": 40,
                    "required": false,
                    "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
                  },
                  {
                    "id": "col_movementCreatedAt",
                    "field": "createdAt",
                    "labelKey": "column.movementCreatedAt.label",
                    "order": 50,
                    "required": false,
                    "format": "datetime",
                    "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
                  }
                ],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
              },
              {
                "id": "mol_dashboard_actionbar",
                "type": "actionBar",
                "order": 60,
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [
                  {
                    "id": "act_refresh",
                    "action": "viewOperationalDashboard",
                    "labelKey": "action.refreshDashboard.label",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "viewOperationalDashboard"
                  }
                ],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard"
              }
            ]
          }
        ]
      }
    ]
  },
  "i18n": {
    "page.viewOperationalDashboard.title": "Dashboard Operacional do Dia",
    "organism.viewOperationalDashboard.title": "Visão Operacional do Turno",
    "filter.shiftDate.label": "Data do Turno",
    "filter.status.label": "Status do Turno",
    "field.shiftDate.label": "Data",
    "field.status.label": "Status",
    "field.openedAt.label": "Aberto em",
    "field.closedAt.label": "Fechado em",
    "field.openingCashBalance.label": "Saldo Inicial",
    "field.closingCashBalance.label": "Saldo Final",
    "field.totalSales.label": "Total de Vendas",
    "field.totalPayments.label": "Total de Pagamentos",
    "column.orderId.label": "Pedido",
    "column.orderType.label": "Tipo",
    "column.orderStatus.label": "Status",
    "column.totalAmount.label": "Valor Total",
    "column.customerName.label": "Cliente",
    "column.orderCreatedAt.label": "Criado em",
    "column.paymentId.label": "Pagamento",
    "column.paymentMethod.label": "Método",
    "column.paymentAmount.label": "Valor",
    "column.paymentStatus.label": "Status",
    "column.paymentCreatedAt.label": "Criado em",
    "column.cashMovementId.label": "Movimento",
    "column.movementType.label": "Tipo",
    "column.movementAmount.label": "Valor",
    "column.movementReason.label": "Motivo",
    "column.movementCreatedAt.label": "Criado em",
    "empty.orders": "Nenhum pedido encontrado para este turno.",
    "empty.payments": "Nenhum pagamento encontrado para este turno.",
    "empty.cashMovements": "Nenhum movimento de caixa encontrado para este turno.",
    "action.refreshDashboard.label": "Atualizar Dashboard"
  },
  "dataBindings": [
    {
      "id": "bind_viewOperationalDashboard",
      "source": "bff",
      "entity": "DailyShift",
      "command": "viewOperationalDashboard",
      "description": "Carrega dados do dashboard operacional: resumo do turno, pedidos, pagamentos e movimentos de caixa.",
      "stateKey": "ui.viewOperationalDashboard.data.viewOperationalDashboard",
      "inputStateKeys": [
        "ui.viewOperationalDashboard.input.viewOperationalDashboard.dailyShiftId",
        "ui.viewOperationalDashboard.input.viewOperationalDashboard.shiftDate",
        "ui.viewOperationalDashboard.input.viewOperationalDashboard.status",
        "ui.viewOperationalDashboard.input.viewOperationalDashboard.openedAt",
        "ui.viewOperationalDashboard.input.viewOperationalDashboard.closedAt",
        "ui.viewOperationalDashboard.input.viewOperationalDashboard.createdAt"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "viewOperationalDashboard__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/viewOperationalDashboard.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/viewOperationalDashboard.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/viewOperationalDashboard.ts",
      "_102050_/l2/cafeFlow/web/contracts/viewOperationalDashboard.ts"
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
