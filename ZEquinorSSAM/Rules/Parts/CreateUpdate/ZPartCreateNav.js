/**
* Equinor GAP NGE-131762
*
* Scoped variant of PartCreateNav for the Work Order Operation Details screen only.
*
* Standard SAP rule PartCreateNav ends with a *work order header* completion check
* (libWOStatus.isOrderComplete). For post processing orders the header is complete while the
* operation is still open, so the rule returned an empty string and the Add Part navigation was
* silently cancelled - the user tapped "Add Part" and nothing happened.
*
* This rule is referenced ONLY by the "+" popover item and the Add Part quick action chip of the
* Operation Details page, so the standard PartCreateNav.js stays untouched for every other caller
* (Work Order Details, BOM screens, list views).
*
* @param {IClientAPI} context
*/
import { executeChangeSetAction } from '../../../../SAPAssetManager/Rules/Parts/CreateUpdate/PartCreateNav';
import libCommon from '../../../../SAPAssetManager/Rules/Common/Library/CommonLibrary';
import WorkCenterPlant from '../../../../SAPAssetManager/Rules/Common/Controls/WorkCenterPlantControl';
import assnType from '../../../../SAPAssetManager/Rules/Common/Library/AssignmentType';
import ODataLibrary from '../../../../SAPAssetManager/Rules/OData/ODataLibrary';

export default function ZPartCreateNav(context) {
    let binding = context.binding || {};
    let storageLocation = libCommon.getUserDefaultStorageLocation();
    let isLocal = ODataLibrary.isLocal(context.binding);
    binding.StorageLocation = '';

    if (libCommon.isDefined(storageLocation)) {
        binding.StorageLocation = storageLocation;
    }
    const isValidOdata = isValidODataBinding(context, binding);
    if (isValidOdata) {
        const workcenter = getWorkcenterValue(context);
        binding.Plant = libCommon.getAppParam(context, 'WORKORDER', 'PlanningPlant');
        if (libCommon.isDefined(workcenter)) {
            binding.Plant = workcenter;
        }
        return executeChangeSetAction(context);
    }

    return WorkCenterPlant.getOperationPageDefaultValue(context).then(function(plant) {
        binding.Plant = plant;
        if (!libCommon.isDefined(plant)) {
            binding.Plant = libCommon.getAppParam(context, 'WORKORDER', 'PlanningPlant');
        }
        if (isLocal) {
            return executeChangeSetAction(context);
        }

        //Equinor GAP NGE-131762 starting
        //Standard PartCreateNav ends with a *work order header* completion check:
        //    return libWOStatus.isOrderComplete(context).then(status => {
        //        if (!status) {
        //            return executeChangeSetAction(context);
        //        }
        //        return '';
        //    });
        //For post processing orders the header is complete while the operation is still open, so the
        //rule returned '' and the Add Part navigation was silently cancelled. On the Operation Details
        //screen the visibility is already driven by the operation level rules, so we navigate directly.
        return executeChangeSetAction(context);
        //Equinor GAP NGE-131762 ending
    });
}

function isValidODataBinding(context, binding) {
    return binding && binding['@odata.type'] === context.getGlobalDefinition('/SAPAssetManager/Globals/ODataTypes/BOM.global').getValue();
}

function getWorkcenterValue(context) {
    const assnTypeLevel = libCommon.getWorkOrderAssnTypeLevel(context);
    let workcenter = '';
    if (assnTypeLevel === 'Header') {
        workcenter = assnType.getWorkOrderFieldDefault('WorkOrderHeader', 'WorkCenterPlant');
    } else if (assnTypeLevel === 'Operation') {
        workcenter = assnType.getWorkOrderFieldDefault('WorkOrderOperation', 'WorkCenterPlant');
    } else if (assnTypeLevel === 'SubOperation') {
        workcenter = assnType.getWorkOrderFieldDefault('WorkOrderSubOperation', 'WorkCenterPlant');
    }
    return workcenter;
}
