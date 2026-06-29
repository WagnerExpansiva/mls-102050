/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/ports/dailyShiftRepository.ts" enhancement="_blank"/>

import type {
  DailyShift,
  DailyShiftStatus,
} from '/_102050_/l1/cafeFlow/layer_3_domain/entities/dailyShift.js';

export type DailyShiftId = string;
export type BusinessDate = string;
export type CashierId = string;
export type DailyShiftCollection = DailyShift[];

export interface DailyShiftFilter {
  dailyShiftId?: string;
  shiftDate?: string;
  status?: DailyShiftStatus;
}

export interface IDailyShiftRepository {
  getById(dailyShiftId: DailyShiftId): Promise<DailyShift>;
  list(filter: DailyShiftFilter): Promise<DailyShiftCollection>;
  save(aggregate: DailyShift): Promise<void>;
  findByDate(date: BusinessDate): Promise<DailyShift>;
  findOpenShift(): Promise<DailyShift>;
  findByCashier(cashierId: CashierId): Promise<DailyShiftCollection>;
}
