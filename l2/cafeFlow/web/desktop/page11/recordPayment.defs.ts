/// <mls fileReference="_102050_/l2/cafeFlow/web/desktop/page11/recordPayment.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "recordPayment",
  "pageName": "Registrar pagamento/recebimento",
  "actor": "cashier",
  "purpose": "Executar Registrar pagamento/recebimento.",
  "capabilities": [
    "recordPayment"
  ],
  "flowRefs": {
    "experienceFlows": [],
    "entityLifecycles": [],
    "taskWorkflows": [],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "sectionName": "Registrar pagamento/recebimento",
      "mode": "edit",
      "organisms": [
        {
          "organismName": "RecordPayment",
          "purpose": "Registrar pagamento/recebimento",
          "userActions": [
            "recordPayment"
          ],
          "requiredEntities": [
            "Payment",
            "Order",
            "DailyShift"
          ],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "paymentTimingByOrderType"
          ]
        }
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "recordPayment__l2_page",
    "type": "l2_page",
    "outputPath": "_102050_/l2/cafeFlow/web/desktop/page11/recordPayment.ts",
    "defPath": "_102050_/l2/cafeFlow/web/desktop/page11/recordPayment.defs.ts",
    "dependsFiles": [
      "_102050_/l2/cafeFlow/web/shared/recordPayment.ts",
      "_102050_/l2/cafeFlow/web/contracts/recordPayment.ts"
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
