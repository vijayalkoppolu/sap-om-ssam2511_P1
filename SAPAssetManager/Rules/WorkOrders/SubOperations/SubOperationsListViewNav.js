import libCom from '../../Common/Library/CommonLibrary';
import libSubOpMobile from '../../SubOperations/MobileStatus/SubOperationMobileStatusLibrary';
import { MyWorkSubOperationsListViewNavWrapper } from './SubOperationsListViewNavWrapper';

export default function OperationsListViewNav(context, isMyWork = false) {
    libCom.setStateVariable(context,'FromSubOperationsList', true);
    return libSubOpMobile.isAnySubOperationStarted(context).then(() => {
        if (isMyWork) return MyWorkSubOperationsListViewNavWrapper(context);
        return context.executeAction('/SAPAssetManager/Rules/WorkOrders/SubOperations/SubOperationsListViewNavWrapper.js');
    });
}
