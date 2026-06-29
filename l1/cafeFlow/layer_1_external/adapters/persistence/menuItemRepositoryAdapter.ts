/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/menuItemRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IMenuItemRepository, MenuItemFilter } from '/_102050_/l1/cafeFlow/layer_2_application/ports/menuItemRepository.js';
import type { MenuItem, MenuItemStatus, RecipeComponent } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/menuItem.js';

interface MenuItemRow {
  menu_item_id: string;
  menu_category_id: string;
  status: string;
  created_at: string;
  details: string | null;
}

interface MenuItemDetails {
  name: string;
  description: string | null;
  price: number;
  updatedAt: string;
  recipeComponents: RecipeComponent[];
}

function toRow(item: MenuItem): MenuItemRow {
  const details: MenuItemDetails = {
    name: item.name,
    description: item.description,
    price: item.price,
    updatedAt: item.updatedAt,
    recipeComponents: item.recipeComponents,
  };
  return {
    menu_item_id: item.menuItemId,
    menu_category_id: item.menuCategoryId,
    status: item.status,
    created_at: item.createdAt,
    details: JSON.stringify(details),
  };
}

function parseDetails(row: MenuItemRow): MenuItemDetails {
  try {
    return JSON.parse(row.details ?? '{}') as MenuItemDetails;
  } catch {
    return {
      name: '',
      description: null,
      price: 0,
      updatedAt: row.created_at,
      recipeComponents: [],
    };
  }
}

function toDomain(row: MenuItemRow): MenuItem {
  const d = parseDetails(row);
  return {
    menuItemId: row.menu_item_id,
    menuCategoryId: row.menu_category_id,
    name: d.name,
    description: d.description,
    price: d.price,
    status: row.status as MenuItemStatus,
    recipeComponents: d.recipeComponents ?? [],
    createdAt: row.created_at,
    updatedAt: d.updatedAt,
  };
}

export function createMenuItemRepositoryAdapter(ctx: RequestContext): IMenuItemRepository {
  const getTable = () => ctx.data.moduleData.getTable<MenuItemRow>('menu_item');

  return {
    async getById(menuItemId) {
      const repo = await getTable();
      const row = await repo.findOne({ where: { menu_item_id: menuItemId } });
      if (!row) throw new AppError('NOT_FOUND', `MenuItem ${menuItemId} not found`, 404, { menuItemId });
      return toDomain(row);
    },

    async list(filter?: MenuItemFilter) {
      const repo = await getTable();
      const where: Partial<MenuItemRow> = {};
      if (filter?.menuCategoryId) where.menu_category_id = filter.menuCategoryId;
      if (filter?.status) where.status = filter.status;
      const rows = await repo.findMany({
        where,
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      let items = rows.map(toDomain);
      if (filter?.name) {
        const lower = filter.name.toLowerCase();
        items = items.filter((i) => i.name.toLowerCase().includes(lower));
      }
      return items;
    },

    async save(aggregate) {
      const repo = await getTable();
      const existing = await repo.findOne({ where: { menu_item_id: aggregate.menuItemId } });
      if (existing) {
        await repo.update({ where: { menu_item_id: aggregate.menuItemId }, patch: toRow(aggregate) });
      } else {
        await repo.insert({ record: toRow(aggregate) });
      }
    },

    async findByCategory(category) {
      const repo = await getTable();
      const rows = await repo.findMany({
        where: { menu_category_id: category },
        orderBy: { field: 'created_at', direction: 'asc' },
      });
      return rows.map(toDomain);
    },

    async findAvailable() {
      const repo = await getTable();
      const rows = await repo.findMany({
        where: { status: 'active' },
        orderBy: { field: 'created_at', direction: 'asc' },
      });
      return rows.map(toDomain);
    },

    async existsByName(name) {
      const repo = await getTable();
      const rows = await repo.findMany({ limit: 1000 });
      return rows.some((r) => {
        const d = parseDetails(r);
        return d.name.toLowerCase() === name.toLowerCase();
      });
    },
  };
}
