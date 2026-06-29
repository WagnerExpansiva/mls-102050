/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/http/controllers/aiPromotionSuggestions.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import {
  aiPromotionSuggestions,
  type AiPromotionSuggestionsInput,
} from '/_102050_/l1/cafeFlow/layer_2_application/usecases/aiPromotionSuggestions.js';
import type { CafeFlowAiPromotionSuggestionsInput, CafeFlowAiPromotionSuggestionsOutput, CafeFlowAiPromotionSuggestionsOutputItem } from '/_102050_/l2/cafeFlow/web/contracts/aiPromotionSuggestions.js';

export const cafeFlowAiPromotionSuggestionsHandler: BffHandler = async ({ request, ctx }) => {
  const params = (request.params ?? {}) as CafeFlowAiPromotionSuggestionsInput;

  if (!params.orderId) {
    throw new AppError('VALIDATION_ERROR', 'orderId is required', 400, { field: 'orderId' });
  }

  const input: AiPromotionSuggestionsInput = {
    orderId: params.orderId,
  };

  const result = await aiPromotionSuggestions(ctx, input);

  const mapped: CafeFlowAiPromotionSuggestionsOutput = result.suggestions.map(
    (suggestion, index): CafeFlowAiPromotionSuggestionsOutputItem => ({
      id: `${result.orderId}-suggestion-${index}`,
      orderId: result.orderId,
      menuItemId: suggestion.menuItemId,
      kitchenTicketId: '',
      quantity: 1,
      unitPrice: suggestion.originalPrice,
      totalPrice: suggestion.suggestedPrice,
      observations: suggestion.description,
    }),
  );

  return ok(mapped);
};
