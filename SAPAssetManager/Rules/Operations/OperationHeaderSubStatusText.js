import OperationMobileStatus from '../MobileStatus/OperationMobileStatus';
import TechniciansExist from '../WorkOrders/Operations/TechniciansExist';
import MobileStatusLibrary from '../MobileStatus/MobileStatusLibrary';
import OperationMobileStatusLibrary from './MobileStatus/OperationMobileStatusLibrary';

/** @param {IPageProxy & {binding: MyWorkOrderOperation}} context  */
export default async function OperationHeaderSubStatusText(context, binding = context.binding) {
    //if splits exist and there is a split for the current user then we're showing the split status
    if (await TechniciansExist(context, binding) && MobileStatusLibrary.isOperationStatusChangeable(context)) {
        const split = await OperationMobileStatusLibrary.findMySplitForOperation(context, binding);

        if (split) {
            return OperationMobileStatus(context, split);
        }
    }
    return '';
}
