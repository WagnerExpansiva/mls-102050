/// <mls fileReference="_102050_/l4/workflows/workflowMenuManagement.defs.ts" enhancement="_blank"/>

export const workflowMenuManagementDef = {
  "schemaVersion": "2026-06-06",
  "artifactType": "workflow",
  "artifactId": "workflowMenuManagement",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanWorkflowDefinition",
    "stepId": 29,
    "planId": "plan-validate-solution-coverage"
  },
  "data": {
    "workflowDefinition": {
      "workflowId": "workflowMenuManagement",
      "title": "Gerenciamento do Cardápio",
      "purpose": "Permitir a criação, edição e inativação de categorias e itens do cardápio, incluindo a definição de ingredientes e preços.",
      "executionMode": "entityLifecycle",
      "createsTask": false,
      "taskConfig": {
        "taskTitleTemplate": "",
        "assigneeRules": [],
        "slaRules": [],
        "taskRoomRequired": false
      },
      "actors": [
        "managerOwner"
      ],
      "states": [
        {
          "stateId": "menuOverview",
          "description": "Visão geral do cardápio com categorias e itens disponíveis para gerenciamento."
        },
        {
          "stateId": "categoryManaged",
          "description": "Categoria criada ou atualizada e pronta para uso no cardápio."
        },
        {
          "stateId": "itemManaged",
          "description": "Item do cardápio criado ou atualizado com ingredientes associados."
        },
        {
          "stateId": "itemInactive",
          "description": "Item do cardápio inativado e indisponível para venda."
        }
      ],
      "transitions": [
        {
          "from": "menuOverview",
          "to": "categoryManaged",
          "trigger": "submitCategoryChanges",
          "actor": "managerOwner",
          "conditions": [],
          "actions": [
            "MenuCategory.name",
            "MenuCategory.description",
            "MenuCategory.sortOrder",
            "MenuCategory.isActive",
            "MenuCategory.updatedAt"
          ],
          "rulesApplied": []
        },
        {
          "from": "menuOverview",
          "to": "itemManaged",
          "trigger": "submitItemChanges",
          "actor": "managerOwner",
          "conditions": [],
          "actions": [
            "MenuItem.name",
            "MenuItem.description",
            "MenuItem.menuCategoryId",
            "MenuItem.price",
            "MenuItem.isAvailable",
            "MenuItem.status=active",
            "MenuItem.updatedAt",
            "MenuItemIngredient.menuItemId",
            "MenuItemIngredient.stockItemId",
            "MenuItemIngredient.quantity",
            "MenuItemIngredient.updatedAt"
          ],
          "rulesApplied": [
            "ruleMenuItemPricePositive"
          ]
        },
        {
          "from": "itemManaged",
          "to": "itemInactive",
          "trigger": "deactivateMenuItem",
          "actor": "managerOwner",
          "conditions": [],
          "actions": [
            "MenuItem.status=inactive",
            "MenuItem.isAvailable=false",
            "MenuItem.updatedAt"
          ],
          "rulesApplied": []
        },
        {
          "from": "itemInactive",
          "to": "itemManaged",
          "trigger": "reactivateMenuItem",
          "actor": "managerOwner",
          "conditions": [],
          "actions": [
            "MenuItem.status=active",
            "MenuItem.isAvailable=true",
            "MenuItem.updatedAt"
          ],
          "rulesApplied": []
        }
      ],
      "requiredEntities": [
        "MenuCategory",
        "MenuItem",
        "MenuItemIngredient"
      ],
      "persistenceRefs": [
        "menuItemIngredient"
      ],
      "usecaseRefs": [
        "gerenciarCategoriaCardapio",
        "listarCategoriasCardapio",
        "gerenciarItemCardapio",
        "listarItensCardapio"
      ],
      "metricRefs": [],
      "userActions": [
        "criarCategoria",
        "editarCategoria",
        "inativarCategoria",
        "criarItem",
        "editarItem",
        "inativarItem",
        "reativarItem",
        "vincularIngrediente"
      ],
      "relatedPages": [
        "menuManagement",
        "posOrder"
      ],
      "relatedAgents": [],
      "relatedPlugins": [],
      "rulesApplied": [
        "ruleMenuItemPricePositive"
      ],
      "implementationSuggestions": [
        {
          "suggestionId": "suggMenuItemIngredientLink",
          "title": "Vinculação de ingredientes a itens do cardápio",
          "priority": "now",
          "description": "Permitir associar itens de estoque como ingredientes para futura baixa automática no preparo.",
          "tradeoff": "Aumenta o esforço de cadastro inicial, mas habilita controle de consumo por venda."
        },
        {
          "suggestionId": "suggMenuItemPhoto",
          "title": "Suporte a imagem do item",
          "priority": "later",
          "description": "Adicionar campo de imagem para melhorar a identificação visual no POS e na cozinha.",
          "tradeoff": "Requer armazenamento de mídia e pode impactar desempenho se não houver otimização."
        },
        {
          "suggestionId": "suggNoTaskForMenuManagement",
          "title": "Fluxo sem tarefas formais",
          "priority": "now",
          "description": "Manter o gerenciamento de cardápio como interação direta do gerente, sem criação de tarefas, para evitar overhead operacional.",
          "tradeoff": "Não há trilha de acompanhamento por tarefas; dependerá de auditoria via logs e histórico de alterações."
        }
      ],
      "workflowScope": "singleModule",
      "moduleRefs": [
        "cafeFlow"
      ],
      "pageRefsByModule": [],
      "entityRefsByModule": [
        {
          "moduleId": "cafeFlow",
          "entity": "MenuCategory"
        },
        {
          "moduleId": "cafeFlow",
          "entity": "MenuItem"
        },
        {
          "moduleId": "cafeFlow",
          "entity": "MenuItemIngredient"
        }
      ],
      "writesArtifacts": [
        {
          "moduleId": "cafeFlow",
          "artifactType": "workflow",
          "artifactId": "workflowMenuManagement"
        }
      ]
    },
    "defsPlan": {
      "fileName": "workflows/workflowMenuManagement.defs.ts",
      "exportName": "workflowMenuManagementDef",
      "saveAsDefs": true
    }
  }
} as const;

export default workflowMenuManagementDef;
