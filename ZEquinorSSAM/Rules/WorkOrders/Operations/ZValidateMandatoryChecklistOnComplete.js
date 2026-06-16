import libCommon from '../../../../SAPAssetManager/Rules/Common/Library/CommonLibrary';
import Logger from '../../../../SAPAssetManager/Rules/Log/Logger';
import userFeaturesLib from '../../../../SAPAssetManager/Rules/UserFeatures/UserFeaturesLibrary';

/** Equinor NGE-121879:
 * Core validation logic that checks whether all mandatory inspection
 * characteristics (checklist items) for a given order/operation are completed.
 *
 * @param {IClientAPI} context
 * @param {string} orderId   - Work order ID
 * @param {string} operationNo - Operation number
 * @returns {Promise<boolean>} true when there ARE incomplete mandatory items
 */
export function validateMandatoryChecklist(context, orderId, operationNo) {
    try {
        if (!orderId || !operationNo) {
            return Promise.resolve(false);
        }

        // Only enforce when QM/Checklist feature is enabled. If it is not, we
        // fall back to the standard behaviour.
        const checklistFeatureEnabled = userFeaturesLib.isFeatureEnabled(
            context,
            context.getGlobalDefinition('/SAPAssetManager/Globals/Features/Checklist.global').getValue(),
        );
        const qmFeatureEnabled = userFeaturesLib.isFeatureEnabled(
            context,
            context.getGlobalDefinition('/SAPAssetManager/Globals/Features/QM.global').getValue(),
        );

        if (!checklistFeatureEnabled && !qmFeatureEnabled) {
            return Promise.resolve(false);
        }

        // Determine the appropriate filter based on the enabled feature path.
        // - When the checklist feature is on, inspection characteristics are
        //   linked to operations through EAMChecklist_Nav.
        // - Otherwise they are linked through InspectionPoint_Nav.
        let queryOptions;
        if (checklistFeatureEnabled) {
            queryOptions = `$filter=RequiredChar eq 'X' and EAMChecklist_Nav/OrderId eq '${orderId}' and EAMChecklist_Nav/OperationNo eq '${operationNo}'&$select=InspectionLot,InspectionNode,InspectionChar,RequiredChar,Valuation`;
        } else {
            queryOptions = `$filter=RequiredChar eq 'X' and InspectionPoint_Nav/OrderId eq '${orderId}' and InspectionPoint_Nav/OperationNo eq '${operationNo}'&$select=InspectionLot,InspectionNode,InspectionChar,RequiredChar,Valuation`;
        }

        return context.read('/SAPAssetManager/Services/AssetManager.service', 'InspectionCharacteristics', [], queryOptions).then(results => {
            let incompleteCount = 0;
            if (results && results.length > 0) {
                for (let i = 0; i < results.length; i++) {
                    const row = results.getItem(i);
                    // A mandatory characteristic is considered incomplete when
                    // no valuation has been recorded yet.
                    if (!row.Valuation || row.Valuation.trim() === '') {
                        incompleteCount++;
                    }
                }
            }

            // Return true when there are incomplete mandatory items (check failed)
            return incompleteCount > 0;
        }).catch(err => {
            Logger.error(
                context.getGlobalDefinition('/SAPAssetManager/Globals/Logs/CategoryOperations.global').getValue(),
                `ZValidateMandatoryChecklistOnComplete read error: ${err}`,
            );
            // In case of read failure, do not block the user.
            return false;
        });
    } catch (err) {
        Logger.error(
            context.getGlobalDefinition('/SAPAssetManager/Globals/Logs/CategoryOperations.global').getValue(),
            `ZValidateMandatoryChecklistOnComplete unexpected error: ${err}`,
        );
        return Promise.resolve(false);
    }
}

/** Equinor NGE-121879:
 * Validates that all mandatory inspection characteristics (checklist items)
 * mapped to the current work order operation are completed (valuated) before
 * allowing the operation to be marked as complete.
 *
 * The mandatory state is indicated by the `RequiredChar` property of the
 * `InspectionCharacteristic` entity (value 'X' means mandatory). A
 * characteristic is considered completed when its `Valuation` property is
 * not empty (typically 'A' for accepted or 'R' for rejected).
 *
 * Returns a Promise that:
 *   - resolves with `true` when there ARE incomplete mandatory items (validation failed)
 *   - resolves with `false` when all mandatory items are complete (validation passed)
 *
 * @param {IClientAPI} context
 * @returns {Promise<boolean>}
 */
export default function ZValidateMandatoryChecklistOnComplete(context) {
    const binding = context.getPageProxy().getActionBinding() || libCommon.getBindingObject(context) || context.binding;

    if (!binding || !binding.OrderId || !binding.OperationNo) {
        // Nothing to validate against - allow completion
        return Promise.resolve(false);
    }

    return validateMandatoryChecklist(context, binding.OrderId, binding.OperationNo);
}