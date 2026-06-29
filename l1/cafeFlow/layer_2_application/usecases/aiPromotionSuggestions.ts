/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/aiPromotionSuggestions.ts" enhancement="_blank"/>

import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IOrderRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.js';
import type { IMenuItemRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/menuItemRepository.js';
import type { Order, OrderItem } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/order.js';
import type { MenuItem } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/menuItem.js';

export type PromotionSuggestionType = 'upsell' | 'crossSell' | 'bundle' | 'discount';

export interface PromotionSuggestion {
  menuItemId: string;
  menuItemName: string;
  suggestionType: PromotionSuggestionType;
  description: string;
  originalPrice: number;
  suggestedPrice: number;
  discountPercentage: number;
}

export interface AiPromotionSuggestionsInput {
  orderId: string;
}

export interface AiPromotionSuggestionsOutput {
  orderId: string;
  suggestions: PromotionSuggestion[];
}

export async function aiPromotionSuggestions(
  ctx: RequestContext,
  input: AiPromotionSuggestionsInput,
): Promise<AiPromotionSuggestionsOutput> {
  const orderRepo = resolveRepository<IOrderRepository>(ctx, 'Order');
  const menuItemRepo = resolveRepository<IMenuItemRepository>(ctx, 'MenuItem');

  // Step 1: Load the Order aggregate by orderId
  const order: Order = await orderRepo.getById(input.orderId);

  if (!order || !order.orderId) {
    throw new AppError('NOT_FOUND', `Order not found: ${input.orderId}`, 404, { orderId: input.orderId });
  }

  // Step 2: Collect all menuItemIds from the order items
  const orderItems: OrderItem[] = order.items ?? [];
  const orderedMenuItemIds: string[] = orderItems.map((item) => item.menuItemId);

  // Step 3: Load referenced MenuItems to obtain names, prices, categories and status
  const allMenuItems: MenuItem[] = await menuItemRepo.list();
  const orderedMenuItems: MenuItem[] = allMenuItems.filter((mi) => orderedMenuItemIds.includes(mi.menuItemId));

  // Step 4: Filter MenuItems to only active ones for suggestion candidates
  const activeMenuItems: MenuItem[] = allMenuItems.filter((mi) => mi.status === 'active');
  const candidateMenuItems: MenuItem[] = activeMenuItems.filter(
    (mi) => !orderedMenuItemIds.includes(mi.menuItemId),
  );

  // Step 5: Analyze current order items
  const orderTotal: number = order.totalAmount;
  const orderedCategories: string[] = [...new Set(orderedMenuItems.map((mi) => mi.menuCategoryId))];
  const orderedItemMap: Map<string, MenuItem> = new Map(orderedMenuItems.map((mi) => [mi.menuItemId, mi]));

  // Step 6: Generate promotion suggestions
  const suggestions: PromotionSuggestion[] = [];

  // 6a. Upsell suggestions: suggest a higher-priced item in the same category
  for (const orderedItem of orderItems) {
    const orderedMenuItem = orderedItemMap.get(orderedItem.menuItemId);
    if (!orderedMenuItem) continue;

    const sameCategoryUpsells = candidateMenuItems.filter(
      (mi) => mi.menuCategoryId === orderedMenuItem.menuCategoryId && mi.price > orderedMenuItem.price,
    );

    for (const upsell of sameCategoryUpsells.slice(0, 2)) {
      const priceDiff = upsell.price - orderedMenuItem.price;
      const discountPercentage = 0;
      suggestions.push({
        menuItemId: upsell.menuItemId,
        menuItemName: upsell.name,
        suggestionType: 'upsell',
        description: `Upgrade from "${orderedMenuItem.name}" to "${upsell.name}" for just ${priceDiff.toFixed(2)} more.`,
        originalPrice: upsell.price,
        suggestedPrice: upsell.price,
        discountPercentage,
      });
    }
  }

  // 6b. Cross-sell suggestions: suggest items from different categories
  for (const candidate of candidateMenuItems) {
    if (!orderedCategories.includes(candidate.menuCategoryId)) {
      const discountPercentage = 5;
      const suggestedPrice = candidate.price * (1 - discountPercentage / 100);
      suggestions.push({
        menuItemId: candidate.menuItemId,
        menuItemName: candidate.name,
        suggestionType: 'crossSell',
        description: `Pair your order with "${candidate.name}" — a great complement from a different category.`,
        originalPrice: candidate.price,
        suggestedPrice: Number(suggestedPrice.toFixed(2)),
        discountPercentage,
      });
    }
  }

  // 6c. Bundle suggestions: suggest 2+ active items from categories not yet ordered
  const unbundledCandidates = candidateMenuItems.filter(
    (mi) => !orderedCategories.includes(mi.menuCategoryId),
  );
  if (unbundledCandidates.length >= 2 && orderTotal > 0) {
    const [first, second] = unbundledCandidates;
    const bundleOriginalPrice = first.price + second.price;
    const discountPercentage = 15;
    const suggestedPrice = bundleOriginalPrice * (1 - discountPercentage / 100);
    suggestions.push({
      menuItemId: first.menuItemId,
      menuItemName: `${first.name} + ${second.name}`,
      suggestionType: 'bundle',
      description: `Bundle "${first.name}" and "${second.name}" together and save ${discountPercentage}%.`,
      originalPrice: Number(bundleOriginalPrice.toFixed(2)),
      suggestedPrice: Number(suggestedPrice.toFixed(2)),
      discountPercentage,
    });
  }

  // 6d. Discount suggestions: if the order total is high, suggest a discount on a popular active item
  if (orderTotal >= 50 && candidateMenuItems.length > 0) {
    const discountCandidate = candidateMenuItems[0];
    const discountPercentage = 10;
    const suggestedPrice = discountCandidate.price * (1 - discountPercentage / 100);
    suggestions.push({
      menuItemId: discountCandidate.menuItemId,
      menuItemName: discountCandidate.name,
      suggestionType: 'discount',
      description: `Your order qualifies for a special ${discountPercentage}% discount on "${discountCandidate.name}".`,
      originalPrice: discountCandidate.price,
      suggestedPrice: Number(suggestedPrice.toFixed(2)),
      discountPercentage,
    });
  }

  // Step 7: Return the orderId and the list of suggestions
  return {
    orderId: order.orderId,
    suggestions,
  };
}
