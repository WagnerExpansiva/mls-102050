/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/createDailyShift.ts" enhancement="_blank"/>

import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IDailyShiftRepository } from '/_102050_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.js';
import type { DailyShift, DailyShiftStatus } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.js';
import {
  closedAtRequiredOnClose,
  closingCashBalanceRequiredOnClose,
  openingCashBalanceRequiredWhenOpen,
} from '/_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.js';

export interface CreateDailyShiftInput {
  shiftDate: string;
  status: string;
  openedAt: string;
  closedAt?: string;
  openingCashBalance?: number;
  closingCashBalance?: number;
  totalSales?: number;
  totalPayments?: number;
  closingNotes?: string;
}

export interface CreateDailyShiftOutput {
  dailyShiftId: string;
  status: string;
}

export async function createDailyShift(
  ctx: RequestContext,
  input: CreateDailyShiftInput,
): Promise<CreateDailyShiftOutput> {
  const dailyShifts = resolveRepository<IDailyShiftRepository>(ctx, 'DailyShift');
  const now = ctx.clock.nowIso();

  // --- Validate status is either 'open' or 'closed' ---
  const validStatuses: DailyShiftStatus[] = ['open', 'closed'];
  if (!validStatuses.includes(input.status as DailyShiftStatus)) {
    throw new AppError(
      'VALIDATION_ERROR',
      `Invalid status "${input.status}". Must be "open" or "closed".`,
      400,
      { field: 'status', value: input.status },
    );
  }
  const status = input.status as DailyShiftStatus;

  // --- Validate no DailyShift already exists for the given shiftDate ---
  const existing = await dailyShifts.findByDate(input.shiftDate);
  if (existing) {
    throw new AppError(
      'CONFLICT',
      `A DailyShift already exists for date ${input.shiftDate}.`,
      409,
      { shiftDate: input.shiftDate, existingShiftId: existing.dailyShiftId },
    );
  }

  // --- If status is 'closed', require closedAt and closingCashBalance ---
  const closedAt = input.closedAt ?? null;
  if (!closedAtRequiredOnClose(status, closedAt)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'closedAt is required when status is "closed".',
      400,
      { ruleId: 'closedAtRequiredOnClose' },
    );
  }

  const closingCashBalance = input.closingCashBalance ?? null;
  if (!closingCashBalanceRequiredOnClose(status, closingCashBalance)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'closingCashBalance is required when status is "closed".',
      400,
      { ruleId: 'closingCashBalanceRequiredOnClose' },
    );
  }

  // --- Validate openingCashBalance when status is 'open' ---
  const openingCashBalance = input.openingCashBalance ?? null;
  if (!openingCashBalanceRequiredWhenOpen(status, openingCashBalance)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'openingCashBalance is required when status is "open".',
      400,
      { ruleId: 'openingCashBalanceRequiredWhenOpen' },
    );
  }

  // --- Build the DailyShift aggregate ---
  const dailyShift: DailyShift = {
    dailyShiftId: ctx.idGenerator.newId(),
    shiftDate: input.shiftDate,
    status,
    openedAt: input.openedAt,
    closedAt,
    openingCashBalance,
    closingCashBalance,
    totalSales: input.totalSales ?? null,
    totalPayments: input.totalPayments ?? null,
    closingNotes: input.closingNotes ?? null,
    cashMovements: [],
    createdAt: now,
    updatedAt: now,
  };

  // --- Persist inside a transaction (multi-aggregate safety) ---
  await ctx.data.runInTransaction(async () => {
    await dailyShifts.save(dailyShift);
  });

  return {
    dailyShiftId: dailyShift.dailyShiftId,
    status: dailyShift.status,
  };
}
