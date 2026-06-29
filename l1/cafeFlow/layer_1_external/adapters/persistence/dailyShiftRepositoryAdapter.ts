/// <mls fileReference="_102050_/l1/cafeFlow/layer_1_external/adapters/persistence/dailyShiftRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IDailyShiftRepository, DailyShiftFilter } from '/_102050_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.js';
import type { DailyShift, DailyShiftStatus, CashMovement } from '/_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.js';

interface DailyShiftRow {
  daily_shift_id: string;
  status: string;
  created_at: string;
  details: string | null;
}

interface DailyShiftDetails {
  shiftDate: string;
  openedAt: string;
  closedAt: string | null;
  openingCashBalance: number | null;
  closingCashBalance: number | null;
  totalSales: number | null;
  totalPayments: number | null;
  closingNotes: string | null;
  updatedAt: string;
  cashMovements: CashMovement[];
}

function toRow(shift: DailyShift): DailyShiftRow {
  const details: DailyShiftDetails = {
    shiftDate: shift.shiftDate,
    openedAt: shift.openedAt,
    closedAt: shift.closedAt,
    openingCashBalance: shift.openingCashBalance,
    closingCashBalance: shift.closingCashBalance,
    totalSales: shift.totalSales,
    totalPayments: shift.totalPayments,
    closingNotes: shift.closingNotes,
    updatedAt: shift.updatedAt,
    cashMovements: shift.cashMovements,
  };
  return {
    daily_shift_id: shift.dailyShiftId,
    status: shift.status,
    created_at: shift.createdAt,
    details: JSON.stringify(details),
  };
}

function parseDetails(row: DailyShiftRow): DailyShiftDetails {
  try {
    return JSON.parse(row.details ?? '{}') as DailyShiftDetails;
  } catch {
    return {
      shiftDate: '',
      openedAt: row.created_at,
      closedAt: null,
      openingCashBalance: null,
      closingCashBalance: null,
      totalSales: null,
      totalPayments: null,
      closingNotes: null,
      updatedAt: row.created_at,
      cashMovements: [],
    };
  }
}

function toDomain(row: DailyShiftRow): DailyShift {
  const d = parseDetails(row);
  return {
    dailyShiftId: row.daily_shift_id,
    shiftDate: d.shiftDate,
    status: row.status as DailyShiftStatus,
    openedAt: d.openedAt,
    closedAt: d.closedAt,
    openingCashBalance: d.openingCashBalance,
    closingCashBalance: d.closingCashBalance,
    totalSales: d.totalSales,
    totalPayments: d.totalPayments,
    closingNotes: d.closingNotes,
    cashMovements: d.cashMovements ?? [],
    createdAt: row.created_at,
    updatedAt: d.updatedAt,
  };
}

export function createDailyShiftRepositoryAdapter(ctx: RequestContext): IDailyShiftRepository {
  const getTable = () => ctx.data.moduleData.getTable<DailyShiftRow>('daily_shift');

  return {
    async getById(dailyShiftId) {
      const repo = await getTable();
      const row = await repo.findOne({ where: { daily_shift_id: dailyShiftId } });
      if (!row) throw new AppError('NOT_FOUND', `DailyShift ${dailyShiftId} not found`, 404, { dailyShiftId });
      return toDomain(row);
    },

    async list(filter: DailyShiftFilter) {
      const where: Partial<DailyShiftRow> = {};
      if (filter.dailyShiftId) where.daily_shift_id = filter.dailyShiftId;
      if (filter.status) where.status = filter.status;
      const repo = await getTable();
      const rows = await repo.findMany({
        where,
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      let result = rows.map(toDomain);
      if (filter.shiftDate) {
        result = result.filter((s) => s.shiftDate === filter.shiftDate);
      }
      return result;
    },

    async save(aggregate) {
      const repo = await getTable();
      const existing = await repo.findOne({ where: { daily_shift_id: aggregate.dailyShiftId } });
      if (existing) {
        await repo.update({ where: { daily_shift_id: aggregate.dailyShiftId }, patch: toRow(aggregate) });
      } else {
        await repo.insert({ record: toRow(aggregate) });
      }
    },

    async findByDate(date) {
      const repo = await getTable();
      const rows = await repo.findMany({
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      const match = rows.map(toDomain).find((s) => s.shiftDate === date);
      if (!match) throw new AppError('NOT_FOUND', `DailyShift for date ${date} not found`, 404, { date });
      return match;
    },

    async findOpenShift() {
      const repo = await getTable();
      const rows = await repo.findMany({
        where: { status: 'open' },
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      if (rows.length === 0) {
        throw new AppError('NOT_FOUND', 'No open daily shift found', 404);
      }
      return toDomain(rows[0]);
    },

    async findByCashier(_cashierId) {
      // The DailyShift domain entity does not carry a cashierId field.
      // Cashier association is not persisted on the shift aggregate; return empty collection.
      return [];
    },
  };
}
