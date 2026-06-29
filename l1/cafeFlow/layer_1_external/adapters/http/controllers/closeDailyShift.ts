/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/closeDailyShift.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { closeDailyShift, type CloseDailyShiftInput } from '/_102050_/l1/cafeFlow/layer_2_application/usecases/closeDailyShift.js';
import type { CafeFlowUpdateDailyShiftStatusOutput } from '/_102050_/l2/cafeFlow/web/contracts/closeDailyShift.js';

export const cafeFlowCloseDailyShiftHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as CloseDailyShiftInput;

  if (!input || !input.dailyShiftId) {
    throw new AppError('VALIDATION_ERROR', 'dailyShiftId is required', 400, { field: 'dailyShiftId' });
  }

  const result = await closeDailyShift(ctx, input);

  const output: CafeFlowUpdateDailyShiftStatusOutput = {
    dailyShiftId: result.dailyShiftId,
  };

  return ok(output);
};
