/// <mls fileReference="_102050_/l2/cafeFlow/posOrder.defs.ts" enhancement="_blank"/>

export const posOrderPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "posOrder",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 71,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "posOrder",
      "pageName": "POS de Pedidos",
      "actor": "attendantCashier",
      "purpose": "Registrar pedidos rápidos no balcão, selecionar itens e confirmar envio para a cozinha.",
      "capabilities": [
        "createOrder"
      ],
      "flowRefs": {
        "experienceFlows": [],
        "entityLifecycles": [],
        "taskWorkflows": [
          "workflowOrderLifecycle"
        ],
        "automations": []
      },
      "pluginRefs": [],
      "mdmRefs": [
        "order",
        "menu"
      ],
      "pageInputs": [],
      "navigationRefs": [
        {
          "direction": "inbound",
          "pageId": "shiftOpen",
          "trigger": "Turno aberto"
        },
        {
          "direction": "outbound",
          "pageId": "kitchenDisplay",
          "trigger": "Pedido confirmado"
        }
      ],
      "sections": [
        {
          "sectionName": "Seleção do Cardápio",
          "mode": "create",
          "organisms": [
            {
              "organismName": "MenuCategorySelector",
              "purpose": "Navegar pelas categorias do cardápio.",
              "userActions": [
                "Selecionar categoria",
                "Filtrar categorias"
              ],
              "requiredEntities": [
                "MenuCategory"
              ],
              "readsFields": [
                "menuCategoryId",
                "name"
              ],
              "writesFields": [],
              "rulesApplied": [
                "ruleMenuItemPricePositive"
              ]
            },
            {
              "organismName": "MenuItemCatalog",
              "purpose": "Listar itens do cardápio por categoria para seleção rápida.",
              "userActions": [
                "Adicionar item",
                "Ajustar quantidade",
                "Adicionar observações"
              ],
              "requiredEntities": [
                "MenuItem",
                "OrderItem"
              ],
              "readsFields": [
                "menuItemId",
                "name",
                "price",
                "status",
                "categoryId"
              ],
              "writesFields": [
                "menuItemId",
                "quantity",
                "notes"
              ],
              "rulesApplied": [
                "ruleMenuItemPricePositive"
              ]
            }
          ]
        },
        {
          "sectionName": "Resumo do Pedido",
          "mode": "confirm",
          "organisms": [
            {
              "organismName": "OrderSummary",
              "purpose": "Revisar itens selecionados, total e tipo de atendimento antes da confirmação.",
              "userActions": [
                "Selecionar mesa/takeout",
                "Remover item",
                "Editar quantidade"
              ],
              "requiredEntities": [
                "Order",
                "OrderItem"
              ],
              "readsFields": [
                "menuItemId",
                "quantity",
                "unitPrice",
                "notes"
              ],
              "writesFields": [
                "tableNumber",
                "serviceType",
                "quantity",
                "notes"
              ],
              "rulesApplied": [
                "ruleOrderRequiresOpenShift"
              ]
            },
            {
              "organismName": "OrderConfirmAction",
              "purpose": "Confirmar criação do pedido e enviar para a cozinha.",
              "userActions": [
                "Confirmar pedido"
              ],
              "requiredEntities": [
                "Order",
                "OrderItem"
              ],
              "readsFields": [
                "menuItemId",
                "quantity",
                "unitPrice",
                "notes",
                "tableNumber",
                "serviceType"
              ],
              "writesFields": [
                "orderId",
                "status",
                "total"
              ],
              "rulesApplied": [
                "ruleOrderRequiresOpenShift",
                "ruleOrderStatusFlow"
              ]
            }
          ]
        }
      ]
    },
    "bffCommands": [
      {
        "commandName": "listarCategoriasCardapio",
        "purpose": "Listar categorias para navegação do cardápio.",
        "kind": "query",
        "input": [],
        "output": [
          {
            "name": "menuCategoryId",
            "type": "MenuCategory"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "displayOrder",
            "type": "number"
          }
        ],
        "readsEntities": [
          "cardapioAggregate"
        ],
        "writesEntities": [],
        "readsTables": [],
        "writesTables": [],
        "usecaseRefs": [
          "listarCategoriasCardapio"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": []
      },
      {
        "commandName": "listarItensCardapio",
        "purpose": "Listar itens do cardápio por categoria.",
        "kind": "query",
        "input": [
          {
            "name": "menuCategoryId",
            "type": "MenuCategory",
            "required": false
          },
          {
            "name": "searchText",
            "type": "string",
            "required": false
          },
          {
            "name": "onlyAvailable",
            "type": "boolean",
            "required": false
          }
        ],
        "output": [
          {
            "name": "menuItemId",
            "type": "MenuItem"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "price",
            "type": "money"
          },
          {
            "name": "status",
            "type": "string"
          },
          {
            "name": "menuCategoryId",
            "type": "MenuCategory"
          }
        ],
        "readsEntities": [
          "cardapioAggregate"
        ],
        "writesEntities": [],
        "readsTables": [],
        "writesTables": [],
        "usecaseRefs": [
          "listarItensCardapio"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "ruleMenuItemPricePositive"
        ]
      },
      {
        "commandName": "criarPedido",
        "purpose": "Criar pedido em rascunho com itens e confirmar envio para a cozinha.",
        "kind": "command",
        "input": [
          {
            "name": "items",
            "type": "OrderItem[]",
            "required": true
          },
          {
            "name": "serviceType",
            "type": "string",
            "required": true
          },
          {
            "name": "tableNumber",
            "type": "string",
            "required": false
          },
          {
            "name": "notes",
            "type": "string",
            "required": false
          }
        ],
        "output": [
          {
            "name": "orderId",
            "type": "Order"
          },
          {
            "name": "status",
            "type": "string"
          },
          {
            "name": "total",
            "type": "money"
          }
        ],
        "readsEntities": [
          "turnoDiarioAggregate",
          "cardapioAggregate"
        ],
        "writesEntities": [
          "pedidoAggregate"
        ],
        "readsTables": [],
        "writesTables": [
          "order_item"
        ],
        "usecaseRefs": [
          "criarPedido"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "ruleOrderRequiresOpenShift",
          "ruleOrderStatusFlow"
        ]
      }
    ]
  }
} as const;

export default posOrderPagePlan;
