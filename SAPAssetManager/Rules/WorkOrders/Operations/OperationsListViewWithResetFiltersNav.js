import libCom from '../../Common/Library/CommonLibrary';
import libOpMobile from '../../Operations/MobileStatus/OperationMobileStatusLibrary';
import { MyWorkOperationsListViewNav } from './WorkOrderOperationsListViewNav';

/**
* This function reset OPERATIONS_FILTER state variable before navigation to Operations List
* @param {IClientAPI} context
*/
export default function OperationsListViewWithResetFiltersNav(context, isMyWork = false) {
    libCom.removeStateVariable(context, 'OPERATIONS_DATE_FILTER');
    libCom.setStateVariable(context, 'OPERATIONS_FILTER', '');
    return libOpMobile.isAnyOperationStarted(context).then(async () => {
        if (isMyWork) return MyWorkOperationsListViewNav(context);
        return context.executeAction('/SAPAssetManager/Rules/WorkOrders/Operations/WorkOrderOperationsListViewNav.js');
    });
}
