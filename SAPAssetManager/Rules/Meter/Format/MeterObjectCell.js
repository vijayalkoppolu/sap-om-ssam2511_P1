import MeterSectionLibrary from '../Common/MeterSectionLibrary';
import {ValueIfExists as format} from './Formatter';

export default async function MeterObjectCell(context) {
    let property = context.getProperty();
    let device = context.binding;
    if (context.binding.Device_Nav) {
        device = context.binding.Device_Nav;
    }

    let returnValue = '';

    switch (property) {
        case 'Title':
            returnValue = `${device.Device} - ${device.DeviceCategory_Nav.Description}`;
            break;
        case 'Subhead':
            returnValue = `${format(device.DeviceLocation_Nav.Description, '-')}`;
            break;
        case 'Footnote':
            returnValue = `${device.RegisterGroup_Nav.Division} - ${device.RegisterGroup_Nav.Division_Nav.Description}`;
            break;
        case 'StatusText':
            return context.read('/SAPAssetManager/Services/AssetManager.service', 'MyEquipObjectStatuses', [], `$filter=EquipId eq '${context.binding.EquipmentNum}'`).then(result => {
                if (result && result.length > 0) {
                    let equipStatus = result.getItem(0).Status;
                    // Reading directly from SystemStatuses as we are not updating links to SystemStatus_Nav so that requests are not dependent on each other, when sent to the BE
                    return context.read('/SAPAssetManager/Services/AssetManager.service', 'SystemStatuses', ['StatusText'], `$filter=SystemStatus eq '${equipStatus}'`).then(value => {
                        if (value && value.length > 0) {
                            return `${value.getItem(0).StatusText}`;
                        } else {
                            return '-';
                        }
                    });
                }
                return '-';
            });
        case 'SubstatusText':
            returnValue = `${device.DeviceBlocked ? context.localizeText('disconnect') : context.localizeText('connected')}`;
            break;
        case 'AccessoryButtonText':
        case 'AccessoryButtonIcon':
            returnValue = await MeterSectionLibrary.getActionButtonOrIcon(context);
            break;
        case 'Icons':
            returnValue = MeterSectionLibrary.getSectionLeftIcons(context);
            break;
        default:
            break;
    }

    return returnValue;
}
