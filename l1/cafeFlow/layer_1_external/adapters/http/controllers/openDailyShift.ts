/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/openDailyShift.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { openDailyShift, type OpenDailyShiftInput } from '/_102050_/l1/cafeFlow/layer_2_application/usecases/openDailyShift.js';

export const cafeFlowOpenDailyShiftHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as OpenDailyShiftInput;

  if (!input || !input.shiftDate) {
    throw new AppError('VALIDATION_ERROR', 'shiftDate is required', 400, { field: 'shiftDate' });
  }

  if (typeof input.shiftDate !== 'string' || input.shiftDate.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'shiftDate must be a non-empty string', 400, { field: 'shiftDate' });
  }

  if (input.openingCashBalance !== undefined && typeof input.openingCashBalance !== 'number') {
    throw new AppError('VALIDATION_ERROR', 'openingCashBalance must be a number when provided', 400, { field: 'openingCashBalance' });
  }

  const result = await openDailyShift(ctx, input);

  return ok({ dailyShiftId: result.dailyShiftId });
};
