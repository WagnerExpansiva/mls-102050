/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/takeoutOrderLifecycle.ts" enhancement="_blank"/>

import { ok, AppError, type BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import {
  createTakeoutOrder,
  type CreateTakeoutOrderInput,
  sendToKitchen,
  type SendToKitchenInput,
  startPreparation,
  type StartPreparationInput,
  markReady,
  type MarkReadyInput,
  closeOrder,
  type CloseOrderInput,
  cancelOrder,
  type CancelOrderInput,
} from '/_102050_/l1/cafeFlow/layer_2_application/usecases/takeoutOrderLifecycle.js';
import type {
  CafeFlowCreateOrderOutput,
  CafeFlowCreateKitchenTicketOutput,
  CafeFlowUpdateOrderStatusOutput,
} from '/_102050_/l2/cafeFlow/web/contracts/takeoutOrderLifecycle.js';

type LifecycleAction =
  | 'create'
  | 'sendToKitchen'
  | 'startPreparation'
  | 'markReady'
  | 'close'
  | 'cancel';

interface LifecycleRequest {
  action: LifecycleAction;
  dailyShiftId?: string;
  customerName?: string;
  customerPhone?: string;
  notes?: string;
  items?: CreateTakeoutOrderInput['items'];
  orderId?: string;
  cancellationReason?: string;
}

export const cafeFlowTakeoutOrderLifecycleHandler: BffHandler = async ({ request, ctx }) => {
  const params = request.params as LifecycleRequest;

  if (!params || !params.action) {
    throw new AppError('VALIDATION_ERROR', 'action is required', 400, { field: 'action' });
  }

  switch (params.action) {
    case 'create': {
      if (!params.dailyShiftId) {
        throw new AppError('VALIDATION_ERROR', 'dailyShiftId is required', 400, { field: 'dailyShiftId' });
      }
      if (!params.items || !Array.isArray(params.items) || params.items.length === 0) {
        throw new AppError('VALIDATION_ERROR', 'items must be a non-empty array', 400, { field: 'items' });
      }
      for (const item of params.items) {
        if (!item.menuItemId) {
          throw new AppError('VALIDATION_ERROR', 'each item requires menuItemId', 400, { field: 'items.menuItemId' });
        }
        if (!item.quantity || item.quantity <= 0) {
          throw new AppError('VALIDATION_ERROR', 'each item requires quantity > 0', 400, { field: 'items.quantity' });
        }
        if (item.unitPrice == null || item.unitPrice < 0) {
          throw new AppError('VALIDATION_ERROR', 'each item requires unitPrice >= 0', 400, { field: 'items.unitPrice' });
        }
      }

      const input: CreateTakeoutOrderInput = {
        dailyShiftId: params.dailyShiftId,
        customerName: params.customerName,
        customerPhone: params.customerPhone,
        notes: params.notes,
        items: params.items,
      };
      const result = await createTakeoutOrder(ctx, input);
      const output: CafeFlowCreateOrderOutput = { orderId: result.orderId };
      return ok(output);
    }

    case 'sendToKitchen': {
      if (!params.orderId) {
        throw new AppError('VALIDATION_ERROR', 'orderId is required', 400, { field: 'orderId' });
      }
      const input: SendToKitchenInput = { orderId: params.orderId };
      const result = await sendToKitchen(ctx, input);
      const output: CafeFlowCreateKitchenTicketOutput = { kitchenTicketId: result.kitchenTicketId };
      return ok(output);
    }

    case 'startPreparation': {
      if (!params.orderId) {
        throw new AppError('VALIDATION_ERROR', 'orderId is required', 400, { field: 'orderId' });
      }
      const input: StartPreparationInput = { orderId: params.orderId };
      const result = await startPreparation(ctx, input);
      const output: CafeFlowUpdateOrderStatusOutput = { orderId: result.orderId };
      return ok(output);
    }

    case 'markReady': {
      if (!params.orderId) {
        throw new AppError('VALIDATION_ERROR', 'orderId is required', 400, { field: 'orderId' });
      }
      const input: MarkReadyInput = { orderId: params.orderId };
      const result = await markReady(ctx, input);
      const output: CafeFlowUpdateOrderStatusOutput = { orderId: result.orderId };
      return ok(output);
    }

    case 'close': {
      if (!params.orderId) {
        throw new AppError('VALIDATION_ERROR', 'orderId is required', 400, { field: 'orderId' });
      }
      const input: CloseOrderInput = { orderId: params.orderId };
      const result = await closeOrder(ctx, input);
      const output: CafeFlowUpdateOrderStatusOutput = { orderId: result.orderId };
      return ok(output);
    }

    case 'cancel': {
      if (!params.orderId) {
        throw new AppError('VALIDATION_ERROR', 'orderId is required', 400, { field: 'orderId' });
      }
      if (!params.cancellationReason) {
        throw new AppError('VALIDATION_ERROR', 'cancellationReason is required', 400, { field: 'cancellationReason' });
      }
      const input: CancelOrderInput = {
        orderId: params.orderId,
        cancellationReason: params.cancellationReason,
      };
      const result = await cancelOrder(ctx, input);
      const output: CafeFlowUpdateOrderStatusOutput = { orderId: result.orderId };
      return ok(output);
    }

    default:
      throw new AppError(
        'VALIDATION_ERROR',
        `Unknown action: ${params.action}`,
        400,
        { action: params.action },
      );
  }
};
