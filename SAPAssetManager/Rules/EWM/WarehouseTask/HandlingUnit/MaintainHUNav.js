import CommonLibrary from '../../../Common/Library/CommonLibrary';

export default function MaintainHUNav(context) {
    const pageProxy = context.getPageProxy();

    pageProxy.setActionBinding({
        ...context.binding, 
        DestinationBin: CommonLibrary.getTargetPathValue(pageProxy, '#Control:WhDestinationBinSimple/#Value'),
    });
    return pageProxy.executeAction('/SAPAssetManager/Actions/EWM/WarehouseTasks/HandlingUnit/HandlingUnitNav.action');
}
