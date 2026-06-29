/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/kitchenProductionFlow.ts" enhancement="_blank"/>

import { ok, AppError, type BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import {
  createKitchenTicket,
  startPreparation,
  markItemsReady,
  voidKitchenTicket,
} from '/_102050_/l1/cafeFlow/layer_2_application/usecases/kitchenProductionFlow.js';
import type { CafeFlowUpdateKitchenTicketStatusOutput } from '/_102050_/l2/cafeFlow/web/contracts/kitchenProductionFlow.js';

// ---------------------------------------------------------------------------
// Input shape — discriminated by `action` to dispatch to the correct usecase
// ---------------------------------------------------------------------------

type KitchenProductionFlowAction =
  | 'createKitchenTicket'
  | 'startPreparation'
  | 'markItemsReady'
  | 'voidKitchenTicket';

interface KitchenProductionFlowInput {
  action: KitchenProductionFlowAction;
  orderId: string;
  kitchenTicketId?: string;
  orderItemIds?: string[];
}

// ---------------------------------------------------------------------------
// Handler
// ---------------------------------------------------------------------------

export const cafeFlowKitchenProductionFlowHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as KitchenProductionFlowInput;

  if (!input || !input.action) {
    throw new AppError('VALIDATION_ERROR', 'action is required', 400, { field: 'action' });
  }
  if (!input.orderId) {
    throw new AppError('VALIDATION_ERROR', 'orderId is required', 400, { field: 'orderId' });
  }

  switch (input.action) {
    case 'createKitchenTicket': {
      if (!input.orderItemIds || input.orderItemIds.length === 0) {
        throw new AppError('VALIDATION_ERROR', 'orderItemIds is required for createKitchenTicket', 400, { field: 'orderItemIds' });
      }
      const result = await createKitchenTicket(ctx, {
        orderId: input.orderId,
        orderItemIds: input.orderItemIds,
      });
      const output: CafeFlowUpdateKitchenTicketStatusOutput = {
        kitchenTicketId: result.kitchenTicketId,
      };
      return ok(output);
    }

    case 'startPreparation': {
      if (!input.kitchenTicketId) {
        throw new AppError('VALIDATION_ERROR', 'kitchenTicketId is required for startPreparation', 400, { field: 'kitchenTicketId' });
      }
      const result = await startPreparation(ctx, {
        orderId: input.orderId,
        kitchenTicketId: input.kitchenTicketId,
      });
      const output: CafeFlowUpdateKitchenTicketStatusOutput = {
        kitchenTicketId: result.kitchenTicketId,
      };
      return ok(output);
    }

    case 'markItemsReady': {
      if (!input.kitchenTicketId) {
        throw new AppError('VALIDATION_ERROR', 'kitchenTicketId is required for markItemsReady', 400, { field: 'kitchenTicketId' });
      }
      if (!input.orderItemIds || input.orderItemIds.length === 0) {
        throw new AppError('VALIDATION_ERROR', 'orderItemIds is required for markItemsReady', 400, { field: 'orderItemIds' });
      }
      const result = await markItemsReady(ctx, {
        orderId: input.orderId,
        kitchenTicketId: input.kitchenTicketId,
        orderItemIds: input.orderItemIds,
      });
      const output: CafeFlowUpdateKitchenTicketStatusOutput = {
        kitchenTicketId: result.kitchenTicketId,
      };
      return ok(output);
    }

    case 'voidKitchenTicket': {
      if (!input.kitchenTicketId) {
        throw new AppError('VALIDATION_ERROR', 'kitchenTicketId is required for voidKitchenTicket', 400, { field: 'kitchenTicketId' });
      }
      const result = await voidKitchenTicket(ctx, {
        orderId: input.orderId,
        kitchenTicketId: input.kitchenTicketId,
      });
      const output: CafeFlowUpdateKitchenTicketStatusOutput = {
        kitchenTicketId: result.kitchenTicketId,
      };
      return ok(output);
    }

    default:
      throw new AppError('VALIDATION_ERROR', `Unknown action: ${(input as { action: string }).action}`, 400, { field: 'action' });
  }
};
