/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createStockConsumption.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { createStockConsumption, type CreateStockConsumptionInput } from '/_102050_/l1/cafeFlow/layer_2_application/usecases/createStockConsumption.js';

export const cafeFlowCreateStockConsumptionHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as CreateStockConsumptionInput;
  if (!input || !input.orderId) {
    throw new AppError('VALIDATION_ERROR', 'orderId is required', 400, { field: 'orderId' });
  }
  if (!input.orderItemId) {
    throw new AppError('VALIDATION_ERROR', 'orderItemId is required', 400, { field: 'orderItemId' });
  }
  const result = await createStockConsumption(ctx, input);
  return ok(result);
};
