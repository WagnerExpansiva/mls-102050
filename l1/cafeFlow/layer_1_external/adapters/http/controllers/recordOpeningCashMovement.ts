/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/recordOpeningCashMovement.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import {
  recordOpeningCashMovement,
  type RecordOpeningCashMovementInput,
} from '/_102050_/l1/cafeFlow/layer_2_application/usecases/recordOpeningCashMovement.js';

export const cafeFlowRecordOpeningCashMovementHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as RecordOpeningCashMovementInput;

  if (!input || !input.dailyShiftId) {
    throw new AppError('VALIDATION_ERROR', 'dailyShiftId is required', 400, { field: 'dailyShiftId' });
  }

  if (input.amount === undefined || input.amount === null || typeof input.amount !== 'number') {
    throw new AppError('VALIDATION_ERROR', 'amount is required and must be a number', 400, { field: 'amount' });
  }

  if (!input.reason || typeof input.reason !== 'string' || input.reason.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'reason is required', 400, { field: 'reason' });
  }

  const result = await recordOpeningCashMovement(ctx, input);
  return ok(result);
};
