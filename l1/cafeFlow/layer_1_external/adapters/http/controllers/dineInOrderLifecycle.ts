/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/dineInOrderLifecycle.ts" enhancement="_blank"/>

import { ok, AppError, type BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import {
  sendToKitchen,
  markOrderReady,
  serveOrder,
  closeOrder,
  cancelOrder,
} from '/_102050_/l1/cafeFlow/layer_2_application/usecases/dineInOrderLifecycle.js';
import type { CafeFlowUpdateOrderStatusOutput } from '/_102050_/l2/cafeFlow/web/contracts/dineInOrderLifecycle.js';

type DineInOrderLifecycleAction =
  | 'sendToKitchen'
  | 'markOrderReady'
  | 'serveOrder'
  | 'closeOrder'
  | 'cancelOrder';

interface DineInOrderLifecycleInput {
  action: DineInOrderLifecycleAction;
  orderId: string;
  tableId?: string;
  cancellationReason?: string;
}

const VALID_ACTIONS: DineInOrderLifecycleAction[] = [
  'sendToKitchen',
  'markOrderReady',
  'serveOrder',
  'closeOrder',
  'cancelOrder',
];

export const cafeFlowDineInOrderLifecycleHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as DineInOrderLifecycleInput;

  if (!input || !input.action) {
    throw new AppError('VALIDATION_ERROR', 'action is required', 400, { field: 'action' });
  }
  if (!VALID_ACTIONS.includes(input.action)) {
    throw new AppError('VALIDATION_ERROR', `Invalid action: ${input.action}`, 400, {
      field: 'action',
      validActions: VALID_ACTIONS,
    });
  }
  if (!input.orderId) {
    throw new AppError('VALIDATION_ERROR', 'orderId is required', 400, { field: 'orderId' });
  }

  let result: { orderId: string };

  switch (input.action) {
    case 'sendToKitchen': {
      result = await sendToKitchen(ctx, { orderId: input.orderId, tableId: input.tableId });
      break;
    }
    case 'markOrderReady': {
      result = await markOrderReady(ctx, { orderId: input.orderId });
      break;
    }
    case 'serveOrder': {
      result = await serveOrder(ctx, { orderId: input.orderId });
      break;
    }
    case 'closeOrder': {
      result = await closeOrder(ctx, { orderId: input.orderId, tableId: input.tableId });
      break;
    }
    case 'cancelOrder': {
      result = await cancelOrder(ctx, {
        orderId: input.orderId,
        cancellationReason: input.cancellationReason,
        tableId: input.tableId,
      });
      break;
    }
  }

  const output: CafeFlowUpdateOrderStatusOutput = { orderId: result.orderId };
  return ok(output);
};
