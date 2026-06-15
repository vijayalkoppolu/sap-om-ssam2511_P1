import IsWONotificationVisible from '../../../../SAPAssetManager/Rules/WorkOrders/Complete/Notification/IsWONotificationVisible';
import WorkOrderCompletionLibrary, { runComplete } from '../../../../SAPAssetManager/Rules/WorkOrders/Complete/WorkOrderCompletionLibrary';
import libCommon from '../../../../SAPAssetManager/Rules/Common/Library/CommonLibrary';
import { ChecklistLibrary as libChecklist } from '../../../../SAPAssetManager/Rules/Checklists/ChecklistLibrary';
import SmartFormsCompletionLibrary from '../../../../SAPAssetManager/Rules/Forms/SmartFormsCompletionLibrary';
import libConfirm from '../../../../SAPAssetManager/Rules/ConfirmationScenarios/ConfirmationScenariosLibrary';
import ZValidateMandatoryChecklistOnComplete from './ZValidateMandatoryChecklistOnComplete';

export default async function NavOnCompleteOperationPage(context, actionBinding) {
    context.dismissActivityIndicator(); // RunMobileStatusUpdateSequence triggers showActivityIndicator which may result in infinite loading when CheckRequiredFields action is executed.

    let binding = actionBinding || context.getPageProxy().getActionBinding() || libCommon.getBindingObject(context);

    const equipment = binding.OperationEquipment;
    const functionalLocation = binding.OperationFunctionLocation;

    //Equinor NGE-121879: Check for mandatory checklist completion
    const checklistIncomplete = await ZValidateMandatoryChecklistOnComplete(context);
    if (checklistIncomplete) { //Display validation error dialog and exit
        return await libCommon.showErrorDialog(context, context.localizeText('mandatory_checklist_incomplete_message'));
    }

    let expandOperationAction = Promise.resolve();
    if (binding && binding['@odata.type'] === '#sap_mobile.MyWorkOrderOperation' && !binding.WOHeader) {
        expandOperationAction = context.read('/SAPAssetManager/Services/AssetManager.service', binding['@odata.editLink'], [], '$expand=WOHeader');
    }

    return expandOperationAction.then(async function (result) {
        if (result && result.length > 0) {
            binding.WOHeader = result.getItem(0).WOHeader;
        }

        //Check for mandatory double-check confirmation
        const checkFailed = await libConfirm.isDoubleCheckRequiredForThisOperation(context, binding.OrderId, binding.OperationNo);
        if (checkFailed) { //Display validation error dialog and exit
            return await libCommon.showErrorDialog(context, context.localizeText('double_check_required_operation'));
        }

        //Check for non-complete checklists and ask for confirmation
        return libChecklist.allowWorkOrderComplete(context, equipment, functionalLocation).then(async results => {
            if (results === true) {
                if (binding?.['@odata.type'] === context.getGlobalDefinition('/SAPAssetManager/Globals/ODataTypes/WorkOrderOperationCapacity.global').getValue()) {
                    WorkOrderCompletionLibrary.getInstance().setCompletionFlow('operation_split');
                } else {
                    WorkOrderCompletionLibrary.getInstance().setCompletionFlow('operation');
                }
                await WorkOrderCompletionLibrary.getInstance().initSteps(context);
                WorkOrderCompletionLibrary.getInstance().setBinding(context, binding);

                return IsWONotificationVisible(context, binding.WOHeader, 'Notification').then((notification) => {
                    if (notification) {
                        WorkOrderCompletionLibrary.updateStepState(context, 'notification', {
                            visible: true,
                            data: JSON.stringify(notification),
                            link: notification['@odata.editLink'],
                            initialData: JSON.stringify(notification),
                        });
                    } else {
                        WorkOrderCompletionLibrary.updateStepState(context, 'notification', {
                            visible: false,
                        });
                    }

                    return SmartFormsCompletionLibrary.updateSmartformStep(context).then(() => {
                        return runComplete(context, context.localizeText('complete_operation_warning_message'));
                    });
                });
            }

            return Promise.resolve();
        });
    });
}