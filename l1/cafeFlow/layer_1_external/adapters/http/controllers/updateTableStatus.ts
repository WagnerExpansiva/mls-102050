/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/updateTableStatus.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { updateTableStatus, type UpdateTableStatusInput } from '/_102050_/l1/cafeFlow/layer_2_application/usecases/updateTableStatus.js';

export const cafeFlowUpdateTableStatusHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as UpdateTableStatusInput;

  if (!input || !input.tableId) {
    throw new AppError('VALIDATION_ERROR', 'tableId is required', 400, { field: 'tableId' });
  }

  if (!input.status) {
    throw new AppError('VALIDATION_ERROR', 'status is required', 400, { field: 'status' });
  }

  const result = await updateTableStatus(ctx, input);
  return ok(result);
};
