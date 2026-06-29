/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/generateShiftCloseReport.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import {
  generateShiftCloseReport,
  type GenerateShiftCloseReportInput,
} from '/_102050_/l1/cafeFlow/layer_2_application/usecases/generateShiftCloseReport.js';
import type {
  CafeFlowGenerateShiftCloseReportOutput,
  CafeFlowGenerateShiftCloseReportOutputItem,
} from '/_102050_/l2/cafeFlow/web/contracts/generateShiftCloseReport.js';

export const cafeFlowGenerateShiftCloseReportHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as GenerateShiftCloseReportInput;

  if (!input || !input.dailyShiftId) {
    throw new AppError('VALIDATION_ERROR', 'dailyShiftId is required', 400, {
      field: 'dailyShiftId',
    });
  }

  const result = await generateShiftCloseReport(ctx, input);

  const item: CafeFlowGenerateShiftCloseReportOutputItem = {
    status: result.status === 'open' || result.status === 'closed' ? result.status : 'open',
    openedAt: result.openedAt,
    closedAt: result.closedAt,
    openingCashBalance: result.openingCashBalance,
    closingCashBalance: result.closingCashBalance,
    totalSales: result.totalSales,
    totalPayments: result.totalPayments,
    closingNotes: result.closingNotes,
  };

  const output: CafeFlowGenerateShiftCloseReportOutput = [item];

  return ok(output);
};
