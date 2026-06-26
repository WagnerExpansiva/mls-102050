/// <mls fileReference="_102050_/l4/operations/recordPayment.defs.ts" enhancement="_blank"/>

export const operationRecordPayment = {
  "operationId": "recordPayment",
  "title": "Registrar pagamento/recebimento",
  "actor": "cashier",
  "entity": "Payment",
  "kind": "create",
  "reads": [
    "Order",
    "DailyShift"
  ],
  "writes": [
    "Payment"
  ],
  "rulesApplied": [
    "paymentTimingByOrderType"
  ],
  "story": {
    "actor": "cashier",
    "goal": "registrar recebimento do pedido",
    "steps": [
      "selecionar pedido",
      "informar método e valor do pagamento",
      "confirmar registro"
    ],
    "outcome": "pagamento registrado"
  },
  "capability": {
    "capabilityId": "recordPayment",
    "title": "Registrar pagamento/recebimento",
    "actor": "cashier",
    "priority": "now"
  },
  "statusFrontend": "done",
  "statusBackend": "inProgress"
} as const;

export default operationRecordPayment;
