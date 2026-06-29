/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/recordPayment.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { recordPayment, type RecordPaymentInput } from '/_102050_/l1/cafeFlow/layer_2_application/usecases/recordPayment.js';
import type { CafeFlowRecordPaymentOutput } from '/_102050_/l2/cafeFlow/web/contracts/recordPayment.js';

export const cafeFlowRecordPaymentHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as RecordPaymentInput;

  if (!input || !input.orderId) {
    throw new AppError('VALIDATION_ERROR', 'orderId is required', 400, { field: 'orderId' });
  }
  if (!input.dailyShiftId) {
    throw new AppError('VALIDATION_ERROR', 'dailyShiftId is required', 400, { field: 'dailyShiftId' });
  }
  if (!input.method) {
    throw new AppError('VALIDATION_ERROR', 'method is required', 400, { field: 'method' });
  }
  if (input.amount === undefined || input.amount === null || input.amount <= 0) {
    throw new AppError('VALIDATION_ERROR', 'amount must be a positive number', 400, { field: 'amount' });
  }
  if (!input.status) {
    throw new AppError('VALIDATION_ERROR', 'status is required', 400, { field: 'status' });
  }

  const result = await recordPayment(ctx, input);

  const output: CafeFlowRecordPaymentOutput = {
    paymentId: result.paymentId,
  };

  return ok(output);
};
