/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/manageInventoryItems.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import {
  updateInventoryItem,
  type UpdateInventoryItemInput,
} from '/_102050_/l1/cafeFlow/layer_2_application/usecases/manageInventoryItems.js';
import type { CafeFlowManageInventoryItemsOutput } from '/_102050_/l2/cafeFlow/web/contracts/manageInventoryItems.js';

export const cafeFlowManageInventoryItemsHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as UpdateInventoryItemInput;

  if (!input || !input.inventoryItemId) {
    throw new AppError('VALIDATION_ERROR', 'inventoryItemId is required', 400, {
      field: 'inventoryItemId',
    });
  }

  const result = await updateInventoryItem(ctx, input);

  const output: CafeFlowManageInventoryItemsOutput = {
    inventoryItemId: result.inventoryItemId,
  };

  return ok(output);
};
