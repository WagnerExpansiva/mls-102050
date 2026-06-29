/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/browseMenuForPos.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IMenuItemRepository, MenuItemFilter } from '/_102050_/l1/cafeFlow/layer_2_application/ports/menuItemRepository.js';
import type { MenuItem, MenuItemStatus } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/menuItem.js';

export interface BrowseMenuForPosInput {
  menuCategoryId?: string;
  status?: string;
}

export interface BrowseMenuForPosItem {
  menuItemId: string;
  menuCategoryId: string;
  categoryName: string;
  name: string;
  description?: string | null;
  price: number;
  status: string;
}

export interface BrowseMenuForPosOutput {
  items: BrowseMenuForPosItem[];
}

/**
 * Rule aiOutputLanguageSelection: selects the appropriate language for display fields
 * (name, description, categoryName). In the current implementation the default language
 * is used — the fields are returned as stored. When multilingual support is added, this
 * is the place where the language tag from the request context would drive field selection.
 */
function applyLanguageSelection(
  field: string | null | undefined,
): string | null {
  return field ?? null;
}

export async function browseMenuForPos(
  ctx: RequestContext,
  input: BrowseMenuForPosInput,
): Promise<BrowseMenuForPosOutput> {
  const menuItems = resolveRepository<IMenuItemRepository>(ctx, 'MenuItem');

  // 1. Build filter from optional input fields
  const filter: MenuItemFilter = {};
  if (input.menuCategoryId) {
    filter.menuCategoryId = input.menuCategoryId;
  }
  if (input.status) {
    filter.status = input.status as MenuItemStatus;
  }

  // 2. Query MenuItem entities via the port
  const items: MenuItem[] = await menuItems.list(filter);

  // 3. Collect distinct menuCategoryIds
  const distinctCategoryIds = Array.from(
    new Set(items.map((item) => item.menuCategoryId)),
  );

  // 4. Resolve each MenuCategory name from MDM
  const categoryNameById = new Map<string, string>();
  for (const categoryId of distinctCategoryIds) {
    const doc = await ctx.data.mdmDocument.get({ mdmId: categoryId });
    if (doc) {
      const details = doc.details as Record<string, unknown> | null;
      const name =
        (details?.name as string | undefined) ??
        (details?.title as string | undefined) ??
        categoryId;
      categoryNameById.set(categoryId, name);
    } else {
      // Category not found in MDM — fall back to the id so the POS still displays something
      categoryNameById.set(categoryId, categoryId);
    }
  }

  // 5. Build enriched output with language-selected display fields
  const result: BrowseMenuForPosItem[] = items.map((item) => ({
    menuItemId: item.menuItemId,
    menuCategoryId: item.menuCategoryId,
    categoryName: applyLanguageSelection(categoryNameById.get(item.menuCategoryId)) ?? item.menuCategoryId,
    name: applyLanguageSelection(item.name) ?? '',
    description: applyLanguageSelection(item.description),
    price: item.price,
    status: item.status,
  }));

  return { items: result };
}
