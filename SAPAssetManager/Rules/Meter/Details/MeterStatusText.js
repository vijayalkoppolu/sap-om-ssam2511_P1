import libCom from '../../Common/Library/CommonLibrary';
import Logger from '../../Log/Logger';

export default async function MeterStatusText(context, binding = context.getPageProxy().binding) {
    let device = binding;
    if (binding.Device_Nav) {
        device = binding.Device_Nav;
    }
    const status = device?.Equipment_Nav?.ObjectStatus_Nav?.Status;
    
    if (!status) {
        return '-';
    }
    
    try {
        // Reading directly from SystemStatuses as we are not updating links to SystemStatus_Nav so that requests are not dependent on each other, when sent to the BE
        const systemStatus = await context.read('/SAPAssetManager/Services/AssetManager.service', 'SystemStatuses', ['StatusText'], `$filter=SystemStatus eq '${status}'`);
        return libCom.isDefined(systemStatus) ? systemStatus.getItem(0).StatusText : '-';
    } catch (error) {
        Logger.error('Error in MeterStatusText:', error);
        return '-';
    }
}
