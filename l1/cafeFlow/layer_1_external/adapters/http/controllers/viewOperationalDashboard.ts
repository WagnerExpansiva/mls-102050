/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/viewOperationalDashboard.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import {
  getOperationalDashboard,
  type OperationalDashboardRequest,
} from '/_102050_/l1/cafeFlow/layer_2_application/usecases/viewOperationalDashboard.js';
import type {
  CafeFlowViewOperationalDashboardInput,
  CafeFlowViewOperationalDashboardOutput,
  CafeFlowViewOperationalDashboardOutputItem,
} from '_102050_/l2/cafeFlow/web/contracts/viewOperationalDashboard.js';

export const cafeFlowViewOperationalDashboardHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as CafeFlowViewOperationalDashboardInput;

  if (!input || !input.dailyShiftId) {
    throw new AppError('VALIDATION_ERROR', 'dailyShiftId is required', 400, { field: 'dailyShiftId' });
  }

  const usecaseInput: OperationalDashboardRequest = {
    dailyShiftId: input.dailyShiftId,
  };

  const view = await getOperationalDashboard(ctx, usecaseInput);

  const item: CafeFlowViewOperationalDashboardOutputItem = {
    dailyShiftId: view.dailyShiftId,
    shiftDate: view.shiftDate,
    status: view.status as 'open' | 'closed',
    openedAt: view.openedAt,
    closedAt: view.closedAt ?? '',
    openingCashBalance: view.openingCashBalance ?? 0,
    closingCashBalance: view.closingCashBalance ?? 0,
    totalSales: view.totalSales ?? 0,
  };

  const output: CafeFlowViewOperationalDashboardOutput = [item];

  return ok(output);
};
