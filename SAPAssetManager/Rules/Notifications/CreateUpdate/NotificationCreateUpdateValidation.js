import libNotif from '../NotificationLibrary';

export default async function NotificationCreateUpdateValidation(pageClientAPI) {

    if (!pageClientAPI) {
        throw new TypeError('Context can\'t be null or undefined');
    }

    const emergencyOrderType = pageClientAPI.getGlobalDefinition('/SAPAssetManager/Globals/WorkOrder/EmergencyOrderType.global').getValue();
    const isEmergencyOrderTypeExists = await libNotif.validateEmergencyOrderType(pageClientAPI, emergencyOrderType);
    if (!isEmergencyOrderTypeExists) {
        pageClientAPI.executeAction({
            'Name': '/SAPAssetManager/Actions/Common/GenericErrorDialog.action',
            'Properties': {
                'Title': pageClientAPI.localizeText('error'),
                'Message': pageClientAPI.localizeText('emergency_order_type_is_missing', [emergencyOrderType]),
                'OKCaption': pageClientAPI.localizeText('ok'),
            },
        });
        return false;
    }

    //Check field data against business logic here
    //Return true if validation succeeded, or False if failed
    return libNotif.NotificationCreateUpdateValidation(pageClientAPI).then(result => {
        return result;
    });
}
