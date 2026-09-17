import libNotif from '../../Notifications/NotificationLibrary';

export default function NotificationCreateMainWorkCenter(context) {
    if (context.binding['@odata.type'] === '#sap_mobile.InspectionCharacteristic') {
        return Promise.resolve({ workCenterId: context.binding.InspectionPoint_Nav?.WOOperation_Nav?.WorkCenterInternalId ?? '', plantId: '' });
    } else {
        return libNotif.NotificationCreateMainWorkCenter(context);
    }
}
