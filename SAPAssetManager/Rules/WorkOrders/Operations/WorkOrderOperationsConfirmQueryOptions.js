import common from '../../Common/Library/CommonLibrary';

export default function WorkOrderOperationsConfirmQueryOption(context) {
    const queryBuilder = context.dataQueryBuilder();
    let operationsToConfirm = common.getStateVariable(context, 'OperationsToConfirm');
    let removedOperations = common.getStateVariable(context, 'OperationsToRemove') || [];
    const isSelectAll = common.getStateVariable(context, 'selectAllActive', 'WorkOrderOperationsListViewPage');

    let selectedOperationsFilter;
    if (isSelectAll) {
        // when select all - removing items that were unselected by user
        const queryFilter = common.getStateVariable(context, 'operationConfirrmQueryOptionsFilter', 'WorkOrderOperationsListViewPage');
        if (removedOperations.length) {
            selectedOperationsFilter = removedOperations.map(operation => `(OrderId ne '${operation.binding.OrderId || operation.binding.OrderID}' or OperationNo ne '${operation.binding.OperationNo}')`);
            queryBuilder.filter(`${queryFilter} and ${selectedOperationsFilter.join(' and ')}`);
        } else {
            queryBuilder.filter(queryFilter);
        }
    } else {
        if (operationsToConfirm.length) {
            if (operationsToConfirm[0]['@odata.type'] === '#sap_mobile.MyWorkOrderSubOperation') {
                selectedOperationsFilter = operationsToConfirm.map(subOperation => `(OrderId eq '${subOperation.OrderID}' and OperationNo eq '${subOperation.OperationNo}' and SubOperationNo eq '${subOperation.SubOperationNo}')`);
            } else {
                selectedOperationsFilter = operationsToConfirm.map(operation => `(OrderId eq '${operation.OrderID}' and OperationNo eq '${operation.OperationNo}')`);
            }
        } else {
            // taking data from selectedOperations on page init (OperationsToConfirm not loaded yet)
            let selectedOperations = common.getStateVariable(context, 'selectedOperations');
            selectedOperationsFilter = selectedOperations.map(operation => `(OrderId eq '${operation.binding.OrderId}' and OperationNo eq '${operation.binding.OperationNo}')`);
        }
        queryBuilder.filter(`${selectedOperationsFilter.join(' or ')}`);
    }
    if (operationsToConfirm?.[0]?.['@odata.type'] === '#sap_mobile.MyWorkOrderSubOperation') {
        queryBuilder.expand('SubOperationLongText,WorkOrderOperation/WOHeader/WOPriority,WorkOrderOperation/WOHeader/Notification,SubOpMobileStatus_Nav/OverallStatusCfg_Nav');
        queryBuilder.orderBy('SubOperationNo');
    } else {
        queryBuilder.expand('OperationLongText,WOHeader/WOPriority,WOHeader/Notification,OperationMobileStatus_Nav/OverallStatusCfg_Nav');
        queryBuilder.orderBy('OrderId','OperationNo');
    }
    return queryBuilder;
}
