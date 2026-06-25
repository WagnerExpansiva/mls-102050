/// <mls fileReference="_102050_/l2/cafeFlow/menuManagement.defs.ts" enhancement="_blank"/>

export const menuManagementPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "menuManagement",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 73,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "menuManagement",
      "pageName": "Gerenciamento de Cardápio",
      "actor": "managerOwner",
      "purpose": "Criar e editar categorias e itens do cardápio.",
      "capabilities": [
        "manageMenu"
      ],
      "flowRefs": {
        "experienceFlows": [],
        "entityLifecycles": [
          "workflowMenuManagement"
        ],
        "taskWorkflows": [],
        "automations": []
      },
      "pluginRefs": [],
      "mdmRefs": [
        "menu"
      ],
      "pageInputs": [],
      "navigationRefs": [],
      "sections": [
        {
          "sectionName": "Categorias do Cardápio",
          "mode": "manage",
          "organisms": [
            {
              "organismName": "Lista de Categorias",
              "purpose": "Exibir e filtrar categorias existentes do cardápio.",
              "userActions": [
                "filtrarCategorias",
                "selecionarCategoria"
              ],
              "requiredEntities": [
                "MenuCategory"
              ],
              "readsFields": [
                "MenuCategory.menuCategoryId",
                "MenuCategory.name",
                "MenuCategory.description",
                "MenuCategory.sortOrder",
                "MenuCategory.isActive"
              ],
              "writesFields": [],
              "rulesApplied": []
            },
            {
              "organismName": "Editor de Categoria",
              "purpose": "Criar, editar ou inativar categorias do cardápio.",
              "userActions": [
                "criarCategoria",
                "editarCategoria",
                "inativarCategoria"
              ],
              "requiredEntities": [
                "MenuCategory"
              ],
              "readsFields": [
                "MenuCategory.menuCategoryId",
                "MenuCategory.name",
                "MenuCategory.description",
                "MenuCategory.sortOrder",
                "MenuCategory.isActive"
              ],
              "writesFields": [
                "MenuCategory.name",
                "MenuCategory.description",
                "MenuCategory.sortOrder",
                "MenuCategory.isActive",
                "MenuCategory.updatedAt"
              ],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Itens do Cardápio",
          "mode": "manage",
          "organisms": [
            {
              "organismName": "Lista de Itens do Cardápio",
              "purpose": "Exibir itens por categoria com preço e status.",
              "userActions": [
                "filtrarItens",
                "selecionarItem"
              ],
              "requiredEntities": [
                "MenuItem",
                "MenuCategory",
                "MenuItemIngredient"
              ],
              "readsFields": [
                "MenuItem.menuItemId",
                "MenuItem.name",
                "MenuItem.description",
                "MenuItem.menuCategoryId",
                "MenuItem.price",
                "MenuItem.isAvailable",
                "MenuItem.status",
                "MenuCategory.menuCategoryId",
                "MenuCategory.name"
              ],
              "writesFields": [],
              "rulesApplied": []
            },
            {
              "organismName": "Editor de Item e Ingredientes",
              "purpose": "Criar, editar, inativar ou reativar itens e vincular ingredientes.",
              "userActions": [
                "criarItem",
                "editarItem",
                "inativarItem",
                "reativarItem",
                "vincularIngrediente"
              ],
              "requiredEntities": [
                "MenuItem",
                "MenuItemIngredient",
                "MenuCategory"
              ],
              "readsFields": [
                "MenuItem.menuItemId",
                "MenuItem.name",
                "MenuItem.description",
                "MenuItem.menuCategoryId",
                "MenuItem.price",
                "MenuItem.isAvailable",
                "MenuItem.status",
                "MenuItemIngredient.menuItemIngredientId",
                "MenuItemIngredient.menuItemId",
                "MenuItemIngredient.stockItemId",
                "MenuItemIngredient.quantity",
                "MenuCategory.menuCategoryId",
                "MenuCategory.name"
              ],
              "writesFields": [
                "MenuItem.name",
                "MenuItem.description",
                "MenuItem.menuCategoryId",
                "MenuItem.price",
                "MenuItem.isAvailable",
                "MenuItem.status",
                "MenuItem.updatedAt",
                "MenuItemIngredient.menuItemId",
                "MenuItemIngredient.stockItemId",
                "MenuItemIngredient.quantity",
                "MenuItemIngredient.updatedAt"
              ],
              "rulesApplied": [
                "ruleMenuItemPricePositive"
              ]
            }
          ]
        }
      ]
    },
    "bffCommands": [
      {
        "commandName": "listarCategoriasCardapio",
        "purpose": "Exibir categorias atuais",
        "kind": "query",
        "input": [
          {
            "name": "textoBusca",
            "type": "string",
            "required": false
          },
          {
            "name": "apenasAtivas",
            "type": "boolean",
            "required": false
          }
        ],
        "output": [
          {
            "name": "menuCategoryId",
            "type": "uuid"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "sortOrder",
            "type": "number"
          },
          {
            "name": "isActive",
            "type": "boolean"
          }
        ],
        "readsEntities": [
          "MenuCategory"
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
        "commandName": "gerenciarCategoriaCardapio",
        "purpose": "Criar/editar/remover categorias",
        "kind": "mutation",
        "input": [
          {
            "name": "acao",
            "type": "string",
            "required": true
          },
          {
            "name": "menuCategoryId",
            "type": "uuid",
            "required": false
          },
          {
            "name": "name",
            "type": "string",
            "required": false
          },
          {
            "name": "description",
            "type": "string",
            "required": false
          },
          {
            "name": "sortOrder",
            "type": "number",
            "required": false
          },
          {
            "name": "isActive",
            "type": "boolean",
            "required": false
          }
        ],
        "output": [
          {
            "name": "menuCategoryId",
            "type": "uuid"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "sortOrder",
            "type": "number"
          },
          {
            "name": "isActive",
            "type": "boolean"
          }
        ],
        "readsEntities": [
          "MenuCategory"
        ],
        "writesEntities": [
          "MenuCategory"
        ],
        "readsTables": [],
        "writesTables": [],
        "usecaseRefs": [
          "gerenciarCategoriaCardapio"
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
        "purpose": "Exibir itens atuais",
        "kind": "query",
        "input": [
          {
            "name": "menuCategoryId",
            "type": "uuid",
            "required": false
          },
          {
            "name": "textoBusca",
            "type": "string",
            "required": false
          },
          {
            "name": "apenasAtivos",
            "type": "boolean",
            "required": false
          }
        ],
        "output": [
          {
            "name": "menuItemId",
            "type": "uuid"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "menuCategoryId",
            "type": "uuid"
          },
          {
            "name": "price",
            "type": "number"
          },
          {
            "name": "isAvailable",
            "type": "boolean"
          },
          {
            "name": "status",
            "type": "string"
          }
        ],
        "readsEntities": [
          "MenuItem",
          "MenuCategory",
          "MenuItemIngredient"
        ],
        "writesEntities": [],
        "readsTables": [
          "menu_item_ingredient"
        ],
        "writesTables": [],
        "usecaseRefs": [
          "listarItensCardapio"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": []
      },
      {
        "commandName": "gerenciarItemCardapio",
        "purpose": "Criar/editar itens do cardápio",
        "kind": "mutation",
        "input": [
          {
            "name": "acao",
            "type": "string",
            "required": true
          },
          {
            "name": "menuItemId",
            "type": "uuid",
            "required": false
          },
          {
            "name": "name",
            "type": "string",
            "required": false
          },
          {
            "name": "description",
            "type": "string",
            "required": false
          },
          {
            "name": "menuCategoryId",
            "type": "uuid",
            "required": false
          },
          {
            "name": "price",
            "type": "number",
            "required": false
          },
          {
            "name": "isAvailable",
            "type": "boolean",
            "required": false
          },
          {
            "name": "status",
            "type": "string",
            "required": false
          },
          {
            "name": "ingredientes",
            "type": "MenuItemIngredient[]",
            "required": false
          }
        ],
        "output": [
          {
            "name": "menuItemId",
            "type": "uuid"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "menuCategoryId",
            "type": "uuid"
          },
          {
            "name": "price",
            "type": "number"
          },
          {
            "name": "isAvailable",
            "type": "boolean"
          },
          {
            "name": "status",
            "type": "string"
          }
        ],
        "readsEntities": [
          "MenuItem",
          "MenuItemIngredient",
          "MenuCategory"
        ],
        "writesEntities": [
          "MenuItem",
          "MenuItemIngredient"
        ],
        "readsTables": [
          "menu_item_ingredient"
        ],
        "writesTables": [
          "menu_item_ingredient"
        ],
        "usecaseRefs": [
          "gerenciarItemCardapio"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "ruleMenuItemPricePositive"
        ]
      }
    ]
  }
} as const;

export default menuManagementPagePlan;
