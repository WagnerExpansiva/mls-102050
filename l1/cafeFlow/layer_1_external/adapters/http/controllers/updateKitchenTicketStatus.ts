/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateKitchenTicketStatus.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import {
  updateKitchenTicketStatus,
  type UpdateKitchenTicketStatusInput,
} from '/_102050_/l1/cafeFlow/layer_2_application/usecases/updateKitchenTicketStatus.js';

export const cafeFlowUpdateKitchenTicketStatusHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as UpdateKitchenTicketStatusInput;

  if (!input || !input.orderId) {
    throw new AppError('VALIDATION_ERROR', 'orderId is required', 400, { field: 'orderId' });
  }
  if (!input.kitchenTicketId) {
    throw new AppError('VALIDATION_ERROR', 'kitchenTicketId is required', 400, { field: 'kitchenTicketId' });
  }
  if (!input.status) {
    throw new AppError('VALIDATION_ERROR', 'status is required', 400, { field: 'status' });
  }

  const result = await updateKitchenTicketStatus(ctx, input);
  return ok(result);
};
