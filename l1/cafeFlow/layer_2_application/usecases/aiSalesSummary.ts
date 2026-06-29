/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/aiSalesSummary.ts" enhancement="_blank"/>

import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IOrderRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/orderRepository.js';
import type { IDailyShiftRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.js';
import type { IMenuItemRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/menuItemRepository.js';
import type { Order, OrderItem, OrderType } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/order.js';
import type { DailyShift } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.js';
import type { MenuItem } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/menuItem.js';

export interface AiSalesSummaryInput {
  dailyShiftId?: string;
  startDate?: string;
  endDate?: string;
  language?: string;
}

export interface AiSalesSummaryOutput {
  totalSales: number;
  totalOrders: number;
  totalCancelledOrders: number;
  averageOrderValue: number;
  topSellingItems: string;
  salesByOrderType: string;
  summaryText: string;
  language: string;
}

interface TopSellingItemEntry {
  menuItemId: string;
  name: string;
  totalQuantity: number;
  totalRevenue: number;
}

interface OrderTypeBreakdown {
  orderType: OrderType;
  totalSales: number;
  totalOrders: number;
}

/**
 * Rule aiOutputLanguageSelection: determine the output language from the
 * `language` input field, defaulting to pt-BR when not provided.
 */
function resolveOutputLanguage(language?: string): string {
  if (language && language.trim().length > 0) {
    return language.trim();
  }
  return 'pt-BR';
}

/**
 * Generates a natural-language sales summary in the selected language.
 * This is a deterministic template-based generator (no external AI service
 * is called from the application layer).
 */
function generateSummaryText(
  totalSales: number,
  totalOrders: number,
  totalCancelledOrders: number,
  averageOrderValue: number,
  topItems: TopSellingItemEntry[],
  byType: OrderTypeBreakdown[],
  language: string,
): string {
  const topItemText = topItems
    .slice(0, 5)
    .map((it, idx) => `${idx + 1}. ${it.name} (${it.totalQuantity} un.)`)
    .join(', ');

  const mesa = byType.find((b) => b.orderType === 'mesa');
  const takeout = byType.find((b) => b.orderType === 'takeout');

  if (language.toLowerCase().startsWith('en')) {
    const parts: string[] = [];
    parts.push(
      `Sales summary: ${totalOrders} closed orders totalling ${totalSales.toFixed(2)}.`,
    );
    parts.push(`Average order value: ${averageOrderValue.toFixed(2)}.`);
    parts.push(`Cancelled orders: ${totalCancelledOrders}.`);
    if (mesa) {
      parts.push(`Dine-in: ${mesa.totalOrders} orders, ${mesa.totalSales.toFixed(2)} in sales.`);
    }
    if (takeout) {
      parts.push(`Takeout: ${takeout.totalOrders} orders, ${takeout.totalSales.toFixed(2)} in sales.`);
    }
    if (topItemText) {
      parts.push(`Top-selling items: ${topItemText}.`);
    } else {
      parts.push('No items sold in the period.');
    }
    return parts.join(' ');
  }

  // Default: pt-BR
  const parts: string[] = [];
  parts.push(
    `Resumo de vendas: ${totalOrders} pedidos fechados totalizando ${totalSales.toFixed(2)}.`,
  );
  parts.push(`Ticket médio: ${averageOrderValue.toFixed(2)}.`);
  parts.push(`Pedidos cancelados: ${totalCancelledOrders}.`);
  if (mesa) {
    parts.push(`Mesa: ${mesa.totalOrders} pedidos, ${mesa.totalSales.toFixed(2)} em vendas.`);
  }
  if (takeout) {
    parts.push(`Takeout: ${takeout.totalOrders} pedidos, ${takeout.totalSales.toFixed(2)} em vendas.`);
  }
  if (topItemText) {
    parts.push(`Itens mais vendidos: ${topItemText}.`);
  } else {
    parts.push('Nenhum item vendido no período.');
  }
  return parts.join(' ');
}

export async function aiSalesSummary(
  ctx: RequestContext,
  input: AiSalesSummaryInput,
): Promise<AiSalesSummaryOutput> {
  const orders = resolveRepository<IOrderRepository>(ctx, 'Order');
  const dailyShifts = resolveRepository<IDailyShiftRepository>(ctx, 'DailyShift');
  const menuItems = resolveRepository<IMenuItemRepository>(ctx, 'MenuItem');

  // ── Step 1: Resolve the target period ──────────────────────────────
  let filterDailyShiftId: string | undefined;
  let periodStart: string | undefined;
  let periodEnd: string | undefined;

  if (input.dailyShiftId) {
    const shift: DailyShift | null = await dailyShifts
      .getById(input.dailyShiftId)
      .then((s) => s)
      .catch(() => null);

    if (!shift) {
      throw new AppError(
        'NOT_FOUND',
        `DailyShift not found: ${input.dailyShiftId}`,
        404,
        { dailyShiftId: input.dailyShiftId },
      );
    }
    filterDailyShiftId = shift.dailyShiftId;
    periodStart = shift.shiftDate;
    periodEnd = shift.shiftDate;
  } else {
    periodStart = input.startDate;
    periodEnd = input.endDate;
    if (!periodStart && !periodEnd) {
      const today = ctx.clock.nowIso().slice(0, 10);
      periodStart = today;
      periodEnd = today;
    }
  }

  // ── Step 2: Query all Order aggregates within the period ───────────
  let allOrders: Order[];

  if (filterDailyShiftId) {
    allOrders = await orders.list({ dailyShiftId: filterDailyShiftId });
  } else {
    // When filtering by date range, list all orders and filter by createdAt.
    allOrders = await orders.list({});
    if (periodStart) {
      allOrders = allOrders.filter((o) => o.createdAt.slice(0, 10) >= periodStart!);
    }
    if (periodEnd) {
      allOrders = allOrders.filter((o) => o.createdAt.slice(0, 10) <= periodEnd!);
    }
  }

  // ── Step 3: Separate closed and cancelled orders ───────────────────
  const closedOrders = allOrders.filter((o) => o.status === 'closed');
  const cancelledOrders = allOrders.filter((o) => o.status === 'cancelled');

  // ── Step 4: Compute aggregate metrics ──────────────────────────────
  const totalSales = closedOrders.reduce((sum, o) => sum + o.totalAmount, 0);
  const totalOrders = closedOrders.length;
  const totalCancelledOrders = cancelledOrders.length;
  const averageOrderValue = totalOrders > 0 ? totalSales / totalOrders : 0;

  // ── Step 5: Aggregate OrderItem quantities by menuItemId ───────────
  const itemAggregation = new Map<
    string,
    { totalQuantity: number; totalRevenue: number }
  >();

  for (const order of closedOrders) {
    for (const item of order.items) {
      if (item.status === 'cancelled') continue;
      const existing = itemAggregation.get(item.menuItemId);
      if (existing) {
        existing.totalQuantity += item.quantity;
        existing.totalRevenue += item.totalPrice;
      } else {
        itemAggregation.set(item.menuItemId, {
          totalQuantity: item.quantity,
          totalRevenue: item.totalPrice,
        });
      }
    }
  }

  // Load MenuItem names for the aggregated items
  const menuItemIds = Array.from(itemAggregation.keys());
  const menuItemNameMap = new Map<string, string>();

  if (menuItemIds.length > 0) {
    const allMenuItems: MenuItem[] = await menuItems.list();
    for (const mi of allMenuItems) {
      if (menuItemIds.includes(mi.menuItemId)) {
        menuItemNameMap.set(mi.menuItemId, mi.name);
      }
    }
  }

  const topSellingItems: TopSellingItemEntry[] = Array.from(itemAggregation.entries())
    .map(([menuItemId, agg]) => ({
      menuItemId,
      name: menuItemNameMap.get(menuItemId) ?? 'Unknown',
      totalQuantity: agg.totalQuantity,
      totalRevenue: agg.totalRevenue,
    }))
    .sort((a, b) => b.totalQuantity - a.totalQuantity);

  // ── Step 6: Break down sales by orderType ──────────────────────────
  const orderTypeMap = new Map<OrderType, { totalSales: number; totalOrders: number }>();

  for (const order of closedOrders) {
    const existing = orderTypeMap.get(order.orderType);
    if (existing) {
      existing.totalSales += order.totalAmount;
      existing.totalOrders += 1;
    } else {
      orderTypeMap.set(order.orderType, {
        totalSales: order.totalAmount,
        totalOrders: 1,
      });
    }
  }

  const salesByOrderType: OrderTypeBreakdown[] = Array.from(orderTypeMap.entries()).map(
    ([orderType, data]) => ({
      orderType,
      totalSales: data.totalSales,
      totalOrders: data.totalOrders,
    }),
  );

  // ── Step 7: Apply rule aiOutputLanguageSelection ───────────────────
  const language = resolveOutputLanguage(input.language);
  const summaryText = generateSummaryText(
    totalSales,
    totalOrders,
    totalCancelledOrders,
    averageOrderValue,
    topSellingItems,
    salesByOrderType,
    language,
  );

  // ── Step 8: Return assembled output ────────────────────────────────
  return {
    totalSales,
    totalOrders,
    totalCancelledOrders,
    averageOrderValue,
    topSellingItems: JSON.stringify(topSellingItems),
    salesByOrderType: JSON.stringify(salesByOrderType),
    summaryText,
    language,
  };
}
