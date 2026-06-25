/// <mls fileReference="_102050_/l2/plugins/impressora/plugin.defs.ts" enhancement="_blank"/>

export const impressoraPluginPlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "pluginDraft",
  "artifactId": "impressora",
  "moduleName": "cafeFlow",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPlugins",
    "stepId": 16,
    "planId": "plan-plugins"
  },
  "data": {
    "plugin": {
      "pluginId": "impressora",
      "provider": "impressora",
      "priority": "later",
      "reason": "Integração com impressora térmica de cozinha ainda não confirmada; pode ser adicionada em versão futura.",
      "events": [
        "order.created",
        "order.sentToKitchen"
      ],
      "requiredCredentials": [],
      "inputData": [
        "pedido",
        "itensDoPedido",
        "mesaOuTakeout",
        "observacoesDePreparo"
      ],
      "outputData": [
        "comandaImpressa",
        "statusImpressao"
      ],
      "webhooks": [],
      "risks": [
        "Dependência de hardware específico pode exigir testes adicionais e suporte local."
      ],
      "questions": [
        "Qual modelo de impressora térmica e protocolo (USB, Ethernet, Bluetooth) o cliente pretende usar?"
      ],
      "resolution": "create_draft",
      "pluginDefsFileRef": "_102050_/l2/plugins/impressora/plugin.defs.ts",
      "moduleConnectionDefsFileRef": "_102050_/l2/cafeFlow/plugins/impressora.defs.ts"
    }
  }
} as const;

export default impressoraPluginPlan;
