import libVal from '../Common/Library/ValidationLibrary';
import assnType from '../Common/Library/AssignmentType';

export default function NotificationMainWorkCenterDefaultPkrDefault(context) {
    const binding = context.binding;

    // Direct external ID from FLOC/Equipment WorkCenter_Main_Nav — works even when
    // the work center belongs to an external plant not in the offline WorkCenters store.
    if (!libVal.evalIsEmpty(binding.MainWorkCenterExternal)) {
        return binding.MainWorkCenterExternal;
    }

    let workCenter;
    if (!libVal.evalIsEmpty(binding.MainWorkCenter)) {
        workCenter = binding.MainWorkCenter;
    }

    if (libVal.evalIsEmpty(workCenter)) {
        const controlDefs = assnType.getNotificationAssignmentDefaults();
        workCenter = controlDefs.MainWorkCenter.default || null;
        return workCenter;
    }

    let filterQuery = `$filter=WorkCenterId eq '${workCenter}' and ObjectType eq 'A'`;
    return context.read('/SAPAssetManager/Services/AssetManager.service', 'WorkCenters', [], filterQuery).then(function(result) {
        if (result && result.length > 0) {
            return result.getItem(0).ExternalWorkCenterId;
        }
        return null;
    });
}
