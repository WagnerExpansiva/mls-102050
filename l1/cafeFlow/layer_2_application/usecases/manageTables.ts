/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/manageTables.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export interface UpdateTableInput {
  tableId: string;
  number?: string;
  status?: string;
}

export interface UpdateTableOutput {
  tableId: string;
  number: string;
  status: string;
  updatedAt: string;
}

export interface ChangeTableStatusInput {
  tableId: string;
  status: string;
}

export interface ChangeTableStatusOutput {
  tableId: string;
  status: string;
  updatedAt: string;
}

const VALID_STATUSES = ['available', 'occupied', 'disabled'];

function validateStatus(status: string): void {
  if (!VALID_STATUSES.includes(status)) {
    throw new AppError(
      'VALIDATION_ERROR',
      `Invalid table status: "${status}". Must be one of: ${VALID_STATUSES.join(', ')}.`,
      400,
      { status },
    );
  }
}

interface TableDetails {
  number: string;
  status: string;
  updatedAt?: string;
  [key: string]: unknown;
}

export async function updateTable(
  ctx: RequestContext,
  input: UpdateTableInput,
): Promise<UpdateTableOutput> {
  return ctx.data.runInTransaction(async (tx) => {
    const doc = await tx.mdmDocument.get({ mdmId: input.tableId });
    if (!doc) {
      throw new AppError(
        'NOT_FOUND',
        `Table not found: ${input.tableId}`,
        404,
        { tableId: input.tableId },
      );
    }

    const table = doc.details as TableDetails;
    const now = ctx.clock.nowIso();

    const newNumber = input.number ?? table.number;
    const newStatus = input.status ?? table.status;

    if (input.status !== undefined) {
      validateStatus(input.status);
    }

    // tableOccupancyConsistency
    if (input.status === 'available' && table.status === 'occupied') {
      throw new AppError(
        'CONFLICT',
        'tableOccupancyConsistency: cannot set table to "available" while it is currently "occupied" (active orders/seats may be linked).',
        409,
        { ruleId: 'tableOccupancyConsistency', currentStatus: table.status, targetStatus: input.status },
      );
    }
    if (input.status === 'occupied' && table.status === 'disabled') {
      throw new AppError(
        'CONFLICT',
        'tableOccupancyConsistency: cannot set table to "occupied" while it is currently "disabled".',
        409,
        { ruleId: 'tableOccupancyConsistency', currentStatus: table.status, targetStatus: input.status },
      );
    }

    const updatedDetails: TableDetails = {
      ...table,
      number: newNumber,
      status: newStatus,
      updatedAt: now,
    };

    await tx.mdmDocument.put({
      record: {
        ...doc,
        details: updatedDetails,
      },
    });

    return {
      tableId: input.tableId,
      number: newNumber,
      status: newStatus,
      updatedAt: now,
    };
  });
}

export async function changeTableStatus(
  ctx: RequestContext,
  input: ChangeTableStatusInput,
): Promise<ChangeTableStatusOutput> {
  return ctx.data.runInTransaction(async (tx) => {
    validateStatus(input.status);

    const doc = await tx.mdmDocument.get({ mdmId: input.tableId });
    if (!doc) {
      throw new AppError(
        'NOT_FOUND',
        `Table not found: ${input.tableId}`,
        404,
        { tableId: input.tableId },
      );
    }

    const table = doc.details as TableDetails;
    const now = ctx.clock.nowIso();

    // tableOccupancyConsistency — transition rules
    if (input.status === 'available' && table.status === 'occupied') {
      throw new AppError(
        'CONFLICT',
        'tableOccupancyConsistency: cannot transition to "available" while table is "occupied" (active occupancy).',
        409,
        { ruleId: 'tableOccupancyConsistency', currentStatus: table.status, targetStatus: input.status },
      );
    }
    if (input.status === 'occupied' && table.status !== 'available') {
      throw new AppError(
        'CONFLICT',
        `tableOccupancyConsistency: can only transition to "occupied" from "available" (current: "${table.status}").`,
        409,
        { ruleId: 'tableOccupancyConsistency', currentStatus: table.status, targetStatus: input.status },
      );
    }
    if (input.status === 'disabled' && table.status !== 'available') {
      throw new AppError(
        'CONFLICT',
        `tableOccupancyConsistency: can only transition to "disabled" from "available" (current: "${table.status}").`,
        409,
        { ruleId: 'tableOccupancyConsistency', currentStatus: table.status, targetStatus: input.status },
      );
    }

    const updatedDetails: TableDetails = {
      ...table,
      status: input.status,
      updatedAt: now,
    };

    await tx.mdmDocument.put({
      record: {
        ...doc,
        details: updatedDetails,
      },
    });

    return {
      tableId: input.tableId,
      status: input.status,
      updatedAt: now,
    };
  });
}
