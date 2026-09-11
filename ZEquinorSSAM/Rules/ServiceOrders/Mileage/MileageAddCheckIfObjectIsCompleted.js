import MobileStatusLibrary from '../../../../SAPAssetManager/Rules/MobileStatus/MobileStatusLibrary';
import WorkOrderMobileStatusLibrary from '../../../../SAPAssetManager/Rules/WorkOrders/MobileStatus/WorkOrderMobileStatusLibrary';
import CommonLibrary from '../../../../SAPAssetManager/Rules/Common/Library/CommonLibrary';
import { WorkOrderLibrary as libWO } from '../../../../SAPAssetManager/Rules/WorkOrders/WorkOrderLibrary';

/** Pages the Equinor GAP NGE-131762 is allowed to affect */
const ALLOWED_PAGES = [
    'WorkOrderOperationDetailsPage',
    'WorkOrderOperationDetailsWithObjectCards',
    'WorkOrderOperationDetailsWithObjectCardsPage',
];

export default function MileageAddCheckIfObjectIsCompleted(context) {
    let binding = context.binding;
    let completeStatus = CommonLibrary.getAppParam(context, 'MOBILESTATUS', context.getGlobalDefinition('/SAPAssetManager/Globals/MobileStatus/ParameterNames/CompleteParameterName.global').getValue());

    if (binding) {
        //Don't allow Mileage to be added to work order and operation if work order in created state
        if (libWO.isWorkOrderInCreatedState(context)) {
            return Promise.resolve(false);
        }

        //Don't allow Mileage to be added to Completed WorkOrders and Completed/Confirmed Operations
        switch (binding['@odata.type']) {
            case '#sap_mobile.MyWorkOrderHeader':
                return WorkOrderMobileStatusLibrary.headerMobileStatus(context).then(status => {
                    return status !== completeStatus;
                });
            case '#sap_mobile.MyWorkOrderOperation':
                if (MobileStatusLibrary.isOperationStatusChangeable(context)) {
                    let status = MobileStatusLibrary.getMobileStatus(binding, context);
                    return Promise.resolve(status !== completeStatus);
                } else {
                    //Equinor GAP NGE-131762 starting
                    //On the Operation Details screen the work order header status must not disable the
                    //operation level actions; the operation confirmation status alone decides.
                    if (IsOperationDetailsPage(context)) {
                        return MobileStatusLibrary.isMobileStatusConfirmed(context).then(result => {
                            return !result;
                        });
                    }
                    //Equinor GAP NGE-131762 ending
                    return MobileStatusLibrary.isMobileStatusComplete(context, 'MyWorkOrderHeaders', context.binding.OrderId, '', true).then(status => {
                        if (status) { //already complete so exit
                            return Promise.resolve(false);
                        } else {
                            return MobileStatusLibrary.isMobileStatusConfirmed(context).then(result => {
                                return !result;
                            });
                        }
                    });
                }
            default:
                break;
        }
    }
    //if binding object doesn't exist then doing this from side menu so allow
    return Promise.resolve(true);
}

//Equinor GAP NGE-131762 starting
function IsOperationDetailsPage(context) {
    try {
        return ALLOWED_PAGES.includes(CommonLibrary.getPageName(context));
    } catch (err) {
        return false;
    }
}
//Equinor GAP NGE-131762 ending
