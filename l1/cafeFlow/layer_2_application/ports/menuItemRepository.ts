/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/ports/menuItemRepository.ts" enhancement="_blank"/>
import type { MenuItem, MenuItemStatus } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/menuItem.js';

export type MenuItemId = string;

export type Category = string;

export type MenuItemCollection = MenuItem[];

export interface MenuItemFilter {
  menuCategoryId?: string;
  status?: MenuItemStatus;
  name?: string;
}

export interface IMenuItemRepository {
  getById(menuItemId: MenuItemId): Promise<MenuItem>;
  list(filter?: MenuItemFilter): Promise<MenuItemCollection>;
  save(aggregate: MenuItem): Promise<void>;
  findByCategory(category: Category): Promise<MenuItemCollection>;
  findAvailable(): Promise<MenuItemCollection>;
  existsByName(name: string): Promise<boolean>;
}
