/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateOrderItemStatus.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { updateOrderItemStatus, type UpdateOrderItemStatusInput } from '/_102050_/l1/cafeFlow/layer_2_application/usecases/updateOrderItemStatus.js';

export const cafeFlowUpdateOrderItemStatusHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as UpdateOrderItemStatusInput;

  if (!input || !input.orderId) {
    throw new AppError('VALIDATION_ERROR', 'orderId is required', 400, { field: 'orderId' });
  }
  if (!input.orderItemId) {
    throw new AppError('VALIDATION_ERROR', 'orderItemId is required', 400, { field: 'orderItemId' });
  }
  if (!input.status) {
    throw new AppError('VALIDATION_ERROR', 'status is required', 400, { field: 'status' });
  }

  const result = await updateOrderItemStatus(ctx, input);
  return ok(result);
};
