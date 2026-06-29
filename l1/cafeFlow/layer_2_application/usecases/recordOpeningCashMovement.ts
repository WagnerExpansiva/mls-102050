/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/recordOpeningCashMovement.ts" enhancement="_blank"/>

import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IDailyShiftRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.js';
import type { CashMovement, DailyShift } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.js';
import { canAddCashMovement } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.js';

export interface RecordOpeningCashMovementInput {
  dailyShiftId: string;
  amount: number;
  reason: string;
}

export interface RecordOpeningCashMovementOutput {
  cashMovementId: string;
  dailyShiftId: string;
  status: string;
}

export async function recordOpeningCashMovement(
  ctx: RequestContext,
  input: RecordOpeningCashMovementInput,
): Promise<RecordOpeningCashMovementOutput> {
  return ctx.data.runInTransaction(async () => {
    const dailyShifts = resolveRepository<IDailyShiftRepository>(ctx, 'DailyShift');
    const now = ctx.clock.nowIso();

    // 1. Load DailyShift by dailyShiftId
    const shift: DailyShift = await dailyShifts.getById(input.dailyShiftId);

    // 2. Validate DailyShift exists and status is 'open'
    if (!canAddCashMovement(shift)) {
      throw new AppError(
        'VALIDATION_ERROR',
        'DailyShift must be open (status=open) to record an opening cash movement.',
        400,
        { ruleId: 'canAddCashMovement', dailyShiftId: input.dailyShiftId, currentStatus: shift.status },
      );
    }

    // 3. Validate amount is greater than zero
    if (input.amount <= 0) {
      throw new AppError(
        'VALIDATION_ERROR',
        'amount must be greater than zero.',
        400,
        { ruleId: 'amountGreaterThanZero', amount: input.amount },
      );
    }

    // 4. Create a new CashMovement with movementType='entrada'
    const cashMovementId = ctx.idGenerator.newId();
    const cashMovement: CashMovement = {
      cashMovementId,
      dailyShiftId: input.dailyShiftId,
      movementType: 'entrada',
      amount: input.amount,
      reason: input.reason,
      createdAt: now,
      updatedAt: now,
    };

    // 5. Add the CashMovement to the DailyShift's cash movements collection
    shift.cashMovements.push(cashMovement);

    // 6. Update DailyShift.openingCashBalance with the movement amount if not already set
    if (shift.openingCashBalance === null) {
      shift.openingCashBalance = input.amount;
    }

    shift.updatedAt = now;

    // 7. Save the DailyShift aggregate
    await dailyShifts.save(shift);

    // 8. Return result
    return {
      cashMovementId,
      dailyShiftId: input.dailyShiftId,
      status: 'recorded',
    };
  });
}
