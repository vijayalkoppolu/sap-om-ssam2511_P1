import libWOStatus from '../../../WorkOrders/MobileStatus/WorkOrderMobileStatusLibrary';
import operationStatus from '../../../MobileStatus/MobileStatusLibrary';

function hideActionBarItems(context, isNoteLocal) {
    if (!isNoteLocal) {
        context.setActionBarItemVisible(0, false);
        context.setActionBarItemVisible(1, false);
    }
}

export default function OperationDetailsOnPageLoad(context, isNoteLocal) {
    // Hide the action bar based if order is complete and 
    return libWOStatus.isOrderComplete(context).then(status => {
        if (status) {
            hideActionBarItems(context, isNoteLocal);
            return true;
        }
        return operationStatus.isMobileStatusComplete(context, 'MyWorkOrderOperations', context.binding.OrderId, context.binding.OperationNo).then(result => {
            if (result) { //already complete so exit
                hideActionBarItems(context, isNoteLocal);
                return true;
            }
            return false;
        });
    });
}
