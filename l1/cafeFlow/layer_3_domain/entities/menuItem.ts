/// <mls fileReference="_102050_/l1/cafeFlow/layer_3_domain/entities/menuItem.ts" enhancement="_blank"/>

export type MenuItemStatus = 'draft' | 'active' | 'inactive';

export interface RecipeComponent {
  recipeComponentId: string;
  menuItemId: string;
  inventoryItemId: string;
  quantity: number;
  createdAt: string;
  updatedAt: string;
}

export interface MenuItem {
  menuItemId: string;
  menuCategoryId: string;
  name: string;
  description: string | null;
  price: number;
  status: MenuItemStatus;
  recipeComponents: RecipeComponent[];
  createdAt: string;
  updatedAt: string;
}

export const MENU_ITEM_STATUS_TRANSITIONS: Record<MenuItemStatus, MenuItemStatus[]> = {
  draft: ['active'],
  active: ['inactive'],
  inactive: ['active'],
};

export function canTransitionMenuItem(from: MenuItemStatus, to: MenuItemStatus): boolean {
  return MENU_ITEM_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

export function menuItemPriceIsValid(price: number): boolean {
  return price > 0;
}

export function menuItemNameIsValid(name: string): boolean {
  return name.trim().length > 0;
}

export function canDeleteMenuItem(menuItem: Pick<MenuItem, 'status'>): boolean {
  return menuItem.status !== 'active';
}
