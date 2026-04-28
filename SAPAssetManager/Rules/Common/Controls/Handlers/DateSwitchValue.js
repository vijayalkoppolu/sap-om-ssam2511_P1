import { handleCacheUpdatedDate } from '../../../Equipment/CreateUpdate/EquipmentCreateUpdateOnCommit';
import CommonLibrary from '../../Library/CommonLibrary';

const switchControlAndCacheVariableMapping = {
    'StartDateSwitch': 'UpdatedTechObjectStartDate',
    'StartDatePicker': 'UpdatedTechObjectStartDate',
    'ManufactureDateSwitch': 'UpdatedTechObjectManufactureDate',
    'ManufactureDatePicker': 'UpdatedTechObjectManufactureDate',
};

export default async function DateSwitchValue(control) {
    if (CommonLibrary.IsOnCreate(control)) {
        return true;
    }

    const pageProxy = control.getPageProxy();
    const controlName = control.getName();
    const stateVariableName = switchControlAndCacheVariableMapping[controlName];

    const object = await pageProxy.read('/SAPAssetManager/Services/AssetManager.service', pageProxy.binding['@odata.readLink'], [], '').then(result => result.getItem(0));
    return handleCacheUpdatedDate(pageProxy, stateVariableName, pageProxy.binding.EquipId || pageProxy.binding.FuncLocIdIntern, object['@sap.hasPendingChanges'], true);
}
