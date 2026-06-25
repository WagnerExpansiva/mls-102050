/// <mls fileReference="_102050_/l4/workflows/workflowSalesAssistant.defs.ts" enhancement="_blank"/>

export const workflowSalesAssistantDef = {
  "schemaVersion": "2026-06-06",
  "artifactType": "workflow",
  "artifactId": "workflowSalesAssistant",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanWorkflowDefinition",
    "stepId": 29,
    "planId": "plan-validate-solution-coverage"
  },
  "data": {
    "workflowDefinition": {
      "workflowId": "workflowSalesAssistant",
      "title": "Consulta ao Assistente IA",
      "purpose": "Permitir que o gerente consulte o assistente de IA para obter sugestões de vendas e análises baseadas nos dados do negócio.",
      "executionMode": "uiState",
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
          "stateId": "idle",
          "description": "Pronto para receber uma pergunta do gerente."
        },
        {
          "stateId": "requesting",
          "description": "Pergunta enviada ao assistente e aguardando resposta."
        },
        {
          "stateId": "responseReady",
          "description": "Resposta do assistente disponível para visualização."
        },
        {
          "stateId": "error",
          "description": "Falha ao consultar o assistente de IA."
        }
      ],
      "transitions": [
        {
          "from": "idle",
          "to": "requesting",
          "trigger": "submitQuery",
          "actor": "managerOwner",
          "conditions": [],
          "actions": [],
          "rulesApplied": [
            "ruleLlmDataPrivacy"
          ]
        },
        {
          "from": "requesting",
          "to": "responseReady",
          "trigger": "receiveResponse",
          "actor": "managerOwner",
          "conditions": [],
          "actions": [],
          "rulesApplied": []
        },
        {
          "from": "requesting",
          "to": "error",
          "trigger": "failRequest",
          "actor": "managerOwner",
          "conditions": [],
          "actions": [],
          "rulesApplied": []
        },
        {
          "from": "responseReady",
          "to": "idle",
          "trigger": "resetConsultation",
          "actor": "managerOwner",
          "conditions": [],
          "actions": [],
          "rulesApplied": []
        }
      ],
      "requiredEntities": [],
      "persistenceRefs": [],
      "usecaseRefs": [
        "consultarAssistenteIA",
        "sugerirItensParaPromover"
      ],
      "metricRefs": [],
      "userActions": [
        "consultarAssistenteIA",
        "visualizarSugestoes",
        "refazerConsulta"
      ],
      "relatedPages": [
        "aiAssistant",
        "dashboard"
      ],
      "relatedAgents": [],
      "relatedPlugins": [],
      "rulesApplied": [
        "ruleLlmDataPrivacy"
      ],
      "implementationSuggestions": [
        {
          "suggestionId": "suggNoTaskUiInteraction",
          "title": "Fluxo sem tarefas para consulta instantânea",
          "priority": "now",
          "description": "Manter a interação como consulta imediata em UI, sem criação de tarefa, para evitar atrasos operacionais.",
          "tradeoff": "Perde-se rastreabilidade formal de consultas para auditoria futura."
        },
        {
          "suggestionId": "suggLlmContextLimit",
          "title": "Limitação de contexto sensível ao LLM",
          "priority": "now",
          "description": "Garantir que dados pessoais de clientes ou financeiros detalhados não sejam enviados ao modelo de IA.",
          "tradeoff": "Respostas podem ser menos específicas ao evitar detalhes sensíveis."
        },
        {
          "suggestionId": "suggLlmCache",
          "title": "Cache de respostas frequentes",
          "priority": "later",
          "description": "Melhorar performance e reduzir custos de API para perguntas repetitivas.",
          "tradeoff": "Risco de respostas desatualizadas se o cache não expirar corretamente."
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
          "entity": "metricasCafeFlow"
        }
      ],
      "writesArtifacts": [
        {
          "moduleId": "cafeFlow",
          "artifactType": "workflow",
          "artifactId": "workflowSalesAssistant"
        }
      ]
    },
    "defsPlan": {
      "fileName": "workflows/workflowSalesAssistant.defs.ts",
      "exportName": "workflowSalesAssistantDef",
      "saveAsDefs": true
    }
  }
} as const;

export default workflowSalesAssistantDef;
