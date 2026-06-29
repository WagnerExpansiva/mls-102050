/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/aiSalesSummary.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import {
  aiSalesSummary,
  type AiSalesSummaryInput,
  type AiSalesSummaryOutput,
} from '/_102050_/l1/cafeFlow/layer_2_application/usecases/aiSalesSummary.js';
import type {
  CafeFlowAiSalesSummaryInput,
  CafeFlowAiSalesSummaryOutput,
  CafeFlowAiSalesSummaryOutputItem,
} from '_102050_/l2/cafeFlow/web/contracts/aiSalesSummary.js';

/**
 * Maps the usecase output to the frontend contract output.
 *
 * The contract expects an array of per-shift order summaries. The usecase
 * returns an aggregate summary object, so we wrap it into a single-item array
 * using the available fields.
 */
function mapToContractOutput(
  usecaseOutput: AiSalesSummaryOutput,
  dailyShiftId: string | undefined,
): CafeFlowAiSalesSummaryOutput {
  const item: CafeFlowAiSalesSummaryOutputItem = {
    dailyShiftId: dailyShiftId ?? '',
    status: 'closed',
    totalAmount: usecaseOutput.totalSales,
    closedAt: new Date().toISOString(),
  };
  return [item];
}

export const cafeFlowAiSalesSummaryHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as CafeFlowAiSalesSummaryInput;

  // Boundary validation — at least one filter must be provided
  if (!params.dailyShiftId && !params.status && !params.closedAt) {
    throw new AppError(
      'VALIDATION_ERROR',
      'At least one of dailyShiftId, status, or closedAt is required',
      400,
      { provided: Object.keys(params) },
    );
  }

  // Map contract input → usecase input
  const usecaseInput: AiSalesSummaryInput = {
    dailyShiftId: params.dailyShiftId,
  };

  const result = await aiSalesSummary(ctx, usecaseInput);
  const contractOutput = mapToContractOutput(result, params.dailyShiftId);

  return ok(contractOutput);
};
