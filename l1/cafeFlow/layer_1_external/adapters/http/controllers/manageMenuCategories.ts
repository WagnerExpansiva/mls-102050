/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/manageMenuCategories.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { updateMenuCategory, type UpdateMenuCategoryInput } from '/_102050_/l1/cafeFlow/layer_2_application/usecases/manageMenuCategories.js';
import type { CafeFlowManageMenuCategoriesInput, CafeFlowManageMenuCategoriesOutput } from '/_102050_/l2/cafeFlow/web/contracts/manageMenuCategories.js';

export const cafeFlowManageMenuCategoriesHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as CafeFlowManageMenuCategoriesInput;

  if (!input || !input.menuCategoryId) {
    throw new AppError('VALIDATION_ERROR', 'menuCategoryId is required', 400, { field: 'menuCategoryId' });
  }
  if (!input.name) {
    throw new AppError('VALIDATION_ERROR', 'name is required', 400, { field: 'name' });
  }
  if (!input.status || (input.status !== 'active' && input.status !== 'inactive')) {
    throw new AppError('VALIDATION_ERROR', 'status is required and must be "active" or "inactive"', 400, { field: 'status' });
  }

  const usecaseInput: UpdateMenuCategoryInput = {
    menuCategoryId: input.menuCategoryId,
    name: input.name,
    description: input.description,
    status: input.status,
  };

  const result = await updateMenuCategory(ctx, usecaseInput);

  const output: CafeFlowManageMenuCategoriesOutput = {
    menuCategoryId: result.menuCategoryId,
  };

  return ok(output);
};
