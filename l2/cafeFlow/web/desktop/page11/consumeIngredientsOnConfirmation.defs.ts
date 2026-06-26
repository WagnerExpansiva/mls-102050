/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/consumeIngredientsOnConfirmation.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "consumeIngredientsOnConfirmation",
  "pageName": "Baixar estoque por consumo de ingredientes",
  "actor": "attendant",
  "purpose": "Executar Baixar estoque por consumo de ingredientes.",
  "capabilities": [
    "consumeIngredientsOnConfirmation"
  ],
  "flowRefs": {
    "experienceFlows": [
      "consumeIngredientsOnConfirmation"
    ],
    "entityLifecycles": [],
    "taskWorkflows": [
      "consumeIngredientsOnConfirmation"
    ],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "sec_consumeIngredients_main",
      "type": "section",
      "sectionName": "Baixar estoque por consumo de ingredientes",
      "titleKey": "page.consumeIngredientsOnConfirmation.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org_orderSummary",
          "type": "summaryPanel",
          "organismName": "OrderSummary",
          "titleKey": "organism.orderSummary.title",
          "purpose": "Exibir contexto do pedido que está sendo confirmado para consumo de ingredientes",
          "userActions": [],
          "requiredEntities": [
            "Order"
          ],
          "readsFields": [
            "Order.orderId",
            "Order.orderType",
            "Order.status",
            "Order.totalAmount",
            "Order.customerName",
            "Order.numberOfGuests",
            "Order.createdAt"
          ],
          "writesFields": [],
          "rulesApplied": [
            "ingredientConsumptionTrigger"
          ],
          "order": 10,
          "moleculeRefs": [
            {
              "id": "mol_orderSummary_panel",
              "type": "summaryPanel",
              "order": 10
            }
          ]
        },
        {
          "id": "org_orderItemsReview",
          "type": "groupviewtable.mlDataTable",
          "organismName": "OrderItemsReview",
          "titleKey": "organism.orderItemsReview.title",
          "purpose": "Listar itens do pedido que gerarão consumo de ingredientes",
          "userActions": [],
          "requiredEntities": [
            "OrderItem",
            "MenuItem"
          ],
          "readsFields": [
            "OrderItem.id",
            "OrderItem.menuItemId",
            "OrderItem.quantity",
            "OrderItem.unitPrice",
            "OrderItem.totalPrice",
            "OrderItem.status",
            "MenuItem.name"
          ],
          "writesFields": [],
          "rulesApplied": [
            "ingredientConsumptionTrigger"
          ],
          "order": 20,
          "moleculeRefs": [
            {
              "id": "mol_orderItems_table",
              "type": "groupviewtable.mlDataTable",
              "order": 10
            }
          ]
        },
        {
          "id": "org_recipeComponentsPreview",
          "type": "groupviewtable.mlDataTable",
          "organismName": "RecipeComponentsPreview",
          "titleKey": "organism.recipeComponentsPreview.title",
          "purpose": "Pré-visualizar ingredientes calculados por receita que serão consumidos do estoque",
          "userActions": [],
          "requiredEntities": [
            "RecipeComponent",
            "InventoryItem",
            "MenuItem"
          ],
          "readsFields": [
            "RecipeComponent.recipeComponentId",
            "RecipeComponent.menuItemId",
            "RecipeComponent.inventoryItemId",
            "RecipeComponent.quantity",
            "InventoryItem.name",
            "InventoryItem.unit",
            "InventoryItem.currentQuantity",
            "InventoryItem.minimumLevel"
          ],
          "writesFields": [],
          "rulesApplied": [
            "ingredientConsumptionTrigger"
          ],
          "order": 30,
          "moleculeRefs": [
            {
              "id": "mol_recipeComponents_table",
              "type": "groupviewtable.mlDataTable",
              "order": 10
            }
          ]
        },
        {
          "id": "org_createStockConsumption",
          "type": "form",
          "organismName": "CreateStockConsumption",
          "titleKey": "organism.createStockConsumption.title",
          "purpose": "Registrar consumo de estoque ao confirmar pedido, com campos de quantidade, situação e data de consumo",
          "userActions": [
            "createStockConsumption"
          ],
          "requiredEntities": [
            "StockConsumption",
            "Order",
            "OrderItem",
            "MenuItem",
            "RecipeComponent",
            "InventoryItem"
          ],
          "readsFields": [
            "StockConsumption.quantity",
            "StockConsumption.status",
            "StockConsumption.consumedAt"
          ],
          "writesFields": [
            "StockConsumption.quantity",
            "StockConsumption.status",
            "StockConsumption.consumedAt",
            "StockConsumption.id"
          ],
          "rulesApplied": [
            "ingredientConsumptionTrigger"
          ],
          "order": 40,
          "moleculeRefs": [
            {
              "id": "mol_consumptionForm",
              "type": "form",
              "order": 10
            },
            {
              "id": "mol_consumptionActionBar",
              "type": "actionBar",
              "order": 20
            }
          ]
        }
      ]
    }
  ],
  "layout": {
    "id": "consumeIngredientsOnConfirmation_layout_v1",
    "type": "page",
    "sections": [
      {
        "id": "sec_consumeIngredients_main",
        "type": "section",
        "sectionName": "Baixar estoque por consumo de ingredientes",
        "titleKey": "page.consumeIngredientsOnConfirmation.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org_orderSummary",
            "type": "summaryPanel",
            "organismName": "OrderSummary",
            "titleKey": "organism.orderSummary.title",
            "purpose": "Exibir contexto do pedido que está sendo confirmado para consumo de ingredientes",
            "userActions": [],
            "requiredEntities": [
              "Order"
            ],
            "readsFields": [
              "Order.orderId",
              "Order.orderType",
              "Order.status",
              "Order.totalAmount",
              "Order.customerName",
              "Order.numberOfGuests",
              "Order.createdAt"
            ],
            "writesFields": [],
            "rulesApplied": [
              "ingredientConsumptionTrigger"
            ],
            "order": 10,
            "molecules": [
              {
                "id": "mol_orderSummary_panel",
                "type": "summaryPanel",
                "order": 10,
                "fields": [
                  {
                    "id": "fld_orderId",
                    "field": "Order.orderId",
                    "labelKey": "field.order.orderId",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "format": "uuid"
                  },
                  {
                    "id": "fld_orderType",
                    "field": "Order.orderType",
                    "labelKey": "field.order.orderType",
                    "order": 20,
                    "required": false,
                    "inputType": "text"
                  },
                  {
                    "id": "fld_orderStatus",
                    "field": "Order.status",
                    "labelKey": "field.order.status",
                    "order": 30,
                    "required": false,
                    "inputType": "text"
                  },
                  {
                    "id": "fld_totalAmount",
                    "field": "Order.totalAmount",
                    "labelKey": "field.order.totalAmount",
                    "order": 40,
                    "required": false,
                    "inputType": "text",
                    "format": "money"
                  },
                  {
                    "id": "fld_customerName",
                    "field": "Order.customerName",
                    "labelKey": "field.order.customerName",
                    "order": 50,
                    "required": false,
                    "inputType": "text"
                  },
                  {
                    "id": "fld_numberOfGuests",
                    "field": "Order.numberOfGuests",
                    "labelKey": "field.order.numberOfGuests",
                    "order": 60,
                    "required": false,
                    "inputType": "text"
                  },
                  {
                    "id": "fld_orderCreatedAt",
                    "field": "Order.createdAt",
                    "labelKey": "field.order.createdAt",
                    "order": 70,
                    "required": false,
                    "inputType": "text",
                    "format": "datetime"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              }
            ]
          },
          {
            "id": "org_orderItemsReview",
            "type": "groupviewtable.mlDataTable",
            "organismName": "OrderItemsReview",
            "titleKey": "organism.orderItemsReview.title",
            "purpose": "Listar itens do pedido que gerarão consumo de ingredientes",
            "userActions": [],
            "requiredEntities": [
              "OrderItem",
              "MenuItem"
            ],
            "readsFields": [
              "OrderItem.id",
              "OrderItem.menuItemId",
              "OrderItem.quantity",
              "OrderItem.unitPrice",
              "OrderItem.totalPrice",
              "OrderItem.status",
              "MenuItem.name"
            ],
            "writesFields": [],
            "rulesApplied": [
              "ingredientConsumptionTrigger"
            ],
            "order": 20,
            "molecules": [
              {
                "id": "mol_orderItems_table",
                "type": "groupviewtable.mlDataTable",
                "order": 10,
                "emptyKey": "empty.orderItems.noData",
                "fields": [],
                "columns": [
                  {
                    "id": "col_orderItem_id",
                    "field": "OrderItem.id",
                    "labelKey": "column.orderItem.id",
                    "order": 10,
                    "required": false,
                    "inputType": "text",
                    "format": "uuid"
                  },
                  {
                    "id": "col_orderItem_menuItemName",
                    "field": "MenuItem.name",
                    "labelKey": "column.orderItem.menuItemName",
                    "order": 20,
                    "required": false,
                    "inputType": "text"
                  },
                  {
                    "id": "col_orderItem_quantity",
                    "field": "OrderItem.quantity",
                    "labelKey": "column.orderItem.quantity",
                    "order": 30,
                    "required": false,
                    "inputType": "number"
                  },
                  {
                    "id": "col_orderItem_unitPrice",
                    "field": "OrderItem.unitPrice",
                    "labelKey": "column.orderItem.unitPrice",
                    "order": 40,
                    "required": false,
                    "inputType": "text",
                    "format": "money"
                  },
                  {
                    "id": "col_orderItem_totalPrice",
                    "field": "OrderItem.totalPrice",
                    "labelKey": "column.orderItem.totalPrice",
                    "order": 50,
                    "required": false,
                    "inputType": "text",
                    "format": "money"
                  },
                  {
                    "id": "col_orderItem_status",
                    "field": "OrderItem.status",
                    "labelKey": "column.orderItem.status",
                    "order": 60,
                    "required": false,
                    "inputType": "text"
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
            "id": "org_recipeComponentsPreview",
            "type": "groupviewtable.mlDataTable",
            "organismName": "RecipeComponentsPreview",
            "titleKey": "organism.recipeComponentsPreview.title",
            "purpose": "Pré-visualizar ingredientes calculados por receita que serão consumidos do estoque",
            "userActions": [],
            "requiredEntities": [
              "RecipeComponent",
              "InventoryItem",
              "MenuItem"
            ],
            "readsFields": [
              "RecipeComponent.recipeComponentId",
              "RecipeComponent.menuItemId",
              "RecipeComponent.inventoryItemId",
              "RecipeComponent.quantity",
              "InventoryItem.name",
              "InventoryItem.unit",
              "InventoryItem.currentQuantity",
              "InventoryItem.minimumLevel"
            ],
            "writesFields": [],
            "rulesApplied": [
              "ingredientConsumptionTrigger"
            ],
            "order": 30,
            "molecules": [
              {
                "id": "mol_recipeComponents_table",
                "type": "groupviewtable.mlDataTable",
                "order": 10,
                "emptyKey": "empty.recipeComponents.noData",
                "fields": [],
                "columns": [
                  {
                    "id": "col_recipe_inventoryItemName",
                    "field": "InventoryItem.name",
                    "labelKey": "column.recipe.inventoryItemName",
                    "order": 10,
                    "required": false,
                    "inputType": "text"
                  },
                  {
                    "id": "col_recipe_unit",
                    "field": "InventoryItem.unit",
                    "labelKey": "column.recipe.unit",
                    "order": 20,
                    "required": false,
                    "inputType": "text"
                  },
                  {
                    "id": "col_recipe_quantityPerUnit",
                    "field": "RecipeComponent.quantity",
                    "labelKey": "column.recipe.quantityPerUnit",
                    "order": 30,
                    "required": false,
                    "inputType": "number"
                  },
                  {
                    "id": "col_recipe_currentStock",
                    "field": "InventoryItem.currentQuantity",
                    "labelKey": "column.recipe.currentStock",
                    "order": 40,
                    "required": false,
                    "inputType": "number"
                  },
                  {
                    "id": "col_recipe_minimumLevel",
                    "field": "InventoryItem.minimumLevel",
                    "labelKey": "column.recipe.minimumLevel",
                    "order": 50,
                    "required": false,
                    "inputType": "number"
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
            "id": "org_createStockConsumption",
            "type": "form",
            "organismName": "CreateStockConsumption",
            "titleKey": "organism.createStockConsumption.title",
            "purpose": "Registrar consumo de estoque ao confirmar pedido, com campos de quantidade, situação e data de consumo",
            "userActions": [
              "createStockConsumption"
            ],
            "requiredEntities": [
              "StockConsumption",
              "Order",
              "OrderItem",
              "MenuItem",
              "RecipeComponent",
              "InventoryItem"
            ],
            "readsFields": [
              "StockConsumption.quantity",
              "StockConsumption.status",
              "StockConsumption.consumedAt"
            ],
            "writesFields": [
              "StockConsumption.quantity",
              "StockConsumption.status",
              "StockConsumption.consumedAt",
              "StockConsumption.id"
            ],
            "rulesApplied": [
              "ingredientConsumptionTrigger"
            ],
            "order": 40,
            "molecules": [
              {
                "id": "mol_consumptionForm",
                "type": "form",
                "order": 10,
                "fields": [
                  {
                    "id": "fld_consumption_quantity",
                    "field": "StockConsumption.quantity",
                    "labelKey": "field.stockConsumption.quantity",
                    "order": 10,
                    "required": true,
                    "inputType": "number",
                    "stateKey": "ui.consumeIngredientsOnConfirmation.input.createStockConsumption.StockConsumption.quantity"
                  },
                  {
                    "id": "fld_consumption_status",
                    "field": "StockConsumption.status",
                    "labelKey": "field.stockConsumption.status",
                    "order": 20,
                    "required": true,
                    "inputType": "select",
                    "source": "enum:posted,voided",
                    "stateKey": "ui.consumeIngredientsOnConfirmation.input.createStockConsumption.StockConsumption.status"
                  },
                  {
                    "id": "fld_consumption_consumedAt",
                    "field": "StockConsumption.consumedAt",
                    "labelKey": "field.stockConsumption.consumedAt",
                    "order": 30,
                    "required": true,
                    "inputType": "datetime",
                    "format": "datetime",
                    "stateKey": "ui.consumeIngredientsOnConfirmation.input.createStockConsumption.StockConsumption.consumedAt"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              },
              {
                "id": "mol_consumptionActionBar",
                "type": "actionBar",
                "order": 20,
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "act_createStockConsumption",
                    "action": "createStockConsumption",
                    "labelKey": "action.createStockConsumption.label",
                    "order": 10,
                    "displayHint": "primary",
                    "actionKey": "createStockConsumption"
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
    "page.consumeIngredientsOnConfirmation.title": "Baixar estoque por consumo de ingredientes",
    "organism.orderSummary.title": "Pedido",
    "organism.orderItemsReview.title": "Itens do Pedido",
    "organism.recipeComponentsPreview.title": "Ingredientes a Consumar",
    "organism.createStockConsumption.title": "Registrar Consumo de Estoque",
    "field.order.orderId": "Pedido",
    "field.order.orderType": "Tipo",
    "field.order.status": "Status",
    "field.order.totalAmount": "Total",
    "field.order.customerName": "Cliente",
    "field.order.numberOfGuests": "Pessoas",
    "field.order.createdAt": "Criado em",
    "column.orderItem.id": "ID",
    "column.orderItem.menuItemName": "Item",
    "column.orderItem.quantity": "Qtd.",
    "column.orderItem.unitPrice": "Preço Unit.",
    "column.orderItem.totalPrice": "Preço Total",
    "column.orderItem.status": "Status",
    "column.recipe.inventoryItemName": "Ingrediente",
    "column.recipe.unit": "Unidade",
    "column.recipe.quantityPerUnit": "Qtd. por Unidade",
    "column.recipe.currentStock": "Estoque Atual",
    "column.recipe.minimumLevel": "Nível Mínimo",
    "field.stockConsumption.quantity": "Quantidade Consumida",
    "field.stockConsumption.status": "Situação",
    "field.stockConsumption.consumedAt": "Data do Consumo",
    "action.createStockConsumption.label": "Confirmar Consumo",
    "empty.orderItems.noData": "Nenhum item de pedido encontrado.",
    "empty.recipeComponents.noData": "Nenhum ingrediente calculado para os itens do pedido."
  },
  "dataBindings": [
    {
      "id": "binding_orderContext",
      "source": "bff",
      "entity": "Order",
      "description": "Carrega contexto do pedido sendo confirmado para consumo de ingredientes",
      "stateKey": "orderContext"
    },
    {
      "id": "binding_orderItems",
      "source": "bff",
      "entity": "OrderItem",
      "description": "Lista itens do pedido que gerarão consumo de ingredientes",
      "stateKey": "orderItems"
    },
    {
      "id": "binding_recipeComponents",
      "source": "bff",
      "entity": "RecipeComponent",
      "description": "Lista componentes de receita calculados a partir dos itens do pedido",
      "stateKey": "recipeComponents"
    },
    {
      "id": "binding_inventoryItems",
      "source": "bff",
      "entity": "InventoryItem",
      "description": "Dados de estoque dos ingredientes referenciados pelos componentes de receita",
      "stateKey": "inventoryItems"
    },
    {
      "id": "binding_createStockConsumption",
      "source": "bff",
      "entity": "StockConsumption",
      "command": "createStockConsumption",
      "description": "Comando para registrar consumo de estoque ao confirmar pedido",
      "stateKey": "ui.consumeIngredientsOnConfirmation.data.createStockConsumption",
      "inputStateKeys": [
        "ui.consumeIngredientsOnConfirmation.input.createStockConsumption.quantity",
        "ui.consumeIngredientsOnConfirmation.input.createStockConsumption.status",
        "ui.consumeIngredientsOnConfirmation.input.createStockConsumption.consumedAt"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "consumeIngredientsOnConfirmation__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/consumeIngredientsOnConfirmation.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/consumeIngredientsOnConfirmation.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/consumeIngredientsOnConfirmation.ts",
      "_102050_/l2/cafeFlow/web/contracts/consumeIngredientsOnConfirmation.ts"
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
