/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/addOrderItem.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { addOrderItem, type AddOrderItemInput } from '/_102050_/l1/cafeFlow/layer_2_application/usecases/addOrderItem.js';

export const cafeFlowAddOrderItemHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as AddOrderItemInput;

  if (!input || !input.orderId) {
    throw new AppError('VALIDATION_ERROR', 'orderId is required', 400, { field: 'orderId' });
  }
  if (!input.menuItemId) {
    throw new AppError('VALIDATION_ERROR', 'menuItemId is required', 400, { field: 'menuItemId' });
  }
  if (input.quantity === undefined || input.quantity === null || input.quantity < 1) {
    throw new AppError('VALIDATION_ERROR', 'quantity must be at least 1', 400, { field: 'quantity' });
  }

  const result = await addOrderItem(ctx, input);
  return ok(result);
};
