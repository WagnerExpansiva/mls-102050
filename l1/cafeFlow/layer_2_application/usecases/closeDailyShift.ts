/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/closeDailyShift.ts" enhancement="_blank"/>

import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IDailyShiftRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.js';
import type { DailyShift, CashMovement } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.js';
import { canTransitionDailyShift, recomputeCashMovementTotal } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.js';

export interface CloseDailyShiftInput {
  dailyShiftId: string;
  closingNotes?: string;
}

export interface CloseDailyShiftOutput {
  dailyShiftId: string;
  status: string;
  closedAt: string;
  openingCashBalance: number;
  closingCashBalance: number;
  totalSales: number;
  totalPayments: number;
  closingNotes?: string;
}

export interface PreviewDailyShiftClosureInput {
  dailyShiftId: string;
}

export interface PreviewDailyShiftClosureOutput {
  dailyShiftId: string;
  shiftDate: string;
  status: string;
  openingCashBalance: number;
  totalCashIn: number;
  totalCashOut: number;
  projectedClosingBalance: number;
  totalSales: number;
  totalPayments: number;
}

function sumCashMovementsByType(movements: CashMovement[], type: CashMovement['movementType']): number {
  return movements
    .filter((m) => m.movementType === type)
    .reduce((sum, m) => sum + m.amount, 0);
}

export async function closeDailyShift(
  ctx: RequestContext,
  input: CloseDailyShiftInput,
): Promise<CloseDailyShiftOutput> {
  const dailyShifts = resolveRepository<IDailyShiftRepository>(ctx, 'DailyShift');
  const now = ctx.clock.nowIso();

  return ctx.data.runInTransaction(async () => {
    const shift = await dailyShifts.getById(input.dailyShiftId);

    if (shift.status !== 'open') {
      throw new AppError(
        'CONFLICT',
        'SHIFT_MUST_BE_OPEN: o turno precisa estar aberto para ser fechado.',
        409,
        { ruleId: 'SHIFT_MUST_BE_OPEN', currentStatus: shift.status },
      );
    }

    if (!canTransitionDailyShift(shift.status, 'closed')) {
      throw new AppError(
        'CONFLICT',
        'SHIFT_MUST_BE_OPEN: transição de status não permitida.',
        409,
        { ruleId: 'SHIFT_MUST_BE_OPEN', from: shift.status, to: 'closed' },
      );
    }

    const totalCashIn = sumCashMovementsByType(shift.cashMovements, 'entrada');
    const totalCashOut = sumCashMovementsByType(shift.cashMovements, 'saída');
    const openingCashBalance = shift.openingCashBalance ?? 0;
    const closingCashBalance = openingCashBalance + totalCashIn - totalCashOut;

    const updatedShift: DailyShift = {
      ...shift,
      status: 'closed',
      closedAt: now,
      closingCashBalance,
      closingNotes: input.closingNotes ?? shift.closingNotes ?? null,
      updatedAt: now,
    };

    await dailyShifts.save(updatedShift);

    return {
      dailyShiftId: updatedShift.dailyShiftId,
      status: updatedShift.status,
      closedAt: updatedShift.closedAt as string,
      openingCashBalance,
      closingCashBalance,
      totalSales: updatedShift.totalSales ?? 0,
      totalPayments: updatedShift.totalPayments ?? 0,
      closingNotes: updatedShift.closingNotes ?? undefined,
    };
  });
}

export async function previewDailyShiftClosure(
  ctx: RequestContext,
  input: PreviewDailyShiftClosureInput,
): Promise<PreviewDailyShiftClosureOutput> {
  const dailyShifts = resolveRepository<IDailyShiftRepository>(ctx, 'DailyShift');

  const shift = await dailyShifts.getById(input.dailyShiftId);

  if (shift.status !== 'open') {
    throw new AppError(
      'CONFLICT',
      'SHIFT_MUST_BE_OPEN: o turno precisa estar aberto para visualizar a prévia de fechamento.',
      409,
      { ruleId: 'SHIFT_MUST_BE_OPEN', currentStatus: shift.status },
    );
  }

  const totalCashIn = sumCashMovementsByType(shift.cashMovements, 'entrada');
  const totalCashOut = sumCashMovementsByType(shift.cashMovements, 'saída');
  const openingCashBalance = shift.openingCashBalance ?? 0;
  const projectedClosingBalance = openingCashBalance + totalCashIn - totalCashOut;

  return {
    dailyShiftId: shift.dailyShiftId,
    shiftDate: shift.shiftDate,
    status: shift.status,
    openingCashBalance,
    totalCashIn,
    totalCashOut,
    projectedClosingBalance,
    totalSales: shift.totalSales ?? 0,
    totalPayments: shift.totalPayments ?? 0,
  };
}
