/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/viewKitchenTickets.ts" enhancement="_blank"/>
import { ok, type BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { viewKitchenTickets, type ViewKitchenTicketsInput } from '/_102050_/l1/cafeFlow/layer_2_application/usecases/viewKitchenTickets.js';

export const cafeFlowViewKitchenTicketsHandler: BffHandler = async ({ request, ctx }) => {
  const input = (request.params ?? {}) as ViewKitchenTicketsInput;

  if (input.status !== undefined && typeof input.status !== 'string') {
    throw new AppError('VALIDATION_ERROR', 'status must be a string', 400, { field: 'status' });
  }

  if (input.orderId !== undefined && typeof input.orderId !== 'string') {
    throw new AppError('VALIDATION_ERROR', 'orderId must be a string', 400, { field: 'orderId' });
  }

  const result = await viewKitchenTickets(ctx, input);
  return ok(result.tickets);
};
