/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createOrder.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { createOrder, type CreateOrderInput } from '/_102050_/l1/cafeFlow/layer_2_application/usecases/createOrder.js';

export const cafeFlowCreateOrderHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as CreateOrderInput;

  if (!input || !input.dailyShiftId) {
    throw new AppError('VALIDATION_ERROR', 'dailyShiftId is required', 400, { field: 'dailyShiftId' });
  }
  if (!input.orderType) {
    throw new AppError('VALIDATION_ERROR', 'orderType is required', 400, { field: 'orderType' });
  }

  const result = await createOrder(ctx, input);
  return ok(result);
};
