/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.defs.ts" enhancement="_blank"/>

export const dailyShiftRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "DailyShiftRepository",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "DailyShift",
    "interfaceName": "IDailyShiftRepository",
    "methods": [
      {
        "name": "getById",
        "returns": "DailyShift",
        "params": [
          "dailyShiftId: string"
        ],
        "description": "Retrieve a single DailyShift aggregate by its identity"
      },
      {
        "name": "list",
        "returns": "DailyShift[]",
        "params": [
          "filter: DailyShiftFilter"
        ],
        "description": "List DailyShift aggregates matching the domain filter"
      },
      {
        "name": "save",
        "returns": "void",
        "params": [
          "dailyShift: DailyShift"
        ],
        "description": "Persist a DailyShift aggregate and its embedded CashMovements"
      },
      {
        "name": "findByDate",
        "returns": "DailyShift[]",
        "params": [
          "date: CalendarDate"
        ],
        "description": "Domain finder: shifts on a specific calendar date"
      },
      {
        "name": "findOpenShift",
        "returns": "DailyShift",
        "params": [],
        "description": "Domain finder: the currently open shift, if any"
      },
      {
        "name": "findByCashier",
        "returns": "DailyShift[]",
        "params": [
          "cashierId: string"
        ],
        "description": "Domain finder: shifts worked by a specific cashier"
      }
    ]
  }
} as const;

export default dailyShiftRepositoryPort;

export const pipeline = [
  {
    "id": "dailyShiftRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/repositoryPort.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
