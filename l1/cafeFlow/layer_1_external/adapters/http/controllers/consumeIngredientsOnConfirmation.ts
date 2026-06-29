/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/consumeIngredientsOnConfirmation.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import {
  consumeIngredientsOnConfirmation,
  type ConsumeIngredientsOnConfirmationInput,
} from '/_102050_/l1/cafeFlow/layer_2_application/usecases/consumeIngredientsOnConfirmation.js';
import type { CafeFlowCreateStockConsumptionOutput } from '/_102050_/l2/cafeFlow/web/contracts/consumeIngredientsOnConfirmation.js';

export const cafeFlowConsumeIngredientsOnConfirmationHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as ConsumeIngredientsOnConfirmationInput;

  if (!input || !input.orderId) {
    throw new AppError('VALIDATION_ERROR', 'orderId is required', 400, { field: 'orderId' });
  }

  const result = await consumeIngredientsOnConfirmation(ctx, input);

  const output: CafeFlowCreateStockConsumptionOutput = {
    id: result.orderId,
  };

  return ok(output);
};
