import libCommon from '../../Common/Library/CommonLibrary';
import OperationsConfirmationsChangeMode from './OperationConfirmationsChangeMode';

export default function WorkOrderOperationsConfirmRemoveSelectedItems(clientAPI) {
    const confirmationsData = libCommon.getStateVariable(clientAPI, 'OperationsToConfirm');

    let message = clientAPI.localizeText('confirm_remove_opertion_conf');
    if (confirmationsData?.[0]?.['@odata.type'] === '#sap_mobile.MyWorkOrderSubOperation') {
        message = clientAPI.localizeText('confirm_remove_sub_operation_conf');
    }

    return clientAPI.executeAction({
        'Name': '/SAPAssetManager/Actions/Expense/ConfirmCloseExpensesPage.action',
        'Properties': {
            'Title': clientAPI.localizeText('remove_confirmation'),
            'OKCaption': clientAPI.localizeText('remove'),
            'Message': message,
            'OnOK': '',
        },
    }).then(({ data }) => {
        if (data === false) {
            return false;
        }
        return RemoveSelectedItemsFromState(clientAPI);
    });
}

function RemoveSelectedItemsFromState(clientAPI) {
    const itemsToRemove = libCommon.getStateVariable(clientAPI, 'selectedOperationConfirmations');
    const confirmationsData = libCommon.getStateVariable(clientAPI, 'OperationsToConfirm');
    const removedOperations = libCommon.getStateVariable(clientAPI, 'OperationsToRemove') || [];
    const isSelectAll = libCommon.getStateVariable(clientAPI, 'selectAllActive', 'WorkOrderOperationsListViewPage');
    const newConfirmationsData = confirmationsData.filter(item => {
        let links = itemsToRemove.map(itm => itm['@odata.readLink']);
        return !(links.includes(item.OperationReadlink) || links.includes(item.SubOperationReadlink));
    });
    if (newConfirmationsData.length) {
        if (isSelectAll) {
            removedOperations.push(...itemsToRemove.map(
                item => ({ binding: item })),
            );
            libCommon.setStateVariable(clientAPI, 'OperationsToRemove', removedOperations);
        }
        libCommon.setStateVariable(clientAPI, 'OperationsToConfirm', newConfirmationsData);
        libCommon.setStateVariable(clientAPI, 'selectedOperationConfirmations', []);
        return OperationsConfirmationsChangeMode(clientAPI);
    } else {
        libCommon.removeStateVariable(clientAPI, 'OperationsToConfirm');
        libCommon.removeStateVariable(clientAPI, 'OperationsToRemove');
        libCommon.removeStateVariable(clientAPI, 'selectedOperationConfirmations');
        return clientAPI.executeAction('/SAPAssetManager/Actions/Page/CancelPage.action');
    }
}
