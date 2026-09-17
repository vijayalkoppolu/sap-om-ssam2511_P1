import IsFromOnlineEquipCreate from '../../Common/IsFromOnlineEquipCreate';
import IsFromOnlineFlocCreate from '../../Common/IsFromOnlineFlocCreate';
import ODataLibrary from '../../OData/ODataLibrary';

export default function NotificationMainWorkCenterVisible(context) {
    if (IsFromOnlineEquipCreate(context) || IsFromOnlineFlocCreate(context)) {
        return false;
    }

    const binding = context.binding;
    // For local (pending) notifications with a FLOC, check whether the FLOC exists locally.
    // If not, it was created from an online FLOC — hide WC the same way as during creation.
    // Scoped to local records only to avoid extra DB reads for every synced notification edit.
    if (binding?.['@odata.type'] === '#sap_mobile.MyNotificationHeader'
        && binding.HeaderFunctionLocation
        && ODataLibrary.isLocal(binding)) {
        return context.read('/SAPAssetManager/Services/AssetManager.service', 'MyFunctionalLocations', [],
            `$filter=FuncLocIdIntern eq '${binding.HeaderFunctionLocation}'&$top=1`)
        .then(result => {
            if (result.length === 0) {
                binding.OnlineFloc = true;
            }
            return result.length > 0;
        });
    }

    return true;
}
