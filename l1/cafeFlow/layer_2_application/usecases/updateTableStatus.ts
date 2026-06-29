/// <mls fileReference="_102050_/l1/cafeFlow/layer_2_application/usecases/updateTableStatus.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { MdmDocumentRecord } from '/_102034_/l1/mdm/module.js';

export interface UpdateTableStatusInput {
  tableId: string;
  status: string;
}

export interface UpdateTableStatusOutput {
  tableId: string;
  status: string;
  updatedAt: string;
}

const VALID_STATUSES = new Set(['available', 'occupied', 'disabled']);

/**
 * Allowed status transitions for a Table.
 * - available → occupied | disabled
 * - occupied → available | disabled
 * - disabled → available
 */
const ALLOWED_TRANSITIONS: Record<string, Set<string>> = {
  available: new Set(['occupied', 'disabled']),
  occupied: new Set(['available', 'disabled']),
  disabled: new Set(['available']),
};

export async function updateTableStatus(
  ctx: RequestContext,
  input: UpdateTableStatusInput,
): Promise<UpdateTableStatusOutput> {
  // 1. Validate requested status
  if (!VALID_STATUSES.has(input.status)) {
    throw new AppError(
      'VALIDATION_ERROR',
      `Invalid table status "${input.status}". Allowed values: available, occupied, disabled.`,
      400,
      { field: 'status', value: input.status, allowed: ['available', 'occupied', 'disabled'] },
    );
  }

  return ctx.data.runInTransaction(async (tx) => {
    // 2. Load Table master-data document by id
    const doc = await tx.data.mdmDocument.get({ mdmId: input.tableId });
    if (!doc) {
      throw new AppError(
        'NOT_FOUND',
        `Table master-data record not found: ${input.tableId}`,
        404,
        { mdmId: input.tableId },
      );
    }

    const tableDetails = (doc.details ?? {}) as Record<string, unknown>;
    const currentStatus = (tableDetails['status'] as string) ?? 'available';

    // 3. Apply tableOccupancyConsistency rule
    //    Validate that the status transition is allowed and consistent.
    const allowed = ALLOWED_TRANSITIONS[currentStatus];
    if (allowed && !allowed.has(input.status)) {
      throw new AppError(
        'CONFLICT',
        `tableOccupancyConsistency: cannot transition table from "${currentStatus}" to "${input.status}".`,
        409,
        {
          ruleId: 'tableOccupancyConsistency',
          tableId: input.tableId,
          currentStatus,
          requestedStatus: input.status,
          allowedTransitions: Array.from(allowed),
        },
      );
    }

    // Additional occupancy consistency checks based on the table's own state:
    // - Transitioning to "available" while the table is currently "occupied" is allowed
    //   only if there is no active occupancy flag set in the table details.
    // - Transitioning to "occupied" while the table is "disabled" is not allowed
    //   (already covered by ALLOWED_TRANSITIONS above).
    if (input.status === 'available' && currentStatus === 'occupied') {
      const hasActiveOccupancy = tableDetails['activeOccupancyId'] != null;
      if (hasActiveOccupancy) {
        throw new AppError(
          'CONFLICT',
          'tableOccupancyConsistency: cannot set table to "available" while an active occupancy is still registered.',
          409,
          {
            ruleId: 'tableOccupancyConsistency',
            tableId: input.tableId,
            activeOccupancyId: tableDetails['activeOccupancyId'],
          },
        );
      }
    }

    // 4. Update the Table document status field and set updatedAt
    const now = ctx.clock.nowIso();
    const updatedDetails: Record<string, unknown> = {
      ...tableDetails,
      status: input.status,
      updatedAt: now,
    };

    const updatedDoc: MdmDocumentRecord = {
      ...doc,
      details: updatedDetails,
    };

    // 5. Persist the updated Table master-data document
    await tx.data.mdmDocument.put({
      record: updatedDoc,
      expectedVersion: doc.version ?? null,
    });

    // 6. Return confirmed result
    return {
      tableId: input.tableId,
      status: input.status,
      updatedAt: now,
    };
  });
}
