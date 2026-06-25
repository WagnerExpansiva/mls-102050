/// <mls fileReference="_102050_/l2/cafeFlow/aiAssistant.defs.ts" enhancement="_blank"/>

export const aiAssistantPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "aiAssistant",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 71,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "aiAssistant",
      "pageName": "Assistente IA de Vendas",
      "actor": "managerOwner",
      "purpose": "Enviar perguntas e receber insights de vendas com dados do negócio.",
      "capabilities": [
        "askSalesAssistant"
      ],
      "flowRefs": {
        "experienceFlows": [
          "workflowSalesAssistant"
        ],
        "entityLifecycles": [],
        "taskWorkflows": [],
        "automations": []
      },
      "pluginRefs": [],
      "mdmRefs": [
        "order",
        "menu",
        "stock"
      ],
      "pageInputs": [],
      "navigationRefs": [],
      "sections": [
        {
          "sectionName": "Consulta ao Assistente",
          "mode": "interaction",
          "organisms": [
            {
              "organismName": "FormularioPergunta",
              "purpose": "Capturar a pergunta do gerente para o assistente de vendas.",
              "userActions": [
                "Enviar pergunta",
                "Limpar pergunta"
              ],
              "requiredEntities": [],
              "readsFields": [],
              "writesFields": [],
              "rulesApplied": [
                "ruleLlmDataPrivacy"
              ]
            },
            {
              "organismName": "RespostaAssistente",
              "purpose": "Exibir a resposta e insights retornados pelo assistente.",
              "userActions": [
                "Avaliar resposta",
                "Refazer consulta"
              ],
              "requiredEntities": [
                "metricasCafeFlow"
              ],
              "readsFields": [
                "resposta",
                "insights"
              ],
              "writesFields": [],
              "rulesApplied": [
                "ruleLlmDataPrivacy"
              ]
            }
          ]
        }
      ]
    },
    "bffCommands": [
      {
        "commandName": "consultarAssistenteIA",
        "purpose": "Enviar pergunta ao assistente e obter resposta com insights agregados.",
        "kind": "query",
        "input": [
          {
            "name": "pergunta",
            "type": "string",
            "required": true
          },
          {
            "name": "contextoPermitido",
            "type": "string",
            "required": false
          }
        ],
        "output": [
          {
            "name": "resposta",
            "type": "string"
          },
          {
            "name": "insights",
            "type": "string"
          }
        ],
        "readsEntities": [
          "metricasCafeFlow"
        ],
        "writesEntities": [],
        "readsTables": [
          "today_sales_metrics",
          "top_selling_items_metrics",
          "low_stock_metrics"
        ],
        "writesTables": [],
        "usecaseRefs": [
          "consultarAssistenteIA"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "ruleLlmDataPrivacy"
        ]
      }
    ]
  }
} as const;

export default aiAssistantPagePlan;
