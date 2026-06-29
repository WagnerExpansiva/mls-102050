/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/manageTables.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { updateTable, type UpdateTableInput } from '/_102050_/l1/cafeFlow/layer_2_application/usecases/manageTables.js';
import type { CafeFlowManageTablesInput, CafeFlowManageTablesOutput } from '/_102050_/l2/cafeFlow/web/contracts/manageTables.js';

export const cafeFlowManageTablesHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as CafeFlowManageTablesInput;

  if (!input || !input.tableId) {
    throw new AppError('VALIDATION_ERROR', 'tableId is required', 400, { field: 'tableId' });
  }
  if (!input.number) {
    throw new AppError('VALIDATION_ERROR', 'number is required', 400, { field: 'number' });
  }
  if (!input.status) {
    throw new AppError('VALIDATION_ERROR', 'status is required', 400, { field: 'status' });
  }

  const usecaseInput: UpdateTableInput = {
    tableId: input.tableId,
    number: input.number,
    status: input.status,
  };

  const result = await updateTable(ctx, usecaseInput);

  const output: CafeFlowManageTablesOutput = {
    tableId: result.tableId,
  };

  return ok(output);
};
