/// <mls fileReference="_102050_/l2/cafeFlow/shiftOpen.defs.ts" enhancement="_blank"/>

export const shiftOpenPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "shiftOpen",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 70,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "shiftOpen",
      "pageName": "Abertura de Turno",
      "actor": "attendantCashier",
      "purpose": "Verificar turno aberto e abrir o turno diário com valor inicial de caixa.",
      "capabilities": [
        "openDailyShift"
      ],
      "flowRefs": {
        "experienceFlows": [],
        "entityLifecycles": [
          "workflowDailyShiftLifecycle"
        ],
        "taskWorkflows": [],
        "automations": []
      },
      "pluginRefs": [],
      "mdmRefs": [
        "dailyShift"
      ],
      "pageInputs": [],
      "navigationRefs": [
        {
          "direction": "outbound",
          "pageId": "posOrder",
          "trigger": "Turno aberto confirmado",
          "description": "Seguir para o POS após abrir ou confirmar turno aberto."
        }
      ],
      "sections": [
        {
          "sectionName": "Status do turno diário",
          "mode": "view",
          "organisms": [
            {
              "organismName": "Lista de turnos do dia",
              "purpose": "Exibir turnos existentes do dia e indicar se há turno aberto.",
              "userActions": [
                "Verificar turno aberto",
                "Atualizar lista"
              ],
              "requiredEntities": [
                "turnoDiarioAggregate"
              ],
              "readsFields": [
                "DailyShift.id",
                "DailyShift.status",
                "DailyShift.shiftDate",
                "DailyShift.openedAt",
                "DailyShift.initialCashValue"
              ],
              "writesFields": [],
              "rulesApplied": [
                "ruleUniqueOpenShiftPerDay"
              ]
            }
          ]
        },
        {
          "sectionName": "Abertura do turno",
          "mode": "edit",
          "organisms": [
            {
              "organismName": "Formulário de abertura de turno",
              "purpose": "Informar valor inicial de caixa e abrir o turno diário.",
              "userActions": [
                "Informar valor inicial de caixa",
                "Abrir turno diário"
              ],
              "requiredEntities": [
                "turnoDiarioAggregate"
              ],
              "readsFields": [
                "DailyShift.shiftDate"
              ],
              "writesFields": [
                "DailyShift.initialCashValue",
                "DailyShift.status",
                "DailyShift.shiftDate"
              ],
              "rulesApplied": [
                "ruleUniqueOpenShiftPerDay"
              ]
            }
          ]
        }
      ]
    },
    "bffCommands": [
      {
        "commandName": "listarTurnosDiarios",
        "purpose": "Verificar se já existe turno aberto",
        "kind": "query",
        "input": [
          {
            "name": "shiftDate",
            "type": "date",
            "required": false
          }
        ],
        "output": [
          {
            "name": "dailyShiftId",
            "type": "string"
          },
          {
            "name": "status",
            "type": "string"
          },
          {
            "name": "shiftDate",
            "type": "date"
          },
          {
            "name": "openedAt",
            "type": "date"
          },
          {
            "name": "initialCashValue",
            "type": "number"
          }
        ],
        "readsEntities": [
          "turnoDiarioAggregate"
        ],
        "writesEntities": [],
        "readsTables": [],
        "writesTables": [],
        "usecaseRefs": [
          "listarTurnosDiarios"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": []
      },
      {
        "commandName": "abrirTurnoDiario",
        "purpose": "Abrir turno com valor inicial de caixa",
        "kind": "command",
        "input": [
          {
            "name": "shiftDate",
            "type": "date",
            "required": true
          },
          {
            "name": "initialCashValue",
            "type": "number",
            "required": true
          }
        ],
        "output": [
          {
            "name": "dailyShiftId",
            "type": "string"
          },
          {
            "name": "status",
            "type": "string"
          },
          {
            "name": "shiftDate",
            "type": "date"
          },
          {
            "name": "openedAt",
            "type": "date"
          },
          {
            "name": "initialCashValue",
            "type": "number"
          }
        ],
        "readsEntities": [
          "turnoDiarioAggregate"
        ],
        "writesEntities": [
          "turnoDiarioAggregate"
        ],
        "readsTables": [],
        "writesTables": [],
        "usecaseRefs": [
          "abrirTurnoDiario"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "ruleUniqueOpenShiftPerDay"
        ]
      }
    ]
  }
} as const;

export default shiftOpenPagePlan;
