/// <mls fileReference="_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.ts" enhancement="_blank"/>

export type DailyShiftStatus = 'open' | 'closed';

export type CashMovementType = 'entrada' | 'saída';

export interface CashMovement {
  cashMovementId: string;
  dailyShiftId: string;
  movementType: CashMovementType;
  amount: number;
  reason: string;
  createdAt: string;
  updatedAt: string;
}

export interface DailyShift {
  dailyShiftId: string;
  shiftDate: string;
  status: DailyShiftStatus;
  openedAt: string;
  closedAt: string | null;
  openingCashBalance: number | null;
  closingCashBalance: number | null;
  totalSales: number | null;
  totalPayments: number | null;
  closingNotes: string | null;
  cashMovements: CashMovement[];
  createdAt: string;
  updatedAt: string;
}

export const DAILY_SHIFT_STATUS_TRANSITIONS: Record<DailyShiftStatus, DailyShiftStatus[]> = {
  open: ['closed'],
  closed: [],
};

export function canTransitionDailyShift(from: DailyShiftStatus, to: DailyShiftStatus): boolean {
  return DAILY_SHIFT_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

export function isOnlyOpenShiftPerDate(
  shifts: Pick<DailyShift, 'dailyShiftId' | 'shiftDate' | 'status'>[],
  shiftDate: string,
  excludeId?: string,
): boolean {
  const openForDate = shifts.filter(
    (s) => s.shiftDate === shiftDate && s.status === 'open' && s.dailyShiftId !== excludeId,
  );
  return openForDate.length === 0;
}

export function closedAtRequiredOnClose(
  status: DailyShiftStatus,
  closedAt: string | null,
): boolean {
  if (status === 'closed') {
    return closedAt !== null;
  }
  return true;
}

export function closedAtAfterOpenedAt(openedAt: string, closedAt: string | null): boolean {
  if (closedAt === null) {
    return true;
  }
  return closedAt > openedAt;
}

export function canAddCashMovement(shift: Pick<DailyShift, 'status'>): boolean {
  return shift.status === 'open';
}

export function canCreateOrderForShift(shift: Pick<DailyShift, 'status'>): boolean {
  return shift.status === 'open';
}

export function openingCashBalanceRequiredWhenOpen(
  status: DailyShiftStatus,
  openingCashBalance: number | null,
): boolean {
  if (status === 'open') {
    return openingCashBalance !== null;
  }
  return true;
}

export function closingCashBalanceRequiredOnClose(
  status: DailyShiftStatus,
  closingCashBalance: number | null,
): boolean {
  if (status === 'closed') {
    return closingCashBalance !== null;
  }
  return true;
}

export function recomputeCashMovementTotal(movements: CashMovement[]): number {
  return movements.reduce((sum, m) => {
    return m.movementType === 'entrada' ? sum + m.amount : sum - m.amount;
  }, 0);
}
