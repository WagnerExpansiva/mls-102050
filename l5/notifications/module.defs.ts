/// <mls fileReference="_102050_/l5/notifications/module.defs.ts" enhancement="_blank"/>

export const notificationsModulePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "horizontalModule",
  "artifactId": "notifications",
  "moduleName": "notifications",
  "status": "draft",
  "source": {
    "agentName": "agentPlanHorizontals",
    "stepId": 15,
    "planId": "plan-horizontals"
  },
  "data": {
    "kind": "horizontal",
    "moduleId": "notifications",
    "horizontalModuleId": "notifications",
    "plannedByModule": "cafeFlow",
    "referencesExisting": false,
    "module": {
      "horizontalModuleId": "notifications",
      "priority": "soon",
      "reason": "Alertas de cozinha e de estoque baixo foram aceitos como necessidade operacional e melhoram a coordenação entre atendentes e cozinha.",
      "reusedOntologyRefs": [
        "NotificationTemplate",
        "NotificationDelivery",
        "NotificationPreference"
      ],
      "consumedByArtifacts": [
        "pageDashboard",
        "pageKitchenDisplay",
        "mdmOrder",
        "mdmStockItem"
      ],
      "decidedPriority": "soon"
    }
  }
} as const;

export default notificationsModulePlan;
