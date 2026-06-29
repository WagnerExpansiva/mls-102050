/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/openDailyShift.ts" enhancement="_blank"/>

import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IDailyShiftRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.js';
import type { DailyShift, CashMovement } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.js';
import { isOnlyOpenShiftPerDate } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.js';

export interface OpenDailyShiftInput {
  shiftDate: string;
  openingCashBalance?: number;
}

export interface OpenDailyShiftOutput {
  dailyShiftId: string;
  status: string;
  openedAt: string;
}

export async function openDailyShift(
  ctx: RequestContext,
  input: OpenDailyShiftInput,
): Promise<OpenDailyShiftOutput> {
  return ctx.data.runInTransaction(async () => {
    const dailyShifts = resolveRepository<IDailyShiftRepository>(ctx, 'DailyShift');
    const now = ctx.clock.nowIso();

    // Rule: no-concurrent-open-shift — reject if an open DailyShift already exists for shiftDate
    const existingShifts = await dailyShifts.list({
      shiftDate: input.shiftDate,
      status: 'open',
    });
    if (!isOnlyOpenShiftPerDate(existingShifts, input.shiftDate)) {
      throw new AppError(
        'CONFLICT',
        'no-concurrent-open-shift: já existe um turno aberto para esta data.',
        409,
        { ruleId: 'no-concurrent-open-shift', shiftDate: input.shiftDate },
      );
    }

    const dailyShiftId = ctx.idGenerator.newId();
    const openingCashBalance = input.openingCashBalance ?? 0;

    const cashMovements: CashMovement[] = [];

    // Rule: opening-cash-movement — create an initial 'entrada' CashMovement when openingCashBalance > 0
    if (openingCashBalance > 0) {
      cashMovements.push({
        cashMovementId: ctx.idGenerator.newId(),
        dailyShiftId,
        movementType: 'entrada',
        amount: openingCashBalance,
        reason: 'Saldo inicial',
        createdAt: now,
        updatedAt: now,
      });
    }

    const dailyShift: DailyShift = {
      dailyShiftId,
      shiftDate: input.shiftDate,
      status: 'open',
      openedAt: now,
      closedAt: null,
      openingCashBalance,
      closingCashBalance: null,
      totalSales: null,
      totalPayments: null,
      closingNotes: null,
      cashMovements,
      createdAt: now,
      updatedAt: now,
    };

    await dailyShifts.save(dailyShift);

    return {
      dailyShiftId,
      status: 'open',
      openedAt: now,
    };
  });
}
