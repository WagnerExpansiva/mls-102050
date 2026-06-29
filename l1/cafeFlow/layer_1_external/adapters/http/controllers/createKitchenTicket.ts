/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createKitchenTicket.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { createKitchenTicket, type CreateKitchenTicketInput } from '/_102050_/l1/cafeFlow/layer_2_application/usecases/createKitchenTicket.js';

export const cafeFlowCreateKitchenTicketHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as CreateKitchenTicketInput;
  if (!input || !input.orderId) {
    throw new AppError('VALIDATION_ERROR', 'orderId is required', 400, { field: 'orderId' });
  }
  const result = await createKitchenTicket(ctx, input);
  return ok(result);
};
