import libVal from '../../Common/Library/ValidationLibrary';
import SubOperationFastFilters from '../../FastFilters/MTFastFilters/SubOperationFastFilters';
import ODataLibrary from '../../OData/ODataLibrary';

export default function SubOperationFastFiltersItems(context) {
    let SubOperationFastFiltersClass = new SubOperationFastFilters(context);

    return prepareDataForSubOperationFastFilters(context, SubOperationFastFiltersClass).then(() => {
       
        /** 
            to customize the list of fast filters, the getFastFilters method must be overwritten in the SubOperationFastFilters class
            getFastFilters returns a list of filter objects
            each object contains:
            for filters: filter name, filter value, filter property (if the value is not a complex query), filter group (combines multiple filters with "or"), visible
            for sortes: caption, value, visible
        */
        return SubOperationFastFiltersClass.getFastFilterItemsForListPage(context);
    });
}

export function prepareDataForSubOperationFastFilters(context, SubOperationFastFiltersClass) {
    let promises = [];

    promises.push(context.read('/SAPAssetManager/Services/AssetManager.service', 'Confirmations', ['OrderID', 'Operation', 'SubOperation', 'ConfirmationCounter', 'FinalConfirmation'], '$orderby=ConfirmationCounter desc&$filter=FinalConfirmation eq \'X\' and SubOperation ne \'\''));

    return Promise.all(promises).then(([confirmations]) => {
        context.getPageProxy().getClientData().SubOperationFastFiltersClass = SubOperationFastFiltersClass;

        if (libVal.evalIsNotEmpty(confirmations)) {
            prepareConfirmedDataFilter(SubOperationFastFiltersClass, confirmations);  
            prepareModifiedDataFilter(SubOperationFastFiltersClass, confirmations);
        }

        return Promise.resolve();
    });
}

function prepareConfirmedDataFilter(SubOperationFastFiltersClass, confirmations) {
    let confirmedIds = [];
    addObjectsIdToQuery(confirmations, confirmedIds);

    if (confirmedIds.length) {
        let query = confirmedIds.join(' or ');
        SubOperationFastFiltersClass.setConfigProperty('confirmedFilterQuery', query);
    }
}

function prepareModifiedDataFilter(SubOperationFastFiltersClass, confirmations) {
    let ids = [];
    const localConfirmations = confirmations.filter(conf => ODataLibrary.hasAnyPendingChanges(conf));
    addObjectsIdToQuery(localConfirmations, ids);

    if (ids.length) {
        let query = ids.join(' or ');
        SubOperationFastFiltersClass.setConfigProperty('modifiedFilterQuery', query);
    }
}

function addObjectsIdToQuery(pendingObjects, ids) {
    if (pendingObjects.length) {
        pendingObjects.forEach(pendingObject => {
            if (pendingObject.OrderID && pendingObject.Operation && pendingObject.SubOperation) {
                ids.push(`(OrderId eq '${pendingObject.OrderID}' and OperationNo eq '${pendingObject.Operation}' and SubOperationNo eq '${pendingObject.SubOperation}')`);
            }
        });
    }
}
