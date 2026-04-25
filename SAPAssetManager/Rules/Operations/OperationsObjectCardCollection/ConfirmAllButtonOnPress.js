import OperationsEntitySet from '../../WorkOrders/Operations/OperationsEntitySet';
import { OperationConstants } from '../../WorkOrders/Operations/WorkOrderOperationLibrary';
import libCommon from '../../Common/Library/CommonLibrary';
import WorkOrderOperationsConfirmNav from '../../WorkOrders/Operations/WorkOrderOperationsConfirmNav';
import { SubOperationObjectCards } from '../../WorkOrders/Operations/Details/SubOperationObjectCard/SubOperationObjectCards';

export default async function ConfirmAllButtonOnPress(context) {
    let selectedOperations = [];
    if (libCommon.getPageName(context) === 'WorkOrderOperationDetailsWithObjectCards') { // sub-operations to confirm all
        let selectedSubOperations = await SubOperationObjectCards._GetSubOperationsConfirmableSuboperations(context, context.getPageProxy().binding);
        selectedOperations = selectedSubOperations.map(subOperation => ({binding: subOperation}));
    } else {
        selectedOperations = await collectSelectedOperations(context);
    }

    libCommon.setStateVariable(context, 'selectedOperations', selectedOperations);

    return WorkOrderOperationsConfirmNav(context);
}

async function collectSelectedOperations(context) {
    const filterPlus = libCommon.isAppParameterEnabled(context, 'MOBILESTATUS', 'EnableOnLocalBusinessObjects') ? '' : " and not substringof('L', OperationNo)"; //Exclude locals if parameter restricts them
    const queryOptions = libCommon.attachFilterToQueryOptionsString(OperationConstants.OperationsObjectCardCollectionQueryOptions(context), OperationConstants.notFinallyConfirmedFilter() + filterPlus);
    const operationsToConfirm = await context.read('/SAPAssetManager/Services/AssetManager.service', OperationsEntitySet(context, context.getPageProxy().binding), [], queryOptions);
    return operationsToConfirm.map(operation => ({binding: operation}));
}
