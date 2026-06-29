/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/manageMenuItems.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { updateMenuItem, type UpdateMenuItemInput } from '/_102050_/l1/cafeFlow/layer_2_application/usecases/manageMenuItems.js';
import type { CafeFlowManageMenuItemsInput, CafeFlowManageMenuItemsOutput } from '_102050_/l2/cafeFlow/web/contracts/manageMenuItems.js';

export const cafeFlowManageMenuItemsHandler: BffHandler = async ({ request, ctx }) => {
  const body = request.params as CafeFlowManageMenuItemsInput;

  if (!body || !body.menuItemId) {
    throw new AppError('VALIDATION_ERROR', 'menuItemId is required', 400, { field: 'menuItemId' });
  }
  if (body.name === undefined || body.name === null || String(body.name).trim() === '') {
    throw new AppError('VALIDATION_ERROR', 'name is required', 400, { field: 'name' });
  }
  if (body.price === undefined || body.price === null || typeof body.price !== 'number') {
    throw new AppError('VALIDATION_ERROR', 'price is required', 400, { field: 'price' });
  }
  if (!body.status || !['draft', 'active', 'inactive'].includes(body.status)) {
    throw new AppError('VALIDATION_ERROR', 'status must be one of: draft, active, inactive', 400, { field: 'status' });
  }

  const input: UpdateMenuItemInput = {
    menuItemId: body.menuItemId,
    menuCategoryId: body.menuCategoryId,
    name: body.name,
    description: body.description,
    price: body.price,
    status: body.status,
  };

  const result = await updateMenuItem(ctx, input);

  const output: CafeFlowManageMenuItemsOutput = {
    menuItemId: result.menuItemId,
  };

  return ok(output);
};
