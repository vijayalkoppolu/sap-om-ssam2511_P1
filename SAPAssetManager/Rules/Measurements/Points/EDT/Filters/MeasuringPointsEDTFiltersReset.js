import CommonLibrary from '../../../../Common/Library/CommonLibrary';
import FilterLibrary from '../../../../Filter/FilterLibrary';

export default function MeasuringPointsEDTFiltersReset(controlProxy) {
    const pageProxy = controlProxy.getPageProxy();

    let filters = controlProxy.evaluateTargetPathForAPI('#Page:CreateUpdatePage').getClientData().filters;
    filters.active = {};
    controlProxy.evaluateTargetPathForAPI('#Page:CreateUpdatePage').getClientData().filters = filters;

    controlProxy.setEnabled(false);

    FilterLibrary.setDefaultFilter(pageProxy, true);
    let prtControl = CommonLibrary.getControlProxy(pageProxy, 'FilterPRT');
    prtControl.setValue(false);
}
