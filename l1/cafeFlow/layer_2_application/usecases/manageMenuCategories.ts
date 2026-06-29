/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/manageMenuCategories.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export interface UpdateMenuCategoryInput {
  menuCategoryId: string;
  name: string;
  description?: string;
  status: string;
}

export interface UpdateMenuCategoryOutput {
  menuCategoryId: string;
  status: string;
  updatedAt: string;
}

export async function updateMenuCategory(
  ctx: RequestContext,
  input: UpdateMenuCategoryInput,
): Promise<UpdateMenuCategoryOutput> {
  const now = ctx.clock.nowIso();

  // Validate status
  if (input.status !== 'active' && input.status !== 'inactive') {
    throw new AppError(
      'VALIDATION_ERROR',
      `Invalid status "${input.status}". Allowed values: "active", "inactive".`,
      400,
      { field: 'status', allowedValues: ['active', 'inactive'] },
    );
  }

  // Load the MenuCategory MDM document
  const doc = await ctx.data.mdmDocument.get({ mdmId: input.menuCategoryId });
  if (!doc) {
    throw new AppError(
      'NOT_FOUND',
      `MenuCategory not found: ${input.menuCategoryId}`,
      404,
      { menuCategoryId: input.menuCategoryId },
    );
  }

  // Apply updated fields to the MDM document details
  const updatedDetails = {
    ...(doc.details as Record<string, unknown>),
    name: input.name,
    description: input.description ?? null,
    status: input.status,
    updatedAt: now,
  };

  await ctx.data.mdmDocument.put({
    record: {
      ...doc,
      details: updatedDetails,
    },
    expectedVersion: doc.version ?? null,
  });

  return {
    menuCategoryId: input.menuCategoryId,
    status: input.status,
    updatedAt: now,
  };
}
