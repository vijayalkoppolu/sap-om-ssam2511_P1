import MeasuringPointFDCIsVisible from '../../../../SAPAssetManager/Rules/Measurements/Points/MeasuringPointFDCIsVisible';
import EnableNotificationEdit from '../../../../SAPAssetManager/Rules/UserAuthorizations/Notifications/EnableNotificationEdit';
//Equinor GAP NGE-131762 starting - use the Operation Details scoped edit rule instead of EnableWorkOrderEdit
import ZEnableWorkOrderEditOnOperationDetails from '../../UserAuthorizations/WorkOrders/ZEnableWorkOrderEditOnOperationDetails';
//Equinor GAP NGE-131762 ending

export default function MeasuringPointsTakeReadingsIsVisible(clientAPI, actionBinding) {

    return MeasuringPointFDCIsVisible(clientAPI, actionBinding).then(isReadingEnabled => {
        if (isReadingEnabled) {
            const binding = actionBinding || clientAPI.getPageProxy().binding || clientAPI.binding;
            const dataType = binding['@odata.type'];

            if (dataType === clientAPI.getGlobalDefinition('/SAPAssetManager/Globals/ODataTypes/Notification.global').getValue()) {
                return EnableNotificationEdit(clientAPI);
            }

            //Equinor GAP NGE-131762 starting
            return ZEnableWorkOrderEditOnOperationDetails(clientAPI, binding).then(isEditEnabled => {
                return isEditEnabled;
            });
            //Equinor GAP NGE-131762 ending
        }

        return false;
    });
}
