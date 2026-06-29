/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/createDailyShift.defs.ts" enhancement="_blank"/>

export const createDailyShiftUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createDailyShift",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createDailyShift",
    "ports": [
      "DailyShift"
    ],
    "functions": [
      {
        "functionName": "createDailyShift",
        "inputTypeName": "CreateDailyShiftInput",
        "outputTypeName": "CreateDailyShiftOutput",
        "input": [
          {
            "name": "shiftDate",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift",
            "description": "Date the shift belongs to (YYYY-MM-DD)"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift",
            "description": "Shift status: open or closed"
          },
          {
            "name": "openedAt",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift",
            "description": "Timestamp when the shift was opened"
          },
          {
            "name": "closedAt",
            "type": "string",
            "required": false,
            "ofEntity": "DailyShift",
            "description": "Timestamp when the shift was closed"
          },
          {
            "name": "openingCashBalance",
            "type": "number",
            "required": false,
            "ofEntity": "DailyShift",
            "description": "Cash balance at shift opening"
          },
          {
            "name": "closingCashBalance",
            "type": "number",
            "required": false,
            "ofEntity": "DailyShift",
            "description": "Cash balance at shift closing"
          },
          {
            "name": "totalSales",
            "type": "number",
            "required": false,
            "ofEntity": "DailyShift",
            "description": "Total sales accumulated during the shift"
          },
          {
            "name": "totalPayments",
            "type": "number",
            "required": false,
            "ofEntity": "DailyShift",
            "description": "Total payments processed during the shift"
          },
          {
            "name": "closingNotes",
            "type": "string",
            "required": false,
            "ofEntity": "DailyShift",
            "description": "Free-text notes recorded at closing"
          }
        ],
        "output": [
          {
            "name": "dailyShiftId",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift",
            "description": "Id of the created daily shift"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "DailyShift",
            "description": "Status of the created shift (open or closed)"
          }
        ],
        "ports": [
          "DailyShift"
        ],
        "rulesApplied": [
          "paymentTimingByOrderType",
          "aiOutputLanguageSelection"
        ],
        "transactional": true,
        "steps": [
          "Validate that no DailyShift already exists for the given shiftDate via DailyShift port query",
          "Validate that status is either 'open' or 'closed'",
          "If status is 'closed', require closedAt and closingCashBalance to be provided",
          "Apply paymentTimingByOrderType rule to determine expected payment timing for the shift",
          "Apply aiOutputLanguageSelection rule to set the output language for any AI-generated closing notes",
          "Create a new DailyShift aggregate with server-generated dailyShiftId, createdAt, updatedAt",
          "Persist the DailyShift via the DailyShift port save operation",
          "Return dailyShiftId and status of the created shift"
        ]
      }
    ],
    "mdmRefs": []
  }
} as const;

export default createDailyShiftUsecase;

export const pipeline = [
  {
    "id": "createDailyShift__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/createDailyShift.ts",
    "defPath": "_102050_/l1/cafeFlow/layer_2_application/usecases/createDailyShift.defs.ts",
    "dependsFiles": [
      "_102050_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.d.ts",
      "_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
