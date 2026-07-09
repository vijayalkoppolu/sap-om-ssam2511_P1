import InspectionLotSetUsageQueryOptions from './InspectionLotSetUsageQueryOptions';
import InspectionCodesSortedPickerItems from '../../../InspectionCharacteristics/InspectionCodesSortedPickerItems';
import libCom from '../../../Common/Library/CommonLibrary';
import Logger from '../../../Log/Logger';
export default async function InspectionLotSetUsageInspectionCodesPickerItems(context) {
    const queryOptions = await InspectionLotSetUsageQueryOptions(context);
 //   const udPlanningPlant = context.binding.UDPlant;
 // return InspectionCodesSortedPickerItems(context, queryOptions, udPlanningPlant);
    let binding = context.binding;
   let pageName = libCom.getStateVariable(context, 'FDCPreviousPage');
   try {
       let actionBinding = context.evaluateTargetPathForAPI('#Page:' + pageName).getClientData().ActionBinding;
       if (actionBinding) {
           binding = actionBinding;
        }
    } catch (error) {
        Logger.error('InspectionLotSetUsageInspectionCodesPickerItems pageName does not exist ' + error);
    }

    let udPlanningPlant;
    const inspectionLotId = binding.InspectionLot;
    if (inspectionLotId) {
        const lots = await context.read('/SAPAssetManager/Services/AssetManager.service', 'InspectionLots', [], `$filter=InspectionLot eq '${inspectionLotId}'&$select=UDPlant`);
        if (lots && lots.length > 0) {
            udPlanningPlant = lots.getItem(0).UDPlant;
        }
    }

    return InspectionCodesSortedPickerItems(context, queryOptions, udPlanningPlant);
 
}
