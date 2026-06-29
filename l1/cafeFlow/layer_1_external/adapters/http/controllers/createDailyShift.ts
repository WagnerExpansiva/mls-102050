/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/createDailyShift.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { createDailyShift, type CreateDailyShiftInput } from '/_102050_/l1/cafeFlow/layer_2_application/usecases/createDailyShift.js';

export const cafeFlowCreateDailyShiftHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as CreateDailyShiftInput;

  if (!input || !input.shiftDate) {
    throw new AppError('VALIDATION_ERROR', 'shiftDate is required', 400, { field: 'shiftDate' });
  }
  if (!input.status) {
    throw new AppError('VALIDATION_ERROR', 'status is required', 400, { field: 'status' });
  }
  if (!input.openedAt) {
    throw new AppError('VALIDATION_ERROR', 'openedAt is required', 400, { field: 'openedAt' });
  }

  const result = await createDailyShift(ctx, input);
  return ok(result);
};
