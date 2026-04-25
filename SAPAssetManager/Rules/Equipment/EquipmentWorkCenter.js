import libCom from '../Common/Library/CommonLibrary';
import {ValueIfExists} from '../Common/Library/Formatter';
import IsOnlineFunctionalLocation from '../FunctionalLocation/IsOnlineFunctionalLocation';

export default async function EquipmentWorkCenter(context) {
    if (context.binding?.['@odata.type'] === '#sap_mobile.Equipment') {
        const workCenterDescr = await libCom.getEntityProperty(context, 'WorkCenters', 'WorkCenterDescr');
        return ValueIfExists(workCenterDescr);
    }

    if (IsOnlineFunctionalLocation(context)) {
        const workCenterDescr = await libCom.getEntityProperty(context, 'WorkCenters', 'WorkCenterDescr');
        return ValueIfExists(workCenterDescr);
    }

    //Look up Work Center Description for offline Functional Location or Equipment
    if (context.binding?.WorkCenter && context.binding?.CRObjectType) {
        const result = await context.read('/SAPAssetManager/Services/AssetManager.service', 'WorkCenters', ['WorkCenterDescr'], "$filter=WorkCenterId eq '" + context.binding.WorkCenter + "' and ObjectType eq '" + context.binding.CRObjectType + "'");
        if (result && result.length > 0) {
            const workCenterDescr = result.getItem(0).WorkCenterDescr;
            return ValueIfExists(workCenterDescr);
        } else {
            return '-';
        }
    }

    return '-';
}
