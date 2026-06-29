/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/manageMenuItems.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IMenuItemRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/menuItemRepository.js';
import type { MenuItem, MenuItemStatus } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/menuItem.js';
import {
  canTransitionMenuItem,
  menuItemNameIsValid,
  menuItemPriceIsValid,
} from '/_102050_/l1/cafeFlow/layer_3_domain/entities/menuItem.js';

export interface UpdateMenuItemInput {
  menuItemId: string;
  menuCategoryId?: string;
  name?: string;
  description?: string;
  price?: number;
  status?: string;
}

export interface UpdateMenuItemOutput {
  menuItemId: string;
  status: string;
  updatedAt: string;
}

export async function updateMenuItem(
  ctx: RequestContext,
  input: UpdateMenuItemInput,
): Promise<UpdateMenuItemOutput> {
  return ctx.data.runInTransaction(async (tx) => {
    const menuItems = resolveRepository<IMenuItemRepository>(ctx, 'MenuItem');

    // 1. Load the MenuItem aggregate by menuItemId
    const existing = await menuItems.getById(input.menuItemId);

    // 2. Validate that the MenuItem exists; throw NotFound if missing
    if (!existing) {
      throw new AppError(
        'NOT_FOUND',
        `MenuItem not found: ${input.menuItemId}`,
        404,
        { menuItemId: input.menuItemId },
      );
    }

    // 3. If menuCategoryId is provided, verify the MenuCategory exists via MDM and is active
    if (input.menuCategoryId !== undefined) {
      const doc = await tx.mdmDocument.get({ mdmId: input.menuCategoryId });
      if (!doc) {
        throw new AppError(
          'NOT_FOUND',
          `MenuCategory not found: ${input.menuCategoryId}`,
          404,
          { menuCategoryId: input.menuCategoryId },
        );
      }
      const category = doc.details as { status?: string };
      if (category.status !== 'active') {
        throw new AppError(
          'VALIDATION_ERROR',
          `MenuCategory is not active: ${input.menuCategoryId}`,
          400,
          { menuCategoryId: input.menuCategoryId, status: category.status },
        );
      }
    }

    // 4. Apply field changes to the loaded MenuItem aggregate
    const now = ctx.clock.nowIso();
    const updated: MenuItem = {
      ...existing,
      recipeComponents: existing.recipeComponents,
    };

    if (input.name !== undefined) {
      if (!menuItemNameIsValid(input.name)) {
        throw new AppError(
          'VALIDATION_ERROR',
          'menuItemNameIsValid: name must not be empty.',
          400,
          { ruleId: 'menuItemNameIsValid' },
        );
      }
      updated.name = input.name;
    }

    if (input.description !== undefined) {
      updated.description = input.description;
    }

    if (input.price !== undefined) {
      if (!menuItemPriceIsValid(input.price)) {
        throw new AppError(
          'VALIDATION_ERROR',
          'menuItemPriceIsValid: price must be greater than zero.',
          400,
          { ruleId: 'menuItemPriceIsValid' },
        );
      }
      updated.price = input.price;
    }

    if (input.menuCategoryId !== undefined) {
      updated.menuCategoryId = input.menuCategoryId;
    }

    // 5. Validate status transition rules within the MenuItem entity
    if (input.status !== undefined) {
      const newStatus = input.status as MenuItemStatus;
      if (!canTransitionMenuItem(existing.status, newStatus)) {
        throw new AppError(
          'CONFLICT',
          `Invalid status transition from "${existing.status}" to "${newStatus}".`,
          409,
          { ruleId: 'canTransitionMenuItem', from: existing.status, to: newStatus },
        );
      }
      updated.status = newStatus;
    }

    updated.updatedAt = now;

    // 6. Save the updated MenuItem aggregate
    await menuItems.save(updated);

    // 7. Return menuItemId, current status, and updatedAt timestamp
    return {
      menuItemId: updated.menuItemId,
      status: updated.status,
      updatedAt: updated.updatedAt,
    };
  });
}
