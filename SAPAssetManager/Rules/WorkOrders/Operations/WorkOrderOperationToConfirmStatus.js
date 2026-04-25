import OperationMobileStatusWrapper from '../../MobileStatus/OperationMobileStatusWrapper';
import SubOperationMobileStatus from '../../MobileStatus/SubOperationMobileStatus';

export default function WorkOrderOperationToConfirmStatus(context) {
    if (context?.binding?.SubOperationNo) {
        return SubOperationMobileStatus(context);
    }

    return OperationMobileStatusWrapper(context);
}
