/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/browseMenuForPos.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { browseMenuForPos, type BrowseMenuForPosInput } from '/_102050_/l1/cafeFlow/layer_2_application/usecases/browseMenuForPos.js';
import type {
  CafeFlowBrowseMenuForPosInput,
  CafeFlowBrowseMenuForPosOutput,
  CafeFlowBrowseMenuForPosOutputItem,
} from '/_102050_/l2/cafeFlow/web/contracts/browseMenuForPos.js';

export const cafeFlowBrowseMenuForPosHandler: BffHandler = async ({ request, ctx }) => {
  const raw = request.params as CafeFlowBrowseMenuForPosInput | undefined;

  if (!raw) {
    throw new AppError('VALIDATION_ERROR', 'Request params are required', 400, { field: 'params' });
  }

  // Boundary validation — only the fields the usecase accepts
  const input: BrowseMenuForPosInput = {};

  if (raw.menuCategoryId !== undefined && raw.menuCategoryId !== null) {
    if (typeof raw.menuCategoryId !== 'string' || raw.menuCategoryId.trim() === '') {
      throw new AppError('VALIDATION_ERROR', 'menuCategoryId must be a non-empty string', 400, { field: 'menuCategoryId' });
    }
    input.menuCategoryId = raw.menuCategoryId;
  }

  if (raw.status !== undefined && raw.status !== null) {
    const validStatuses = ['draft', 'active', 'inactive'];
    if (!validStatuses.includes(raw.status)) {
      throw new AppError('VALIDATION_ERROR', `status must be one of: ${validStatuses.join(', ')}`, 400, { field: 'status' });
    }
    input.status = raw.status;
  }

  const result = await browseMenuForPos(ctx, input);

  // Map usecase output → contract output
  const contractOutput: CafeFlowBrowseMenuForPosOutput = result.items.map((item): CafeFlowBrowseMenuForPosOutputItem => ({
    menuItemId: item.menuItemId,
    menuCategoryId: item.menuCategoryId,
    name: item.name,
    description: item.description ?? '',
    price: item.price,
    status: item.status as CafeFlowBrowseMenuForPosOutputItem['status'],
    createdAt: '',
    updatedAt: '',
  }));

  return ok(contractOutput);
};
