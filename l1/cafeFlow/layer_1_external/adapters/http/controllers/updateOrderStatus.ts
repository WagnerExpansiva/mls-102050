/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateOrderStatus.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { updateOrderStatus, type UpdateOrderStatusInput } from '/_102050_/l1/cafeFlow/layer_2_application/usecases/updateOrderStatus.js';

export const cafeFlowUpdateOrderStatusHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as UpdateOrderStatusInput;

  if (!input || !input.orderId) {
    throw new AppError('VALIDATION_ERROR', 'orderId is required', 400, { field: 'orderId' });
  }
  if (!input.dailyShiftId) {
    throw new AppError('VALIDATION_ERROR', 'dailyShiftId is required', 400, { field: 'dailyShiftId' });
  }
  if (!input.status) {
    throw new AppError('VALIDATION_ERROR', 'status is required', 400, { field: 'status' });
  }

  const result = await updateOrderStatus(ctx, input);
  return ok(result);
};
