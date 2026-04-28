import libCommon from '../../Common/Library/CommonLibrary';

export default function WorkOrderOperationConfirmCaption(context) {
    const table = context.getPageProxy().getControl('SectionedTable');
    if (table && table.getSections().length && table.getSections()[0].getSelectionMode() === 'Multiple') {
        return context.localizeText('select_confirmations');
    }
    let selectedOperations = libCommon.getStateVariable(context, 'OperationsToConfirm') || [];
    if (!selectedOperations.length) {
        selectedOperations = libCommon.getStateVariable(context, 'selectedOperations') || [];
    }

    if (selectedOperations[0]['@odata.type'] === '#sap_mobile.MyWorkOrderSubOperation') {
        return context.localizeText('confirm_sub_operations_x', [selectedOperations.length]);
    }
    return context.localizeText('confirm_operations_x', [selectedOperations.length]);
}
