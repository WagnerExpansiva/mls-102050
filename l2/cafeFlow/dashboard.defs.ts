/// <mls fileReference="_102050_/l2/cafeFlow/dashboard.defs.ts" enhancement="_blank"/>

export const dashboardPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "dashboard",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 72,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "dashboard",
      "pageName": "Dashboard de Métricas",
      "actor": "managerOwner",
      "purpose": "Acompanhar vendas do dia, itens mais vendidos e alertas de estoque baixo.",
      "capabilities": [
        "viewDashboard"
      ],
      "flowRefs": {
        "experienceFlows": [],
        "entityLifecycles": [],
        "taskWorkflows": [],
        "automations": []
      },
      "pluginRefs": [],
      "mdmRefs": [
        "order",
        "stock",
        "dailyShift",
        "menu"
      ],
      "pageInputs": [
        {
          "name": "periodStart",
          "type": "date",
          "required": false,
          "sources": [
            "queryParam"
          ],
          "description": "Data inicial do período para filtrar métricas."
        },
        {
          "name": "periodEnd",
          "type": "date",
          "required": false,
          "sources": [
            "queryParam"
          ],
          "description": "Data final do período para filtrar métricas."
        },
        {
          "name": "aggregationWindow",
          "type": "string",
          "required": false,
          "sources": [
            "queryParam"
          ],
          "description": "Janela de agregação das métricas (ex.: 1 hour, 1 day)."
        }
      ],
      "navigationRefs": [],
      "sections": [
        {
          "sectionName": "Filtros de Período",
          "mode": "filter",
          "organisms": [
            {
              "organismName": "FiltroPeriodoMetrica",
              "purpose": "Definir período e janela de agregação para atualizar os indicadores do dashboard.",
              "userActions": [
                "Selecionar período",
                "Selecionar janela de agregação",
                "Aplicar filtros"
              ],
              "requiredEntities": [],
              "readsFields": [
                "periodStart",
                "periodEnd",
                "aggregationWindow"
              ],
              "writesFields": [
                "periodStart",
                "periodEnd",
                "aggregationWindow"
              ],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Resumo de Vendas do Dia",
          "mode": "view",
          "organisms": [
            {
              "organismName": "CardsResumoVendas",
              "purpose": "Exibir receita total, volume de pedidos e itens vendidos no período.",
              "userActions": [
                "Visualizar totais",
                "Detalhar indicador"
              ],
              "requiredEntities": [
                "metricasCafeFlow"
              ],
              "readsFields": [
                "totalRevenue",
                "orderCount",
                "itemsSold",
                "periodStart",
                "periodEnd"
              ],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Itens Mais Vendidos",
          "mode": "view",
          "organisms": [
            {
              "organismName": "RankingItensVendidos",
              "purpose": "Mostrar itens mais vendidos e indicadores por período.",
              "userActions": [
                "Visualizar ranking",
                "Detalhar indicador"
              ],
              "requiredEntities": [
                "metricasCafeFlow",
                "cardapioAggregate"
              ],
              "readsFields": [
                "menuItemId",
                "quantitySold",
                "revenue",
                "orderCount",
                "periodStart",
                "periodEnd"
              ],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Alertas de Estoque Baixo",
          "mode": "view",
          "organisms": [
            {
              "organismName": "ListaAlertasEstoque",
              "purpose": "Exibir alertas de estoque baixo para reposição.",
              "userActions": [
                "Visualizar alertas",
                "Detalhar indicador"
              ],
              "requiredEntities": [
                "metricasCafeFlow",
                "estoqueAggregate"
              ],
              "readsFields": [
                "stockItemId",
                "currentQuantity",
                "reorderLevel",
                "lowStockAlertCount",
                "periodStart",
                "periodEnd"
              ],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Sugestões para Promover",
          "mode": "view",
          "organisms": [
            {
              "organismName": "SugestoesPromocao",
              "purpose": "Apresentar sugestões de itens para promover com base nas métricas.",
              "userActions": [
                "Visualizar sugestões",
                "Detalhar indicador"
              ],
              "requiredEntities": [
                "metricasCafeFlow",
                "cardapioAggregate"
              ],
              "readsFields": [
                "menuItemId",
                "quantitySold",
                "revenue",
                "suggestedAction",
                "periodStart",
                "periodEnd"
              ],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        }
      ]
    },
    "bffCommands": [
      {
        "commandName": "gerarResumoVendasDia",
        "purpose": "Carregar métricas de vendas do dia para o dashboard.",
        "kind": "query",
        "input": [
          {
            "name": "periodStart",
            "type": "date",
            "required": false
          },
          {
            "name": "periodEnd",
            "type": "date",
            "required": false
          },
          {
            "name": "aggregationWindow",
            "type": "string",
            "required": false
          }
        ],
        "output": [
          {
            "name": "totalRevenue",
            "type": "number"
          },
          {
            "name": "orderCount",
            "type": "number"
          },
          {
            "name": "itemsSold",
            "type": "number"
          },
          {
            "name": "periodStart",
            "type": "date"
          },
          {
            "name": "periodEnd",
            "type": "date"
          }
        ],
        "readsEntities": [
          "metricasCafeFlow"
        ],
        "writesEntities": [],
        "readsTables": [
          "today_sales_metrics"
        ],
        "writesTables": [],
        "usecaseRefs": [
          "gerarResumoVendasDia"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": []
      },
      {
        "commandName": "listarAlertasEstoqueBaixo",
        "purpose": "Carregar alertas de estoque baixo para o dashboard.",
        "kind": "query",
        "input": [
          {
            "name": "periodStart",
            "type": "date",
            "required": false
          },
          {
            "name": "periodEnd",
            "type": "date",
            "required": false
          }
        ],
        "output": [
          {
            "name": "stockItemId",
            "type": "string"
          },
          {
            "name": "currentQuantity",
            "type": "number"
          },
          {
            "name": "reorderLevel",
            "type": "number"
          },
          {
            "name": "lowStockAlertCount",
            "type": "number"
          },
          {
            "name": "periodStart",
            "type": "date"
          },
          {
            "name": "periodEnd",
            "type": "date"
          }
        ],
        "readsEntities": [
          "metricasCafeFlow",
          "estoqueAggregate"
        ],
        "writesEntities": [],
        "readsTables": [
          "low_stock_metrics"
        ],
        "writesTables": [],
        "usecaseRefs": [
          "listarAlertasEstoqueBaixo"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": []
      },
      {
        "commandName": "sugerirItensParaPromover",
        "purpose": "Carregar ranking de itens mais vendidos e sugestões para promover.",
        "kind": "query",
        "input": [
          {
            "name": "periodStart",
            "type": "date",
            "required": false
          },
          {
            "name": "periodEnd",
            "type": "date",
            "required": false
          },
          {
            "name": "aggregationWindow",
            "type": "string",
            "required": false
          }
        ],
        "output": [
          {
            "name": "menuItemId",
            "type": "string"
          },
          {
            "name": "quantitySold",
            "type": "number"
          },
          {
            "name": "revenue",
            "type": "number"
          },
          {
            "name": "orderCount",
            "type": "number"
          },
          {
            "name": "suggestedAction",
            "type": "string"
          },
          {
            "name": "periodStart",
            "type": "date"
          },
          {
            "name": "periodEnd",
            "type": "date"
          }
        ],
        "readsEntities": [
          "metricasCafeFlow",
          "cardapioAggregate"
        ],
        "writesEntities": [],
        "readsTables": [
          "top_selling_items_metrics"
        ],
        "writesTables": [],
        "usecaseRefs": [
          "sugerirItensParaPromover"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": []
      }
    ]
  }
} as const;

export default dashboardPagePlan;
